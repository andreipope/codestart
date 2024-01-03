---
sidebar_position: 2
slug: /python/simple-games/number-guessing/inner-loops
---

# The Inner Loop

The inner loop is used to repeatedly ask the user for a valid number until they provide one that fits within the rules (1 to 100).

To understand how it works, imagine you're adding salt to a soup. You need to taste (check the condition) and add salt until it's perfect before moving to the next ingredient:

1. **Start Tasting (Beginning the Inner Loop)**: Each time you taste the soup, you decide if it needs more salt. This is like the inner loop running and asking, "Is the number correct?"
2. **Add Salt (User Input)**: If the soup needs more salt, you add a pinch. This is like the user entering a number.
3. **Taste Again (Repeating the Loop)**: After adding salt, you taste again. This is the inner loop repeating until the soup has enough salt.
4. **Perfect Taste (Breaking the Loop)**: Once the soup tastes perfect, you stop adding salt and move to the next ingredient. This is like when the user enters a valid number within the range, and you break out of the inner loop.


## Hands-On Coding

1. Place your cursor below the `while guess != number_to_guess:` line in the `guess_number` function.
2. Write the `while True:` line to start the inner loop. Ensure you indent this line.
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
        while True:

    guess_number()
    ```
3. Save your changes by pressing `Ctrl + S` (Windows) or `Cmd + S` (macOS).