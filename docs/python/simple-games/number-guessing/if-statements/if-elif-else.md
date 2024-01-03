---
sidebar_position: 1
slug: /python/simple-games/number-guessing/if-statements/if-elif-else
---

# If-Elif-Else

Python allows for multiple conditions to be checked in sequence before reaching the final `else`. The structure of an `if-elif-else` block  is an extension of the basic `if-else` structure and it looks as follows:

```python
if condition1:
    # Code to execute if condition1 is true
elif condition2:
    # Code to execute if condition1 is false but condition2 is true
else:
    # Code to execute if both condition1 and condition2 are false
```

- `if condition1`: This line initiates the conditional block by checking whether `condition1` is `True`. Conditions are typically comparisons or boolean expressions. If `condition1` is `True`, the indented code right after the `if` statement runs. If it's false, Python moves on to evaluate `condition2` in the `elif` clause.
- `elif condition2`: Short for `else if`, `elif` allows for additional conditions to be checked if the previous conditions were false. There can be more than one `elif` block, each with its own condition. When the `if` condition evaluates to `False`, Python checks the condition after `elif`. If this `condition2` is `True`, the indented code right after the `elif` statement runs. If it's false, and there are more `elif` statements, Python continues to check them in order. If there are no more `elif` statements, or if all `elif` conditions are false, Python moves on to the `else` block.
- `else`: This block catches all cases not addressed by the preceding `if` and `elif` conditions. It does not have a condition; it runs if all the preceding conditions are false. The code indented under the `else` statement executes in this case.

## Hands-On Coding

1. Place your cursor within the outer `while` loop, after the inner loop that validates the input.
2. Write an `if` statement to check if `guess` is lower than `number_to_guess`:
    ```python
    if guess < number_to_guess
    ```
3. Indent the next line and call the `print` function passing it "Too low!" as a parameter to display a message for the scenario in which the number is too low:
    ```python
    print("Too low!")
    ```
4. Write an `elif` statement to handle the case where the guess is greater than the number to guess:
    ```python
    elif guess > number_to_guess:
    ```
5. Add an indented line that calling the `print` function` passing it "Too high!" as a parameter to display a message for the scenario in which the number is too high:
    ```python
    print("Too high!")
    ```
    The `number-guessing.py` file should look like this:
    ```python
    print("Please enter a valid number.")
    ```
6. On the same level as the `if` and `elif` blocks, wite an `else` statement for handling the scenario in which the user guesses the number. Leave the body of the `else` block empty for now.
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
            int(input("Guess a number between 1 and 100: "))
          except ValueError:
            print("Please enter a valid number.")
        if guess < number_to_guess:
            print("Too low!")
        elif guess > number_to_guess:
            print("Too high!")
        else:

    guess_number()
    ```
7. Save your changes by pressing `Ctrl + S` (Windows) or `Cmd + S` (macOS).