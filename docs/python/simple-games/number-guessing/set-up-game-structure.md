---
sidebar_position: 3
slug: /python/simple-games/number-guessing/set-up-game-structure
description: Set up the game structure
---

# Set Up the Game Structure

In programming, organizing your code into functions is a best practice for several reasons:
- **Modularity:** Functions allow you to break down your code into smaller, manageable parts. This makes your code more organized and easier to debug.
- **Reusability:** Once defined, functions can be reused in different parts of your program, or even in different programs, saving you time and effort.
- **Readability:** Code within functions is more readable and easier to understand. It helps others (and yourself) to understand what a specific part of the code does.
- **Flow Control:** Having your main game logic inside a function, like `guess_number`, gives you better control over when and how the game starts and ends.

In this lesson, you'll set up the initial structure for the game by creating a `guess_number` function and calling it. This structure provides a solid foundation for adding the game logic in an organized and modular fashion, adhering to good programming practices.

## Hands-On Coding

1. At the top of the `number-guessing.py` file, after the `import random` line, define your function by typing `def guess_number():`. This line declares a function named `guess_number`. Remember to end the `def` line with a colon `:`.
2. For now, add a placeholder inside the function so that it's not empty. A common placeholder is the `pass` statement, which does nothing. Ensure you indent the `pass` statement. Indentation is crucial in Python to define the scope of the function. Your function should look similar to the following:
   ```python
   def guess_number():
       pass
   ```
3. Once the function is declared, you need to call (or invoke) it to execute the game logic. After the function definition, write a line to call the `guess_number` function. This should be at the root level of the file, not indented under any function. Your script should now look like this:
   ```python
   import random

   def guess_number():
       pass

   guess_number()
   ```
4. Save your changes by pressing `Ctrl + S` (Windows) or `Cmd + S` (macOS).
