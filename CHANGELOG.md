# Changelog
## [1.0.0] - 2024-09-04
### Added
- Initial release of the VSCode Statusbar Commands extension.
- Added ability to define custom commands that appear in the status bar using the `statusbarCommands.commands` configuration.
- Displayed icons for commands in the status bar based on user-defined settings.
- Tooltip support for status bar items, showing the name of the command.
- Automatically re-initializes status bar commands when the configuration changes.
- Added error handling with a configurable option (`statusbarCommands.showErrorWhenNoCommands`) to show an error message when no commands are defined.
- Provided a prompt for users to configure commands or disable error messages directly from the error dialog.
