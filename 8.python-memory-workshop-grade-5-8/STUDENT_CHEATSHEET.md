# 📄 Python Memory & Files Student Cheatsheet & Coder's Guide
> **Grade 5 - 8 Code Club Edition** | Keep this by your keyboard! ⌨️🗂️

---

## 🧠 Short-Term vs Long-Term Memory

| | Short-Term Memory (Variables) | Long-Term Memory (Files) |
| :--- | :--- | :--- |
| **Where it lives** | RAM (a whiteboard) | Disk (a notebook) |
| **What happens when the program closes** | ❌ Erased completely | ✅ Stays saved forever |
| **How to use it** | `score = 0` | `open("high_score.txt", "w")` |

---

## 📋 Lists — Storing Many Things in Order

```python
questions = ["Q1", "Q2", "Q3"]

print(questions[0])       # "Q1" - lists start counting at 0!
print(len(questions))     # 3 - how many items

for question in questions:
    print(question)       # Runs once per item automatically
```

---

## 🗃️ Dictionaries — Grouping Related Data

```python
question = {"question": "Capital of Sri Lanka?", "answer": "sri jayawardenepura kotte"}

print(question["question"])   # Access a value using its key
print(question["answer"])
```

### A List of Dictionaries (our whole quiz!)
```python
questions = [
    {"question": "Capital of Sri Lanka?", "answer": "sri jayawardenepura kotte"},
    {"question": "National animal?", "answer": "elephant"},
]

for q in questions:
    print(q["question"])
```

> ⚠️ **Golden Rule:** Dictionary keys are case-sensitive! `q["answer"]` and `q["Answer"]` are two DIFFERENT keys.

---

## 🧰 Functions — Reusable Recipes

```python
def ask_question(question_dict):
    """A docstring describing what the function does."""
    print(question_dict["question"])
    player_answer = input("Your answer: ")
    if player_answer.lower() == question_dict["answer"]:
        return 1
    else:
        return 0

# Calling the function:
score = ask_question(questions[0])
```

| Term | Meaning |
| :--- | :--- |
| `def` | Keyword that defines a new function |
| **Parameter** | The variable name inside `( )` that receives a value when called |
| **Argument** | The actual value you pass in when calling the function |
| `return` | Sends a value back out of the function |

---

## 💾 File I/O — Reading & Writing Files

```python
# WRITE (creates the file, or overwrites it if it already exists)
with open("high_score.txt", "w") as file:
    file.write("5")

# READ
with open("high_score.txt", "r") as file:
    text = file.read()
    number = int(text)
```

| Mode | Meaning |
| :--- | :--- |
| `"r"` | Read an existing file |
| `"w"` | Write (overwrites everything in the file!) |
| `"a"` | Append (adds to the end, keeps old content) |

> ⚠️ **Golden Rule:** Always use `with open(...) as file:` — it automatically closes the file safely when you're done.

---

## 🛟 Handling Missing Files: `try` / `except`

```python
def load_high_score():
    try:
        with open("high_score.txt", "r") as file:
            return int(file.read())
    except FileNotFoundError:
        return 0   # File doesn't exist yet? Start at 0.
```

> `try` = "attempt this code." `except FileNotFoundError:` = "if that specific error happens, do this instead of crashing."

---

## 🚨 Top 5 Beginner Mistakes to Avoid

1. ❌ **Mixing up `[ ]` and `{ }`** — Lists use `[ ]`, dictionaries use `{ }`.
2. ❌ **Wrong key spelling/capitalization** — `q["Answer"]` ≠ `q["answer"]`.
3. ❌ **Forgetting `return`** — Without it, a function silently gives back `None`.
4. ❌ **Forgetting `try`/`except` around file reads** — Crashes with `FileNotFoundError` on first run.
5. ❌ **Using `"w"` mode when you meant `"a"`** — `"w"` erases everything already in the file!

---

## ⌨️ Useful Shortcuts & Tips

- `F5` ▶️ **Run your program in Thonny**
- `Ctrl + S` / `Cmd + S` 💾 **Save your file**
- Files save in the **same folder** as your `.py` file — check there if you can't find `high_score.txt`!
- Close and reopen your program to test that your saved data really persists.
