<script setup lang="ts">
import BookCard from '../components/BookCard.vue'
// import APagination from '../components/APagination.vue'
import { Libraries } from '@/data/libraries'
import { useRoute, useRouter } from 'vue-router'
import type { Library } from '@/types/lib'
const route = useRoute()
const libraryId = route.params.id
const library: Library = (Libraries.find((lib) => lib.id === libraryId) as Library) || Libraries[0]

const router = useRouter()
</script>

<template>
  <div
    class="w-full px-3 lg:w-6xl py-6 flex flex-col items-center justify-center gap-4 no-scrollbar overflow-y-auto"
  >
    <div class="w-full flex flex-col items-center justify-center gap-4">
      <div class="w-full flex items-center justify-between py-2 border-b border-black/20">
        <p class="font-bold text-xl">{{ library.name }}</p>
        <div
          class="p-2 border border-black/20 flex items-center justify-center rounded-full cursor-pointer hover:bg-black/5 transition"
          @click="
            () => {
              router.back()
            }
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            class="size-4 fill-black/20"
          >
            <path
              fill=""
              d="m12 13.4l-2.917 2.925q-.277.275-.704.275t-.704-.275q-.275-.275-.275-.7t.275-.7L10.6 12L7.675 9.108Q7.4 8.831 7.4 8.404t.275-.704q.275-.275.7-.275t.7.275L12 10.625L14.892 7.7q.277-.275.704-.275t.704.275q.3.3.3.713t-.3.687L13.375 12l2.925 2.917q.275.277.275.704t-.275.704q-.3.3-.712.3t-.688-.3z"
            />
          </svg>
        </div>
      </div>
      <div class="w-full grid grid-cols-1 lg:grid-cols-4 items-center justify-center gap-4">
        <BookCard
          v-for="book in library.books"
          :key="book.id"
          :title="book.title"
          :author="book.author"
          :category="book.category"
          :locations="book.locations"
          :status="book.status"
        />
      </div>
      <!-- <APagination :total-pages="100" /> -->
    </div>
  </div>
</template>
