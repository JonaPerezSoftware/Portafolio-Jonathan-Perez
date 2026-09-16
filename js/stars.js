/* ============================================
   STARS — Animated Starfield Canvas
   ============================================ */

class StarField {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;

    this.ctx = this.canvas.getContext('2d');
    this.stars = [];
    this.shootingStars = [];
    this.nebulaClouds = [];
    this.mouseX = 0;
    this.mouseY = 0;
    this.animationId = null;

    this.config = {
      starCount: 200,
      starMinSize: 0.5,
      starMaxSize: 2.5,
      shootingStarInterval: 5000,
      parallaxFactor: 0.02,
      nebulaCount: 3,
    };

    this.init();
  }

  init() {
    this.resize();
    this.createStars();
    this.createNebulaClouds();
    this.bindEvents();
    this.animate();
    this.scheduleShootingStar();
  }

  resize() {
    this.width = this.canvas.width = window.innerWidth;
    this.height = this.canvas.height = window.innerHeight;
  }

  createStars() {
    this.stars = [];
    for (let i = 0; i < this.config.starCount; i++) {
      this.stars.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        size: Math.random() * (this.config.starMaxSize - this.config.starMinSize) + this.config.starMinSize,
        opacity: Math.random() * 0.8 + 0.2,
        twinkleSpeed: Math.random() * 0.02 + 0.005,
        twinklePhase: Math.random() * Math.PI * 2,
        layer: Math.random() < 0.3 ? 3 : Math.random() < 0.6 ? 2 : 1,
        color: this.getStarColor(),
      });
    }
  }

  getStarColor() {
    const colors = [
      '#FFFFFF',
      '#E8E8FF',
      '#FFE8D6',
      '#D6E8FF',
      '#A78BFA',
      '#67E8F9',
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  createNebulaClouds() {
    this.nebulaClouds = [];
    const nebulaColors = [
      'rgba(124, 58, 237, 0.03)',
      'rgba(6, 182, 212, 0.03)',
      'rgba(245, 158, 11, 0.02)',
    ];

    for (let i = 0; i < this.config.nebulaCount; i++) {
      this.nebulaClouds.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        radius: Math.random() * 300 + 200,
        color: nebulaColors[i % nebulaColors.length],
        drift: {
          x: (Math.random() - 0.5) * 0.2,
          y: (Math.random() - 0.5) * 0.1,
        },
      });
    }
  }

  createShootingStar() {
    const startX = Math.random() * this.width;
    const startY = Math.random() * this.height * 0.5;
    const angle = Math.PI / 4 + Math.random() * (Math.PI / 6);

    this.shootingStars.push({
      x: startX,
      y: startY,
      length: Math.random() * 80 + 50,
      speed: Math.random() * 8 + 6,
      angle: angle,
      opacity: 1,
      trail: [],
    });
  }

  scheduleShootingStar() {
    const delay = Math.random() * this.config.shootingStarInterval + 2000;
    setTimeout(() => {
      this.createShootingStar();
      this.scheduleShootingStar();
    }, delay);
  }

  bindEvents() {
    window.addEventListener('resize', () => {
      this.resize();
      this.createStars();
      this.createNebulaClouds();
    });

    window.addEventListener('mousemove', (e) => {
      this.mouseX = (e.clientX / this.width - 0.5) * 2;
      this.mouseY = (e.clientY / this.height - 0.5) * 2;
    });
  }

  drawNebulae() {
    for (const cloud of this.nebulaClouds) {
      cloud.x += cloud.drift.x;
      cloud.y += cloud.drift.y;

      if (cloud.x > this.width + cloud.radius) cloud.x = -cloud.radius;
      if (cloud.x < -cloud.radius) cloud.x = this.width + cloud.radius;
      if (cloud.y > this.height + cloud.radius) cloud.y = -cloud.radius;
      if (cloud.y < -cloud.radius) cloud.y = this.height + cloud.radius;

      const gradient = this.ctx.createRadialGradient(
        cloud.x, cloud.y, 0,
        cloud.x, cloud.y, cloud.radius
      );
      gradient.addColorStop(0, cloud.color);
      gradient.addColorStop(1, 'transparent');

      this.ctx.fillStyle = gradient;
      this.ctx.fillRect(
        cloud.x - cloud.radius,
        cloud.y - cloud.radius,
        cloud.radius * 2,
        cloud.radius * 2
      );
    }
  }

  drawStars(time) {
    for (const star of this.stars) {
      const parallaxX = this.mouseX * this.config.parallaxFactor * star.layer * 10;
      const parallaxY = this.mouseY * this.config.parallaxFactor * star.layer * 10;

      const twinkle = Math.sin(time * star.twinkleSpeed + star.twinklePhase);
      const currentOpacity = star.opacity * (0.6 + twinkle * 0.4);

      const x = star.x + parallaxX;
      const y = star.y + parallaxY;

      this.ctx.save();
      this.ctx.globalAlpha = currentOpacity;
      this.ctx.fillStyle = star.color;

      this.ctx.beginPath();
      this.ctx.arc(x, y, star.size, 0, Math.PI * 2);
      this.ctx.fill();

      /* Glow for bigger stars */
      if (star.size > 1.5) {
        this.ctx.globalAlpha = currentOpacity * 0.3;
        this.ctx.beginPath();
        this.ctx.arc(x, y, star.size * 3, 0, Math.PI * 2);
        const glow = this.ctx.createRadialGradient(x, y, 0, x, y, star.size * 3);
        glow.addColorStop(0, star.color);
        glow.addColorStop(1, 'transparent');
        this.ctx.fillStyle = glow;
        this.ctx.fill();
      }

      this.ctx.restore();
    }
  }

  drawShootingStars() {
    for (let i = this.shootingStars.length - 1; i >= 0; i--) {
      const ss = this.shootingStars[i];

      ss.x += Math.cos(ss.angle) * ss.speed;
      ss.y += Math.sin(ss.angle) * ss.speed;
      ss.opacity -= 0.012;

      ss.trail.push({ x: ss.x, y: ss.y, opacity: ss.opacity });
      if (ss.trail.length > 20) ss.trail.shift();

      /* Draw trail */
      for (let j = 0; j < ss.trail.length; j++) {
        const point = ss.trail[j];
        const alpha = (j / ss.trail.length) * ss.opacity * 0.6;

        this.ctx.save();
        this.ctx.globalAlpha = alpha;
        this.ctx.fillStyle = '#FFFFFF';
        this.ctx.beginPath();
        this.ctx.arc(point.x, point.y, 1.5 * (j / ss.trail.length), 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.restore();
      }

      /* Draw head */
      this.ctx.save();
      this.ctx.globalAlpha = ss.opacity;
      this.ctx.fillStyle = '#FFFFFF';
      this.ctx.beginPath();
      this.ctx.arc(ss.x, ss.y, 2, 0, Math.PI * 2);
      this.ctx.fill();
      this.ctx.restore();

      if (ss.opacity <= 0 || ss.x > this.width + 100 || ss.y > this.height + 100) {
        this.shootingStars.splice(i, 1);
      }
    }
  }

  animate() {
    const time = performance.now();

    this.ctx.clearRect(0, 0, this.width, this.height);

    this.drawNebulae();
    this.drawStars(time);
    this.drawShootingStars();

    this.animationId = requestAnimationFrame(() => this.animate());
  }

  destroy() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
  }
}

/* Export for use in main.js */
window.StarField = StarField;
