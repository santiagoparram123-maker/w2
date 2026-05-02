# /pages — Directorio de páginas organizadas

Cada subdirectorio corresponde a un archivo HTML del proyecto.  
Los archivos de producción reales siguen estando en la **raíz** del repositorio (requerido por GitHub Pages).

---

## Estructura

```
pages/
├── index/
│   ├── README.md          ← mapa de componentes de index.html
│   ├── index.html         ← copia de referencia
│   └── components/        ← fragmentos lógicos (futuros)
│
├── legal/
│   ├── README.md
│   ├── legal.html
│   └── components/
│
├── restaurantes/
│   ├── README.md
│   ├── restaurantes.html
│   └── components/
│
├── salud/
│   ├── README.md
│   ├── salud.html
│   └── components/
│
└── inmobiliaria/
    ├── README.md
    ├── inmobiliaria.html
    └── components/
```

---

## Notas

- Los archivos `.html` dentro de cada carpeta son **copias de referencia** para trabajo de componentes y documentación.
- La fuente de verdad para producción siempre es el archivo HTML en la raíz.
- Las carpetas `components/` están preparadas para alojar fragmentos HTML reutilizables cuando se decida componentizar el proyecto.
