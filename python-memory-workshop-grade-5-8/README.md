# 🗂️ Code Club Workshop: Python Memory & Files — Level Up the Quiz Game!
> **Target Audience:** Grade 5-8 Students (Ages 10-14 in Sri Lanka)
> **Duration:** 2 Hours (120 Minutes)
> **Topic:** Lists, Dictionaries, Functions & File Input/Output ("teaching your program to remember things")
> **Prerequisites:** [Session 1: Python Basics](../python-basics-workshop-grade-5-8/README.md) — variables, `input()`/`print()`, `if`/`elif`/`else`, `while` loops.

---

## 📌 Workshop Overview

Welcome to **Python Memory & Files**! This 2-hour interactive workshop is **Session 2 of 2**, and it picks up *exactly* where [Session 1](../python-basics-workshop-grade-5-8/README.md) left off — with the working **Sri Lankan Trivia Quiz Game** every student built.

There's one big problem with that quiz game: the moment you close it, it forgets *everything*, including the high score! In this session, students discover that variables live only in **short-term memory (RAM)** — the instant the program stops, the boxes are wiped clean. To fix this, they learn to organize their questions neatly using **lists and dictionaries**, tidy up repeated code using **functions**, and — the big finale — save data to a **file** so it survives even after the program closes. That's **long-term memory**!

By the end of this session, every student has a complete, polished **Sri Lankan Trivia Quiz Master** app that remembers its high score forever, ready to show off to family and friends.

---

## 📁 Session Folder Structure

Everything required to facilitate or attend this session is located within this folder (`python-memory-workshop-grade-5-8/`):

```text
python-memory-workshop-grade-5-8/
├── README.md                   👈 You are here! Main overview & setup guide
├── LESSON_PLAN.md              👈 Detailed 120-minute facilitator step-by-step guide
├── STUDENT_CHEATSHEET.md       👈 Printable 1-page Lists/Dictionaries/Functions/Files cheatsheet
├── ACTIVITIES.md               👈 Step-by-step student activities, Bug Hunt challenge & Boss Quests
├── SLIDES.md                   👈 Slide-by-slide presentation script for projector projection
├── starter-kit/
│   └── quiz_game.py            👈 Starter file (builds on Session 1) with TODOs & guiding comments
├── solution-kit/
│   └── quiz_game.py            👈 Complete, final "Quiz Master" project with saved high score
└── interactive-demo/
    └── playground.html         👈 Optional browser-based Python playground (needs internet once)
```

---

## 🎯 Key Learning Objectives

By the end of this 2-hour session, students will be able to:
1. Explain the difference between **short-term memory** (variables in RAM, lost on close) and **long-term memory** (files saved to disk, kept forever).
2. Create and loop through a **list** (`[]`) to store many pieces of data together.
3. Create and use a **dictionary** (`{}`) to group related information (a question + its answer) under one name.
4. Write and call **functions** (`def`) with parameters and `return` values to avoid repeating code.
5. Open, read, and write text files using `open()`, `.read()`, `.write()`, and the `with` statement.
6. Use `try` / `except` to handle a missing file gracefully (`FileNotFoundError`).
7. Combine everything to build a final project: a quiz game that **saves and loads a high score** between runs.

---

## 🛠️ Required Setup & Hardware

### For Students:
* The same computer/setup used in Session 1: **Python 3** + **[Thonny](https://thonny.org)** (or VS Code/IDLE).
* Their own `quiz_game.py` from Session 1 (or the `solution-kit/quiz_game.py` from Session 1 as a backup starting point).
* *No internet connection required* to code — everything runs locally once Python/Thonny is installed.

### For Instructor / Facilitator:
* Projector or large display screen.
* Whiteboard & color markers.
* Printed copies of `STUDENT_CHEATSHEET.md` (optional but recommended).
* Confirm each student still has their Session 1 project folder, or hand out `starter-kit/quiz_game.py` from this session as a fresh base.

---

## 🚀 How to Run This Session

1. **Before Class:**
   - Copy the `starter-kit/` folder onto student machines or USB sticks.
   - Review `LESSON_PLAN.md` for timing benchmarks.
2. **During Class:**
   - Follow the 120-minute timeline in `LESSON_PLAN.md`.
   - Project `SLIDES.md` on the main screen for visual explanation.
   - Facilitate Activity 1 (Python Bug Hunt) and Activity 2 (Build the Quiz Master) from `ACTIVITIES.md`.
3. **After Class:**
   - Celebrate! Every student now owns a complete, two-week Python project — the **Sri Lankan Trivia Quiz Master** — that they can keep improving, share with family, or add to a portfolio.

---

## 🔮 The Finished Two-Week Project

| Session | Focus | What Got Added |
| :--- | :--- | :--- |
| [Session 1](../python-basics-workshop-grade-5-8/README.md) | Basics: variables, input/output, conditionals, loops | A working quiz with 3 hardcoded questions, scoring, and a "play again?" loop |
| **Session 2 (this one)** | Lists, Dictionaries, Functions & File I/O ("memory") | Questions organized in a list of dictionaries, reusable functions, and a **high score saved to a file** that survives closing the program |

By the end of Week 2, students don't just understand Python syntax — they've shipped a real, working app with a feature (saved high scores) found in real games!

---

*Created for Code Club Sri Lanka — Empowering future software engineers, one line of code at a time! 🇱🇰🐍💻*
