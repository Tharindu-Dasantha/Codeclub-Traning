print("=" * 40)
print("🏆 WELCOME TO THE SRI LANKAN TRIVIA QUIZ! 🏆")
print("=" * 40)

# TODO 1: Ask the player for their name using input() and store it
#         in a variable called player_name.
player_name = input("What is your name, champion? ")

# TODO 2: Print a greeting to the player using their name.
#         HINT: print(f"Good luck, {player_name}! Let's begin...")


score = 0  # This keeps track of correct answers - don't change this line!

# ---------------- QUESTION 1 ----------------
print("\nQuestion 1: What is the capital city of Sri Lanka?")
answer1 = input("Your answer: ")

# TODO 3: Check if answer1.lower() equals "sri jayawardenepura kotte"
#         If correct: print "Correct!" and add 1 to score (score = score + 1)
#         If wrong: print the correct answer


# ---------------- QUESTION 2 ----------------
print("\nQuestion 2: What is the national animal of Sri Lanka?")
answer2 = input("Your answer: ")

# TODO 4: Check if answer2.lower() equals "elephant"
#         Add 1 to score if correct, otherwise print the correct answer


# ---------------- QUESTION 3 ----------------
print("\nQuestion 3: How many provinces does Sri Lanka have?")
answer3 = input("Your answer (as a number): ")

# TODO 5: Convert answer3 to a whole number using int()
# TODO 6: Check if it equals 9, add 1 to score if correct


# ---------------- FINAL SCORE ----------------
print("\n" + "=" * 40)

# TODO 7: Print the final score out of 3 using an f-string
#         HINT: print(f"{player_name}, your final score is {score} out of 3!")

# TODO 8: Use if / elif / else to print a message based on score:
#   3   -> "🏆 PERFECT SCORE! You are a Sri Lanka expert!"
#   1-2 -> "👍 Good job! Keep learning!"
#   0   -> "📚 Nice try! Time to study more about Sri Lanka!"


# ---------------- BOSS QUEST (optional) ----------------
# TODO 9 (Bonus): Wrap this whole quiz in a while loop so the player
