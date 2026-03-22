document.addEventListener("DOMContentLoaded", () => {
  const video = document.querySelector(".hero-video");

  if (video) {
    const tryPlay = () => {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          video.muted = true;
          video.play().catch(() => {});
        });
      }
    };

    video.muted = true;
    video.setAttribute("muted", "");
    video.setAttribute("playsinline", "");
    video.setAttribute("autoplay", "");
    video.setAttribute("loop", "");

    tryPlay();

    document.addEventListener("visibilitychange", () => {
      if (!document.hidden) {
        tryPlay();
      }
    });
  }
});
