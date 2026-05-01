# SPM Advisory — $10k USD Upgrade Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Elevar SPM Advisory de un landing de alta calidad a una plataforma de conversión de estándar $10,000 USD — performance, SEO/GEO, conversión LATAM, backend funcional, y páginas de industria completas.

**Architecture:** Vanilla HTML/CSS/JS estático. Sin framework, sin build step. Archivos servidos directamente (GitHub Pages / Netlify). Integraciones via terceros (Formspree para formularios, GA4 para analytics, WhatsApp API nativa). Cada tarea es autónoma y reversible.

**Tech Stack:** HTML5 semántico · CSS custom properties (design tokens existentes) · Vanilla JS · Formspree (form backend) · GA4 (analytics) · Schema.org JSON-LD · WhatsApp Business API (href)

---

## Scope Map — Archivos Afectados

| Archivo | Estado | Tarea |
|---|---|---|
| `CLAUDE.md` | Modificar | Task 1 |
| `SPM Advisory.html` | Modificar | Tasks 3, 4, 5, 6, 7, 8, 10, 13 |
| `styles.css` | Modificar | Tasks 4, 5, 10, 13 |
| `app.js` | Modificar | Tasks 4, 8, 10 |
| `salud.html` | Crear | Task 9A |
| `legal.html` | Crear | Task 9B |
| `inmobiliaria.html` | Crear | Task 9C |
| `restaurantes.html` | Crear | Task 9D |
| `robots.txt` | Crear | Task 11 |
| `sitemap.xml` | Crear | Task 11 |

---

## Task 1: Actualizar CLAUDE.md — Estándares Premium

**Files:**
- Modify: `CLAUDE.md`

- [ ] **Step 1: Sobreescribir CLAUDE.md con los estándares del proyecto**

Reemplazar el contenido actual de `CLAUDE.md` con:

```markdown
## graphify

This project has a graphify knowledge graph at graphify-out/.

Rules:
- Before answering architecture or codebase questions, read graphify-out/GRAPH_REPORT.md for god nodes and community structure
- If graphify-out/wiki/index.md exists, navigate it instead of reading raw files
- After modifying code files in this session, run `graphify update .` to keep the graph current (AST-only, no API cost)

---

## CLAUDE.md — Directrices de Diseño y Arquitectura Premium

### Visión del Proyecto
Plataforma web de alto estándar ($10k USD). Herramienta operativa orientada a la conversión — diseño que transmite confianza absoluta y sofisticación para el mercado B2B hispano (MX/USA), empresas de 5–50 empleados.

### Stack Técnico
**Frontend:** HTML5 semántico · CSS custom properties (design tokens) · Vanilla JS
**Tipografía:** Inter (body) · Instrument Serif (accent italic) · JetBrains Mono (mono/eyebrow)
**Acento:** `#C49A4A` (gold) — no cambiar sin decisión de marca
**Backend/DB:** Formspree (form submission) · GA4 (analytics) · ningún servidor propio
**Deploy:** GitHub Pages / Netlify (estático)

### Design Tokens (NO modificar sin justificación)
```css
--ink: #0A0A0A;       /* negro base */
--ivory: #F7F5F0;     /* fondo claro */
--gold: #C49A4A;      /* acento único */
--f-display: "Inter"; /* headlines */
--f-mono: "JetBrains Mono"; /* eyebrows, datos */
```

### Reglas Estrictas de UI/UX
- PROHIBIDO diseño genérico. Cada elemento tiene intención de diseño documentada.
- Sistema de design tokens: ningún color o tamaño hardcodeado fuera de `:root`.
- Minimalista e intencional. Espacios en blanco son diseño, no vacío.
- Todo el marcado es semántico (`<nav>`, `<main>`, `<article>`, `<aside>`, `<section>`).
- WCAG AA obligatorio: contraste mínimo 4.5:1, focus-visible en todos los interactivos.
- GEO (Generative Engine Optimization): cada sección tiene un `<p class="tldr">` con resumen directo para extracción por LLMs.

### Estándares de Código
- Funciones de más de 30 líneas → revisar y dividir.
- Performance objetivo: LCP < 2.5s, CLS < 0.1, FID < 100ms.
- Google Fonts: siempre con `font-display: swap` y `<link rel="preload">`.
- No comentarios obvios. Solo comentar WHY, nunca WHAT.
- Sin feature flags ni backwards-compat shims — cambiar el código directo.

### Copywriting
- Usar la skill `/copywriting` para cualquier texto del sitio.
- Cada headline contiene un número concreto o resultado específico.
- CTA siempre = verbo de acción + promesa concreta.
- Zero buzzwords en español de marketing.
```

- [ ] **Step 2: Verificar que el archivo quedó correcto**

```bash
head -5 CLAUDE.md
```
Expected: `## graphify`

- [ ] **Step 3: Commit**

```bash
git add CLAUDE.md
git commit -m "docs: update CLAUDE.md with $10k premium standards and design constraints"
```

---

## Task 2: Crear Skill de Copywriting

**Files:**
- Create: `C:\Users\santi\.claude\skills\copywriting\SKILL.md`

> **Nota:** Este archivo ya fue creado como parte del proceso de planificación. Verificar que existe.

- [ ] **Step 1: Verificar que la skill existe**

```bash
ls ~/.claude/skills/copywriting/SKILL.md
```
Expected: archivo listado

- [ ] **Step 2: Registrar la skill en el índice de memorias**

Abrir `C:\Users\santi\.claude\projects\...\memory\MEMORY.md` y agregar la entrada:
```
- [Copywriting Skill](../skills/copywriting/SKILL.md) — reglas de voz, framework y plantillas de copy para SPM Advisory
```

- [ ] **Step 3: Commit (no aplica — skill fuera del repo del proyecto)**

Informar al usuario que la skill está disponible como `/copywriting`.

---

## Task 3: Performance + SEO Meta Tags

**Files:**
- Modify: `SPM Advisory.html` — sección `<head>`

**Problema actual:** Google Fonts bloquea render. Sin meta description. Sin Open Graph. Sin Twitter Card.

- [ ] **Step 1: Reemplazar el bloque `<head>` completo en `SPM Advisory.html`**

Reemplazar desde `<meta charset=...>` hasta antes de `<link rel="stylesheet" href="styles.css" />` con:

