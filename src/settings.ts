import * as vscode from "vscode";

export function getPreferClsxWrapper(): boolean {
  const windlyConfig = vscode.workspace.getConfiguration("windly");
  const windlyValue = windlyConfig.get<boolean>("preferClsxWrapper");
  if (typeof windlyValue === "boolean") {
    return windlyValue;
  }

  // Legacy support for previous configuration namespace.
  const legacyValue = vscode.workspace.getConfiguration("twSense").get<boolean>("preferClsxWrapper");
  if (typeof legacyValue === "boolean") {
    return legacyValue;
  }

  return true;
}
