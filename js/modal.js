/* ============================================
   MODAL — Project Detail Modal
   ============================================ */

class ProjectModal {
  constructor() {
    this.modal = document.getElementById('project-modal');
    this.backdrop = document.getElementById('modal-backdrop');
    this.closeBtn = document.getElementById('modal-close');
    this.triggers = document.querySelectorAll('[data-modal-trigger]');

    this.projectsData = {
      zarahy: {
        title: 'La Pequeña Zarahy',
        image: 'assets/images/project-zarahy.png',
        description: 'Sitio web desarrollado para la fundación social "La Pequeña Zarahy", una organización dedicada a apoyar a niños y familias en situación de vulnerabilidad. El proyecto incluye secciones informativas sobre la misión de la fundación, programas activos, y formularios de contacto para voluntarios y donantes.',
        problem: 'La fundación necesitaba una presencia digital profesional para comunicar su misión, atraer voluntarios y facilitar donaciones. Antes no contaban con un sitio web oficial.',
        technologies: ['HTML5', 'CSS3', 'JavaScript'],
        repoUrl: 'https://github.com/JonaPerezSoftware/la-pequena-zarahy',
        liveUrl: 'https://lapequeñazarahy.es/',
      },
      taskflow: {
        title: 'TaskFlow',
        image: 'assets/images/project-taskflow.png',
        description: 'Aplicación de gestión de tareas estilo Kanban que permite organizar el flujo de trabajo mediante columnas personalizables. Incluye funcionalidades de drag & drop, categorización de tareas, prioridades y seguimiento de progreso.',
        problem: 'Los equipos pequeños necesitan una herramienta simple y visual para organizar tareas sin la complejidad de plataformas empresariales.',
        technologies: ['React', 'Node.js', 'MongoDB', 'CSS3'],
        repoUrl: '#',
        liveUrl: '#',
      },
      codeweather: {
        title: 'CodeWeather',
        image: 'assets/images/project-codeweather.png',
        description: 'Dashboard meteorológico interactivo que consume la API de OpenWeatherMap para mostrar datos climáticos en tiempo real. Presenta pronósticos extendidos, mapas interactivos y visualización de datos históricos mediante gráficas dinámicas.',
        problem: 'Crear una interfaz amigable para consultar información meteorológica detallada, con visualización de datos clara y en tiempo real.',
        technologies: ['JavaScript', 'APIs REST', 'CSS Grid', 'Chart.js'],
        repoUrl: '#',
        liveUrl: '#',
      },
    };

    this.init();
  }

  init() {
    if (!this.modal) return;

    /* Trigger buttons */
    this.triggers.forEach(trigger => {
      trigger.addEventListener('click', (e) => {
        e.preventDefault();
        const projectId = trigger.dataset.modalTrigger;
        this.open(projectId);
      });
    });

    /* Close actions */
    this.closeBtn?.addEventListener('click', () => this.close());
    this.backdrop?.addEventListener('click', () => this.close());

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') this.close();
    });
  }

  open(projectId) {
    const project = this.projectsData[projectId];
    if (!project) return;

    /* Populate modal content */
    this.modal.querySelector('.modal__title').textContent = project.title;
    this.modal.querySelector('.modal__image').src = project.image;
    this.modal.querySelector('.modal__image').alt = `Captura de ${project.title}`;
    this.modal.querySelector('.modal__description').textContent = project.description;
    this.modal.querySelector('.modal__problem').textContent = project.problem;

    /* Technologies tags */
    const tagsContainer = this.modal.querySelector('.modal__tags');
    tagsContainer.innerHTML = project.technologies
      .map(tech => `<span class="tag">${tech}</span>`)
      .join('');

    /* Links */
    const repoLink = this.modal.querySelector('.modal__repo-link');
    const liveLink = this.modal.querySelector('.modal__live-link');

    if (repoLink) {
      repoLink.href = project.repoUrl;
      repoLink.style.display = project.repoUrl && project.repoUrl !== '#' ? 'inline-flex' : 'none';
    }
    if (liveLink) {
      liveLink.href = project.liveUrl;
      liveLink.style.display = project.liveUrl && project.liveUrl !== '#' ? 'inline-flex' : 'none';
    }

    /* Show modal */
    this.modal.classList.add('active');
    this.backdrop.classList.add('active');
    document.body.style.overflow = 'hidden';

    /* Focus trap */
    this.closeBtn?.focus();
  }

  close() {
    this.modal?.classList.remove('active');
    this.backdrop?.classList.remove('active');
    document.body.style.overflow = '';
  }
}

window.ProjectModal = ProjectModal;