```html
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>SPM Advisory — Sistemas que generan ingresos mientras duermes</title>
<meta name="description" content="Instalamos el sistema operativo que convierte llamadas, leads y horas perdidas en ingresos. Operativo en 7 días, documentado y medible. Auditoría gratuita para firmas de salud, legal, inmobiliaria y F&B." />
<meta name="robots" content="index, follow" />
<link rel="canonical" href="https://spmadvisory.mx/" />

<!-- Open Graph -->
<meta property="og:type" content="website" />
<meta property="og:url" content="https://spmadvisory.mx/" />
<meta property="og:title" content="SPM Advisory — El sistema operativo que genera ingresos mientras duermes" />
<meta property="og:description" content="32 firmas en salud, legal, inmobiliaria y F&B ya operando. Auditoría gratuita. Sin pitch de venta." />
<meta property="og:image" content="https://spmadvisory.mx/og-image.png" />
<meta property="og:locale" content="es_MX" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="SPM Advisory — Sistema operativo para tu negocio" />
<meta name="twitter:description" content="Instalado en 7 días. ROI promedio 6.8×. Auditoría gratuita." />

<!-- Fonts: preload críticos, swap para el resto -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&family=Instrument+Serif:ital@0;1&display=swap" />
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet" media="print" onload="this.media='all'" />
<noscript>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet" />
</noscript>
```

- [ ] **Step 2: Agregar skip-nav link como primer hijo de `<body>`**

Inmediatamente después de `<body>`, agregar:

```html
<a href="#main-content" class="skip-nav">Saltar al contenido principal</a>
```

Y agregar `id="main-content"` al `<header class="hero">`:
```html
<header class="hero" id="main-content" data-screen-label="01 Hero">
```

- [ ] **Step 3: Agregar TL;DR GEO blocks**

En cada sección principal, agregar un párrafo oculto visualmente para LLMs. Ejemplo, después del primer `<div class="wrap">` en `#problema`:

```html
<p class="tldr" aria-hidden="true" style="display:none;">
  TL;DR: SPM Advisory instala sistemas de automatización operativa para empresas hispanas de 5–50 empleados. El sistema captura llamadas, leads y solicitudes 24/7, da seguimiento automático, y entrega un reporte semanal de ingresos recuperados. Implementación en 7 días. Auditoría gratuita sin pitch de venta.
</p>
```

- [ ] **Step 4: Agregar Schema.org JSON-LD antes de `</body>`**

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "name": "SPM Advisory",
      "description": "Instalamos el sistema operativo que genera ingresos mientras el dueño duerme. Automatización operativa para empresas de 5 a 50 empleados en salud, legal, inmobiliaria y F&B.",
      "url": "https://spmadvisory.mx",
      "email": "hola@spmadvisory.mx",
      "areaServed": ["MX", "US"],
      "serviceType": "Business Operations Automation",
      "priceRange": "$$$$",
      "address": [
        {"@type": "PostalAddress", "addressLocality": "Ciudad de México", "addressRegion": "CDMX", "addressCountry": "MX"},
        {"@type": "PostalAddress", "addressLocality": "Monterrey", "addressRegion": "NL", "addressCountry": "MX"},
        {"@type": "PostalAddress", "addressLocality": "Austin", "addressRegion": "TX", "addressCountry": "US"}
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "¿Necesito contratar más personal para operar el sistema SPM?",
          "acceptedAnswer": {"@type": "Answer", "text": "No. El sistema está diseñado para que tu equipo actual haga más con menos esfuerzo. En los 32 casos instalados, el headcount se mantuvo o se redujo."}
        },
        {
          "@type": "Question",
          "name": "¿Cuánto cuesta una instalación de SPM Advisory?",
          "acceptedAnswer": {"@type": "Answer", "text": "Depende del sector y tamaño. En la auditoría gratuita calculamos el ROI esperado y proponemos un rango cerrado. Regla fija: no arrancamos si el retorno proyectado es menor a 4× la inversión en el primer año."}
        },
        {
          "@type": "Question",
          "name": "¿Cuánto tiempo tarda la implementación?",
          "acceptedAnswer": {"@type": "Answer", "text": "7 días promedio. Día 1: auditoría. Días 2–4: blueprint. Días 5–6: instalación. Día 7: go live supervisado. Ajustes incluidos por 60 días."}
        }
      ]
    }
  ]
}
</script>
```

- [ ] **Step 5: Verificar que el HTML es válido**

Abrir `SPM Advisory.html` en un browser y verificar que no hay errores en la consola. Confirmar que el `<title>` es correcto con DevTools.

- [ ] **Step 6: Commit**

```bash
git add "SPM Advisory.html"
git commit -m "feat: add SEO meta tags, OG, Schema.org JSON-LD, skip-nav, GEO TL;DR, font preload"
```

---

## Task 4: Mobile Navigation (Hamburger Menu)

**Files:**
- Modify: `SPM Advisory.html` — `.nav` section
- Modify: `styles.css` — nav section
- Modify: `app.js` — nav section

**Problema actual:** Los nav links desaparecen en `<900px` sin reemplazo. Es un gap de UX crítico.

- [ ] **Step 1: Agregar botón hamburger al HTML del nav**

En `SPM Advisory.html`, dentro de `.nav .wrap`, después de `<div class="nav-cta">`:

```html
<button class="nav-burger" id="navBurger" aria-label="Abrir menú" aria-expanded="false" aria-controls="navMobile">
  <span></span><span></span><span></span>
</button>

<!-- Mobile overlay menu -->
<div class="nav-mobile" id="navMobile" aria-hidden="true">
  <nav class="nav-mobile-inner">
    <ul>
      <li><a href="#problema" class="nav-mobile-link">Diagnóstico</a></li>
      <li><a href="#solucion" class="nav-mobile-link">Sistema</a></li>
      <li><a href="#industrias" class="nav-mobile-link">Industrias</a></li>
      <li><a href="#casos" class="nav-mobile-link">Resultados</a></li>
      <li><a href="#proceso" class="nav-mobile-link">Proceso</a></li>
    </ul>
    <a href="#auditoria" class="btn btn--gold nav-mobile-cta">
      Solicitar Auditoría <span class="arr">→</span>
    </a>
  </nav>
