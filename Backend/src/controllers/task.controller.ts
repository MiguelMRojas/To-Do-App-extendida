import { Request, Response } from 'express';
import Task from '../models/task.model';

export const getTasks = async (req: Request, res: Response) => {
  try {
    const { completed } = req.query;
    let filter = {};
    if (completed === 'true') filter = { completed: true };
    if (completed === 'false') filter = { completed: false };

    const tasks = await Task.find(filter);
    res.json(tasks);
  } catch (error) {
    console.error('❌ Error al obtener tareas:', error);
    res.status(500).json({ message: 'Error del servidor' });
  }
};

export const createTask = async (req: Request, res: Response): Promise<void> => {
  try {
    console.log('Datos recibidos:', req.body);
    const { title, description } = req.body;

    if (!title || !description) {
      res.status(400).json({ message: 'Título y descripción son requeridos' });
      return;
    }

    const newTask = new Task({ title, description, completed: false });
    const savedTask = await newTask.save();
    res.status(201).json(savedTask);
  } catch (error) {
    console.error('❌ Error al crear tarea:', error);
    res.status(500).json({ message: 'Error al crear la tarea' });
  }
};

export const updateTask = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const updated = await Task.findByIdAndUpdate(id, req.body, { new: true });

    if (!updated) {
      res.status(404).json({ message: 'Tarea no encontrada' });
      return;
    }

    res.json(updated);
  } catch (error) {
    console.error('❌ Error al actualizar tarea:', error);
    res.status(500).json({ message: 'Error al actualizar la tarea' });
  }
};

export const deleteTask = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const deleted = await Task.findByIdAndDelete(id);

    if (!deleted) {
      res.status(404).json({ message: 'Tarea no encontrada' });
      return;
    }

    res.sendStatus(204);
  } catch (error) {
    console.error('❌ Error al eliminar tarea:', error);
    res.status(500).json({ message: 'Error al eliminar la tarea' });
  }
};
