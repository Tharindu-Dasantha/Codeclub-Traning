# ⏱️ Detailed 2-Hour Facilitator Lesson Plan

> **Session Title:** HTML Web Building Adventure  
> **Target Group:** Grade 5 - Grade 8 (Ages 10-14, Sri Lanka)  
> **Duration:** 120 Minutes (2 Hours)  
> **Pedagogical Strategy:** Visual Analogies + Live Coding + Gamified Challenges + Project-Based Learning

---

## 🕒 Master Schedule Overview

| Time | Duration | Module | Activity / Key Concept |
| :--- | :--- | :--- | :--- |
| **00:00 - 00:15** | 15 min | **Module 1: The Magic of Webpages** | Inspect Element trick, Web Browser vs HTML, Body Analogy |
| **00:15 - 00:40** | 25 min | **Module 2: Building the Skeleton** | `<!DOCTYPE>`, `<html>`, `<head>`, `<body>`, Headings & Paragraphs |
| **00:40 - 01:10** | 30 min | **Module 3: Media, Links & Lists** | Lists (`<ul>`/`<ol>`), Images (`<img>`), Links (`<a>`), Self-closing tags |
| **01:10 - 01:20** | 10 min | **☕ Energy Break & Quiz** | Quick movement break & 5-question oral pop quiz |
| **01:20 - 01:50** | 30 min | **Module 4: Hands-on Code Challenge** | Bug Hunt Challenge & "My Scratch Maze Game Showcase" Project |
| **01:50 - 02:00** | 10 min | **Module 5: Showcase & Wrap-up** | Peer Show & Tell, Recap, What's Next (CSS Teaser) |

---

## 📘 Detailed Module Breakdown

### 🎨 Module 1: The Magic of Webpages (00:00 - 00:15)

#### Objective:
Demystify how web pages work and ignite curiosity.

#### Facilitator Script & Steps:
1. **The Hook - "Inspect Element Magic trick":**
   - Open a popular Sri Lankan news website or Wikipedia (e.g. `wikipedia.org/wiki/Sri_Lanka` or `google.com`) on the main projector.
   - Right-click the main title and click **Inspect Element** (or press `F12`).
   - Change the text live on screen to *"Welcome to Grade 5-8 Code Club!"*.
   - Ask the class: *"Did I hack Google? No! I just edited the HTML sent to my browser!"*
2. **The Elephant / Human Body Analogy:**
   - Explain web development using a relatable analogy:
     - 🦴 **HTML (HyperText Markup Language):** The **Skeleton**. Gives structure (head, arms, body).
     - 🎨 **CSS (Cascading Style Sheets):** The **Skin & Clothes**. Gives colors, style, and beauty.
     - ⚡ **JavaScript:** The **Brain & Muscles**. Makes things move, animate, and respond.
3. **What is a Tag?**
   - Explain that HTML speaks in `<tags>`.
   - Analogies: A sandwich bread slice at top `<bread>` and bottom `</bread>`.
   - Rules: Most tags come in pairs!
     - `<tagname>` = Opening Tag
     - `</tagname>` = Closing Tag (Notice the forward slash `/`!)

---

### 🦴 Module 2: Building the Skeleton (00:15 - 00:40)

#### Objective:
Teach basic HTML document structure and text formatting tags.

#### Key Concepts Introduced:
- `<!DOCTYPE html>` - Tells browser "This is modern HTML5!"
- `<html>` - The root container of the page.
- `<head>` - Secret info area (title, metadata, icons - invisible on page body).
- `<title>` - The tab name in the browser bar.
- `<body>` - Everything visible on screen!
- `<h1>` to `<h6>` - Headings (H1 is Giant Elephant, H6 is Tiny Ant).
- `<p>` - Paragraph text.
- Text Decorators: `<b>` (Bold), `<i>` (Italic), `<mark>` (Highlight), `<br>` (Line break), `<hr>` (Divider line).

#### Live Demo Activity (Follow Along):
1. Have all students open their code editor or double-click `interactive-demo/playground.html`.
2. Guide them step-by-step to type:
   ```html
   <!DOCTYPE html>
   <html>
   <head>
       <title>My First Webpage</title>
   </head>
   <body>
       <h1>Ayubowan! Welcome to My Page</h1>
       <p>My name is <b>Kasun</b> and I love coding in Sri Lanka!</p>
       <hr>
       <h2>About Me</h2>
       <p>I am in <i>Grade 6</i> at Code Club.</p>
   </body>
   </html>
   ```
3. Ask students to save as `myfirstpage.html` and open it in Google Chrome.
4. **Spot Check:** Walk around and ensure everyone sees their title and headings!

---

### 🌴 Module 3: Media, Links & Lists (00:40 - 01:10)

#### Objective:
Empower students to add lists, images, and clickable hyperlinks.

#### Key Concepts & Syntax:

#### 1. Lists (`<ul>`, `<ol>`, `<li>`)
- **Unordered List (Bullet points):**
  ```html
  <h3>My Favorite Sri Lankan Snacks:</h3>
  <ul>
      <li>Kottu Roti</li>
      <li>Egg Hoppers</li>
      <li>Pol Roti with Lunu Miris</li>
  </ul>
  ```
