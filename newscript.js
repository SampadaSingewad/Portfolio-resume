const topBtn = document.getElementById("topBtn");
    window.onscroll = function() {
      if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        topBtn.style.display = "block";
      } else {
        topBtn.style.display = "none";
      }
    };

    topBtn.onclick = function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };





function showTab(tabId) {
      // Remove active class from all tabs
      document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
      // Add active class to clicked tab
      event.target.classList.add('active');

      // Hide all content
      document.querySelectorAll('.content').forEach(c => c.classList.remove('active'));
      // Show selected content
      document.getElementById(tabId).classList.add('active');


    }











    const text = "Sampada Singewad";
const typedText = document.querySelector(".typed-text");
let i = 0;

function typeLetter() {
  if (i < text.length) {
    typedText.textContent += text.charAt(i);
    i++;
    setTimeout(typeLetter, 150); // Typing speed
  }
}
window.onload = typeLetter;



const lines = [
  "I am <span class='highlight'>Sampada</span>",
  "Frontend Developer"
];

let lineIndex = 0;
let charIndex = 0;

function typeLines() {
  if (lineIndex < lines.length) {
    const currentLine = lines[lineIndex];
    const typingSpan = document.getElementById("typing");

    if (charIndex === 0) {
      const lineDiv = document.createElement("div");
      lineDiv.id = `line${lineIndex}`;
      typingSpan.appendChild(lineDiv);
    }

    const lineElement = document.getElementById(`line${lineIndex}`);
    const visibleText = currentLine.slice(0, charIndex + 1);
    lineElement.innerHTML = visibleText;
    charIndex++;

    if (charIndex < currentLine.length) {
      setTimeout(typeLines, 80);
    } else {
      lineIndex++;
      charIndex = 0;
      setTimeout(typeLines, 300);
    }
  }
}

typeLines();