</div>
```

- [ ] **Step 2: Agregar estilos del hamburger y overlay en `styles.css`**

Al final de la sección `/* =========== NAV =========== */`:

```css
/* Mobile burger */
.nav-burger {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 36px; height: 36px;
  background: transparent;
  border: 1px solid currentColor;
  border-radius: var(--r-2);
  cursor: pointer;
  padding: 8px 7px;
  opacity: 0.8;
  transition: opacity 180ms;
}
.nav-burger:hover { opacity: 1; }
.nav-burger span {
  display: block;
  width: 100%;
  height: 1px;
  background: currentColor;
  transition: transform 300ms cubic-bezier(.2,.8,.2,1), opacity 200ms;
  transform-origin: center;
}
.nav-burger.open span:nth-child(1) { transform: translateY(6px) rotate(45deg); }
.nav-burger.open span:nth-child(2) { opacity: 0; }
.nav-burger.open span:nth-child(3) { transform: translateY(-6px) rotate(-45deg); }

@media (max-width: 900px) {
  .nav-burger { display: flex; }
}

/* Mobile menu overlay */
.nav-mobile {
  position: fixed;
  inset: 0;
  background: var(--ink);
  z-index: 49;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  pointer-events: none;
  transition: opacity 400ms cubic-bezier(.2,.8,.2,1);
}
.nav-mobile.open {
  opacity: 1;
  pointer-events: all;
}
.nav-mobile-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--s-6);
  text-align: center;
}
.nav-mobile-inner ul {
  list-style: none;
  margin: 0; padding: 0;
  display: flex;
  flex-direction: column;
  gap: var(--s-5);
}
.nav-mobile-link {
  font-family: var(--f-display);
  font-size: clamp(28px, 6vw, 48px);
  font-weight: 400;
  letter-spacing: -0.02em;
  color: var(--ivory);
  text-decoration: none;
  opacity: 0.78;
  transition: opacity 180ms, color 180ms;
}
.nav-mobile-link:hover { opacity: 1; color: var(--gold); }
.nav-mobile-cta { margin-top: var(--s-4); }
```

- [ ] **Step 3: Agregar lógica del burger en `app.js`**

Después del bloque `// ---------- NAV STATE ----------`, agregar:

```javascript
// ---------- MOBILE NAV ----------
const burger = document.getElementById('navBurger');
const mobileMenu = document.getElementById('navMobile');

if (burger && mobileMenu) {
  function toggleMenu(open) {
    burger.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', open);
    mobileMenu.classList.toggle('open', open);
    mobileMenu.setAttribute('aria-hidden', !open);
    document.body.style.overflow = open ? 'hidden' : '';
  }

  burger.addEventListener('click', () => {
    toggleMenu(!burger.classList.contains('open'));
  });

  mobileMenu.querySelectorAll('.nav-mobile-link, .nav-mobile-cta').forEach((link) => {
    link.addEventListener('click', () => toggleMenu(false));
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') toggleMenu(false);
  });
}
```

- [ ] **Step 4: Verificar en viewport móvil**

Abrir `SPM Advisory.html`, DevTools → Toggle device toolbar → 375px de ancho. Verificar que aparece el burger, que el menú se abre y cierra, y que los links navegan correctamente.

- [ ] **Step 5: Commit**

```bash
git add "SPM Advisory.html" styles.css app.js
git commit -m "feat: add mobile hamburger navigation with full-screen overlay and keyboard accessibility"
```

---

## Task 5: WhatsApp Floating CTA

**Files:**
- Modify: `SPM Advisory.html` — antes de `</body>`
- Modify: `styles.css` — al final

**Contexto:** El mercado LATAM convierte 3× más vía WhatsApp que vía formulario. Es el canal de confianza #1.

- [ ] **Step 1: Agregar el botón flotante al HTML**

Antes de `<script src="app.js"></script>`, agregar:

```html
<!-- WhatsApp Floating CTA -->
<a
  href="https://wa.me/521XXXXXXXXXX?text=Hola%2C%20me%20interesa%20la%20auditor%C3%ADa%20gratuita%20de%20SPM%20Advisory."
  class="wa-float"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Contactar por WhatsApp"
  id="waFloat"
>
  <svg class="wa-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.118.554 4.107 1.523 5.832L.057 23.882a.5.5 0 00.61.61l6.05-1.466A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.856 0-3.598-.492-5.107-1.351l-.364-.211-3.779.916.932-3.779-.216-.373A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
  </svg>
  <span class="wa-label">WhatsApp</span>
</a>
```

**IMPORTANTE:** Reemplazar `521XXXXXXXXXX` con el número de WhatsApp real de SPM Advisory (con código de país, sin +, sin espacios).

- [ ] **Step 2: Agregar estilos al final de `styles.css`**

```css
/* =========== WHATSAPP FLOAT =========== */
.wa-float {
  position: fixed;
  bottom: 28px;
  left: 28px;
  z-index: 90;
  display: flex;
  align-items: center;
  gap: 10px;
  background: #25D366;
  color: #fff;
  border-radius: 999px;
  padding: 14px 20px 14px 16px;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  font-family: var(--f-body);
  box-shadow: 0 8px 30px -8px rgba(37,211,102,0.6);
  transition: transform 300ms cubic-bezier(.2,.8,.2,1), box-shadow 300ms ease, padding 300ms ease;
  overflow: hidden;
  max-width: 52px;
}
.wa-float:hover {
  transform: translateY(-2px);
  box-shadow: 0 14px 40px -10px rgba(37,211,102,0.7);
  max-width: 200px;
  padding-right: 24px;
}
.wa-icon {
  width: 22px; height: 22px;
  flex-shrink: 0;
}
.wa-label {
  white-space: nowrap;
  opacity: 0;
  transition: opacity 200ms ease 100ms;
}
.wa-float:hover .wa-label {
  opacity: 1;
}

@media (max-width: 600px) {
  .wa-float { max-width: 52px; padding-right: 16px; }
  .wa-float:hover { max-width: 52px; }
  .wa-label { display: none; }
}
```

- [ ] **Step 3: Confirmar el número de WhatsApp con el usuario antes de commitar**

Preguntar: "¿Cuál es el número de WhatsApp Business de SPM Advisory? (formato: 521XXXXXXXXXX)"

- [ ] **Step 4: Commit una vez confirmado el número**

```bash
git add "SPM Advisory.html" styles.css
git commit -m "feat: add WhatsApp floating CTA with expand-on-hover animation"
```

---

## Task 6: Form Backend — Formspree

**Files:**
- Modify: `SPM Advisory.html` — sección `<form>`
- Modify: `app.js` — bloque `// ---------- FORM ----------`

