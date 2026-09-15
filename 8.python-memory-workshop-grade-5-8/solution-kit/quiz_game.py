# 🎯 Sri Lankan Trivia Quiz Master - SOLUTION FILE (Session 2: Lists, Functions & Files)
# This is the complete, final version of the two-week project.

HIGH_SCORE_FILE = "high_score.txt"

questions = [
    {"question": "What is the capital city of Sri Lanka?", "answer": "sri jayawardenepura kotte"},
    {"question": "What is the national animal of Sri Lanka?", "answer": "elephant"},
    {"question": "How many provinces does Sri Lanka have?", "answer": "9"},
    {"question": "What is the highest mountain in Sri Lanka?", "answer": "pidurutalagala"},
    {"question": "What is Sri Lanka's most famous export crop grown in the hill country?", "answer": "tea"},
]


def show_welcome():
    print("=" * 45)
    print("🏆 WELCOME TO THE SRI LANKAN TRIVIA QUIZ MASTER! 🏆")
    print("=" * 45)


def ask_question(question_dict):
    """Ask one question and return 1 if correct, 0 if wrong."""
    print(f"\n{question_dict['question']}")
    player_answer = input("Your answer: ")
    if player_answer.lower().strip() == question_dict["answer"]:
        print("✅ Correct!")
        return 1
    else:
        print(f"❌ Nope! The answer was: {question_dict['answer'].title()}")
        return 0


def load_high_score():
    """Read the saved high score from a file. Return 0 if no file exists yet."""
    try:
        with open(HIGH_SCORE_FILE, "r") as file:
            return int(file.read())
    except FileNotFoundError:
        return 0


def save_high_score(score):
    """Save the score to a file so it is remembered next time!"""
    with open(HIGH_SCORE_FILE, "w") as file:
        file.write(str(score))


def play_quiz():
    show_welcome()
    high_score = load_high_score()
    print(f"📈 Current High Score: {high_score}")

    score = 0
    for question_dict in questions:
        score = score + ask_question(question_dict)

    print("\n" + "=" * 45)
    print(f"🎯 Your final score: {score} out of {len(questions)}")

    if score > high_score:
        print("🎉 NEW HIGH SCORE! Saving it for next time...")
        save_high_score(score)
    else:
        print(f"📚 The high score is still {high_score}. Try again to beat it!")

    print("👋 Thanks for playing Sri Lankan Trivia Quiz Master!")


play_quiz()
