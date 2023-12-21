---
sidebar_position: 3
slug: /python/getting-started/basic-syntax/
description: Print statements, comments, syntax rules.
---

# Basic Syntax

This chapter introduces the core elements of Python syntax, including print statements, comments, and other basic syntactical features. Understanding these concepts is key to writing and comprehending Python code.

## Print Statements

The `print()` function in Python is used to output data to the console. It is one of the most commonly used functions for displaying results, debugging, and basic output operations.

**Example:**
```python
print("Hello, World!")
```
- This code prints the text `Hello, World!` to the console.
- Anything inside the parentheses of `print()` is output to the screen.

### Comments

Comments are used to explain Python code and make it more readable. They are ignored by Python and do not affect the execution of the code.

### Single-line Comments:

- Begin with a `#` symbol.
- Python ignores everything after `#` on that line.

**Example:**
```python
# This is a single-line comment
print("Hello, World!")  # This comment is after a statement
```

### Multi-line Comments:

Python doesn't have a distinct way to define multi-line comments. However, you can use a string with triple quotes (`'''` or `"""`) as a makeshift multi-line comment, even though it's technically a multi-line string.

**Example:**
```python
'''
This is a multi-line comment
It can span multiple lines
'''
print("Multi-line comments example")
```

### Basic Syntax Rules

Python's syntax is clean and readable, making it an excellent choice for beginners. Here are some fundamental aspects:

- **Indentation:** Unlike other programming languages that use braces to define blocks of code, Python uses indentation.

    **Example:**
    ```python
    if True:
        print("This statement is true")
    ```
    In this example, the `print()` statement is indented under the `if` statement and is part of its code block.

- **Variables:** Variables are assigned using a single equals sign (`=`).

    **Example:**
    ```python
    x = 10
    y = "Python"
    ```
    In this example, `x` is a variable holding an integer value, while `y` is a variable holding a string.

- **Case Sensitivity:** Python is case-sensitive. For example, `variable`, `Variable`, and `VARIABLE` are three different identifiers.