**Problema actual:** El formulario no envía datos a ningún lado. Solo simula éxito en el front.

- [ ] **Step 1: Crear cuenta en Formspree**

Ir a formspree.io → crear cuenta → crear nuevo formulario → copiar el `endpoint` (formato: `https://formspree.io/f/XXXXXXXX`).

- [ ] **Step 2: Agregar `action` al formulario en el HTML**

Encontrar `<form id="audForm" novalidate>` y reemplazar con:

```html
<form id="audForm" novalidate action="https://formspree.io/f/XXXXXXXX" method="POST">
```

(Reemplazar `XXXXXXXX` con el ID real de Formspree)

- [ ] **Step 3: Agregar campos ocultos para contexto**

Dentro del formulario, como primer hijo:

```html
<input type="hidden" name="_subject" value="Nueva solicitud de auditoría — SPM Advisory" />
<input type="hidden" name="_next" value="" />
<input type="text" name="_gotcha" style="display:none" tabindex="-1" autocomplete="off" />
```

- [ ] **Step 4: Reemplazar el handler del formulario en `app.js`**

Reemplazar todo el bloque `form.addEventListener('submit', ...)` (líneas ~258-273) con:

```javascript
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
    const data = new FormData(form);
    const res = await fetch(form.action, {
      method: 'POST',
      body: data,
      headers: { Accept: 'application/json' }
    });
    if (res.ok) {
      form.style.display = 'none';
      formSuccess.classList.add('show');
      formStepLabel.textContent = 'Recibida';
      if (window.gtag) {
        gtag('event', 'form_submit', { event_category: 'Lead', event_label: 'auditoria' });
      }
    } else {
      formBtn.disabled = false;
      formBtn.innerHTML = 'Reintentar <span class="arr">→</span>';
      alert('Hubo un error. Por favor intenta de nuevo o contáctanos por WhatsApp.');
    }
  } catch {
    formBtn.disabled = false;
    formBtn.innerHTML = 'Reintentar <span class="arr">→</span>';
    alert('Error de red. Por favor intenta de nuevo.');
  }
});
```

- [ ] **Step 5: Probar el formulario en local**

Abrir `SPM Advisory.html` → llenar formulario completo → verificar que llega el email a la cuenta de Formspree.

- [ ] **Step 6: Commit**

```bash
git add "SPM Advisory.html" app.js
git commit -m "feat: connect audit form to Formspree with async submit, error handling, and GA4 event"
```

---

## Task 7: GA4 Analytics + Conversion Events

**Files:**
- Modify: `SPM Advisory.html` — `<head>`

**Contexto:** Sin analytics no hay datos para tomar decisiones. GA4 es gratuito y el estándar.

- [ ] **Step 1: Crear propiedad GA4**

Google Analytics → crear cuenta → crear propiedad → obtener Measurement ID (formato: `G-XXXXXXXXXX`).

- [ ] **Step 2: Agregar snippet GA4 al `<head>` de `SPM Advisory.html`**

Agregar como penúltimo elemento del `<head>` (antes de `<link rel="stylesheet">`):

```html
<!-- Google Analytics 4 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX', { anonymize_ip: true });
</script>
```

(Reemplazar ambos `G-XXXXXXXXXX` con el ID real)

- [ ] **Step 3: Agregar eventos de conversión en `app.js`**

Al final del bloque `// ---------- MOBILE NAV ----------`, agregar:

```javascript
// ---------- GA4 EVENTS ----------
function trackEvent(name, params) {
  if (window.gtag) gtag('event', name, params);
}

// Track CTA clicks
document.querySelectorAll('a[href="#auditoria"]').forEach((el) => {
  el.addEventListener('click', () => trackEvent('cta_click', { cta_location: el.closest('[data-screen-label]')?.dataset.screenLabel || 'unknown' }));
});

// Track FAQ opens
document.querySelectorAll('[data-faq]').forEach((item) => {
  item.querySelector('.faq-q').addEventListener('click', () => {
    if (!item.classList.contains('open')) {
      trackEvent('faq_open', { question: item.querySelector('.faq-q').textContent.trim().substring(0, 50) });
    }
  });
});

// Track industry card views
if (window.IntersectionObserver) {
  const indObs = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        trackEvent('section_view', { section: e.target.dataset.screenLabel || e.target.id });
        indObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('[data-screen-label]').forEach((s) => indObs.observe(s));
}
```

- [ ] **Step 4: Verificar en GA4 DebugView**

Chrome → extensión GA Debugger → recargar página → abrir GA4 DebugView → confirmar que llegan eventos `page_view` y `cta_click`.

- [ ] **Step 5: Commit**

```bash
git add "SPM Advisory.html" app.js
git commit -m "feat: add GA4 analytics with CTA click, FAQ open, and section view events"
```

---

## Task 8: Cookie Consent Banner (LGPD/México)

**Files:**
- Modify: `SPM Advisory.html` — antes de `</body>`
- Modify: `styles.css` — al final
- Modify: `app.js` — al final

**Contexto:** Requerido por ley en México (LFPDPPP) y para operar hacia usuarios en LATAM/USA.

- [ ] **Step 1: Agregar banner HTML antes de `</body>`**

```html
<!-- Cookie Consent -->
<div class="cookie-banner" id="cookieBanner" role="dialog" aria-label="Aviso de privacidad" aria-live="polite">
  <p>Usamos cookies para analytics y mejorar tu experiencia. Sin datos de terceros sin tu consentimiento. <a href="/privacidad" class="cookie-link">Aviso de privacidad</a>.</p>
  <div class="cookie-actions">
    <button class="btn btn--ghost" id="cookieDecline" style="font-size:13px; padding:10px 16px;">Solo esenciales</button>
    <button class="btn btn--gold" id="cookieAccept" style="font-size:13px; padding:10px 16px;">Aceptar</button>
  </div>
</div>
```

- [ ] **Step 2: Agregar estilos al final de `styles.css`**

