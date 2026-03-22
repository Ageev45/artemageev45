document.addEventListener("DOMContentLoaded", () => {
  const video = document.querySelector(".hero-video");

  if (video) {
    const safePlay = () => {
      const promise = video.play();
      if (promise !== undefined) {
        promise.catch(() => {
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
    safePlay();

    document.addEventListener("visibilitychange", () => {
      if (!document.hidden) safePlay();
    });
  }
});
