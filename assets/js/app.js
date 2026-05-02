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

  // ---------- GSAP SCROLL MOTION ----------
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function initFallbackReveal() {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0, rootMargin: '0px 0px -40px 0px' });

    const vh = window.innerHeight;
    document.querySelectorAll('[data-reveal]').forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.top < vh - 40 && r.bottom > 0) {
        requestAnimationFrame(() => el.classList.add('in'));
      } else {
        io.observe(el);
      }
    });
  }

  function initGsapMotion() {
    if (!window.gsap || !window.ScrollTrigger || prefersReducedMotion) {
      initFallbackReveal();
      return;
    }

    gsap.registerPlugin(ScrollTrigger);
    gsap.defaults({ ease: 'power3.out' });

    document.querySelectorAll('[data-reveal]').forEach((el) => {
      if (el.matches('[data-stagger]')) return;
      const isSlow = el.dataset.reveal === 'slow';
      const isFade = el.dataset.reveal === 'fade';
      gsap.fromTo(el,
        { autoAlpha: 0, y: isFade ? 0 : 28 },
        {
          autoAlpha: 1,
          y: 0,
          duration: isSlow ? 1.15 : 0.82,
          clearProps: 'transform,opacity,visibility',
          onComplete: () => el.classList.add('in'),
          scrollTrigger: {
            trigger: el,
            start: 'top 84%',
            once: true
          }
        }
      );
    });

    document.querySelectorAll('[data-stagger]').forEach((group) => {
      const items = gsap.utils.toArray(group.children);
      if (!items.length) return;
      gsap.set(group, { autoAlpha: 1, y: 0 });
      gsap.fromTo(items,
        { autoAlpha: 0, y: 26 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.72,
          stagger: 0.09,
          clearProps: 'transform,opacity,visibility',
          onComplete: () => group.classList.add('in'),
          scrollTrigger: {
            trigger: group,
            start: 'top 82%',
            once: true
          }
        }
      );
    });

    gsap.utils.toArray('.mp-chart, #costTotal, .form-head').forEach((el) => {
      gsap.to(el, {
        yPercent: -8,
        ease: 'none',
        scrollTrigger: {
          trigger: el,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.8
        }
      });
    });
  }

  function initRealEstateFunnel() {
    const funnel = document.querySelector('[data-real-estate-funnel]');
    if (!funnel) return;

    const stages = Array.from(funnel.querySelectorAll('[data-funnel-stage]'));
    const numbers = Array.from(funnel.querySelectorAll('[data-funnel-number]'));
    if (!stages.length || !numbers.length) return;

    const setNumber = (el, value) => {
      el.textContent = Math.round(value).toLocaleString('es-CO');
    };

    function countWithRaf(el, target, duration, delay = 0) {
      window.setTimeout(() => {
        const start = performance.now();
        function step(now) {
          const t = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - t, 3);
          setNumber(el, target * eased);
          if (t < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
      }, delay);
    }

    stages.forEach((stage) => {
      stage.style.opacity = '0';
      stage.style.transform = 'translateY(18px)';
    });
    numbers.forEach((number) => setNumber(number, 0));

    if (prefersReducedMotion) {
      stages.forEach((stage) => {
        stage.style.opacity = '1';
        stage.style.transform = 'none';
      });
      numbers.forEach((number) => setNumber(number, Number(number.closest('[data-funnel-stage]')?.dataset.target || 0)));
      return;
    }

    if (window.gsap) {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      stages.forEach((stage, index) => {
        const number = stage.querySelector('[data-funnel-number]');
        const target = Number(stage.dataset.target || 0);
        const state = { value: 0 };

        tl.to(stage, {
          autoAlpha: 1,
          y: 0,
          duration: 0.72
        }, index * 0.2);

        tl.to(state, {
          value: target,
          duration: 0.82,
          ease: 'power2.out',
          onUpdate: () => setNumber(number, state.value)
        }, index * 0.2 + 0.12);
      });
      return;
    }

    stages.forEach((stage, index) => {
      window.setTimeout(() => {
        stage.style.transition = 'opacity 620ms cubic-bezier(.2,.8,.2,1), transform 620ms cubic-bezier(.2,.8,.2,1)';
        stage.style.opacity = '1';
        stage.style.transform = 'translateY(0)';
      }, index * 160);
      const number = stage.querySelector('[data-funnel-number]');
      countWithRaf(number, Number(stage.dataset.target || 0), 780, index * 160 + 120);
    });
  }

  function initHealthcareAgenda() {
    const agenda = document.querySelector('.hero--healthcare [data-healthcare-agenda]');
    if (!agenda) return;

    const slots = Array.from(agenda.querySelectorAll('[data-agenda-slot]'));
    if (!slots.length) return;

    const revealSlot = (slot) => {
      slot.classList.add('is-confirmed');
      slot.style.setProperty('--slot-glow', '1');
      const pill = slot.querySelector('[data-agenda-pill]');
      if (pill) {
        pill.style.opacity = '1';
        pill.style.transform = 'none';
      }
    };

    slots.forEach((slot) => {
      slot.classList.remove('is-confirmed');
      slot.style.setProperty('--slot-glow', '0');
      const pill = slot.querySelector('[data-agenda-pill]');
      if (pill) {
        pill.style.opacity = '0';
        pill.style.transform = 'translateY(8px) scale(0.96)';
      }
    });

    if (prefersReducedMotion) {
      slots.forEach(revealSlot);
      return;
    }

    if (window.gsap) {
      const tl = gsap.timeline({
        defaults: { ease: 'power3.out' },
        delay: 0.18
      });

      slots.forEach((slot, index) => {
        const pill = slot.querySelector('[data-agenda-pill]');
        const start = index * 0.42;

        tl.add(() => slot.classList.add('is-confirmed'), start);
        tl.to(slot, {
          '--slot-glow': 1,
          duration: 0.48
        }, start);

        if (pill) {
          tl.to(pill, {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.38
          }, start + 0.14);
        }
      });
      return;
    }

    slots.forEach((slot, index) => {
      window.setTimeout(() => revealSlot(slot), index * 360 + 180);
    });
  }

  function initLegalCapture() {
    const capture = document.querySelector('.hero--legal [data-legal-capture]');
    if (!capture) return;

    const fields = Array.from(capture.querySelectorAll('[data-legal-scramble]'));
    if (!fields.length) return;

    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#@$%&';
    const randomChar = () => chars[Math.floor(Math.random() * chars.length)];
    const scrambleFor = (text) => text.split('').map((char) => char === ' ' ? ' ' : randomChar()).join('');

    const renderProgress = (el, finalText, progress) => {
      const resolvedCount = Math.floor(finalText.length * progress);
      el.textContent = finalText.split('').map((char, index) => {
        if (char === ' ') return ' ';
        return index < resolvedCount ? char : randomChar();
      }).join('');
    };

    fields.forEach((field) => {
      const finalText = field.dataset.resolved || field.textContent.trim();
      field.textContent = scrambleFor(finalText);
    });

    if (prefersReducedMotion) {
      fields.forEach((field) => {
        field.textContent = field.dataset.resolved || field.textContent.trim();
      });
      capture.classList.add('is-decrypted');
      return;
    }

    if (window.gsap) {
      const tl = gsap.timeline({
        defaults: { ease: 'power2.out' },
        delay: 0.2,
        onComplete: () => capture.classList.add('is-decrypted')
      });

      fields.forEach((field, index) => {
        const finalText = field.dataset.resolved || field.textContent.trim();
        const state = { progress: 0 };

        tl.to(state, {
          progress: 1,
          duration: index === 0 ? 0.95 : 0.72,
          onUpdate: () => renderProgress(field, finalText, state.progress),
          onComplete: () => {
            field.textContent = finalText;
          }
        }, index * 0.24);
      });
      return;
    }

    fields.forEach((field, index) => {
      const finalText = field.dataset.resolved || field.textContent.trim();
      const duration = index === 0 ? 900 : 680;
      const delay = index * 220 + 180;

      window.setTimeout(() => {
        const start = performance.now();
        function step(now) {
          const t = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - t, 3);
          renderProgress(field, finalText, eased);
          if (t < 1) {
            requestAnimationFrame(step);
          } else {
            field.textContent = finalText;
            if (index === fields.length - 1) capture.classList.add('is-decrypted');
          }
        }
        requestAnimationFrame(step);
      }, delay);
    });
  }

  function initRestaurantFeed() {
    const feed = document.querySelector('.hero--restaurant [data-restaurant-feed]');
    if (!feed) return;

    const cards = Array.from(feed.querySelectorAll('[data-reservation-card]'));
    const meter = feed.querySelector('[data-hostess-meter]');
    if (!cards.length || !meter) return;

    const assistedTarget = 72;
    const setMeter = (value) => {
      meter.textContent = Math.round(value).toLocaleString('es-CO');
    };

    cards.forEach((card) => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(34px) scale(0.985)';
    });
    setMeter(0);

    if (prefersReducedMotion) {
      cards.forEach((card) => {
        card.style.opacity = '1';
        card.style.transform = 'none';
      });
      setMeter(assistedTarget);
      return;
    }

    if (window.gsap) {
      const state = { value: 0 };
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' }, delay: 0.12 });

      tl.to(cards, {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        duration: 0.46,
        stagger: 0.105
      });

      tl.to(state, {
        value: assistedTarget,
        duration: 0.82,
        ease: 'power2.out',
        onUpdate: () => setMeter(state.value),
        onComplete: () => setMeter(assistedTarget)
      }, 0.08);
      return;
    }

    cards.forEach((card, index) => {
      window.setTimeout(() => {
        card.style.transition = 'opacity 360ms cubic-bezier(.2,.8,.2,1), transform 360ms cubic-bezier(.2,.8,.2,1)';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0) scale(1)';
      }, index * 100 + 120);
    });

    const start = performance.now();
    function step(now) {
      const t = Math.min(1, (now - start) / 820);
      const eased = 1 - Math.pow(1 - t, 3);
      setMeter(assistedTarget * eased);
      if (t < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  function initSystemRebootScroll() {
    const reboot = document.querySelector('[data-system-reboot]');
    if (!reboot) return;

    const clamp = (value, min = 0, max = 1) => Math.min(max, Math.max(min, value));
    const easeInOut = (value) => {
      const t = clamp(value);
      return t * t * (3 - (2 * t));
    };
    const range = (start, end, value) => easeInOut((value - start) / (end - start));
    const setVar = (name, value) => reboot.style.setProperty(name, String(value));

    if (prefersReducedMotion) {
      setVar('--legacy-opacity', 0);
      setVar('--legacy-scale', 0.95);
      setVar('--legacy-blur', '8px');
      setVar('--premium-opacity', 1);
      setVar('--premium-scale', 1);
      setVar('--glow-opacity', 0.78);
      setVar('--phase-legacy', 0);
      setVar('--phase-shutdown', 0);
      setVar('--phase-boot', 0);
      setVar('--phase-final', 1);
      setVar('--shutdown-y', '18px');
      setVar('--boot-y', '18px');
      setVar('--final-y', '0px');
      setVar('--glow-scale', 1);
      return;
    }

    let ticking = false;

    function render() {
      ticking = false;
      const rect = reboot.getBoundingClientRect();
      const travel = Math.max(1, reboot.offsetHeight - window.innerHeight);
      const progress = clamp(-rect.top / travel);

      const shutdown = range(0.25, 0.5, progress);
      const boot = range(0.5, 0.75, progress);
      const final = range(0.75, 1, progress);

      const phaseLegacy = 1 - range(0.18, 0.32, progress);
      const phaseShutdown = range(0.26, 0.39, progress) * (1 - range(0.47, 0.58, progress));
      const phaseBoot = range(0.54, 0.66, progress) * (1 - range(0.72, 0.84, progress));
      const phaseFinal = range(0.78, 0.92, progress);

      setVar('--legacy-opacity', 1 - shutdown);
      setVar('--legacy-scale', 1 - (shutdown * 0.05));
      setVar('--legacy-blur', `${shutdown * 8}px`);
      setVar('--legacy-gray', `${20 + (shutdown * 35)}%`);
      setVar('--premium-opacity', boot);
      setVar('--premium-scale', 1.1 - (boot * 0.1));
      setVar('--glow-opacity', Math.max(boot * 0.86, final * 0.72));
      setVar('--glow-scale', 0.86 + (Math.max(boot * 0.86, final * 0.72) * 0.18));
      setVar('--phase-legacy', phaseLegacy);
      setVar('--phase-shutdown', phaseShutdown);
      setVar('--phase-boot', phaseBoot);
      setVar('--phase-final', phaseFinal);
      setVar('--shutdown-y', `${(1 - phaseShutdown) * 18}px`);
      setVar('--boot-y', `${(1 - phaseBoot) * 18}px`);
      setVar('--final-y', `${(1 - phaseFinal) * 18}px`);
    }

    function requestRender() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(render);
    }

    render();
    window.addEventListener('scroll', requestRender, { passive: true });
    window.addEventListener('resize', requestRender);
  }

  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    requestAnimationFrame(initGsapMotion);
    requestAnimationFrame(initRealEstateFunnel);
    requestAnimationFrame(initHealthcareAgenda);
    requestAnimationFrame(initLegalCapture);
    requestAnimationFrame(initRestaurantFeed);
    requestAnimationFrame(initSystemRebootScroll);
  } else {
    window.addEventListener('DOMContentLoaded', () => {
      requestAnimationFrame(initGsapMotion);
      requestAnimationFrame(initRealEstateFunnel);
      requestAnimationFrame(initHealthcareAgenda);
      requestAnimationFrame(initLegalCapture);
      requestAnimationFrame(initRestaurantFeed);
      requestAnimationFrame(initSystemRebootScroll);
    });
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
  const transformation = document.querySelector('.system-reboot');
  const industries = document.querySelector('.industries');
  const cta = document.querySelector('.cta');

  function updateNav() {
    const y = window.scrollY;
    // Dark over dark sections, light over light
    const darkSections = [hero, trust, transformation, industries, cta].filter(Boolean);
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
      label: 'Entrega objetivo documentada',
      value: 14,
      suffix: 'd',
      delta: 0,
      points: [1, 2, 3, 4, 6, 8, 11, 15, 20, 27, 36]
    },
    calls: {
      label: 'Sectores con estructura preparada',
      value: 4,
      suffix: '',
      delta: 0,
      points: [1, 1, 2, 2, 3, 3, 4, 4, 4, 4, 4]
    },
    hours: {
      label: 'Medición de conversión preparada',
      value: 100,
      suffix: '%',
      delta: 0,
      points: [40, 48, 56, 64, 72, 80, 88, 94, 98, 100, 100]
    },
    roi: {
      label: 'Métricas inventadas usadas como prueba',
      value: 0,
      suffix: '',
      delta: 0,
      points: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }
  };

  const mpValueEl = document.getElementById('mpValue');
  const mpLabelEl = document.getElementById('mpLabel');
  const mpDeltaEl = document.getElementById('mpDelta');
  const sparkLine = document.getElementById('sparkLine');
  const sparkArea = document.getElementById('sparkArea');
  const sparkDot = document.getElementById('sparkDot');
  const hasMetricPanel = !!(mpValueEl && mpLabelEl && mpDeltaEl && sparkLine && sparkArea && sparkDot);

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

  function animateMetricNumber(el, to, duration, decimals = 0, suffix = '') {
    if (!el) return;
    if (window.gsap && !prefersReducedMotion) {
      const isPrimarySla = el.id === 'mpValue' && to === 14 && !decimals;
      const format = (value) => decimals ? value.toFixed(decimals) : Math.round(value).toLocaleString('en-US');

      if (isPrimarySla) {
        const tl = gsap.timeline();
        const scramble = { frame: 0 };
        tl.to(scramble, {
          frame: 1,
          duration: 0.5,
          ease: 'none',
          onUpdate: () => {
            el.textContent = String(Math.floor(Math.random() * 90) + 10).padStart(2, '0');
          }
        });
        tl.fromTo({ value: 3 }, {
          value: 3
        }, {
          value: to,
          duration: Math.max(0.45, (duration / 1000) - 0.5),
          ease: 'power2.out',
          onUpdate() {
            el.textContent = String(Math.round(this.targets()[0].value)).padStart(2, '0');
          },
          onComplete: () => {
            el.textContent = String(to).padStart(2, '0');
          }
        });
        return;
      }

      const state = { value: 0 };
      gsap.to(state, {
        value: to,
        duration: duration / 1000,
        ease: 'power2.out',
        onUpdate: () => {
          el.textContent = format(state.value) + suffix;
        },
        onComplete: () => {
          el.textContent = format(Number(to)) + suffix;
        }
      });
      return;
    }
    animateNumber(el, 0, to, duration, decimals, suffix);
  }

  function drawSpark(points, animate = true) {
    const W = 640, H = 120, pad = 24;
    const start = [pad, H - 24];
    const peak = [W - pad, 14];
    const linePath = [
      `M${start[0]} ${start[1]}`,
      `C 118 ${start[1]}, 166 94, 220 88`,
      `C 326 76, 430 55, 516 32`,
      `C 558 21, 588 17, ${peak[0]} ${peak[1]}`
    ].join(' ');
    const areaPath = linePath + ` L ${W - pad} ${H} L ${pad} ${H} Z`;

    sparkLine.setAttribute('d', linePath);
    sparkArea.setAttribute('d', areaPath);
    sparkDot.setAttribute('cx', peak[0]);
    sparkDot.setAttribute('cy', peak[1]);

    if (animate) {
      const len = sparkLine.getTotalLength();
      sparkLine.style.strokeDasharray = len;
      sparkLine.style.strokeDashoffset = len;
      sparkArea.style.opacity = 0;
      sparkDot.style.opacity = 0;

      if (window.gsap && !prefersReducedMotion) {
        gsap.to(sparkLine, {
          strokeDashoffset: 0,
          duration: 1.65,
          ease: 'power2.in'
        });
        gsap.to(sparkArea, {
          opacity: 1,
          duration: 0.8,
          delay: 0.45,
          ease: 'power2.out'
        });
        gsap.to(sparkDot, {
          opacity: 1,
          duration: 0.32,
          delay: 1.35,
          ease: 'power2.out'
        });
      } else {
        sparkLine.style.transition = 'none';
        sparkLine.getBoundingClientRect();
        sparkLine.style.transition = 'stroke-dashoffset 1600ms cubic-bezier(.2,.7,.2,1)';
        sparkLine.style.strokeDashoffset = 0;
        sparkArea.style.opacity = 1;
        sparkDot.style.opacity = 1;
      }
    }
  }

  let currentMetric = 'recovered';
  function setMetric(key) {
    if (!hasMetricPanel) return;
    const c = metricConfigs[key];
    if (!c) return;
    currentMetric = key;
    mpLabelEl.textContent = c.label;
    const dec = c.suffix === '×' ? 1 : 0;
    // swap suffix
    const pct = document.querySelector('.mp-value .pct');
    if (pct) pct.textContent = c.suffix === 'd' ? 'días' : (c.suffix || '');
    animateMetricNumber(mpValueEl, c.value, 1250, dec);
    animateMetricNumber(mpDeltaEl, c.delta, 900, 0, '');
    drawSpark(c.points, true);
  }

  // Kick off hero telemetry once the panel enters the viewport.
  if (hasMetricPanel) {
    if (window.gsap && window.ScrollTrigger && !prefersReducedMotion) {
      gsap.registerPlugin(ScrollTrigger);
      ScrollTrigger.create({
        trigger: '.metric-panel',
        start: 'top 84%',
        once: true,
        onEnter: () => setMetric('recovered')
      });
    } else {
      setTimeout(() => setMetric('recovered'), 400);
    }
  }

  document.querySelectorAll('.metric-panel').forEach((panel) => {
    panel.addEventListener('pointermove', (e) => {
      const r = panel.getBoundingClientRect();
      panel.style.setProperty('--mx', ((e.clientX - r.left) / r.width) * 100 + '%');
      panel.style.setProperty('--my', ((e.clientY - r.top) / r.height) * 100 + '%');
    });
  });

  // ---------- TICKER ----------
  const tickerTargets = [];
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
          animateNumber(costEl, 0, 0, 400);
          costIo.unobserve(e.target);
        }
      });
    }, { threshold: 0.4 });
    costIo.observe(costEl);
  }

  // ---------- DELIVERY STACK ----------
  document.querySelectorAll('[data-flow-stack]').forEach((flow) => {
    const rows = Array.from(flow.querySelectorAll('.flow-row'));
    const hub = flow.querySelector('.flow-hub');
    const hubText = flow.querySelector('[data-flow-hub-text]');
    if (!rows.length || !hub || !hubText) return;

    function activate(row) {
      rows.forEach((item) => {
        const active = item === row;
        item.classList.toggle('is-active', active);
        item.setAttribute('aria-pressed', String(active));
      });
      flow.classList.add('is-dimmed');
      hub.classList.add('is-active');
      hubText.textContent = (row.dataset.flowLabel || row.querySelector('.act')?.textContent || '').toUpperCase();
    }

    function clear() {
      flow.classList.remove('is-dimmed');
      hub.classList.remove('is-active');
    }

    rows.forEach((row) => {
      row.setAttribute('aria-pressed', String(row.classList.contains('is-active')));
      row.addEventListener('mouseenter', () => activate(row));
      row.addEventListener('focus', () => activate(row));
      row.addEventListener('click', () => activate(row));
      row.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          activate(row);
        }
      });
    });

    flow.addEventListener('mouseleave', clear);
    flow.addEventListener('focusout', (e) => {
      if (!flow.contains(e.relatedTarget)) clear();
    });
  });

  // ---------- FAQ ----------
  document.querySelectorAll('[data-faq]').forEach((item) => {
    const btn = item.querySelector('.faq-q');
    btn.addEventListener('click', () => {
      const open = item.classList.contains('open');
      document.querySelectorAll('[data-faq].open').forEach((el) => {
        if (el !== item) {
          el.classList.remove('open');
          el.querySelector('.faq-q')?.setAttribute('aria-expanded', 'false');
        }
      });
      item.classList.toggle('open', !open);
      btn.setAttribute('aria-expanded', String(!open));
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

  function fieldErrorMessage(el) {
    if (el.type === 'email') return 'Ingresa un email corporativo válido.';
    if (el.type === 'tel') return 'Ingresa un WhatsApp válido con al menos 7 dígitos.';
    if (el.tagName === 'SELECT') return 'Selecciona una opción para continuar.';
    if (el.tagName === 'TEXTAREA') return 'Cuéntanos el problema principal para preparar la sesión.';
    return 'Completa este campo para continuar.';
  }

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
        el.setAttribute('aria-invalid', String(!valid));
        let errorEl = f.querySelector('.field-error');
        if (!valid) {
          if (!errorEl) {
            errorEl = document.createElement('span');
            errorEl.className = 'field-error';
            errorEl.id = `${el.id || el.name}-error`;
            f.appendChild(errorEl);
          }
          errorEl.textContent = fieldErrorMessage(el);
          el.setAttribute('aria-describedby', errorEl.id);
        } else if (errorEl) {
          errorEl.remove();
          el.removeAttribute('aria-describedby');
        }
      }
      if (!valid) ok = false;
    });
    return ok;
  }

  function isPlaceholderFormspree(action) {
    return !action || action.includes('FORMSPREE_ID_AQUI');
  }

  function buildWhatsAppLeadUrl(formEl) {
    const data = new FormData(formEl);
    const get = (name) => String(data.get(name) || '').trim();
    const subject = get('_subject') || 'Solicitud SPM Advisory';
    const sector = get('sector') || get('industry') || 'General';
    const lines = [
      'Hola, quiero solicitar una auditoría con SPM Advisory.',
      '',
      `Origen: ${subject}`,
      `Nombre: ${get('name')}`,
      `Empresa: ${get('company')}`,
      `Email: ${get('email')}`,
      `WhatsApp: ${get('phone')}`,
      `Sector: ${sector}`,
      `Proyecto: ${get('size')}`,
      get('preferred_time') ? `Franja preferida: ${get('preferred_time')}` : '',
      '',
      `Problema principal: ${get('problem')}`
    ].filter(Boolean);

    return `https://wa.me/573181294470?text=${encodeURIComponent(lines.join('\n'))}`;
  }

  if (form && step1 && step2 && formBtn && formStepLabel && formSuccess) {
    form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (stepIdx === 1) {
      if (!validate(step1)) return;
      step1.hidden = true;
      step2.hidden = false;
      formBtn.innerHTML = 'Enviar solicitud <span class="arr">→</span>';
      formStepLabel.textContent = 'Paso 2 / 2';
      stepIdx = 2;
      return;
    }
    if (!validate(step2)) return;
    formBtn.disabled = true;
    formBtn.innerHTML = 'Enviando... <span class="arr">→</span>';
    if (isPlaceholderFormspree(form.action)) {
      window.open(buildWhatsAppLeadUrl(form), '_blank', 'noopener,noreferrer');
      form.style.display = 'none';
      formSuccess.classList.add('show');
      formStepLabel.textContent = 'WhatsApp';
      return;
    }
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
  }

  const preferredTime = document.getElementById('f-time');
  document.querySelectorAll('#timeSlots [data-slot]').forEach((p) => {
    p.addEventListener('click', () => {
      document.querySelectorAll('#timeSlots [data-slot]').forEach((x) => {
        x.classList.remove('on');
        x.setAttribute('aria-pressed', 'false');
      });
      p.classList.add('on');
      p.setAttribute('aria-pressed', 'true');
      if (preferredTime) preferredTime.value = p.textContent.trim();
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
    if (hasMetricPanel) {
      sparkLine.setAttribute('stroke', c.a);
      sparkDot.setAttribute('fill', c.a);
      document.querySelector('#sparkGrad stop:first-child')?.setAttribute('stop-color', c.a);
      document.querySelector('#sparkGrad stop:last-child')?.setAttribute('stop-color', c.a);
    }
  }

  const heroVariants = {
    A: {
      h: 'Web premium + chatbot para vender en 14 días',
      s: 'Creamos una landing B2B con identidad visual, copy de conversión y chatbot para capturar prospectos por web y WhatsApp desde el primer lanzamiento.'
    },
    B: {
      h: 'Landing premium, chatbot y medición listos para lanzar',
      s: 'Diseñamos el flujo de conversión, implementamos el sitio y dejamos eventos preparados para medir formularios, WhatsApp y oportunidades desde el día uno.'
    },
    C: {
      h: 'Una presencia digital seria para negocios que venden confianza',
      s: 'Sistema visual y comercial para dueños, socios y equipos comerciales: mensaje claro, diseño premium, captura de leads y handoff documentado.'
    }
  };

  function applyHeroVariant(key) {
    const v = heroVariants[key];
    if (!v) return;
    const heroHeadline = document.getElementById('heroHeadline');
    const heroSub = document.getElementById('heroSub');
    if (heroHeadline) heroHeadline.innerHTML = v.h;
    if (heroSub) heroSub.innerHTML = v.s;
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

  // Apply initial tweak state when the edit panel exists.
  if (panel) {
    applyAccent(tweakState.accent || 'gold');
    applyHeroVariant(tweakState.heroVariant || 'A');
    if (tweakState.heroMetric && tweakState.heroMetric !== 'recovered') {
      setTimeout(() => applyMetric(tweakState.heroMetric), 500);
    }
  }

  // ---------- GA4 EVENTS ----------
  function trackEvent(name, params) {
    if (window.gtag) gtag('event', name, params);
  }
  document.querySelectorAll('a[href^="#auditoria"]').forEach((el) => {
    el.addEventListener('click', () => {
      trackEvent('cta_click', { cta_location: el.closest('[data-screen-label]')?.dataset.screenLabel || 'unknown' });
    });
  });
  document.querySelectorAll('[data-faq]').forEach((item) => {
    item.querySelector('.faq-q').addEventListener('click', () => {
      if (item.classList.contains('open')) {
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
    if (!panel) return;
    if (d.type === '__activate_edit_mode') panel.classList.add('show');
    if (d.type === '__deactivate_edit_mode') panel.classList.remove('show');
  });
  try {
    window.parent.postMessage({ type: '__edit_mode_available' }, '*');
  } catch (e) {}

  // Expose TWEAK_DEFAULTS to scope via globals
  window.TWEAK_DEFAULTS = window.TWEAK_DEFAULTS || tweakState;
})();
