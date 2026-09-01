# 📄 HTML Student Cheatsheet & Explorer Guide
> **Grade 5 - 8 Code Club Edition** | Keep this by your keyboard! ⌨️

---

## 💡 The 3 Pillars of Web Development

| Language | Real-world Analogy | What it does |
| :--- | :--- | :--- |
| **HTML** | 🦴 **The Skeleton** | Structure, text, images, links |
| **CSS** | 🎨 **Skin & Outfit** | Colors, fonts, layouts, backgrounds |
| **JavaScript** | ⚡ **Brain & Muscles** | Animations, buttons, games, interactivity |

---

## 🦴 The Anatomy of an HTML Tag

```text
       Opening Tag        Content        Closing Tag
         │                  │                 │
      ┌──┴──┐       ┌───────┴──────┐      ┌───┴───┐
      <h1 >  Ayubowan Sri Lanka!  </h1>
```

> ⚠️ **Golden Rule:** Don't forget the forward slash `/` in closing tags!

---

## 🏗️ The Essential Webpage Skeleton

Every HTML webpage starts with this magic code:

```html
<!DOCTYPE html>
<html>
<head>
    <title>My Webpage Title</title>
</head>
<body>

    <!-- Visible content goes here! -->

</body>
</html>
```

---

## 🏷️ Essential HTML Tags Quick Reference

### 1. Headings (Titles & Subtitles)
```html
<h1>Biggest Title (Elephant)</h1>
<h2>Major Heading</h2>
<h3>Sub-heading</h3>
<h4>Small Heading</h4>
<h5>Smaller Heading</h5>
<h6>Tiny Heading (Ant)</h6>
```

### 2. Text & Paragraphs
```html
<p>This is a normal paragraph of text.</p>
<p>Make text <b>BOLD</b> or <i>ITALIC</i> or <mark>HIGHLIGHTED</mark>!</p>
<br> <!-- Line break (moves to next line) -->
<hr> <!-- Horizontal line divider -->
```

### 3. Lists
- **Bullet Point List (`<ul>` = Unordered List):**
  ```html
  <ul>
      <li>Elephant</li>
      <li>Leopard</li>
      <li>Peacock</li>
  </ul>
  ```

- **Numbered List (`<ol>` = Ordered List):**
  ```html
  <ol>
      <li>First step</li>
      <li>Second step</li>
      <li>Third step</li>
  </ol>
  ```

### 4. Images (`<img>`)
> 💡 *Note: `<img>` is a self-closing tag! No `</img>` needed.*
```html
<img src="photo.jpg" alt="Description of picture" width="300">
```

### 5. Links (`<a>` = Anchor)
```html
<a href="https://www.google.com" target="_blank">Click here to search!</a>
```

---

## 🚨 Top 3 Beginner Mistakes to Avoid

1. ❌ **Forgetting to Save:** Always press `Ctrl + S` (Windows) or `Cmd + S` (Mac) in your editor before refreshing Chrome (`F5`)!
2. ❌ **Missing Slashes:** Writing `<p>Hello<p>` instead of `<p>Hello</p>`.
3. ❌ **Typos in Attributes:** Writing `scr="..."` instead of `src="..."` or `herf="..."` instead of `href="..."`.

---

## ⌨️ Useful Keyboard Shortcuts

- `Ctrl + S` / `Cmd + S` 💾 **Save File**
- `Ctrl + Z` / `Cmd + Z` ↩️ **Undo Typo**
- `F5` or `Ctrl + R` 🔄 **Refresh Browser**
- `F12` 🕵️ **Open Inspect Element**
