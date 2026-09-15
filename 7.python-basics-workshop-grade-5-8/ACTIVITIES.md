# 🎮 Student Activities & Python Bug Hunt Challenges

> **Workshop:** Python Basics — Build a Quiz Game (Grade 5-8)
> **Instructions:** Complete Activity 1 first to earn your Python Debugger Badge, then jump into Activity 2 to build your quiz game!

---

## 🕵️ Activity 1: The 5-Minute Python Bug Hunt!

Detective Codey's program has **5 bugs** that are stopping it from running! Can you spot and fix them all?

### ❌ The Broken Python Code (`buggy_quiz.py`):

```python
# Bug Hunt Challenge File
print("Welcome to the quiz!")

name = input("What is your name? ")
score = 0

age_text = input("How old are you? ")
next_year = age_text + 1
print("Next year you will be", next_year)

answer = input("What is the capital of Sri Lanka? ")
if answer.lower() = "sri jayawardenepura kotte"
    print("Correct!")
    score = score + 1
else:
      print("Wrong answer!")

print("Thanks for playing," name)
```

---

### 🔍 Bug Hunt Answer Key (For Instructors):

1. **Bug 1 (Line 7):** `input()` always returns text, so `age_text + 1` crashes (`TypeError`). Fix: `next_year = int(age_text) + 1`.
2. **Bug 2 (Line 11):** Used `=` (assignment) instead of `==` (comparison) inside the `if` condition. Fix: `if answer.lower() == "sri jayawardenepura kotte"`.
3. **Bug 3 (Line 11):** Missing colon `:` at the end of the `if` line. Fix: `if answer.lower() == "sri jayawardenepura kotte":`.
4. **Bug 4 (Line 14):** Inconsistent indentation — the `print("Wrong answer!")` line under `else:` has extra spaces compared to the rest of the code, which can cause an `IndentationError`. Fix: match the indentation (4 spaces) used elsewhere.
5. **Bug 5 (Line 16):** Missing comma between the string and the variable in `print()`. Fix: `print("Thanks for playing,", name)`.

---

## 🚀 Activity 2: Main Project — "Sri Lankan Trivia Quiz Game"

Your mission: Build a working trivia quiz game that a friend or family member can actually play!

### 📋 Checklist & Requirements:

- [ ] **Level 1: Welcome Banner**
  - Open `starter-kit/quiz_game.py` in Thonny.
  - Use `print()` to display a welcome banner using `=` characters, like the CSS/HTML workshops' banners.
  - Ask for the player's name using `input()` and greet them with it using an f-string: `print(f"Good luck, {player_name}!")`.

- [ ] **Level 2: Ask 3 Trivia Questions**
  - Ask at least 3 questions about Sri Lanka using `input()` (capital city, national animal, number of provinces, etc.).
  - Check each answer using `if` / `elif` / `else`. Use `.lower()` so capital letters don't cause a wrong mark.
  - For any question with a numeric answer, remember to use `int(input(...))`.

- [ ] **Level 3: Keep Score**
  - Create a `score` variable starting at `0`.
  - Add `1` to `score` every time an answer is correct.
  - After all questions, print the final score using an f-string: `print(f"Your score: {score} out of 3")`.

- [ ] **Level 4: Final Message**
  - Use `if` / `elif` / `else` to print a different message depending on the score:
    - 3/3 → `"🏆 PERFECT SCORE! You are a Sri Lanka expert!"`
    - 1-2 → `"👍 Good job! Keep learning!"`
    - 0 → `"📚 Nice try! Time to study more about Sri Lanka!"`

- [ ] **Level 5: Play Again Loop**
  - Wrap the whole quiz inside a `while` loop so the player can type `"yes"` to play again.
  - Make sure `play_again` is updated by a new `input()` call inside the loop, or it will loop forever!

---

## 🏆 Activity 3: Fast-Finisher Boss Quests! (For Speed Coders)

Finished Activity 2 already? Level up your Python powers with these Boss Quests!

### ⚡ Quest A: Bonus Round (Nested `if`)
Add a bonus question worth 2 points instead of 1, using a nested `if`:
```python
bonus_answer = input("BONUS (worth 2 points): What year did Sri Lanka gain independence? ")
if bonus_answer == "1948":
    print("🎉 BONUS CORRECT! +2 points!")
    score = score + 2
else:
    print("Close! It was 1948.")
```

### ⚡ Quest B: Input Validation Loop
What if the player types letters instead of a number? Use a `while` loop to keep asking until they type a valid number:
```python
while True:
    provinces_text = input("How many provinces does Sri Lanka have? ")
    if provinces_text.isdigit():
        provinces = int(provinces_text)
        break
    else:
        print("Please type a number, not words!")
```

### ⚡ Quest C: Difficulty Levels
Ask the player to choose `"easy"` or `"hard"` at the start, and use `if`/`else` to give a hint before hard questions only:
```python
difficulty = input("Choose difficulty (easy/hard): ")

if difficulty.lower() == "easy":
    print("Hint: It starts with the letter S!")

answer = input("What is the capital of Sri Lanka? ")
```
