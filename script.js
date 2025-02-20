// script.js

document.addEventListener("DOMContentLoaded", function() {
  // 1. Navbar background on scroll
  const mainNav = document.getElementById('mainNav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      mainNav.classList.add('scrolled');
    } else {
      mainNav.classList.remove('scrolled');
    }
  });

  // 2. "Learn More" -> open Bootstrap modal
  const moreInfoBtn = document.getElementById('more-info-btn');
  if (moreInfoBtn) {
    moreInfoBtn.addEventListener('click', function() {
      const showcaseModal = new bootstrap.Modal(
        document.getElementById('showcaseModal')
      );
      showcaseModal.show();
    });
  }

  // 3. Scroll-based fade-in
  const animateElements = document.querySelectorAll('[data-animate]');
  const animateObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    },
    { threshold: 0.1 }
  );
  animateElements.forEach(el => animateObserver.observe(el));

  // 4. Auto-play videos in view (optional)
  const videos = document.querySelectorAll('video');
  const videoObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.play();
      } else {
        entry.target.pause();
      }
    });
  });
  videos.forEach(video => videoObserver.observe(video));
});
