/**
 * Apple Visual Effects & Scroll Animation Engine
 * BARAN DEMİRTAŞ — AI Design Specialist & Product Designer
 * 
 * - Scroll-Triggered Dynamic Component Reveals (Sliding & Cascading)
 * - Cursor Spotlight Radial Glow & 3D Perspective Card Tilt
 * - Parallax Ambient Glow Depth on Scroll
 * - Scroll-Spy Dynamic Navbar Highlighting
 */

class AppleInteractionsEngine {
  constructor() {
    this.cardSelector = '.gallery-card, .experience-card, .competency-card, .cert-card, .education-card';
    this.cards = [];
    this.observer = null;
    this.init();
  }

  init() {
    this.refreshCards();
    this.initSpotlightAndTilt();
    this.initScrollReveals();
    this.initNavbarScrollEffect();
    this.initParallaxScroll();
    this.initScrollSpy();
  }

  refreshCards() {
    this.cards = Array.from(document.querySelectorAll(this.cardSelector));
  }

  /* -------------------------------------------------------------
     1. SCROLL-TRIGGERED DYNAMIC REVEALS (SLIDE & CASCADE)
  ------------------------------------------------------------- */
  initScrollReveals() {
    if (this.observer) {
      this.observer.disconnect();
    }

    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -30px 0px',
      threshold: 0.1
    };

    this.observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          el.classList.add('is-revealed');
          el.classList.add('is-visible');

          // Once entrance animation finishes, allow full hover 3D transforms
          const onAnimEnd = () => {
            el.classList.add('reveal-completed');
            el.removeEventListener('transitionend', onAnimEnd);
          };
          el.addEventListener('transitionend', onAnimEnd);

