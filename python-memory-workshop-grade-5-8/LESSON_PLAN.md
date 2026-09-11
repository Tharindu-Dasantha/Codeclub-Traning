# ⏱️ Detailed 2-Hour Facilitator Lesson Plan: Python Memory & Files

> **Session Title:** Python Memory & Files — Make Your Quiz Game Remember!
> **Target Group:** Grade 5 - Grade 8 (Ages 10-14, Sri Lanka)
> **Duration:** 120 Minutes (2 Hours)
> **Pedagogical Strategy:** Visual Analogies + Live Coding + Gamified Bug Hunt + Project-Based Learning
> **Builds On:** [Session 1: Python Basics](../python-basics-workshop-grade-5-8/LESSON_PLAN.md)

---

## 🕒 Master Schedule Overview

| Time | Duration | Module | Activity / Key Concept |
| :--- | :--- | :--- | :--- |
| **00:00 - 00:15** | 15 min | **Module 1: Recap & The Memory Problem** | Quick recap of Session 1, short-term vs long-term memory analogy, **lists** (`[]`) |
| **00:15 - 00:40** | 25 min | **Module 2: Dictionaries — Grouping Related Data** | **Dictionaries** (`{}`), a list of dictionaries, looping with `for` |
| **00:40 - 01:05** | 25 min | **Module 3: Functions — Don't Repeat Yourself** | `def`, parameters, `return`, refactoring the quiz into functions |
| **01:05 - 01:15** | 10 min | **☕ Energy Break & Quiz** | "Memory Box" Physical Energizer & 5-question rapid fire pop quiz |
| **01:15 - 01:45** | 30 min | **Module 4: File I/O — True Long-Term Memory** | `open()`, `.read()`/`.write()`, `with`, `try`/`except`, Bug Hunt, build the Quiz Master |
| **01:45 - 02:00** | 15 min | **Module 5: Final Showcase & Wrap-up** | Peer Showcase, Recap of full 2-week project, What's Next |

---

## 📘 Detailed Module Breakdown

### 🔁 Module 1: Recap & The Memory Problem (00:00 - 00:15)

#### Objective:
Reconnect with Session 1's quiz game, then reveal its biggest weakness: it forgets everything when it closes.

#### Facilitator Script & Steps:
1. **The Hook — "Where Did the High Score Go?":**
   - Run `solution-kit/quiz_game.py` from Session 1. Play a round, get a great score.
   - Close the program completely. Run it again.
   - Ask: *"What was your score last time? Does the program remember it? Why not?"*
   - Explain: Every variable (`score`, `player_name`) lives in the computer's **RAM** — a whiteboard that gets wiped clean the moment the program closes. That's **short-term memory**.
   - Teaser: *"Files are like a notebook — anything written there stays even after you close the notebook and go home. That's long-term memory. Today we learn to write to that notebook!"*
2. **The Problem with 3 Separate Variables:**
   - In Session 1, we had `answer1`, `answer2`, `answer3` as separate variables. What if we wanted 20 questions? That's 20 messy variable names!
   - Solution: a **list** — one variable that holds many values in order.
     ```python
     questions = [
         "What is the capital of Sri Lanka?",
         "What is the national animal of Sri Lanka?",
         "How many provinces does Sri Lanka have?",
     ]
     print(questions[0])   # Lists start counting at 0!
     print(len(questions)) # How many items are in the list
     ```
3. **Looping Through a List:**
   ```python
   for question in questions:
       print(question)
   ```
   - Explain: this `for` loop runs once per item in the list, automatically — no need to know how many items there are in advance!

---

### 🗃️ Module 2: Dictionaries — Grouping Related Data (00:15 - 00:40)

#### Objective:
Teach students to group a question with its answer using a dictionary, then combine many into a list.

#### Key Concepts Introduced:
- A **dictionary** (`{}`) stores `key: value` pairs — perfect for grouping related information.
- A **list of dictionaries** is how real apps organize structured data (think of it like a table of records).

