const overlay = document.getElementById("overlay");
const openLetter = document.getElementById("openLetter");
const closeLetter = document.getElementById("closeLetter");
const surpriseBtn = document.getElementById("surpriseBtn");
const hearts = document.getElementById("hearts");
const likeButton = document.getElementById("likeButton");

// Open letter
openLetter.addEventListener("click", () => {
    overlay.classList.add("active");
});

// Close letter
closeLetter.addEventListener("click", () => {
    overlay.classList.remove("active");
});

// Close when clicking outside the letter
overlay.addEventListener("click", (event) => {
    if (event.target === overlay) {
        overlay.classList.remove("active");
    }
});

// Floating hearts animation
function createHeart() {
    const heart = document.createElement("span");

    heart.className = "floating-heart";
    heart.innerHTML = Math.random() > 0.5 ? "♥" : "♡";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (12 + Math.random() * 20) + "px";
    heart.style.animationDuration = (4 + Math.random() * 5) + "s";

    hearts.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 9000);
}

setInterval(createHeart, 500);

// Like button
likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("liked");
});

// Surprise button
surpriseBtn.addEventListener("click", () => {
    for (let i = 0; i < 25; i++) {
        setTimeout(createHeart, i * 80);
    }

    overlay.classList.add("active");
});

// Escape key closes letter
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        overlay.classList.remove("active");
    }
});