# ⏱️ Detailed 2-Hour Facilitator Lesson Plan: CSS Styling Magic

> **Session Title:** CSS Styling Magic — Paint & Style the Web!  
> **Target Group:** Grade 5 - Grade 8 (Ages 10-14, Sri Lanka)  
> **Duration:** 120 Minutes (2 Hours)  
> **Pedagogical Strategy:** Visual Analogies + Live Coding + Color Experiments + Gamified Bug Hunt + Project-Based Learning

---

## 🕒 Master Schedule Overview

| Time | Duration | Module | Activity / Key Concept |
| :--- | :--- | :--- | :--- |
| **00:00 - 00:15** | 15 min | **Module 1: The Magic of CSS & Painting the Web** | Plain HTML vs Styled Page demo, Tuk-Tuk analogy, How CSS connects to HTML (`<link>`), CSS Rule Syntax |
| **00:15 - 00:40** | 25 min | **Module 2: Colors & Fonts Mastery** | Named colors vs Hex codes (`#ff5722`), `color`, `background-color`, `font-family`, `font-size`, `text-align` |
| **00:40 - 01:10** | 30 min | **Module 3: The Box Model & Hover Animations** | Margins, Padding, Borders, `border-radius`, `box-shadow`, Interactive `:hover` & `transition` magic |
| **01:10 - 01:20** | 10 min | **☕ Energy Break & Color Quiz** | "Color Pose" Physical Energizer & 5-question rapid fire pop quiz |
| **01:20 - 01:50** | 30 min | **Module 4: Hands-on Code Challenge & Project** | CSS Bug Hunt Challenge & "Styling My Scratch Maze Game Showcase" Project |
| **01:50 - 02:00** | 10 min | **Module 5: Showcase & Wrap-up** | Peer Showcase, Best Design Awards, Recap & What's Next (JavaScript Teaser) |

---

## 📘 Detailed Module Breakdown

### 🎨 Module 1: The Magic of CSS & Painting the Web (00:00 - 00:15)

#### Objective:
Inspire students by showing how plain black-and-white text turns into a stunning, modern website with CSS.

#### Step 0: Reconnect With Last Session's Project (2 mins)
- Ask: *"Who still has the `index.html` file you saved last session?"*
- **Students with their own file:** Have them open it — that's exactly what we'll style today!
- **Students who missed Session 1 or lost their file:** Give them `starter-kit/index.html` — it has the identical maze game showcase content, so they won't miss out.
- Optional: students with their own file can copy their personalized game name/story/screenshot into `starter-kit/index.html` if they'd like the same class hooks as everyone else for today's guided steps.

#### Facilitator Script & Steps:
1. **The Hook - "The 1-Second Transformation":**
   - Open `solution-kit/index.html` in Chrome.
   - Show the beautiful, colorful page with glowing cards, custom fonts, rounded pictures, and hover effects.
   - Now, right-click -> **Inspect** -> find `<link rel="stylesheet" href="style.css">` and press `Delete` key!
   - Watch the page instantly transform back into a plain, boring black-and-white HTML document!
   - Ask the class: *"What just happened? Did the text vanish? No! We removed the CSS outfit!"*
2. **The Tuk-Tuk / House Analogy:**
   - 🦴 **HTML:** The bare metal frame of a Sri Lankan Tuk-Tuk or the brick structure of a house.
   - 🎨 **CSS:** The bright red/blue paint, chrome mirrors, plush seats, stickers, and LED lights!
3. **How CSS Connects to HTML:**
   - Explain that CSS lives in its own file (e.g. `style.css`).
   - We connect it inside the `<head>` section of our HTML file using the `<link>` tag:
     ```html
     <link rel="stylesheet" href="style.css">
     ```
