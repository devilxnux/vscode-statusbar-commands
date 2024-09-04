# VSCode Statusbar Commands

This VSCode extension allows you to add custom commands to the VSCode status bar for quick and easy access.

## Features

- Add custom commands to the status bar with user-defined icons.
- Hover tooltips display the name of the command.
- Automatically refreshes status bar items when configuration changes.
- Option to show an error message when no commands are configured, with a prompt to configure them.

### Demo

![Demo Gif](https://github.com/kentayamada-dev/vscode-statusbar-commands/raw/main/assets/demo.gif)

## Requirements

This extension does not have any additional dependencies. It requires Visual Studio Code version 1.71.0 or higher.

## Extension Settings

This extension contributes the following settings:

* `statusbarCommands.commands`: An array of commands to add to the status bar. Each command includes:
  * `icon`: The icon to display in the status bar item (e.g., 'light-bulb', 'thumbsup', 'zap').
  The icon name is taken from [here](https://code.visualstudio.com/api/references/icons-in-labels#icon-listing).
  * `command`: The ID of the VS Code command to run.
  * `name`: The name of the command, which appears as a tooltip when hovering over the status bar icon.

* `statusbarCommands.showErrorWhenNoCommands`: A boolean setting to show an error message when no commands are defined. Default is `true`.

## Known Issues

- No issues have been reported yet. Please report any issues you encounter via the [GitHub issues page](https://github.com/kentayamada-dev/vscode-statusbar-commands/issues).

## Release Notes

### 1.0.0

Initial release of VSCode Statusbar Commands, featuring the ability to add custom commands to the status bar with user-defined icons and tooltips.

---
