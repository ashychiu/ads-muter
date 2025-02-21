function checkForAds() {
    const video = document.querySelector("video");
    const isVideoPaused = video && video.paused;
    const isAdPlaying = document.querySelector(".ad-showing, .ytp-ad-player-overlay, .ytp-ad-text");
  
    if (!isVideoPaused) {
      if (isAdPlaying) {
        video.muted = true; // Mute during ads
        console.log("Ad detected: Muting...");
      } else {
        video.muted = false; // Unmute when ad is over
        console.log("No ad detected: Unmuting...");
      }
    }
  }
  
  // Run every second to check for ads
  setInterval(checkForAds, 1000);
  