---
sidebar_position: 4
slug: /python/getting-started/functions
description: Learn about functions.
---

# Functions

A function in Python is a block of organized, reusable code that performs a single, related action. Functions provide better modularity for your application and a high degree of code reusing. As you start to write more complex Python programs, functions will be an essential part of your Python toolkit.

## Why Use Functions?

- **Modularity:** Breaking down a complex process into smaller chunks makes your program more organized and manageable.
- **Reusability:** Once defined, a function can be used repeatedly, eliminating the need to rewrite code.

## Basic Structure of a Function

A Python function is defined using the `def` keyword, followed by a function name, a pair of parentheses `()` that can enclose some parameters, and a colon `:`. The indented block of code following the `:` is the body of the function.

**Example:**
```python
def greet():
    print("Hello, World!")
```
Note the following about this example:
- `def greet():` declares a function named `greet`.
- The body of the function `print("Hello, World!")` is executed when the function is called.

## Calling a Function

To execute the function, you 'call' it by using the function name followed by parentheses.

**Example of Function Call:**

```python
greet()
```
This example code calls the `greet` function, which executes its body and prints `Hello, World!`.

## Functions with Parameters

Functions can take parameters, which are values you pass into the function to be used within it. Parameters act as placeholders for the actual values (arguments) that will be used when calling the function.

**Example with Parameters:**

```python
def greet(name):
    print(f"Hello, {name}!")
```
Note the following about this example:
- The function `greet` takes one parameter `name`.
- When calling `greet("Alice")`, "Alice" is the argument passed to the `greet` function.

## Returning Values from Functions

A function can return a value back to the caller using the `return` keyword.

**Example with return:**

```python
def add(x, y):
    return x + y
```
Note the following about this example:
- `add` takes two parameters `x` and `y`.
- It returns the sum of `x` and `y`.
- Calling `add(5, 3)` will return `8`.

## Conclusion

Functions are a fundamental aspect of Python programming. By breaking a program into smaller sub-units, functions make code more organized, readable, and manageable. As you progress, you'll encounter more complex functions, but the basic principles of defining, calling, parameter passing, and returning values will remain the same.