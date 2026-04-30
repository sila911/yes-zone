// ── FLOATING HEARTS ──
const heartsBg = document.getElementById("hearts-bg");
const heartChars = ["💜", "🩷", "💙", "🤍", "✨", "💕", "🌸", "💫"];
let mouseX = window.innerWidth / 2,
  mouseY = window.innerHeight / 2;

for (let i = 0; i < 22; i++) {
  const h = document.createElement("div");
  h.className = "heart-float";
  h.textContent = heartChars[Math.floor(Math.random() * heartChars.length)];
  h.style.left = Math.random() * 100 + "vw";
  h.style.fontSize = 0.9 + Math.random() * 2 + "rem";
  h.style.animationDuration = 12 + Math.random() * 20 + "s";
  h.style.animationDelay = -Math.random() * 25 + "s";
  h.dataset.depth = (0.3 + Math.random() * 0.7).toFixed(2);
  heartsBg.appendChild(h);
}

// Parallax on hearts
document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  heartsBg.querySelectorAll(".heart-float").forEach((h) => {
    const d = parseFloat(h.dataset.depth);
    const ox = (mouseX - window.innerWidth / 2) * d * 0.015;
    const oy = (mouseY - window.innerHeight / 2) * d * 0.01;
    h.style.transform = `translateX(${ox}px) translateY(${oy}px)`;
  });
  checkFooter(e.clientY);
  if (noVisible) checkNoBtn(e.clientX, e.clientY);
});

// ── MUSIC ──
const audio = document.getElementById("bg-music");
const musicBtn = document.getElementById("music-btn");
let playing = false;

function startMusic() {
  if (!playing) {
    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          playing = true;
          musicBtn.classList.add("playing");
        })
        .catch(() => {});
    }
  }
}

musicBtn.addEventListener("click", () => {
  if (!playing) {
    startMusic();
  } else {
    audio.pause();
    playing = false;
    musicBtn.classList.remove("playing");
  }
});

// Attempt to play by default
startMusic();
// Also play on first user interaction in case autoplay is blocked
document.body.addEventListener("click", startMusic, { once: true });

// ── INTRO MESSAGES ──
const introMsgs = [
  "Welcome to my feelings. You're the special person for this; I only sent it to you.",
  "They say the best things in life are found by chance. I'm glad I found you.",
  "Before we go any further, I need you to know: you're the single most special person in my universe.",
  "This link is a digital love letter, crafted specifically for your eyes only.",
  "I have a single question I've been wanting to ask...",
];
document.getElementById("intro-msg").textContent =
  introMsgs[Math.floor(Math.random() * introMsgs.length)];

// ── SCREEN TRANSITION ──
const introScreen = document.getElementById("intro-screen");
const questionScreen = document.getElementById("question-screen");
const noBtn = document.getElementById("no-btn");
let noVisible = false;

document.getElementById("lets-see-btn").addEventListener("click", () => {
  introScreen.classList.add("hidden");
  setTimeout(() => {
    questionScreen.classList.remove("hidden");
    placeNoBtn();
    noBtn.style.display = "flex";
    noVisible = true;
  }, 700);
});

// ── NO BUTTON LOGIC ──
let noClicks = 0;
let noScale = 1;
let noW = 110,
  noH = 60;
const yesBtnEl = document.getElementById("yes-btn");

function placeNoBtn() {
  const margin = 80;
  const bw = noW * noScale;
  const bh = noH * noScale;
  let x,
    y,
    tries = 0;
  do {
    x = margin + Math.random() * (window.innerWidth - bw - margin * 2);
    y = margin + Math.random() * (window.innerHeight - bh - margin * 2);
    tries++;
  } while (tries < 30 && isOverYes(x, y, bw, bh));
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
}

function isOverYes(x, y, bw, bh) {
  const yr = yesBtnEl.getBoundingClientRect();
  return !(
    x + bw < yr.left ||
    x > yr.right ||
    y + bh < yr.top ||
    y > yr.bottom
  );
}