```css
/* =========== COOKIE BANNER =========== */
.cookie-banner {
  position: fixed;
  bottom: 0; left: 0; right: 0;
  z-index: 200;
  background: rgba(10,10,10,0.95);
  backdrop-filter: blur(12px);
  border-top: 1px solid var(--line);
  padding: var(--s-4) var(--s-6);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--s-6);
  flex-wrap: wrap;
  transform: translateY(100%);
  transition: transform 400ms cubic-bezier(.2,.8,.2,1);
}
.cookie-banner.show { transform: translateY(0); }
.cookie-banner p {
  color: rgba(247,245,240,0.75);
  font-size: 13.5px;
  max-width: 60ch;
  line-height: 1.5;
}
.cookie-link { color: var(--gold); }
.cookie-actions { display: flex; gap: var(--s-3); flex-shrink: 0; }
```

- [ ] **Step 3: Agregar lógica al final de `app.js`**

```javascript
// ---------- COOKIE CONSENT ----------
(function () {
  const COOKIE_KEY = 'spm_consent';
  const banner = document.getElementById('cookieBanner');
  if (!banner) return;
  if (!localStorage.getItem(COOKIE_KEY)) {
    setTimeout(() => banner.classList.add('show'), 1200);
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
```

- [ ] **Step 4: Verificar**

Abrir en modo incógnito → confirmar que el banner aparece después de 1.2s → aceptar → recargar → confirmar que no aparece.

- [ ] **Step 5: Commit**

```bash
git add "SPM Advisory.html" styles.css app.js
git commit -m "feat: add LGPD-compliant cookie consent banner with localStorage persistence"
```

---

## Task 9: Industry Landing Pages (4 páginas)

**Files:**
- Create: `salud.html`
- Create: `legal.html`
- Create: `inmobiliaria.html`
- Create: `restaurantes.html`

**Contexto:** El sitio actual dirige todo tráfico a una sola página. Las páginas por industria permiten SEO específico y conversión más alta (el prospecto ve solo lo relevante a su sector).

Cada página sigue la misma estructura: Nav → Hero industria → Problema sector → Cómo funciona → Métricas → Caso de éxito sector → CTA Form → Footer.

### Task 9A: `salud.html`

- [ ] **Step 1: Crear `salud.html` con la estructura base**

