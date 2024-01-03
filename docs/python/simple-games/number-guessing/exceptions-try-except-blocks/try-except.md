---
sidebar_position: 2
slug: /python/simple-games/number-guessing/try-except-blocks
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
- **`except` block**: If an exception is raised in the `try` block, Python stops executing that block and runs the code in the except block. `SomeException` is the name of the specific exception you're trying to catch.


Inside the inner `while` loop, the code attempts to cast the user input (from the `input` function) to an integer:

```python
int(input("Guess a number between 1 and 100: "))
```

This function raises a `ValueError` exception if the user enters an invalid integer, such as letters or special characters. To handle this, you must wrap the line above in a try-except block, ensuring your except block catches the `ValueError` exception and prints an error message. The purpose of catching this error is to prevent the program from crashing and to provide user-friendly feedback, guiding them to input a valid number. This makes the program more robust and user-interactive, ensuring it can handle unexpected or erroneous input gracefully.

## Hands-On Coding

1. Place your cursor below the `while True:` line in the `guess_number` function.
2.Start the `try` block by typing the `try` keyword followed by a colon(`:`). Ensure you indent this line.
    ```python
    try:
    ```
3. Move the `int(input("Guess a number between 1 and 100: "))` line inside of the `try` block, ensuring it's intended.
4. On the next line, add an `except` block that catches an error named `ValueError`:
    ```python
    except ValueError:
    ```
5. Inside of the `except` block, on a new intedned line, call the `print` function, passing it "Please enter a valid number." as a parameter.
    ```python
    print("Please enter a valid number.")
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
            int(input("Guess a number between 1 and 100: "))
          except ValueError:
            print("Please enter a valid number.")

    guess_number()
    ```
6. Save your changes by pressing `Ctrl + S` (Windows) or `Cmd + S` (macOS).


