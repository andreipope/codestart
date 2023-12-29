---
sidebar_position: 1
slug: /python/simple-games/number-guessing/while-loops
description: Understand and implement `while` loops.
---

# While Loops

A `while` loop in Python allows for repeated execution of a block of code as long as a specified condition is true. It's commonly used when the number of iterations is not known in advance.

**Syntax of a `while` loop:**
```python
while condition:
    # Code to execute repeatedly
```

- **condition**: This is a boolean expression that determines whether the loop continues or stops. If it's true, the loop runs again. If it's false, the loop stops.
- **Code to execute repeatedly**: These are the statements that are executed with each iteration of the loop.

**Example:**
```python
count = 0
while count < 5:
    print("Count is:", count)
    count += 1  # Increment count
```
In this example, the loop will repeatedly print the `count` variable and then increment it by 1 until count is no longer less than 5.

## Prompt the Player for a Guess

In the number guessing game, you'll use a `while` loop to continually prompt the player for a guess until the correct number is guessed. It makes the game interactive by allowing multiple attempts and providing feedback based on the player's input.

## Hands-On Coding

1. Place your cursor below the `number_of_guesses = 0` line in the `guess_number` function.
2. Write a `while` loop with the condition that it should continue as long as the player's guess is not equal to the number to guess:
    ```python
    while guess != number_to_guess:
    ```
    The `number-guessing.py` file should look like this:
    ```python
    import random

    def guess_number():
      number_to_guess = random.randint(1, 100)
      guess = None
      number_of_guesses = 0
      while guess != number_to_guess:

    guess_number()
    ```
3. Save your changes by pressing `Ctrl + S` (Windows) or `Cmd + S` (macOS).