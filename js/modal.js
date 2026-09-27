/* ============================================
   MODAL — Project Detail Modal & Private Repo Notice
   ============================================ */

class ProjectModal {
  constructor() {
    this.modal = document.getElementById('project-modal');
    this.backdrop = document.getElementById('modal-backdrop');
    this.closeBtn = document.getElementById('modal-close');
    this.triggers = document.querySelectorAll('[data-modal-trigger]');

    /* Private Repo Alert Modal Elements */
    this.privateRepoModal = document.getElementById('private-repo-modal');
    this.privateRepoBackdrop = document.getElementById('private-repo-backdrop');
    this.privateRepoCloseBtn = document.getElementById('private-repo-close');
    this.privateRepoOkBtn = document.getElementById('private-repo-ok');
    this.privateRepoDetailsBtn = document.getElementById('private-repo-details-btn');
    this.privateRepoTriggers = document.querySelectorAll('.js-private-repo-trigger');
    this.modalRepoPrivateBtn = document.getElementById('modal-repo-private-btn');

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
      'talento-humano': {
        title: 'Módulo de Talento Humano — Agrícola e Industrial Primobanano S.A.',
        image: 'assets/images/project-talento-humano-solicitud.png',
        images: [
          {
            src: 'assets/images/project-talento-humano-solicitud.png',
            alt: 'Estructura general de Nueva Solicitud de Empleo en el módulo de Talento Humano',
            caption: 'Formulario de Nueva Solicitud de Empleo con 13 secciones colapsables y guardado de borrador independiente por sección.'
          },
          {
            src: 'assets/images/project-talento-humano-formulario.png',
            alt: 'Formulario de Datos Personales con campos detallados y cálculo automático de edad',
            caption: 'Sección de Datos Personales: validación de cédula, selección de país/provincia, discapacidad y cálculo dinámico de edad en tiempo real.'
          },
          {
            src: 'assets/images/project-talento-humano-login.png',
            alt: 'Pantalla de autenticación y acceso seguro al sistema empresarial Primobanano',
            caption: 'Pantalla de Login con autenticación segura y control de accesos para el personal administrativo de Primobanano S.A.'
          }
        ],
        description: 'Módulo de Talento Humano desarrollado a medida para Agrícola e Industrial Primobanano S.A., empresa bananera ecuatoriana. El sistema digitaliza y centraliza integralmente el proceso de contratación de nuevo personal. Cuenta con una interfaz modular por departamentos (Balanza, Estadísticas, Asistencia, Bodegas, Talento Humano) y un flujo de registro progresivo estructurado en 13 secciones colapsables: Datos Administrativos, Datos Personales, Documentación, Datos Referenciales, Estado Civil, Datos Familiares, Datos Educativos, entre otras, con persistencia independiente de borradores en cada etapa para no perder información en registros extensos.',
        problem: 'Primobanano S.A. gestionaba las postulaciones de personal de campo y administrativo con formularios en papel y registros descentralizados, lo que generaba pérdida de datos, demoras y falta de validación oportuna. Se requería una solución web robusta con backend API (Laravel/PHP), base de datos híbrida (MySQL + SQL Server), guardado progresivo de borradores, validaciones automáticas (cédula, cálculo de edad) y acceso restringido por credenciales para garantizar la seguridad de la información sensible de los empleados.',
        technologies: ['Angular', 'Laravel', 'PHP', 'MySQL', 'SQL Server'],
        repoUrl: '#',
        repoPrivate: true,
        repoPrivateMessage: 'No es posible mostrar el repositorio con el código fuente de esta aplicación ya que la empresa propietaria (Agrícola e Industrial Primobanano S.A.) no lo permite bajo políticas de privacidad y acuerdos de confidencialidad comercial.',
        liveUrl: '#',
      },
      'juego-preguntas': {
        title: 'Juego de Preguntas',
        image: 'assets/images/project-juego-preguntas.png',
        description: 'Juego interactivo de preguntas y respuestas tipo trivia desarrollado con JavaScript. Cuenta con temporizador dinámico con cuenta regresiva por pregunta, sistema de puntuación acumulativa, botón de pistas, efectos sonoros y música de tensión envolvente. Incluye dos modalidades de juego: modo individual para poner a prueba conocimientos y modo Versus para competir de manera interactiva por turnos entre dos participantes.',
        problem: 'Diseñar y desarrollar un juego web interactivo que gestione el estado dinámico en tiempo real (turnos de jugadores, cuenta regresiva, cálculo de puntajes y efectos sonoros interactivos) con una interfaz clara y responsiva.',
        technologies: ['JavaScript', 'HTML5', 'CSS3', 'Bootstrap 5', 'SweetAlert2'],
        repoUrl: 'https://github.com/JonaPerezSoftware/Juego-Preguntas',
        liveUrl: '#',
      },
    };

