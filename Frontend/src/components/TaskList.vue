<template>
  <ul>
    <li
      v-for="task in tasks"
      :key="task._id"
      class="flex items-center justify-between p-2 border-b"
    >
      <div>
        <p :class="{ 'line-through text-gray-400': task.completed }">
          {{ task.title }}
        </p>
        <small class="text-sm text-gray-500">{{ task.description }}</small>
      </div>
      <div class="flex gap-2">
        <button @click="$emit('toggle', task)" class="text-green-600">✔️</button>
        <button @click="$emit('delete', task._id!)" class="text-red-500">🗑</button>
      </div>
    </li>
  </ul>
</template>

<script setup lang="ts">
import type { Task } from '@/types/Task'

defineProps<{
  tasks: Task[]
}>()

defineEmits<{
  (e: 'delete', id: string): void
  (e: 'toggle', task: Task): void
}>()
</script>
