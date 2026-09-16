/* ============================================
   FORM — Contact Form Validation
   ============================================ */

class FormValidator {
  constructor(formId) {
    this.form = document.getElementById(formId);
    this.submitBtn = this.form?.querySelector('button[type="submit"]');
    this.successMessage = document.getElementById('form-success');

    this.rules = {
      name: {
        required: true,
        minLength: 2,
        maxLength: 100,
        messages: {
          required: 'El nombre es obligatorio.',
          minLength: 'El nombre debe tener al menos 2 caracteres.',
          maxLength: 'El nombre no puede exceder 100 caracteres.',
        },
      },
      email: {
        required: true,
        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        messages: {
          required: 'El correo electrónico es obligatorio.',
          pattern: 'Por favor ingresa un correo válido.',
        },
      },
      subject: {
        required: true,
        minLength: 3,
        messages: {
          required: 'El asunto es obligatorio.',
          minLength: 'El asunto debe tener al menos 3 caracteres.',
        },
      },
      message: {
        required: true,
        minLength: 10,
        maxLength: 2000,
        messages: {
          required: 'El mensaje es obligatorio.',
          minLength: 'El mensaje debe tener al menos 10 caracteres.',
          maxLength: 'El mensaje no puede exceder 2000 caracteres.',
        },
      },
    };

    this.init();
  }

  init() {
    if (!this.form) return;

    /* Real-time validation on blur */
    Object.keys(this.rules).forEach(fieldName => {
      const input = this.form.querySelector(`[name="${fieldName}"]`);
      if (input) {
        input.addEventListener('blur', () => this.validateField(fieldName));
        input.addEventListener('input', () => {
          /* Clear error while typing */
          const group = input.closest('.form-group');
          if (group?.classList.contains('form-group--error')) {
            this.validateField(fieldName);
          }
        });
      }
    });

    /* Form submission */
    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      this.handleSubmit();
    });
  }

  validateField(fieldName) {
    const rule = this.rules[fieldName];
    const input = this.form.querySelector(`[name="${fieldName}"]`);
    const group = input?.closest('.form-group');
    const errorEl = group?.querySelector('.form-error');

    if (!input || !group) return true;

    const value = input.value.trim();
    let isValid = true;
    let errorMessage = '';

    /* Required check */
    if (rule.required && !value) {
      isValid = false;
      errorMessage = rule.messages.required;
    }
    /* Min length check */
    else if (rule.minLength && value.length < rule.minLength && value.length > 0) {
      isValid = false;
      errorMessage = rule.messages.minLength;
    }
    /* Max length check */
    else if (rule.maxLength && value.length > rule.maxLength) {
      isValid = false;
      errorMessage = rule.messages.maxLength;
    }
    /* Pattern check */
    else if (rule.pattern && value && !rule.pattern.test(value)) {
      isValid = false;
      errorMessage = rule.messages.pattern;
    }

    /* Update UI */
    if (isValid) {
      group.classList.remove('form-group--error');
      group.classList.add('form-group--success');
      if (errorEl) errorEl.textContent = '';
    } else {
      group.classList.remove('form-group--success');
      group.classList.add('form-group--error');
      if (errorEl) errorEl.textContent = errorMessage;
    }

    return isValid;
  }

  validateAll() {
    let allValid = true;

    Object.keys(this.rules).forEach(fieldName => {
      const isValid = this.validateField(fieldName);
      if (!isValid) allValid = false;
    });

    return allValid;
  }

  handleSubmit() {
    if (!this.validateAll()) {
      /* Focus first error */
      const firstError = this.form.querySelector('.form-group--error input, .form-group--error textarea');
      firstError?.focus();
      return;
    }

    /* Simulate form submission */
    this.submitBtn.disabled = true;
    this.submitBtn.innerHTML = '<span class="btn-spinner"></span> Enviando...';

    setTimeout(() => {
      /* Show success message */
      this.form.style.display = 'none';
      if (this.successMessage) {
        this.successMessage.classList.add('visible');
      }

      /* Reset after a delay */
      setTimeout(() => {
        this.form.reset();
        this.form.style.display = '';
        this.submitBtn.disabled = false;
        this.submitBtn.innerHTML = '🚀 Enviar Mensaje';
        this.successMessage?.classList.remove('visible');

        /* Clear all validation states */
        this.form.querySelectorAll('.form-group').forEach(group => {
          group.classList.remove('form-group--error', 'form-group--success');
        });
      }, 4000);
    }, 1500);
  }
}

window.FormValidator = FormValidator;
