# page: restaurantes

Fuente real de producción: `../../restaurantes.html`  
Estilos: `../../styles.css` → copia local en `../../assets/css/styles.css`  
Scripts: `../../app.js` → copia local en `../../assets/js/app.js`

---

## Componentes lógicos

| Carpeta / archivo                    | Sección en el HTML                               | ID / clase clave                             |
|-------------------------------------|--------------------------------------------------|----------------------------------------------|
| `components/nav.html`               | Barra de navegación oscura + menú móvil          | `#nav.is-dark`, `.nav-mobile`                |
| `components/hero-restaurantes.html` | Hero con headline + bandeja demo de reservas     | `.hero--restaurant`, `.reservation-feed`     |
| `components/problema.html`          | Grid de riesgos comerciales (4 celdas)           | `.problem`, `.cost-grid`, `.cost-cell`       |
| `components/demo-casos.html`        | Tarjetas demo (menú, reserva, medición)          | `.sector-proof`, `.case-grid`                |
| `components/cta-restaurantes.html`  | CTA + formulario multi-paso auditoría            | `#auditoria-rest`, `#audForm`                |
| `components/footer.html`            | Footer global                                    | `.footer`                                    |
| `components/wa-float.html`          | Botón flotante de WhatsApp (mensaje restaurante) | `.wa-float`                                  |

---

## Notas de diseño

- `body` lleva la clase `page--restaurant`.
- La **bandeja de reservas** (`.reservation-feed`) muestra tarjetas animadas con datos demo (`data-reservation-card`). El medidor de IA (`data-hostess-meter`) se anima desde `app.js`.
- Formulario multi-paso igual que el resto de páginas de sector.
- Formspree pendiente: `FORMSPREE_ID_AQUI` → reemplazar antes de producción.
- WhatsApp CTA específico: `?text=Hola%2C%20me%20interesa%20la%20auditor%C3%ADa%20para%20mi%20restaurante.`
