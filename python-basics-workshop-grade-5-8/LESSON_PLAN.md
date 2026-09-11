# ⏱️ Detailed 2-Hour Facilitator Lesson Plan: Python Basics — Build a Quiz Game

> **Session Title:** Python Basics — Talk to Your Computer!
> **Target Group:** Grade 5 - Grade 8 (Ages 10-14, Sri Lanka)
> **Duration:** 120 Minutes (2 Hours)
> **Pedagogical Strategy:** Visual Analogies + Live Coding + Gamified Bug Hunt + Project-Based Learning

---

## 🕒 Master Schedule Overview

| Time | Duration | Module | Activity / Key Concept |
| :--- | :--- | :--- | :--- |
| **00:00 - 00:15** | 15 min | **Module 1: Meet Python & Talk to the Computer** | What is a programming language? Running code in Thonny, `print()`, comments |
| **00:15 - 00:40** | 25 min | **Module 2: Variables & Getting Input** | `str`, `int`, `float`, `bool`, `input()`, `int(input())` |
| **00:40 - 01:10** | 30 min | **Module 3: Decisions & Comparisons** | `==`, `>`, `<`, `if` / `elif` / `else` |
| **01:10 - 01:20** | 10 min | **☕ Energy Break & Quiz** | "True or False" Physical Energizer & 5-question rapid fire pop quiz |
| **01:20 - 01:50** | 30 min | **Module 4: Loops & The Quiz Project** | `while` loops, Python Bug Hunt Challenge, build the Quiz Game |
| **01:50 - 02:00** | 10 min | **Module 5: Showcase & Wrap-up** | Peer Showcase, Recap, Teaser for Session 2 (Lists, Functions, Files) |

---

## 📘 Detailed Module Breakdown

### 🐍 Module 1: Meet Python & Talk to the Computer (00:00 - 00:15)

#### Objective:
Get every student running their first line of Python and understanding what a "program" actually is.

#### Facilitator Script & Steps:
1. **The Hook — "The World's Most Literal Robot":**
   - Ask: *"If I told a robot to 'make me a sandwich,' but it had never seen bread before, what would happen?"*
   - Explain: Computers are incredibly powerful but 100% literal. They only do **exactly** what we type — no more, no less. Programming is the art of giving *precise* instructions.
2. **What is Python?**
   - Python is a programming language — a way to type instructions a computer can understand and run, one line at a time, top to bottom.
   - It's used to build games, websites, apps, robots, and even control the Mars rovers!
3. **Opening Thonny & Running Code:**
   - Open Thonny. Show the two areas: the **Editor** (top, where you write code and save it) and the **Shell/Console** (bottom, where output appears).
   - Type this together and press the green ▶ **Run** button (or `F5`):
     ```python
     print("Ayubowan! Hello, Python!")
     ```
   - Explain `print()`: it's a **function** — a built-in command — that displays text on the screen. The text must be inside quotes `" "`.
4. **Comments — Notes for Humans:**
   - Anything after a `#` is ignored by Python — it's a note for humans reading the code!
     ```python
     # This line prints a greeting
     print("Ayubowan! Hello, Python!")
     ```

---

### 🔤 Module 2: Variables & Getting Input (00:15 - 00:40)

#### Objective:
Teach students how to store information in variables and how to ask the user questions.

#### Key Concepts Introduced:
- **Variables** — labeled boxes that store information (`name = "Kavindu"`).
- **Data types:** `str` (text), `int` (whole numbers), `float` (decimals), `bool` (`True`/`False`).
- `input()` — pauses the program and waits for the user to type something.
- **Type conversion:** `input()` always returns text, so we use `int()` to turn it into a number for math.

#### Live Demo Activity (Follow Along):
```python
# Variables store information in labeled boxes
player_name = "Nimal"       # str (text)
player_age = 12             # int (whole number)
height_m = 1.45             # float (decimal)
is_playing = True           # bool (True or False)

print(player_name)
print(player_age)

# input() asks the user a question and stores their answer
favorite_color = input("What is your favorite color? ")
print("Cool, I like " + favorite_color + " too!")

# input() always gives back TEXT, so convert it to a number with int()
age_text = input("How old are you? ")
age_number = int(age_text)
print("Next year you will be", age_number + 1)
```

#### Guided Practice:
1. Students type the variables example and run it.
2. Students change the values (their own name, age, height) and re-run.
3. Students add one new `input()` line asking "What is your favorite subject?" and print a reply using it.
4. **Spot Check:** Walk around — everyone's console should show personalized output!

---

### 🤔 Module 3: Decisions & Comparisons (00:40 - 01:10)

#### Objective:
Teach students how programs make decisions using comparisons and `if` / `elif` / `else`.

#### Key Concepts Introduced:

#### 1. Comparison Operators 🔍
| Operator | Meaning | Example |
| :--- | :--- | :--- |
| `==` | Equal to | `score == 10` |
| `!=` | Not equal to | `answer != "yes"` |
| `>` | Greater than | `age > 12` |
| `<` | Less than | `score < 5` |
| `>=` / `<=` | Greater/less than or equal | `age >= 13` |

> ⚠️ **Golden Rule:** `=` **assigns** a value (`score = 5`). `==` **compares** two values (`score == 5`). Mixing these up is the #1 beginner bug!

