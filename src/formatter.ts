import { CLASS_TOKEN_THRESHOLD, CLASS_LENGTH_THRESHOLD, CATEGORY_ORDER, type CategoryId } from "./config";
import { classifyToken, tokenWeight, splitTokens, looksLikeClassString } from "./tokens";
import { deriveIndent } from "./indent";

type FormatResult = { replacement: string; usedClsx: boolean };
type AttributeResult = { replacement: string | null; usedClsx: boolean };

function shouldFormat(classBody: string, tokens: string[]): boolean {
  return tokens.length >= CLASS_TOKEN_THRESHOLD || classBody.length >= CLASS_LENGTH_THRESHOLD;
}

export function groupTokens(raw: string): Map<CategoryId, string[]> {
  const tokens = splitTokens(raw);
  const seen = new Set<string>();
  const groups = new Map<CategoryId, string[]>();

  for (const token of tokens) {
    if (seen.has(token)) {
      continue;
    }
    seen.add(token);

    const bucket = classifyToken(token);
    if (!groups.has(bucket)) {
      groups.set(bucket, []);
    }
    groups.get(bucket)!.push(token);
  }

  for (const [categoryId, groupTokensList] of groups.entries()) {
    groupTokensList.sort((a, b) => {
      const weightA = tokenWeight(categoryId, a);
      const weightB = tokenWeight(categoryId, b);
      if (weightA !== weightB) {
        return weightA - weightB;
      }
      return a.localeCompare(b);
    });
    groups.set(categoryId, groupTokensList);
  }

  return groups;
}

export function formatGroupsForClsx(groups: Map<CategoryId, string[]>, indent: string): string {
  const lines: string[] = [];
  for (const category of CATEGORY_ORDER) {
    const tokens = groups.get(category.id);
    if (tokens && tokens.length) {
      lines.push(`${indent}  "${tokens.join(" ")}",`);
    }
  }
  if (!lines.length) {
    return "clsx()";
  }
  return `clsx(\n${lines.join("\n")}\n${indent})`;
}

export function formatGroupsForMultiline(groups: Map<CategoryId, string[]>, indent: string): string {
  const innerIndent = `${indent}  `;
  const lines: string[] = [];
  for (const category of CATEGORY_ORDER) {
    const tokens = groups.get(category.id);
    if (tokens && tokens.length) {
      lines.push(`${innerIndent}${tokens.join(" ")}`);
    }
  }
  if (!lines.length) {
    return "";
  }
  return `\n${lines.join("\n")}\n${indent}`;
}

function shouldUseClsx(attrName: string | undefined, preferClsxWrapper: boolean): boolean {
  if (!attrName) {
    return false;
  }
  if (attrName === "className") {
    return true;
  }
  return preferClsxWrapper && attrName === "class";
}

function hasAnyGroups(groups: Map<CategoryId, string[]>): boolean {
  for (const category of CATEGORY_ORDER) {
    const tokens = groups.get(category.id);
    if (tokens && tokens.length) {
      return true;
    }
  }
  return false;
}

export function formatAttribute(
  attrName: string,
  quote: string,
  classBody: string,
  indent: string,
  preferClsxWrapper: boolean
): AttributeResult {
  const tokens = splitTokens(classBody);
  if (!shouldFormat(classBody, tokens)) {
    return { replacement: null, usedClsx: false };
  }

  const grouped = groupTokens(classBody);
  if (!hasAnyGroups(grouped)) {
    return { replacement: null, usedClsx: false };
  }

  const useClsx = shouldUseClsx(attrName, preferClsxWrapper);
  const formatted = useClsx
    ? formatGroupsForClsx(grouped, indent)
    : formatGroupsForMultiline(grouped, indent);

  const replacement = useClsx
    ? `${attrName}={${formatted}}`
    : `${attrName}=${quote}${formatted}${quote}`;

  return { replacement, usedClsx: useClsx };
}

export function formatStandalone(rawText: string, indent: string): FormatResult {
  const tokens = splitTokens(rawText);
  if (!shouldFormat(rawText, tokens)) {
    return { replacement: rawText, usedClsx: false };
  }

  const grouped = groupTokens(rawText);
  if (!hasAnyGroups(grouped)) {
    return { replacement: rawText, usedClsx: false };
  }

  const replacement = formatGroupsForMultiline(grouped, indent);
  return { replacement, usedClsx: false };
}

export function formatSelection(
  rawText: string,
  indent: string,
  preferClsxWrapper: boolean
): FormatResult {
  let usedClsx = false;
  let matchedAny = false;

  let formattedText = rawText.replace(
    /(class(Name)?)(\s*=\s*)(["'`])([\s\S]*?)(\4)/g,
    (full, attrName: string, _group2: string, _eq: string, quote: string, classBody: string, _closing: string, offset: number) => {
      matchedAny = true;
      const localIndent = deriveIndent(rawText, offset, indent);
      const { replacement, usedClsx: attrUsedClsx } = formatAttribute(
        attrName,
        quote,
        classBody,
        localIndent,
        preferClsxWrapper
      );

      if (replacement) {
        usedClsx = usedClsx || attrUsedClsx;
        return replacement;
      }

      return full;
    }
  );

  formattedText = formattedText.replace(
    /(class(Name)?)\s*=\s*{([\s\S]*?)}/g,
    (full, attrName: string, _group2: string, value: string, offset: number) => {
      matchedAny = true;
      const localIndent = deriveIndent(rawText, offset, indent);
      const trimmed = value.trim();

      if (trimmed.includes("clsx(")) {
        usedClsx = true;
        return full;
      }

      const stringMatch = trimmed.match(/^(['"`])([\s\S]*?)(\1)$/);
      if (!stringMatch) {
        return full;
      }

      const quote = stringMatch[1];
      const classBody = stringMatch[2];

      const { replacement, usedClsx: attrUsedClsx } = formatAttribute(
        attrName,
        quote,
        classBody,
        localIndent,
        preferClsxWrapper
      );

      if (replacement) {
        usedClsx = usedClsx || attrUsedClsx;
        return replacement;
      }

      return full;
    }
  );

  if (matchedAny) {
    return { replacement: formattedText, usedClsx };
  }

  if (rawText.includes("clsx(")) {
    return { replacement: rawText, usedClsx: true };
  }

  const tokens = splitTokens(rawText);
  if (looksLikeClassString(rawText) && shouldFormat(rawText, tokens)) {
    return formatStandalone(rawText, indent);
  }

  return { replacement: rawText, usedClsx: false };
}
