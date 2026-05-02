# page: inmobiliaria

Fuente real de producción: `../../inmobiliaria.html`  
Estilos: `../../styles.css` → copia local en `../../assets/css/styles.css`  
Scripts: `../../app.js` → copia local en `../../assets/js/app.js`

---

## Componentes lógicos

| Carpeta / archivo                     | Sección en el HTML                              | ID / clase clave                            |
|--------------------------------------|-------------------------------------------------|---------------------------------------------|
| `components/nav.html`                | Barra de navegación oscura + menú móvil         | `#nav.is-dark`, `.nav-mobile`               |
| `components/hero-inmobiliaria.html`  | Hero + embudo demo de filtrado de leads IA      | `.hero--real-estate`, `.showroom-funnel`    |
| `components/problema.html`           | Grid de riesgos comerciales (4 celdas)          | `.problem`, `.cost-grid`, `.cost-cell`      |
| `components/demo-casos.html`         | Tarjetas demo (proyecto, chatbot, medición)     | `.sector-proof`, `.case-grid`               |
| `components/cta-inmobiliaria.html`   | CTA + formulario multi-paso auditoría           | `#auditoria-inmo`, `#audForm`               |
| `components/footer.html`             | Footer global                                   | `.footer`                                   |
| `components/wa-float.html`           | Botón flotante de WhatsApp (mensaje inmobiliaria)| `.wa-float`                                |

---

## Notas de diseño

- `body` **no tiene clase de página** específica (a diferencia de los otros sectores — pendiente agregar `page--real-estate` si se necesita en CSS).
- El **embudo de filtrado** (`.showroom-funnel`) anima tres etapas con contadores (`data-funnel-stage`, `data-target`, `data-funnel-number`) — lógica en `app.js`.
- Etapas del funnel: Entrada (100) → Filtro IA (30) → Citas Showroom (12).
- Formulario multi-paso con placeholder `FORMSPREE_ID_AQUI`.
- WhatsApp CTA específico: `?text=Hola%2C%20me%20interesa%20la%20auditor%C3%ADa%20para%20mi%20inmobiliaria.`
