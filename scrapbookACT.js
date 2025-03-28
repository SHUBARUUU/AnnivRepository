document.addEventListener("DOMContentLoaded", function () {
  const burnCover = document.getElementById("burnCover");
  const scrollPaper = document.querySelector(".scroll-paper");
  const videos = document.querySelector(".scrapbookVideo video");

  burnCover.addEventListener("click", function () {
    burnCover.classList.add("burning");

    // Show the scrapbook after burn effect finishes
    setTimeout(() => {
      scrollPaper.style.opacity = "1";
    }, 1300);
    //!RESETS THE OPACITY AFTER FINALIZING FOR THE BURN EFFECT
  });
});
