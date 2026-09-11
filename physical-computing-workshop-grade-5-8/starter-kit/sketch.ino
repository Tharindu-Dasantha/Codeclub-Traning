// 🎯 Press to Light - STARTER FILE
// Fill in the TODOs to make the LED light up while the button is held down!
// Wire your circuit first following ACTIVITIES.md, then write the code below.

const int LED_PIN = 13;
const int BUTTON_PIN = 2;

void setup() {
  // TODO 1: Set LED_PIN as an OUTPUT using pinMode()

  // TODO 2: Set BUTTON_PIN as an INPUT_PULLUP using pinMode()
  //         (INPUT_PULLUP means the pin reads HIGH normally,
  //          and LOW when the button is pressed!)

  Serial.begin(9600); // Lets us see messages in the Serial Monitor
}

void loop() {
  int buttonState = digitalRead(BUTTON_PIN);

  // TODO 3: Print buttonState to the Serial Monitor so you can watch it change
  //         HINT: Serial.println(buttonState);

  // TODO 4: If buttonState is LOW (pressed), turn the LED ON.
  //         Otherwise, turn the LED OFF.
  //         HINT: use if/else and digitalWrite(LED_PIN, HIGH) / LOW

  delay(50); // Small pause to keep readings steady
}

// ---------------- BOSS QUEST (optional) ----------------
// TODO 5 (Bonus): Once this works, try Activity 3 in ACTIVITIES.md -
//         Toggle Mode, a Buzzer Alarm, a Potentiometer Dimmer, or a
//         Light-Activated LED using an LDR sensor!
