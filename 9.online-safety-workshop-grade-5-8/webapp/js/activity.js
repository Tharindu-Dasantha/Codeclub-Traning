/* ============================================================
   Spot the Scam — Activities (message-by-message, scenario-by-scenario)
   ============================================================ */

const ICONS = {
  check: '<svg viewBox="0 0 24 24" fill="none"><path d="M5 12.5l4.5 4.5L19 7" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  cross: '<svg viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M18 6 6 18" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/></svg>',
  shield: '<svg viewBox="0 0 24 24" fill="none"><path d="M9 12.5l2.2 2.2L16 10" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/><rect x="3.5" y="3.5" width="17" height="17" rx="6" stroke="currentColor" stroke-width="1.7"/></svg>',
  warn: '<svg viewBox="0 0 24 24" fill="none"><path d="M12 3.5 2.5 20h19L12 3.5Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M12 9.5v4.2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.7" r="1" fill="currentColor"/></svg>',
  bulb: '<svg viewBox="0 0 24 24" fill="none"><path d="M9 18h6M10 21h4M8 14a5 5 0 1 1 8 0c-.7.8-1.2 1.6-1.2 2.6H9.2c0-1-.5-1.8-1.2-2.6Z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  trophy: '<svg viewBox="0 0 24 24" fill="none"><path d="M8 21h8M12 17v4M7 4h10v4a5 5 0 0 1-10 0V4Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><path d="M7 6H4.5A1.5 1.5 0 0 0 3 7.5c0 2 1.5 3.5 4 3.8M17 6h2.5A1.5 1.5 0 0 1 21 7.5c0 2-1.5 3.5-4 3.8" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>',
  sparkle: '<svg viewBox="0 0 24 24" fill="none"><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',
};

const MESSAGES = [
  {
    label: 'Message A',
    text: '"🎉 CONGRATULATIONS!! You are our LUCKY WINNER of a free PS5! Click here within 10 minutes to claim: bit.ly/free-ps5-claim-now. Enter your name, address and phone number to receive it!"',
    verdict: 'scam',
    flags: [
      'Urgency — you only have "10 minutes" to act',
      'A too-good-to-be-true prize you never entered to win',
      'A suspicious, shortened link',
      'Asks for personal information — name, address, phone number',
    ],
  },
  {
    label: 'Message B',
    text: '"Hey, it\'s Ravindu from your maths class! I forgot my textbook, can I borrow your notes tomorrow before class?"',
    verdict: 'safe',
    flags: [
      'A known classmate asking a normal, low-risk question',
      "Still smart to double-check it's really them if anything ever feels off",
    ],
  },
  {
    label: 'Message C',
    text: '"URGENT: Your school account will be DELETED in 1 hour unless you verify your password here: schooI-portal-verify.com"',
    verdict: 'scam',
    flags: [
      'Urgency and fear — "DELETED in 1 hour"',
      'A fake-looking web address (a capital "I" pretending to be a lowercase "l")',
      'Asks you to "verify" — really, hand over — your password',
    ],
  },
  {
    label: 'Message D',
    text: "\"Hi! I'm 12 too and I love the same games as you! Can you tell me your home address so I can send you a gift? Please don't tell your parents, it'll be our secret surprise! 😊\"",
    verdict: 'scam',
    flags: [
      'Someone only known online asking for a home address',
      'Offers a gift to build trust quickly',
      'Asks to keep it secret from parents — a major stranger-danger warning sign',
    ],
  },
  {
    label: 'Message E',
    text: '"Reminder from Code Club: next Saturday\'s session starts at 9am, please bring your laptop charger."',
    verdict: 'safe',
    flags: [
      'A normal, expected message from a known, trusted organisation',
      'No links, no urgency, no request for personal information',
    ],
  },
];

