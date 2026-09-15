// 🎯 Press to Light - SOLUTION FILE
// This is the complete, working version of the session project.

const int LED_PIN = 13;
const int BUTTON_PIN = 2;

void setup() {
  pinMode(LED_PIN, OUTPUT);
  pinMode(BUTTON_PIN, INPUT_PULLUP);
  Serial.begin(9600);
}

void loop() {
  int buttonState = digitalRead(BUTTON_PIN);
  Serial.println(buttonState);

  if (buttonState == LOW) {
    digitalWrite(LED_PIN, HIGH); // Button is pressed - LED ON
  } else {
    digitalWrite(LED_PIN, LOW);  // Button is released - LED OFF
  }

  delay(50);
}
