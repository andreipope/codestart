---
sidebar_position: 3
slug: /python/simple-games/number-guessing/understand-f-strings
description: Understand F-Strings.
---

# Understand F-Strings

F-strings, or formatted string literals, provide a way to embed expressions inside string literals, using curly braces. An f-string is prefixed with 'f' or 'F' before the opening quotation mark. The expressions inside the curly braces are evaluated at runtime and then formatted.

F-strings make it easier to create and read string expressions, as you can directly insert variables and expressions into the string. Also, they allow for embedding expressions directly into the string, reducing the need for concatenation or separate formatting steps.

In the following example, the variable `name` is directly inserted into the string. The curly braces contain the name of the variable, and the entire string is prefixed with 'f':

```python
name = "Alice"
message = f"Hello, {name}!"
print(message)  # Output: Hello, Alice!

```

In the following example, the `(a + b)` expression is evaluated and inserted:

```python
a = 5
b = 10
result = f"The sum of {a} and {b} is {a + b}."
print(result)  # Output: The sum of 5 and 10 is 15.
```

## Hands-On Coding

1. Place your cursor below the `print("Too high!")` line, after the inner loop that validates the input, and outdent the line. It should be on the same level as the `if` and `elif` blocks.
2. Write the `else` statement for handling the scenario in which the users guesses the number:
    ```python
    else:
    ```
3. Under the else statement, indent and add call the `print` function passing it the `f"Congratulations! You guessed it right in {number_of_guesses} guesses!"`  f-string as a paramater statement to congratulate the user:
    ```python
    print(f"Congratulations! You guessed it right in {number_of_guesses} guesses!")
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
            if 1 <= guess <= 100:
              break
            else:
              print("Your guess must be between 1 and 100.")
          except ValueError:
            print("Please enter a valid number.")
        number_of_guesses += 1
        if guess < number_to_guess:
          print("Too low!")
        elif guess > number_to_guess:
          print("Too high!")
        else:
          print(f"Congratulations! You guessed it right in {number_of_guesses} guesses!")
    
    guess_number()
    ```
6. Save your changes by pressing `Ctrl + S` (Windows) or `Cmd + S` (macOS).