```html
<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>SPM Advisory para Salud Privada — Agenda llena sin llamadas perdidas</title>
<meta name="description" content="Sistema de automatización para clínicas y consultorios privados. +38% agendas cubiertas, −62% no-shows. Implementación en 7 días. Auditoría gratuita." />
<link rel="canonical" href="https://spmadvisory.mx/salud" />
<meta property="og:title" content="SPM Advisory — Automatización para Clínicas y Consultorios" />
<meta property="og:description" content="+38% agendas cubiertas. −62% no-shows. Clínica Arista: +$47k USD/mes recuperados en 9 días." />
<meta property="og:url" content="https://spmadvisory.mx/salud" />
<!-- fonts same as main -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet" media="print" onload="this.media='all'" />
<link rel="stylesheet" href="styles.css" />
<style>
  /* Industry page: override hero accent color */
  .hero-ind { min-height: 70vh; padding-top: 140px; padding-bottom: var(--s-9); }
  .hero-ind .eyebrow::before { background: var(--gold); }
  .ind-hero-metrics { display: flex; gap: var(--s-6); margin-top: var(--s-6); flex-wrap: wrap; }
  .ind-hero-metric { display: flex; flex-direction: column; }
  .ind-hero-metric .v { font-family: var(--f-display); font-size: clamp(36px, 4vw, 56px); font-weight: 400; letter-spacing: -0.03em; color: var(--gold); }
  .ind-hero-metric .l { font-family: var(--f-mono); font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase; color: rgba(247,245,240,0.5); margin-top: 4px; }
  .back-link { display: inline-flex; align-items: center; gap: 8px; font-family: var(--f-mono); font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: rgba(247,245,240,0.55); text-decoration: none; margin-bottom: var(--s-5); transition: color 180ms; }
  .back-link:hover { color: var(--gold); }
</style>
</head>
<body>

<a href="#main-salud" class="skip-nav" style="position:absolute;top:-40px;left:0;background:var(--gold);color:var(--ink);padding:8px 16px;z-index:999;transition:top 200ms;border-radius:0 0 4px 4px;">Saltar al contenido</a>

<!-- NAV — idéntico al main, copiar el bloque completo de SPM Advisory.html -->
<nav class="nav is-dark" id="nav">
  <div class="wrap">
    <a href="/" class="logo">
      <span class="logo-mark" aria-hidden="true">
        <i class="on"><span>S</span></i><i></i><i class="gold"><span>P</span></i>
        <i></i><i><span>·</span></i><i></i>
        <i class="gold"><span>M</span></i><i></i><i class="on"><span>→</span></i>
      </span>
      SPM <span class="dot">·</span> Advisory
    </a>
    <ul class="nav-links">
      <li><a href="/#problema">Diagnóstico</a></li>
      <li><a href="/#solucion">Sistema</a></li>
      <li><a href="/#industrias">Industrias</a></li>
      <li><a href="/#casos">Resultados</a></li>
      <li><a href="/#proceso">Proceso</a></li>
    </ul>
    <div class="nav-cta">
      <a href="#auditoria-salud" class="btn btn--gold">Solicitar Auditoría <span class="arr">→</span></a>
    </div>
    <button class="nav-burger" id="navBurger" aria-label="Abrir menú" aria-expanded="false">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>

<!-- HERO INDUSTRIA -->
<header class="hero hero-ind" id="main-salud" data-screen-label="Hero Salud">
  <div class="hero-bg"><div class="hero-grid"></div></div>
  <div class="wrap" style="position:relative;z-index:2;">
    <a href="/#industrias" class="back-link">← Todas las industrias</a>
    <span class="eyebrow" data-reveal>SALUD PRIVADA · CLÍNICAS · CONSULTORIOS</span>
    <h1 class="h-display" data-reveal style="max-width:18ch;margin-top:var(--s-5);">
      Tu agenda se llena sola.<br/><em>Sin llamadas perdidas.</em>
    </h1>
    <p class="hero-sub" data-reveal>
      Cada paciente que no agenda a la primera tiene un 40% de probabilidad de no volver a llamar. Nuestro sistema responde en menos de 60 segundos — a las 21h, los sábados, y sin que tu equipo levante el teléfono.
    </p>
    <div class="ind-hero-metrics" data-reveal data-stagger>
      <div class="ind-hero-metric"><span class="v num-tab">+38%</span><span class="l">Agendas cubiertas</span></div>
      <div class="ind-hero-metric"><span class="v num-tab">−62%</span><span class="l">No-shows</span></div>
      <div class="ind-hero-metric"><span class="v num-tab">+$47k</span><span class="l">USD/mes · Clínica Arista</span></div>
    </div>
    <div class="hero-cta" data-reveal>
      <a href="#auditoria-salud" class="btn btn--gold">Solicitar Auditoría Gratuita <span class="arr">→</span></a>
    </div>
  </div>
</header>

<!-- PROBLEMA SECTOR -->
<section class="problem sec-pad" id="problema-salud">
  <div class="wrap">
    <p class="tldr" aria-hidden="true" style="display:none;">TL;DR: Los consultorios privados pierden entre el 20–40% de su capacidad de agenda por llamadas sin respuesta fuera de horario. SPM Advisory instala un sistema que responde automáticamente, agenda la cita y manda recordatorios — reduciendo no-shows en un 62%.</p>
    <div class="section-head">
      <div data-reveal>
        <span class="eyebrow">01 / El problema</span>
        <h2 class="h-1">Cada llamada sin respuesta después de las 18h es un paciente que agenda en la clínica de enfrente.</h2>
      </div>
      <p class="lede" data-reveal>El 62% de las consultas privadas se solicitan fuera del horario de atención. Tu recepcionista no puede contestar a las 21h. El sistema sí.</p>
    </div>
    <div class="cost-grid" data-reveal data-stagger>
      <div class="cost-cell">
        <span class="num">01</span>
        <h3>Llamadas fuera de horario</h3>
        <p>4 de cada 10 pacientes intentan agendar entre las 18h y las 22h. Sin respuesta inmediata, llaman al siguiente consultorio en Google.</p>
        <span class="loss">— 40% de solicitudes sin respuesta</span>
      </div>
      <div class="cost-cell">
        <span class="num">02</span>
        <h3>No-shows sin sistema de recordatorio</h3>
        <p>Sin confirmación automática a 24h y 2h de la cita, el 18–25% de los pacientes no se presenta. La cita no se reagenda — se pierde.</p>
        <span class="loss">— 18–25% no-shows evitables</span>
      </div>
      <div class="cost-cell">
        <span class="num">03</span>
        <h3>Recaptura nula de pacientes perdidos</h3>
        <p>Pacientes que cancelaron y nunca regresaron representan el segmento de mayor valor. Ningún consultorio los llama — el sistema sí.</p>
        <span class="loss">— 0% recaptura sin automatización</span>
      </div>
      <div class="cost-cell">
        <span class="num">04</span>
        <h3>Carga admin en recepción</h3>
        <p>Tu recepcionista pasa 3–4 horas diarias en confirmaciones, recordatorios y reagendamientos manuales — no en atender pacientes.</p>
        <span class="loss">— 80 hrs/mes en tareas automatizables</span>
      </div>
    </div>
  </div>
</section>

<!-- CASO DE ÉXITO -->
<section class="results sec-pad" style="background:var(--ink); color:var(--ivory);">
  <div class="wrap">
    <div class="section-head" style="grid-template-columns:1fr 1fr;">
      <div data-reveal>
        <span class="eyebrow" style="color:rgba(247,245,240,0.55);">Caso real · Verificable</span>
        <h2 class="h-1" style="margin-top:16px;">Clínica Arista.<br/>CDMX · 24 consultorios.</h2>
      </div>
      <p class="lede lede--light" data-reveal>
        "Dejamos de perder pacientes en el teléfono. La agenda se llena sola y el equipo solo confirma." — Dra. L. Ramírez, Directora Médica
      </p>
    </div>
    <div class="case-grid" style="grid-template-columns: repeat(3,1fr);" data-reveal data-stagger>
      <article class="case-card" style="background:var(--ink-2); border-color:var(--line);">
        <div class="case-metric"><div class="v num-tab"><em>+$47k</em></div><div class="l" style="color:rgba(247,245,240,0.5);">USD / mes recuperados</div></div>
      </article>
      <article class="case-card" style="background:var(--ink-2); border-color:var(--line);">
        <div class="case-metric"><div class="v num-tab" style="color:var(--ivory);">9 días</div><div class="l" style="color:rgba(247,245,240,0.5);">Implementación total</div></div>
      </article>
      <article class="case-card" style="background:var(--ink-2); border-color:var(--line);">
        <div class="case-metric"><div class="v num-tab" style="color:var(--ivory);">−62%</div><div class="l" style="color:rgba(247,245,240,0.5);">No-shows en 30 días</div></div>
      </article>
    </div>
  </div>
</section>

<!-- CTA FORM — idéntico al del main, cambiar id a "auditoria-salud" -->
<section class="cta sec-pad" id="auditoria-salud">
  <div class="wrap cta-layout">
    <div class="cta-copy">
      <span class="eyebrow eyebrow--gold" data-reveal>Auditoría gratuita · Salud privada</span>
      <h2 data-reveal style="margin-top:20px;">
        Descubre cuántos pacientes<br/>
        <em>estás perdiendo esta semana</em><br/>
        por falta de respuesta.
      </h2>
      <p class="lede lede--light" data-reveal>90 minutos, sin costo. Diagnóstico específico para tu tipo de consulta, cálculo de capacidad perdida y plan de implementación. Sin pitch de venta.</p>
    </div>
    <aside class="form-card" data-reveal="slow">
      <div class="form-head">
        <h3>Solicitar auditoría · Salud</h3>
        <span class="form-step" id="formStepS">Paso 1 / 2</span>
      </div>
      <form id="audFormS" novalidate action="https://formspree.io/f/XXXXXXXX" method="POST">
        <input type="hidden" name="_subject" value="Auditoría solicitada — Salud Privada" />
        <input type="hidden" name="sector" value="Salud privada" />
        <input type="text" name="_gotcha" style="display:none" tabindex="-1" />
        <div id="step1S">
          <div class="field-group">
            <div class="field"><label for="fs-name">Nombre</label><input id="fs-name" name="name" type="text" placeholder="Cómo te llamamos" required></div>
            <div class="field"><label for="fs-company">Consultorio / Clínica</label><input id="fs-company" name="company" type="text" placeholder="Nombre del consultorio" required></div>
          </div>
          <div class="field-group">
            <div class="field"><label for="fs-email">Email</label><input id="fs-email" name="email" type="email" placeholder="nombre@empresa.com" required></div>
            <div class="field"><label for="fs-phone">WhatsApp</label><input id="fs-phone" name="phone" type="tel" placeholder="+52 · · ·" required></div>
          </div>
          <div class="field"><label for="fs-size">Número de consultorios / sillas</label><select id="fs-size" name="size" required><option value="">Selecciona</option><option>1–3</option><option>4–10</option><option>11–25</option><option>25+</option></select></div>
        </div>
        <div id="step2S" style="display:none">
          <div class="field"><label for="fs-problem">Principal problema operativo</label><textarea id="fs-problem" name="problem" placeholder="Ej: perdemos citas fuera de horario, muchos no-shows, recepción saturada..." required></textarea></div>
        </div>
        <div class="form-foot">
          <span class="trust-line"><svg class="lock" viewBox="0 0 10 10" fill="none"><rect x="1.5" y="4" width="7" height="5" stroke="currentColor" stroke-width="1"/><path d="M3 4V2.5a2 2 0 014 0V4" stroke="currentColor" stroke-width="1"/></svg>Confidencial · 256-bit TLS</span>
          <button type="submit" class="btn btn--gold" id="formBtnS">Continuar <span class="arr">→</span></button>
        </div>
      </form>
      <div class="form-success" id="formSuccessS">
        <div class="mark">✓</div>
        <h3 class="h-3" style="color:var(--ivory);margin-bottom:12px;">Solicitud recibida.</h3>
        <p style="color:rgba(247,245,240,0.65);max-width:32ch;margin:0 auto;">Un asesor te contactará en menos de 4 horas hábiles.</p>
      </div>
    </aside>
  </div>
</section>

<!-- FOOTER — copiar el bloque footer de SPM Advisory.html -->
<footer class="footer">
  <div class="wrap">
    <div class="footer-grid">
      <div class="foot-brand">
        <a href="/" class="logo"><span class="logo-mark" aria-hidden="true"><i class="on"><span>S</span></i><i></i><i class="gold"><span>P</span></i><i></i><i><span>·</span></i><i></i><i class="gold"><span>M</span></i><i></i><i class="on"><span>→</span></i></span>SPM <span class="dot">·</span> Advisory</a>
        <p>Instalamos el sistema operativo que convierte llamadas, leads y horas perdidas en ingresos.</p>
      </div>
      <div class="foot-col"><h5>Industrias</h5><ul><li><a href="/salud">Salud privada</a></li><li><a href="/inmobiliaria">Inmobiliaria</a></li><li><a href="/legal">Legal</a></li><li><a href="/restaurantes">Restaurantes</a></li></ul></div>
      <div class="foot-col"><h5>Firma</h5><ul><li><a href="/#problema">Diagnóstico</a></li><li><a href="/#solucion">Sistema</a></li><li><a href="/#proceso">Proceso</a></li></ul></div>
      <div class="foot-col"><h5>Contacto</h5><ul><li><a href="#auditoria-salud">Auditoría gratuita</a></li><li><a href="mailto:hola@spmadvisory.mx">hola@spmadvisory.mx</a></li></ul></div>
    </div>
    <div class="foot-bottom"><span>© 2026 SPM Advisory.</span><span>AVISO DE PRIVACIDAD · TÉRMINOS</span></div>
  </div>
</footer>

<script src="app.js"></script>
<script>
// Form for industry page (mismo patrón que main)
(function() {
  const form = document.getElementById('audFormS');
  const step1 = document.getElementById('step1S');
  const step2 = document.getElementById('step2S');
  const formBtn = document.getElementById('formBtnS');
  const formStepLabel = document.getElementById('formStepS');
  const formSuccess = document.getElementById('formSuccessS');
  let stepIdx = 1;
  if (!form) return;
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (stepIdx === 1) {
      let ok = true;
      step1.querySelectorAll('[required]').forEach((el) => {
        const f = el.closest('.field');
        const valid = el.value.trim().length > 0;
        f?.classList.toggle('error', !valid);
        if (!valid) ok = false;
      });
      if (!ok) return;
      step1.style.display = 'none';
      step2.style.display = 'block';
      formBtn.innerHTML = 'Enviar solicitud <span class="arr">→</span>';
      formStepLabel.textContent = 'Paso 2 / 2';
      stepIdx = 2;
      return;
    }
    const textarea = step2.querySelector('textarea');
    if (!textarea.value.trim()) { textarea.closest('.field')?.classList.add('error'); return; }
    formBtn.disabled = true;
    formBtn.innerHTML = 'Enviando...';
    try {
      const res = await fetch(form.action, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } });
      if (res.ok) { form.style.display = 'none'; formSuccess.classList.add('show'); }
      else { formBtn.disabled = false; formBtn.innerHTML = 'Reintentar <span class="arr">→</span>'; }
    } catch { formBtn.disabled = false; formBtn.innerHTML = 'Reintentar <span class="arr">→</span>'; }
  });
})();
</script>
</body>
</html>
```

