/**
 * Apple Spotlight Effect & Card Micro-Interactions
 * Fare imlecini takip eden radyal ışık parlaması ve pürüzsüz kart derinliği
 */

class SpotlightEffect {
  constructor(selector = '.bento-card, .gallery-card, .bento-center-card') {
    this.selector = selector;
    this.cards = [];
    this.init();
  }

  init() {
    this.refreshCards();
    window.addEventListener('mousemove', (e) => this.handleMouseMove(e), { passive: true });
  }

  refreshCards() {
    this.cards = Array.from(document.querySelectorAll(this.selector));
  }

  handleMouseMove(e) {
    if (!this.cards.length) return;

    for (const card of this.cards) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Sadece yakındaki veya kart üzerindeki kartları hesapla (performans için)
      const isNear = 
        e.clientX >= rect.left - 80 &&
        e.clientX <= rect.right + 80 &&
        e.clientY >= rect.top - 80 &&
        e.clientY <= rect.bottom + 80;

      if (isNear) {
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
        card.setAttribute('data-spotlight', 'active');
      } else if (card.getAttribute('data-spotlight') === 'active') {
        card.removeAttribute('data-spotlight');
      }
    }
  }
}

// Global olarak başlat
document.addEventListener('DOMContentLoaded', () => {
  window.spotlight = new SpotlightEffect();
});
