## graphify

This project has a graphify knowledge graph at graphify-out/.

Rules:
- Before answering architecture or codebase questions, read graphify-out/GRAPH_REPORT.md for god nodes and community structure
- If graphify-out/wiki/index.md exists, navigate it instead of reading raw files
- After modifying code files in this session, run `graphify update .` to keep the graph current (AST-only, no API cost)

---

## CLAUDE.md — Directrices de Diseño y Arquitectura Premium

### Visión del Proyecto
Plataforma web de alto estándar ($10k USD). Herramienta operativa orientada a la conversión — diseño que transmita confianza absoluta y sofisticación para el mercado B2B hispano (MX/USA/CO), empresas de 5–50 empleados.

### Stack Técnico
**Frontend:** HTML5 semántico · CSS custom properties (design tokens) · Vanilla JS  
**Tipografía:** Inter (body) · Instrument Serif (accent italic) · JetBrains Mono (mono/eyebrow)  
**Acento:** `#C49A4A` (gold) — no cambiar sin decisión de marca  
**Backend/DB:** Formspree (form submission) · GA4 (analytics) · ningún servidor propio  
**Deploy:** GitHub Pages → dominio `https://spminvestor.shop/`  
**WhatsApp:** +57 318 1294470

### Design Tokens (NO modificar sin justificación)
```css
--ink: #0A0A0A;              /* negro base */
--ivory: #F7F5F0;            /* fondo claro */
--gold: #C49A4A;             /* acento único */
--f-display: "Inter";        /* headlines */
--f-mono: "JetBrains Mono"; /* eyebrows, datos */
```

### Reglas Estrictas de UI/UX
- PROHIBIDO diseño genérico. Cada elemento tiene intención documentada.
- Sistema de design tokens: ningún color o tamaño hardcodeado fuera de `:root`.
- Minimalista e intencional. Espacios en blanco son diseño, no vacío.
- Todo el marcado es semántico (`<nav>`, `<main>`, `<article>`, `<aside>`, `<section>`).
- WCAG AA obligatorio: contraste mínimo 4.5:1, focus-visible en todos los interactivos.
- GEO (Generative Engine Optimization): cada sección tiene un `<p class="tldr">` con resumen directo para extracción por LLMs.

### Estándares de Código
- Funciones de más de 30 líneas → revisar y dividir.
- Performance objetivo: LCP < 2.5s, CLS < 0.1, FID < 100ms.
- Google Fonts: siempre con `font-display: swap` y carga diferida con `media="print"`.
- No comentarios obvios. Solo comentar WHY, nunca WHAT.
- Sin feature flags ni backwards-compat shims — cambiar el código directo.

### Copywriting
- Usar la skill `/copywriting` para cualquier texto del sitio.
- Cada headline contiene un número concreto o resultado específico.
- CTA siempre = verbo de acción + promesa concreta.
- Zero buzzwords en español de marketing.

---

## Estado del Proyecto — Contexto Crítico

### Etapa actual: CERO A UNO
- El proyecto está iniciando desde cero. No hay clientes reales aún.
- Los testimonios, casos de éxito y métricas en las páginas actuales son **ilustrativos/ficticios** — deben marcarse como "resultados estimados" o reemplazarse cuando lleguen clientes reales.
- La garantía (ej. "14 días sin resultados = no pagas") aún **no tiene términos definidos** — no hardcodear sin confirmación del dueño.
- Las estadísticas de sector (ej. "35% de llamadas se pierden") son de dominio público / referencia, no propias.

### Producto Principal vs Upsell
- **Producto principal:** Sistema operativo de automatización, instalado en 7 días hábiles.
- **Chat / asistente IA:** Es un **upsell**, no el producto central. Mencionarlo dentro de Features como capacidad adicional, nunca como la promesa principal.
- El copy nunca debe posicionar el chat como diferenciador — el diferenciador es la velocidad (7 días) y el resultado medible.

### Páginas de Sector Activas
- `legal.html` — Firmas legales y abogados
- `restaurantes.html` — Restaurantes
- `salud.html` — Salud privada y med spas
- `inmobiliaria.html` — Bienes raíces

