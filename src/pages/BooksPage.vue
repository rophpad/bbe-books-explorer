<script setup lang="ts">
import BookCard from '../components/BookCard.vue'
import APagination from '../components/APagination.vue'
import { useSearchStore } from '@/stores/search'
const searchStore = useSearchStore()
</script>

<template>
  <div
    class="w-full px-3 lg:w-6xl py-6 flex flex-col items-center justify-center gap-4 no-scrollbar overflow-y-auto"
  >
    <p class="text-2xl font-bold">Tous les livres</p>
    <div class="w-full grid grid-cols-1 lg:grid-cols-4 items-center justify-center gap-4">
      <BookCard
        v-for="book in searchStore.paginatedBooks"
        :key="book.id"
        :title="book.title"
        :author="book.author"
        :category="book.category"
        :locations="book.locations"
        :status="book.status"
      />
    </div>
    <APagination :total-pages="searchStore.totalPages" />
  </div>
</template>