    this.init();
  }

  init() {
    if (!this.modal) return;

    /* Trigger buttons for project modal */
    this.triggers.forEach(trigger => {
      trigger.addEventListener('click', (e) => {
        e.preventDefault();
        const projectId = trigger.dataset.modalTrigger;
        this.open(projectId);
      });
    });

    /* Close actions for project modal */
    this.closeBtn?.addEventListener('click', () => this.close());
    this.backdrop?.addEventListener('click', () => this.close());

    /* Private repo modal actions */
    this.privateRepoTriggers.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const projectId = btn.dataset.project || 'talento-humano';
        this.openPrivateRepoAlert(projectId);
      });
    });

    this.modalRepoPrivateBtn?.addEventListener('click', (e) => {
      e.preventDefault();
      this.openPrivateRepoAlert('talento-humano');
    });

    this.privateRepoCloseBtn?.addEventListener('click', () => this.closePrivateRepoAlert());
    this.privateRepoOkBtn?.addEventListener('click', () => this.closePrivateRepoAlert());
    this.privateRepoBackdrop?.addEventListener('click', () => this.closePrivateRepoAlert());

    this.privateRepoDetailsBtn?.addEventListener('click', () => {
      this.closePrivateRepoAlert();
      this.open('talento-humano');
    });

    /* Escape key handler */
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        if (this.privateRepoModal?.classList.contains('active')) {
          this.closePrivateRepoAlert();
        } else {
          this.close();
        }
      }
    });
  }

  open(projectId) {
    const project = this.projectsData[projectId];
    if (!project) return;

    /* Populate modal content */
    this.modal.querySelector('.modal__title').textContent = project.title;
    this.modal.querySelector('.modal__description').textContent = project.description;
    this.modal.querySelector('.modal__problem').textContent = project.problem;

    /* Gallery handling */
    const mainImage = this.modal.querySelector('#modal-main-image');
    const imageCaption = this.modal.querySelector('#modal-image-caption');
    const thumbnailsContainer = this.modal.querySelector('#modal-thumbnails');

    if (project.images && project.images.length > 1) {
      /* Multi-image gallery */
      const firstImg = project.images[0];
      mainImage.src = firstImg.src;
      mainImage.alt = firstImg.alt;
      imageCaption.textContent = firstImg.caption || '';
      imageCaption.style.display = firstImg.caption ? 'block' : 'none';

      thumbnailsContainer.innerHTML = project.images
        .map((img, idx) => `
          <button type="button" class="modal__thumbnail ${idx === 0 ? 'active' : ''}" data-index="${idx}" aria-label="Ver imagen ${idx + 1}: ${img.alt}">
            <img src="${img.src}" alt="${img.alt}" loading="lazy">
          </button>
        `)
        .join('');
      thumbnailsContainer.style.display = 'flex';

      const thumbBtns = thumbnailsContainer.querySelectorAll('.modal__thumbnail');
      thumbBtns.forEach(thumb => {
        thumb.addEventListener('click', () => {
          thumbBtns.forEach(t => t.classList.remove('active'));
          thumb.classList.add('active');
          const index = parseInt(thumb.dataset.index, 10);
          const selected = project.images[index];

          /* Smooth image fade */
          mainImage.style.opacity = '0.4';
          setTimeout(() => {
            mainImage.src = selected.src;
            mainImage.alt = selected.alt;
            imageCaption.textContent = selected.caption || '';
            imageCaption.style.display = selected.caption ? 'block' : 'none';
            mainImage.style.opacity = '1';
          }, 150);
        });
      });
    } else {
      /* Single image */
      mainImage.src = project.image;
      mainImage.alt = `Captura de ${project.title}`;
      if (imageCaption) imageCaption.style.display = 'none';
      if (thumbnailsContainer) {
        thumbnailsContainer.innerHTML = '';
        thumbnailsContainer.style.display = 'none';
      }
    }

    /* Confidential notice */
    const notice = this.modal.querySelector('#modal-confidential-notice');
    if (notice) {
      notice.style.display = project.repoPrivate ? 'flex' : 'none';
    }

    /* Technologies tags */
    const tagsContainer = this.modal.querySelector('.modal__tags');
    tagsContainer.innerHTML = project.technologies
      .map(tech => `<span class="tag">${tech}</span>`)
      .join('');

    /* Links & Buttons */
    const repoLink = this.modal.querySelector('.modal__repo-link');
    const liveLink = this.modal.querySelector('.modal__live-link');
    const privateRepoBtn = this.modal.querySelector('#modal-repo-private-btn');

    if (project.repoPrivate) {
      if (repoLink) repoLink.style.display = 'none';
      if (privateRepoBtn) privateRepoBtn.style.display = 'inline-flex';
    } else {
      if (privateRepoBtn) privateRepoBtn.style.display = 'none';
      if (repoLink) {
        repoLink.href = project.repoUrl;
        repoLink.style.display = project.repoUrl && project.repoUrl !== '#' ? 'inline-flex' : 'none';
      }
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

  openPrivateRepoAlert(projectId) {
    if (!this.privateRepoModal || !this.privateRepoBackdrop) return;
    const project = this.projectsData[projectId];
    const messageEl = document.getElementById('private-repo-message');
    if (project && project.repoPrivateMessage && messageEl) {
      messageEl.textContent = project.repoPrivateMessage;
    }

    this.privateRepoModal.classList.add('active');
    this.privateRepoBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
    this.privateRepoOkBtn?.focus();
  }

  closePrivateRepoAlert() {
    if (!this.privateRepoModal || !this.privateRepoBackdrop) return;
    this.privateRepoModal.classList.remove('active');
    this.privateRepoBackdrop.classList.remove('active');
    /* Only restore body overflow if project modal isn't open */
    if (!this.modal?.classList.contains('active')) {
      document.body.style.overflow = '';
    }
  }
}

window.ProjectModal = ProjectModal;
