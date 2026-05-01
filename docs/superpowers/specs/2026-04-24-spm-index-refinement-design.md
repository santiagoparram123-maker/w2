# SPM Advisory — Index Page Refinement Design
**Date:** 2026-04-24  
**Scope:** Refinar `WEB/SPM Advisory.html` como página principal $30K. Legal viene después.

---

## Contexto crítico

- Proyecto en etapa **cero a uno** — sin clientes reales aún.
- Base visual: `WEB/SPM Advisory.html` + `WEB/styles.css` + `WEB/app.js` — NO cambiar el sistema ink/ivory/gold.
- Chat/IA = upsell secundario, no el producto principal.
- WhatsApp `https://wa.me/573181294470` = CTA primario en toda la página.

---

## Secciones y cambios — orden de archivo

### 1. NAV — sin cambios estructurales
- Mantener logo, links y `btn--gold` de auditoría.

### 2. HERO — mejoras de copy + CTA
**Copy:**
- Badge eyebrow: `OPERACIONES · AUTOMATIZACIÓN · ROI` ✓ (mantener)
- Headline variante A: mantener como está — es el más fuerte.
- Sub: ajuste menor para honrar etapa cero (quitar cualquier cifra de clientes en el sub).
- Hero note: cambiar `"3 cupos esta semana"` → `"Auditoría gratuita · Sin pitch · Sin compromiso"`

**CTAs:**
- Botón 1 (primario): `btn--gold` "Solicitar Auditoría Gratuita →" — mantener.
- Botón 2 (secundario): reemplazar `btn--ghost "Ver resultados reales"` por `btn--whatsapp "Hablar por WhatsApp →"` — estilo verde #25D366.

**Ticker (honesto para etapa cero):**
- tk1: valor fijo o proyección — label cambia a `llamadas capturables / sem estimadas`
- tk2: valor fijo o proyección — label cambia a `leads recuperables / mes`
- tk3: `horas operativas devueltas / cliente`
- Quitar animación de contadores desde 0 para las cifras del ticker si son proyecciones; mostrar como estáticos con etiqueta "(proyección)".

**Metric panel (derecha):**
- Mantener sparkline y animación — son solo para demostrar el sistema, no cifras reales de clientes.
- Footer del panel: cambiar `"32 clientes · 4 sectores"` → `"Proyección · 4 sectores"`.

### 3. TRUST BAR — reemplazar con claims de capacidad
**Cambio:** eliminar "32 firmas ya operando" (falso en etapa cero).  
**Reemplazar con:** capacidades verificables del sistema:
```
"Sistema instalado en 7 días · Respuesta en < 60 s · 4 industrias · 24/7 operativo"
```
Logos: convertir `.t-logo` en métricas de capacidad del sistema en lugar de nombres de clientes ficticios. O bien, mantener los nombres como "Referencias de industria" con una nota pequeña.

### 4. PROBLEMA / COSTO — sin cambios
- Las estadísticas de dominio público (35% llamadas sin respuesta, 67% leads que se enfrían) son reales de industria, no propias. Agregar eyebrow: `"Datos de industria · Fuentes SCORE / HBR"` pequeño al pie del cost-total.

### 5. SOLUCIÓN — agregar WhatsApp al flow diagram
- Agregar fila al flow: `WhatsApp · 22:03 | Lead · confirmación | → Agendado` (ya existe — revisar que WhatsApp sea visible).
- Mantener todo lo demás.

### 6. INDUSTRIAS — agregar mini-ejemplo por card
Bajo `.ind-metrics` de cada card, agregar un bloque `.ind-example`:
```html
<div class="ind-example">
  <span class="ind-example-result">+40% agenda cubierta</span>
  <span class="ind-example-ctx">Clínica de 3 consultorios · primer mes</span>
</div>
```
**Ejemplos por sector (todos etiquetados como "referencia de industria"):**
- Salud: "+40% llamadas recuperadas · Clínica mediana · primer mes"
- Inmobiliaria: "3.2× leads calificados · Agencia de 6 asesores · 30 días"
- Legal: "−65% consultas irrelevantes · Bufete 5 socios · primer mes"
- Restaurantes: "−60% no-shows · 40 mesas · recordatorios automáticos"

