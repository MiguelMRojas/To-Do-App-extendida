<template>
  <form @submit.prevent="handleSubmit" class="space-y-2">
    <input v-model="title" placeholder="Título" class="w-full p-2 border rounded" />
    <textarea v-model="description" placeholder="Descripción" class="w-full p-2 border rounded"></textarea>
    <button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded">Crear tarea</button>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const title = ref('')
const description = ref('')

const emit = defineEmits<{
  (e: 'create', task: { title: string; description: string }): void
}>()

const handleSubmit = () => {
  if (!title.value || !description.value) return
  emit('create', {
    title: title.value,
    description: description.value,
  })
  title.value = ''
  description.value = ''
}
</script>
