# 🛒 TP PreEntrega - Node.js | Gestión de Productos

---

## 📌 Consigna del Proyecto

“**Hemos llegado al momento clave. Es hora de demostrar si estás preparado para dar el siguiente paso y unirte a nuestro equipo en TechLab.**”

Tu desafío consiste en integrar todo lo aprendido en un único programa. El objetivo es construir una herramienta funcional para manejar productos de una tienda en línea desde la terminal.

---

## 🎯 Requerimientos del Proyecto

### 🔹 Configuración inicial
- Crear un proyecto en Node.js
- Inicializar npm con `npm init -y`
- Configurar `"type": "module"` en `package.json`
- Crear un archivo principal `index.js`
- Definir script `"start": "node index.js"`

---

### 🔹 Funcionalidades requeridas

📦 Obtener todos los productos:
npm run start GET products

🔎 Obtener un producto por ID:
npm run start GET products/<id>

➕ Crear un producto:
npm run start POST products <title> <price> <category>

❌ Eliminar un producto:
npm run start DELETE products/<id>

✏️ Actualizar un producto:
npm run start PUT products/<id> <title> <price> <category>

---

## 📌 Descripción

Este proyecto consiste en una aplicación de consola desarrollada con Node.js que permite gestionar productos de una tienda online mediante el consumo de una API REST externa (FakeStore API).

El sistema interpreta comandos ingresados desde la terminal y ejecuta operaciones HTTP para interactuar con los recursos.

---

## 🎯 Objetivos del Proyecto

- Aplicar conceptos de Node.js  
- Consumir una API REST  
- Implementar operaciones CRUD básicas  
- Utilizar asincronismo (async/await o fetch)  
- Manejar argumentos desde la terminal (`process.argv`)  
- Organizar el código en módulos  

---

## 🚀 Funcionalidades

✔ Obtener todos los productos  
✔ Obtener un producto por ID  
✔ Crear un nuevo producto  
✔ Eliminar un producto  
✔ Actualizar un producto  

---

## 🛠️ Tecnologías utilizadas

- Node.js  
- JavaScript (ESModules)  
- Fetch API  
- FakeStore API  

---

## 📁 Estructura del Proyecto

TP-PreEntrega-Node/

├── API/  
│   └── apiFakeStore.js  
├── utils/  
│   └── helpers.js 
├── .gitignore
├── index.js 
├── package.json  
└── README.md  

---

## ⚙️ Instalación

git clone https://github.com/TU-USUARIO/TP-PreEntrega-Node.git  
cd TP-PreEntrega-Node  
npm install  

---

## ▶️ Ejecución

npm run start [METHOD] [endpoint] [parámetros]

---

## 📌 Ejemplos de uso

GET todos los productos:
npm run start GET products

GET producto por ID:
npm run start GET products/5

POST crear producto:
npm run start POST products "Remera" 500 ropa

DELETE producto:
npm run start DELETE products/5

PUT actualizar producto:
npm run start PUT products/5 "Zapatilla" 2000 calzado

---

## 🧠 Lógica de funcionamiento

1. Se leen los argumentos desde la terminal (`process.argv`)  
2. Se identifica el método HTTP  
3. Se ejecuta la acción correspondiente  
4. Se consume la API FakeStore  
5. Se muestra la respuesta en consola  

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

## ⚠️ Consideraciones

- API de prueba (mock)  
- Los datos no se guardan permanentemente  
- POST / PUT / DELETE son simulados  

---

## 📈 Posibles mejoras

- Interfaz gráfica  
- Base de datos real  
- Autenticación  
- Migración a Express.js  

---

## 👨‍💻 Autor

Proyecto realizado como práctica de backend con Node.js  
Claudia Oliverio