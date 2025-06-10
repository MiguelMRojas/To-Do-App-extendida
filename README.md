# To-Do App Extendida (Fullstack)

Este proyecto es una aplicación To-Do de pila completa desarrollada con **Node.js + Express + MongoDB** para el backend y **Vue 3 + TypeScript + TailwindCSS** para el frontend.

---

## 📁 Estructura del proyecto

```
To-Do-App-Extendida/
│
├── Backend/
│   ├── dist/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   └── index.js
│   ├── node_modules/
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   └── index.ts
│   ├── package.json
│   └── tsconfig.json
│
├── Frontend/
│   ├── node_modules/
│   ├── public/
│   ├── src/
│   │   ├── api/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── types/
│   │   ├── App.vue
│   │   ├── main.ts
│   │   └── style.css
│   ├── index.html
│   ├── package.json
│   ├── tailwind.config.js
│   ├── tsconfig.json
│   └── vite.config.ts
│
└── README.md
```

---

## 🚀 Cómo ejecutar el proyecto

### 1. Clona el repositorio

```bash
git clone <https://github.com/MiguelMRojas/To-Do-App-extendida>
cd To-Do-App-Extendida
```

---

## 🔧 Backend

### a) Instala las dependencias

```bash
cd Backend
npm install
```

### b) Asegúrate de tener MongoDB corriendo localmente

- La URI por defecto es: `mongodb://localhost:27017/todoapp`
- Puedes verificarlo usando MongoDB Compass o ejecutando `mongod` en tu terminal.

### c) Ejecuta el servidor

```bash
npm run dev
```

- El backend correrá en: **http://localhost:3000**

---

## 💻 Frontend

### a) Instala las dependencias

```bash
cd Frontend
npm install
```

### b) Ejecuta la app

```bash
npm run dev
```

- El frontend estará disponible en: **http://localhost:5173**

---

## 🛠️ Endpoints del Backend

| Método | Ruta         | Descripción                       |
|--------|--------------|-----------------------------------|
| GET    | /tasks       | Obtener todas las tareas          |
| POST   | /tasks       | Crear una nueva tarea             |
| PUT    | /tasks/:id   | Actualizar tarea por ID           |
| DELETE | /tasks/:id   | Eliminar tarea por ID             |

---

## 🎨 Funcionalidades del Frontend

- Listar tareas
- Crear tarea (título, descripción)
- Marcar como completada o pendiente
- Eliminar tarea
- Filtro visual por estado: Todas / Completadas / Pendientes
- UI responsiva con TailwindCSS

---

## 🧑‍💻 Decisiones técnicas

- ❌ Sin Pinia/Vuex — el estado se maneja con `ref` y `computed`.
- 💅 Todo el estilo se maneja con TailwindCSS.
- 🧩 Separación en componentes (`Form`, `TaskList`, etc.).
- ✅ Validación en backend para campos requeridos.
- 🧠 100% TypeScript en frontend y backend.

---

## 🧪 Pruebas sugeridas con Postman

1. **Crear tarea** → POST `/tasks` con body JSON `{ "title": "...", "description": "..." }`
2. **Listar tareas** → GET `/tasks`
3. **Marcar completada** → PUT `/tasks/:id` con `{ "completed": true }`
4. **Eliminar tarea** → DELETE `/tasks/:id`

---

## 📌 Notas finales

- Si no se guardan tareas, asegúrate de que **MongoDB está corriendo** y de que la URI es correcta.
- Puedes revisar la base de datos y colección desde MongoDB Compass en:
  - Base de datos: `todoapp`
  - Colección: `tasks`

¡Eso es todo! ✨ ¡Gracias por revisar este proyecto!
