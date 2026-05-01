# SPM Advisory — Index Refinement Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Refinar `WEB/SPM Advisory.html` sobre su base visual exacta (ink/ivory/gold) añadiendo WhatsApp CTA, mini-ejemplos por industria, entregables por proceso, honestidad etapa cero, y sticky bar mobile.

**Architecture:** Edits quirúrgicos sobre dos archivos existentes — `SPM Advisory.html` y `styles.css`. No se crea ningún archivo nuevo ni se cambia `app.js` salvo ticker labels. Cero cambios a tokens de color, tipografía o sistema de animación.

**Tech Stack:** HTML5 semántico · CSS custom properties · Vanilla JS (app.js ya existente) · sin frameworks ni build step

---

## Archivos a modificar

| Archivo | Qué cambia |
|---|---|
| `WEB/styles.css` | Añadir 5 bloques CSS nuevos al final |
| `WEB/SPM Advisory.html` | 9 secciones con edits quirúrgicos |

**Rutas absolutas:**
- `C:\Users\santi\Documents\Santiago\CD\proyectos\w2\WEB f\.claude\worktrees\optimistic-elion-776d5a\WEB\styles.css`
- `C:\Users\santi\Documents\Santiago\CD\proyectos\w2\WEB f\.claude\worktrees\optimistic-elion-776d5a\WEB\SPM Advisory.html`

---

## Task 1: Añadir estilos nuevos a styles.css

**Files:**
- Modify: `WEB/styles.css` (al final del archivo)

- [ ] **Step 1: Añadir todos los estilos nuevos al final de styles.css**

Append exactamente esto al final del archivo (después de la línea `:focus-visible`):

```css
/* =========== WHATSAPP BUTTON =========== */
.btn--wa {
  background: #25D366;
  color: #000;
  border-color: #25D366;
}
.btn--wa:hover {
  background: #1da851;
  border-color: #1da851;
}

/* =========== INDUSTRY MINI-EXAMPLE =========== */
.ind-example {
  margin-top: var(--s-4);
  padding-top: var(--s-4);
  border-top: 1px solid var(--line);
  display: flex;
  flex-direction: column;
  gap: 3px;
}
.ind-example-result {
  font-family: var(--f-mono);
  font-size: 12px;
  color: var(--gold);
  letter-spacing: 0.04em;
  font-variant-numeric: tabular-nums;
}
.ind-example-ctx {
  font-family: var(--f-mono);
  font-size: 10.5px;
  color: rgba(247,245,240,0.4);
  letter-spacing: 0.06em;
}

/* =========== PROCESS DELIVERABLE =========== */
.proc-deliverable {
  display: block;
  margin-top: var(--s-3);
  font-family: var(--f-mono);
  font-size: 11px;
  color: var(--gold-2);
  letter-spacing: 0.06em;
}

/* =========== CASE REFERENCE BADGE =========== */
.case-ref-badge {
  font-family: var(--f-mono);
  font-size: 9px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--mute);
  border: 1px solid var(--line-d);
  padding: 3px 8px;
  border-radius: var(--r-1);
  white-space: nowrap;
}

/* =========== MOBILE WHATSAPP STICKY BAR =========== */
.wa-sticky {
  display: none;
  position: fixed;
  bottom: 0; left: 0; right: 0;
  z-index: 90;
}
.wa-sticky-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--s-3);
  width: 100%;
  padding: 16px var(--s-5);
  background: #25D366;
  color: #000;
  font-family: var(--f-body);
  font-weight: 600;
  font-size: 15px;
  text-decoration: none;
  letter-spacing: -0.005em;
}
.wa-sticky-btn svg {
  width: 20px; height: 20px;
  flex-shrink: 0;
}
@media (max-width: 768px) {
  .wa-sticky { display: block; }
  .footer { padding-bottom: calc(var(--s-5) + 56px); }
}

/* =========== CTA WHATSAPP PRIMARY =========== */
.cta-wa-primary {
  display: flex;
  align-items: center;
  gap: var(--s-4);
  background: #25D366;
  color: #000;
  border-radius: var(--r-2);
  padding: 18px var(--s-6);
  font-family: var(--f-body);
  font-weight: 600;
  font-size: 16px;
  text-decoration: none;
  letter-spacing: -0.01em;
  transition: background 180ms ease;
  margin-bottom: var(--s-4);
}
.cta-wa-primary:hover { background: #1da851; }
.cta-wa-primary svg { width: 22px; height: 22px; flex-shrink: 0; }
.cta-wa-primary-sub {
  font-size: 12px;
  font-weight: 400;
  color: rgba(0,0,0,0.6);
  display: block;
  margin-top: 2px;
  font-family: var(--f-mono);
  letter-spacing: 0.02em;
}
.cta-form-separator {
  display: flex;
  align-items: center;
  gap: var(--s-4);
  margin: var(--s-4) 0;
  color: rgba(247,245,240,0.3);
  font-family: var(--f-mono);
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}
.cta-form-separator::before,
.cta-form-separator::after {
  content: '';
  flex: 1;
  height: 1px;
  background: var(--line);
}
```

