# Arquitectura del proyecto

Misión Atlántico Sur es una enciclopedia educativa en español para estudiantes, implementada con React 19, TanStack Start, TypeScript y Vite sobre Netlify.

## Directorios

- `src/routes/index.tsx`: portada, selector de archipiélagos, categorías, búsqueda, filtros de fauna, fichas desplegables, desafío y biblioteca de referencias.
- `src/data/encyclopedia.ts`: contenido editorial tipado, organizado por isla y seis categorías. Cada ficha tiene descripción, dato curioso y sugerencia visual.
- `src/styles.css`: diseño responsive de cuaderno de expedición, tipografía Manrope y DM Sans, paleta oceánica y vegetal.
- `src/routes/__root.tsx`: documento en español y metadatos para compartir.
- `public/img`: fotografías locales, servidas mediante Netlify Image CDN.
- `src/components/ui`: componentes reutilizables disponibles del starter.

## Convenciones y decisiones

Mantener español accesible y distinguir presencia habitual, visitantes, especies extintas e instalaciones históricas. No presentar este inventario como exhaustivo ni inventar citas específicas. Las fuentes son recursos de consulta generales. Los mapas son esquemáticos sin escala ni delimitación política.

No hay cuentas ni datos persistentes de usuario. Los estados React son exclusivamente de navegación temporal y se reinician al recargar. Para futuras funciones persistentes, usar primitivas de Netlify.

Usar tipos explícitos, componentes en PascalCase y controles accesibles con foco visible. Los diálogos Radix gestionan Escape y foco. Respetar movimiento reducido. No editar archivos de rutas generados automáticamente.

El entorno de ejecución valida automáticamente los cambios; no ejecutar comandos de build, inicio o tests durante las sesiones gestionadas si las instrucciones de plataforma lo prohíben. Para desarrollo manual, usar `netlify dev --port 8889`.