#### Live Demo Activity (Follow Along):
```python
# One question as a dictionary
question1 = {"question": "What is the capital of Sri Lanka?", "answer": "sri jayawardenepura kotte"}

print(question1["question"])  # Access a value using its key
print(question1["answer"])

# A LIST of dictionaries - our whole quiz!
questions = [
    {"question": "What is the capital of Sri Lanka?", "answer": "sri jayawardenepura kotte"},
    {"question": "What is the national animal of Sri Lanka?", "answer": "elephant"},
    {"question": "How many provinces does Sri Lanka have?", "answer": "9"},
]

for q in questions:
    print(q["question"])
    player_answer = input("Your answer: ")
    if player_answer.lower() == q["answer"]:
        print("✅ Correct!")
    else:
        print(f"❌ The answer was {q['answer']}.")
```

#### Guided Practice:
1. Students type the list-of-dictionaries example and run it.
2. Students add 2 new question dictionaries to the `questions` list.
3. **Spot Check:** Walk around — the `for` loop should now ask every question automatically, no copy-pasted code!

---

### 🧰 Module 3: Functions — Don't Repeat Yourself (00:40 - 01:05)

#### Objective:
Teach students to package reusable code into functions with parameters and return values.

#### Key Concepts Introduced:
```python
def ask_question(question_dict):
    """Ask one question and return 1 if correct, 0 if wrong."""
    print(question_dict["question"])
    player_answer = input("Your answer: ")
    if player_answer.lower() == question_dict["answer"]:
        print("✅ Correct!")
        return 1
    else:
        print(f"❌ The answer was {question_dict['answer']}.")
        return 0

# Calling the function for every question in the list:
score = 0
for q in questions:
    score = score + ask_question(q)

print(f"Final score: {score} out of {len(questions)}")
```
- **Analogy:** A function is like a recipe card — you write it once, then "cook" it (call it) as many times as you like, with different ingredients (parameters) each time.
- `def function_name(parameter):` defines a function. Code inside must be indented, just like `if` and `while`.
- `return` sends a value back out of the function to wherever it was called from — it's how the function "answers back."
- Calling a function: `ask_question(q)` — this actually *runs* the recipe with `q` as the ingredient.

#### Guided Practice:
Students refactor their Session 1 welcome banner into a function:
```python
def show_welcome():
    print("=" * 40)
    print("🏆 WELCOME TO THE SRI LANKAN TRIVIA QUIZ MASTER! 🏆")
    print("=" * 40)

show_welcome()  # Call it whenever you want to show the banner again!
```

---

### ☕ Energy Break & Quiz (01:05 - 01:15)

- **Physical Energizer — "Memory Box" (3 mins):**
  - Facilitator says a data structure name. Students act it out:
    - `"List!"` → Students line up shoulder to shoulder (items in order).
    - `"Dictionary!"` → Students pair up and hold hands (key linked to value).
    - `"Function!"` → Students mime "wrapping a present" (packaging code together).
- **5-Question Rapid Fire Quiz:**
  1. What symbol creates a list? (`[ ]`)
  2. What symbol creates a dictionary? (`{ }`)
  3. What keyword defines a function? (`def`)
  4. What does `return` do? (*Sends a value back out of the function*)
  5. What number does a list start counting from? (`0`, not `1`!)

---

### 💾 Module 4: File I/O — True Long-Term Memory (01:15 - 01:45)

#### Objective:
Teach students to save and load data using files — the key to a program that "remembers."

#### Key Concept: Reading and Writing Files 📝
```python
# WRITING to a file (creates it if it doesn't exist, overwrites if it does)
with open("high_score.txt", "w") as file:
    file.write("5")

# READING from a file
with open("high_score.txt", "r") as file:
    saved_score = file.read()
    print(saved_score)          # "5" - remember, this is TEXT!
    print(int(saved_score) + 1) # Convert to a number to do math
```
- **Analogy:** `open(..., "w")` is like opening a notebook to a blank page and writing in pen — old content gets erased. `open(..., "r")` is like opening the notebook to read what's already there.
- The `with` keyword automatically closes the file safely when you're done — always use it!
- **Modes:** `"r"` = read, `"w"` = write (overwrite), `"a"` = append (add to the end).

