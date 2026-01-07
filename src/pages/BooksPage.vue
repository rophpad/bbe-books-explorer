<script setup lang="ts">
import BookCard from '../components/BookCard.vue'
import APagination from '../components/APagination.vue'
</script>

<template>
  <div
    class="w-full px-3 lg:w-6xl py-6 flex flex-col items-center justify-center gap-4 no-scrollbar overflow-y-auto"
  >
    <p class="text-2xl font-bold">Tous les livres</p>
    <div class="w-full grid grid-cols-1 lg:grid-cols-4 items-center justify-center gap-4">
      <BookCard
        title="Sample Book"
        author="Author Name"
        category="Fiction"
        :locations="['Location 1']"
        status="Available"
      />
      <BookCard
        title="Sample Book"
        author="Author Name"
        category="Fiction"
        :locations="['Location 1']"
        status="Available"
      />
      <BookCard
        title="Sample Book"
        author="Author Name"
        category="Fiction"
        :locations="['Location 1']"
        status="Available"
      />
      <BookCard
        title="Sample Book"
        author="Author Name"
        category="Fiction"
        :locations="['Location 1']"
        status="Available"
      />
      <BookCard
        title="Sample Book"
        author="Author Name"
        category="Fiction"
        :locations="['Location 1']"
        status="Available"
      />
      <BookCard
        title="Sample Book"
        author="Author Name"
        category="Fiction"
        :locations="['Location 1']"
        status="Available"
      />
      <BookCard
        title="Sample Book"
        author="Author Name"
        category="Fiction"
        :locations="['Location 1']"
        status="Available"
      />
      <BookCard
        title="Sample Book"
        author="Author Name"
        category="Fiction"
        :locations="['Location 1']"
        status="Available"
      />
    </div>
    <APagination :total-pages="100" />
  </div>
</template>
