/* ============================================
   ANIMATIONS — Intersection Observer
   ============================================ */

class ScrollAnimations {
  constructor() {
    this.elements = document.querySelectorAll('.animate-on-scroll');
    this.skillBars = document.querySelectorAll('.skill-badge__bar-fill');
    this.init();
  }

  init() {
    if (!this.elements.length && !this.skillBars.length) return;

    /* Observer for general animations */
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    this.elements.forEach(el => observer.observe(el));

    /* Observer for skill bars */
    const skillObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const targetWidth = entry.target.dataset.level || '0';
            entry.target.style.width = targetWidth + '%';
            skillObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    this.skillBars.forEach(bar => skillObserver.observe(bar));
  }
}

window.ScrollAnimations = ScrollAnimations;
