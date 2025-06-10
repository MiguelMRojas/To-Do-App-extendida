<template>
  <div class="max-w-xl mx-auto mt-10 space-y-4">
    <form @submit.prevent="addTask" class="space-y-2">
      <input v-model="form.title" placeholder="Título" class="w-full p-2 border rounded" />
      <textarea v-model="form.description" placeholder="Descripción" class="w-full p-2 border rounded"></textarea>
      <button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded">Crear tarea</button>
    </form>

    <!-- Filtros -->
    <div class="flex justify-center gap-2 mb-4">
      <button
        v-for="f in filters"
        :key="f"
        @click="filter = f"
        :class="[
          'px-3 py-1 rounded-full text-sm font-semibold',
          filter === f ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
        ]"
      >
        {{ f }}
      </button>
    </div>

    <ul>
      <li
        v-for="task in filteredTasks"
        :key="task._id"
        class="flex items-center justify-between p-2 border-b"
      >
        <div>
          <p :class="{ 'line-through text-gray-400': task.completed }">{{ task.title }}</p>
          <small class="text-sm text-gray-500">{{ task.description }}</small>
          <span
            class="ml-2 text-xs font-semibold"
            :class="task.completed ? 'text-green-600' : 'text-yellow-600'"
          >
            {{ task.completed ? 'Completada' : 'Pendiente' }}
          </span>
        </div>
        <div class="flex gap-2">
          <button @click="toggleComplete(task)" class="text-green-600">
            {{ task.completed ? '⏳ Marcar como Pendiente' : '✔️ Marcar como Completada' }}
          </button>
          <button @click="removeTask(task._id!)" class="text-red-500">🗑 Eliminar</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import type { Task } from '@/types/Task'
import { getTasks, createTask, deleteTask, updateTask } from '@/api/tasks'

const tasks = ref<Task[]>([])
const form = ref({ title: '', description: '' })

const filter = ref<'Todas' | 'Completadas' | 'Pendientes'>('Todas')
const filters = ['Todas', 'Completadas', 'Pendientes'] as const

const loadTasks = async () => {
  tasks.value = await getTasks()
}

const addTask = async () => {
  if (!form.value.title || !form.value.description) return
  await createTask({ ...form.value, completed: false })
  form.value = { title: '', description: '' }
  await loadTasks()
}

const removeTask = async (id: string) => {
  await deleteTask(id)
  await loadTasks()
}

const toggleComplete = async (task: Task) => {
  await updateTask(task._id!, { completed: !task.completed })
  await loadTasks()
}

const filteredTasks = computed(() => {
  if (filter.value === 'Todas') return tasks.value
  if (filter.value === 'Completadas') return tasks.value.filter(t => t.completed)
  if (filter.value === 'Pendientes') return tasks.value.filter(t => !t.completed)
  return tasks.value
})

onMounted(loadTasks)
</script>