const SCENARIOS = [
  {
    label: 'Scenario 1',
    q: "You're playing an online game and another player keeps sending you mean messages every time you lose a round. It's starting to happen every day.",
    a: "Don't respond or engage. Mute or block the player, screenshot the messages, and tell a trusted adult.",
  },
  {
    label: 'Scenario 2',
    q: 'A pop-up appears on your screen saying "WARNING: Your device has 3 viruses! Click here to download Free Cleaner App now!"',
    a: "Don't click anything in the pop-up. Close the browser or tab, and tell an adult if you're unsure — real antivirus warnings don't work like this.",
  },
  {
    label: 'Scenario 3',
    q: "An online friend you've chatted with for a few weeks (who says they're your age) asks to video call, then asks to meet up in person this weekend without telling your parents.",
    a: 'Say no — this is a major red flag. Tell a trusted adult immediately, and never agree to meet an online-only contact alone.',
  },
  {
    label: 'Scenario 4',
    q: 'You get an email that looks like it\'s from a popular game asking you to "log in here" to claim a reward, but the web address looks slightly different from the real game\'s website.',
    a: "Don't click the link. Go to the real website directly by typing the address yourself, then report or delete the email.",
  },
  {
    label: 'Scenario 5',
    q: 'A friend shares an embarrassing photo of a classmate in a group chat and asks you to forward it too.',
    a: 'Refuse to forward it, ask your friend to take it down, and tell a trusted adult — forwarding it would make you part of the cyberbullying.',
  },
];

// Build the full step sequence: 5 messages, a phase transition, 5 scenarios, completion.
const STEPS = [
  ...MESSAGES.map((m) => ({ type: 'message', data: m })),
  { type: 'transition' },
  ...SCENARIOS.map((s) => ({ type: 'scenario', data: s })),
  { type: 'complete' },
];

let stepIndex = 0;
let score = 0;
let answeredCount = 0;

const stepWrap = document.getElementById('stepWrap');
const progressFill = document.getElementById('progressFill');
const phasePill = document.getElementById('phasePill');

function updateProgress() {
  const pct = (stepIndex / (STEPS.length - 1)) * 100;
  progressFill.style.width = pct + '%';
}

function updatePhasePill(type) {
  if (type === 'message') phasePill.textContent = 'Activity 1 · Spot the Scam';
  else if (type === 'scenario') phasePill.textContent = 'Activity 2 · What Would You Do?';
  else if (type === 'transition') phasePill.textContent = 'Activity 1 complete';
  else phasePill.textContent = 'All done';
}

function goNext() {
  if (stepIndex < STEPS.length - 1) {
    stepIndex += 1;
    render();
  }
}

function render() {
  updateProgress();
  const step = STEPS[stepIndex];
  updatePhasePill(step.type);
  if (step.type === 'message') renderMessage(step.data);
  else if (step.type === 'scenario') renderScenario(step.data);
  else if (step.type === 'transition') renderTransition();
  else if (step.type === 'complete') renderComplete();
}

