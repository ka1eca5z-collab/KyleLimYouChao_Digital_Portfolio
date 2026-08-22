(() => {
  const header = document.querySelector('[data-header]');
  const menuButton = document.querySelector('[data-menu-toggle]');
  const nav = document.querySelector('[data-nav]');

  const onScroll = () => header?.classList.toggle('scrolled', window.scrollY > 18);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  menuButton?.addEventListener('click', () => {
    const open = nav?.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(Boolean(open)));
  });
  nav?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
  }));

  const observer = 'IntersectionObserver' in window
    ? new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            obs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12 })
    : null;
  document.querySelectorAll('.reveal').forEach(el => observer ? observer.observe(el) : el.classList.add('visible'));

  const profile = window.PORTFOLIO_PROFILE || {};
  document.querySelectorAll('[data-profile-link]').forEach(link => {
    const key = link.dataset.profileLink;
    let value = (profile[key] || '').trim();
    if (key === 'email' && value && !value.includes(':')) value = `mailto:${value}`;
    if (value) {
      link.href = value;
      link.classList.remove('is-placeholder');
      link.removeAttribute('aria-disabled');
    } else {
      link.href = '#';
      link.classList.add('is-placeholder');
      link.setAttribute('aria-disabled', 'true');
      link.addEventListener('click', e => e.preventDefault());
    }
  });

  const modal = document.querySelector('[data-lightbox-modal]');
  const modalImg = document.querySelector('[data-lightbox-image]');
  const close = document.querySelector('[data-lightbox-close]');
  const closeModal = () => {
    if (!modal) return;
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };
  document.querySelectorAll('[data-lightbox]').forEach(card => {
    card.addEventListener('click', e => {
      const img = card.querySelector('img');
      if (!modal || !modalImg || !img) return;
      if (e.target.closest('a')) return;
      modalImg.src = img.src;
      modalImg.alt = img.alt || 'Expanded project image';
      modal.classList.add('open');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    });
  });
  close?.addEventListener('click', closeModal);
  modal?.addEventListener('click', e => { if (e.target === modal) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

  /* ------------------------------------------------------------
     Subtle portfolio effects — intentionally restrained.
     Everything below progressively enhances the page and can fail
     without affecting navigation, contact links or project demos.
  ------------------------------------------------------------- */
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  const fxStyle = document.createElement('style');
  fxStyle.textContent = `
    :root { --fx-blue: 104, 173, 255; }

    .fx-particles {
      position: fixed;
      inset: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 0;
      opacity: .72;
    }
    .site-header { z-index: 2; }
    main, .site-footer { position: relative; z-index: 1; }

    .fx-scroll-progress {
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      height: 2px;
      z-index: 160;
      pointer-events: none;
      transform-origin: left center;
      transform: scaleX(0);
      background: linear-gradient(90deg, rgba(var(--fx-blue), .45), rgba(var(--fx-blue), 1));
      box-shadow: 0 0 14px rgba(var(--fx-blue), .28);
    }

    .fx-cursor-glow {
      position: fixed;
      left: 0;
      top: 0;
      width: 260px;
      height: 260px;
      border-radius: 50%;
      pointer-events: none;
      z-index: 0;
      opacity: 0;
      transform: translate3d(-50%, -50%, 0);
      background: radial-gradient(circle, rgba(var(--fx-blue), .075) 0%, rgba(var(--fx-blue), .035) 35%, transparent 70%);
      transition: opacity .25s ease;
      will-change: left, top;
    }

    .fx-card {
      --fx-x: 50%;
      --fx-y: 50%;
      position: relative;
      isolation: isolate;
    }
    .fx-card::before {
      content: "";
      position: absolute;
      inset: 0;
      z-index: -1;
      border-radius: inherit;
      pointer-events: none;
      opacity: 0;
      background: radial-gradient(380px circle at var(--fx-x) var(--fx-y), rgba(var(--fx-blue), .10), transparent 44%);
      transition: opacity .28s ease;
    }
    .fx-card:hover::before { opacity: 1; }

    .fx-tilt {
      transform: perspective(1100px) rotateX(var(--fx-rx, 0deg)) rotateY(var(--fx-ry, 0deg)) translateY(var(--fx-lift, 0px));
      transform-style: preserve-3d;
      transition: transform .32s cubic-bezier(.2,.7,.2,1), border-color .25s ease, box-shadow .25s ease;
      will-change: transform;
    }
    .fx-tilt:hover {
      --fx-lift: -3px;
      border-color: rgba(255,255,255,.18);
      box-shadow: 0 24px 65px rgba(0,0,0,.22), 0 0 34px rgba(var(--fx-blue), .035);
    }

    .site-nav a.fx-active { color: var(--text, #f5f7fb); }
    .site-nav a.fx-active::after { right: 0; background: var(--accent, #68adff); }

    .button-primary {
      position: relative;
      overflow: hidden;
    }
    .button-primary::after {
      content: "";
      position: absolute;
      inset: -2px;
      pointer-events: none;
      opacity: 0;
      background: linear-gradient(105deg, transparent 25%, rgba(255,255,255,.42) 48%, transparent 70%);
      transform: translateX(-120%);
      transition: transform .65s ease, opacity .2s ease;
    }
    .button-primary:hover::after {
      opacity: .7;
      transform: translateX(120%);
    }

    @media (hover: none), (pointer: coarse) {
      .fx-cursor-glow { display: none; }
      .fx-tilt { transform: none !important; }
    }
    @media (prefers-reduced-motion: reduce) {
      .fx-particles, .fx-cursor-glow { display: none; }
      .fx-tilt { transform: none !important; }
      .button-primary::after { display: none; }
    }
  `;
  document.head.appendChild(fxStyle);

  // 1) Tiny scroll-progress line.
  const progress = document.createElement('div');
  progress.className = 'fx-scroll-progress';
  progress.setAttribute('aria-hidden', 'true');
  document.body.appendChild(progress);
  const updateProgress = () => {
    const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    progress.style.transform = `scaleX(${Math.min(1, Math.max(0, window.scrollY / max))})`;
  };
  updateProgress();
  window.addEventListener('scroll', updateProgress, { passive: true });
  window.addEventListener('resize', updateProgress, { passive: true });

  // 2) Desktop-only cursor glow.
  if (finePointer && !reduceMotion) {
    const glow = document.createElement('div');
    glow.className = 'fx-cursor-glow';
    glow.setAttribute('aria-hidden', 'true');
    document.body.appendChild(glow);
    let glowFrame = 0;
    let gx = -500, gy = -500;
    const paintGlow = () => {
      glowFrame = 0;
      glow.style.left = `${gx}px`;
      glow.style.top = `${gy}px`;
    };
    window.addEventListener('pointermove', e => {
      gx = e.clientX;
      gy = e.clientY;
      glow.style.opacity = '1';
      if (!glowFrame) glowFrame = requestAnimationFrame(paintGlow);
    }, { passive: true });
    document.documentElement.addEventListener('mouseleave', () => glow.style.opacity = '0');
  }

  // 3) Soft pointer-following highlight on cards.
  const cardSelector = [
    '.portrait-card', '.about-card', '.skill-card', '.project-card', '.media-card',
    '.role-card', '.metric-card', '.interactive-lab', '.case-facts', '.outcome-card',
    '.next-project a', '.todo-box'
  ].join(',');
  document.querySelectorAll(cardSelector).forEach(card => {
    card.classList.add('fx-card');
    card.addEventListener('pointermove', e => {
      const r = card.getBoundingClientRect();
      card.style.setProperty('--fx-x', `${e.clientX - r.left}px`);
      card.style.setProperty('--fx-y', `${e.clientY - r.top}px`);
    }, { passive: true });
  });

  // 4) Very small perspective movement on the largest visual cards only.
  if (finePointer && !reduceMotion) {
    document.querySelectorAll('.portrait-card, .project-card').forEach(card => {
      card.classList.add('fx-tilt');
      card.addEventListener('pointermove', e => {
        const r = card.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - .5;
        const py = (e.clientY - r.top) / r.height - .5;
        card.style.setProperty('--fx-ry', `${(px * 2.2).toFixed(2)}deg`);
        card.style.setProperty('--fx-rx', `${(-py * 1.8).toFixed(2)}deg`);
      }, { passive: true });
      card.addEventListener('pointerleave', () => {
        card.style.setProperty('--fx-rx', '0deg');
        card.style.setProperty('--fx-ry', '0deg');
      });
    });
  }

  // 5) Active navigation section on the homepage.
  if ('IntersectionObserver' in window && nav) {
    const navLinks = [...nav.querySelectorAll('a[href^="#"]')];
    const sections = navLinks
      .map(link => document.querySelector(link.getAttribute('href')))
      .filter(Boolean);
    if (sections.length) {
      const sectionObserver = new IntersectionObserver(entries => {
        const visible = entries
          .filter(entry => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        navLinks.forEach(link => {
          link.classList.toggle('fx-active', link.getAttribute('href') === `#${visible.target.id}`);
        });
      }, { rootMargin: '-25% 0px -55% 0px', threshold: [0, .15, .35, .6] });
      sections.forEach(section => sectionObserver.observe(section));
    }
  }

  // 6) Subtle blue particles behind the page. No network calls or libraries.
  if (!reduceMotion) {
    const canvas = document.createElement('canvas');
    canvas.className = 'fx-particles';
    canvas.setAttribute('aria-hidden', 'true');
    document.body.prepend(canvas);
    const ctx = canvas.getContext('2d');
    if (ctx) {
      let dpr = Math.min(2, window.devicePixelRatio || 1);
      let width = 0;
      let height = 0;
      let particles = [];
      let raf = 0;

      const makeParticle = () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: .65 + Math.random() * 1.45,
        vx: (Math.random() - .5) * .095,
        vy: -.025 - Math.random() * .085,
        a: .14 + Math.random() * .24,
        phase: Math.random() * Math.PI * 2
      });

      const resize = () => {
        dpr = Math.min(2, window.devicePixelRatio || 1);
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = Math.round(width * dpr);
        canvas.height = Math.round(height * dpr);
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        const target = Math.max(30, Math.min(70, Math.round((width * height) / 22000)));
        particles = Array.from({ length: target }, makeParticle);
      };

      let last = performance.now();
      const draw = now => {
        const dt = Math.min(32, now - last);
        last = now;
        ctx.clearRect(0, 0, width, height);
        for (const p of particles) {
          p.x += p.vx * dt;
          p.y += p.vy * dt;
          p.phase += .0008 * dt;
          if (p.y < -12) { p.y = height + 12; p.x = Math.random() * width; }
          if (p.x < -12) p.x = width + 12;
          if (p.x > width + 12) p.x = -12;
          const pulse = .78 + Math.sin(p.phase) * .22;
          ctx.beginPath();
          ctx.fillStyle = `rgba(104,173,255,${p.a * pulse})`;
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          ctx.fill();
        }
        raf = requestAnimationFrame(draw);
      };

      resize();
      raf = requestAnimationFrame(draw);
      window.addEventListener('resize', resize, { passive: true });
      document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
          cancelAnimationFrame(raf);
          raf = 0;
        } else if (!raf) {
          last = performance.now();
          raf = requestAnimationFrame(draw);
        }
      });
    }
  }
})();
