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
})();
