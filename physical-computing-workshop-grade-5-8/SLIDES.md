# 📊 Slide Deck Guide & Projection Notes: Bringing Code to Life
> **Session:** Bringing Code to Life — Sensors & Outputs (Grade 5-8 Sri Lanka)
> *Facilitators can project this markdown file directly or copy text into Google Slides / PowerPoint.*

---

## 🖥️ Slide 1: Welcome to Physical Computing!
- **Title:** 🔌 Bringing Code to Life — Sensors & Outputs!
- **Subtitle:** Make your code control real (simulated) hardware! 🚀
- **Visual:** Code Club Sri Lanka Logo + Emojis 🇱🇰🔌💻
- **Facilitator Script:** *"Ayubowan coders! So far, your code has lived on a screen. Today, it reaches into the real world!"*

---

## 🖥️ Slide 2: Machines That React
- What happens when you press a pedestrian crossing button? When a rice cooker knows the rice is done? When a door senses you walking up?
- Every one of these reads a **sensor (input)** and controls a **light, motor, or sound (output)**.
- **That's physical computing!**

---

## 🖥️ Slide 3: Meet the Arduino
- A small, cheap "computer brain" built to talk to real-world electronics.
- Today we use **[Wokwi](https://wokwi.com)** — a free browser simulator. No physical parts needed!
- **Inputs vs Outputs:**
  - **Input:** Sends info IN (button, sensor)
  - **Output:** Program controls it (LED, buzzer, motor)
- **Digital vs Analog:** Digital = only ON/OFF. Analog = a whole range of values (like a dial).

---

## 🖥️ Slide 4: The Wokwi Interface 🖥️
- **Left:** File tabs (`sketch.ino` = code, `diagram.json` = wiring)
- **Center:** Code editor
- **Right:** Circuit diagram — click "+" to add parts
- **Green ▶ Play:** Runs the simulation

---

## 🖥️ Slide 5: Anatomy of an Arduino Program
```cpp
void setup() {
  // Runs ONCE
}

void loop() {
  // Runs FOREVER
}
```
- **Analogy:** `setup()` = getting dressed (once). `loop()` = your heartbeat (forever)!

---

## 🖥️ Slide 6: Your First Output — Blink an LED 💡
```cpp
const int LED_PIN = 13;

void setup() {
  pinMode(LED_PIN, OUTPUT);
}

void loop() {
  digitalWrite(LED_PIN, HIGH);
  delay(500);
  digitalWrite(LED_PIN, LOW);
  delay(500);
}
```
- Wire: Pin 13 → Resistor → LED (long leg) → LED (short leg) → GND

---

## 🖥️ Slide 7: Your First Input — Read a Button 🔘
```cpp
const int BUTTON_PIN = 2;

void setup() {
  pinMode(BUTTON_PIN, INPUT_PULLUP);
  Serial.begin(9600);
}

void loop() {
  int buttonState = digitalRead(BUTTON_PIN);
  Serial.println(buttonState);
}
```
- ⚠️ With `INPUT_PULLUP`: not pressed = `HIGH` (1), pressed = `LOW` (0) — backwards from what you'd expect!
- Open the **Serial Monitor** to watch the value change live.

---

## 🖥️ Slide 8: 🕵️ Arduino Bug Hunt Time!
- **Challenge:** Spot 5 bugs in Detective Codey's broken circuit code!
- *(Project code from `ACTIVITIES.md` and let students call out fixes!)*

---

## 🖥️ Slide 9: 🚀 Project Build Time!
- **Project:** "Press to Light" — LED lights up exactly while the button is held.
- Follow the Wiring Guide, open `starter-kit/sketch.ino`, and fill in the TODOs.
- **Remember:** LED = `OUTPUT`, Button = `INPUT_PULLUP`, pressed = `LOW`!

---

## 🖥️ Slide 10: Showcase & What's Next! 🌟
- **Gallery Walk:** Press your neighbor's button and watch their LED respond!
- **Award Badges:** Clean Wiring 🔌, Bug Squasher 🐞, Boss Quest ⚡
- **What's Next?** Once you can read one sensor, you can read almost any sensor — light, distance, temperature, sound, motion. The pattern is always the same: read the input, decide, control the output!
