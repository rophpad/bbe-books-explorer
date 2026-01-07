<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  totalPages: number
  currentPage?: number
}>()

const emit = defineEmits<{
  'update:current-page': [page: number]
}>()

const page = computed({
  get: () => props.currentPage || 1,
  set: (value: number) => emit('update:current-page', value),
})

const pagesToShow = computed(() => {
  const pages: (number | string)[] = []
  const c = page.value
  const t = props.totalPages

  // Always include first page
  pages.push(1)

  // Left ellipsis
  if (c > 3) pages.push('...')

  // Pages around current: (c-1, c, c+1)
  for (let p = c - 1; p <= c + 1; p++) {
    if (p > 1 && p < t) pages.push(p)
  }

  // Right ellipsis
  if (c < t - 2) pages.push('...')

  // Always include last page
  if (t > 1) pages.push(t)

  // Remove duplicates
  return [...new Set(pages)]
})

function goToPrevious() {
  if (page.value > 1) {
    page.value = page.value - 1
  }
}

function goToNext() {
  if (page.value < props.totalPages) {
    page.value = page.value + 1
  }
}

function goToPage(pageNum: number) {
  page.value = pageNum
}
</script>

<template>
  <div class="flex justify-end gap-2 items-center mt- select-none text-black/70">
    <!-- Prev -->
    <button
      class="size-9 flex items-center justify-center rounded-xl bg-gray-200 hover:bg-gray-300 transition disabled:opacity-40"
      :disabled="page === 1"
      @click="goToPrevious"
    >
      <span class="text-sm">‹</span>
    </button>

    <!-- Pages -->
    <template v-for="item in pagesToShow" :key="item">
      <span v-if="item === '...'" class="px-2 text-gray-500">…</span>

      <button
        v-else
        @click="goToPage(Number(item))"
        :class="[
          'size-9 flex items-center justify-center rounded-xl text-sm transition',
          item === page ? 'bg-[#0A5EBE] text-white shadow-sm' : 'bg-gray-100 hover:bg-gray-200',
        ]"
      >
        {{ item }}
      </button>
    </template>

    <!-- Next -->
    <button
      class="size-9 flex items-center justify-center rounded-xl bg-gray-200 hover:bg-gray-300 transition disabled:opacity-40"
      :disabled="page === totalPages"
      @click="goToNext"
    >
      <span class="text-sm">›</span>
    </button>
  </div>
</template>