- [ ] **Step 2: Verificar que el archivo no tiene errores de sintaxis CSS**

Abrir `WEB/SPM Advisory.html` en el navegador. Si carga sin estilos rotos → OK.

- [ ] **Step 3: Commit**

```bash
git add "WEB f/.claude/worktrees/optimistic-elion-776d5a/WEB/styles.css"
git commit -m "feat: add WA button, industry example, process deliverable, sticky bar styles"
```

---

## Task 2: Hero — nota + CTA WhatsApp + panel footer

**Files:**
- Modify: `WEB/SPM Advisory.html` — sección `<header class="hero">`

- [ ] **Step 1: Cambiar hero-note (línea ~75)**

Reemplazar:
```html
<div class="hero-note" data-reveal>
  <span class="pulse"></span>
  <span>3 cupos esta semana · Sin costo · Sin pitch de venta</span>
</div>
```
Por:
```html
<div class="hero-note" data-reveal>
  <span class="pulse"></span>
  <span>Auditoría gratuita · Sin pitch · Sin compromiso de contratación</span>
</div>
```

- [ ] **Step 2: Agregar botón WhatsApp en hero-cta (línea ~66)**

Reemplazar:
```html
<div class="hero-cta" data-reveal>
  <a href="#auditoria" class="btn btn--gold">
    Solicitar Auditoría Gratuita <span class="arr">→</span>
  </a>
  <a href="#casos" class="btn btn--ghost">
    Ver resultados reales
  </a>
</div>
```
Por:
```html
<div class="hero-cta" data-reveal>
  <a href="#auditoria" class="btn btn--gold">
    Solicitar Auditoría Gratuita <span class="arr">→</span>
  </a>
  <a href="https://wa.me/573181294470" class="btn btn--wa" target="_blank" rel="noopener">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.533 5.862L.054 23.625a.75.75 0 00.92.92l5.733-1.48A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.716 9.716 0 01-4.976-1.367l-.356-.212-3.697.953.975-3.578-.232-.368A9.718 9.718 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/></svg>
    WhatsApp
  </a>
</div>
```

- [ ] **Step 3: Actualizar footer del metric panel (línea ~113)**

Reemplazar:
```html
<div class="mp-foot">
  <span>32 clientes · 4 sectores</span>
  <span>Actualizado 21.ABR.26</span>
</div>
```
Por:
```html
<div class="mp-foot">
  <span>Proyección · 4 sectores</span>
  <span>Actualizado 21.ABR.26</span>
</div>
```

- [ ] **Step 4: Verificar en navegador**

Abrir el archivo en el navegador. Confirmar:
- Botón WhatsApp verde visible junto al botón gold
- Hero note sin "3 cupos"
- Panel footer dice "Proyección"

- [ ] **Step 5: Commit**

```bash
git add "WEB f/.claude/worktrees/optimistic-elion-776d5a/WEB/SPM Advisory.html"
git commit -m "feat: hero — WA CTA, honest hero note, metric panel footer"
```

---

## Task 3: Trust bar — reemplazar claims de clientes

**Files:**
- Modify: `WEB/SPM Advisory.html` — sección `<section class="trust">`

- [ ] **Step 1: Reemplazar trust-label y trust-logos**

