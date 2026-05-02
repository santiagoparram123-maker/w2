# /assets — Activos compartidos del proyecto

Copias de referencia de los activos globales del sitio.  
Los archivos de producción reales siguen siendo los de la **raíz**.

---

## Estructura

```
assets/
├── css/
│   └── styles.css    ← copia de referencia de /styles.css
│
└── js/
    └── app.js        ← copia de referencia de /app.js
```

---

## Design tokens principales

Definidos en `:root` de `styles.css`:

| Token         | Valor       | Uso                          |
|---------------|-------------|------------------------------|
| `--ink`       | `#0A0A0A`   | Fondo oscuro principal       |
| `--ivory`     | `#F7F5F0`   | Cuerpo de texto claro        |
| `--gold`      | `#C49A4A`   | Acento de marca (CTAs)       |
| `--f-display` | Suisse Intl / Helvetica | Tipografía de display |
| `--f-body`    | Inter / Helvetica       | Tipografía de cuerpo  |
| `--f-mono`    | JetBrains Mono          | Etiquetas, código     |

---

## Dependencias externas

| Recurso         | URL                                                  | Uso                     |
|-----------------|------------------------------------------------------|-------------------------|
| Google Fonts    | fonts.googleapis.com                                 | Inter, JetBrains Mono, Instrument Serif |
| GSAP 3.12.5     | cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js   | Animaciones de entrada  |
| Formspree       | formspree.io/f/FORMSPREE_ID_AQUI                     | ⚠️ Pendiente configurar |
| Google Analytics| G-XXXXXXXXXX                                         | ⚠️ Pendiente ID real    |