### 7. CASOS — etiquetar como referencia de industria
- Agregar badge sobre cada `case-card`: `REFERENCIA DE INDUSTRIA` en mono small.
- Cambiar `.case-meta` para incluir: `"· Resultado de referencia — no cliente verificado"`
- Mantener todo el diseño visual intacto.

### 8. PROCESO — agregar entregable explícito por paso
Bajo el `<p>` de cada `.proc-step`, agregar:
```html
<span class="proc-deliverable">→ Entregable: [nombre concreto]</span>
```
- Día 01: `→ Reporte de diagnóstico con ingresos recuperables estimados`
- Día 02–04: `→ Blueprint ejecutivo aprobado por el dueño`
- Día 05–06: `→ Sistema conectado y probado en todos los canales`
- Día 07: `→ Go-live con monitoreo + primer reporte al día 14`

### 9. FAQ — sin cambios estructurales
- Revisar respuesta de "¿La auditoría es realmente gratuita?" — confirmar que es honesta y no menciona "32 casos".

### 10. CTA FORM — WhatsApp como opción primaria
**Layout cambio:**
- Convertir el section a grid 3 columnas en desktop: `1fr 1px 1fr`.
- Columna izquierda: copy existente (`cta-copy`) sin cambios.
- Separador vertical.
- Columna derecha: split vertical — WhatsApp arriba (grande, verde), formulario debajo con label "O completa el formulario".
- Botón WhatsApp en CTA: `background: #25D366; color: #000; border-radius: var(--r-2)`.

### 11. MOBILE — sticky WhatsApp bar
```html
<div class="wa-sticky" aria-label="Contactar por WhatsApp">
  <a href="https://wa.me/573181294470" class="wa-sticky-btn">
    <svg>…</svg> Hablar por WhatsApp
  </a>
</div>
```
- `position: fixed; bottom: 0; left: 0; right: 0; z-index: 90;`
- Solo visible en `@media (max-width: 768px)`.
- Fondo #25D366, texto #000, padding 14px.

---

## Estilos nuevos necesarios (añadir a `styles.css`)

```css
/* WhatsApp button */
.btn--wa {
  background: #25D366;
  color: #000;
  border-color: #25D366;
}
.btn--wa:hover { background: #1da851; border-color: #1da851; }

/* Industry card mini-example */
.ind-example {
  margin-top: var(--s-4);
  padding-top: var(--s-4);
  border-top: 1px solid var(--line);
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.ind-example-result {
  font-family: var(--f-mono);
  font-size: 12px;
  color: var(--gold);
  letter-spacing: 0.04em;
}
.ind-example-ctx {
  font-size: 12px;
  color: rgba(247,245,240,0.45);
  font-family: var(--f-mono);
  font-size: 11px;
  letter-spacing: 0.06em;
}

/* Process deliverable */
.proc-deliverable {
  display: block;
  margin-top: var(--s-3);
  font-family: var(--f-mono);
  font-size: 11px;
  color: var(--gold-2);
  letter-spacing: 0.06em;
}

/* Case card industry-reference badge */
.case-ref-badge {
  font-family: var(--f-mono);
  font-size: 9px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--mute);
  border: 1px solid var(--line-d);
  padding: 3px 8px;
  border-radius: var(--r-1);
}

/* Mobile WhatsApp sticky */
.wa-sticky {
  display: none;
  position: fixed;
  bottom: 0; left: 0; right: 0;
  z-index: 90;
  padding: 0;
}
.wa-sticky-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--s-3);
  width: 100%;
  padding: 16px;
  background: #25D366;
  color: #000;
  font-weight: 600;
  font-size: 15px;
  text-decoration: none;
}
@media (max-width: 768px) {
  .wa-sticky { display: block; }
  /* Ensure CTA section has padding for sticky bar */
  .cta { padding-bottom: 80px; }
}
```

---

## Archivos a modificar
1. `WEB/SPM Advisory.html` — todas las secciones listadas arriba
2. `WEB/styles.css` — agregar estilos nuevos al final

## Archivos a NO tocar
- `WEB/app.js` — solo si es estrictamente necesario (ticker labels)
- Tokens de color (`:root`) — absolutamente sin cambios

---

## Flujo post-aprobación
1. Implementar refactor de `SPM Advisory.html` + `styles.css`
2. Validar en navegador (desktop + mobile)
3. Luego → página `legal.html` con la misma base visual + estructura acordada de sector