### Estructura de Página Acordada (conversión-first)
Cada página de sector debe seguir este orden:
1. **Hero** — headline + sub-headline con resultado específico + CTA WhatsApp visible
2. **Dolor específico** — stat grande + lista de pain points
3. **Cómo Funciona** — 3 cards paralelas (Fase 1: Auditoría · Fase 2: Instalación · Fase 3: Resultado), cada una con entregable concreto y plazo
4. **Features 3 columnas** — capacidades del sistema
5. **Caso de éxito** — métricas animadas + cita (marcar como ilustrativo hasta tener reales)
6. **Garantía de riesgo cero** — sección dedicada, términos por confirmar
7. **Tabla comparativa** — manual vs sistema S.P.M.
8. **CTA final** — WhatsApp como primario, formulario como alternativa; sticky bar en mobile

### CTA y Contacto
- **WhatsApp es el CTA primario** en todas las páginas: `https://wa.me/573181294470`
- El formulario (Formspree) es CTA secundario / alternativa.
- En mobile: sticky bar inferior con botón de WhatsApp siempre visible.

### Arquitectura de Marca — La Madre y las Hijas

**Concepto central:** `SPM Advisory.html` es la madre. Las páginas de sector son las hijas.

- **La madre** tiene identidad propia y única — es la voz de autoridad cross-sector. Su copy habla en universal: cualquier operación, cualquier industria. El tono es más ambicioso y ejecutivo. No se especializa en ningún sector.
- **Las hijas** (legal.html, restaurantes.html, salud.html, inmobiliaria.html) heredan el DNA visual y estructural de la madre pero cada una tiene su propia identidad:
  - Copy en el idioma de ese dueño (abogado, médico, chef, asesor)
  - Color de acento secundario distinto (además del gold base)
  - Pain points, métricas y casos específicos del sector
  - El tono se adapta al arquetipo de ese cliente

**Por qué importa:** Transmite que SPM se adapta al cliente — no al revés. Versatilidad y profundidad al mismo tiempo. La madre da confianza cross-sector; las hijas dan relevancia específica.

**Regla de implementación:**
- Cambios estructurales o visuales globales → se hacen en la madre primero, luego se propagan a las hijas
- Las hijas NO son copias de la madre — son extensiones con identidad propia
- Nunca homogeneizar las hijas entre sí para que "se vean iguales"

### Identidad Visual por Sector (en desarrollo)
- Legal: navy/azul profundo — precisión, autoridad, confidencialidad
- Restaurantes: terracota/ámbar — calidez, hospitalidad, premium
- Salud: teal/verde suave — confianza, limpieza, cuidado
- Inmobiliaria: a definir con el dueño
- El gold `#C49A4A` se mantiene como token de marca en TODOS los sectores sin excepción.

---

## Archivo Base — CRÍTICO

### La fuente de verdad visual es `WEB/SPM Advisory.html`
- Usar `WEB/SPM Advisory.html` + `WEB/styles.css` + `WEB/app.js` como base para CUALQUIER refactor o página nueva.
- **NUNCA** usar el sistema cyan/purple del `index.html` del worktree — ese es el sistema OLD descartado.
- La paleta correcta es: `--ink: #0A0A0A` · `--ivory: #F7F5F0` · `--gold: #C49A4A` — sin excepciones.
- Tipografía: Inter (body) · JetBrains Mono (mono/eyebrow) · Instrument Serif italic (accent).
- Todas las secciones usan `data-reveal` y `data-stagger` para el scroll reveal del `app.js`.

### Mejoras acordadas sobre la base (NO reemplazar la estructura visual):
1. Hero → añadir WhatsApp como CTA secundario; ajustar "3 cupos" por algo honesto para etapa cero
2. Trust bar → reemplazar "32 firmas" con claims de capacidad operativa (no clientes históricos)
3. Industry cards → añadir mini-ejemplo narrativo con métrica concreta bajo `.ind-metrics`
4. Process steps → añadir entregable concreto explícito en cada paso
5. Case studies → etiquetar como "resultado de referencia de industria" (no clientes propios)
6. CTA section → añadir WhatsApp primario al lado del formulario existente
7. Mobile → sticky bar inferior con botón de WhatsApp siempre visible
