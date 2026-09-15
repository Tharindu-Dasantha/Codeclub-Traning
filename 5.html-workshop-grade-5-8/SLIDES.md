# 📊 Slide Deck Guide & Projection Notes
> **Session:** HTML Web Building Adventure (Grade 5-8 Sri Lanka)  
> *Facilitators can project this markdown file directly or copy text into Google Slides / PowerPoint.*

---

## 🖥️ Slide 1: Welcome to Code Club!
- **Title:** 🌐 HTML Web Building Adventure
- **Subtitle:** Turn your computer from a toy into a superpower tool! 🚀
- **Visual:** Code Club Sri Lanka Logo + Emojis 🇱🇰💻
- **Facilitator Script:** *"Ayubowan everyone! Today, you are stepping out of being just internet users and stepping into being WEB CREATORS!"*

---

## 🖥️ Slide 2: How does the Internet work?
- **Key Question:** What happens when you type `www.google.com`?
- **Concept:** 
  1. Your Computer asks a distant server for a webpage.
  2. The server sends back secret text code called **HTML**.
  3. Your browser (Chrome/Edge) acts like a translator and turns code into images, text, and buttons!
- **Visual Diagram:**
  ```text
  [ Your Laptop ]  ──── Request ────►  [ Web Server ]
  [  (Chrome)   ]  ◄─── HTML Code ───  [ (Data Center) ]
  ```

---

## 🖥️ Slide 3: The 3 Languages of the Web
- **HTML (HyperText Markup Language):** 🦴 **The Skeleton** (Structure)
- **CSS (Cascading Style Sheets):** 🎨 **Skin & Clothes** (Styles & Colors)
- **JavaScript:** ⚡ **Brain & Muscles** (Logic & Actions)
- **Interactive Check:** *"If a webpage was a Sri Lankan Tuk-Tuk: What is the metal frame? (HTML) What is the paint and stickers? (CSS) What is the engine? (JavaScript)"*

---

## 🖥️ Slide 4: Meet the HTML Tag!
- **Concept:** HTML tags wrap around content to give it meaning.
- **Syntax:**
  ```html
  <tagname> Your Content Here </tagname>
  ```
- **Analogy:** 🥪 Bread top `<bread>`, filling in middle, bread bottom `</bread>`!
- **Notice the Slash:** Closing tags ALWAYS need `/`!

---

## 🖥️ Slide 5: The Master Skeleton Code
- **Every single HTML page needs this foundation:**
  ```html
  <!DOCTYPE html>
  <html>
  <head>
      <title>My Cool Page</title>
  </head>
  <body>
      <h1>Hello World!</h1>
  </body>
  </html>
  ```
- **Explanation:**
  - `<head>` = Invisible info (Browser tab title)
  - `<body>` = Everything visible on your screen!

---

## 🖥️ Slide 6: Headings (H1 to H6)
- **H1 is the Giant Elephant 🐘**
- **H6 is the Tiny Ant 🐜**
  ```html
  <h1>H1 - Main Page Title</h1>
  <h2>H2 - Section Title</h2>
  <h3>H3 - Subtitle</h3>
  ```
- **Rule:** Only use ONE `<h1>` per page for your main headline!

---

## 🖥️ Slide 7: Lists (Bullet Points vs Numbers)
- **Bullet Points (`<ul>` = Unordered List):**
  ```html
  <ul>
      <li>Kottu Roti</li>
      <li>Pol Roti</li>
  </ul>
  ```
- **Numbers (`<ol>` = Ordered List):**
  ```html
  <ol>
      <li>Wake Up</li>
      <li>Code Club</li>
  </ol>
  ```

---

## 🖥️ Slide 8: Adding Images & Links
- **Images (`<img>`):**
  ```html
  <img src="elephant.jpg" alt="Sri Lankan Elephant" width="300">
  ```
  *Self-Closing! Doesn't need `</img>`!*

- **Links (`<a>`):**
  ```html
  <a href="https://www.codeclub.lk" target="_blank">Visit Code Club</a>
  ```

---

## 🖥️ Slide 9: 🕵️ Bug Hunt Time!
- **Challenge:** Find 5 bugs on the screen!
- *(Project code from `ACTIVITIES.md` and let students shout out fixes!)*

---

## 🖥️ Slide 10: 🚀 Build Time!
- **Project:** "My Scratch Maze Game Showcase Page"
- Open `starter-kit/index.html` or `interactive-demo/playground.html`.
- **Remember:**
  1. Type your code ⌨️
  2. Save your file (`Ctrl+S`) 💾
  3. Refresh browser (`F5`) 🔄

---

## 🖥️ Slide 11: Showcase & High Fives!
- Turn to your neighbor! 🤝
- Show off your maze game showcase page!
- 💾 **Save `index.html` and keep it!** You'll reopen this exact file next time.
- **What's Next?** Next session: **CSS Styling Magic!** We'll style THIS page! 🎨✨
