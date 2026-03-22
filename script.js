const burger = document.querySelector('.burger');
const mobileMenu = document.querySelector('.mobile-menu');

if (burger && mobileMenu) {
  burger.addEventListener('click', () => {
    const isOpen = burger.classList.toggle('is-open');
    mobileMenu.classList.toggle('is-open', isOpen);
    burger.setAttribute('aria-expanded', String(isOpen));
  });

  mobileMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      burger.classList.remove('is-open');
      mobileMenu.classList.remove('is-open');
      burger.setAttribute('aria-expanded', 'false');
    });
  });
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.12,
  rootMargin: '0px 0px -40px 0px'
});

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));


const heroVideo = document.querySelector('.hero-video');

if (heroVideo) {
  const tryPlay = () => heroVideo.play().catch(() => {});
  tryPlay();
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) tryPlay();
  });
  document.addEventListener('pointerdown', tryPlay, { once: true });
}
