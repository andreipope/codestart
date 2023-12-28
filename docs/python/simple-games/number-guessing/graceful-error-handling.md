---
sidebar_position: 11
slug: /python/simple-games/number-guessing/graceful-error-handling
description: Graceful error handling of user inputs.
---

# Graceful Error Handling

Whenever the user enters a value that cannot be converted into an integer by the `int` function, the `except ValueError` block is executed. This typically occurs when the user enters non-numeric characters. The purpose of catching this error is to prevent the program from crashing and to provide user-friendly feedback, guiding them to input a valid number. This makes the program more robust and user-interactive, ensuring it can handle unexpected or erroneous input gracefully.

Below is a breakdown of why and when this happens:

1. **User Inputs a Non-numeric Value:**
   - The `input()` function captures user input as a string. This input is then passed to the `int` function, which attempts to convert it to an integer.
   - If the user enters anything other than a valid integer (e.g., letters, symbols, or a number with decimal points), the `int` function will fail to convert it and raise a `ValueError`.

2. **Catching the ValueError:**
   - The `try` block is specifically looking for this kind of error during its execution. When a `ValueError` exceptio  is raised, the normal flow of the program is interrupted, and control is immediately transferred to the `except ValueError` block.

3. **Executing the Except Block:**
   - Once in the `except ValueError` block, the program executes the print statement `print("Please enter a valid number.")`. This informs the user that their input was invalid and prompts them to enter a valid integer.

## Hands-On Coding

1. Place your cursor under the `except ValueError:` line.
2. In the `except ValueError` block, call the `print` function passing it the "Please enter a valid number." string as a parameter. This informs the user that their input was invalid and prompts them to enter a valid integer.
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

    guess_number()
    ```
6. Save your changes by pressing `Ctrl + S` (Windows) or `Cmd + S` (macOS).