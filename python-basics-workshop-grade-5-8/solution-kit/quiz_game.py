# 🎯 Sri Lankan Trivia Quiz Game - SOLUTION FILE
# This is the complete, working version of the Session 1 project.

print("=" * 40)
print("🏆 WELCOME TO THE SRI LANKAN TRIVIA QUIZ! 🏆")
print("=" * 40)

play_again = "yes"

while play_again.lower() == "yes":
    player_name = input("\nWhat is your name, champion? ")
    print(f"Good luck, {player_name}! Let's begin...")

    score = 0

    # ---------------- QUESTION 1 ----------------
    print("\nQuestion 1: What is the capital city of Sri Lanka?")
    answer1 = input("Your answer: ")
    if answer1.lower() == "sri jayawardenepura kotte":
        print("✅ Correct!")
        score = score + 1
    else:
        print("❌ Oops! The answer was Sri Jayawardenepura Kotte.")

    # ---------------- QUESTION 2 ----------------
    print("\nQuestion 2: What is the national animal of Sri Lanka?")
    answer2 = input("Your answer: ")
    if answer2.lower() == "elephant":
        print("✅ Correct!")
        score = score + 1
    else:
        print("❌ Oops! The answer was Elephant.")

    # ---------------- QUESTION 3 ----------------
    print("\nQuestion 3: How many provinces does Sri Lanka have?")
    answer3 = int(input("Your answer (as a number): "))
    if answer3 == 9:
        print("✅ Correct!")
        score = score + 1
    else:
        print("❌ Oops! The answer was 9.")

    # ---------------- FINAL SCORE ----------------
    print("\n" + "=" * 40)
    print(f"🎯 {player_name}, your final score is {score} out of 3!")

    if score == 3:
        print("🏆 PERFECT SCORE! You are a Sri Lanka expert!")
    elif score >= 1:
        print("👍 Good job! Keep learning!")
    else:
        print("📚 Nice try! Time to study more about Sri Lanka!")

    play_again = input("\nDo you want to play again? (yes/no): ")

print("\n👋 Thanks for playing! See you next time!")
