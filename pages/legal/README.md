# page: legal

Fuente real de producción: `../../legal.html`  
Estilos: `../../styles.css` → copia local en `../../assets/css/styles.css`  
Scripts: `../../app.js` → copia local en `../../assets/js/app.js`

---

## Componentes lógicos

| Carpeta / archivo               | Sección en el HTML                              | ID / clase clave                        |
|--------------------------------|-------------------------------------------------|-----------------------------------------|
| `components/nav.html`          | Barra de navegación oscura + menú móvil         | `#nav.is-dark`, `.nav-mobile`           |
| `components/hero-legal.html`   | Hero editorial con headline + display seguro    | `.hero--legal`, `.secure-capture`       |
| `components/problema.html`     | Grid de riesgos comerciales (4 celdas)          | `.problem`, `.cost-grid`, `.cost-cell`  |
| `components/demo-casos.html`   | Tarjetas de ejemplo demo (intake, filtro, medición) | `.sector-proof`, `.case-grid`       |
| `components/cta-legal.html`    | CTA + formulario multi-paso auditoría legal     | `#auditoria-legal`, `#audForm`          |
| `components/footer.html`       | Footer global                                   | `.footer`                               |
| `components/wa-float.html`     | Botón flotante de WhatsApp (mensaje legal)      | `.wa-float`                             |

---

## Notas de diseño

- `body` lleva la clase `page--legal` para variantes de estilo específicas del sector.
- El **display de captura segura** (`.secure-capture`) usa datos scrambleados animados (`data-legal-scramble`) — lógica en `app.js`.
- El formulario es **multi-paso** (`#step1` / `#step2` con `hidden`) controlado por JS.
- Formspree pendiente: `FORMSPREE_ID_AQUI` debe reemplazarse con el ID real antes de producción.
- WhatsApp CTA específico: `?text=Hola%2C%20me%20interesa%20la%20auditor%C3%ADa%20para%20mi%20firma%20legal.`