function renderMessage(m) {
  const total = MESSAGES.length;
  const current = MESSAGES.indexOf(m) + 1;

  stepWrap.innerHTML = `
    <div class="glass step-card">
      <div class="step-eyebrow">
        <span class="label">${m.label} · ${current} of ${total}</span>
        <span class="tally">${answeredCount} answered · ${score} correct</span>
      </div>
      <div class="bubble">${m.text}</div>
      <div class="option-row" id="optionRow">
        <button class="opt-btn pick-safe" data-choice="safe">${ICONS.shield}Safe</button>
        <button class="opt-btn pick-scam" data-choice="scam">${ICONS.warn}Scam</button>
      </div>
      <div class="feedback" id="feedback"><div><div class="feedback-inner"></div></div></div>
      <div class="step-actions">
        <button class="btn btn-primary" id="nextBtn" style="visibility:hidden">Next</button>
      </div>
    </div>
  `;

  const optionRow = document.getElementById('optionRow');
  const buttons = optionRow.querySelectorAll('.opt-btn');
  const feedback = document.getElementById('feedback');
  const feedbackInner = feedback.querySelector('.feedback-inner');
  const nextBtn = document.getElementById('nextBtn');

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const choice = btn.dataset.choice;
      const isCorrect = choice === m.verdict;

      buttons.forEach((b) => {
        b.disabled = true;
        if (b.dataset.choice === m.verdict) b.classList.add('correct');
        else b.classList.add(b === btn ? 'incorrect' : 'dim');
      });

      answeredCount += 1;
      if (isCorrect) score += 1;
      optionRow.parentElement.querySelector('.tally').textContent = `${answeredCount} answered · ${score} correct`;

      feedbackInner.className = 'feedback-inner ' + (isCorrect ? 'is-correct' : 'is-incorrect');
      const verdictLabel = m.verdict === 'safe' ? 'Safe' : 'Scam';
      feedbackInner.innerHTML = `
        <p class="feedback-title">${isCorrect ? ICONS.check : ICONS.cross}${isCorrect ? 'Correct!' : `Not quite — this one's ${verdictLabel}`}</p>
        <ul class="flag-list">${m.flags.map((f) => `<li>${f}</li>`).join('')}</ul>
      `;
      feedback.classList.add('open');

      nextBtn.style.visibility = 'visible';
    }, { once: true });
  });

  nextBtn.addEventListener('click', goNext);
}

function renderScenario(s) {
  const total = SCENARIOS.length;
  const current = SCENARIOS.indexOf(s) + 1;

  stepWrap.innerHTML = `
    <div class="glass step-card">
      <div class="step-eyebrow">
        <span class="label">${s.label} · ${current} of ${total}</span>
      </div>
      <p class="q-text">${s.q}</p>
      <button class="btn" id="showAnswerBtn">${ICONS.bulb} Show answer</button>
      <div class="answer-reveal" id="answerReveal"><div><div class="answer-reveal-inner"><strong>What to do:</strong> ${s.a}</div></div></div>
      <div class="step-actions">
        <button class="btn btn-primary" id="nextBtn" style="visibility:hidden">Next</button>
      </div>
    </div>
  `;

  const showBtn = document.getElementById('showAnswerBtn');
  const reveal = document.getElementById('answerReveal');
  const nextBtn = document.getElementById('nextBtn');

  showBtn.addEventListener('click', () => {
    reveal.classList.add('open');
    showBtn.disabled = true;
    nextBtn.style.visibility = 'visible';
  });

  nextBtn.addEventListener('click', goNext);
}

function renderTransition() {
  stepWrap.innerHTML = `
    <div class="glass step-card center-card">
      <div class="badge" style="margin-inline:auto;">${ICONS.sparkle}</div>
      <div class="score-chip">${ICONS.check} You scored ${score} out of ${MESSAGES.length} on Activity 1</div>
      <h2>Nice work spotting scams!</h2>
      <p>Now it's time for Activity 2 — five real-life scenarios. Read each one and think about what you'd actually do.</p>
      <div class="btn-row">
        <button class="btn btn-primary" id="continueBtn">Start Activity 2</button>
      </div>
    </div>
  `;
  document.getElementById('continueBtn').addEventListener('click', goNext);
}

function renderComplete() {
  stepWrap.innerHTML = `
    <div class="glass step-card center-card">
      <div class="badge" style="margin-inline:auto;">${ICONS.trophy}</div>
      <div class="score-chip">${ICONS.check} ${score} out of ${MESSAGES.length} messages spotted correctly</div>
      <h2>You finished both activities!</h2>
      <p>You know the red flags to watch for and what to do when something feels wrong online. Ready for a bigger challenge?</p>
      <div class="btn-row">
        <a class="btn" href="index.html">Back to home</a>
        <a class="btn btn-primary" href="quiz.html">Try the quiz</a>
      </div>
    </div>
  `;
}

render();