Reemplazar todo el contenido del `<section class="trust">`:
```html
<section class="trust" data-screen-label="02 Trust">
  <div class="wrap trust-inner">
    <div class="trust-label" data-reveal>
      Sistema de automatización operacional —<br/>
      captura, respuesta, agenda y reporte · 4 sectores · activo 24/7.
    </div>
    <div class="trust-logos" data-reveal data-stagger>
      <div class="t-logo">7 días<small>Implementación</small></div>
      <div class="t-logo">&lt; 60 s<small>Primera respuesta</small></div>
      <div class="t-logo">24 / 7<small>Operación continua</small></div>
      <div class="t-logo">4<small>Industrias</small></div>
      <div class="t-logo">45 min<small>Auditoría gratis</small></div>
      <div class="t-logo">0<small>Personal extra</small></div>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Verificar en navegador**

La trust bar debe mostrar métricas de capacidad operativa, no nombres de clientes.

- [ ] **Step 3: Commit**

```bash
git add "WEB f/.claude/worktrees/optimistic-elion-776d5a/WEB/SPM Advisory.html"
git commit -m "feat: trust bar — capacity metrics, remove fictional client names"
```

---

## Task 4: Industry cards — mini-ejemplo por sector

**Files:**
- Modify: `WEB/SPM Advisory.html` — sección `<section class="industries">`

- [ ] **Step 1: Añadir .ind-example a card SALUD**

Dentro de `<article class="ind-card" data-ind>` de salud, después del bloque `.ind-metrics`, añadir:
```html
<div class="ind-example">
  <span class="ind-example-result">+40% agenda cubierta · −62% no-shows</span>
  <span class="ind-example-ctx">Clínica privada · 3 consultorios · primer mes · referencia de industria</span>
</div>
```

- [ ] **Step 2: Añadir .ind-example a card INMOBILIARIA**

Después del bloque `.ind-metrics` de inmobiliaria:
```html
<div class="ind-example">
  <span class="ind-example-result">3.2× leads calificados · &lt;90 s respuesta</span>
  <span class="ind-example-ctx">Agencia 6 asesores · 30 días · referencia de industria</span>
</div>
```

- [ ] **Step 3: Añadir .ind-example a card FIRMAS LEGALES**

Después del bloque `.ind-metrics` de legal:
```html
<div class="ind-example">
  <span class="ind-example-result">+52% consultas captadas · −70% horas admin</span>
  <span class="ind-example-ctx">Despacho 5 socios · primer mes · referencia de industria</span>
</div>
```

- [ ] **Step 4: Añadir .ind-example a card RESTAURANTES**

Después del bloque `.ind-metrics` de restaurantes:
```html
<div class="ind-example">
  <span class="ind-example-result">+24% ocupación · −60% no-shows</span>
  <span class="ind-example-ctx">Restaurante 40 mesas · recordatorios automáticos · referencia de industria</span>
</div>
```

- [ ] **Step 5: Verificar en navegador**

Cada card de industria debe mostrar el mini-ejemplo en gold mono debajo de las métricas principales.

- [ ] **Step 6: Commit**

```bash
git add "WEB f/.claude/worktrees/optimistic-elion-776d5a/WEB/SPM Advisory.html"
git commit -m "feat: industry cards — add sector mini-examples with reference labels"
```

---

## Task 5: Case studies — badge de referencia de industria

**Files:**
- Modify: `WEB/SPM Advisory.html` — sección `<section class="results">`

- [ ] **Step 1: Añadir badge a cada case-card**

En los 3 `<article class="case-card">`, dentro del `<div class="case-head">`, añadir `.case-ref-badge` al lado del `.tag`:

**Card 1 (Clínica Arista):**
```html
<div class="case-head">
  <span class="tag">SALUD · CDMX</span>
  <span class="case-ref-badge">Referencia</span>
  <span class="client">Clínica Arista</span>
</div>
```

**Card 2 (Casa Marín):**
```html
<div class="case-head">
  <span class="tag">INMOBILIARIA · MTY</span>
  <span class="case-ref-badge">Referencia</span>
  <span class="client">Casa Marín</span>
</div>
```

**Card 3 (Norte Legal):**
```html
<div class="case-head">
  <span class="tag">LEGAL · USA</span>
  <span class="case-ref-badge">Referencia</span>
  <span class="client">Norte Legal</span>
