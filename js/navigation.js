/* ============================================
   NAVIGATION — Responsive Menu + Scroll Spy
   ============================================ */

class Navigation {
  constructor() {
    this.navbar = document.querySelector('.navbar');
    this.hamburger = document.getElementById('hamburger-btn');
    this.menu = document.getElementById('nav-menu');
    this.overlay = document.getElementById('nav-overlay');
    this.navLinks = document.querySelectorAll('.navbar__link');
    this.scrollTopBtn = document.getElementById('scroll-top-btn');
    this.sections = document.querySelectorAll('main section[id]');

    this.isMenuOpen = false;

    this.init();
  }

  init() {
    /* Hamburger toggle */
    this.hamburger?.addEventListener('click', () => this.toggleMenu());
    this.overlay?.addEventListener('click', () => this.closeMenu());

    /* Nav link clicks */
    this.navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        this.closeMenu();
      });
    });

    /* Scroll events */
    window.addEventListener('scroll', () => {
      this.handleScroll();
      this.updateScrollSpy();
    }, { passive: true });

    /* Scroll to top */
    this.scrollTopBtn?.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    /* Close menu on escape */
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isMenuOpen) {
        this.closeMenu();
      }
    });

    /* Initial state */
    this.handleScroll();
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    this.menu?.classList.toggle('open', this.isMenuOpen);
    this.overlay?.classList.toggle('open', this.isMenuOpen);
    this.hamburger?.classList.toggle('active', this.isMenuOpen);

    /* Prevent body scroll when menu is open */
    document.body.style.overflow = this.isMenuOpen ? 'hidden' : '';

    /* Accessibility */
    this.hamburger?.setAttribute('aria-expanded', this.isMenuOpen);
  }

  closeMenu() {
    if (!this.isMenuOpen) return;
    this.isMenuOpen = false;
    this.menu?.classList.remove('open');
    this.overlay?.classList.remove('open');
    this.hamburger?.classList.remove('active');
    document.body.style.overflow = '';
    this.hamburger?.setAttribute('aria-expanded', 'false');
  }

  handleScroll() {
    const scrollY = window.scrollY;

    /* Navbar background on scroll */
    if (scrollY > 50) {
      this.navbar?.classList.add('scrolled');
    } else {
      this.navbar?.classList.remove('scrolled');
    }

    /* Show/hide scroll to top button */
    if (scrollY > 600) {
      this.scrollTopBtn?.classList.add('visible');
    } else {
      this.scrollTopBtn?.classList.remove('visible');
    }
  }

  updateScrollSpy() {
    const scrollY = window.scrollY + 200;

    this.sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        this.navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }
}

window.Navigation = Navigation;
