/* SPM Advisory — Landing interactions
   - Scroll reveal
   - Nav state (dark/light on hero transition)
   - Hero metric animation + sparkline
   - Ticker number counters
   - FAQ accordion
   - Form multi-step + validation + success
   - Industry card parallax hover glow
   - Tweaks panel
*/
(function () {
  'use strict';

  // ---------- SCROLL REVEAL ----------
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0, rootMargin: '0px 0px -40px 0px' });

  function initReveal() {
    const vh = window.innerHeight;
    document.querySelectorAll('[data-reveal]').forEach((el) => {
      const r = el.getBoundingClientRect();
      // If already in the viewport on load, reveal immediately (with its delay)
      if (r.top < vh - 40 && r.bottom > 0) {
        // small stagger so it feels sequenced rather than flashing in
        requestAnimationFrame(() => el.classList.add('in'));
      } else {
        io.observe(el);
      }
    });
  }
  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    requestAnimationFrame(initReveal);
  } else {
    window.addEventListener('DOMContentLoaded', () => requestAnimationFrame(initReveal));
  }

  // ---------- MOBILE NAV ----------
  const burger = document.getElementById('navBurger');
  const mobileMenu = document.getElementById('navMobile');

  if (burger && mobileMenu) {
    function toggleMenu(open) {
      burger.classList.toggle('open', open);
      burger.setAttribute('aria-expanded', String(open));
      mobileMenu.classList.toggle('open', open);
      mobileMenu.setAttribute('aria-hidden', String(!open));
      document.body.style.overflow = open ? 'hidden' : '';
    }
    burger.addEventListener('click', () => toggleMenu(!burger.classList.contains('open')));
    mobileMenu.querySelectorAll('.nav-mobile-link, .nav-mobile-cta').forEach((link) => {
      link.addEventListener('click', () => toggleMenu(false));
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') toggleMenu(false);
    });
  }

  // ---------- NAV STATE ----------
  const nav = document.getElementById('nav');
  const hero = document.querySelector('.hero');
  const trust = document.querySelector('.trust');
  const industries = document.querySelector('.industries');
  const cta = document.querySelector('.cta');

  function updateNav() {
    const y = window.scrollY;
    // Dark over dark sections, light over light
    const darkSections = [hero, trust, industries, cta].filter(Boolean);
    let overDark = false;
    darkSections.forEach((s) => {
      const r = s.getBoundingClientRect();
      if (r.top <= 80 && r.bottom >= 80) overDark = true;
    });
    nav.classList.toggle('is-dark', overDark);
    nav.classList.toggle('is-light', !overDark);
    nav.classList.toggle('is-stuck', y > 24);
  }
  updateNav();
  window.addEventListener('scroll', updateNav, { passive: true });
  window.addEventListener('resize', updateNav);

  // ---------- HERO METRIC + SPARKLINE ----------
  const metricConfigs = {
    recovered: {
      label: 'Conversión promedio · vs. sitio anterior',
      value: 127,
      suffix: '%',
      delta: 18.4,
      points: [20, 35, 55, 68, 80, 92, 100, 110, 118, 124, 127]
    },
    calls: {
      label: 'Proyectos entregados · desde 2024',
      value: 48,
      suffix: '',
      delta: 6.0,
      points: [5, 10, 16, 20, 26, 31, 36, 40, 43, 46, 48]
    },
    hours: {
      label: 'Días promedio de entrega',
      value: 14,
      suffix: 'd',
      delta: -2.1,
      points: [28, 25, 22, 20, 19, 17, 16, 15, 14, 14, 14]
    },
    roi: {
      label: 'Satisfacción de clientes · NPS',
      value: 98,
      suffix: '%',
      delta: 1.2,
      points: [80, 84, 87, 90, 92, 94, 95, 96, 97, 98, 98]
    }
  };

  const mpValueEl = document.getElementById('mpValue');
  const mpLabelEl = document.getElementById('mpLabel');
  const mpDeltaEl = document.getElementById('mpDelta');
  const sparkLine = document.getElementById('sparkLine');
  const sparkArea = document.getElementById('sparkArea');
  const sparkDot = document.getElementById('sparkDot');

  function lerp(a, b, t) { return a + (b - a) * t; }
  function easeOut(t) { return 1 - Math.pow(1 - t, 3); }

  function animateNumber(el, from, to, duration, decimals = 0, suffix = '') {
    const start = performance.now();
    function step(now) {
      const t = Math.min(1, (now - start) / duration);
      const v = lerp(from, to, easeOut(t));
      el.textContent = (decimals ? v.toFixed(decimals) : Math.round(v).toLocaleString('en-US')) + suffix;
      if (t < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  function drawSpark(points, animate = true) {
    const W = 600, H = 120, pad = 6;
    const min = Math.min(...points);
    const max = Math.max(...points);
    const range = max - min || 1;
    const coords = points.map((p, i) => {
      const x = pad + (i / (points.length - 1)) * (W - pad * 2);
      const y = H - pad - ((p - min) / range) * (H - pad * 2);
      return [x, y];
    });
    const linePath = coords.map((c, i) => (i ? 'L' : 'M') + c[0].toFixed(1) + ' ' + c[1].toFixed(1)).join(' ');
    const areaPath = linePath + ` L ${W - pad} ${H} L ${pad} ${H} Z`;

    sparkLine.setAttribute('d', linePath);
    sparkArea.setAttribute('d', areaPath);
    const last = coords[coords.length - 1];
    sparkDot.setAttribute('cx', last[0]);
    sparkDot.setAttribute('cy', last[1]);

    if (animate) {
      const len = sparkLine.getTotalLength();
      sparkLine.style.strokeDasharray = len;
      sparkLine.style.strokeDashoffset = len;
      sparkLine.style.transition = 'none';
      // force
      sparkLine.getBoundingClientRect();
      sparkLine.style.transition = 'stroke-dashoffset 1600ms cubic-bezier(.2,.7,.2,1)';
      sparkLine.style.strokeDashoffset = 0;

      sparkArea.style.opacity = 0;
      sparkArea.style.transition = 'opacity 1800ms ease 400ms';
      requestAnimationFrame(() => sparkArea.style.opacity = 1);

      sparkDot.style.opacity = 0;
      sparkDot.style.transition = 'opacity 400ms ease 1400ms';
      requestAnimationFrame(() => sparkDot.style.opacity = 1);
    }
  }

  let currentMetric = 'recovered';
  function setMetric(key) {
    const c = metricConfigs[key];
    if (!c) return;
    currentMetric = key;
    mpLabelEl.textContent = c.label;
    const dec = c.suffix === '×' ? 1 : 0;
    animateNumber(mpValueEl, 0, c.value, 1400, dec);
    // swap suffix
    const pct = document.querySelector('.mp-value .pct');
    if (pct) pct.textContent = c.suffix || '';
    animateNumber(mpDeltaEl, 0, c.delta, 1200, 1, '');
    drawSpark(c.points, true);
  }

  // Kick off hero metric once hero visible (immediately; hero is above fold)
  setTimeout(() => setMetric('recovered'), 400);

  // ---------- TICKER ----------
  const tickerTargets = [
    { el: document.getElementById('tk1'), to: 184, dec: 0 },
    { el: document.getElementById('tk2'), to: 2470, dec: 0 },
    { el: document.getElementById('tk3'), to: 126, dec: 0 }
  ];
  setTimeout(() => {
    tickerTargets.forEach((t) => {
      if (t.el) animateNumber(t.el, 0, t.to, 1800, t.dec);
    });
  }, 800);

  // Cost total counter when visible
  const costEl = document.getElementById('costTotal');
  if (costEl) {
    const costIo = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          const start = performance.now();
          function step(now) {
            const t = Math.min(1, (now - start) / 1400);
            const v = Math.round(lerp(0, 340000, easeOut(t)));
            costEl.textContent = '$' + v.toLocaleString('en-US');
            if (t < 1) requestAnimationFrame(step);
          }
          requestAnimationFrame(step);
          costIo.unobserve(e.target);
        }
      });
    }, { threshold: 0.4 });
    costIo.observe(costEl);
  }

  // ---------- FAQ ----------
  document.querySelectorAll('[data-faq]').forEach((item) => {
    const btn = item.querySelector('.faq-q');
    btn.addEventListener('click', () => {
      const open = item.classList.contains('open');
      document.querySelectorAll('[data-faq].open').forEach((el) => {
        if (el !== item) el.classList.remove('open');
      });
      item.classList.toggle('open', !open);
    });
  });

  // ---------- INDUSTRY CARD HOVER GLOW ----------
  document.querySelectorAll('[data-ind]').forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mx', ((e.clientX - r.left) / r.width) * 100 + '%');
      card.style.setProperty('--my', ((e.clientY - r.top) / r.height) * 100 + '%');
    });
  });

  // ---------- FORM ----------
  const form = document.getElementById('audForm');
  const step1 = document.getElementById('step1');
  const step2 = document.getElementById('step2');
  const formBtn = document.getElementById('formBtn');
  const formStepLabel = document.getElementById('formStep');
  const formSuccess = document.getElementById('formSuccess');
  let stepIdx = 1;

  function validate(container) {
    let ok = true;
    container.querySelectorAll('input, select, textarea').forEach((el) => {
      if (!el.hasAttribute('required')) return;
      const f = el.closest('.field');
      const v = (el.value || '').trim();
      let valid = !!v;
      if (el.type === 'email') valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
      if (el.type === 'tel') valid = v.replace(/\D/g, '').length >= 7;
      if (f) {
        f.classList.toggle('error', !valid);
        f.classList.toggle('valid', valid && el.type !== 'select-one');
      }
      if (!valid) ok = false;
    });
    return ok;
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (stepIdx === 1) {
      if (!validate(step1)) return;
      step1.style.display = 'none';
      step2.style.display = 'block';
      formBtn.innerHTML = 'Enviar solicitud <span class="arr">→</span>';
      formStepLabel.textContent = 'Paso 2 / 2';
      stepIdx = 2;
      return;
    }
    if (!validate(step2)) return;
    formBtn.disabled = true;
    formBtn.innerHTML = 'Enviando... <span class="arr">→</span>';
    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' }
      });
      if (res.ok) {
        form.style.display = 'none';
        formSuccess.classList.add('show');
        formStepLabel.textContent = 'Recibida';
        if (window.gtag) gtag('event', 'form_submit', { event_category: 'Lead', event_label: 'auditoria' });
      } else {
        formBtn.disabled = false;
        formBtn.innerHTML = 'Reintentar <span class="arr">→</span>';
        alert('Error al enviar. Contáctanos por WhatsApp: +57 318 1294470');
      }
    } catch {
      formBtn.disabled = false;
      formBtn.innerHTML = 'Reintentar <span class="arr">→</span>';
      alert('Error de red. Contáctanos por WhatsApp: +57 318 1294470');
    }
  });

  document.querySelectorAll('#timeSlots [data-slot]').forEach((p) => {
    p.addEventListener('click', () => {
      document.querySelectorAll('#timeSlots [data-slot]').forEach((x) => x.classList.remove('on'));
      p.classList.add('on');
    });
  });

  // ---------- TWEAKS ----------
  const panel = document.getElementById('tweaksPanel');
  const tweakState = Object.assign({}, window.TWEAK_DEFAULTS);

  const accents = {
    gold:    { a: '#C49A4A', b: '#B5863A' },
    copper:  { a: '#B87333', b: '#9A5E26' },
    sage:    { a: '#7A8A6E', b: '#5F6E55' },
    slate:   { a: '#5B6B7A', b: '#455463' },
    crimson: { a: '#9A3B3B', b: '#7E2D2D' }
  };

  function applyAccent(name) {
    const c = accents[name];
    if (!c) return;
    document.documentElement.style.setProperty('--gold', c.a);
    document.documentElement.style.setProperty('--gold-2', c.b);
    document.documentElement.style.setProperty('--gold-soft', c.a + '1f');
    document.querySelectorAll('#twSwatches .tw-swatch').forEach((s) => {
      s.classList.toggle('on', s.dataset.accent === name);
    });
    // Recolor sparkline
    sparkLine.setAttribute('stroke', c.a);
    sparkDot.setAttribute('fill', c.a);
    document.querySelector('#sparkGrad stop:first-child').setAttribute('stop-color', c.a);
    document.querySelector('#sparkGrad stop:last-child').setAttribute('stop-color', c.a);
  }

  const heroVariants = {
    A: {
      h: 'Diseñamos la web que hace que tus clientes digan: <em>"¿quién les hizo eso?"</em>',
      s: 'Interfaces premium que convierten visitas en clientes. Chatbots que capturan leads a las 2am. Entregado en 14 días — no en meses — con revisiones incluidas.'
    },
    B: {
      h: 'Tu web actual cuesta ventas. <em>La nueva las genera sola.</em>',
      s: 'Diseño UI/UX de alto estándar que posiciona tu marca como líder antes de que el prospecto lea una sola palabra. Lanzamos en 14 días, con garantía de revisiones ilimitadas.'
    },
    C: {
      h: 'Convierte el 127% más con un diseño que <em>trabaja mientras duermes.</em>',
      s: 'Un sitio premium + chatbot IA que califica leads, responde dudas y agenda citas — las 24 horas. Más de 48 proyectos entregados. Tiempo de entrega promedio: 14 días.'
    }
  };

  function applyHeroVariant(key) {
    const v = heroVariants[key];
    if (!v) return;
    document.getElementById('heroHeadline').innerHTML = v.h;
    document.getElementById('heroSub').innerHTML = v.s;
    document.querySelectorAll('#twHero .tw-pill').forEach((p) => {
      p.classList.toggle('on', p.dataset.hero === key);
    });
  }

  function applyMetric(key) {
    document.querySelectorAll('#twMetric .tw-pill').forEach((p) => {
      p.classList.toggle('on', p.dataset.metric === key);
    });
    setMetric(key);
  }

  document.querySelectorAll('#twSwatches .tw-swatch').forEach((s) => {
    s.addEventListener('click', () => {
      tweakState.accent = s.dataset.accent;
      applyAccent(s.dataset.accent);
      persist();
    });
  });
  document.querySelectorAll('#twMetric .tw-pill').forEach((p) => {
    p.addEventListener('click', () => {
      tweakState.heroMetric = p.dataset.metric;
      applyMetric(p.dataset.metric);
      persist();
    });
  });
  document.querySelectorAll('#twHero .tw-pill').forEach((p) => {
    p.addEventListener('click', () => {
      tweakState.heroVariant = p.dataset.hero;
      applyHeroVariant(p.dataset.hero);
      persist();
    });
  });

  function persist() {
    try {
      window.parent.postMessage({ type: '__edit_mode_set_keys', edits: tweakState }, '*');
    } catch (e) {}
  }

  // Apply initial tweak state
  applyAccent(tweakState.accent || 'gold');
  applyHeroVariant(tweakState.heroVariant || 'A');
  // metric already initialized; override if tweak says something else
  if (tweakState.heroMetric && tweakState.heroMetric !== 'recovered') {
    setTimeout(() => applyMetric(tweakState.heroMetric), 500);
  }

  // ---------- GA4 EVENTS ----------
  function trackEvent(name, params) {
    if (window.gtag) gtag('event', name, params);
  }
  document.querySelectorAll('a[href="#auditoria"]').forEach((el) => {
    el.addEventListener('click', () => {
      trackEvent('cta_click', { cta_location: el.closest('[data-screen-label]')?.dataset.screenLabel || 'unknown' });
    });
  });
  document.querySelectorAll('[data-faq]').forEach((item) => {
    item.querySelector('.faq-q').addEventListener('click', () => {
      if (!item.classList.contains('open')) {
        trackEvent('faq_open', { question: item.querySelector('.faq-q').textContent.trim().slice(0, 60) });
      }
    });
  });
  if (window.IntersectionObserver) {
    const sectionObs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          trackEvent('section_view', { section: e.target.dataset.screenLabel || e.target.id });
          sectionObs.unobserve(e.target);
        }
      });
    }, { threshold: 0.5 });
    document.querySelectorAll('[data-screen-label]').forEach((s) => sectionObs.observe(s));
  }

  // ---------- COOKIE CONSENT ----------
  (function () {
    const COOKIE_KEY = 'spm_consent';
    const banner = document.getElementById('cookieBanner');
    if (!banner) return;
    if (!localStorage.getItem(COOKIE_KEY)) {
      setTimeout(() => banner.classList.add('show'), 1400);
    }
    document.getElementById('cookieAccept')?.addEventListener('click', () => {
      localStorage.setItem(COOKIE_KEY, 'all');
      banner.classList.remove('show');
    });
    document.getElementById('cookieDecline')?.addEventListener('click', () => {
      localStorage.setItem(COOKIE_KEY, 'essential');
      banner.classList.remove('show');
    });
  })();

  // Edit mode protocol
  window.addEventListener('message', (e) => {
    const d = e.data || {};
    if (d.type === '__activate_edit_mode') panel.classList.add('show');
    if (d.type === '__deactivate_edit_mode') panel.classList.remove('show');
  });
  try {
    window.parent.postMessage({ type: '__edit_mode_available' }, '*');
  } catch (e) {}

  // Expose TWEAK_DEFAULTS to scope via globals
  window.TWEAK_DEFAULTS = window.TWEAK_DEFAULTS || tweakState;
})();