#### Handling a Missing File — `try` / `except`
The very first time the program runs, `high_score.txt` doesn't exist yet! Trying to read it crashes with `FileNotFoundError` unless we handle it:
```python
def load_high_score():
    try:
        with open("high_score.txt", "r") as file:
            return int(file.read())
    except FileNotFoundError:
        return 0  # No file yet? Start at 0.
```
- **Analogy:** `try` means "attempt this, but be ready to catch it if it falls" — `except` is the safety net.

#### Step 1: The 5-Minute Python Bug Hunt (Gamified Debugging)
Distribute broken code from `ACTIVITIES.md` (or project on board).
Challenge: *"Detective Codey broke the Quiz Master! Find and fix 5 bugs!"*
- Bug 1: Using `[]` instead of `{}` to create a dictionary (or vice versa).
- Bug 2: Wrong key name used to access a dictionary value (`q["Question"]` vs `q["question"]` — Python is case-sensitive!).
- Bug 3: A function defined but never called.
- Bug 4: Forgetting `return` inside a function, so the result is `None`.
- Bug 5: Opening a file to read (`"r"`) without handling `FileNotFoundError`, crashing on first run.

#### Step 2: Main Project — "Sri Lankan Trivia Quiz Master"
Students open `starter-kit/quiz_game.py` and fill in the TODOs to build the final project:
- [x] A `questions` list containing at least 5 question dictionaries.
- [x] An `ask_question()` function that asks one question and returns 1 or 0.
- [x] A `load_high_score()` function using `try`/`except` to read `high_score.txt` (or return 0 if missing).
- [x] A `save_high_score()` function that writes the new score to `high_score.txt`.
- [x] A `play_quiz()` function that ties it all together: shows the high score, loops through all questions, and saves a new high score if beaten.

---

### 🌟 Module 5: Final Showcase & Wrap-up (01:45 - 02:00)

1. **Peer Gallery Walk (5 mins):**
   - Students run their Quiz Master for a neighbor, then close and reopen it to prove the high score really was saved!
2. **Design Awards (3 mins):**
   - Award fun badges/stickers:
     - 🗂️ *Data Organizer Award* (Best structured questions list)
     - 🧰 *Function Master Award* (Cleanest, best-named functions)
     - 💾 *Memory Keeper Award* (First to prove their high score persists after closing the program)
3. **Closing Recap — The Full 2-Week Journey (5 mins):**
   - Session 1: variables, input/output, conditionals, loops → a working quiz.
   - Session 2: lists, dictionaries, functions, files → a quiz that organizes its data cleanly AND remembers forever.
   - Celebrate: *"You didn't just learn Python syntax — you built and shipped a real project with a real feature, just like professional software engineers do!"*
4. **Certificate / Sticker Handout — "Python Quiz Master" Certificate for finishing both sessions.**
5. **Optional Homework/Next Steps:** Encourage students to add more questions, a timer, or explore Boss Quests in `ACTIVITIES.md` (multiple-choice questions, a leaderboard of top 3 scores, categories).

---

## 👩‍🏫 Facilitator Tips & Troubleshooting

- **Symptom:** `FileNotFoundError: [Errno 2] No such file or directory: 'high_score.txt'`
  - *Fix:* This is expected on the very first run! Make sure `load_high_score()` wraps the `open(..., "r")` call in a `try`/`except FileNotFoundError` block that returns `0`.
- **Symptom:** `KeyError: 'answer'`
  - *Fix:* A dictionary key was typed incorrectly somewhere (check spelling and capitalization — `"Answer"` and `"answer"` are different keys!).
- **Symptom:** A function runs but the score never changes.
  - *Fix:* Check that the function actually has a `return` statement, and that the caller does `score = score + ask_question(q)` — a function's `return` value is lost unless you store or use it.
- **Symptom:** `high_score.txt` isn't found / not saved where expected.
  - *Fix:* Files are saved relative to where the `.py` file is run from. In Thonny, make sure the file has been saved first (`Ctrl+S`) so it has a proper folder location.
- **Symptom:** Students ask "why does the list start at 0, not 1?"
  - *Explain:* It's a long-standing programming convention — think of it as counting "steps away from the start" rather than "the Nth item." It feels odd at first but becomes natural with practice!
