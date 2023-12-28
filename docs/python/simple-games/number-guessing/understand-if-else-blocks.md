---
sidebar_position: 10
slug: /python/simple-games/number-guessing/undestand-if-else-blocks
description: Understand if-else blocks.
---

# Understand if-else Blocks

In Python, `if-else` blocks are a fundamental control structure that allows your program to execute certain code segments based on specific conditions. These blocks help in decision-making processes within your application.

## General Structure of If-Else Blocks

The structure of an `if-else` block in Python is as follows:

```python
if condition:
    # Code to execute if condition is true
else:
    # Code to execute if condition is false

```

- `if condition`: This line checks whether the condition is `true`. Conditions are typically comparisons or boolean expressions. If the condition is `true`, the indented code right after the if statement runs.
- `else`: This is followed by an indented block that runs if the condition in the if statement is `false`.

## Hands-On Coding

1. Place your cursor under the line that reads the user's input.
2. Write an `if` statement to check if the guess is within the specified range (1 to 100). Make sure this line is indented properly within the loop.
    ```python
    if 1 <= guess <= 100:
    ```
3. Below the `if` statement (and indented to align with its block), add a `break` statement. The `break` statement is used here to exit the `while` loop when the user inputs a valid number within the range.
4. Write an `else` statement aligned with the `if` statement to handle cases where the guess is not within the specified range.
5. Inside the `else` block, call the `print` function passing it the "Your guess must be between 1 and 100." string. This will execute if the guess is outside the specified range. Indent this line properly under the `else` block.
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
            guess = int(input("Guess a number between 1 and 100: "))
            if 1 <= guess <= 100:
              break
            else:
              print("Your guess must be between 1 and 100.")
          except ValueError:

    guess_number()
    ```
6. Save your changes by pressing `Ctrl + S` (Windows) or `Cmd + S` (macOS).