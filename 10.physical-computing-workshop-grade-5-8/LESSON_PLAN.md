# ⏱️ Detailed 2-Hour Facilitator Lesson Plan: Bringing Code to Life

> **Session Title:** Bringing Code to Life — Sensors & Outputs with Arduino
> **Target Group:** Grade 5 - Grade 8 (Ages 10-14, Sri Lanka)
> **Duration:** 120 Minutes (2 Hours)
> **Pedagogical Strategy:** Visual Analogies + Live Wiring Demo + Gamified Bug Hunt + Project-Based Learning
> **Tool:** [Wokwi](https://wokwi.com) — free, browser-based Arduino simulator

---

## 🕒 Master Schedule Overview

| Time | Duration | Module | Activity / Key Concept |
| :--- | :--- | :--- | :--- |
| **00:00 - 00:15** | 15 min | **Module 1: What is Physical Computing?** | Everyday examples, Arduino as a "digital brain," inputs vs outputs |
| **00:15 - 00:40** | 25 min | **Module 2: Meet Wokwi & Blink Your First LED** | Wokwi interface tour, breadboard basics, `setup()`/`loop()`, first LED circuit |
| **00:40 - 01:10** | 30 min | **Module 3: Adding Input — The Pushbutton** | Digital input, `INPUT_PULLUP`, `digitalRead()`, Serial Monitor |
| **01:10 - 01:20** | 10 min | **☕ Energy Break & Quiz** | "Input or Output?" Physical Energizer & 5-question rapid fire pop quiz |
| **01:20 - 01:50** | 30 min | **Module 4: Bug Hunt & Main Project** | Arduino Code Bug Hunt, build "Press to Light," Boss Quests for fast finishers |
| **01:50 - 02:00** | 10 min | **Module 5: Showcase & Wrap-up** | Peer Showcase, Recap, What's Next |

---

## 📘 Detailed Module Breakdown

### 🔌 Module 1: What is Physical Computing? (00:00 - 00:15)

#### Objective:
Introduce the idea that code can sense and control the real world, not just the screen.

#### Facilitator Script & Steps:
1. **The Hook — "Machines That React":**
   - Ask: *"What happens when you press the button at a pedestrian crossing? What about when a rice cooker senses the rice is done? Or when an automatic door senses you walking toward it?"*
   - Reveal: All of these are tiny computers, reading a **sensor (input)** and deciding what to do with a **motor, light, or sound (output)** — that's **physical computing**!
2. **Meet the Arduino:**
   - An **Arduino** is a small, cheap "computer brain" designed specifically to talk to real-world electronics — buttons, LEDs, motors, sensors — using code almost identical to what students may have seen in Python (though Arduino code is written in a C-like language).
   - Today we won't need a real Arduino board — we'll use **Wokwi**, a website that simulates the entire circuit and board in the browser, wires and all!
3. **Inputs vs Outputs — The Core Idea:**
   - **Input:** Something that sends information *into* the program (a button, a light sensor, a temperature sensor).
   - **Output:** Something the program controls to affect the real world (an LED, a buzzer, a motor).
   - **Digital vs Analog:** A **digital** signal is only ever one of 2 values — ON or OFF (like a light switch). An **analog** signal can be any value in a range (like a volume dial). A button is digital; a light sensor is usually analog.

---

### 💡 Module 2: Meet Wokwi & Blink Your First LED (00:15 - 00:40)

#### Objective:
Get every student running a simulated Arduino project and blinking their first LED.

#### Facilitator Script & Steps:
1. **Opening Wokwi:**
   - Go to **[wokwi.com/projects/new/arduino-uno](https://wokwi.com/projects/new/arduino-uno)**. This opens a new project with a blank Arduino Uno and a default "Blink" sketch already loaded.
   - Tour the interface:
     - **Left panel:** file tabs (`sketch.ino` = your code, `diagram.json` = your circuit wiring).
     - **Center:** the code editor.
     - **Right:** the circuit diagram (the simulated breadboard and Arduino).
     - **Green ▶ Play button:** starts the simulation.
2. **Anatomy of an Arduino Program:**
   ```cpp
   void setup() {
     // Runs ONCE when the Arduino powers on — set things up here
   }

   void loop() {
     // Runs OVER AND OVER, forever — your main program logic goes here
   }
   ```
   - **Analogy:** `setup()` is like getting dressed in the morning (happens once). `loop()` is like your heartbeat — it just keeps going, again and again, the whole day.
3. **Add an LED (Guided, Together):**
   - In the Wokwi diagram panel, click the **"+" (Parts) button**, search for **LED**, and drag it onto the canvas near the Arduino.
   - Do the same for a **Resistor** (this protects the LED from too much current — LEDs can burn out without one!).
   - Wire them (see `ACTIVITIES.md` for the exact connection list): Arduino pin 13 → resistor → LED anode (long leg) → LED cathode (short leg) → Arduino GND.
   - Write the code together:
     ```cpp
     const int LED_PIN = 13;

     void setup() {
       pinMode(LED_PIN, OUTPUT);
     }

     void loop() {
       digitalWrite(LED_PIN, HIGH); // Turn LED on
       delay(500);                  // Wait half a second
       digitalWrite(LED_PIN, LOW);  // Turn LED off
       delay(500);
     }
     ```
   - Press ▶ **Play** — the LED should blink!

---

### 🔘 Module 3: Adding Input — The Pushbutton (00:40 - 01:10)

#### Objective:
Introduce digital input by wiring and reading a pushbutton.

#### Key Concepts Introduced:
- `pinMode(pin, INPUT_PULLUP)` — makes a pin read `HIGH` by default, and `LOW` the instant the button is pressed (connecting the pin to GND). This is the easiest, most reliable way to wire a button — no extra resistor needed!
- `digitalRead(pin)` — reads whether a pin is currently `HIGH` or `LOW`.
- The **Serial Monitor** — a live text window that shows messages sent from the Arduino using `Serial.println()`, essential for "seeing inside" your sensor's behavior.

#### Live Demo Activity (Follow Along):
1. Add a **Pushbutton** part in Wokwi. Wire one leg to Arduino pin 2, the other leg to GND (see `ACTIVITIES.md` for the exact connection list).
2. Add this code together:
   ```cpp
   const int BUTTON_PIN = 2;

   void setup() {
     pinMode(BUTTON_PIN, INPUT_PULLUP);
     Serial.begin(9600); // Start talking to the Serial Monitor
   }

   void loop() {
     int buttonState = digitalRead(BUTTON_PIN);
     Serial.println(buttonState);
     delay(50);
   }
   ```
3. Press ▶ **Play**, open the **Serial Monitor** (usually a tab/icon at the bottom of the Wokwi editor), and click the simulated button.
4. **Spot Check:** Everyone should see the value flip between `1` (not pressed) and `0` (pressed) in the Serial Monitor. Ask: *"Why is it backwards — 1 when NOT pressed?"* (Because of `INPUT_PULLUP` — the pin is "pulled up" to HIGH by default, and pressing the button connects it to GND, pulling it LOW.)

---

### ☕ Energy Break & Quiz (01:10 - 01:20)

- **Physical Energizer — "Input or Output?" (3 mins):**
  - Facilitator calls out a device (e.g., "microphone," "speaker," "button," "LED," "thermometer," "motor").
  - If it's an **INPUT**, students cup a hand to their ear (listening/sensing). If it's an **OUTPUT**, students strike an action pose (doing something).
- **5-Question Rapid Fire Quiz:**
  1. What are the two required functions in every Arduino program? (`setup()` and `loop()`)
  2. How many times does `setup()` run? (*Once*)
  3. What does a resistor do for an LED circuit? (*Limits/protects against too much current*)
  4. With `INPUT_PULLUP`, what value does the pin read when the button is NOT pressed? (`HIGH`, or `1`)
  5. What tool lets you see live values coming from the Arduino? (*The Serial Monitor*)

---

### 🐞 Module 4: Bug Hunt & Main Project (01:20 - 01:50)

#### Objective:
Consolidate learning through gamified debugging and building the combined input+output project.

#### Step 1: The 5-Minute Arduino Bug Hunt (Gamified Debugging)
Distribute broken code from `ACTIVITIES.md` (or project on board).
Challenge: *"Detective Codey wired up the circuit but broke the code! Find and fix 5 bugs!"*
- Bug 1: `pinMode(LED_PIN, INPUT)` used instead of `OUTPUT` for the LED.
- Bug 2: Missing semicolon at the end of a `pinMode()` line.
- Bug 3: `digitalRead` used where `digitalWrite` was intended (or vice versa).
- Bug 4: Backwards `if`/`else` logic — LED turns on when the button is *not* pressed instead of when it is (forgetting `INPUT_PULLUP` inverts the reading).
- Bug 5: A pin number in the code that doesn't match the pin used in the wiring diagram.

#### Step 2: Main Project — "Press to Light"
Students combine everything into one project: **an LED that lights up exactly while the button is held down.**
Open `starter-kit/sketch.ino` in a new Wokwi project, wire the full circuit per `ACTIVITIES.md`, and fill in the TODOs:
- [x] LED wired through a resistor to a digital pin, and configured as `OUTPUT`.
- [x] Pushbutton wired to a digital pin, configured as `INPUT_PULLUP`.
- [x] `loop()` reads the button and turns the LED on when pressed (`LOW`), off when released (`HIGH`).
- [x] `Serial.println()` used to watch the button state live for debugging.

#### Step 3: Boss Quests (Fast Finishers)
Direct early finishers to `ACTIVITIES.md` Activity 3 for extension challenges: Toggle Mode, Buzzer Alarm, Potentiometer Dimmer, or a Light-Activated LED using an LDR sensor.

---

### 🌟 Module 5: Showcase & Wrap-up (01:50 - 02:00)

1. **Peer Gallery Walk (5 mins):**
   - Students take turns pressing their neighbor's simulated button and watching the LED respond live.
2. **Design Awards (3 mins):**
   - Award fun badges/stickers:
     - 🔌 *Clean Wiring Award* (Neatest, most logical circuit layout)
     - 🐞 *Bug Squasher Award* (Fastest Bug Hunt finisher)
     - ⚡ *Boss Quest Award* (Furthest completed extension challenge)
3. **Closing Recap & What's Next (2 mins):**
   - Recap: Inputs sense the world, outputs act on it, and `setup()`/`loop()` is the heartbeat connecting them.
   - Teaser: *"Today we used a button — a simple digital input. There are sensors for light, distance, temperature, sound, and even motion. Once you can read one sensor, you can read almost any of them!"*
4. **Certificate / Sticker Handout.**
5. **Homework (optional):** Try one Boss Quest at home — all you need is the same free Wokwi browser tab.

---

## 👩‍🏫 Facilitator Tips & Troubleshooting

- **Symptom:** LED doesn't light up at all.
  - *Fix 1:* Check the LED is wired the correct way round — the long leg (anode) must go toward the resistor/pin side, the short leg (cathode) toward GND. In Wokwi, a reversed LED will simply stay off (it won't break, unlike a real one without a resistor!).
  - *Fix 2:* Confirm the pin number in `pinMode()`/`digitalWrite()` matches the pin actually wired in the diagram.
- **Symptom:** Button doesn't seem to do anything.
  - *Fix:* Confirm `pinMode(BUTTON_PIN, INPUT_PULLUP)` was used (not plain `INPUT`), and that one leg of the button goes to the digital pin and the other to GND.
- **Symptom:** LED logic feels "backwards" (on when not pressed, off when pressed).
  - *Fix:* This means the `if` condition wasn't flipped for `INPUT_PULLUP` logic — remind students that pressed = `LOW` in this setup.
- **Symptom:** Wokwi feels slow or won't load.
  - *Fix:* Confirm a stable internet connection; try refreshing or reopening the project link. Have a backup plan (project on the main screen only) if venue Wi-Fi is unreliable for some students.