4. **Anatomy of a CSS Rule:**
   - Explain selector, property, value, and semicolon `;`:
     ```css
     h1 {
         color: darkorange;
         text-align: center;
     }
     ```
   - **Analogy:**  
     - **Selector (`h1`):** Who are we styling? ("Hey, H1 headings!")
     - **Property (`color`):** What feature are we changing? ("Your text color!")
     - **Value (`darkorange`):** What value do we want? ("Orange!")
     - **Semicolon (`;`):** The full stop of CSS. Very important!

---

### 🎨 Module 2: Colors & Fonts Mastery (00:15 - 00:40)

#### Objective:
Teach students how to customize background colors, text colors, font styles, sizes, and alignments.

#### Key Concepts Introduced:
- `color` - Text color (e.g., `gold`, `navy`, `crimson`, `#00b4d8`).
- `background-color` - Page or container background color (e.g., `#0f172a` for sleek dark mode).
- **Hex Color Codes:** Introduce the `#RRGGBB` secret code (e.g. `#ff0000` for Red, `#00ff00` for Green, `#0000ff` for Blue).
- `font-family` - Choosing clean fonts like `'Poppins'`, `'Roboto'`, or `sans-serif`.
- `font-size` - Text sizing (`32px`, `18px`, `24px`).
- `text-align` - Aligning text (`left`, `center`, `right`).
- `text-transform` - Making text UPPERCASE or Capitalized.

#### Live Demo Activity (Follow Along):
1. Have all students open `starter-kit/index.html` and `starter-kit/style.css`.
2. Guide them to add styling to the body and headings:
   ```css
   /* Change whole page background and font */
   body {
       background-color: #f4f6f9;
       color: #1e293b;
       font-family: Arial, sans-serif;
   }

   /* Make main title bright blue and centered */
   h1 {
       color: #0284c7;
       text-align: center;
       font-size: 36px;
   }

   /* Style subheadings */
   h2 {
       color: #0d9488;
       border-bottom: 3px solid #0d9488;
   }
   ```
3. Have students save `style.css` and refresh their Chrome browser (`F5`).
4. **Spot Check:** Walk around and make sure everyone's page changed colors!

---

### 📦 Module 3: The Box Model & Hover Animations (00:40 - 01:10)

#### Objective:
Introduce the CSS Box Model (Margins, Padding, Borders) and interactive `:hover` state animations.

#### Key Concepts Introduced:

#### 1. The CSS Box Model 📦
Explain that EVERY HTML element lives inside an invisible box!
- **Content:** The actual text or image.
- **Padding:** Space *inside* the box between text and border (like bubble wrap inside a parcel).
- **Border:** The wall surrounding the content (solid, dashed, dotted).
- **Margin:** Space *outside* the box separating it from other elements (personal space buffer).

```css
.card {
    background-color: white;
    padding: 20px;
    margin: 15px;
    border: 2px solid #cbd5e1;
    border-radius: 12px; /* Makes corners smooth and rounded! */
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}
```

#### 2. Rounded Corners & Shadows ✨
- `border-radius: 15px;` -> Smooth pill/card edges!
- `border-radius: 50%;` -> Turns a square image into a perfect circle avatar!
- `box-shadow: 0 8px 20px rgba(0,0,0,0.15);` -> Adds 3D depth and shadow underneath.

#### 3. Interactive Magic (`:hover` & `transition`) ⚡
- `:hover` triggers when the mouse cursor touches an element!
- `transition: all 0.3s ease;` makes the hover movement smooth instead of jerky.

```css
/* Card interactive animation */
.card {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
    transform: translateY(-8px); /* Card lifts up floatingly! */
    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.2);
}

/* Button style */
.btn {
    background-color: #2563eb;
    color: white;
    padding: 10px 20px;
    border-radius: 25px;
    text-decoration: none;
    display: inline-block;
}

.btn:hover {
    background-color: #1d4ed8;
    transform: scale(1.05); /* Slightly grows button */
}
```

---

### ☕ Energy Break & Color Quiz (01:10 - 01:20)

