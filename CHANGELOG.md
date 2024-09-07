# Changelog

## [1.1.1] - 2024-09-06

### Changed

- **Debounced Configuration Changes**: Implemented debouncing for configuration changes to prevent multiple rapid reinitializations of the status bar commands when the user updates settings frequently. This optimizes performance and avoids unnecessary reloading.

## [1.1.0] - 2024-09-06

### Added

- **Customizable Icon Colors**: Users can now customize the color of icons in the status bar using the `color` property in the `statusbarCommands.commands` configuration.
  - Supports any valid CSS color (e.g., `#ff0000`, `red`).
  - Enhances the ability to personalize the appearance of status bar items.
- **Improved Flexibility**: Expanded configuration options to further enhance the customization and user experience of the extension.

## [1.0.0] - 2024-09-04

### Added

- **Initial Release**: First version of the VSCode Statusbar Commands extension.
- **Custom Status Bar Commands**: Ability to define custom commands that appear in the status bar via the `statusbarCommands.commands` configuration.
- **Icon Display**: Displays user-defined icons for commands in the status bar.
- **Tooltips**: Tooltip support showing the command's name when hovering over the status bar item.
- **Auto-reinitialize**: Automatically re-initializes status bar commands when configuration changes are detected.
- **Error Handling**: Configurable option (`statusbarCommands.showErrorWhenNoCommands`) to display an error message if no commands are defined.
- **User Prompt**: Provides a prompt for users to configure commands or disable error messages directly from the error dialog.
