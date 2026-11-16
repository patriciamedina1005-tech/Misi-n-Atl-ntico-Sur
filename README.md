# Misión Atlántico Sur

Enciclopedia educativa interactiva en español sobre Islas Malvinas, Georgias del Sur y Sandwich del Sur. Cada visitante elige un destino y explora fauna, flora, recursos, turismo, bases e historia mediante fichas con curiosidades desplegables y pistas visuales.

Utiliza React 19, TypeScript, TanStack Start y Router, Vite, CSS y Lucide. Los diálogos usan Radix para navegación accesible. La fotografía local se sirve mediante Netlify Image CDN. El contenido editorial vive en `src/data/encyclopedia.ts` y no requiere base de datos.

## Desarrollo local

Con Node 22.13+ y pnpm, ejecutar `pnpm install` y luego `netlify dev --port 8889`. Netlify emula el CDN de imágenes y ejecuta la aplicación. El despliegue de Netlify genera automáticamente la aplicación de producción.

La selección es educativa y no pretende ser un censo exhaustivo de biodiversidad. Los mapas son esquemáticos y sin escala. La biblioteca de fuentes contiene enlaces generales de consulta, sin atribuir verificación individual de todas las afirmaciones.
