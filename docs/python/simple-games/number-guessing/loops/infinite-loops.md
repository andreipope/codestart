---
sidebar_position: 2
slug: /python/simple-games/number-guessing/infinite-loops
description: Infinite loops.
---

# Infinite Loops

An infinite loop is a loop that has no inherent termination condition—it will run indefinitely until externally interrupted or broken out of using a control statement like break. In programming, while it might sound dangerous to have an "infinite" loop, they are useful in certain contexts, particularly when you want to keep running a block of code until a specific condition is met.

Example:
```python
while True:
    print("This loop will run forever!")

```
Note the following about this example:
- `while True:`: This is the condition for the loop. Since `True` is always true, the loop has no natural end point — it's set up to run indefinitely.
- `print("This loop will run forever!")`: This is the action that occurs with each iteration of the loop.

When this script is run, "This loop will run forever!" will be printed to the console over and over again without stopping. The loop will continue executing the print statement repeatedly because there's nothing in the code to make the while True condition false or break out of the loop.

## Break Out of an Infinite Loop

Typically, you'd use a `break` statement or some other condition to exit the loop at the appropriate time. Without such an exit strategy, the infinite loop will continue forever or until the program is externally terminated (example: you stop the script manually).

The `break` statement is a control flow statement used to exit loops. When Python encounters a `break`, it immediately terminates the loop, regardless of the loop's condition. 

The following example shows how you can use a `break` statement in an infinite loop:

```python
while True:
    response = input("Type 'exit' to stop the loop: ")
    if response == 'exit':
        print("Exiting the loop...")
        break
    else:
        print("Loop continues...")

```

In this example, when the user types 'exit', the break is executed, stopping the infinite loop and allowing the script to end or move on to any code that might come after the loop. Without the break, the loop would continue forever, endlessly executing its block of code.

## Hands-On Coding

1. Place your cursor below the `while guess != number_to_guess:` line in the `guess_number` function.
2. Write the `while True:` line to start an infinite loop. Ensure you indent this line line.
    ```python
    while guess != number_to_guess:
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

    guess_number()
    ```
3. Save your changes by pressing `Ctrl + S` (Windows) or `Cmd + S` (macOS).