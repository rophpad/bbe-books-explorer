<script setup lang="ts">
interface Props {
  title: string
  author: string
  category: string
  locations: string[]
  status: string
  description?: string
  coverImage?: string
}

const props = defineProps<Props>()

// Map category to display label
const categoryLabels: Record<string, string> = {
  droit: 'Droit',
  technology: 'Technologie',
  science: 'Sciences',
  literature: 'Littérature',
  audiobook: 'Livres audio',
  paperback: 'Livres papier',
}

// Map status to display label
const statusLabels: Record<string, string> = {
  new: 'Nouveau',
  borrowable: 'Empruntable',
}

const displayCategory = categoryLabels[props.category] || props.category
const displayStatus = statusLabels[props.status] || props.status
</script>

<template>
  <div
    class="w-full h-max border border-black/10 bg-white rounded-xl p-5 flex flex-col gap-4 shadow-sm hover:shadow-md transition"
  >
    <!-- Title & Author -->
    <div>
      <h3 class="text-lg font-semibold text-gray-900">{{ title }}</h3>
      <p class="text-sm text-gray-600">{{ author }}</p>
    </div>

    <!-- Category -->
    <span
      class="w-max px-3 py-1 rounded-full border border-gray-300 text-xs text-gray-700 bg-gray-50"
    >
      {{ displayCategory }}
    </span>

    <!-- Availability -->
    <div class="text-sm">
      <p class="text-gray-600">Disponible à la bibliothèque de :</p>
      <p class="font-medium text-gray-800">{{ locations.join(', ') }}</p>
    </div>

    <!-- Status -->
    <div class="flex flex-wrap gap-2">
      <span class="px-3 py-1 rounded-full border border-gray-300 text-xs text-gray-700 bg-gray-50">
        {{ displayStatus }}
      </span>
    </div>
  </div>
</template>
