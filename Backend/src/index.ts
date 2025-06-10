import express, { Application } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import taskRoutes from './routes/task.routes';

const app: Application = express();
const PORT = 3000;
const MONGO_URI = 'mongodb://localhost:27017/todoapp';

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.use('/tasks', taskRoutes);

// Conexión a MongoDB
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log('✅ Conectado a MongoDB');
    app.listen(PORT, () => {
      console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ Error conectando a MongoDB:', err);
  });
