function forcePlayVideos() {
  const videos = document.querySelectorAll(".auto-video");

  videos.forEach((video) => {
    video.muted = true;
    video.defaultMuted = true;
    video.loop = true;
    video.autoplay = true;
    video.playsInline = true;
    video.setAttribute("muted", "");
    video.setAttribute("autoplay", "");
    video.setAttribute("loop", "");
    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "");

    const start = () => {
      const promise = video.play();
      if (promise !== undefined) {
        promise.catch(() => {});
      }
    };

    if (video.readyState >= 2) {
      start();
    } else {
      video.addEventListener("canplay", start, { once: true });
      video.addEventListener("loadeddata", start, { once: true });
    }
  });
}

window.addEventListener("load", forcePlayVideos);
document.addEventListener("DOMContentLoaded", forcePlayVideos);

document.addEventListener("visibilitychange", () => {
  if (!document.hidden) {
    forcePlayVideos();
  }
});

window.addEventListener("click", forcePlayVideos, { once: true });
window.addEventListener("touchstart", forcePlayVideos, { once: true });
