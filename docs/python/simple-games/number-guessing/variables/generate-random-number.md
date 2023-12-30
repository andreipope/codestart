---
sidebar_position: 2
slug: /python/simple-games/number-guessing/generate-random-number
description: Generate a random number.
---

# Generate a Random Number

In the number guessing game, the goal is for the player to guess a specific number correctly. To make the game challenging and fun, this number should be unpredictable and different each time you play. This is where random number generation comes into play.

In Python, you can generate random numbers using the `random` module, which you've already imported. The function `random.randint(a, b)` returns a random integer N such that `a <= N <= b`. For the number guessing gamee, you'll want to generate a number between 1 and 100.

## Hands-On Coding

1. Remove the `pass` statement from the `guess_number` function. It was a temporary placeholder that you'll now replace with actual code.
2. Inside the `guess_number` function, create a variable called `number_to_guess` and assign it a random integer between 1 and 100, inclusive by writint the following line of code:
   ```python
   number_to_guess = random.randint(1, 100)
   ```
3. Immediately after generating the random number, initialize a variable to store the user's guess. Initially, you don't know the user's guess, so you'll set it to `None`. In Python, `None` represents the absence of a value:
   ```python
   guess = None
   ```
4. You also want to keep track of how many guesses the player makes. Initialize a variable called `number_of_guesses` to 0:
   ```python
   number_of_guesses = 0
   ```
    After adding the random number generation and variable initializations, the `number-guessing.py` file should look like this:
   ```python
   import random

   def guess_number():
       number_to_guess = random.randint(1, 100)
       guess = None
       number_of_guesses = 0

   guess_number()
   ```
5. Save your changes by pressing `Ctrl + S` (Windows) or `Cmd + S` (macOS).


By generating a random number and initializing variables for the guess and guess count, you've laid the foundation for the game's logic. The random number introduces the element of unpredictability necessary for the game, while the initialized variables prepare your code for tracking user input and guesses. You're now ready to build upon this structure to create the interactive parts of the game.