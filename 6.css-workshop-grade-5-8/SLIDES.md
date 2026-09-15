# 📊 Slide Deck Guide & Projection Notes: CSS Styling Magic
> **Session:** CSS Styling Magic (Grade 5-8 Sri Lanka)  
> *Facilitators can project this markdown file directly or copy text into Google Slides / PowerPoint.*

---

## 🖥️ Slide 1: Welcome to CSS Styling Magic!
- **Title:** 🎨 CSS Styling Magic — Paint & Style the Web!
- **Subtitle:** Give your HTML skeleton an epic outfit & vibrant colors! 🚀
- **Visual:** Code Club Sri Lanka Logo + Emojis 🇱🇰🎨💻
- **Facilitator Script:** *"Ayubowan coders! Last time we built HTML skeletons for our Scratch maze game showcase pages. Today, we become digital artists and fashion designers for the web — and give that exact page a glow-up!"*

---

## 🖥️ Slide 2: Why do we need CSS?
- **HTML without CSS:** Boring black-and-white text on plain white background.
- **HTML with CSS:** Vibrant colors, custom fonts, floating rounded cards, glowing buttons, and smooth hover animations!
- **The Tuk-Tuk Analogy:**
  - 🦴 **HTML:** Metal frame & wheels (Structure)
  - 🎨 **CSS:** Bright paint, chrome trim, LED lights, seat covers (Design & Style)
  - ⚡ **JavaScript:** Engine & Horn (Action & Functionality)

---

## 🖥️ Slide 3: How CSS Connects to HTML
- **Where does CSS live?** In a separate file named `style.css`.
- **How to link it inside `index.html` `<head>`:**
  ```html
  <head>
      <title>My Webpage</title>
      <link rel="stylesheet" href="style.css">
  </head>
  ```
- **Pro Tip:** Make sure both `index.html` and `style.css` are saved in the SAME folder!

---

## 🖥️ Slide 4: Anatomy of a CSS Rule
- **Syntax:**
  ```css
  h1 {
      color: #0284c7;
      text-align: center;
  }
  ```
- **3 Key Elements:**
  1. **Selector (`h1`):** WHICH element are we styling?
  2. **Property (`color`):** WHAT feature are we changing?
  3. **Value (`#0284c7`):** WHAT new style are we giving it?
- **Golden Rule:** Don't forget the semicolon `;` at the end of every line!

---

## 🖥️ Slide 5: Selectors — Tags vs Classes vs IDs
- **Tag Selector (`h1`):** Styles EVERY `<h1>` tag on the page.
- **Class Selector (`.card`):** Styles any element with `class="card"`. Notice the dot `.`!
- **ID Selector (`#hero`):** Styles a single unique element with `id="hero"`. Notice the hashtag `#`!
- **Check Question:** *"Which selector starts with a dot `.`? A Class selector!"*

---

## 🖥️ Slide 6: Colors & Backgrounds 🎨
- **Color Names:** `red`, `gold`, `teal`, `navy`, `crimson`
- **Hex Codes (Secret Hex Code Magic):**
  - `#0284c7` (Ocean Blue 🌊)
  - `#10b981` (Tea Green 🍃)
  - `#f59e0b` (Lion Gold 🦁)
  - `#0f172a` (Midnight Slate 🌙)
- **CSS Code:**
  ```css
  body {
      background-color: #0f172a;
      color: #f8fafc;
  }
  ```

---

## 🖥️ Slide 7: The Famous Box Model 📦
- Every element sits inside an invisible box!
- **Content:** Text or picture inside.
- **Padding:** Space inside between text and border.
- **Border:** The wall surrounding the box.
- **Margin:** Space outside separating this box from others.

```css
.card {
    background-color: white;
    padding: 20px;
    margin: 15px;
    border: 2px solid #0284c7;
    border-radius: 16px;
}
```

---

## 🖥️ Slide 8: Rounded Corners & Circles ✨
- **Rounded Card Edges:** `border-radius: 16px;`
- **Pill Buttons:** `border-radius: 25px;`
- **Magic Circle Avatar:** `border-radius: 50%;`
  ```css
  .avatar {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      border: 4px solid #0284c7;
  }
  ```

---

## 🖥️ Slide 9: Interactive Hover Magic ⚡
- Make buttons and cards react when the mouse touches them!
- `:hover` pseudo-class + `transition` property = Smooth motion!
  ```css
  .card {
      transition: transform 0.3s ease;
  }

  .card:hover {
      transform: translateY(-8px);
      box-shadow: 0 12px 25px rgba(0,0,0,0.2);
  }
  ```

---

## 🖥️ Slide 10: 🕵️ CSS Bug Hunt Time!
- **Challenge:** Spot 5 bugs in Detective Codey's CSS file!
- *(Project code from `ACTIVITIES.md` and let students call out fixes!)*

---

## 🖥️ Slide 11: 🚀 Project Build Time!
- **Project:** "Styling My Scratch Maze Game Showcase"
- Open **your own `index.html` from last session** (or `starter-kit/index.html` if you weren't there) and `starter-kit/style.css` (or `interactive-demo/playground.html`).
- **Remember the 3 Steps:**
  1. Type CSS code ⌨️
  2. Save file (`Ctrl+S`) 💾
  3. Refresh browser (`F5`) 🔄

---

## 🖥️ Slide 12: Showcase & What's Next! 🌟
- **Gallery Walk:** Walk around and explore your classmates' custom designs!
- **Award Badges:** Master Colorist 🎨, Hover Magic ✨, Clean Code 🌟
- **What's Next?** Session 3: **JavaScript Interactivity & Games!** ⚡🎮
