/* ============================================
   THEME — Light/Dark Toggle + localStorage
   ============================================ */

class ThemeManager {
  constructor() {
    this.storageKey = 'portfolio-theme';
    this.toggleBtn = document.getElementById('theme-toggle');
    this.toggleIcon = this.toggleBtn?.querySelector('.theme-icon');

    this.init();
  }

  init() {
    const savedTheme = localStorage.getItem(this.storageKey);

    if (savedTheme) {
      this.setTheme(savedTheme, false);
    } else {
      /* Default to dark (cosmic theme) */
      this.setTheme('dark', false);
    }

    this.toggleBtn?.addEventListener('click', () => this.toggle());
  }

  getTheme() {
    return document.documentElement.getAttribute('data-theme') || 'dark';
  }

  setTheme(theme, save = true) {
    document.documentElement.setAttribute('data-theme', theme);
    this.updateIcon(theme);
    this.updateStarsVisibility(theme);

    if (save) {
      localStorage.setItem(this.storageKey, theme);
    }
  }

  toggle() {
    const current = this.getTheme();
    const next = current === 'dark' ? 'light' : 'dark';
    this.setTheme(next);

    /* Add a brief animation to the toggle button */
    this.toggleBtn?.classList.add('spin');
    setTimeout(() => {
      this.toggleBtn?.classList.remove('spin');
    }, 400);
  }

  updateIcon(theme) {
    if (!this.toggleIcon) return;

    if (theme === 'light') {
      this.toggleIcon.textContent = '🌙';
      this.toggleBtn.setAttribute('aria-label', 'Cambiar a tema oscuro');
      this.toggleBtn.title = 'Tema oscuro';
    } else {
      this.toggleIcon.textContent = '☀️';
      this.toggleBtn.setAttribute('aria-label', 'Cambiar a tema claro');
      this.toggleBtn.title = 'Tema claro';
    }
  }

  updateStarsVisibility(theme) {
    const canvas = document.getElementById('stars-canvas');
    if (canvas) {
      canvas.style.opacity = theme === 'light' ? '0.15' : '1';
    }
  }
}

window.ThemeManager = ThemeManager;