- **Physical Energizer - "The CSS Color Game" (3 mins):**
  - Facilitator shouts a CSS Property:
    - If Facilitator says `"background-color!"`, students touch the table/floor!
    - If Facilitator says `"border-radius!"`, students round their arms into a circle!
    - If Facilitator says `":hover!"`, students jump up and down!
- **5-Question Rapid Fire Quiz:**
  1. What HTML tag do we use to link an external CSS file? (`<link rel="stylesheet" href="...">`)
  2. What is the difference between `padding` and `margin`? (*Padding is inside the border, margin is outside!*)
  3. How do you make a square image into a circle in CSS? (`border-radius: 50%`)
  4. What character represents a Class selector in CSS? (`.` dot)
  5. What does the `:hover` pseudo-class do? (*Styles an element when mouse hovers over it*)

---

### 🕵️ Module 4: Hands-on Code Challenge & Project (01:20 - 01:50)

#### Objective:
Consolidate learning through gamified CSS debugging and building a visually striking personal profile page/card.

#### Step 1: The 5-Minute CSS Bug Hunt (Gamified Debugging)
Distribute broken code from `ACTIVITIES.md` (or project on board).  
Challenge: *"Detective Codey broke the styles! Find and fix 5 CSS bugs!"*
- Bug 1: Missing dot `.` in class selector (`card` instead of `.card`).
- Bug 2: Missing semicolon `;` after `color: blue`.
- Bug 3: Typo in property name (`backround-color` instead of `background-color`).
- Bug 4: Using curly braces `{}` incorrectly or missing closing `}`.
- Bug 5: Forgot hashtag `#` on Hex color (`ff5722` instead of `#ff5722`).

#### Step 2: Main Project — "Styling My Scratch Maze Game Showcase"
Students open their own `index.html` (or `starter-kit/index.html`) alongside `starter-kit/style.css` to build a modern card-layout website with:
- [x] Custom color palette (Background, Headings, Accent colors) — try a jungle/game-themed palette!
- [x] Styled navigation header & centered game title.
- [x] Rounded game screenshot with `border-radius: 50%` (or try a rectangle with rounded corners) and border shadow.
- [x] Card layout using `padding`, `margin`, `border-radius`, and `box-shadow`.
- [x] Interactive hover effects (`:hover` scale/lift) on cards and the "Play" button.
- [x] Styled How to Play (`ul`) and Levels (`ol`) lists with custom bullet colors or padding.

---

### 🌟 Module 5: Showcase & Wrap-up (01:50 - 02:00)

1. **Peer Gallery Walk (5 mins):**
   - Students leave their screens open and walk around the room for 3 minutes to view their classmates' designs!
2. **Design Awards (3 mins):**
   - Award fun badges/stickers:
     - 🎨 *Master Colorist Award* (Best color scheme)
     - ✨ *Hover Magic Award* (Best hover animation)
     - 🌟 *Clean Code Award* (Best organized CSS file)
3. **Closing Recap & What's Next (2 mins):**
   - Recap: HTML gave us bones, CSS gave us style and fashion!
   - Teaser for Session 3: *"Next session, we add JavaScript — the brain that makes buttons play sounds, open popups, and score points in games!"*
4. **Certificate / Sticker Handout.**

---

## 👩‍🏫 Facilitator Tips & Troubleshooting

- **Symptom:** CSS styles are not showing up on the webpage at all!
  - *Fix 1:* Check `index.html` `<head>` tag. Ensure `<link rel="stylesheet" href="style.css">` is typed correctly and both files are in the SAME folder!
  - *Fix 2:* Check for missing dots `.` on class names in CSS (e.g. `card` vs `.card`).
- **Symptom:** The rest of the stylesheet stopped working after a certain line!
  - *Fix:* Look for a missing closing curly bracket `}` or a missing semicolon `;` earlier in the file. A missing `}` breaks all rules below it!
- **Symptom:** Image didn't turn into a circle with `border-radius: 50%`!
  - *Fix:* Ensure the `<img>` tag has equal width and height (e.g., `width="150" height="150"`), otherwise it will turn into an oval!
