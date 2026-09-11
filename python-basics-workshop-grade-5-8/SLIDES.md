# 📊 Slide Deck Guide & Projection Notes: Python Basics — Build a Quiz Game
> **Session:** Python Basics (Grade 5-8 Sri Lanka)
> *Facilitators can project this markdown file directly or copy text into Google Slides / PowerPoint.*

---

## 🖥️ Slide 1: Welcome to Python Basics!
- **Title:** 🐍 Python Basics — Talk to Your Computer!
- **Subtitle:** Build your very own Sri Lankan Trivia Quiz Game! 🚀
- **Visual:** Code Club Sri Lanka Logo + Emojis 🇱🇰🐍💻
- **Facilitator Script:** *"Ayubowan coders! You've built pages with HTML and made them beautiful with CSS. Today we teach the computer to THINK — using Python!"*

---

## 🖥️ Slide 2: Why do we need Python?
- **The Literal Robot Analogy:** Computers only do EXACTLY what you tell them — no guessing, no assumptions!
- **What can Python build?** Games, apps, websites, robots, even the software on Mars rovers!
- **Today's Mission:** Build a Quiz Game that asks questions, checks answers, and keeps score.

---

## 🖥️ Slide 3: Running Your First Program
- **The Thonny Editor:** Top half = write code. Bottom half (Shell) = see output.
- **Your First Line:**
  ```python
  print("Ayubowan! Hello, Python!")
  ```
- **How to run it:** Press the green ▶ button or `F5`.
- **Comments:** Anything after `#` is a note for humans — Python ignores it!

---

## 🖥️ Slide 4: Variables — Labeled Boxes 📦
- A variable stores information under a name.
  ```python
  player_name = "Nimal"   # str (text)
  player_age = 12         # int (whole number)
  height_m = 1.45         # float (decimal)
  is_playing = True       # bool (True/False)
  ```
- **4 Data Types to Remember:** `str`, `int`, `float`, `bool`.

---

## 🖥️ Slide 5: Getting Input from the Player 🗣️
- `input()` pauses the program and waits for the player to type something.
  ```python
  name = input("What is your name? ")
  print("Hello, " + name + "!")
  ```
- ⚠️ **Golden Rule:** `input()` ALWAYS returns text — even numbers! Use `int()` to convert it:
  ```python
  age = int(input("How old are you? "))
  ```

---

## 🖥️ Slide 6: Comparisons — Is It True or False? 🔍
| Operator | Meaning |
| :--- | :--- |
| `==` | Equal to |
| `!=` | Not equal to |
| `>` / `<` | Greater / Less than |
- **Check Question:** *"What's the difference between `=` and `==`?"* (`=` stores, `==` compares!)

---

## 🖥️ Slide 7: Making Decisions with `if` / `elif` / `else` 🌳
```python
if answer.lower() == "elephant":
    print("Correct!")
elif answer.lower() == "lion":
    print("Close, but not quite!")
else:
    print("Wrong answer!")
```
- **Rule 1:** Every `if`/`elif`/`else` line ends with a colon `:`.
- **Rule 2:** Python uses INDENTATION (spacing) instead of `{ }` to group code!

---

## 🖥️ Slide 8: Repeating with `while` Loops 🔁
```python
play_again = "yes"

while play_again.lower() == "yes":
    print("Playing a round!")
    play_again = input("Play again? (yes/no): ")
```
- **Analogy:** *"Keep stirring the pot WHILE it hasn't boiled yet."*
- ⚠️ **Watch out for infinite loops!** Something inside must change the condition.

---

## 🖥️ Slide 9: 🕵️ Python Bug Hunt Time!
- **Challenge:** Spot 5 bugs in Detective Codey's broken quiz code!
- *(Project code from `ACTIVITIES.md` and let students call out fixes!)*

---

## 🖥️ Slide 10: 🚀 Project Build Time!
- **Project:** "Sri Lankan Trivia Quiz Game"
- Open `starter-kit/quiz_game.py` in Thonny and fill in the TODOs.
- **Remember the 3 Steps:**
  1. Type your code ⌨️
  2. Save your file (`Ctrl+S`) 💾
  3. Run it (`F5`) ▶️

---

## 🖥️ Slide 11: Showcase & What's Next! 🌟
- **Gallery Walk:** Run your quiz for a classmate and let them play!
- **Award Badges:** Best Question 🧠, Loop Master 🔁, Bug Squasher 🐞
- **The Problem:** *"If we close our quiz game right now... it forgets EVERYTHING. Even the high score!"*
- **What's Next?** Session 2: **Lists, Functions & File Saving** — teaching our quiz game to remember things forever! 🗂️⚡
