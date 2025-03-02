document.addEventListener("DOMContentLoaded", function () {
  //  Button Click Animation & Transition
  const btn = document.getElementById("btnDSN");
  btn.addEventListener("click", function () {
    btn.style.transform = "scale(0.9)";
    btn.style.opacity = "0.8";

    setTimeout(() => {
      btn.style.transform = "scale(1)";
      btn.style.opacity = "1";
      // Change to next page (Replace 'scrapbook.html' with your actual page)
      window.location.href = "scrapbook.html";
    }, 300);
  });

  // Typing Animation for the Intro Text
  const textElement = document.querySelector(".pDSN");
  const text = textElement.textContent;

  textElement.textContent = ""; // Clear original text
  let i = 0;

  function typeText() {
    if (i < text.length) {
      textElement.textContent += text[i];
      i++;
      setTimeout(typeText, 50); // Adjust speed here (lower is faster)
    }
  }

  typeText(); // Start the typing animation

  // 4️Improve Falling Leaves Animation (Add Random Rotation & Speed)
  const leaves = document.querySelectorAll(".leaf");

  leaves.forEach((leaf) => {
    const randomDelay = Math.random() * 5; // Random delay (0s - 5s)
    const randomDuration = 8 + Math.random() * 10; // Random duration (8s - 18s)
    const randomRotation = Math.random() * 360; // Random starting rotation

    leaf.style.animation = `fall ${randomDuration}s infinite linear ${randomDelay}s`;
    leaf.style.transform = `rotate(${randomRotation}deg)`;
  });

  // 5️⃣ Floating Sparkles Effect
  function createSparkle() {
    const sparkle = document.createElement("div");
    sparkle.classList.add("sparkle");
    document.body.appendChild(sparkle);

    sparkle.style.left = Math.random() * 100 + "vw";
    sparkle.style.top = Math.random() * 100 + "vh";
    sparkle.style.animationDuration = Math.random() * 3 + 2 + "s";

    setTimeout(() => {
      sparkle.remove();
    }, 5000);
  }

  setInterval(createSparkle, 800);
});
