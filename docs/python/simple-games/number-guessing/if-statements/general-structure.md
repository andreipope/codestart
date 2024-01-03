---
sidebar_position: 1
slug: /python/simple-games/number-guessing/if-statements/general-structure
---

# General Structure of If Statements

The structure of an `if` statement in Python is as follows:

```python
if condition:
    # Code to execute if condition is true
else:
    # Code to execute if condition is false

```

- `if condition`: This line checks whether the condition is `true`. Conditions are typically comparisons or boolean expressions. If the condition is `true`, the indented code right after the `if` statement runs.
- `else`: This is followed by an indented block that runs if the condition in the if statement is `false`.

For example, you're writing a simple program that suggests an activity based on whether it's raining. The example code below how you could use an `if-else` statement to accomplish this:

```python
# Assume is_raining is a boolean that's True if it's raining
is_raining = True

if is_raining:
    print("It's raining! Why not visit a museum today?")
else:
    print("It's not raining! How about a walk in the park?")
```

Note the following about this example:

- The condition is `is_raining`. The `if` statement checks whether `is_raining` is `True`. If it is indeed raining (`is_raining` equals `True`), the program suggests visiting a museum.
- The `else` block is executed if it's not raining (when `is_raining `is `False`). In this case, the program suggests going for a walk in the park.

