<script setup lang="ts">
import BookCard from '../components/BookCard.vue'
</script>

<template>
  <div
    class="w-full px-3 py-6 flex flex-col items-center justify-center gap-4 no-scrollbar overflow-y-auto"
  >
    <div class="flex flex-col gap-4">
      <div class="flex items-center justify-between py-2 border-b border-black/20">
        <p class="font-bold text-xl">Bibliothèque de Calavi</p>
        <div
          class="p-2 border border-black/20 flex items-center justify-center rounded-full cursor-pointer hover:bg-black/5 transition"
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
              d="M16.175 13H5q-.425 0-.712-.288T4 12t.288-.712T5 11h11.175l-4.9-4.9q-.3-.3-.288-.7t.313-.7q.3-.275.7-.288t.7.288l6.6 6.6q.15.15.213.325t.062.375t-.062.375t-.213.325l-6.6 6.6q-.275.275-.687.275T11.3 19.3q-.3-.3-.3-.712t.3-.713z"
            />
          </svg>
        </div>
      </div>
      <div class="flex flex-wrap items-center justify-center gap-4">
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
      </div>
    </div>

    <div class="flex flex-col gap-4">
      <div class="flex items-center justify-between py-2 border-b border-black/20">
        <p class="font-bold text-xl">Bibliothèque de Calavi</p>
        <div
          class="p-2 border border-black/20 flex items-center justify-center rounded-full cursor-pointer hover:bg-black/5 transition"
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
              d="M16.175 13H5q-.425 0-.712-.288T4 12t.288-.712T5 11h11.175l-4.9-4.9q-.3-.3-.288-.7t.313-.7q.3-.275.7-.288t.7.288l6.6 6.6q.15.15.213.325t.062.375t-.062.375t-.213.325l-6.6 6.6q-.275.275-.687.275T11.3 19.3q-.3-.3-.3-.712t.3-.713z"
            />
          </svg>
        </div>
      </div>
      <div class="flex flex-wrap items-center justify-center gap-4">
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
      </div>
    </div>

    <div class="flex flex-col gap-4">
      <div class="flex items-center justify-between py-2 border-b border-black/20">
        <p class="font-bold text-xl">Bibliothèque de Calavi</p>
        <div
          class="p-2 border border-black/20 flex items-center justify-center rounded-full cursor-pointer hover:bg-black/5 transition"
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
              d="M16.175 13H5q-.425 0-.712-.288T4 12t.288-.712T5 11h11.175l-4.9-4.9q-.3-.3-.288-.7t.313-.7q.3-.275.7-.288t.7.288l6.6 6.6q.15.15.213.325t.062.375t-.062.375t-.213.325l-6.6 6.6q-.275.275-.687.275T11.3 19.3q-.3-.3-.3-.712t.3-.713z"
            />
          </svg>
        </div>
      </div>
      <div class="flex flex-wrap items-center justify-center gap-4">
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
      </div>
    </div>
  </div>
</template>
