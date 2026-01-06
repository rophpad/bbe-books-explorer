<script setup lang="ts">
import BookCard from '../components/BookCard.vue'
import APagination from '../components/APagination.vue'
</script>

<template>
  <div
    class="w-full px-3 py-6 flex flex-col items-center justify-center gap-4 no-scrollbar overflow-y-auto"
  >
    <p class="text-2xl font-bold">Tous les livres</p>
    <div class="flex flex-wrap items-center justify-center gap-4">
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
    </div>
    <APagination :total-pages="100" />
  </div>
</template>
