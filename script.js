// Matrix Background Animation
const canvas = document.getElementById("matrixBackground");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();

const letters = "01";
const fontSize = 18;
let columns = canvas.width / fontSize;
let drops = [];

function initializeMatrix() {
  columns = Math.floor(canvas.width / fontSize);
  drops = [];
  for (let x = 0; x < columns; x++) drops[x] = 1;
}
initializeMatrix();

function draw() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.08)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#0f0";
  ctx.font = fontSize + "px 'Share Tech Mono', monospace";
  for (let i = 0; i < drops.length; i++) {
    const text = letters.charAt(Math.floor(Math.random() * letters.length));
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.970) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}
setInterval(draw, 40);

window.addEventListener('resize', () => {
  resizeCanvas();
  initializeMatrix();
});

// Welcome Overlay Transition
document.getElementById("enterBtn").onclick = function () {
  document.getElementById("welcomeOverlay").classList.add("fadeOut");
  setTimeout(() => {
    document.getElementById("welcomeOverlay").style.display = "none";
    document.getElementById("mainContent").style.display = "block";
  }, 700);
};

// Tab Navigation with Fade In
const tabButtons = document.querySelectorAll(".tabBtn");
const tabContents = document.querySelectorAll(".tabContent");

tabButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    tabContents.forEach(section => {
      section.style.display = "none";
      section.style.opacity = 0;
    });
    const target = btn.getAttribute("data-target");
    const activeSection = document.getElementById(target);
    activeSection.style.display = "block";
    activeSection.style.animation = "fadeInUp 0.6s";
    setTimeout(() => { activeSection.style.opacity = 1; }, 140);
  });
});
