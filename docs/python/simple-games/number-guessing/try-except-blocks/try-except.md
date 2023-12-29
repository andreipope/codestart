---
sidebar_position: 1
slug: /python/simple-games/number-guessing/try-except
description: Use Try-Except blocks to handle user input.
---

# Try-Except Blocks

The Try-Except blocks in Python are used for handling exceptions (errors) that can occur during program execution. The basic syntax is as follows:

```python
try:
    # code that might raise an exception
except SomeException:
    # code that runs if the exception occurs
```

- **`try` block**: This block contains the code that might raise an exception. Python will execute this code normally until an exception occurs.
- **`except` block**: If an exception is raised in the t`ry block, Python stops executing that block and runs the code in the except block. `SomeException` is the name of the specific exception you're trying to catch.

## Hands-On Coding

1. Place your cursor below the `while True:` line in the `guess_number` function.
2.Start the `try` block by typing the `try` keyword followed by a colon(`:`). Ensure you indent this line.
    ```python
    try:
    ```
1. On the next line, add an `except` block that catches an error named `ValueError`:
    ```python
    except ValueError:
    ```
      The `number-guessing.py` file should look like this:
    ```python
    import random

    def guess_number():
      number_to_guess = random.randint(1, 100)
      guess = None
      number_of_guesses = 0
      while guess != number_to_guess:
        while True:
          try:
          except ValueError:

    guess_number()
    ```
2. Save your changes by pressing `Ctrl + S` (Windows) or `Cmd + S` (macOS).