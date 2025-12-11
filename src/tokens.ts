import { CATEGORY_ORDER, CATEGORY_RULES, SORT_RULES, type CategoryId } from "./config";

export function baseClass(token: string): string {
  if (!token.includes(":")) {
    return token;
  }
  const parts = token.split(":");
  return parts[parts.length - 1];
}

export function tokenWeight(categoryId: CategoryId, token: string): number {
  const rules = SORT_RULES[categoryId] ?? [];
  const base = baseClass(token);
  const index = rules.findIndex((regex) => regex.test(base));
  if (index === -1) {
    return rules.length + 1;
  }
  return index;
}

export function classifyToken(token: string): CategoryId {
  const base = baseClass(token);

  for (const category of CATEGORY_ORDER) {
    const regexes = CATEGORY_RULES[category.id] || [];
    const matches = regexes.some((regex) => regex.test(base));
    if (matches) {
      return category.id;
    }
  }

  return "other";
}

export function splitTokens(raw: string): string[] {
  return raw
    .replace(/\s+/g, " ")
    .trim()
    .split(" ")
    .filter(Boolean);
}

export function looksLikeClassString(rawText: string): boolean {
  // Heuristic: only whitespace and Tailwind-ish token characters.
  // Reject if we see obvious code punctuation. This logic could be made better than this.
  const disallowed = /[;=(){}[\]|<>]/;
  if (disallowed.test(rawText)) {
    return false;
  }
  const allowed = /^[\s\w-:.%/'"`]+$/;
  return allowed.test(rawText);
}
