---
sidebar_position: 3
slug: /python/simple-games/number-guessing/undestand-casting
description: Understand casting.
---

# Understand Casting

Casting in Python refers to converting a variable from one data type to another. This process is essential when the data type of a value needs to be changed to perform certain operations or meet the requirements of functions. Python provides built-in functions for casting, including `int()`, `float()`, and `str()`, among others.

## How Does Casting Work?

Casting works by taking a value and attempting to convert it to the specified type. However, it's important to note that not all conversions are possible (e.g., trying to convert a non-numeric string into an integer). Below are a few examples of how casting works with common data types:

### From String to Integer or Float

If a string contains numeric characters, it can be converted to an integer using `int()` or to a float using `float()`. Example: `int("123")` returns the integer 123, and `float("123.45")` returns the float 123.45.

### From Integer or Float to String

Numbers can be converted to strings using the `str()` function. This is often necessary for concatenating numeric values with strings. Example: `str(123)` returns the string "123".

### From Float to Integer
A float can be converted to an integer using the `int()` function. This process truncates the decimal part and keeps the integer portion. Example: `int(123.45)` returns 123.


## Casting User Input

Since the `input()` function always returns a string, it's common to cast the input to other types for numerical operations.

In the following example, the user is asked to input their age. Initially, the input function captures the age as a string. To calculate the user's age next year, you need to convert this string to an integer using `int(age)`. Then, when printing the message, since you cannot concatenate strings with integers, the age is cast back to a string using `str(age + 1)`.

```python
age = input("Enter your age: ")  # age is a string here
age = int(age)  # Now age is an integer
print("Next year, you will be " + str(age + 1) + " years old.")
```

## Hands-On Coding

1. Wrap the `input` function call within the `int()` function to convert the entered string into an integer.
    ```python
    guess = int(input("Guess a number between 1 and 100: "))
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
          except ValueError:

    guess_number()
    ```
3. Save your changes by pressing `Ctrl + S` (Windows) or `Cmd + S` (macOS).