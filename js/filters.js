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

window.ProjectFilters = ProjectFilters;
