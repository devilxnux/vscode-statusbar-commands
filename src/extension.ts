import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  const initializeStatusBarCommands = () => {
    context.subscriptions.forEach((subscription) => subscription.dispose());

    const alignmentSetting = vscode.workspace.getConfiguration('statusbarCommands').get<string>('alignment', 'Right');

    const statusBarAlignment =
      alignmentSetting === 'Left' ? vscode.StatusBarAlignment.Left : vscode.StatusBarAlignment.Right;

    const commands = vscode.workspace.getConfiguration('statusbarCommands').get<
      {
        statusBarText: string;
        command: string;
        tooltipText: string;
        color: string;
      }[]
    >('commands', []);
    const showError = vscode.workspace
      .getConfiguration('statusbarCommands')
      .get<boolean>('showErrorWhenNoCommands', true);

    if (commands && commands.length > 0) {
      commands.forEach((cmd, index) => {
        const statusBarItem = vscode.window.createStatusBarItem(statusBarAlignment);
        statusBarItem.text = cmd.statusBarText;
        statusBarItem.command = `statusbar-commands.runUserCommand${index}`;
        statusBarItem.tooltip = cmd.tooltipText;

        if (cmd.color) {
          statusBarItem.color = cmd.color;
        }

        statusBarItem.show();

        const disposable = vscode.commands.registerCommand(`statusbar-commands.runUserCommand${index}`, async () => {
          await vscode.commands.executeCommand(cmd.command);
        });

        context.subscriptions.push(statusBarItem);
        context.subscriptions.push(disposable);
      });
    } else if (showError) {
      vscode.window
        .showErrorMessage('No commands defined in settings.', 'Configure Now', "Don't Show Again")
        .then((selection) => {
          if (selection === 'Configure Now') {
            vscode.commands.executeCommand('workbench.action.openSettings', 'statusbarCommands.commands');
          } else if (selection === "Don't Show Again") {
            vscode.commands.executeCommand(
              'workbench.action.openSettings',
              'statusbarCommands.showErrorWhenNoCommands'
            );
          }
        });
    }
  };

  initializeStatusBarCommands();

  let configChangeTimeout: NodeJS.Timeout | undefined;

  vscode.workspace.onDidChangeConfiguration((event) => {
    if (
      event.affectsConfiguration('statusbarCommands.commands') ||
      event.affectsConfiguration('statusbarCommands.showErrorWhenNoCommands') ||
      event.affectsConfiguration('statusbarCommands.alignment')
    ) {
      if (configChangeTimeout) {
        clearTimeout(configChangeTimeout);
      }

      configChangeTimeout = setTimeout(() => {
        initializeStatusBarCommands();
      }, 300);
    }
  });
}

export function deactivate() {}
