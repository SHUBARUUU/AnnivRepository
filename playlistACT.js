document.addEventListener("DOMContentLoaded", () => {
  const message = document.querySelector(".heartfelt-message");
  const footerMessage = document.querySelector("p");
  const audio = document.querySelector("audio");

  console.log("Attempting to play audio...");

  // Add an event listener to start audio after user interaction
  const playAudio = () => {
    audio
      .play()
      .then(() => {
        console.log("Audio is playing...");
      })
      .catch((error) => {
        console.log("Error playing audio:", error);
      });
  };

  // Trigger audio play after user clicks anywhere on the document
  document.addEventListener("click", playAudio, { once: true });

  // Fade-in effect for heartfelt message after 1 second
  if (message) {
    setTimeout(() => {
      message.style.opacity = 1;
      console.log("Heartfelt message faded in.");
    }, 1000);
  }

  // Fade-in effect for footer message after 4 seconds
  if (footerMessage) {
    setTimeout(() => {
      footerMessage.style.opacity = 1;
      console.log("Footer message faded in.");
    }, 4000);
  }
});