#### 2. The `if` / `elif` / `else` Decision Tree 🌳
```python
answer = input("What is the capital of Sri Lanka? ")

if answer.lower() == "sri jayawardenepura kotte":
    print("✅ Correct! You're a geography star!")
elif answer.lower() == "colombo":
    print("🤏 So close! Colombo is the commercial capital, but not quite it!")
else:
    print("❌ Not quite. The answer is Sri Jayawardenepura Kotte.")
```
- **Analogy:** A decision tree at a fork in a road — `if` is the first fork, `elif` ("else if") is another possible fork, `else` is "if nothing else matched, do this."
- **Important syntax rules:** Every `if`/`elif`/`else` line ends with a colon `:`, and the code underneath must be **indented** (4 spaces). Python uses indentation instead of `{ }` like other languages!
- `.lower()` converts text to lowercase so `"Elephant"` and `"elephant"` both count as correct — a great trick for checking user answers fairly.

#### Guided Practice:
Students write a program that asks for their age and prints:
- `"You are a kid!"` if age is less than 13
- `"You are a teenager!"` if age is 13-19
- `"You are an adult!"` otherwise

---

### ☕ Energy Break & Quiz (01:10 - 01:20)

- **Physical Energizer — "True or False!" (3 mins):**
  - Facilitator reads a statement (e.g., *"Python uses curly braces `{}` for if statements"*).
  - If **True**, students raise both hands. If **False**, students cross their arms into an "X".
- **5-Question Rapid Fire Quiz:**
  1. What symbol starts a comment in Python? (`#`)
  2. What does `input()` always return — text or a number? (*Always text/string — you must convert it!*)
  3. What's the difference between `=` and `==`? (*`=` assigns, `==` compares*)
  4. What must come at the end of every `if` line? (a colon `:`)
  5. How does Python know which lines belong inside an `if` block? (*Indentation/spacing!*)

---

### 🔁 Module 4: Loops & The Quiz Project (01:20 - 01:50)

#### Objective:
Introduce `while` loops for repeating actions, then apply everything learned to build the main project.

#### Key Concept: The `while` Loop 🔁
A `while` loop repeats its code **as long as** a condition is `True` — perfect for "keep playing until the user quits."

```python
play_again = "yes"

while play_again.lower() == "yes":
    print("🎮 Playing a round of the game!")
    play_again = input("Play again? (yes/no): ")

print("👋 Thanks for playing!")
```
- **Analogy:** A `while` loop is like telling someone *"keep stirring the pot while it's not boiling yet."* It keeps checking the condition every time before repeating.
- ⚠️ **Warning — Infinite Loops:** If the condition never becomes `False`, the loop runs forever! Always make sure something inside the loop can change the condition (like `play_again` being updated by a new `input()`).

#### Step 1: The 5-Minute Python Bug Hunt (Gamified Debugging)
Distribute broken code from `ACTIVITIES.md` (or project on board).
Challenge: *"Detective Codey broke the code! Find and fix 5 Python bugs!"*
- Bug 1: Missing colon `:` after an `if` statement.
- Bug 2: Using `=` instead of `==` in a comparison.
- Bug 3: Inconsistent indentation causing an `IndentationError`.
- Bug 4: Mismatched quotes (`"hello'`).
- Bug 5: Forgetting to convert `input()` to `int()` before doing math, causing a `TypeError`.

#### Step 2: Main Project — "Sri Lankan Trivia Quiz Game"
Students open `starter-kit/quiz_game.py` and fill in the TODOs to build a quiz game with:
- [x] A welcome banner using `print()`.
- [x] The player's name captured with `input()`.
- [x] At least 3 trivia questions about Sri Lanka, checked with `if`/`elif`/`else` (case-insensitive using `.lower()`).
- [x] A `score` variable that increases for each correct answer.
- [x] A final message using `if`/`elif`/`else` based on the score.
- [x] A `while` loop so the player can choose to play again.

---

### 🌟 Module 5: Showcase & Wrap-up (01:50 - 02:00)

1. **Peer Gallery Walk (5 mins):**
   - Students take turns running their quiz for a neighbor, who plays it live!
2. **Design Awards (3 mins):**
   - Award fun badges/stickers:
     - 🧠 *Best Question Award* (Most creative trivia question)
     - 🔁 *Loop Master Award* (Cleanest "play again" loop)
     - 🐞 *Bug Squasher Award* (Fastest Bug Hunt finisher)
3. **Closing Recap & What's Next (2 mins):**
   - Recap: Variables store data, `input()`/`print()` talk to the user, `if` makes decisions, `while` repeats actions.
   - Teaser for Session 2: *"Right now, if you close your quiz game, it forgets everything — even the high score! Next session, we teach it to organize lots of questions neatly and remember the high score forever, even after closing the program!"*
4. **Certificate / Sticker Handout.**
5. **Homework (optional):** Ask students to add 2 more trivia questions to their quiz at home and try it on a family member.

---

## 👩‍🏫 Facilitator Tips & Troubleshooting

- **Symptom:** `IndentationError: expected an indented block`
  - *Fix:* The line after a `:` (like after `if answer == "yes":`) must be indented by 4 spaces (Thonny usually does this automatically after you press Enter).
- **Symptom:** Program crashes with `ValueError: invalid literal for int()`
  - *Fix:* The user typed letters instead of a number when the code called `int(input(...))`. Explain that `int()` can only convert text that looks like a whole number.
- **Symptom:** `if` statement never matches even when the answer looks right!
  - *Fix:* Check for extra spaces or capital letters. Remind students to use `.lower()` on both sides of the comparison, and `.strip()` to remove accidental spaces if needed.
- **Symptom:** The `while` loop runs forever and Thonny freezes!
  - *Fix:* Press the red **Stop** button in Thonny. Check that `play_again` is being updated by a new `input()` call *inside* the loop.
