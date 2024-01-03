---
sidebar_position: 4
slug: /python/simple-games/number-guessing/read-from-keyboard
---

# Read from the Keyboard

The `input` function in Python is a built-in function used to read a string from the standard input (usually the keyboard). It prompts the user to enter some data and returns that data as a string. The `input` function takes an optional parameter, which is the prompt message displayed to the user. This message appears on the screen to instruct the user what they should input.

Note that the `input` function returns the input as a string, regardless of whether the user types in numbers or letters.


In the example code below, the user's name is captured as a string and then used in a greeting message:

```python
name = input("What is your name? ")
print("Hello, " + name + "!")
```

## Hands-On Coding

1. Place your cursor below the `while True:` line in the `guess_number` function.
2. Declare a variable named `guess` and assign it to the result of calling the `input` function, passing it the following string as a parameter -"Guess a number between 1 and 100: ". Ensure you indent this line.
    ```python
    guess = input("Guess a number between 1 and 100: ")
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
            guess = input("Guess a number between 1 and 100: ")

      guess_number()
    ```
3. Save your changes by pressing `Ctrl + S` (Windows) or `Cmd + S` (macOS).