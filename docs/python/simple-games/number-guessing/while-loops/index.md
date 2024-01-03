# While Loops

In Python, `while` loops are like a chef repeating a set of cooking steps until a dish is ready. Just as a chef might need to stir a soup every few minutes until it's cooked perfectly, loops in Python are used to repeat a block of code multiple times until a certain condition is met. 

In the example code below, as long as there are cookies left to bake (cookies_to_bake > 0), the loop keeps running, printing a message for each cookie and then decreasing the count by one.
```python
# While Loop Example
cookies_to_bake = 5
while cookies_to_bake > 0:
  print("Baking cookie number ", cookies_to_bake)
  cookies_to_bake = cookies_to_bake - 1  # This is like taking one cookie out of the oven at a time

```

## Break Statements

In Python, a `break` statement is used to exit a loop prematurely, regardless of the loop's original condition. It's like a chef who stops stirring a broth the moment it reaches the perfect taste, even if originally planning to stir it a few more times.

In the example code below, the `while` loop with a `break` statement allows for flexible and user-driven repetition. It's particularly useful in scenarios where the condition to end the loop is dynamic or not known beforehand:

```python
# While Loop with Break Example
minutes_passed = 0
while minutes_passed < 20:  # This means keep boiling for 20 minutes
    if input("Are the eggs done? (yes/no) ") == "yes":
        print("Eggs are done!")
        break  # Immediately stop boiling
    minutes_passed = minutes_passed + 1  # Another minute of boiling

```

## Use Loops to Create a Robust and User-Friendly Game

In your game, you'll need two `while` loops, each serving a distinct purpose in the game's logic and user interaction.

- **Outer `while` loop**:
  - **Role**: This loop provides the continuous play mechanism, prompting the user for a new guess with each iteration until the correct number is guessed.
  - **Structure**: The loop checks if the user's guess (`guess`) is not equal to the randomly selected number (`number_to_guess`). As long as the guess is incorrect, the loop repeats, prompting the user to make another guess.
- **Inner `while` loop**:
  - **Role**: This loop ensures that the user enters a valid numeric input within the specified range (1 to 100).
  - **Structure**: This loop runs indefinitely (`while True:`) until a valid input is received and processed, at which point it breaks out of the loop. This type of loop that runs indefinitely is called an infinite loop.


```mdx-code-block
import DocCardList from '@theme/DocCardList';

<DocCardList />
```