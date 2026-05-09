# 🛒 TP PreEntrega - Node.js | Gestión de Productos

---

# 📌 Consigna del Proyecto

“Hemos llegado al momento clave. Es hora de demostrar si estás preparado para dar el siguiente paso y unirte a nuestro equipo en TechLab”.

El objetivo del proyecto es construir una herramienta funcional para manejar productos de una tienda online desde la terminal utilizando Node.js y la API FakeStore.

---

# 🎯 Objetivos

- Utilizar Node.js desde la terminal
- Implementar métodos HTTP
- Consumir una API externa usando Fetch API
- Trabajar con process.argv
- Utilizar ESModules
- Manejar lógica dinámica y validaciones

---

# ⚙️ Configuración Inicial

## Inicializar el proyecto

```bash
npm init -y
```

---

## Configurar ESModules

Agregar en package.json:

```json
"type": "module"
```

---

## Configurar script start

```json
"scripts": {
  "start": "node index.js"
}
```

---

# 🚀 Cómo ejecutar la aplicación

Desde la terminal:

```bash
npm run start [METHOD] [endpoint] [parámetros]
```

---

# 📌 Ejemplos de uso

## 📦 Obtener todos los productos

```bash
npm run start GET products
```

---

## 🔎 Obtener un producto por ID

```bash
npm run start GET products/15
```

---

## ➕ Crear un producto

```bash
npm run start POST products "T-Shirt-Rex" 300 remeras
```

Parámetros:

- `title` → nombre del producto
- `price` → precio numérico
- `category` → categoría

---

## ❌ Eliminar un producto

```bash
npm run start DELETE products/7
```

---

# 🧠 Lógica del Programa

El programa:

1. Lee argumentos desde la terminal usando `process.argv`
2. Identifica el método HTTP
3. Interpreta el endpoint
4. Consume la API FakeStore usando `fetch`
5. Muestra la respuesta en consola

---

# 🛠️ Tecnologías Utilizadas

- Node.js
- JavaScript ESModules
- Fetch API
- FakeStore API

---

# 📁 Estructura del Proyecto

```txt
TP-PreEntrega-Node/
│
├── index.js
├── package.json
├── README.md
└── .gitignore
```

---

# ⚠️ Manejo de Errores

El proyecto incluye:

- Validación de IDs
- Validación de parámetros
- Manejo de errores HTTP
- Uso de try/catch

---

# 🌐 API Utilizada

FakeStore API:

[FakeStore API](https://fakestoreapi.com/?utm_source=chatgpt.com)

---

# ⚙️ Instalación del Proyecto

Clonar repositorio:

```bash
git clone https://github.com/TU-USUARIO/TP-PreEntrega-Node.git
```

Ingresar a la carpeta:

```bash
cd TP-PreEntrega-Node
```

Instalar dependencias:

```bash
npm install
```

---

# 👨‍💻 Autor

Proyecto realizado como práctica de backend con Node.js.

Desarrollado por Claudia Oliverio.