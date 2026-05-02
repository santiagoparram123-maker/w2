# page: salud

Fuente real de producción: `../../salud.html`  
Estilos: `../../styles.css` → copia local en `../../assets/css/styles.css`  
Scripts: `../../app.js` → copia local en `../../assets/js/app.js`

---

## Componentes lógicos

| Carpeta / archivo               | Sección en el HTML                               | ID / clase clave                          |
|--------------------------------|--------------------------------------------------|-------------------------------------------|
| `components/nav.html`          | Barra de navegación oscura + menú móvil          | `#nav.is-dark`, `.nav-mobile`             |
| `components/hero-salud.html`   | Hero editorial + agenda viva 24/7 demo           | `.hero--healthcare`, `.live-agenda`       |
| `components/problema.html`     | Grid de riesgos comerciales (4 celdas)           | `.problem`, `.cost-grid`, `.cost-cell`    |
| `components/demo-casos.html`   | Tarjetas de ejemplo demo (agenda, landing, medición) | `.sector-proof`, `.case-grid`         |
| `components/cta-salud.html`    | CTA + formulario multi-paso auditoría salud      | `#auditoria-salud`, `#audForm`            |
| `components/footer.html`       | Footer global                                    | `.footer`                                 |
| `components/wa-float.html`     | Botón flotante de WhatsApp (mensaje clínica)     | `.wa-float`                               |

---

## Notas de diseño

- `body` lleva la clase `page--healthcare`.
- La **agenda viva** (`.live-agenda`) muestra slots de cita animados (`data-agenda-slot`, `data-agenda-pill`) — lógica en `app.js`.
- Estado del badge: `IA fuera de horario` (`.agenda-status`).
- Formulario multi-paso igual que el resto, con placeholder `FORMSPREE_ID_AQUI`.
- WhatsApp CTA específico: `?text=Hola%2C%20me%20interesa%20la%20auditor%C3%ADa%20para%20mi%20cl%C3%ADnica.`
- **Nota ética**: el helper del campo textarea incluye `No compartas datos médicos de pacientes.`
