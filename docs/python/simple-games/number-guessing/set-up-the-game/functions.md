---
sidebar_position: 1
slug: /python/simple-games/number-guessing/function
---

# Functions

Imagine you have a favorite recipe that you love to cook. Every time you want to cook it, instead of looking for the recipe again, you have a special magic book that, when you say the name of the recipe, gives you the steps and cooks it for you. In Python, this magic recipe book is what we call functions. They are blocks of code that you can reuse over and over again without having to rewrite them.

## Why Use Functions?

- **Modularity:** Just like dividing a recipe into steps makes it easier to follow, functions break down complex tasks into smaller, manageable parts.
- **Reusability:** Once you write your recipe (function), you can reuse it whenever needed, similar to using your favorite recipe from a cookbook.

## How to Create Your Magic Recipes (Functions)

To create a function in Python, you follow these simple parts:

1. **Give Your Recipe a Name:** Start with the `def` keyword, followed by the recipe (function) name.
2. **List the Ingredients (Parameters):** In parentheses `()`, list what ingredients (parameters) you need. These are optional; some recipes don't need ingredients!
3. **Write the Instructions (Code Block):** After a colon `:`, write the steps (code) to execute. This part is indented.

**Example**:

```python
def greet():
    print("Hello, World!")
```

Note the following about this example:

- **`def greet():`** is like saying, "Here's a recipe named greet."
- **`print("Hello, World!")`** are the instructions for the recipe.

## Using Your Recipes (Calling a Function)

To use the function, type its name name followed by parentheses.

**Example**

```python
greet()
```

This line executes the `greet` function, and it will respond by executing its instructions, printing "Hello, World!".

## Customizing Recipes with Ingredients (Parameters)

Sometimes, you might want to customize your recipe. Parameters in functions are like ingredients; you pass them when you call the function to customize its behavior.

**Example:**

```python
def greet(name):
    print(f"Hello, {name}!")
```

Note the following about this example:
- **`def greet(name):`** tells Python that this recipe needs one ingredient: `name`.
- When you use this recipe like `greet("Alice")`, it's like saying, "Greet Alice!"

## Return a Result from Your Recipe (Return Values)

Just as some recipes give you a cake or a cooked dish, functions can return values back using the `return` keyword. This is useful when you want your function to calculate and give back a result.

**Example**

```python
def add(x, y):
    return x + y
```

Note the following about this example:

- **`return x + y`** tells Python, "Give back the sum of x and y."
- When you call `add(5, 3)`, it's like asking, "What's 5 plus 3?" and it returns `8`.

## Hands-On Coding

1. Find the VS Code application on your computer. It's typically located in the Applications folder on macOS or in the Start menu on Windows.
2. Double-click the VS Code application icon to open it.
3. Once you have VS Code open, go to the menu bar at the top and select `File` > `New File`. 
4. Press `Ctrl + S` on Windows or `Cmd + S` on macOS to save the file.
5. In the save dialog, navigate to the directory where you want to save your file.
6. Name your file `number-guessing.py`. Make sure to include the `.py` extension, which specifies that it's a Python file.
7. Select the `Save` button.
8. At the top of the `number-guessing.py` file, define your function by typing `def guess_number():`. This line declares a function named `guess_number`. Remember to end this line with a colon `:`.
9. For now, add a placeholder inside the function so that it's not empty. A common placeholder is the `pass` statement, which does nothing. Ensure you indent the `pass` statement. Indentation is crucial in Python to define the scope of the function. Your function should look similar to the following:
    ```python
    def guess_number():
      pass
    ```
10. Once the function is declared, you need to call it to execute the game logic. After the function definition, write a line to call the `guess_number` function. This should be at the root level of the file, not indented under any function. Your script should now look like this:
   ```python
    def guess_number():
      pass

   guess_number()
   ```
11. Save your changes by pressing `Ctrl + S` (Windows) or `Cmd + S` (macOS).
