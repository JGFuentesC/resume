document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================
     Scroll Reveal via IntersectionObserver
     ========================================== */
  const reveals = document.querySelectorAll('.reveal, .reveal-stagger');
  const observerOptions = { threshold: 0.15, rootMargin: '0px 0px -50px 0px' };

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  reveals.forEach(el => revealObserver.observe(el));

  /* ==========================================
     Scroll Progress Bar
     ========================================== */
  const progressBar = document.querySelector('.scroll-progress-bar');
  if (progressBar) {
    window.addEventListener('scroll', () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      progressBar.style.height = Math.min(scrolled, 100) + '%';
    }, { passive: true });
  }

  /* ==========================================
     Parallax
     ========================================== */
  const parallaxEls = document.querySelectorAll('.parallax');
  let parallaxTicking = false;

  const updateParallax = () => {
    parallaxEls.forEach(el => {
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      if (rect.bottom > 0 && rect.top < windowHeight) {
        const offset = (rect.top / windowHeight) * 0.3 * 100;
        el.style.transform = `translateY(${offset}px)`;
      }
    });
    parallaxTicking = false;
  };

  window.addEventListener('scroll', () => {
    if (!parallaxTicking) {
      requestAnimationFrame(updateParallax);
      parallaxTicking = true;
    }
  }, { passive: true });

  /* ==========================================
     Smooth Nav Scroll
     ========================================== */
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  /* ==========================================
     Nav backdrop blur on scroll
     ========================================== */
  const nav = document.querySelector('.nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        nav.style.backdropFilter = 'blur(12px)';
        nav.style.backgroundColor = 'rgba(23, 19, 13, 0.85)';
      } else {
        nav.style.backdropFilter = 'none';
        nav.style.backgroundColor = 'var(--surface)';
      }
    }, { passive: true });
  }

});
