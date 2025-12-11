import * as vscode from "vscode";

type PackageJson = {
  dependencies?: Record<string, string>;
  devDependencies?: Record<string, string>;
};

export async function readWorkspacePackageJson(): Promise<PackageJson | null> {
  const workspace = vscode.workspace.workspaceFolders;
  if (!workspace || !workspace.length) {
    return null;
  }

  const pkgUri = vscode.Uri.joinPath(workspace[0].uri, "package.json");

  try {
    const fileBuffer = await vscode.workspace.fs.readFile(pkgUri);
    const contents = Buffer.from(fileBuffer).toString("utf8");
    return JSON.parse(contents) as PackageJson;
  } catch (_error) {
    return null;
  }
}

export function hasClsxDependency(pkgJson: PackageJson | null): boolean {
  if (!pkgJson) {
    return false;
  }
  const deps = pkgJson.dependencies || {};
  const devDeps = pkgJson.devDependencies || {};
  return Boolean(deps.clsx || devDeps.clsx);
}

async function fileExistsInWorkspace(fileName: string): Promise<boolean> {
  const workspace = vscode.workspace.workspaceFolders;
  if (!workspace || !workspace.length) {
    return false;
  }
  const uri = vscode.Uri.joinPath(workspace[0].uri, fileName);
  try {
    await vscode.workspace.fs.stat(uri);
    return true;
  } catch (_error) {
    return false;
  }
}

export async function detectPackageManager(): Promise<string> {
  if (await fileExistsInWorkspace("pnpm-lock.yaml")) {
    return "pnpm add clsx";
  }
  if (await fileExistsInWorkspace("yarn.lock")) {
    return "yarn add clsx";
  }
  if (await fileExistsInWorkspace("bun.lockb") || await fileExistsInWorkspace("bun.lock")) {
    return "bun add clsx";
  }
  return "npm install clsx";
}

export async function promptForClsxInstallation(): Promise<void> {
  const pkgJson = await readWorkspacePackageJson();
  if (hasClsxDependency(pkgJson)) {
    return;
  }

  const installCommand = await detectPackageManager();
  const selection = await vscode.window.showInformationMessage<string>(
    "Windly: clsx isn't found in this workspace. Install it so JSX formatting works?",
    "Install clsx",
    "Ignore"
  );

  if (selection === "Install clsx") {
    const terminal = vscode.window.createTerminal("Windly: install clsx");
    terminal.show();
    terminal.sendText(installCommand);
    vscode.window.showInformationMessage(
      `Windly: Ran "${installCommand}". Re-run the formatter once install completes.`
    );
  }
}