- **Ordered List (Numbered 1, 2, 3):**
  ```html
  <h3>My Top 3 Hobbies:</h3>
  <ol>
      <li>Playing Cricket</li>
      <li>Building Webpages</li>
      <li>Drawing Comic Books</li>
  </ol>
  ```

#### 2. Images (`<img>`)
- Explain that `<img>` is a **Self-Closing Tag** (no closing `</img>` needed!).
- Key Attributes: `src` (source URL/path) and `alt` (description for screen readers).
  ```html
  <img src="https://upload.wikimedia.org/wikipedia/commons/6/69/Sri_Lankan_elephant_in_Udawalawe_National_Park.jpg" alt="Sri Lankan Elephant" width="300">
  ```
- *Tip for Sri Lanka classrooms:* Use reliable placeholder URLs or local relative paths in the starter kit.

#### 3. Hyperlinks (`<a>`)
- `<a>` stands for **Anchor**.
- `href` attribute = Hypertext Reference (where does it take me?).
  ```html
  <p>Visit <a href="https://www.codeclub.lk" target="_blank">Code Club Sri Lanka</a> to learn more!</p>
  ```

---

### ☕ Energy Break & Pop Quiz (01:10 - 01:20)

- **Physical Energizer (2 mins):** Stand up! "If I say OPEN TAG, stretch arms high. If I say CLOSE TAG, cross arms with slash slash!"
- **5-Question Rapid Fire Quiz:**
  1. What tag is used for the biggest heading? (`<h1>`)
  2. True or False: `<img>` needs a `</img>` tag? (*False! It's self-closing.*)
  3. What symbol goes inside a closing tag? (`/` forward slash)
  4. Which tag holds all the visible content on the webpage? (`<body>`)
  5. What does the `href` attribute do in an `<a>` tag? (*Points to the destination link*)

---

### 🕵️ Module 4: Hands-on Code Challenge & Project (01:20 - 01:50)

#### Objective:
Consolidate learning through debugging and creative page construction.

#### Step 1: The 5-Minute Bug Hunt (Gamified Debugging)
Distribute the broken code snippet from `ACTIVITIES.md` (or project on board).  
Challenge: *"Find and fix 5 intentional bugs!"*
- Bug 1: Missing `<` in `h1>`.
- Bug 2: Missing closing slash in `</p>`.
- Bug 3: Misspelled `src` as `scr` in `<img>`.
- Bug 4: Unclosed `<b>` tag swallowing paragraph text.
- Bug 5: Missing quotes in `href`.

#### Step 2: Main Project - "My Scratch Maze Game Showcase Page"
Students open `starter-kit/index.html` and build a page that shows off the Scratch maze game they created at Code Club, incorporating:
- [x] Main Title (`<h1>`) with their game's name.
- [x] Creator introduction (`<p>`, `<b>`, `<i>`) — their name and grade.
- [x] "About My Game" paragraph describing the maze story (character, obstacle, goal).
- [x] Numbered list (`<ol>`) explaining How to Play (controls, rules, how to win).
- [x] Bulleted list (`<ul>`) of Cool Features (3+ things about their game).
- [x] At least 1 image (a screenshot of their game) with `alt` description and specified `width`.
- [x] At least 1 working link (`<a>`) to Scratch or Code Club Sri Lanka.
- [x] Optional Bonus: Horizontal line dividers (`<hr>`) and highlighted text (`<mark>`).

⚠️ **Facilitator Reminder:** At the end of this step, tell students to **save `index.html` and keep it** (USB drive, school folder, or emailed to themselves) — they'll reopen this exact file in the CSS Styling session next!

---

### 🌟 Module 5: Showcase & Wrap-up (01:50 - 02:00)

1. **Peer Showcase (5 mins):**
   - Students turn to their neighbor, hit `F5` refresh, and present their maze game showcase page for 60 seconds each!
2. **Facilitator Highlight (3 mins):**
   - Pick 2-3 enthusiastic students to project their webpage on the big screen. Point out great tag usage!
3. **Closing Recap & What's Next (2 mins):**
   - Review: You built a real webpage that shows off your own Scratch game today!
   - Teaser for Session 2: *"Next week, bring back this exact `index.html` file — we'll add CSS to make it glow, add colors, and turn it into a cool card layout showcasing your game!"*
4. **Certificate / Sticker Handout:** Award "HTML Web Explorer" badges/stickers.
5. **Final Reminder:** Make sure every student has saved a copy of `index.html` they can bring to the next session!

---

## 👩‍🏫 Facilitator Tips & Troubleshooting

- **Symptom:** Code changes aren't showing up in the browser!
  - *Fix:* Remind students to **Save** (`Ctrl+S` or `Cmd+S`) in their editor **before** hitting `F5` Refresh in the browser!
- **Symptom:** Image appears as a broken icon!
  - *Fix:* Check `src="..."` path for typos or missing HTTP protocol. Ensure `alt` text is added.
- **Symptom:** All text suddenly became giant or bold!
  - *Fix:* Look for a missing closing tag like `</h1>` or `</b>` higher up in the file.
