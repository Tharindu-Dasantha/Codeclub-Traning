# 📊 Slide Deck Guide & Projection Notes: Python Memory & Files
> **Session:** Python Memory & Files (Grade 5-8 Sri Lanka)
> *Facilitators can project this markdown file directly or copy text into Google Slides / PowerPoint.*

---

## 🖥️ Slide 1: Welcome Back!
- **Title:** 🗂️ Python Memory & Files — Make Your Quiz Game Remember!
- **Subtitle:** Level up the Sri Lankan Trivia Quiz Game you built last session! 🚀
- **Visual:** Code Club Sri Lanka Logo + Emojis 🇱🇰🗂️💻
- **Facilitator Script:** *"Ayubowan coders! Last session your quiz game could ask questions and keep score. Today, we teach it to REMEMBER — even after it closes!"*

---

## 🖥️ Slide 2: The Big Problem 🤔
- Run last session's quiz, get a great score, close the program, run it again.
- **Question:** *"Where did the high score go?"*
- **Answer:** Variables live in RAM — a whiteboard wiped clean when the program closes. That's **short-term memory**.
- **Today's Goal:** Learn to write to a **file** — a notebook that stays saved forever. That's **long-term memory**!

---

## 🖥️ Slide 3: Lists — Storing Many Things 📋
```python
questions = ["Q1", "Q2", "Q3"]

print(questions[0])     # Lists start at 0!
for question in questions:
    print(question)
```
- No more `answer1`, `answer2`, `answer3` — just ONE list holding everything!

---

## 🖥️ Slide 4: Dictionaries — Grouping Related Data 🗃️
```python
question = {"question": "Capital of Sri Lanka?", "answer": "sri jayawardenepura kotte"}
print(question["answer"])
```
- **A LIST of dictionaries = our whole quiz, neatly organized!**
```python
questions = [
    {"question": "Capital of Sri Lanka?", "answer": "sri jayawardenepura kotte"},
    {"question": "National animal?", "answer": "elephant"},
]
```
- ⚠️ Dictionary keys are case-sensitive: `"answer"` ≠ `"Answer"`!

---

## 🖥️ Slide 5: Functions — Reusable Recipes 🧰
```python
def ask_question(question_dict):
    print(question_dict["question"])
    player_answer = input("Your answer: ")
    if player_answer.lower() == question_dict["answer"]:
        return 1
    else:
        return 0
```
- **Analogy:** A function is a recipe card — write it once, "cook" it (call it) as many times as you like!
- `return` sends a result back out of the function.

---

## 🖥️ Slide 6: File I/O — True Long-Term Memory 💾
```python
# WRITE
with open("high_score.txt", "w") as file:
    file.write("5")

# READ
with open("high_score.txt", "r") as file:
    saved_score = int(file.read())
```
- `"r"` = read, `"w"` = write (overwrites!), `"a"` = append.
- Always use `with open(...) as file:` — it closes the file safely.

---

## 🖥️ Slide 7: Handling a Missing File 🛟
```python
def load_high_score():
    try:
        with open("high_score.txt", "r") as file:
            return int(file.read())
    except FileNotFoundError:
        return 0
```
- **Analogy:** `try` = "attempt this, but be ready to catch it if it falls." `except` is the safety net.
- First run = no file yet = `FileNotFoundError` unless we catch it!

---

## 🖥️ Slide 8: 🕵️ Python Bug Hunt Time!
- **Challenge:** Spot 5 bugs in Detective Codey's broken Quiz Master code!
- *(Project code from `ACTIVITIES.md` and let students call out fixes!)*

---

## 🖥️ Slide 9: 🚀 Final Project Build Time!
- **Project:** "Sri Lankan Trivia Quiz Master"
- Open `starter-kit/quiz_game.py` in Thonny and fill in the TODOs.
- **The 5 Levels:** Questions list → `ask_question()` → loop through all → `load`/`save_high_score()` → prove it persists!

---

## 🖥️ Slide 10: Final Showcase & Celebration! 🌟
- **Proof Challenge:** Run your quiz, get a score, CLOSE the program, reopen it — is the high score still there?
- **Award Badges:** Data Organizer 🗂️, Function Master 🧰, Memory Keeper 💾
- **The Full Journey:** Session 1 built a working quiz. Session 2 taught it to organize data AND remember forever.
- **You did it!** You've built and shipped a real Python project in two weeks! 🎉🐍
