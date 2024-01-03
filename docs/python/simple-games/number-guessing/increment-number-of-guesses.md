---
sidebar_position: 9
slug: /python/simple-games/number-guessing/increment-number-of-guesses
---

# Increment the Number of Guesses

To track how many attempts the user takes to guess the right number, you must increment the  `number_of_guesses` counter every time the user makes a guess (valid or invalid), and the program goes back to prompt for another guess.

## Hands-On Coding

1. Place your cursor under the `print("Please enter a valid number.")` line. This line is placed within the outer `while` loop but outside the inner loop. It's executed after the inner loop concludes, which happens once a valid input is received.
2. Increment the `number_of_guesses` counter using `number_of_guesses += 1`. This is a shorthand for `number_of_guesses = number_of_guesses + 1`.
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
        else:
          print(f"Congratulations! You guessed it right in {number_of_guesses} guesses!")
    
    guess_number()
    ```
6. Save your changes by pressing `Ctrl + S` (Windows) or `Cmd + S` (macOS).