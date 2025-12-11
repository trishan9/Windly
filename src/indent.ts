import * as vscode from "vscode";

export function detectIndent(editor: vscode.TextEditor, selection: vscode.Selection): string {
  try {
    const lineText = editor.document.lineAt(selection.start.line).text;
    const match = lineText.match(/^\s*/);
    return match ? match[0] : "";
  } catch (_error) {
    return "";
  }
}

export function deriveIndent(rawText: string, matchIndex: number, defaultIndent: string): string {
  const lastNewline = rawText.lastIndexOf("\n", matchIndex);
  if (lastNewline === -1) {
    return defaultIndent;
  }

  const lineStart = lastNewline + 1;
  const linePrefix = rawText.slice(lineStart, matchIndex);
  const match = linePrefix.match(/^\s*/);
  const localIndent = match ? match[0] : "";
  return localIndent || defaultIndent;
}