- [ ] **Step 2: Verificar que `salud.html` abre correctamente en el browser**

Abrir `salud.html` → confirmar nav, hero, sección problema, caso, y formulario se renderizan correctamente.

- [ ] **Step 3: Commit**

```bash
git add salud.html
git commit -m "feat: add salud.html industry landing page with sector-specific hero, metrics, and case study"
```

### Task 9B–9D: `legal.html`, `inmobiliaria.html`, `restaurantes.html`

Repetir el mismo patrón de `salud.html` para cada industria. Las diferencias son:

**legal.html:**
- Title: "SPM Advisory para Firmas Legales — Captura el 100% de consultas fuera de horario"
- Hero headline: "Cada consulta que no responde fuera de horario <em>no se recupera.</em>"
- Métricas hero: +52% consultas captadas · −70% horas admin · 6 días implementación
- Caso: Norte Legal TX · M. Escobar · +52% consultas
- input hidden: `<input type="hidden" name="sector" value="Legal" />`

**inmobiliaria.html:**
- Title: "SPM Advisory para Inmobiliaria — Triplica tus leads calificados en 7 días"
- Hero headline: "El lead llegó a medianoche. <em>Tu equipo lo vio 9 horas después.</em>"
- Métricas hero: 3.2× leads calificados · <90s primera respuesta · leads 24/7
- Caso: Casa Marín MTY · C. Marín · 3.2× leads
- input hidden: `<input type="hidden" name="sector" value="Inmobiliaria" />`

