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
