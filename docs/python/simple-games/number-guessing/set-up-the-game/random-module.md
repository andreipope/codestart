---
sidebar_position: 3
slug: /python/simple-games/number-guessing/random-module
startingCode: |
  def guess_number():

  guess_number()
answer: |
  import random

  def guess_number():

  guess_number()
filename: number-guessing.py
language: Python
---

# The random Module

import BrowserOnlyFormattedEditor from '@site/src/components/BrowserOnlyFormattedEditor';

The `random` module in Python is a built-in library that provides a suite of functions for generating random numbers and performing random operations. This module is part of the Python Standard Library, so it comes pre-installed with Python and does not require any additional installation.

The `random` module is primarily used for:

- **Generating random numbers:** It can produce pseudo-random numbers for various distributions including integers, floats, and even sequences.
- **Random selections and shuffling:** It offers functions to randomly select items from a list or sequence and to shuffle the elements of a list in place.

## Key Functions

Below are some of the commonly used functions in the `random` module:

- **`random.randint(a, b)`**
  - Returns a random integer `N` such that `a <= N <= b`.
  - Example: `random.randint(1, 10)` would generate a random integer between 1 and 10.

- **`random.random()`**
  - Returns a random float number between 0.0 to 1.0.
  - Example: `random.random()` might return a value like 0.374448.

- **`random.choice(sequence)`**
  - Returns a randomly selected element from a non-empty sequence (like a list).
  - Example: `random.choice(['red', 'green', 'blue'])` might return 'blue'.

- **`random.shuffle(sequence)`**
  - Randomly shuffles the elements of a sequence in place.
  - Example:
  ```python
  items = [1, 2, 3, 4, 5]
  random.shuffle(items)
  ```

-  **`random.uniform(a, b)`**
  - Returns a random float number between the values `a` and `b`.
  - Example: `random.uniform(1, 5)` might return a value like 3.9274.


## Hands-On Coding

1. At the top of the file, import the `random` module by typing the following line:

    ```python
    import random
    ```

---

<BrowserOnlyFormattedEditor frontMatter={frontMatter}> </BrowserOnlyFormattedEditor>