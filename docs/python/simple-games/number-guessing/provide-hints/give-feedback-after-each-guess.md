---
sidebar_position: 3
slug: /python/simple-games/number-guessing/give-feedback-after-each guess
description: Give feedback after each guess.
---

# Give Feedback After Each Guess

To compare the user's guess to the randomly generated number and provide appropriate feedback based on whether the guess is too low, too high, or correct, you'll use an `if-else` block.

## Hands-On Coding

1. Place your cursor within the outer `while` loop, after the inner loop that validates the input.
2. Write an `if` statement to check if `guess` is lower than `number_to_guess`:
    ```python
    if guess < number_to_guess
    ```
3. Indent the next line and call the `print` function passing it "Too low!" as a parameter to display a message for the scenario in which the number is too low:
    ```python
    print("Too low!")
    ```
4. Write an `elif` statement to handle the case where the guess is greater than the number to guess:
    ```python
    elif guess > number_to_guess:
    ```
5. Add an indented line that calling the `print` function` passing it "Too high!" as a parameter to display a message for the scenario in which the number is too high:
    ```python
    print("Too low!")
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
            guess = int(input("Guess a number between 1 and 100: "))
            if 1 <= guess <= 100:
              break
            else:
              print("Your guess must be between 1 and 100.")
          except ValueError:
            print("Please enter a valid number.")
      number_of_guesses += 1
      if guess < number_to_guess:
        print("Too low!")
      elif guess > number_to_guess:
        print("Too high!")
    guess_number()
    ```
6. Save your changes by pressing `Ctrl + S` (Windows) or `Cmd + S` (macOS).