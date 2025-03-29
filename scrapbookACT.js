document.addEventListener("DOMContentLoaded", function () {
  const burnCover = document.getElementById("burnCover");
  const scrollPaper = document.querySelector(".scroll-paper");
  const videoContainer = document.querySelector(".scrapbookVideo"); // Assuming this is the container for your videos
  const initialVideos = document.querySelectorAll(".scrapbookVideo video"); // Get all initial videos

  burnCover.addEventListener("click", function () {
    burnCover.classList.add("burning");

    // Show the scrapbook after burn effect finishes
    setTimeout(() => {
      scrollPaper.style.opacity = "1";
    }, 1300);
    //!RESETS THE OPACITY AFTER FINALIZING FOR THE BURN EFFECT
  });

  function handleResize() {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    // Log current dimensions for debugging
    console.log(
      `Viewport Width: ${viewportWidth}, Viewport Height: ${viewportHeight}`
    );

    // Check for 392x782 mode (portrait mode)
    if (
      viewportWidth <= 392 + 10 &&
      viewportWidth >= 392 - 10 &&
      viewportHeight <= 782 + 10 &&
      viewportHeight >= 782 - 10
    ) {
      console.log("Viewport is 392x782 - removing all videos");

      // Remove all videos when in 392x782 mode (portrait)
      videoContainer.innerHTML = ""; // Remove all videos from the container
    } else if (
      viewportWidth <= 782 + 10 &&
      viewportWidth >= 782 - 10 &&
      viewportHeight <= 392 + 10 &&
      viewportHeight >= 392 - 10
    ) {
      console.log("Viewport is approximately 782x392 - adding videos");

      // Check if there are videos loaded before measuring
      if (initialVideos.length === 0) {
        console.log("No videos found. Make sure videos are loaded.");
        return;
      }

      const videoHeight = initialVideos[0] ? initialVideos[0].offsetHeight : 0; // Get height of a single video
      console.log(`Video Height: ${videoHeight}px`); // Log video height

      if (videoHeight === 0) {
        console.log(
          "Error: Video height is 0px. Check if videos are loaded correctly."
        );
        return; // Exit if the video height is 0
      }

      const totalHeight = document.documentElement.scrollHeight; // Get total height of the content (including scrollable area)
      console.log(`Total Content Height: ${totalHeight}px`);

      // Calculate how many videos fit in the scrollable content
      const videosToShow = Math.ceil(totalHeight / videoHeight); // Number of videos needed
      console.log(
        `Videos to show based on scrollable content: ${videosToShow}`
      );

      // Clear existing videos from the container (to avoid leftover videos from previous resize)
      videoContainer.innerHTML = "";

      // Add videos until we fill the scrollable content
      for (let i = 0; i < videosToShow; i++) {
        const videoClone =
          initialVideos[i % initialVideos.length].cloneNode(true); // Clone and loop through initial videos
        videoContainer.appendChild(videoClone);
        console.log(`Adding video ${i + 1}`);
      }
    } else {
      console.log("Viewport is not 392x782 or 782x392 - no action taken");
    }
  }

  // Initial check
  handleResize();

  // Check on window resize
  window.addEventListener("resize", handleResize);
});
