# 🎮 Student Activities, Wiring Guide & Arduino Bug Hunt Challenges

> **Workshop:** Bringing Code to Life — Sensors & Outputs (Grade 5-8)
> **Instructions:** Follow the Wiring Guide, complete Activity 1 to earn your Circuit Debugger Badge, then jump into Activity 2 to build "Press to Light"!

---

## 🔧 Wiring Guide: Building the Circuit in Wokwi

1. Go to **[wokwi.com/projects/new/arduino-uno](https://wokwi.com/projects/new/arduino-uno)** to start a fresh project.
2. Click the **file tabs** on the left — you should see `sketch.ino`. Delete the default code and paste in `starter-kit/sketch.ino`.
3. Click the **"+" (Parts) button** in the diagram panel and add these 3 parts by searching their names:
   - **LED**
   - **Resistor**
   - **Pushbutton**
4. **Wire the LED circuit:**
   - Arduino pin **13** → **Resistor**, leg 1
   - **Resistor**, leg 2 → LED **anode** (the longer leg, usually marked **A**)
   - LED **cathode** (the shorter leg, marked **C**) → Arduino **GND**
5. **Wire the pushbutton:**
   - One leg of the pushbutton → Arduino pin **2**
   - The opposite leg of the pushbutton → Arduino **GND**
6. Press the green **▶ Play** button. Click the simulated pushbutton — with the starter code's TODOs completed, the LED should light up while it's held down!

> 💡 **Stuck on wiring?** Open `solution-kit/diagram.json`, copy its contents, then paste them into the `diagram.json` file tab in your Wokwi project (use the "+" next to the file tabs to add it, or find `diagram.json` already listed there) to auto-wire a working reference circuit you can compare against.

---

## 🕵️ Activity 1: The 5-Minute Arduino Bug Hunt!

Detective Codey wired up the circuit correctly, but broke the code! Can you spot and fix all 5 bugs?

### ❌ The Broken Arduino Code (`buggy_sketch.ino`):

```cpp
const int LED_PIN = 13;
const int BUTTON_PIN = 2;

void setup() {
  pinMode(LED_PIN, INPUT)
  pinMode(BUTTON_PIN, INPUT_PULLUP);
  Serial.begin(9600);
}

void loop() {
  int buttonState = digitalWrite(BUTTON_PIN);
  Serial.println(buttonState);

  if (buttonState == HIGH) {
    digitalWrite(LED_PIN, HIGH);
  } else {
    digitalWrite(LED_PIN, LOW);
  }

  delay(50);
}
```

---

### 🔍 Bug Hunt Answer Key (For Instructors):

1. **Bug 1 (Line 5):** `pinMode(LED_PIN, INPUT)` should be `OUTPUT` — the LED is an output device, not an input!
2. **Bug 2 (Line 5):** Missing semicolon `;` at the end of the line.
3. **Bug 3 (Line 10):** `digitalWrite(BUTTON_PIN)` should be `digitalRead(BUTTON_PIN)` — we're reading the button's state, not writing to it (and `digitalWrite` requires 2 arguments anyway, so this also won't compile).
4. **Bug 4 (Line 13):** `if (buttonState == HIGH)` has backwards logic for `INPUT_PULLUP` wiring — the button reads `LOW` when pressed, not `HIGH`. Fix: `if (buttonState == LOW)`.
5. **Bug 5 (Wiring mismatch, not shown in code):** Remind students that if their physical wiring in Wokwi uses a different pin than `BUTTON_PIN = 2` or `LED_PIN = 13`, the code and circuit won't match — always double check pin numbers against the actual wiring!

---

## 🚀 Activity 2: Main Project — "Press to Light"

Your mission: build a working circuit where an LED lights up exactly while a button is held down!

### 📋 Checklist & Requirements:

- [ ] **Level 1: Wire the LED**
  - LED + Resistor wired from Arduino pin 13 to GND (see Wiring Guide above).

- [ ] **Level 2: Wire the Pushbutton**
  - Pushbutton wired from Arduino pin 2 to GND.

- [ ] **Level 3: Configure the Pins**
  - In `setup()`: set `LED_PIN` as `OUTPUT` and `BUTTON_PIN` as `INPUT_PULLUP`.

- [ ] **Level 4: Read and React**
  - In `loop()`: read the button with `digitalRead()`, and use `if`/`else` to turn the LED `HIGH` when the button reads `LOW` (pressed), and `LOW` otherwise.

- [ ] **Level 5: Debug with the Serial Monitor**
  - Add `Serial.println(buttonState);` inside `loop()` and confirm the value flips between `1` and `0` as you click the button in the simulation.

---

## 🏆 Activity 3: Fast-Finisher Boss Quests! (For Speed Coders)

Finished Activity 2 already? Level up your physical computing powers with these Boss Quests!

### ⚡ Quest A: Toggle Mode (Press Once to Turn On, Press Again to Turn Off)
Instead of the LED only staying on while held, make one press toggle it on, and the next press toggle it off:
```cpp
const int LED_PIN = 13;
const int BUTTON_PIN = 2;

bool ledState = false;
int lastButtonState = HIGH;

void setup() {
  pinMode(LED_PIN, OUTPUT);
  pinMode(BUTTON_PIN, INPUT_PULLUP);
}

void loop() {
  int buttonState = digitalRead(BUTTON_PIN);

  if (buttonState == LOW && lastButtonState == HIGH) {
    ledState = !ledState;           // Flip true/false
    digitalWrite(LED_PIN, ledState);
    delay(200);                     // Small delay to avoid double-counting one press
  }

  lastButtonState = buttonState;
}
```

### ⚡ Quest B: Buzzer Alarm
Add a **Buzzer** part in Wokwi (wire its positive pin to Arduino pin 8, negative to GND), then make it sound while the button is pressed:
```cpp
const int BUZZER_PIN = 8;
const int BUTTON_PIN = 2;

void setup() {
  pinMode(BUTTON_PIN, INPUT_PULLUP);
}

void loop() {
  if (digitalRead(BUTTON_PIN) == LOW) {
    tone(BUZZER_PIN, 1000); // Play a 1000 Hz tone
  } else {
    noTone(BUZZER_PIN);
  }
}
```

### ⚡ Quest C: Potentiometer Dimmer (Analog Output)
Add a **Potentiometer** part, wire its middle pin to Arduino **A0**, and its outer pins to **5V** and **GND**. Use it to control the LED's brightness (LED must be on a **PWM pin**, marked with a `~`, like pin 9):
```cpp
const int LED_PIN = 9;   // Must be a PWM (~) pin
const int POT_PIN = A0;

void setup() {
  pinMode(LED_PIN, OUTPUT);
}

void loop() {
  int potValue = analogRead(POT_PIN);                  // Range: 0 - 1023
  int brightness = map(potValue, 0, 1023, 0, 255);      // Convert to 0 - 255
  analogWrite(LED_PIN, brightness);
}
```

### ⚡ Quest D: Light-Activated LED (LDR Sensor)
Add an **LDR (light sensor)** part wired as a voltage divider (LDR from 5V to A0, and a resistor from A0 to GND), then make the LED turn on automatically when it gets dark:
```cpp
const int LED_PIN = 13;
const int LDR_PIN = A0;
const int DARK_THRESHOLD = 400; // Adjust this after testing your own values!

void setup() {
  pinMode(LED_PIN, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  int lightLevel = analogRead(LDR_PIN);
  Serial.println(lightLevel); // Watch this in the Serial Monitor to pick a good threshold!

  if (lightLevel < DARK_THRESHOLD) {
    digitalWrite(LED_PIN, HIGH); // It's dark - turn on the light!
  } else {
    digitalWrite(LED_PIN, LOW);
  }
}
```
