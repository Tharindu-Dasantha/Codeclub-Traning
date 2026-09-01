# 📄 CSS Student Cheatsheet & Designer Guide
> **Grade 5 - 8 Code Club Edition** | Keep this by your keyboard! ⌨️🎨

---

## 💡 The 3 Pillars of Web Development

| Language | Real-world Analogy | What it does |
| :--- | :--- | :--- |
| **HTML** | 🦴 **The Skeleton** | Structure, text, images, links |
| **CSS** | 🎨 **Skin & Outfit** | Colors, fonts, layouts, rounded corners, hover effects |
| **JavaScript** | ⚡ **Brain & Muscles** | Interactivity, animations, games, popups |

---

## 🔗 How to Connect CSS to HTML

Inside the `<head>` section of your `index.html` file, add this link tag:

```html
<head>
    <title>My Webpage</title>
    <!-- Connect your CSS file! -->
    <link rel="stylesheet" href="style.css">
</head>
```

---

## 🎯 Anatomy of a CSS Rule

```text
  Selector          Property        Value
     │                 │              │
  ┌──┴──┐           ┌──┴──┐       ┌───┴───┐
    h1          {    color   :    #0284c7  ;   }
                    └─────────┬───────────┘
                              Declaration
```

> ⚠️ **Golden Rule:** ALWAYS end every CSS property declaration with a semicolon `;`!

---

## 🎯 CSS Selectors Cheat Sheet

| Selector Type | Syntax Example | What it targets in HTML |
| :--- | :--- | :--- |
| **Tag Selector** | `h1 { color: red; }` | All `<h1>` tags on the page |
| **Class Selector** | `.card { background: white; }` | Any element with `class="card"` |
| **ID Selector** | `#hero { padding: 40px; }` | The single element with `id="hero"` |
| **Hover State** | `.btn:hover { background: gold; }` | Element when mouse touches it |

---

## 📦 The CSS Box Model

Every element on a webpage sits inside a box:

```text
┌─────────────────────────────────────────┐
│ MARGIN (Outside spacing between boxes)  │
│  ┌───────────────────────────────────┐  │
│  │ BORDER (The wall around box)      │  │
│  │  ┌─────────────────────────────┐  │  │
│  │  │ PADDING (Inside spacing)    │  │  │
│  │  │  ┌───────────────────────┐  │  │  │
│  │  │  │ CONTENT (Text/Image)  │  │  │  │
│  │  │  └───────────────────────┘  │  │  │
│  │  └─────────────────────────────┘  │  │
│  └───────────────────────────────────┘  │
└─────────────────────────────────────────┘
```

```css
.profile-card {
    padding: 20px;       /* Space inside card */
    margin: 15px;        /* Space outside card */
    border: 2px solid #0d9488; /* Border thickness, style & color */
    border-radius: 16px; /* Smooth rounded corners */
}
```

---

## 🎨 Popular CSS Properties Reference

### 1. Colors & Backgrounds
```css
body {
    background-color: #0f172a; /* Page background color */
    color: #f8fafc;            /* Text color */
}

.highlight {
    background-color: gold;
    color: black;
}
```

### 2. Fonts & Text Styling
```css
h1 {
    font-family: 'Poppins', Arial, sans-serif;
    font-size: 32px;
    font-weight: bold;         /* bold, normal, 600 */
    text-align: center;        /* left, center, right */
    text-transform: uppercase; /* uppercase, lowercase, capitalize */
    line-height: 1.5;
}
```

### 3. Borders, Corners & Shadows
```css
.avatar {
    width: 120px;
    height: 120px;
    border-radius: 50%; /* Perfect Circle Avatar! */
    border: 4px solid #0284c7;
}

.box {
    border-radius: 12px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15); /* Soft glowing shadow */
}
```

### 4. Interactive Hover Animations
```css
.card {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
    transform: translateY(-8px); /* Lifts card upward on hover */
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.25);
}
```

---

## 🎨 Color Cheat Sheet (Sri Lanka Theme Palette)

- 🦁 **Lion Gold:** `#f59e0b`
- 🌊 **Indian Ocean Blue:** `#0284c7`
- 🍃 **Tea Plantation Green:** `#10b981`
- 🌺 **Bougainvillea Pink:** `#ec4899`
- 🌙 **Midnight Dark Slate:** `#0f172a`
- 🐘 **Elephant Ash Grey:** `#475569`

---

## 🚨 Top 3 CSS Beginner Mistakes to Avoid

1. ❌ **Forgetting Semicolons:** Writing `color: red` without a semicolon breaks the next line!
2. ❌ **Forgetting the Dot `.` on Classes:** Writing `card { ... }` instead of `.card { ... }`.
3. ❌ **Forgetting the `#` on Hex Colors:** Writing `color: 0284c7` instead of `color: #0284c7`.

---

## ⌨️ Useful Shortcuts & Tips

- `Ctrl + S` / `Cmd + S` 💾 **Save CSS File**
- `F5` or `Ctrl + R` 🔄 **Refresh Chrome Browser**
- `F12` 🕵️ **Inspect Element & Edit CSS Live in Browser!**
