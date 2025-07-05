// ❤️ HEART FOLLOWING MOUSE WITH SPACING AND SMOOTHNESS
let lastHeartTime = 0;

document.addEventListener('mousemove', function (e) {
  const now = Date.now();
  if (now - lastHeartTime > 100) { // space out hearts a bit more
    lastHeartTime = now;

    const heart = document.createElement('div');
    heart.className = 'heart';

    heart.style.left = e.pageX + 'px';
    heart.style.top = e.pageY + 'px';

    // Optional random size
    const size = Math.random() * 10 + 10; // 10px–20px
    heart.style.fontSize = size + 'px';

    document.body.appendChild(heart);

    // Fade and remove
    setTimeout(() => heart.remove(), 2000);
  }
});

// 💞 LOVE BACKGROUND ANIMATION USING EMOJIS
const loveEmojis = ["❤️", "🦋", "🌹", "💘", "💕", "💞"];

function spawnEmojiLove() {
  const bg = document.getElementById("loveBackground");

  const emoji = document.createElement("span");
  emoji.className = "love-emoji";
  emoji.textContent = loveEmojis[Math.floor(Math.random() * loveEmojis.length)];

  // Random horizontal position
  emoji.style.left = Math.random() * window.innerWidth + "px";

  // Optional random size
  emoji.style.fontSize = (Math.random() * 10 + 20) + "px"; // 20–30px

  // Random animation speed
  emoji.style.animationDuration = (6 + Math.random() * 4) + "s"; // 6–10s

  bg.appendChild(emoji);

  // Clean up after animation
  setTimeout(() => emoji.remove(), 12000);
}

setInterval(spawnEmojiLove, 800); // Faster flow
