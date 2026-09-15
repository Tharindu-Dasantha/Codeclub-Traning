# 🎮 Student Activities & CSS Bug Hunt Challenges

> **Workshop:** CSS Styling Magic (Grade 5-8)  
> **Instructions:** Complete Activity 1 first to earn your CSS Debugger Badge, then jump into Activity 2 to style your awesome website!

---

## 🕵️ Activity 1: The 5-Minute CSS Bug Hunt!

Detective Codey's stylesheet has **5 syntax bugs** that are preventing the webpage from looking stylish! Can you spot and fix them all?

### ❌ The Broken CSS Code (`style.css`):

```css
/* Bug Hunt Challenge File */

body {
    backround-color: #f1f5f9;
    font-family: Arial, sans-serif
}

h1 {
    color: 0284c7;
    text-align: center;
}

card {
    background-color: white;
    padding: 20px;
    border-radius: 12px;
}

.btn:hover {
    background-color: #10b981
    transform: scale(1.1);
}
```

---

### 🔍 Bug Hunt Answer Key (For Instructors):

1. **Bug 1 (Line 4):** Typo in property name: `backround-color` should be `background-color`.
2. **Bug 2 (Line 5):** Missing semicolon at end of declaration: `font-family: Arial, sans-serif` should be `font-family: Arial, sans-serif;`.
3. **Bug 3 (Line 9):** Missing hashtag `#` on Hex color code: `color: 0284c7;` should be `color: #0284c7;`.
4. **Bug 4 (Line 13):** Missing class dot `.` prefix on selector: `card` should be `.card`.
5. **Bug 5 (Line 20):** Missing semicolon `;` after color value in hover rule: `background-color: #10b981` should be `background-color: #10b981;`.

---

## 🚀 Activity 2: Main Project — "Styling My Scratch Maze Game Showcase"

Your mission: Transform your plain HTML maze game showcase page into a modern, vibrant web page using CSS styling!

> 👋 **Reconnect first:** Open the `index.html` file you saved last session. If you weren't there (or lost your file), use `starter-kit/index.html` instead — it has the same content, ready to style.

### 📋 Checklist & Requirements:

- [ ] **Level 1: Link the Stylesheet**
  - Open `index.html` and add `<link rel="stylesheet" href="style.css">` inside the `<head>` tags.
  - Save both files (`Ctrl+S`) and refresh Chrome (`F5`).

- [ ] **Level 2: Palette & Typography**
  - Set a page background color using `body { background-color: ...; }`.
  - Set text color using `color: ...;`.
  - Style your main title (`h1`) with a bold color, larger `font-size`, and `text-align: center;`.
  - Add a colored line under section headings (`h2 { border-bottom: 3px solid ...; }`).

- [ ] **Level 3: Style Your Game Screenshot**
  - Style your screenshot image using the `img` or `.avatar` selector:
    - Set `width: 140px;` and `height: 140px;`.
    - Turn it into a circle using `border-radius: 50%;` (or try a smaller radius for a rounded rectangle look).
    - Add a colored border: `border: 4px solid #0284c7;`.

- [ ] **Level 4: Modern Card Box Layout**
  - Wrap your content sections inside `<div class="card">` in HTML.
  - In `style.css`, style `.card`:
    - Give it a clean background: `background-color: white;`.
    - Add inside spacing: `padding: 20px;`.
    - Add outside spacing: `margin: 20px auto;`.
    - Give it rounded corners: `border-radius: 16px;`.
    - Add a soft shadow: `box-shadow: 0 8px 20px rgba(0,0,0,0.1);`.

- [ ] **Level 5: Interactive Hover Magic**
  - Add a smooth transition to your card: `transition: transform 0.3s ease;`.
  - Add hover effect: `.card:hover { transform: translateY(-8px); }`.
  - Style your "Play the Game" button (`.btn`) with padding, rounded pill corners (`border-radius: 25px`), and a cool hover color change!

---

## 🏆 Activity 3: Fast-Finisher Boss Quests! (For Speed Coders)

Finished Activity 2 already? Level up your styling powers with these Boss Quests!

### ⚡ Quest A: Glowing Gradient Backgrounds (`linear-gradient`)
Instead of a flat background color, give your hero section a glowing jungle-at-dusk gradient!
```css
body {
    background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
    color: white;
}
```

### ⚡ Quest B: Flexbox Centering Masters (`display: flex`)
Center your cards neatly using modern CSS Flexbox layout:
```css
.card-container {
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
}
```

### ⚡ Quest C: Dark Mode / Light Mode Class Toggle (`.dark-mode`)
Create a custom class `.dark-theme` in CSS so users can switch themes!
```css
.dark-theme {
    background-color: #090d16;
    color: #e2e8f0;
}
.dark-theme .card {
    background-color: #1e293b;
    color: white;
    border: 1px solid #334155;
}
```
