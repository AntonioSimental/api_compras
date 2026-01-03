# API Compras

API REST desarrollada con **Node.js** y **Express** para la gestión de compras.
Este proyecto forma parte de mi portafolio como desarrollador backend y tiene como objetivo
demostrar el desarrollo de una API con arquitectura modular, manejo de rutas,
controladores y conexión a base de datos.

---

## 🚀 Tecnologías utilizadas

- Node.js
- Express
- JavaScript
- MySQL
- Git / GitHub

---

## Instalación y ejecución

- npm install
- npm start

## 📌 Funcionalidad
La API permite:

- Crear compras
- Consultar el historial de compras
- Actualizar información de una compra
- Eliminar registros de compras

Las rutas están estructuradas siguiendo principios REST y la lógica de negocio
se encuentra separada en controladores.

## 🔐 Variables de entorno

El proyecto utiliza variables de entorno para manejar la configuración sensible.

Crea un archivo `.env` en la raíz del proyecto basándote en el archivo `.env.example`:

bash
cp .env.example .env

## 📁 Estructura del proyecto

```txt
api_compras/
├─ app.js
├─ src/
│  ├─ controllers/
│  ├─ database/
│  └─ routes/
├─ package.json
├─ package-lock.json
├─ .gitignore
