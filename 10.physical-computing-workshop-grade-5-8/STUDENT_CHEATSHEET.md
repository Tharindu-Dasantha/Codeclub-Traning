# 📄 Physical Computing Student Cheatsheet & Arduino Guide
> **Grade 5 - 8 Code Club Edition** | Keep this by your keyboard! ⌨️🔌

---

## 💡 What is Physical Computing?

Using code to sense the real world (**inputs**) and control the real world (**outputs**) — the same idea behind traffic lights, automatic doors, and rice cookers.

| | Input | Output |
| :--- | :--- | :--- |
| **Definition** | Sends information INTO the program | The program controls it to affect the real world |
| **Digital Examples** | Pushbutton | LED, Buzzer |
| **Analog Examples** | Light sensor (LDR), Potentiometer | Dimmable LED (PWM), Motor speed |

---

## 🖥️ The Wokwi Interface

- **Left panel:** File tabs — `sketch.ino` (your code), `diagram.json` (your wiring).
- **Center:** Code editor.
- **Right:** Circuit diagram — click **"+"** to add parts (LED, Resistor, Pushbutton, etc.).
- **Green ▶ Play button:** Starts the simulation.
- **Serial Monitor:** A live text window showing anything printed with `Serial.println()`.

---

## 🧩 Anatomy of an Arduino Program

```cpp
void setup() {
  // Runs ONCE when the Arduino powers on
}

void loop() {
  // Runs OVER AND OVER, forever
}
```

> **Analogy:** `setup()` = getting dressed in the morning (once). `loop()` = your heartbeat (forever).

---

## 🔦 Controlling an Output (LED)

```cpp
const int LED_PIN = 13;

void setup() {
  pinMode(LED_PIN, OUTPUT);   // This pin will send power out
}

void loop() {
  digitalWrite(LED_PIN, HIGH); // Turn ON
  delay(500);                  // Wait 500 milliseconds (0.5 sec)
  digitalWrite(LED_PIN, LOW);  // Turn OFF
  delay(500);
}
```

---

## 🔘 Reading an Input (Pushbutton)

```cpp
const int BUTTON_PIN = 2;

void setup() {
  pinMode(BUTTON_PIN, INPUT_PULLUP); // Reads HIGH normally, LOW when pressed
  Serial.begin(9600);                // Start the Serial Monitor connection
}

void loop() {
  int buttonState = digitalRead(BUTTON_PIN);
  Serial.println(buttonState); // See the value live in the Serial Monitor

  if (buttonState == LOW) {
    // Button IS pressed
  } else {
    // Button is NOT pressed
  }
}
```

> ⚠️ **Golden Rule:** With `INPUT_PULLUP`, the logic is "backwards" — `HIGH` (1) = not pressed, `LOW` (0) = pressed!

---

## 🔌 Basic Wiring Reference: "Press to Light"

```text
Arduino Pin 13 ──── Resistor ──── LED (A, long leg)
                                       │
                                  LED (C, short leg)
                                       │
Arduino GND ───────────────────────────┘

Arduino Pin 2 ──── Pushbutton leg 1
Arduino GND  ──── Pushbutton leg 2
```

| Part | Pin Names | Notes |
| :--- | :--- | :--- |
| **LED** | `A` (anode, long leg), `C` (cathode, short leg) | Anode toward power, cathode toward GND |
| **Resistor** | `1`, `2` | No direction — protects the LED from too much current |
| **Pushbutton** | 2 legs (often shown as pairs) | One leg to a digital pin, the other to GND |
| **Arduino Uno** | Digital pins `0-13`, Analog pins `A0-A5`, `GND`, `5V` | Pins marked `~` support PWM (`analogWrite`) |

---

## 🎛️ Analog Input & Output (Bonus)

```cpp
int sensorValue = analogRead(A0);           // Reads 0 - 1023
int brightness = map(sensorValue, 0, 1023, 0, 255); // Convert range
analogWrite(9, brightness);                 // Writes 0 - 255 (PWM pin only, marked ~)
```

---

## 🚨 Top 5 Physical Computing Beginner Mistakes to Avoid

1. ❌ **Wrong `pinMode`** — LEDs need `OUTPUT`, buttons need `INPUT_PULLUP`.
2. ❌ **Forgetting the resistor** — Protects your LED (and in real life, protects the Arduino too).
3. ❌ **Mismatched pin numbers** — The number in your code must match the pin actually wired in the diagram.
4. ❌ **Forgetting `INPUT_PULLUP` logic is inverted** — Pressed = `LOW`, not `HIGH`.
5. ❌ **Using a non-PWM pin with `analogWrite()`** — Only pins marked `~` (like 3, 5, 6, 9, 10, 11 on an Uno) support it.

---

## ⌨️ Useful Shortcuts & Tips

- **▶ Play button** — Start the Wokwi simulation.
- **Serial Monitor** — Your best debugging friend; print values often!
- `Ctrl + S` / `Cmd + S` 💾 **Save your Wokwi project** (if logged in).
- If wiring looks right but nothing works — check pin numbers in the code FIRST.
