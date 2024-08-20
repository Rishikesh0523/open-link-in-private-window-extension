# Open Link in Private Window

## Overview

**Open Link in Private Window** is a Chrome extension that allows you to open links in a new incognito window with a simple keyboard shortcut: `Ctrl + Shift + Left Click`. This can be particularly useful for maintaining privacy or testing how a page looks without cookies and cache.

## Features

- **Keyboard Shortcut:** Open any link in a new incognito window by pressing `Ctrl + Shift` and left-clicking on the link.
- **Options Page:** Configure extension settings and manage logging through the options page.
- **Popup Interface:** Access the options page directly from the extension's popup.

## Installation

1. Download or clone this repository.
2. Go to `chrome://extensions/` in your Chrome browser.
3. Enable "Developer mode" using the toggle in the upper right corner.
4. Click "Load unpacked" and select the folder containing the extension files.

## Usage

1. Navigate to a webpage with links.
2. Hold `Ctrl + Shift` and left-click on any link to open it in a new incognito window.

## Options

- **Enable Logging:** Toggle detailed logging to help with debugging or monitoring extension behavior.

## File Structure

- **`manifest.json`**: Metadata and configuration for the Chrome extension.
- **`background.js`**: Handles opening links in incognito windows.
- **`content.js`**: Listens for the `Ctrl + Shift + Left Click` event and sends the URL to the background script.
- **`options.html`**: Provides a user interface for extension settings.
- **`options.js`**: Manages saving and loading of options from storage.
- **`popup.html`**: Provides a popup interface when clicking the extension icon.
- **`popup.js`**: Handles interactions in the popup interface.
- **`images/`**: Contains the icons used for the extension.

## Contributing

If you'd like to contribute to this project, please fork the repository and submit a pull request. Ensure that your changes are well-documented and tested.

## Contact

For any questions or issues, please open an issue in the GitHub repository.

---

Thank you for using **Open Link in Private Window**!
