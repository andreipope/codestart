---
sidebar_position: 5
slug: /python/simple-games/number-guessing/casting
startingCode: |
  import random

  def guess_number():
    number_to_guess = random.randint(1, 100)
    guess = None
    number_of_guesses = 0
    while guess != number_to_guess:
      while True:
        guess = input("Guess a number between 1 and 100: ")

  guess_number()
answer: |
  import random

  def guess_number():
    number_to_guess = random.randint(1, 100)
    guess = None
    number_of_guesses = 0
    while guess != number_to_guess:
      while True:
        guess = int(input("Guess a number between 1 and 100: "))

  guess_number()
filename: number-guessing.py
language: Python
---

# Casting

import BrowserOnlyFormattedEditor from '@site/src/components/BrowserOnlyFormattedEditor';

Casting in Python refers to converting a variable from one data type to another. This process is essential when the data type of a value needs to be changed to perform certain operations or meet the requirements of functions. Python provides built-in functions for casting, including `int()`, `float()`, and `str()`, among others.


## How Does Casting Work?

Casting works by taking a value and attempting to convert it to the specified type. However, it's important to note that not all conversions are possible (e.g., trying to convert a non-numeric string into an integer). 


Below are a few examples of how casting works with common data types.

### From String to Integer or Float

If a string contains numeric characters, it can be converted to an integer using `int()` or to a float using `float()`. Example: `int("123")` returns the integer 123, and `float("123.45")` returns the float 123.45.

### From Integer or Float to String

Numbers can be converted to strings using the `str()` function. This is often necessary for concatenating numeric values with strings. Example: `str(123)` returns the string "123".

### From Float to Integer

A float can be converted to an integer using the `int()` function. This process truncates the decimal part and keeps the integer portion. Example: `int(123.45)` returns 123.


## Casting User Input

In your number guessing game, the objective is for the user to guess a randomly selected number within the specified range. The computer compares the user's guess to this number to determine whether it's too high, too low, or correct. To facilitate this comparison, both the user's input and the randomly selected number are of the same data type.

When you use the `input` function in Python to retrieve the user's guess, it always returns the data as a `string`, regardless of whether the user types a number, a word, or anything else. This is because, from the perspective of the `input` function, all input is just text entered by the user. However, for numerical comparison (like in a number guessing game), you need actual numbers, not strings that just contain number characters.

In the following example, the user is asked to input their age. Initially, the input function captures the age as a string. To calculate the user's age next year, you need to convert this string to an integer using `int(age)`. Then, when printing the message, since you cannot concatenate strings with integers, the age is cast back to a string using `str(age + 1)`.

```python
age = input("Enter your age: ")  # age is a string here
age = int(age)  # Now age is an integer
print("Next year, you will be " + str(age + 1) + " years old.")
```

## Hands-On Coding

1. Wrap the `input` function call within the `int()` function to convert the entered string into an integer:
    ```python
    guess = int(input("Guess a number between 1 and 100: "))
    ```

---

<BrowserOnlyFormattedEditor frontMatter={frontMatter}> </BrowserOnlyFormattedEditor>