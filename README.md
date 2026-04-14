# Prueba Técnica — Lugnia

Catálogo de productos con carrito de compras construido como SPA en React + TypeScript, consumiendo la [ API](https://api.fake-rest.refine.dev/products) pública.

🔗 **Deploy:** [prueba-tecnica-lugnia-rho.vercel.app](https://prueba-tecnica-lugnia-rho.vercel.app)

---

## Setup

### Requisitos

- Node.js 18+
- npm 9+

### Instalación

```bash
git clone https://github.com/tarttaros/prueba-tecnica-lugnia.git
cd prueba-tecnica-lugnia
npm install
```

### Correr en desarrollo

```bash
npm run dev
```

### Build de producción

```bash
npm run build
npm run preview
```

---

## Decisiones técnicas

### Vite 8
Bundler elegido por su arranque instantáneo en desarrollo y HMR nativo. El build de producción usa `tsc -b` para verificación de tipos completa antes de empaquetar.

### Tailwind CSS 3
Toda la UI se construye con clases de utilidad de Tailwind, sin librerías de componentes externas. El design system se extiende en `tailwind.config.js` con tokens semánticos (`primary`, `surface-container`, `on-surface`, etc.) inspirados en Material Design 3.

### Arquitectura en capas
La aplicación separa responsabilidades en tres capas:

| Capa | Responsabilidad |
|---|---|
| `components/` | UI pura — solo reciben props, sin side-effects |
| `hooks/` + `pages/` | Lógica y orquestación — conectan servicios con UI |
| `services/` | Acceso a datos — HTTP, localStorage, serialización |
| `types/` | Interfaces |


### Filtrado en cliente
La API no soporta filtros combinados, por lo que todos los productos se cargan una vez y el filtrado por categoría, precio y nombre se aplica en memoria. 

### Paginación en cliente
Los productos filtrados se paginan en memoria con `slice((page - 1) * pageSize, page * pageSize)`. El total de páginas se calcula con `Math.ceil(filteredProducts.length / pageSize)`. Al cambiar cualquier filtro la página se resetea a 1 para evitar mostrar una página vacía.

---

## Mejoras futuras

- **Testing** — añadir tests unitarios para el `cartReducer` y los hooks con Vitest + React Testing Library. Los componentes de presentación son ideales para snapshot tests.

- **React Query** — reemplazar los `useEffect` de fetching por TanStack Query para obtener caché automática, refetch en background y estados de loading más granulares.

- **Rutas y detalle de producto** — implementar React Router con una ruta `/products/:id` que muestre imagen ampliada, descripción completa y rating del producto.

- **Checkout** — añadir un flujo de compra con validación de formulario (React Hook Form + Zod) y pantalla de confirmación de pedido.

- **Skeleton screens** — reemplazar los estados de carga genéricos por skeletons con la misma forma que las tarjetas de producto, reduciendo el layout shift.

- **Accesibilidad** — auditar con axe-core, añadir `aria-live` regions para anunciar cambios en el contador del carrito y mejorar la navegación por teclado en el slider de precio.

- **PWA** — configurar `vite-plugin-pwa` para permitir uso offline con el catálogo previamente cacheado y el carrito persistido.

- **Internacionalización** — extraer textos a react-i18next para soportar múltiples idiomas sin cambios en los componentes.