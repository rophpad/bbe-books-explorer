<script setup lang="ts">
import { ref, computed } from 'vue'

const props = defineProps<{
  totalPages: number
}>()

const currentPage = ref(1)

const pagesToShow = computed(() => {
  const pages: (number | string)[] = []
  const c = currentPage.value
  const t = props.totalPages

  // Always include first page
  pages.push(1)

  // Left ellipsis
  if (c > 2) pages.push('...')

  // Pages around current: (c-2, c-1, c, c+1, c+2)
  for (let p = c - 1; p <= c + 1; p++) {
    if (p > 1 && p < t) pages.push(p)
  }

  // Right ellipsis
  if (c < t - 1) pages.push('...')

  // Always include last page
  if (t > 1) pages.push(t)

  // Remove duplicates + sort nicely
  return [...new Set(pages)]
})
</script>

<template>
  <div class="flex justify-end gap-2 items-center mt- select-none text-black/70">
    <!-- Prev -->
    <button
      class="size-9 flex items-center justify-center rounded-xl bg-gray-200 hover:bg-gray-300 transition disabled:opacity-40"
      :disabled="currentPage === 1"
      @click="currentPage--"
    >
      <span class="text-sm">‹</span>
    </button>

    <!-- Pages -->
    <template v-for="page in pagesToShow" :key="page">
      <span v-if="page === '...'" class="px-2 text-gray-500">…</span>

      <button
        v-else
        @click="currentPage = Number(page)"
        :class="[
          'size-9 flex items-center justify-center rounded-xl text-sm transition',
          page === currentPage
            ? 'bg-[#0A5EBE] text-white shadow-sm'
            : 'bg-gray-100 hover:bg-gray-200',
        ]"
      >
        {{ page }}
      </button>
    </template>

    <!-- Next -->
    <button
      class="size-9 flex items-center justify-center rounded-xl bg-gray-200 hover:bg-gray-300 transition disabled:opacity-40"
      :disabled="currentPage === totalPages"
      @click="currentPage++"
    >
      <span class="text-sm">›</span>
    </button>
  </div>
</template>
