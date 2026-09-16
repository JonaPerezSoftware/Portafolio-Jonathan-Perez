/* ============================================
   MAIN — Application Controller
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  /* Initialize all modules */
  const starField = new StarField('stars-canvas');
  const themeManager = new ThemeManager();
  const navigation = new Navigation();
  const projectFilters = new ProjectFilters();
  const projectModal = new ProjectModal();
  const formValidator = new FormValidator('contact-form');
  const scrollAnimations = new ScrollAnimations();

  /* Log initialization */
  console.log('🌌 Portfolio initialized — Jonathan Abraham Pérez Chiquito');
});
