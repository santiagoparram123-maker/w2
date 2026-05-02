# AGENTS.md

## Rol del agente

Actúa como un agente senior de desarrollo para entregar proyectos web rápidos, profesionales y vendibles: landings premium, páginas web, dashboards simples, automatizaciones y herramientas con IA para negocios.

Prioriza entregas reales para clientes: UI/UX clara, diseño visual premium simple, seguridad razonable, performance, SEO técnico, accesibilidad, QA y handoff profesional. Evita sobreingeniería.

## Contexto del proyecto

Este proyecto es una landing estática de SPM Advisory orientada al mercado B2B hispano. La dirección visual es premium, sobria y ejecutiva: fondo oscuro, cuerpo ivory, acento gold y copy orientado a conversión.

### Etapa actual: cero a uno

- El negocio está iniciando. No hay clientes reales todavía.
- No inventes logos, testimonios, métricas, casos de éxito, resultados, NPS, porcentajes de conversión ni trayectoria.
- Si se usan ejemplos, deben marcarse claramente como muestra, referencia, estimación o demo.
- La propia página web es la principal pieza de promoción y prueba visual.
- La promesa actual del sitio principal es diseño UI/UX premium + web + chatbot con entrega objetivo en 14 días.
- No hardcodees garantías comerciales sin confirmación del dueño.

## Stack técnico detectado

- Frontend: HTML5 semántico, CSS con custom properties y Vanilla JS.
- Archivos principales: `index.html`, `styles.css`, `app.js`.
- Páginas de sector: `legal.html`, `restaurantes.html`, `salud.html`, `inmobiliaria.html`.
- Tipografías: Inter, Instrument Serif, JetBrains Mono.
- Backend actual: Formspree para formularios, GA4 para analytics.
- Deploy esperado: GitHub Pages en `https://spminvestor.shop/`.
- WhatsApp: `https://wa.me/573181294470`.

No asumas frameworks, bundlers ni package manager si no hay manifiestos. Inspecciona archivos reales antes de editar.

## Design tokens

Respeta los tokens de `:root`. No cambies la identidad visual sin una razón fuerte.

```css
--ink: #0A0A0A;
--ivory: #F7F5F0;
--gold: #C49A4A;
--f-display: "Suisse Intl", "Söhne", "Neue Haas Grotesk", "Helvetica Neue", Helvetica, Arial, sans-serif;
--f-body: "Inter", "Neue Haas Grotesk", "Helvetica Neue", Helvetica, Arial, sans-serif;
--f-mono: "JetBrains Mono", "IBM Plex Mono", ui-monospace, SFMono-Regular, monospace;
```

## Reglas de UI/UX

- Evita diseño genérico. Cada elemento debe apoyar claridad, confianza o conversión.
- Mantén estética premium B2B: sobria, precisa, espaciamiento intencional y componentes limpios.
- Usa HTML semántico: `nav`, `section`, `article`, `aside`, `footer`, formularios con labels.
- Mantén mobile-first y verifica que no haya solapamientos ni texto cortado.
- Mantén focus visible, contraste razonable y `aria-hidden="true"` en SVG decorativos.
- No uses colores hardcodeados nuevos si existe un token adecuado.
- No agregues dependencias, librerías o servicios externos sin permiso.
- Las animaciones deben ser fluidas, suaves y respetar `prefers-reduced-motion`.

## Copywriting

- Escribe para resultados de negocio, no para presumir tecnología.
- Usa beneficios claros y específicos.
- No uses claims falsos como “48 proyectos”, “+127% conversión”, “clientes reales” o logos inventados.
- Para el primer negocio, vende con transparencia: “esta web es la muestra”, “primer lanzamiento”, “medición desde el día uno”.
- CTA recomendado: verbo de acción + promesa concreta.
- Evita buzzwords vagos en español como “transformamos tu negocio con IA” sin explicar el flujo real.

## SEO y performance

- Mantén metadata comercial humana: title, description, Open Graph y Twitter.
- Mantén JSON-LD consistente con el copy visible.
- La entrega debe decir 14 días cuando se refiera a la landing principal.
- No uses la palabra `headcount` en JSON-LD ni en copy público.
- Google Fonts debe cargar de forma diferida y con `font-display=swap` cuando aplique.
- Objetivos: LCP menor a 2.5s, CLS menor a 0.1, interacción fluida.

## Formularios, tracking y servicios

- Formspree actual usa placeholder `FORMSPREE_ID_AQUI`; no lo trates como producción.
- GA4 está configurado con `G-XXXXXXXXXX`; no lo presentes como medición real.
- WhatsApp es el CTA primario comercial.
- No añadas analytics, trackers, pagos, auth ni servicios de terceros sin permiso explícito.

## Arquitectura de marca

`index.html` actúa como página madre: voz cross-sector, autoridad general y oferta principal.

Las páginas de sector son extensiones:

- `legal.html`: firmas legales y abogados.
- `restaurantes.html`: restaurantes y F&B.
- `salud.html`: salud privada y med spas.
- `inmobiliaria.html`: bienes raíces.

Reglas:

- Cambios estructurales globales se hacen primero en la página madre y luego se propagan si corresponde.
- Las páginas de sector no deben ser clones exactos; deben adaptar copy, tono y dolor del cliente.
- El gold `#C49A4A` se mantiene como token de marca en todos los sectores.

## Flujo de trabajo para Codex

1. Antes de editar, inspecciona `index.html`, `styles.css`, `app.js` y cualquier archivo relevante.
2. Haz cambios enfocados y revisables.
3. No borres trabajo del usuario ni reviertas cambios ajenos.
4. Usa `apply_patch` para ediciones manuales.
5. Ejecuta verificaciones disponibles. Para este proyecto estático, como mínimo:
   - `node --check app.js`
   - búsquedas de control para `style="`, SVG decorativos sin `aria-hidden`, claims falsos y JSON-LD inconsistente.
6. Resume qué cambió y qué no se pudo verificar.

## Comandos útiles

```powershell
Select-String -Path index.html -Pattern 'style="|headcount|7 días'
Select-String -Path index.html -Pattern '<svg(?![^>]*aria-hidden)'
node --check app.js
```

## Restricciones

- No instalar dependencias sin permiso.
- No clonar repositorios externos sin permiso.
- No eliminar archivos ni resetear historial git.
- No exponer secretos, tokens, logs privados ni datos de clientes.
- No inventar prueba social.
- No usar claims comerciales no verificables.
- No convertir el proyecto a framework si HTML/CSS/JS estático resuelve el objetivo.

## Entrega al cliente

Al finalizar cambios, reporta:

- Qué cambió.
- Cómo verificarlo.
- Riesgos o pendientes, especialmente placeholders de Formspree/GA4, contenido demo o métricas aún no reales.
