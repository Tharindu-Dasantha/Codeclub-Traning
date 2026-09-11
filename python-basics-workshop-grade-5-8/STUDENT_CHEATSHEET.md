# 📄 Python Basics Student Cheatsheet & Coder's Guide
> **Grade 5 - 8 Code Club Edition** | Keep this by your keyboard! ⌨️🐍

---

## 💡 What is Python?

Python is a programming language — a set of precise, step-by-step instructions a computer follows exactly, from top to bottom. It's used to build games, apps, websites, and even robots!

---

## 🖥️ Running Code in Thonny

1. Type your code in the **Editor** (top half).
2. Press the green ▶ **Run** button (or `F5`).
3. See the output in the **Shell/Console** (bottom half).
4. If it crashes, read the red error message from the bottom line first — it usually tells you the exact problem!

---

## 📦 Variables & Data Types

A variable is a labeled box that stores a value.

```python
player_name = "Amaya"   # str -> text, always in quotes
player_age = 12         # int -> whole number
height_m = 1.45         # float -> decimal number
is_playing = True       # bool -> True or False only
```

| Type | Name | Example |
| :--- | :--- | :--- |
| `str` | Text / String | `"Colombo"`, `"hello!"` |
| `int` | Whole Number | `12`, `-5`, `2026` |
| `float` | Decimal Number | `1.45`, `3.14` |
| `bool` | True/False | `True`, `False` |

---

## 🗣️ Input & Output

```python
print("This shows text on screen")          # Output

name = input("What is your name? ")          # Input — ALWAYS returns text!
age = int(input("How old are you? "))        # Convert text to a number

print(f"Hello, {name}! Next year you'll be {age + 1}.")  # f-string formatting
```

> ⚠️ **Golden Rule:** `input()` ALWAYS gives back text (a `str`), even if the user types numbers. Use `int()` or `float()` to convert it before doing math!

---

## 🎯 Comparison Operators

| Operator | Meaning | Example |
| :--- | :--- | :--- |
| `==` | Equal to | `score == 10` |
| `!=` | Not equal to | `name != "Kasun"` |
| `>` | Greater than | `age > 12` |
| `<` | Less than | `score < 5` |
| `>=` | Greater or equal | `age >= 13` |
| `<=` | Less or equal | `score <= 3` |

> ⚠️ **Golden Rule:** `=` **assigns** a value. `==` **compares** two values. Never mix them up!

---

## 🌳 Making Decisions: `if` / `elif` / `else`

```python
if score == 3:
    print("Perfect score!")
elif score >= 1:
    print("Good job!")
else:
    print("Try again!")
```

- Every `if` / `elif` / `else` line ends with a colon `:`.
- The code below it must be **indented** (4 spaces) — Python uses spacing instead of `{ }`.
- `.lower()` makes text lowercase, great for comparing answers fairly:
  ```python
  if answer.lower() == "elephant":
  ```

---

## 🔁 Repeating Actions: The `while` Loop

```python
play_again = "yes"

while play_again.lower() == "yes":
    print("Playing a round!")
    play_again = input("Play again? (yes/no): ")

print("Thanks for playing!")
```

> ⚠️ **Infinite Loop Warning:** Something inside the loop MUST be able to change the condition, or it will run forever! If it happens, press the red **Stop** button in Thonny.

---

## 🚨 Top 5 Python Beginner Mistakes to Avoid

1. ❌ **Missing colon `:`** — Every `if`, `elif`, `else`, and `while` line needs one at the end.
2. ❌ **Wrong indentation** — Code inside a block must line up with consistent spacing (4 spaces).
3. ❌ **Using `=` instead of `==`** — `=` stores a value, `==` compares two values.
4. ❌ **Forgetting to convert `input()`** — Wrap it in `int()` before doing math: `int(input("Age: "))`.
5. ❌ **Mismatched quotes** — `"hello'` will crash. Use matching `" "` or `' '`.

---

## ⌨️ Useful Shortcuts & Tips

- `F5` ▶️ **Run your program in Thonny**
- `Ctrl + S` / `Cmd + S` 💾 **Save your file**
- Red **Stop** button 🛑 **Stop a frozen/infinite loop**
- Read error messages **bottom line first** — that's usually the actual problem!
