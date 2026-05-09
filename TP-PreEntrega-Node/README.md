# 🛒 TP PreEntrega - Node.js | Gestión de Productos

---

## 📌 Consigna del Proyecto

“Hemos llegado al momento clave. Es hora de demostrar si estás preparado para dar el siguiente paso y unirte a nuestro equipo en TechLab.”

Tu desafío consiste en integrar todo lo aprendido en un único programa. El objetivo es construir una herramienta funcional para manejar productos de una tienda en línea desde la terminal.

---

## 🎯 Requerimientos del Proyecto

### 🔹 Configuración inicial

- Crear un proyecto en Node.js  
- Inicializar npm con:
  npm init -y
- Configurar "type": "module" en package.json  
- Crear archivo principal:
  index.js
- Agregar script en package.json:
  "start": "node index.js"

---

## 🚀 Cómo ejecutar la aplicación

Desde la terminal usar:

npm run start [METHOD] [endpoint] [parámetros]

---

## 📌 Ejemplos de uso (API FakeStore)

### 📦 Obtener todos los productos
npm run start GET products

---

### 🔎 Obtener un producto por ID
npm run start GET products/5

---

### ➕ Crear un producto
npm run start POST products "Remera" 500 ropa

Parámetros:
- title → nombre del producto
- price → precio (número)
- category → categoría

---

### ❌ Eliminar un producto
npm run start DELETE products/5

---

### ✏️ Actualizar un producto
npm run start PUT products/5 "Zapatilla" 2000 calzado

---

## 🧠 Lógica del programa

1. Se leen los argumentos desde la terminal (process.argv)  
2. Se identifica el método HTTP (GET, POST, PUT, DELETE)  
3. Se interpreta el endpoint  
4. Se ejecuta la función correspondiente  
5. Se consume la API FakeStore  
6. Se muestra la respuesta en consola  

---

## ⚙️ Instalación del proyecto

git clone https://github.com/TU-USUARIO/TP-PreEntrega-Node.git  
cd TP-PreEntrega-Node  
npm install  

---

## 🛠️ Tecnologías utilizadas

- Node.js  
- JavaScript (ESModules)  
- Fetch API  
- FakeStore API  

---

## 📁 Estructura del proyecto

TP-PreEntrega-Node/

├── API/  
│   └── apiFakeStore.js  
├── utils/  
│   └── helpers.js  
├── index.js  
├── package.json  
├── README.md  
└── .gitignore  

---

## ⚠️ Manejo de errores

- Validación de ID  
- Validación de parámetros  
- Manejo de errores HTTP  
- Control de excepciones  

---

## 🌐 API utilizada

https://fakestoreapi.com/

---

## 📈 Posibles mejoras

- Interfaz gráfica  
- Base de datos real  
- Autenticación de usuarios  
- Migración a Express.js  

---

## 👨‍💻 Autor

Proyecto realizado como práctica de backend con Node.js  
Claudia Oliverio