function checkForAds() {
  const video = document.querySelector("video");
  const isVideoPaused = video && video.paused;
  const isAdPlaying = document.querySelector(
    ".ad-showing, .ytp-ad-player-overlay, .ytp-ad-text"
  );
  // Detect YouTube Ads
  const isYouTubeAd = document.querySelector(
    ".ad-showing, .ytp-ad-player-overlay"
  );

  // Detect Spotify Ads
  const nowPlayingWidget = document.querySelector(
    '[data-testid="now-playing-widget"]'
  );
  const isSpotifyAd =
    nowPlayingWidget && nowPlayingWidget.innerText.includes("Advertisement");

  if (!isVideoPaused) {
    if (isYouTubeAd || isSpotifyAd) {
      video.muted = true; // Mute when an ad is playing
      console.log("Ad detected: Muting...");
    } else {
      video.muted = false; // Unmute when ad ends
      console.log("No ad detected: Unmuting...");
    }
  }
}

// Run every second to check for ads
setInterval(checkForAds, 1000);
