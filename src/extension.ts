import * as vscode from "vscode";
import { SUPPORTED_LANGUAGE_IDS } from "./config";
import { detectIndent } from "./indent";
import { formatSelection } from "./formatter";
import { getPreferClsxWrapper } from "./settings";
import { promptForClsxInstallation } from "./deps";

export function activate(context: vscode.ExtensionContext): void {
  const disposable = vscode.commands.registerCommand("windly.groupClasses", async () => {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
      vscode.window.showErrorMessage("Windly: No active editor found.");
      return;
    }

    const languageId = editor.document.languageId;
    if (!SUPPORTED_LANGUAGE_IDS.has(languageId)) {
      vscode.window.showInformationMessage(
        `Windly: Skipping - language "${languageId}" is not supported.`
      );
      return;
    }

    const preferClsxWrapper = getPreferClsxWrapper();

    let clsxUsed = false;
    let processedSelections = 0;

    await editor.edit((editBuilder) => {
      for (const selection of editor.selections) {
        if (selection.isEmpty) {
          continue;
        }

        processedSelections += 1;

        try {
          const text = editor.document.getText(selection);
          const indent = detectIndent(editor, selection);
          const { replacement, usedClsx } = formatSelection(text, indent, preferClsxWrapper);

          clsxUsed = clsxUsed || usedClsx;
          editBuilder.replace(selection, replacement);
        } catch (error) {
          const message = error instanceof Error ? error.message : String(error);
          vscode.window.showErrorMessage(`Windly: Unable to format selection. ${message}`);
        }
      }
    });

    if (!processedSelections) {
      vscode.window.showInformationMessage(
        "Windly: Select a Tailwind class string or class attribute to format."
      );
    } else if (clsxUsed) {
      await promptForClsxInstallation();
    }
  });

  context.subscriptions.push(disposable);
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
export function deactivate(): void {}
