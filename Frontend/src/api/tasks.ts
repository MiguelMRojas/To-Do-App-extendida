import type { Task } from '../types/Task'

const API_URL = 'http://localhost:3000/tasks'

export const getTasks = async (): Promise<Task[]> => {
  const res = await fetch(API_URL)
  return res.json()
}

export const createTask = async (task: Omit<Task, '_id'>): Promise<Task> => {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(task)
  })
  return res.json()
}

export const updateTask = async (id: string, updates: Partial<Task>) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updates)
  })
  return res.json()
}

export const deleteTask = async (id: string) => {
  await fetch(`${API_URL}/${id}`, { method: 'DELETE' })
}
