# E-commerce Next.js + MongoDB

Este proyecto es una aplicación minimalista de e-commerce construida con **Next.js 15**, **TypeScript** y **MongoDB**. Permite a los usuarios agregar productos con imagen, nombre, precio, link del vendedor y descripción. Actualmente, la funcionalidad implementada es la de agregar productos (Create). Las funciones de editar, actualizar y eliminar productos (Update, Delete) están pendientes de desarrollo.

## Características

- **Agregar productos** con imagen, nombre, precio, link y descripción.
- Interfaz moderna y responsiva usando **Tailwind CSS**.
- Manejo de formularios y validaciones básicas.
- Notificaciones con **react-hot-toast**.
- Arquitectura modular y escalable.

## Tecnologías y dependencias instaladas

- [Next.js 15](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [MongoDB](https://www.mongodb.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [react-hot-toast](https://react-hot-toast.com/)
- [lucide-react](https://lucide.dev/icons/)
- [next/font](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)
- [next/image](https://nextjs.org/docs/pages/api-reference/components/image)

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/ecomerce-next-mongodb.git
   cd ecomerce-next-mongodb
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Configura las variables de entorno para la conexión a MongoDB en un archivo `.env.local`.

4. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

## Estructura principal

- `/app` - Páginas y layout principal.
- `/components` - Componentes reutilizables (Navbar, AddForm, etc).
- `/utils` - Funciones auxiliares (por ejemplo, para agregar productos).
- `/providers` - Proveedores de contexto (ej: ToastProvider).

## Estado del CRUD

- [x] **Create**: Agregar productos.
- [ ] **Read**: Listar productos (pendiente de fetch).
- [ ] **Update**: Editar productos (pendiente).
- [ ] **Delete**: Eliminar productos (pendiente).

## Créditos

Basado en el tutorial de [Emmanuel Ezeigbo](https://www.youtube.com/watch?v=uEb1fVFcTg8):  
*Build and Deploy a Minimalistic E-commerce App with Next.js 15, TypeScript & MongoDB*

---

**Nota:** El proyecto está en desarrollo. Las funcionalidades de edición, actualización y eliminación de productos serán implementadas próximamente.