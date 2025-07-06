// 💖 HEART FOLLOWING MOUSE WITH SPACING AND SMOOTHNESS
let lastHeartTime = 0;

document.addEventListener('mousemove', function (e) {
  const now = Date.now();
  if (now - lastHeartTime > 100) {
    lastHeartTime = now;

    const heart = document.createElement('div');
    heart.className = 'heart';

    heart.style.left = e.pageX + 'px';
    heart.style.top = e.pageY + 'px';

    const size = Math.random() * 10 + 15; // 15–25px
    heart.style.fontSize = size + 'px';

    // Emojis for friendship and love
    const heartEmojis = ["💖", "🦋", "🤗"];
    heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 2000);
  }
});

// 🦋 FLOATING BACKGROUND EMOJI ANIMATION
const friendshipEmojis = ["💖", "🦋", "🤗", "💕", "🌟", "🎉"];

function spawnEmojiLove() {
  const bg = document.getElementById("loveBackground");
  const emoji = document.createElement("span");
  emoji.className = "love-emoji";
  emoji.textContent = friendshipEmojis[Math.floor(Math.random() * friendshipEmojis.length)];

  emoji.style.left = Math.random() * window.innerWidth + "px";
  emoji.style.fontSize = (Math.random() * 10 + 25) + "px"; // 25–35px
  emoji.style.animationDuration = (6 + Math.random() * 4) + "s";

  bg.appendChild(emoji);

  setTimeout(() => emoji.remove(), 12000);
}

setInterval(spawnEmojiLove, 800);



const imageList = [];

// Push 01.jpg to 42.jpg into imageList
for (let i = 1; i <= 44; i++) {
  const fileNumber = i.toString().padStart(2, '0'); // ensures 01, 02, ..., 42
  imageList.push(`gayu/${fileNumber}.jpg`);
}

const slideImage = document.getElementById('slideImage');
const galleryGrid = document.getElementById('galleryGrid');
const imageGallery = document.getElementById('imageGallery');
const sliderWrapper = document.querySelector('.slider-wrapper');

let currentIndex = 0;

function showNextImage() {
  if (currentIndex < imageList.length) {
    slideImage.classList.remove('active');
    setTimeout(() => {
      slideImage.src = imageList[currentIndex];
      slideImage.classList.add('active');
      currentIndex++;
      setTimeout(showNextImage, 2000);
    }, 300);
  } else {
    // Done with slideshow
    sliderWrapper.style.display = 'none';
    galleryGrid.innerHTML = ""; // Clear in case already filled

    imageList.forEach(src => {
      const img = document.createElement('img');
      img.src = src;
      img.className = 'gallery-img';
      galleryGrid.appendChild(img);
    });
  }
}

document.getElementById('show_images').addEventListener('click', function () {
  imageGallery.style.display = 'block';
  currentIndex = 0;
  slideImage.classList.remove('active');
  showNextImage();
  this.style.display = 'none'; // Hide button after clicked
});
