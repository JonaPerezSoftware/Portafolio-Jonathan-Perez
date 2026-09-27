/* ============================================
   FILTERS — Project Filtering by Technology
   ============================================ */

class ProjectFilters {
  constructor() {
    this.filterBtns = document.querySelectorAll('.filter-btn');
    this.projectCards = document.querySelectorAll('.card-project');
    this.currentFilter = 'all';

    this.init();
  }

  init() {
    if (!this.filterBtns.length) return;

    this.filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const filter = btn.dataset.filter;
        this.filterProjects(filter);
        this.setActiveButton(btn);
      });
    });
  }

  filterProjects(filter) {
    this.currentFilter = filter;

    this.projectCards.forEach(card => {
      const technologies = card.dataset.technologies?.split(',') || [];

      if (filter === 'all' || technologies.includes(filter)) {
        card.classList.remove('project-hidden');
        card.style.animation = 'fadeInUp 0.5s ease forwards';
      } else {
        card.classList.add('project-hidden');
        card.style.animation = '';
      }
    });
  }

  setActiveButton(activeBtn) {
    this.filterBtns.forEach(btn => btn.classList.remove('active'));
    activeBtn.classList.add('active');
  }
}

/* ============================================
   FILTERS — Skills Filtering by Category
   ============================================ */

class SkillsFilter {
  constructor() {
    this.filterBtns = document.querySelectorAll('.skills__category-btn');
    this.skillBadges = document.querySelectorAll('.skill-badge');
    this.currentCategory = 'all';

    this.init();
  }

  init() {
    if (!this.filterBtns.length || !this.skillBadges.length) return;

    this.filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const category = btn.dataset.category;
        this.filterSkills(category);
        this.setActiveButton(btn);
      });
    });
  }

  filterSkills(category) {
    this.currentCategory = category;

    this.skillBadges.forEach(badge => {
      const badgeCategory = badge.dataset.category;
      const isMatch = category === 'all' || badgeCategory === category;

      if (isMatch) {
        badge.classList.remove('skill-hidden');
        badge.style.animation = 'fadeInUp 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards';

        // Ensure progress bar fills
        const barFill = badge.querySelector('.skill-badge__bar-fill');
        if (barFill && barFill.dataset.level) {
          barFill.style.width = barFill.dataset.level + '%';
        }
      } else {
        badge.classList.add('skill-hidden');
        badge.style.animation = '';
      }
    });
  }

  setActiveButton(activeBtn) {
    this.filterBtns.forEach(btn => {
      btn.classList.remove('active');
      btn.setAttribute('aria-selected', 'false');
    });
    activeBtn.classList.add('active');
    activeBtn.setAttribute('aria-selected', 'true');
  }
}

window.ProjectFilters = ProjectFilters;
window.SkillsFilter = SkillsFilter;