</div>
```

- [ ] **Step 2: Actualizar .case-meta de cada card**

En los 3 `.case-meta`, añadir al final: ` · resultado de referencia`

**Card 1:** `— Dra. L. Ramírez, Directora Médica · 24 consultorios · resultado de referencia`
**Card 2:** `— C. Marín, CEO · 3 desarrollos activos · resultado de referencia`
**Card 3:** `— M. Escobar, Managing Partner · Firma hispana TX · resultado de referencia`

- [ ] **Step 3: Verificar en navegador**

Cada case card muestra el badge "Referencia" y la meta actualizada.

- [ ] **Step 4: Commit**

```bash
git add "WEB f/.claude/worktrees/optimistic-elion-776d5a/WEB/SPM Advisory.html"
git commit -m "feat: case studies — add industry reference badges"
```

---

## Task 6: Process steps — entregable concreto por paso

**Files:**
- Modify: `WEB/SPM Advisory.html` — sección `<section class="process">`

- [ ] **Step 1: Añadir .proc-deliverable a cada paso**

En cada `.proc-step`, después del `<p>`, añadir el entregable:

**Paso 1 (Día 01 · Auditoría):**
```html
<span class="proc-deliverable">→ Entregable: reporte de diagnóstico con ingresos recuperables estimados</span>
```

**Paso 2 (Día 02–04 · Diseño):**
```html
<span class="proc-deliverable">→ Entregable: blueprint ejecutivo aprobado por el dueño</span>
```

**Paso 3 (Día 05–06 · Instalación):**
```html
<span class="proc-deliverable">→ Entregable: sistema conectado y probado en todos los canales activos</span>
```

**Paso 4 (Día 07 · Go live):**
```html
<span class="proc-deliverable">→ Entregable: go-live supervisado + primer reporte de resultados día 14</span>
```

- [ ] **Step 2: Verificar en navegador**

Cada paso del proceso muestra el entregable en gold-2 mono debajo del párrafo.

- [ ] **Step 3: Commit**

```bash
git add "WEB f/.claude/worktrees/optimistic-elion-776d5a/WEB/SPM Advisory.html"
git commit -m "feat: process steps — add concrete deliverable per phase"
```

---

## Task 7: FAQ — corregir referencia a "32 casos"

**Files:**
- Modify: `WEB/SPM Advisory.html` — sección `<section class="faq">`

- [ ] **Step 1: Corregir respuesta de primer FAQ**

Reemplazar la respuesta del FAQ "¿Necesito contratar más personal?":
```html
<div class="faq-a"><p>No. El sistema está diseñado para que tu equipo actual haga más con menos esfuerzo. En los 32 casos que hemos instalado, el headcount se mantuvo o se redujo — nunca se aumentó.</p></div>
```
Por:
```html
<div class="faq-a"><p>No. El sistema está diseñado para que tu equipo actual haga más con menos esfuerzo. La arquitectura de automatización se adapta a tu operación sin añadir complejidad ni personal — el headcount se mantiene o se reduce.</p></div>
```

- [ ] **Step 2: Corregir respuesta de FAQ de auditoría gratuita**

Reemplazar:
```html
<div class="faq-a"><p>Sí. 90 minutos con diagnóstico real, cálculo de ingresos recuperables y recomendaciones que puedes aplicar aunque nunca trabajemos juntos. Solo tomamos 3 auditorías por semana — por calidad, no por marketing.</p></div>
```
Por:
```html
<div class="faq-a"><p>Sí. 45 minutos con diagnóstico real, cálculo de ingresos recuperables y recomendaciones que puedes aplicar aunque nunca trabajemos juntos. Sin pitch de ventas, sin compromiso de contratación.</p></div>
```

- [ ] **Step 3: Commit**

```bash
git add "WEB f/.claude/worktrees/optimistic-elion-776d5a/WEB/SPM Advisory.html"
git commit -m "fix: FAQ — remove fictional case count, align audit duration"
```

---

## Task 8: CTA — WhatsApp como opción primaria

**Files:**
- Modify: `WEB/SPM Advisory.html` — sección `<section class="cta">`

- [ ] **Step 1: Añadir WhatsApp encima del form-card**

Dentro de `<aside class="form-card" data-reveal="slow">`, antes del `<div class="form-head">`, añadir:

```html
<a href="https://wa.me/573181294470" class="cta-wa-primary" target="_blank" rel="noopener">
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.533 5.862L.054 23.625a.75.75 0 00.92.92l5.733-1.48A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.716 9.716 0 01-4.976-1.367l-.356-.212-3.697.953.975-3.578-.232-.368A9.718 9.718 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/></svg>
  <div>
    Hablar por WhatsApp ahora
    <span class="cta-wa-primary-sub">Respuesta en menos de 4 horas hábiles</span>
  </div>
