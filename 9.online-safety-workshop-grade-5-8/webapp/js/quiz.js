/* ============================================================
   Spot the Scam — Quiz (12 questions, Golden Rules recap)
   ============================================================ */

const QUESTIONS = [
  {
    category: "Personal Info",
    question: "A gaming friend you've only ever chatted with online asks for your home address to \"send you a gift.\" What should you do?",
    choices: [
      "Send it — they seem nice and it's just a gift",
      "Never share your address with someone you only know online, even if they seem friendly",
      "Send a fake address instead",
    ],
    correct: 1,
    explanation: "🔒 Golden Rule 1: Keep Personal Info Private. Anyone you've only met online is still a stranger, no matter how friendly they seem. Never share your home address with them."
  },
  {
    category: "Passwords",
    question: "Which of these is the STRONGEST password?",
    choices: [
      "password123",
      "yourname2011",
      "Tea!Cup_47Sunny",
    ],
    correct: 2,
    explanation: "🔑 Golden Rule 2: A strong password is long, mixes letters/numbers/symbols, and isn't a real word or personal fact. \"Tea!Cup_47Sunny\" ticks every box!"
  },
  {
    category: "Passwords",
    question: "Your best friend asks for your social media password so they can \"check something quick.\" What should you do?",
    choices: [
      "Give it to them, they're my best friend",
      "Never share your password with anyone — not even a best friend",
      "Give them a slightly different password",
    ],
    correct: 1,
    explanation: "🔑 Passwords are never meant to be shared, even with close friends. If they need something, log in yourself and help them instead."
  },
  {
    category: "Scams & Phishing",
    question: "You get this message:\n\n\"🎉 CONGRATULATIONS! You WON a free PS5! Click here within 10 minutes: bit.ly/free-ps5-claim. Enter your name, address and phone number!\"\n\nIs this safe?",
    choices: [
      "Safe — I should click fast before the offer ends!",
      "It's a scam — urgency, a too-good-to-be-true prize, and asking for personal info are all red flags",
      "Safe, but only if I don't enter my phone number",
    ],
    correct: 1,
    explanation: "🤔 Golden Rule 3: This message has THREE major red flags: urgency (\"within 10 minutes\"), a too-good-to-be-true prize, and a request for personal information. Never click links like this."
  },
  {
    category: "Scams & Phishing",
    question: "Which website address looks the MOST suspicious?",
    choices: [
      "www.google.com",
      "amaz0n-prizes-win.com",
      "en.wikipedia.org",
    ],
    correct: 1,
    explanation: "🤔 Scam sites often use misspelled brand names (like a zero instead of an \"o\") plus extra words like \"prizes-win\" to trick you. Always look closely at web addresses."
  },
  {
    category: "Scams & Phishing",
    question: "A pop-up says: \"WARNING! Your device has 3 viruses! Click here to download Free Cleaner App now!\" What should you do?",
    choices: [
      "Click it immediately to protect my device",
      "Close the pop-up/browser without clicking anything, and tell an adult if unsure",
      "Download the app just to check if it's real",
    ],
    correct: 1,
    explanation: "🤔 Real security warnings don't work like scary pop-ups asking you to download random apps. This is a classic scam trick — close it without clicking and ask a trusted adult."
  },
  {
    category: "Cyberbullying",
    question: "Someone keeps sending you mean messages every time you lose a game. What's the best response using the T.H.I.N.K. test?",
    choices: [
      "Send an even meaner message back",
      "Ignore them, block if needed, screenshot the messages, and tell a trusted adult",
      "Share their mean messages with everyone to embarrass them",
    ],
    correct: 1,
    explanation: "💛 Golden Rule 4: Don't fight back or spread it further — that just adds more unkindness. Block if needed, save evidence with a screenshot, and tell a trusted adult."
  },
  {
    category: "Cyberbullying",
    question: "A friend shares an embarrassing photo of a classmate in a group chat and asks you to forward it too. What should you do?",
    choices: [
      "Forward it — everyone else is doing it",
      "Refuse to forward it, and tell a trusted adult",
      "Forward it only to a few close friends",
    ],
    correct: 1,
    explanation: "💛 Forwarding it would make you part of the cyberbullying, even if you didn't take the photo. The kind and safe choice is to refuse and tell a trusted adult."
  },
  {
    category: "Stranger Danger",
    question: "An online friend (who says they're your age) asks to video call, then asks to meet up in person this weekend without telling your parents. What should you do?",
    choices: [
      "Agree, but bring a friend along",
      "Say no, and tell a trusted adult immediately — this is a major warning sign",
      "Agree, since they seem nice and it's just once",
    ],
    correct: 1,
    explanation: "🕵️ Asking to meet in person AND keep it secret from parents are two huge red flags. Never agree to meet an online-only contact without a trusted adult present — tell one right away."
  },
  {
    category: "Personal Info",
    question: "Before posting a photo from school, what should you check?",
    choices: [
      "Nothing, photos are always safe to post",
      "Whether location tags are off, who can see the post, and what's visible in the background (school name, street signs)",
      "Only whether the photo looks good",
    ],
    correct: 1,
    explanation: "🔒 Photos can reveal your location or school even without you saying it out loud. Always check tags, visibility settings, and background details first."
  },
  {
    category: "Golden Rule 5",
    question: "You click a link and suddenly a scary message says your device is \"locked\" unless you pay money. What's the correct order of steps?",
    choices: [
      "TELL an adult, then STOP, then BLOCK",
      "STOP (don't click/pay) → BLOCK/exit the page → TELL a trusted adult",
      "Pay first, then tell an adult afterward",
    ],
    correct: 1,
    explanation: "🗣️ Golden Rule 5: STOP → BLOCK → TELL. Never pay or click further. Close/exit the page, then tell a trusted adult right away — this is very likely a scam."
  },
  {
    category: "Kindness Online",
    question: "Using the T.H.I.N.K. test, which of these is safest to post about a classmate?",
    choices: [
      "An unkind rumor you're not sure is true",
      "A kind, true, and necessary comment, like congratulating them on an achievement",
      "An embarrassing photo they didn't agree to share",
    ],
    correct: 1,
    explanation: "🧠 The T.H.I.N.K. test: is it True, Helpful, Inspiring, Necessary, and Kind? A genuine, kind comment passes every test — the other two options fail on truth, necessity, or kindness."
  },
];

