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
      'galaxy': {
        title: 'Clasificador de Galaxias con CNN',
        image: 'assets/images/galaxy-1.png',
        images: [
          { src: 'assets/images/galaxy-1.png', alt: 'Vista general del comparador en Colab', caption: 'Comparador de arquitecturas CNN en Google Colab.' },
          { src: 'assets/images/galaxy-2.png', alt: 'Carga de la imagen de prueba', caption: 'Preprocesamiento y carga de la imagen de una galaxia para predicción.' },
          { src: 'assets/images/galaxy-3.png', alt: 'Resultados de las predicciones', caption: 'Resultados de las 4 arquitecturas con su nivel de confianza y clase predicha.' },
          { src: 'assets/images/galaxy-4.png', alt: 'Gráficas de probabilidad', caption: 'Análisis detallado de probabilidad por modelo.' },
          { src: 'assets/images/galaxy-5.png', alt: 'Evaluación del modelo', caption: 'Métricas de evaluación del modelo entrenado.' },
          { src: 'assets/images/galaxy-6.png', alt: 'Matriz de confusión', caption: 'Matriz de confusión mostrando el rendimiento en la clasificación.' },
          { src: 'assets/images/galaxy-7.png', alt: 'Conclusiones y detalles adicionales', caption: 'Detalles finales del proceso de clasificación.' }
        ],
        description: 'Proyecto de Inteligencia Artificial enfocado en la clasificación de galaxias utilizando Deep Learning. Se entrenaron y compararon cuatro arquitecturas de Redes Neuronales Convolucionales (MobileNetV2, DenseNet121, InceptionV3 y ResNet50) para procesar el dataset de Galaxy Zoo, el cual contiene aproximadamente 70,000 imágenes espaciales. El sistema logró clasificar exitosamente las galaxias en cinco categorías: espiral, espiral barrada, elíptica, vista de perfil e irregular.',
        problem: 'Clasificar de forma automatizada decenas de miles de imágenes astronómicas mediante un comparador hecho en Google Colab para elegir la arquitectura más óptima, facilitando la investigación y el análisis del universo.',
        technologies: ['Python', 'Deep Learning', 'CNN', 'TensorFlow / Keras'],
        repoUrl: 'https://drive.google.com/drive/folders/1IU6pQ9-1LKThClcSjsQqAKSxmV4D7Y5Y?usp=sharing',
        liveUrl: 'https://drive.google.com/file/d/11F64jBACLS7-QhIHG9iuMeIB8kTi8SE0/view?usp=sharing',
      },
      'esp32-clasificador': {
        title: 'Clasificador Inteligente de Objetos Escolares mediante IA y ESP32-CAM',
        video: 'assets/images/video de respaldo modelo.mp4',
        description: 'Innovador sistema de Inteligencia Artificial Embebida (Edge AI) diseñado para clasificar objetos escolares mediante Visión por Computadora. Utilizando un microcontrolador ESP32-CAM, el sistema captura imágenes en tiempo real y las analiza de forma local a través de un modelo de Machine Learning entrenado con Edge Impulse. Al identificar el objeto (cuaderno, mochila o útil escolar), el dispositivo activa respuestas físicas automatizadas: enciende un LED específico y ajusta la posición de un servomotor. Hardware integrado: Módulo ESP32-CAM AI-Thinker, Cámara OV2640, Servomotor, Indicadores LED (Verde para cuaderno, Azul para mochila, Amarillo para útil, Rojo para desconocido) y circuitos de soporte.',
        problem: 'Implementar un modelo de Machine Learning capaz de ejecutar inferencias de procesamiento de imágenes directamente en el borde (Edge Computing) sobre hardware de bajos recursos (ESP32-CAM), eliminando la dependencia de servidores externos, reduciendo la latencia y permitiendo una automatización física en tiempo real.',
        technologies: ['C/C++', 'ESP32-CAM', 'Edge Impulse', 'Machine Learning', 'Computer Vision', 'Arduino IDE', 'ESP32Servo', 'GPIO', 'OV2640'],
        repoUrl: '#',
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
    const mainVideo = this.modal.querySelector('#modal-main-video');
    const imageCaption = this.modal.querySelector('#modal-image-caption');
    const thumbnailsContainer = this.modal.querySelector('#modal-thumbnails');

    if (project.video) {
      /* Video handling */
      if (mainImage) mainImage.style.display = 'none';
      if (mainVideo) {
        mainVideo.src = project.video;
        mainVideo.style.display = 'block';
      }
      if (imageCaption) imageCaption.style.display = 'none';
      if (thumbnailsContainer) {
        thumbnailsContainer.innerHTML = '';
        thumbnailsContainer.style.display = 'none';
      }
    } else if (project.images && project.images.length > 1) {
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
      if (mainVideo) {
        mainVideo.pause();
        mainVideo.style.display = 'none';
      }
      if (mainImage) mainImage.style.display = 'block';
      mainImage.src = project.image || '';
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
    const mainVideo = this.modal?.querySelector('#modal-main-video');
    if (mainVideo) {
      mainVideo.pause();
      mainVideo.src = '';
    }
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
