/**
 * Apple Visual Effects & Micro-Interactions Engine
 * - Dynamic Cursor Spotlight Glow
 * - 3D Perspective Tilt on Hover
 * - Scroll-Triggered Reveal Animations (IntersectionObserver)
 * - Glassmorphism Navbar Elevation on Scroll
 */

class AppleInteractionsEngine {
  constructor() {
    this.selector = '.gallery-card, .experience-card, .competency-card, .cert-card, .education-card';
    this.cards = [];
    this.init();
  }

  init() {
    this.refreshCards();
    this.initSpotlightAndTilt();
    this.initScrollReveals();
    this.initNavbarScrollEffect();
  }

  refreshCards() {
    this.cards = Array.from(document.querySelectorAll(this.selector));
  }

  initSpotlightAndTilt() {
    window.addEventListener('mousemove', (e) => {
      if (!this.cards.length) return;

      for (const card of this.cards) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Card spotlight distance detection
        const isNear = 
          e.clientX >= rect.left - 50 &&
          e.clientX <= rect.right + 50 &&
          e.clientY >= rect.top - 50 &&
          e.clientY <= rect.bottom + 50;

        if (isNear) {
          card.style.setProperty('--mouse-x', `${x}px`);
          card.style.setProperty('--mouse-y', `${y}px`);
          card.setAttribute('data-spotlight', 'active');

          // Subtle 3D tilt effect when directly over the card
          const isOver = 
            e.clientX >= rect.left &&
            e.clientX <= rect.right &&
            e.clientY >= rect.top &&
            e.clientY <= rect.bottom;

          if (isOver && !card.classList.contains('no-tilt')) {
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const tiltX = ((y - centerY) / centerY) * -3.5;
            const tiltY = ((x - centerX) / centerX) * 3.5;
            card.style.setProperty('--tilt-x', `${tiltX.toFixed(2)}deg`);
            card.style.setProperty('--tilt-y', `${tiltY.toFixed(2)}deg`);
          } else {
            card.style.setProperty('--tilt-x', '0deg');
            card.style.setProperty('--tilt-y', '0deg');
          }
        } else if (card.getAttribute('data-spotlight') === 'active') {
          card.removeAttribute('data-spotlight');
          card.style.setProperty('--tilt-x', '0deg');
          card.style.setProperty('--tilt-y', '0deg');
        }
      }
    }, { passive: true });
  }

  initScrollReveals() {
    // Collect all elements to reveal
    const revealTargets = document.querySelectorAll(
      '.hero-content > *, .section-header, .gallery-filters, .gallery-card, .experience-card, .competency-card, .education-card, .cert-card, .footer-bottom'
    );

    revealTargets.forEach((el, index) => {
      el.classList.add('reveal-element');
    });

    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -60px 0px',
      threshold: 0.12
    };

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, observerOptions);

    revealTargets.forEach(el => observer.observe(el));
    this.observer = observer;
  }

  initNavbarScrollEffect() {
    const nav = document.querySelector('.apple-nav');
    if (!nav) return;

    window.addEventListener('scroll', () => {
      if (window.scrollY > 30) {
        nav.classList.add('nav-scrolled');
      } else {
        nav.classList.remove('nav-scrolled');
      }
    }, { passive: true });
  }
}

// Global initialization
document.addEventListener('DOMContentLoaded', () => {
  window.appleInteractions = new AppleInteractionsEngine();
});
