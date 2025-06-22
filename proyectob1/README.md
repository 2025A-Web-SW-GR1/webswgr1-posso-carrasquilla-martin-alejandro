# Prototipo de Aplicación Web — Tienda de Videojuegos

Este repositorio contiene el prototipo de una aplicación web para una tienda de videojuegos retro y actuales. El prototipo está compuesto por una base de datos, interfaz visual, estructura de archivos estáticos y lógica backend básica con Node.js (NestJS).

## Objetivo del Prototipo

Representar visualmente y estructuralmente cómo funcionará el catálogo digital de una tienda de videojuegos, permitiendo validar el diseño y las funcionalidades básicas antes del desarrollo completo.

---

## Contenido del Prototipo

### 1. Base de Datos (MySQL)

Incluye un script con las siguientes tablas:

- `consola`: Nombre, precio, desarrolladora, edición especial (booleano), imagen.
- `accesorio`: Nombre, descripción, precio, imagen, ID de consola (FK).
- `juego`: Nombre, género, precio, imagen, ID de consola (FK).

Relaciones:
- Una consola tiene muchos accesorios.
- Una consola tiene muchos juegos.

---

### 2. Interfaz Web (Frontend)

Ubicada dentro del directorio `/public`, contiene:

- `index.html`: Página principal con presentación, navegación y categorías.
- `consolas.html`, `accesorios.html`, `juegos.html`: Catálogo por tipo de producto.
- `info.html`: Misión, visión, redes sociales.
- `css/styles.css`: Tema oscuro atractivo para el entorno gamer.
- `imagenes/`: Recursos gráficos de productos.

---

### 3. Historias de Usuario

Se definieron 9 historias de usuario, de las cuales 8 serán implementadas:

- HU-001: Visualización del Home
- HU-002: Visualización de consolas
- HU-003: Filtro de accesorios por consola
- HU-004: Filtro de juegos por consola
- HU-005: Información de la tienda
- HU-006: Diseño visual temático
- HU-007: Carrito de compras
- HU-009: Búsqueda por nombre

---

### 4. Backend (Node.js con NestJS)

- Servirá archivos estáticos desde `/public`.
- Permitirá la futura integración con base de datos para mostrar productos de manera dinámica.
- Potencial para futuras funciones como carrito, autenticación o sistema de pago.

---

## Finalidad del Aplicativo

El aplicativo web permitirá al usuario:

- Ver consolas, juegos y accesorios disponibles.
- Filtrar productos por consola.
- Agregar productos al carrito.
- Buscar productos por nombre
- Consultar información de la tienda.

Este prototipo sienta las bases para uun aplicativo funcional y escalable, centrada en la experiencia del usuario y una estética gamer coherente.