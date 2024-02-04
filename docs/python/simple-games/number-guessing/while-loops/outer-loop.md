---
sidebar_position: 1
slug: /python/simple-games/number-guessing/outer-loop
startingCode: |
  import random

  def guess_number():
    number_to_guess = random.randint(1, 100)
    guess = None
    number_of_guesses = 0

  guess_number()
answer: |
  import random

  def guess_number():
    number_to_guess = random.randint(1, 100)
    guess = None
    number_of_guesses = 0
    while guess != number_to_guess:

  guess_number()
filename: number-guessing.py
language: Python
---

# The Outer Loop

import BrowserOnlyFormattedEditor from '@site/src/components/BrowserOnlyFormattedEditor';

In the number guessing game, you'll use a `while` loop to continually prompt the player for a guess until the correct number is guessed. This makes the game interactive by allowing multiple attempts and it allows to script to provide feedback based on the player's input.

## Hands-On Coding

1. Place your cursor below the `number_of_guesses = 0` line in the `guess_number` function. Write a `while` loop with the condition that it should continue as long as the player's guess is not equal to the number to guess:
    ```python
    while guess != number_to_guess:
    ```

---

<BrowserOnlyFormattedEditor frontMatter={frontMatter}> </BrowserOnlyFormattedEditor>