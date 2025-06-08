const notes = [
  "Like tree, our love has grown stronger with each passing season. From our very first hello to this beautiful moment today, you are my everything. I love you endlessly.",
  "With you, life feels lighter, brighter, and full of joy. You lift my spirit in ways words can’t express. Just like this balloon, my heart soars whenever I am with you.",
  "They say home is where the heart is. For me, home is wherever you are. With you by my side, every place becomes a paradise. Happy anniversary, my love!",
  "No matter where life takes us, the stars will always shine for us. With you, my future feels limitless and bright. Here's to many more beautiful chapters together.",
  "Every moment spent with you is a treasure I hold dear. Thank you for filling my life with love, kindness, and countless memories. You are my greatest blessing.",
  "This is just a small reminder that I will always love you — through every joy and every challenge. Today, tomorrow, and forever — I choose you.",
  "Your love is like music to my soul, creating harmony in every moment we share. Thank you for being my sweetest melody.",
  "Every photo we take together captures the magic between us. You are my favorite picture in the album of life.",
  "Like chocolate, your love is sweet and irresistible. Every moment with you is a delightful treat I cherish.",
  "You color my life like a rainbow after the rain — full of hope, beauty, and endless possibilities. Together, we shine.",
  "With you, my dreams feel reachable and real. Thank you for being the spark that makes every dream worth chasing.",
  "Every time we hold hands, I feel an unspoken promise of forever. Your touch is my safe place and my greatest comfort.",
  "When we stare into each other's eyes, words fade away. All I see is love, warmth, and a future I can’t wait to share with you."
];

const photos = [
  "assets/7.jpg",
  "assets/2.jpg",
  "assets/3.jpg",
  "assets/4.jpg",
  "assets/9.jpg",
  "assets/6.jpg",
  "assets/1.jpg",
  "assets/8.jpg",
  "assets/5.jpg",
  "assets/10.jpg",
  "assets/11.jpg",
  "assets/12.jpg",
  "assets/13.jpg"
];
function showNote(index) {
  document.getElementById('note-text').innerText = notes[index];
  document.getElementById('note-photo').src = photos[index];
  document.getElementById('modal').style.display = 'flex';
}

function hideNote() {
  document.getElementById('modal').style.display = 'none';
}
// // Function for Yes button
// function goToNotes() {
//   window.location.href = 'index.html';
// }

// // For No button fun animation
// const noButton = document.getElementById('noButton');

// noButton.addEventListener('mouseover', () => {
//   const i = Math.floor(Math.random() * window.innerWidth);
//   const j = Math.floor(Math.random() * window.innerHeight);
//   noButton.style.position = 'absolute';
//   noButton.style.left = i + 'px';
//   noButton.style.top = j + 'px';
// });
function startSurprise() {
  // Remove overlay
  document.getElementById('overlay').style.display = 'none';

  // Remove blur
  document.getElementById('content').classList.remove('blurred');

  // Play music
  const music = document.getElementById('bgMusic');
  music.play().catch(e => console.log(e));
}

function goToNotes() {
  localStorage.setItem('playMusic', 'yes');
  window.location.href = 'index.html';
}

// No button fun
const noButton = document.getElementById('noButton');

noButton.addEventListener('mouseover', () => {
  const i = Math.floor(Math.random() * window.innerWidth);
  const j = Math.floor(Math.random() * window.innerHeight);
  noButton.style.position = 'absolute';
  noButton.style.left = i + 'px';
  noButton.style.top = j + 'px';
});

