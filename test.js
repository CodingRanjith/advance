// ❤️ HEART FOLLOW MOUSE (with spacing)
let lastHeartTime = 0;
document.addEventListener('mousemove', function (e) {
  const now = Date.now();
  if (now - lastHeartTime > 80) {
    lastHeartTime = now;
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = e.pageX + 'px';
    heart.style.top = e.pageY + 'px';
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 2000);
  }
});

// 💞 LOVE BACKGROUND ANIMATION with EMOJIS
const loveEmojis = ["❤️", "🦋", "🌹", "💘", "💕", "💞"];

function spawnEmojiLove() {
  const bg = document.getElementById("loveBackground");
  const span = document.createElement("span");
  span.classList.add("love-emoji");
  span.textContent = loveEmojis[Math.floor(Math.random() * loveEmojis.length)];
  span.style.left = Math.random() * window.innerWidth + "px";
  span.style.animationDuration = (6 + Math.random() * 6) + "s";
  bg.appendChild(span);
  setTimeout(() => span.remove(), 12000);
}

setInterval(spawnEmojiLove, 1200);
