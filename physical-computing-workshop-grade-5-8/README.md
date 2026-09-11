# 🔌 Code Club Workshop: Bringing Code to Life — Sensors & Outputs
> **Target Audience:** Grade 5-8 Students (Ages 10-14 in Sri Lanka)
> **Duration:** 2 Hours (120 Minutes)
> **Topic:** Physical Computing with Arduino — Digital Inputs & Outputs, using the Wokwi online circuit simulator
> **Prerequisites:** Basic programming logic from earlier sessions (variables, `if`/`else`, loops) — no prior electronics experience needed!

---

## 📌 Workshop Overview

Welcome to **Bringing Code to Life**! This 2-hour interactive workshop is designed specifically for Sri Lankan Grade 5-8 students in Code Club.

Every session so far has lived entirely on a screen — webpages, quiz games. Today, code reaches out and touches the physical world! Students are introduced to **physical computing**: using a microcontroller (the Arduino) to read real-world **inputs** (like a button press) and control real-world **outputs** (like an LED lighting up).

Using **[Wokwi](https://wokwi.com)** — a free, browser-based Arduino circuit simulator — students wire up a simple circuit, write Arduino code, and watch their program directly control simulated hardware. No physical parts, soldering, or purchases required — just a browser! Through the "traffic light / vending machine" analogy, guided wiring steps, a code Bug Hunt, and a hands-on **"Press to Light"** project, students learn how sensors and outputs actually talk to code.

---

## 📁 Session Folder Structure

```text
physical-computing-workshop-grade-5-8/
├── README.md                   👈 You are here! Main overview & setup guide
├── LESSON_PLAN.md              👈 Detailed 120-minute facilitator step-by-step guide
├── STUDENT_CHEATSHEET.md       👈 Printable 1-page Arduino syntax & wiring cheatsheet
├── ACTIVITIES.md               👈 Step-by-step wiring guide, Bug Hunt challenge & Boss Quests
├── SLIDES.md                   👈 Slide-by-slide presentation script for projector projection
├── starter-kit/
│   └── sketch.ino              👈 Starter Arduino code with TODOs & guiding comments
└── solution-kit/
    ├── sketch.ino              👈 Complete, working Arduino code for the project
    └── diagram.json            👈 Reference Wokwi wiring diagram (paste-in to check your circuit)
```

> **Note:** This workshop has no local `interactive-demo/` file — the "simulator" is **Wokwi itself**, running live in the browser at [wokwi.com](https://wokwi.com). Unlike the HTML/CSS/Python sessions, this one **does require an internet connection throughout**, since Wokwi runs entirely in the cloud.

---

## 🎯 Key Learning Objectives

By the end of this 2-hour session, students will be able to:
1. Explain what **physical computing** is, and name 2-3 everyday examples (traffic lights, automatic doors, vending machines, rice cookers).
2. Distinguish between a **digital input** (button — only ON or OFF) and a **digital output** (LED — only ON or OFF), and an **analog input/output** (a dial or sensor with a range of values).
3. Build a simple circuit in Wokwi: an LED (with a current-limiting resistor) and a pushbutton, wired to an Arduino Uno.
4. Understand the two required Arduino functions: `setup()` (runs once) and `loop()` (runs forever).
5. Use `pinMode()`, `digitalWrite()`, and `digitalRead()` to control an LED and read a button.
6. Use the **Serial Monitor** to observe live sensor/input values for debugging.
7. Debug common physical computing bugs (wrong pin mode, inverted logic, miswired components).
8. (Stretch) Understand `analogRead()`/`analogWrite()` for sensors and dimmable outputs.

---

## 🛠️ Required Setup & Hardware

### For Students:
* Desktop/Laptop with a modern web browser (Chrome or Firefox recommended) and a **stable internet connection**.
* A free **[Wokwi](https://wokwi.com) account is recommended** (lets you save your project) but is **not required** — you can simulate anonymously using a temporary project link.
* No physical Arduino board or electronic components needed — everything is simulated in the browser!

### For Instructor / Facilitator:
* Projector or large display screen.
* Whiteboard & color markers.
* Printed copies of `STUDENT_CHEATSHEET.md` (highly recommended — wiring pin references are easy to forget!).
* **Test your internet/venue connection ahead of time** — this is the first Code Club session where every student needs to be online for the entire session.
* *(Optional, for a future "wow" moment):* If your Code Club owns even one real Arduino Uno, USB cable, breadboard, LED, resistor, and pushbutton, consider a live demo of the exact same circuit running on real hardware at the end of the session!

---

## 🚀 How to Run This Session

1. **Before Class:**
   - Open [wokwi.com/projects/new/arduino-uno](https://wokwi.com/projects/new/arduino-uno) yourself to confirm it loads properly on the venue's network.
   - Review `LESSON_PLAN.md` for timing benchmarks and `ACTIVITIES.md` for the exact wiring steps.
   - Print `STUDENT_CHEATSHEET.md`.
2. **During Class:**
   - Follow the 120-minute timeline in `LESSON_PLAN.md`.
   - Project `SLIDES.md` on the main screen for visual explanation.
   - Facilitate Activity 1 (Arduino Code Bug Hunt) and Activity 2 (Build "Press to Light") from `ACTIVITIES.md`.
3. **After Class:**
   - Encourage students to try the Boss Quests at home (buzzer alarm, dimmable LED, light sensor) — all still just a browser tab away on Wokwi.

---

## 🔮 Where This Fits in the Journey

This session is a milestone: students move from purely digital creations (pages, games) to **code that senses and acts on the physical world** — the same core idea behind robotics, smart home devices, and IoT. It stands alone and needs no prior physical computing experience, though the programming logic (variables, `if`/`else`) from the Python sessions carries over directly into Arduino's C++-based language.

---

*Created for Code Club Sri Lanka — Empowering future engineers to bring their code into the real world! 🇱🇰🔌💻*
