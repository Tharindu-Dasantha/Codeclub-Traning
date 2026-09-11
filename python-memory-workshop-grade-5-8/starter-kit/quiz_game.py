# 🎯 Sri Lankan Trivia Quiz Master - STARTER FILE (Session 2: Lists, Functions & Files)
# Build on what you made in Session 1! This time we organize our quiz using
# LISTS, DICTIONARIES, FUNCTIONS, and save the high score to a FILE.

HIGH_SCORE_FILE = "high_score.txt"

# ---------------- STEP 1: Store all questions in a list of dictionaries ----------------
# TODO 1: Add at least 3 more question dictionaries to this list!
#         Each one needs a "question" key and a lowercase "answer" key.
questions = [
    {"question": "What is the capital city of Sri Lanka?", "answer": "sri jayawardenepura kotte"},
    {"question": "What is the national animal of Sri Lanka?", "answer": "elephant"},
    # TODO: add more questions here, e.g. {"question": "...", "answer": "..."}
]


# ---------------- STEP 2: Turn repeated code into FUNCTIONS ----------------
def show_welcome():
    print("=" * 45)
    print("🏆 WELCOME TO THE SRI LANKAN TRIVIA QUIZ MASTER! 🏆")
    print("=" * 45)


def ask_question(question_dict):
    """Ask one question and return 1 if correct, 0 if wrong."""
    print(f"\n{question_dict['question']}")
    player_answer = input("Your answer: ")
    # TODO 2: compare player_answer.lower() to question_dict["answer"]
    #         Print "Correct!" or "Wrong! The answer was ..." either way.
    # TODO 3: return 1 if correct, return 0 if not


def load_high_score():
    """Read the saved high score from a file. Return 0 if no file exists yet."""
    # TODO 4: use try/except FileNotFoundError around opening HIGH_SCORE_FILE in "r" mode
    # HINT: file.read() gives back TEXT - use int() to convert it to a number
    # HINT: if the file is missing, just `return 0` inside the except block
    pass


def save_high_score(score):
    """Save the score to a file so it is remembered next time!"""
    # TODO 5: use open(HIGH_SCORE_FILE, "w") as file, then file.write(str(score))
    pass


def play_quiz():
    show_welcome()
    high_score = load_high_score()
    print(f"📈 Current High Score: {high_score}")

    score = 0
    # TODO 6: loop through every question in the `questions` list using a for loop
    #         For each one, call ask_question() and add the result to `score`

    print(f"\n🎯 Your final score: {score} out of {len(questions)}")

    # TODO 7: if score is higher than high_score:
    #             call save_high_score(score) and print a celebration message
    #         otherwise:
    #             print an encouraging message showing the current high_score


play_quiz()
