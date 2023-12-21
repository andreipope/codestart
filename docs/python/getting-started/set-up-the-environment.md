---
sidebar_position: 1
slug: /python/getting-started/set-up-the-environment
description: Install Python and the VS Code text editor.
---

# Set Up the Environment

This section will guide you through the installation of Python and the VS Code text editor on both Windows and Mac. Additionally, it will explain how to validate each installation.

## Install Python

## On Windows

### Download the Python Installer

1. Visit the official Python website at [python.org](https://www.python.org/downloads/).
2. Download the latest version of Python for Windows.

### Run the Installer

1. Run the downloaded file and follow the prompts.
2. Ensure to select "Add Python to PATH" before clicking "Install Now."

### Validate the Installation

1. Open Command Prompt and type `python --version`.
2. If the installation was successful, Python's version number will be displayed.


## On Mac

### Download the Python Installer

1. Visit the official Python website at [python.org](https://www.python.org/downloads/).
2. Download the latest version of Python for Mac.

### Run the Installer

2. Run the installer and follow the prompts.

### Validate the Installation:

1. In a terminal, type `python3 --version` to check the installed version. The output should be similar to the following one:
    ```
    Python 3.9.10
    ```


## Install a Text Editor

A text editor is essential for writing and managing your code. Visual Studio Code (VS Code) is a popular, free, and feature-rich editor.


### Download VS Code

1. Visit the [Visual Studio Code website](https://code.visualstudio.com/).
2. Download the version appropriate for your operating system.

### Install VS Code

1. Run the downloaded installer.
2. Follow the installation prompts.

### Validate the Installation

1. Find the VS Code application on your computer. It's typically located in the Applications folder on macOS or in the Start menu on Windows.
2. Double-click the VS Code application icon to open it.
3. Once you have VS Code open, go to the menu bar at the top and select `File` > `New File`. 
4. In the save dialog, navigate to the directory where you want to save your file.
5. Name your file `test.py`. Make sure to include the `.py` extension, which specifies that it's a Python file.
6. In the open `test.py` file, paste the following `print` statement:
    ```py
    print("Hello, world!")
    ```
7. Press `Ctrl + S` on Windows or `Cmd + S` on macOS to save the file.
8. Select the `Save` button.
9. Open the integrated terminal in VS Code using `Ctrl+`` or `Cmd+``
10. In the terminal, type `python3 test.py` to run your Python code. If VS Code is correctly installed and configured with Python, you should see "Hello, world!" printed in the terminal.