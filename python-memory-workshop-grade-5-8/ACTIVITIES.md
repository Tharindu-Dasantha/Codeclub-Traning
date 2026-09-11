# 🎮 Student Activities & Python Bug Hunt Challenges

> **Workshop:** Python Memory & Files — Level Up the Quiz Game (Grade 5-8)
> **Instructions:** Complete Activity 1 first to earn your Python Debugger Badge, then jump into Activity 2 to build the final Quiz Master project!

---

## 🕵️ Activity 1: The 5-Minute Python Bug Hunt!

Detective Codey's Quiz Master program has **5 bugs** that are stopping it from working! Can you spot and fix them all?

### ❌ The Broken Python Code (`buggy_quiz_master.py`):

```python
# Bug Hunt Challenge File
questions = [
    ["question": "What is the capital of Sri Lanka?", "answer": "sri jayawardenepura kotte"},
    {"question": "What is the national animal of Sri Lanka?", "answer": "elephant"},
]

def ask_question(question_dict):
    print(question_dict["Question"])
    player_answer = input("Your answer: ")
    if player_answer.lower() == question_dict["answer"]:
        print("Correct!")
        1
    else:
        print("Wrong!")
        0

def load_high_score():
    with open("high_score.txt", "r") as file:
        return int(file.read())

score = 0
for q in questions:
    score = score + ask_question(q)

high_score = load_high_score()
print("Your score:", score)
print("High score:", high_score)
```

---

### 🔍 Bug Hunt Answer Key (For Instructors):

1. **Bug 1 (Line 3):** The first dictionary starts with `[` instead of `{`. Fix: `{"question": ...`.
2. **Bug 2 (Line 8):** Wrong key capitalization — the dictionary was created with the key `"question"` (lowercase) but accessed with `"Question"` (uppercase). Python dictionary keys are case-sensitive! Fix: `question_dict["question"]`.
3. **Bug 3 (Lines 11 & 14):** The function writes `1` and `0` on their own line instead of returning them, so the function actually returns `None`. Fix: `return 1` and `return 0`.
4. **Bug 4 (`load_high_score`):** No `try`/`except` around the file read — if `high_score.txt` doesn't exist yet (e.g., first run), this crashes with `FileNotFoundError`. Fix: wrap it in `try: ... except FileNotFoundError: return 0`.
5. **Bug 5 (Missing feature):** The program never *saves* a new high score anywhere — there's no `save_high_score()` function or call to it, so the file never gets created or updated in the first place!

---

## 🚀 Activity 2: Main Project — "Sri Lankan Trivia Quiz Master"

Your mission: Level up your Session 1 quiz into a polished app that organizes its data cleanly and remembers the high score forever!

### 📋 Checklist & Requirements:

- [ ] **Level 1: Organize Questions into a List of Dictionaries**
  - In `starter-kit/quiz_game.py`, build a `questions` list where each item is a dictionary with `"question"` and `"answer"` keys.
  - Include **at least 5 questions** about Sri Lanka.

- [ ] **Level 2: Write the `ask_question()` Function**
  - It should take one `question_dict` parameter, print the question, get the player's answer, and `return 1` if correct or `return 0` if wrong (case-insensitive using `.lower()`).

- [ ] **Level 3: Loop Through All Questions**
  - Use a `for` loop to go through every question in `questions`, calling `ask_question()` for each one and adding up the total `score`.

- [ ] **Level 4: Save and Load the High Score**
  - Write `load_high_score()`: use `try`/`except FileNotFoundError` to read `high_score.txt`, returning `0` if it doesn't exist yet.
  - Write `save_high_score(score)`: use `open("high_score.txt", "w")` to write the new score.
  - In your main `play_quiz()` function: load the high score at the start, and if the new `score` beats it, call `save_high_score()` and celebrate!

- [ ] **Level 5: Prove It Works!**
  - Run your program, get a score, close it completely, and run it again. Does it remember the high score? 🎉

---

## 🏆 Activity 3: Fast-Finisher Boss Quests! (For Speed Coders)

Finished Activity 2 already? Level up your Python powers with these Boss Quests!

### ⚡ Quest A: Multiple Choice Questions
Add an `"options"` key to your dictionaries and show a lettered menu:
```python
question = {
    "question": "What is the national animal of Sri Lanka?",
    "options": ["A) Lion", "B) Elephant", "C) Peacock"],
    "answer": "b",
}

print(question["question"])
for option in question["options"]:
    print(option)
answer = input("Type A, B, or C: ")
```

### ⚡ Quest B: Top 3 Leaderboard (Lists of Scores)
Instead of a single high score, keep the top 3 scores ever played, saved one per line in the file:
```python
def load_leaderboard():
    try:
        with open("leaderboard.txt", "r") as file:
            lines = file.readlines()               # One line per saved score
            return [int(line.strip()) for line in lines]
    except FileNotFoundError:
        return []

def save_leaderboard(scores):
    top_three = sorted(scores, reverse=True)[:3]   # Biggest scores first, keep only 3
    with open("leaderboard.txt", "w") as file:
        for score in top_three:
            file.write(str(score) + "\n")
```

### ⚡ Quest C: Categories (Nested Menus)
Group questions by category using a dictionary of lists, and let the player pick one before starting:
```python
quiz_bank = {
    "geography": [
        {"question": "What is the capital of Sri Lanka?", "answer": "sri jayawardenepura kotte"},
    ],
    "animals": [
        {"question": "What is the national animal of Sri Lanka?", "answer": "elephant"},
    ],
}

category = input("Choose a category (geography/animals): ")
selected_questions = quiz_bank[category.lower()]
```