let currentIndex = 0;
let score = 0;
let answered = false;

const quizScreen = document.getElementById('quizScreen');
const resultScreen = document.getElementById('resultScreen');
const progressFill = document.getElementById('progressFill');

function loadQuestion() {
  answered = false;
  const q = QUESTIONS[currentIndex];
  progressFill.style.width = `${(currentIndex / QUESTIONS.length) * 100}%`;

  quizScreen.innerHTML = `
    <div class="glass step-card">
      <div class="score-line">
        <span class="label">Question ${currentIndex + 1} of ${QUESTIONS.length}</span>
        <span class="score">Score: ${score}</span>
      </div>
      <span class="q-category">${q.category}</span>
      <p class="q-text">${q.question}</p>
      <div class="choices" id="choicesWrap"></div>
      <div class="explanation" id="explanation"><div><div class="explanation-inner"></div></div></div>
      <div class="step-actions">
        <button class="btn btn-primary" id="nextBtn" style="visibility:hidden">Next</button>
      </div>
    </div>
  `;

  const wrap = document.getElementById('choicesWrap');
  q.choices.forEach((choiceText, i) => {
    const btn = document.createElement('button');
    btn.className = 'choice-btn';
    btn.textContent = choiceText;
    btn.addEventListener('click', () => selectAnswer(i), { once: true });
    wrap.appendChild(btn);
  });

  document.getElementById('nextBtn').addEventListener('click', nextQuestion);
}

function selectAnswer(choiceIndex) {
  if (answered) return;
  answered = true;
  const q = QUESTIONS[currentIndex];
  const buttons = document.querySelectorAll('.choice-btn');
  buttons.forEach((btn, i) => {
    btn.disabled = true;
    if (i === q.correct) btn.classList.add('correct');
    else btn.classList.add(i === choiceIndex ? 'wrong' : 'dim');
  });

  if (choiceIndex === q.correct) {
    score += 1;
    document.querySelector('.score-line .score').textContent = `Score: ${score}`;
  }

  const explanationEl = document.getElementById('explanation');
  explanationEl.querySelector('.explanation-inner').textContent = q.explanation;
  explanationEl.classList.add('open');

  document.getElementById('nextBtn').style.visibility = 'visible';
}

function nextQuestion() {
  currentIndex += 1;
  if (currentIndex >= QUESTIONS.length) {
    showResults();
  } else {
    loadQuestion();
  }
}

function showResults() {
  progressFill.style.width = '100%';
  quizScreen.style.display = 'none';
  resultScreen.style.display = 'block';

  let emoji, title;
  if (score === QUESTIONS.length) {
    emoji = '🏆'; title = 'Safety Superhero!';
  } else if (score >= Math.ceil(QUESTIONS.length * 0.7)) {
    emoji = '🌟'; title = 'Safety Star!';
  } else if (score >= Math.ceil(QUESTIONS.length * 0.4)) {
    emoji = '👍'; title = 'Safety Rookie — Keep Learning!';
  } else {
    emoji = '📚'; title = "Let's Review the Golden Rules Together!";
  }

  resultScreen.innerHTML = `
    <div class="glass step-card result-card">
      <div class="result-emoji">${emoji}</div>
      <h2>${title}</h2>
      <p class="sub">You scored ${score} out of ${QUESTIONS.length}</p>
      <div class="rules-recap">
        <strong>Remember the 5 Golden Rules:</strong><br>
        🔒 Keep Personal Info Private<br>
        🔑 Use Strong, Secret Passwords<br>
        🤔 Think Before You Click<br>
        💛 Be Kind Online, Report Unkindness<br>
        🗣️ Tell a Trusted Adult
      </div>
      <div class="btn-row">
        <a class="btn" href="index.html">Back to home</a>
        <button class="btn btn-primary" id="restartBtn">Play again</button>
      </div>
    </div>
  `;

  document.getElementById('restartBtn').addEventListener('click', restartQuiz);
}

function restartQuiz() {
  currentIndex = 0;
  score = 0;
  resultScreen.style.display = 'none';
  quizScreen.style.display = 'block';
  loadQuestion();
}

loadQuestion();
