/* ═══════════════════════════════════════════════════════════════
   ALYSSA FITNESS — global.js
   Scripts partagés : header, reveal, burger, témoignages
═══════════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  /* ─── HEADER SCROLL ─────────────────────────────────────── */
  const header = document.getElementById('header');
  if (header) {
    const onScroll = () => {
      header.classList.toggle('scrolled', window.scrollY > 20);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ─── BURGER MENU ───────────────────────────────────────── */
  const burger     = document.getElementById('burger');
  const mobileMenu = document.getElementById('mobile-menu');

  if (burger && mobileMenu) {
    burger.addEventListener('click', () => {
      const isOpen = burger.classList.toggle('open');
      mobileMenu.classList.toggle('open', isOpen);
      burger.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Fermer au clic sur un lien
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        burger.classList.remove('open');
        mobileMenu.classList.remove('open');
        burger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });

    // Fermer au clic en dehors
    document.addEventListener('click', e => {
      if (!header.contains(e.target)) {
        burger.classList.remove('open');
        mobileMenu.classList.remove('open');
        burger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
  }

  /* ─── REVEAL AU SCROLL ──────────────────────────────────── */
  const reveals = document.querySelectorAll('.reveal');

  if (reveals.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    reveals.forEach(el => observer.observe(el));
  }

  /* ─── TÉMOIGNAGES SLIDER MOBILE ─────────────────────────── */
  const track = document.getElementById('testimonialsTrack');
  const dots  = document.querySelectorAll('.dot[data-index]');

  if (track && dots.length) {
    let current = 0;

    const goTo = (idx) => {
      current = idx;
      if (window.innerWidth <= 768) {
        track.style.transform = `translateX(-${idx * 100}%)`;
      }
      dots.forEach((d, i) => d.classList.toggle('dot--active', i === idx));
    };

    dots.forEach(dot => {
      dot.addEventListener('click', () => goTo(+dot.dataset.index));
    });

    // Swipe support
    let startX = 0;
    track.addEventListener('touchstart', e => {
      startX = e.touches[0].clientX;
    }, { passive: true });

    track.addEventListener('touchend', e => {
      const diff = startX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) {
        const total = dots.length;
        goTo(diff > 0
          ? Math.min(current + 1, total - 1)
          : Math.max(current - 1, 0)
        );
      }
    }, { passive: true });

    // Reset on resize
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768) {
        track.style.transform = '';
      } else {
        goTo(current);
      }
    });
  }

  /* ─── NAV ACTIVE PAGE ───────────────────────────────────── */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href && href === currentPage) {
      link.classList.add('active');
    }
  });

  /* ─── CIRCULAR PROGRESS RINGS ───────────────────────────── */
  document.querySelectorAll('.progress-ring[data-pct]').forEach(ring => {
    const pct    = parseFloat(ring.dataset.pct) || 0;
    const fill   = ring.querySelector('.progress-ring__fill');
    const pctEl  = ring.querySelector('.progress-ring__pct');
    if (!fill) return;

    const r = 26;
    const circ = 2 * Math.PI * r;
    fill.style.strokeDasharray = circ;
    fill.style.strokeDashoffset = circ;

    const obs = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        requestAnimationFrame(() => {
          fill.style.strokeDashoffset = circ * (1 - pct / 100);
        });
        if (pctEl) {
          animateCount(pctEl, 0, pct, 1000, v => v.toFixed(0) + '%');
        }
        obs.disconnect();
      }
    }, { threshold: 0.3 });
    obs.observe(ring);
  });

  /* ─── PROGRESS BARS ─────────────────────────────────────── */
  document.querySelectorAll('.progress-bar__fill[data-width]').forEach(bar => {
    const target = bar.dataset.width;
    bar.style.width = '0%';

    const obs = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        requestAnimationFrame(() => {
          bar.style.width = target;
        });
        obs.disconnect();
      }
    }, { threshold: 0.3 });
    obs.observe(bar.closest('.progress-bar') || bar);
  });

  /* ─── ANIMATE COUNT ─────────────────────────────────────── */
  function animateCount(el, from, to, duration, format = v => v) {
    const start = performance.now();
    const update = (time) => {
      const progress = Math.min((time - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = format(from + (to - from) * eased);
      if (progress < 1) requestAnimationFrame(update);
    };
    requestAnimationFrame(update);
  }

  /* ─── COUNTER NUMBERS ───────────────────────────────────── */
  document.querySelectorAll('[data-count]').forEach(el => {
    const target = parseFloat(el.dataset.count);
    const suffix = el.dataset.suffix || '';
    const obs = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        animateCount(el, 0, target, 1200, v => Math.round(v) + suffix);
        obs.disconnect();
      }
    }, { threshold: 0.5 });
    obs.observe(el);
  });

  /* ─── TOAST NOTIFICATION ────────────────────────────────── */
  window.showToast = (message, type = 'success') => {
    const toast = document.createElement('div');
    toast.className = `toast toast--${type}`;
    toast.innerHTML = `
      <svg viewBox="0 0 20 20" fill="none" width="18">
        ${type === 'success'
          ? '<path d="M4 10l4 4 8-8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>'
          : '<circle cx="10" cy="10" r="8" stroke="currentColor" stroke-width="1.5"/><path d="M10 6v4M10 14h.01" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>'
        }
      </svg>
      <span>${message}</span>
    `;

    if (!document.getElementById('toast-styles')) {
      const style = document.createElement('style');
      style.id = 'toast-styles';
      style.textContent = `
        .toast {
          position: fixed;
          bottom: 28px;
          right: 28px;
          z-index: 9999;
          display: flex;
          align-items: center;
          gap: 10px;
          background: #fff;
          border-radius: 14px;
          padding: 14px 20px;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.85rem;
          font-weight: 500;
          box-shadow: 0 8px 40px rgba(0,0,0,0.14);
          border: 1px solid #E8E8E8;
          animation: toastIn 0.4s cubic-bezier(0.22,1,0.36,1);
          max-width: 340px;
        }
        .toast--success { border-left: 3px solid #6DBE9A; color: #2d7a5a; }
        .toast--error   { border-left: 3px solid #e05a5a; color: #b83333; }
        .toast--info    { border-left: 3px solid #E98780; color: #c5504a; }
        @keyframes toastIn {
          from { transform: translateY(16px); opacity: 0; }
          to   { transform: translateY(0); opacity: 1; }
        }
      `;
      document.head.appendChild(style);
    }

    document.body.appendChild(toast);
    setTimeout(() => {
      toast.style.transition = 'all 0.3s ease';
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  };

});