function checkNoBtn(cx, cy) {
  const nb = noBtn.getBoundingClientRect();
  const FLEE = 60;
  const dx = cx - (nb.left + nb.width / 2);
  const dy = cy - (nb.top + nb.height / 2);
  const dist = Math.sqrt(dx * dx + dy * dy);
  if (dist < FLEE + nb.width / 2) {
    placeNoBtn();
  }
}

noBtn.addEventListener("click", () => {
  noClicks++;
  if (noClicks >= 4) {
    noBtn.style.transform = "scale(0)";
    noBtn.style.pointerEvents = "none";
    setTimeout(() => {
      noBtn.style.display = "none";
      noVisible = false;
    }, 300);
    return;
  }
  noScale = Math.max(0.2, noScale - 0.25);
  noBtn.style.transform = `scale(${noScale})`;
  const growFactor = 1 + noClicks * 0.35;
  const w = Math.min(Math.max(160 * growFactor, 160), window.innerWidth * 0.75);
  const h = Math.min(Math.max(80 * growFactor, 80), window.innerHeight * 0.5);
  yesBtnEl.style.width = w + "px";
  yesBtnEl.style.height = h + "px";
  yesBtnEl.style.fontSize = Math.min(1.3 * growFactor, 4.5) + "rem";
  yesBtnEl.style.borderRadius = Math.min(24 * growFactor, 40) + "px";
  sparkleAt(event.clientX, event.clientY);
  placeNoBtn();
});

// ── YES BUTTON ──
const resultMsgs = [
  {
    e: "🥹",
    t: "I knew it! My heart just did a backflip. You just made me the happiest person on earth!",
  },
  { e: "🥰", t: "You just locked yourself in! I'm never letting go." },
  {
    e: "💞",
    t: "Infinite loops of love for you! Let's start our happily ever after.",
  },
  {
    e: "✨",
    t: "You're the only one I want to share my delightful experiences with. Forever.",
  },
  {
    e: "💜",
    t: "Checkmate. I win (and so do you)! I love you more than words can say.",
  },
];
let resultIdx = 0;

yesBtnEl.addEventListener("click", () => {
  noBtn.style.display = "none";
  noVisible = false;
  // Confetti
  confetti({
    particleCount: 160,
    spread: 100,
    origin: { y: 0.55 },
    colors: ["#CDB4DB", "#FFC8DD", "#FFAFCC", "#BDE0FE", "#A2D2FF", "#ffffff"],
  });
  setTimeout(
    () =>
      confetti({
        particleCount: 80,
        spread: 140,
        angle: 60,
        origin: { x: 0, y: 0.6 },
        colors: ["#CDB4DB", "#FFAFCC", "#FFC8DD"],
      }),
    300,
  );
  setTimeout(
    () =>
      confetti({
        particleCount: 80,
        spread: 140,
        angle: 120,
        origin: { x: 1, y: 0.6 },
        colors: ["#BDE0FE", "#A2D2FF", "#FFC8DD"],
      }),
    500,
  );
  const r = resultMsgs[resultIdx % resultMsgs.length];
  resultIdx++;
  document.getElementById("result-emoji").textContent = r.e;
  document.getElementById("result-text").textContent = r.t;
  const modal = document.getElementById("result-modal");
  modal.classList.add("visible");
});

document.getElementById("close-modal-btn").addEventListener("click", () => {
  document.getElementById("result-modal").classList.remove("visible");
});

// ── SPARKLE FX ──
function sparkleAt(x, y) {
  const s = ["✨", "💕", "🌸", "💫", "🩷"];
  for (let i = 0; i < 4; i++) {
    const el = document.createElement("div");
    el.className = "sparkle";
    el.textContent = s[Math.floor(Math.random() * s.length)];
    el.style.left = x - 20 + Math.random() * 40 + "px";
    el.style.top = y - 20 + Math.random() * 40 + "px";
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 900);
  }
}

// ── FOOTER ──
const footer = document.getElementById("footer");
function checkFooter(y) {
  if (y > window.innerHeight * 0.88) {
    footer.classList.add("visible");
  } else {
    footer.classList.remove("visible");
  }
}

window.addEventListener("scroll", () => {
  if (window.scrollY + window.innerHeight > document.body.scrollHeight - 60) {
    footer.classList.add("visible");
  }
});
