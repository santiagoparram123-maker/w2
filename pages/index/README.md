# page: index (Página madre)

Fuente real de producción: `../../index.html`  
Estilos: `../../styles.css` → copia local en `../../assets/css/styles.css`  
Scripts: `../../app.js` → copia local en `../../assets/js/app.js`

---

## Componentes lógicos

| Carpeta / archivo              | Sección en el HTML                          | ID / clase clave                  |
|-------------------------------|---------------------------------------------|-----------------------------------|
| `components/nav.html`         | Barra de navegación + menú móvil            | `#nav`, `.nav-mobile`             |
| `components/hero.html`        | Hero principal con headline y CTA           | `.hero`, `.hero-bg`, `.hero-grid` |
| `components/industrias.html`  | Grid de sectores / industrias               | `#industrias`, `.sector-grid`     |
| `components/solucion.html`    | Sección "Sistema" / propuesta de valor      | `#solucion`                       |
| `components/proceso.html`     | Proceso de trabajo (pasos)                  | `#proceso`                        |
| `components/casos.html`       | Casos / muestra de proyectos                | `#casos`                          |
| `components/cta.html`         | Bloque CTA + formulario de auditoría        | `#auditoria`                      |
| `components/footer.html`      | Footer global con links y datos de contacto | `.footer`                         |
| `components/wa-float.html`    | Botón flotante de WhatsApp                  | `.wa-float`                       |

---

## Notas

- Esta es la **página madre**. Cambios estructurales globales se hacen aquí y se propagan a las páginas de sector.
- El archivo en raíz (`index.html`) es el que sirve GitHub Pages en producción.
- Los archivos en `components/` son **referencias documentales**, no fragmentos independientes todavía.
