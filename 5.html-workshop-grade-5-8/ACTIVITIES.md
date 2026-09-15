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

    <h1 Welcome to Sri Lanka Wildlife</h1>
    
    <p>Sri Lanka is home to majestic elephants and leopards.</p
    
    <img scr="elephant.jpg" alt="Sri Lankan Elephant">
    
    <p>I love watching <b>cricket matches on TV!</p>
    
    <p>Visit <a href=https://www.srilanka.travel>Sri Lanka Tourism</a> to learn more.</p>

</body>
</html>
```

---

### 🔍 Bug Hunt Answer Key (For Instructors):

1. **Bug 1 (Line 9):** Missing opening bracket closing `>` on heading: `<h1` should be `<h1>`.
2. **Bug 2 (Line 11):** Missing closing bracket on paragraph: `</p` should be `</p>`.
3. **Bug 3 (Line 13):** Typo in image source attribute: `scr=` should be `src=`.
4. **Bug 4 (Line 15):** Missing closing bold tag `</b>`: `<b>cricket matches on TV!</p>` should be `<b>cricket matches</b> on TV!</p>`.
5. **Bug 5 (Line 17):** Missing quotation marks around link URL: `href=https://...` should be `href="https://..."`.

---

## 🚀 Activity 2: Main Project — "My Sri Lankan Explorer Webpage"

Your mission: Build a personalized webpage about yourself, your hobbies, and your favorite things in Sri Lanka!

### 📋 Checklist & Requirements:

- [ ] **Level 1: The Skeleton Structure**
  - Includes `<!DOCTYPE html>`, `<html>`, `<head>`, `<title>`, and `<body>`.
  - Your browser tab shows your name (e.g., `<title>Kasun's Explorer Page</title>`).

- [ ] **Level 2: Headings & Introduction**
  - Main Title using `<h1>` (e.g., `<h1>Ayubowan! I am Nethmi</h1>`).
  - Subtitle using `<h2>` (e.g., `<h2>Welcome to My Digital Corner!</h2>`).
  - Introduction paragraph (`<p>`) with at least one **bold** (`<b>`) word and one *italic* (`<i>`) word.

- [ ] **Level 3: My Favorite Things (Lists)**
  - An **Unordered List** (`<ul>`) listing 3 favorite Sri Lankan foods (e.g., Kottu, Hoppers, Woodapple juice).
  - An **Ordered List** (`<ol>`) listing your top 3 hobbies or favorite sports.

- [ ] **Level 4: Media & Links**
  - At least one image (`<img>`) with an `alt` description and `width="300"`.
  - At least one link (`<a>`) to a cool website (e.g., Code Club Sri Lanka or NASA Kids).

- [ ] **Level 5: Visual Dividers**
  - Add horizontal lines (`<hr>`) between sections to keep your webpage neat!

---

## 🏆 Activity 3: Fast-Finisher Boss Quests! (For Speed Coders)

Finished Activity 2 already? Level up your skills with these Boss Quests!

### ⚡ Quest A: Highlight Magic (`<mark>`)
Add a yellow highlight to your favorite quote or key sentence using `<mark>My Favorite Quote</mark>`.

### 🎵 Quest B: Audio & Video Embed (`<audio>` or `<iframe>`)
Try embedding a YouTube video of Sri Lanka's beautiful waterfalls or wildlife using an `<iframe>` tag!

### 📊 Quest C: HTML Table Masters (`<table>`)
Create a mini weekly timetable of your favorite school subjects using HTML tables:
```html
<table border="1">
    <tr>
        <th>Day</th>
        <th>Favorite Activity</th>
    </tr>
    <tr>
        <td>Monday</td>
        <td>Code Club & Robotics</td>
    </tr>
    <tr>
        <td>Friday</td>
        <td>Cricket Practice</td>
    </tr>
</table>
```
