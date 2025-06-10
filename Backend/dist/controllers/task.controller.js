"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTask = exports.updateTask = exports.createTask = exports.getTasks = void 0;
const task_model_1 = __importDefault(require("../models/task.model"));
const getTasks = async (_req, res) => {
    try {
        const tasks = await task_model_1.default.find();
        res.json(tasks);
    }
    catch (error) {
        console.error('❌ Error al obtener tareas:', error);
        res.status(500).json({ message: 'Error del servidor' });
    }
};
exports.getTasks = getTasks;
const createTask = async (req, res) => {
    try {
        const { title, description } = req.body;
        if (!title || !description) {
            return res
                .status(400)
                .json({ message: 'Título y descripción son requeridos' });
        }
        const newTask = new task_model_1.default({ title, description, completed: false });
        const savedTask = await newTask.save();
        res.status(201).json(savedTask);
    }
    catch (error) {
        console.error('❌ Error al crear tarea:', error);
        res.status(500).json({ message: 'Error al crear la tarea' });
    }
};
exports.createTask = createTask;
const updateTask = async (req, res) => {
    try {
        const { id } = req.params;
        const updated = await task_model_1.default.findByIdAndUpdate(id, req.body, { new: true });
        if (!updated)
            return res.status(404).json({ message: 'Tarea no encontrada' });
        res.json(updated);
    }
    catch (error) {
        console.error('❌ Error al actualizar tarea:', error);
        res.status(500).json({ message: 'Error al actualizar la tarea' });
    }
};
exports.updateTask = updateTask;
const deleteTask = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await task_model_1.default.findByIdAndDelete(id);
        if (!deleted)
            return res.status(404).json({ message: 'Tarea no encontrada' });
        res.sendStatus(204);
    }
    catch (error) {
        console.error('❌ Error al eliminar tarea:', error);
        res.status(500).json({ message: 'Error al eliminar la tarea' });
    }
};
exports.deleteTask = deleteTask;
