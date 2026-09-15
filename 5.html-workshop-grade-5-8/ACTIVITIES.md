# 🎮 Student Activities & Bug Hunt Challenges

> **Workshop:** HTML Web Building Adventure (Grade 5-8)  
> **Instructions:** Complete Activity 1 first to earn your Debugger Badge, then move to Activity 2 to build your website!

---

## 🕵️ Activity 1: The 5-Minute Bug Hunt!

Help Detective Codey fix this broken webpage! There are **5 syntax bugs** in the code below. Can you spot and fix them all?

### ❌ The Broken Code:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Bug Hunt Challenge</title>
</head>
<body>

    <h1 Welcome to My Maze Game</h1>
    
    <p>I built a maze game where a baby elephant escapes the jungle.</p
    
    <img scr="maze-screenshot.png" alt="My Maze Game Screenshot">
    
    <p>My favorite part is <b>dodging the leopard sprite!</p>
    
    <p>Play more games at <a href=https://scratch.mit.edu>Scratch</a>.</p>

</body>
</html>
```

---

### 🔍 Bug Hunt Answer Key (For Instructors):

1. **Bug 1 (Line 9):** Missing opening bracket closing `>` on heading: `<h1` should be `<h1>`.
2. **Bug 2 (Line 11):** Missing closing bracket on paragraph: `</p` should be `</p>`.
3. **Bug 3 (Line 13):** Typo in image source attribute: `scr=` should be `src=`.
4. **Bug 4 (Line 15):** Missing closing bold tag `</b>`: `<b>dodging the leopard sprite!</p>` should be `<b>dodging the leopard sprite!</b></p>`.
5. **Bug 5 (Line 17):** Missing quotation marks around link URL: `href=https://...` should be `href="https://..."`.

---

## 🚀 Activity 2: Main Project — "My Scratch Maze Game Showcase Page"

Your mission: Build a webpage that shows off the maze game you created in Scratch — the story, how to play it, and what makes it cool!

### 📋 Checklist & Requirements:

- [ ] **Level 1: The Skeleton Structure**
  - Includes `<!DOCTYPE html>`, `<html>`, `<head>`, `<title>`, and `<body>`.
  - Your browser tab shows your game's name (e.g., `<title>Kasun's Jungle Maze Escape</title>`).

- [ ] **Level 2: Headings & Introduction**
  - Main Title using `<h1>` (e.g., `<h1>Ayubowan! I Built Jungle Maze Escape</h1>`).
  - Introduction paragraph (`<p>`) naming yourself with at least one **bold** (`<b>`) word (your name) and one *italic* (`<i>`) word (your grade).

- [ ] **Level 3: About the Game & How to Play (Lists)**
  - A subtitle (`<h2>`) and paragraph (`<p>`) describing your maze game's story (character, obstacle, goal).
  - An **Ordered List** (`<ol>`) explaining "How to Play" — at least 3 steps/controls.
  - An **Unordered List** (`<ul>`) listing 3 "Cool Features" of your game.

- [ ] **Level 4: Media & Links**
  - At least one image (`<img>`) — a screenshot of your Scratch game — with an `alt` description and `width="300"`.
  - At least one link (`<a>`) to Scratch (scratch.mit.edu) or Code Club Sri Lanka.

- [ ] **Level 5: Visual Dividers**
  - Add horizontal lines (`<hr>`) between sections to keep your webpage neat!

- [ ] **Level 6: Save & Keep This File!** 💾
  - Save your file as `index.html` and keep it somewhere safe (USB drive, school folder, or email it to yourself).
  - You'll open this **exact file** again next session to give it a CSS glow-up!

---

## 🏆 Activity 3: Fast-Finisher Boss Quests! (For Speed Coders)

Finished Activity 2 already? Level up your skills with these Boss Quests!

### ⚡ Quest A: Highlight Magic (`<mark>`)
Add a yellow highlight to your best score, fastest time, or a fun fact about your game using `<mark>My Best Time: 12 seconds!</mark>`.

### 🎮 Quest B: Embed Your Actual Game (`<iframe>`)
If your project is published on Scratch, embed the real playable game using an `<iframe>` tag pointed at your project's embed link (e.g. `https://scratch.mit.edu/projects/xxxxxxx/embed`)! No internet? Try embedding a YouTube video of yourself playing it instead.

### 📊 Quest C: HTML Table Masters (`<table>`)
Create a mini "Level Guide" table listing the levels or challenges in your maze game using HTML tables:
```html
<table border="1">
    <tr>
        <th>Level</th>
        <th>Challenge</th>
    </tr>
    <tr>
        <td>Level 1</td>
        <td>Escape the jungle vines</td>
    </tr>
    <tr>
        <td>Level 2</td>
        <td>Dodge the leopard</td>
    </tr>
</table>
```