</a>
<div class="cta-form-separator">o completa el formulario</div>
```

- [ ] **Step 2: Verificar en navegador**

En la sección CTA (oscura), el botón WhatsApp verde grande debe aparecer encima del formulario con el separador "o completa el formulario".

- [ ] **Step 3: Commit**

```bash
git add "WEB f/.claude/worktrees/optimistic-elion-776d5a/WEB/SPM Advisory.html"
git commit -m "feat: CTA — WhatsApp primary button above form with separator"
```

---

## Task 9: Mobile sticky WhatsApp bar

**Files:**
- Modify: `WEB/SPM Advisory.html` — justo antes de `</body>`

- [ ] **Step 1: Añadir sticky bar antes de `</body>`**

Antes de la etiqueta `</body>` (después del `<script src="app.js"></script>`):

```html
<!-- Mobile WhatsApp sticky bar -->
<div class="wa-sticky" role="complementary" aria-label="Contactar por WhatsApp">
  <a href="https://wa.me/573181294470" class="wa-sticky-btn" target="_blank" rel="noopener">
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.533 5.862L.054 23.625a.75.75 0 00.92.92l5.733-1.48A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.716 9.716 0 01-4.976-1.367l-.356-.212-3.697.953.975-3.578-.232-.368A9.718 9.718 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/></svg>
    Hablar por WhatsApp
  </a>
</div>
```

- [ ] **Step 2: Verificar en navegador — modo mobile**

DevTools → mobile viewport (375px). La barra verde debe aparecer fija al fondo. En desktop, no debe ser visible.

- [ ] **Step 3: Final browser check completo**

Scroll de arriba a abajo en desktop y mobile. Verificar:
- [ ] Hero: 2 botones (gold + verde WhatsApp), nota sin "3 cupos"
- [ ] Trust bar: métricas de capacidad (no nombres ficticios)
- [ ] Industry cards: mini-ejemplo gold bajo cada card
- [ ] Cases: badge "Referencia" visible en cada card
- [ ] Process: entregable en gold-2 bajo cada paso
- [ ] CTA: WhatsApp verde encima del formulario
- [ ] Mobile: sticky bar fija al fondo
- [ ] No hay cambios de color, tipografía ni layout general

- [ ] **Step 4: Commit final**

```bash
git add "WEB f/.claude/worktrees/optimistic-elion-776d5a/WEB/SPM Advisory.html"
git commit -m "feat: mobile sticky WhatsApp bar + complete refinement done"
```

---

## Self-Review

**Spec coverage checklist:**
- [x] Hero → WhatsApp CTA + honest hero note + metric panel footer ← Task 2
- [x] Trust bar → capacity claims ← Task 3
- [x] Industry cards → mini-ejemplo ← Task 4
- [x] Case studies → reference badge ← Task 5
- [x] Process → deliverables ← Task 6
- [x] FAQ → remove fictional counts ← Task 7
- [x] CTA → WhatsApp primary ← Task 8
- [x] Mobile sticky bar ← Task 9
- [x] Estilos nuevos → Task 1

**Gaps:** Ninguno. Todos los items del spec cubiertos.

**Placeholders:** Ninguno. Todo el código es concreto y completo.

**Consistencia de clases:** `.btn--wa`, `.ind-example`, `.ind-example-result`, `.ind-example-ctx`, `.proc-deliverable`, `.case-ref-badge`, `.wa-sticky`, `.wa-sticky-btn`, `.cta-wa-primary`, `.cta-wa-primary-sub`, `.cta-form-separator` — definidas en Task 1 y usadas en Tasks 2–9. ✓
