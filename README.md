# 💌 Do You Love Me?

A beautiful, interactive digital love confession website with smooth animations, confetti effects, and a delightful user experience.

## ✨ Features

- **Animated Floating Hearts**: Dynamic background with parallax effect that responds to mouse movement
- **Interactive Confession Flow**: Multi-screen experience with smooth transitions
- **Playful No Button**: The "No" button cleverly escapes your cursor and shrinks with each click
- **Expanding Yes Button**: The "Yes" button grows as you click "No", eventually making it the only viable option
- **Confetti Celebration**: Multiple confetti bursts celebrate when you click "Yes"
- **Sparkle Effects**: Magical sparkle animations appear on interactions
- **Background Music**: Ambient music plays automatically (with user control)
- **Glassmorphism Design**: Modern frosted glass UI elements with backdrop blur effects
- **Responsive Design**: Fully responsive and works on all devices (desktop, tablet, mobile)
- **Social Footer**: Quick links to social profiles that appear on scroll
- **Random Messages**: Different welcome and result messages appear on each visit

## 🎨 Design Highlights

- **Color Palette**: Lavender, pink, and sky blue gradient background
- **Typography**: Elegant Playfair Display for headings, DM Sans for body text
- **Animations**: Smooth transitions and keyframe animations throughout
- **Backdrop Filter**: CSS blur effects for modern glassmorphic components
- **Emoji Integration**: Cute heart and sparkle emojis enhance the romantic feel

## 📁 File Structure

```
yes-zone/
├── index.html       # Main HTML structure
├── styles.css       # All CSS styles and animations
├── script.js        # JavaScript interactivity
├── Music.mp3        # Background music file
└── README.md        # About this project and instructions
```

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection (for external CDN resources)

### Installation

1. **Clone or Download** the repository to your local machine
2. **Open in Browser**: Simply double-click `index.html` or open it in your web browser
3. **Enjoy**: The page should load with all animations and interactivity ready!

## 🎯 How It Works

### Screen 1: Introduction

- Displays a welcome message with animated heart decorations
- Random message is selected from a pool of romantic quotes
- User clicks "Let's see ✨" to proceed

### Screen 2: The Question

- Shows the main question: "Do you love me? ✨"
- **Yes Button**: Large, prominent pink button
- **No Button**: Small gray button that:
  - Flees when you try to click it
  - Shrinks with each click attempt
  - Disappears after 4 clicks
  - Triggers the Yes button to grow larger
  - Creates sparkle effects around the cursor

### Result Screen

- Shows celebration modal with random result messages
- Triggers multiple confetti explosions
- Displays different emojis and messages
- Can be closed and viewed again

## 🎵 Audio

- **Background Music**: `Music.mp3` (local file) or fallback to CDN
- **Music Controls**: Click the music button (top-right) to play/pause
- **Auto-play**: Attempts to auto-play on page load (respects browser autoplay policies)
- **Fallback Audio**: If local file is unavailable, uses a CDN fallback

## 🛠️ Customization

### Change Messages

Edit the `introMsgs` array in `script.js` to customize welcome messages:

```javascript
const introMsgs = ["Your custom message here", "Add more messages for variety"];
```

### Change Result Messages

Edit the `resultMsgs` array in `script.js` to customize celebration messages:

```javascript
const resultMsgs = [
  { e: "🥹", t: "Custom celebration message!" },
  { e: "💕", t: "Another message here!" },
];
```

### Modify Colors

Edit CSS variables in `styles.css` to change the color scheme:

```css
:root {
  --lavender: #cdb4db;
  --pink: #ffc8dd;
  --deep-pink: #ffafcc;
  --light-blue: #bde0fe;
  --sky-blue: #a2d2ff;
}
```

### Change Heart Characters

Edit the `heartChars` array in `script.js` to use different emojis:

```javascript
const heartChars = ["💜", "🩷", "💙", "🤍", "✨", "💕", "🌸", "💫"];
```

### Update Social Links

Edit the footer links in `index.html` to point to your profiles

## 📦 Dependencies

### External Libraries (CDN)

- **Tailwind CSS**: Utility-first CSS framework
- **Canvas Confetti**: Confetti animation library
- **Font Awesome**: Icon library
- **Google Fonts**: Playfair Display & DM Sans fonts

### No Build Process Needed

This is a vanilla HTML/CSS/JS project with no build tools or dependencies to install!

## 🎬 Browser Compatibility

- ✅ Chrome/Chromium (90+)
- ✅ Firefox (88+)
- ✅ Safari (14+)
- ✅ Edge (90+)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🔊 Features Explained

### Parallax Hearts

The floating hearts respond to your mouse movement, creating a depth effect. Each heart has a different depth layer that determines how much it moves.

### Fleeing No Button

The No button uses distance calculation to detect when the cursor gets too close and randomly repositions itself to a safe location away from the Yes button.

### Growing Yes Button

Each No button click triggers:

1. Yes button grows (scale increases by 35%)
2. Font size increases
3. Border radius increases
4. No button shrinks
5. Sparkle effects appear

### Confetti Celebration

Three waves of confetti are triggered at different times:

1. Initial burst: 160 particles spreading outward
2. Left side burst: 80 particles at 60° angle
3. Right side burst: 80 particles at 120° angle

## 💡 Tips & Tricks

- **Click the music button** to control background audio
- **Try clicking the No button multiple times** to see it shrink and disappear
- **Move your mouse around** to see the parallax effect on floating hearts
- **Scroll to the bottom** to see the social media footer
- **Refresh the page** to see different random messages
- **Click "Aww 🥰"** on the result to close the modal

## 📝 SEO & Meta Tags

This page includes:

- Open Graph tags for social media sharing
- Twitter Card meta tags
- Proper description and keywords
- Responsive viewport settings

## 🤝 Contributing

Feel free to fork this project and create your own custom version! Some ideas:

- Add different themes (dark mode, etc.)
- Create variations for different occasions
- Add more customization options
- Translate messages to different languages

## 📄 License

This project is open source and available for personal use. Feel free to customize and share!

## 💝 Made with Love

Created as a digital love confession experience. Perfect for:

- Special occasions
- Proposing
- Expressing feelings
- Fun interactive websites
- Learning web development

---