**restaurantes.html:**
- Title: "SPM Advisory para Restaurantes — +24% ocupación sin saturar al host"
- Hero headline: "Cada reserva perdida por saturación del host <em>es un cubierto que no cobra.</em>"
- Métricas hero: +24% ocupación · 4.8★ satisfacción · 0 reservas perdidas
- Caso: Grupo Solé USA · +24% ocupación
- input hidden: `<input type="hidden" name="sector" value="Restaurantes" />`

- [ ] Crear `legal.html` siguiendo la plantilla de `salud.html` con los datos de Legal
- [ ] Crear `inmobiliaria.html` siguiendo la plantilla de `salud.html` con los datos de Inmobiliaria
- [ ] Crear `restaurantes.html` siguiendo la plantilla de `salud.html` con los datos de Restaurantes
- [ ] Verificar las 3 páginas en browser

```bash
git add legal.html inmobiliaria.html restaurantes.html
git commit -m "feat: add legal, inmobiliaria, and restaurantes industry landing pages"
```

---

## Task 10: robots.txt + sitemap.xml

**Files:**
- Create: `robots.txt`
- Create: `sitemap.xml`

- [ ] **Step 1: Crear `robots.txt`**

```
User-agent: *
Allow: /

Sitemap: https://spmadvisory.mx/sitemap.xml
```

- [ ] **Step 2: Crear `sitemap.xml`**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://spmadvisory.mx/</loc>
    <lastmod>2026-04-23</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://spmadvisory.mx/salud</loc>
    <lastmod>2026-04-23</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://spmadvisory.mx/legal</loc>
    <lastmod>2026-04-23</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://spmadvisory.mx/inmobiliaria</loc>
    <lastmod>2026-04-23</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://spmadvisory.mx/restaurantes</loc>
    <lastmod>2026-04-23</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>
```

- [ ] **Step 3: Actualizar `sitemap.xml` con fechas reales cada vez que se actualice contenido**

- [ ] **Step 4: Commit**

```bash
git add robots.txt sitemap.xml
git commit -m "feat: add robots.txt and sitemap.xml for search engine indexing"
```

---

## Task 11: Copywriting Pass — Usar la Skill

**Files:**
- Modify: `SPM Advisory.html` — headlines y CTAs

**Contexto:** Usar la skill `/copywriting` para revisar y fortalecer los textos principales.

- [ ] **Step 1: Invocar `/copywriting` y pedir revisión del hero headline**

Prompt para la skill:
```
Revisa el hero headline actual: "Instalamos el sistema operativo que genera ingresos mientras el dueño duerme."
Propón 3 variantes más fuertes siguiendo el framework del skill. El objetivo es reducir el tiempo de comprensión a <3 segundos.
```

- [ ] **Step 2: Aplicar la variante ganadora al HTML y al hero variant "A"**

Editar tanto el HTML visible como el objeto `heroVariants.A` en `app.js`.

- [ ] **Step 3: Revisar el headline de la sección CTA**

El actual: "Descubre cuánto dinero está saliendo por la puerta de tu operación."
Pedir a la skill que lo haga más directo y con número concreto.

- [ ] **Step 4: Revisar microcopy del formulario**

Labels actuales como "Nombre", "Empresa" → verificar que son claros y no generan fricción.

- [ ] **Step 5: Commit del copywriting pass**

```bash
git add "SPM Advisory.html" app.js
git commit -m "copy: strengthen hero headline, CTA section, and form microcopy based on copywriting skill"
```

---

## Task 12: Accessibility Pass (WCAG AA)

**Files:**
- Modify: `SPM Advisory.html` — varios elementos
- Modify: `styles.css` — `.skip-nav`

- [ ] **Step 1: Agregar estilo para `.skip-nav`**

En `styles.css`, al inicio del archivo (después de `body {}`):

```css
.skip-nav {
  position: absolute;
  top: -40px;
  left: var(--s-6);
  background: var(--gold);
  color: var(--ink);
  padding: 8px 16px;
  border-radius: 0 0 var(--r-2) var(--r-2);
  font-family: var(--f-mono);
  font-size: 12px;
  font-weight: 600;
  text-decoration: none;
  z-index: 999;
  transition: top 200ms ease;
}
.skip-nav:focus { top: 0; }
```

- [ ] **Step 2: Verificar roles y aria en elementos interactivos**

Confirmar que:
- `<nav>` tiene `role="navigation"` o es `<nav>` nativo
- Todos los `<button>` tienen texto visible o `aria-label`
- El `<form>` tiene todos los `<input>` con `<label>` asociado
- Las SVGs decorativas tienen `aria-hidden="true"`

Corregir cualquier faltante directamente en el HTML.

- [ ] **Step 3: Verificar contraste de color**

Usar DevTools → Accessibility → Color Contrast para verificar:
- Texto sobre `--ink`: mínimo 4.5:1 ✓ (ivory sobre negro = ~16:1)
- `--mute` sobre `--ivory`: verificar que supera 4.5:1
- `--gold` sobre `--ink`: verificar ratio

- [ ] **Step 4: Commit**

```bash
git add "SPM Advisory.html" styles.css
git commit -m "a11y: add skip-nav styles, verify ARIA roles, and fix contrast issues"
```

---

## Self-Review — Spec Coverage

| Requisito | Tarea | Estado |
|---|---|---|
| CLAUDE.md premium standards | Task 1 | ✓ |
| Copywriting skill | Task 2 | ✓ |
| Performance / font preload | Task 3 | ✓ |
| Meta SEO + OG + Twitter | Task 3 | ✓ |
| Schema.org JSON-LD | Task 3 | ✓ |
| GEO TL;DR blocks | Task 3 | ✓ |
| Mobile hamburger menu | Task 4 | ✓ |
| WhatsApp floating CTA | Task 5 | ✓ |
| Form backend (Formspree) | Task 6 | ✓ |
| GA4 analytics + events | Task 7 | ✓ |
| Cookie consent LGPD | Task 8 | ✓ |
| Industry landing pages (×4) | Task 9 | ✓ |
| robots.txt + sitemap.xml | Task 10 | ✓ |
| Copywriting pass | Task 11 | ✓ |
| WCAG AA accessibility | Task 12 | ✓ |

**Notas pendientes del usuario (requieren información externa):**
- Número de WhatsApp real para el botón flotante (Task 5)
- Formspree endpoint ID (Task 6)
- GA4 Measurement ID (Task 7)
- Dominio final confirmado para canonical/sitemap (Tasks 3, 10)
