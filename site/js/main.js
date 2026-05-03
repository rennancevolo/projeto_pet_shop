/* ========================================
   Main JavaScript — Empório dos Bichos
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {
  // ---- Mobile Menu ----
  const menuToggle = document.getElementById('menuToggle');
  const nav = document.getElementById('nav');
  const navOverlay = document.getElementById('navOverlay');

  if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
      nav.classList.toggle('open');
      if (navOverlay) navOverlay.classList.toggle('visible');
      document.body.style.overflow = nav.classList.contains('open') ? 'hidden' : '';
    });

    if (navOverlay) {
      navOverlay.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        nav.classList.remove('open');
        navOverlay.classList.remove('visible');
        document.body.style.overflow = '';
      });
    }

    // Close menu on nav link click
    nav.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        nav.classList.remove('open');
        if (navOverlay) navOverlay.classList.remove('visible');
        document.body.style.overflow = '';
      });
    });
  }

  // ---- Header Scroll Effect ----
  const header = document.getElementById('header');
  if (header) {
    const onScroll = () => {
      header.classList.toggle('scrolled', window.scrollY > 50);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // ---- Active Nav Link ----
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // ---- Scroll Reveal Animations ----
  const revealElements = document.querySelectorAll('.reveal');
  if (revealElements.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => observer.observe(el));
  }

  // ---- Smooth Scroll for Anchor Links ----
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});