          obs.unobserve(el);
        }
      });
    }, observerOptions);

    this.bindScrollTargets();
  }

  bindScrollTargets() {
    if (!this.observer) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      document.querySelectorAll('.reveal-on-scroll, .reveal-element').forEach(el => {
        el.classList.add('is-revealed', 'is-visible', 'reveal-completed');
      });
      return;
    }

    // 1. Hero Content Elements (Cascading entrance)
    const heroElements = document.querySelectorAll('.hero-content > *');
    heroElements.forEach((el, idx) => {
      el.classList.add('reveal-on-scroll', 'reveal-from-bottom');
      el.style.setProperty('--reveal-delay', `${(idx * 0.09).toFixed(2)}s`);
      el.style.transitionDelay = `${(idx * 0.09).toFixed(2)}s`;
      this.observer.observe(el);
    });

    // 2. Section Headers
    document.querySelectorAll('.section-header').forEach(header => {
      header.classList.add('reveal-on-scroll', 'reveal-from-bottom');
      this.observer.observe(header);
    });

    // 3. Gallery Toolbar
    const galleryToolbar = document.querySelector('.gallery-toolbar');
    if (galleryToolbar) {
      galleryToolbar.classList.add('reveal-on-scroll', 'reveal-from-bottom');
      this.observer.observe(galleryToolbar);
    }

    // 4. Gallery Carousel Cards
    const galleryCards = document.querySelectorAll('.gallery-carousel-track .gallery-card');
    galleryCards.forEach((card, idx) => {
      card.classList.add('reveal-on-scroll', 'reveal-from-bottom');
      const delay = Math.min(idx * 0.08, 0.48);
      card.style.setProperty('--reveal-delay', `${delay.toFixed(2)}s`);
      card.style.transitionDelay = `${delay.toFixed(2)}s`;
      this.observer.observe(card);
    });

    // 5. Experience Cards (CV)
    const expCards = document.querySelectorAll('#experienceContainer .experience-card');
    expCards.forEach((card, idx) => {
      card.classList.add('reveal-on-scroll', 'reveal-from-bottom');
      const delay = idx * 0.12;
      card.style.setProperty('--reveal-delay', `${delay.toFixed(2)}s`);
      card.style.transitionDelay = `${delay.toFixed(2)}s`;
      this.observer.observe(card);
    });

    // 6. Competencies Cards (CV)
    const compCards = document.querySelectorAll('#competenciesContainer .competency-card');
    compCards.forEach((card, idx) => {
      card.classList.add('reveal-on-scroll', 'reveal-from-bottom');
      const delay = Math.min(idx * 0.07, 0.5);
      card.style.setProperty('--reveal-delay', `${delay.toFixed(2)}s`);
      card.style.transitionDelay = `${delay.toFixed(2)}s`;
      this.observer.observe(card);
    });

    // 7. Education & Certifications
    const eduCard = document.getElementById('educationCard');
    if (eduCard) {
      eduCard.classList.add('reveal-on-scroll', 'reveal-from-left');
      this.observer.observe(eduCard);
    }

    const certCards = document.querySelectorAll('#certificationsContainer .cert-card');
    certCards.forEach((card, idx) => {
      card.classList.add('reveal-on-scroll', 'reveal-from-right');
      const delay = (idx * 0.09);
      card.style.setProperty('--reveal-delay', `${delay.toFixed(2)}s`);
      card.style.transitionDelay = `${delay.toFixed(2)}s`;
      this.observer.observe(card);
    });

    // 8. Footer
    const footer = document.querySelector('.footer-bottom');
    if (footer) {
      footer.classList.add('reveal-on-scroll', 'reveal-from-bottom');
      this.observer.observe(footer);
    }
  }

  refreshScrollReveals() {
    this.refreshCards();
    this.bindScrollTargets();
  }

  /* -------------------------------------------------------------
     2. CURSOR SPOTLIGHT GLOW & 3D CARD PERSPECTIVE TILT
  ------------------------------------------------------------- */
  initSpotlightAndTilt() {
    window.addEventListener('mousemove', (e) => {
      if (!this.cards.length) return;

      for (const card of this.cards) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Proximity detection for radial spotlight
        const isNear = 
          e.clientX >= rect.left - 60 &&
          e.clientX <= rect.right + 60 &&
          e.clientY >= rect.top - 60 &&
          e.clientY <= rect.bottom + 60;

        if (isNear) {
          card.style.setProperty('--mouse-x', `${x}px`);
          card.style.setProperty('--mouse-y', `${y}px`);
          card.setAttribute('data-spotlight', 'active');

          const isOver = 
            e.clientX >= rect.left &&
            e.clientX <= rect.right &&
            e.clientY >= rect.top &&
            e.clientY <= rect.bottom;

          if (isOver && !card.classList.contains('no-tilt') && card.classList.contains('reveal-completed')) {
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

  /* -------------------------------------------------------------
     3. NAVBAR SCROLL ELEVATION
  ------------------------------------------------------------- */
  initNavbarScrollEffect() {
    const nav = document.querySelector('.apple-nav');
    if (!nav) return;

    window.addEventListener('scroll', () => {
      if (window.scrollY > 25) {
        nav.classList.add('nav-scrolled');
      } else {
        nav.classList.remove('nav-scrolled');
      }
    }, { passive: true });
  }

  /* -------------------------------------------------------------
     4. PARALLAX AMBIENT DEPTH
  ------------------------------------------------------------- */
  initParallaxScroll() {
    const heroGlow = document.querySelector('.hero-glow');
    let ticking = false;

    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrolled = window.scrollY;
          if (heroGlow && scrolled < 900) {
            heroGlow.style.transform = `translate3d(-50%, ${scrolled * 0.25}px, 0) scale(${1 + scrolled * 0.0003})`;
            heroGlow.style.opacity = `${Math.max(0.2, 0.7 - scrolled * 0.0007)}`;
          }
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  /* -------------------------------------------------------------
     5. SCROLL-SPY ACTIVE NAV HIGHLIGHTING
  ------------------------------------------------------------- */
  initScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links .nav-link');
    if (!sections.length || !navLinks.length) return;

    window.addEventListener('scroll', () => {
      let currentSectionId = '';
      const scrollPos = window.scrollY + 180;

      sections.forEach(sec => {
        const top = sec.offsetTop;
        const height = sec.offsetHeight;
        if (scrollPos >= top && scrollPos < top + height) {
          currentSectionId = sec.getAttribute('id');
        }
      });

      navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === `#${currentSectionId}`) {
          link.classList.add('active-nav-link');
        } else {
          link.classList.remove('active-nav-link');
        }
      });
    }, { passive: true });
  }
}

// Global initialization
document.addEventListener('DOMContentLoaded', () => {
  window.appleInteractions = new AppleInteractionsEngine();
});
