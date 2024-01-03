---
sidebar_position: 1
slug: /python/simple-games/number-guessing/exceptions
---

# Exceptions

In Python, exceptions are events that occur during the execution of a program that disrupt the normal flow of the program's instructions. In simple terms, an exception represents an error. When a Python script raises an exception, it must either handle the exception immediately otherwise it terminates and quits.

## Types of Exception

Python has numerous built-in exceptions that force your program to output an error when something in it goes wrong. Here are a few common ones along with simple examples for each:

- **ZeroDivisionError**: Occurs when you try to divide by zero.
  
  **Example**: If you have a code snippet like `print(10 / 0)`, Python will raise a `ZeroDivisionError` because you are attempting to divide a number by zero, which is mathematically undefined.

- **ValueError**: Raised when a built-in operation or function receives an argument that has the right type but an inappropriate value.
  
  **Example**: If you try to convert a string that does not contain numbers into an integer using `int('abc')`, Python will raise a `ValueError`. This is because while the `int()` function expects a string or a number, the string `'abc'` cannot be appropriately converted to an integer.

- **TypeError**: Thrown when an operation or function is applied to an object of inappropriate type.
  
  **Example**: If you try to add a number to a string like in `7 + 'eight'`, Python will raise a `TypeError`. This error occurs because you're attempting to perform an addition operation ('+') between an integer and a string, which is not allowed in Python as it requires both operands to be of the same or compatible types.

