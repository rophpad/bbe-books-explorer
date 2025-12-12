<script setup lang="ts">
import AppHeader from './components/AppHeader.vue'
import FilterDropdown from './components/FilterDropdown.vue'
import BookCard from './components/BookCard.vue'

import { ref } from 'vue'

import { locations, categories, statuses } from './data/all'

const category = ref<string | null>(null)
const location = ref<string | null>(null)
const bookStatus = ref<string | null>(null)
const searchQuery = ref<string>('')
</script>

<template>
  <div id="app" class="min-h-screen bg-gray-100 border">
    <AppHeader />
    <section
      class="min-h-full bg-linear-to-r from-white to-[#0A5EBE] text-white p-8 md:p-20 pb-32 flex flex-col gap-8 items-center justify-center noise relative"
    >
      <h1 class="text-center text-2xl md:text-4xl font-bold">
        Explorez depuis n’importe où <br />
        les livres de votre bibliothèque !
      </h1>
      <div class="w-full md:w-1/2">
        <div class="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            class="fill-gray-400 absolute top-1/2 left-4 transform -translate-y-1/2 text-black/50"
          >
            <g fill="" fill-rule="evenodd" clip-rule="evenodd">
              <path
                d="M10.5 5.5a5 5 0 1 0 0 10a5 5 0 0 0 0-10m-6.5 5a6.5 6.5 0 1 1 13 0a6.5 6.5 0 0 1-13 0"
              />
              <path
                d="M14.47 14.47a.75.75 0 0 1 1.06 0l4 4a.75.75 0 1 1-1.06 1.06l-4-4a.75.75 0 0 1 0-1.06"
              />
            </g>
          </svg>
          <input
            type="search"
            placeholder="Rechercher un livre, un auteur, un sujet..."
            class="bg-white w-full pl-16 p-6 rounded-md text-black outline-none focus:ring-2 focus:ring-[#0A5EBE] transition"
            v-model="searchQuery"
          />
          <button
            :class="`${searchQuery ? 'bg-[#0A5EBE]' : 'bg-[#0A5EBE]'} text-white text-sm px-4 py-3 rounded-full absolute top-1/2 right-4 transform -translate-y-1/2 shadow-md hover:scale-95 transition cursor-pointer`"
          >
            Rechercher
          </button>
        </div>
        <div class="flex flex-col lg:flex-row gap-4 mt-4">
          <FilterDropdown
            v-model="location"
            :options="locations"
            placeholder="Toutes les bibliothèques"
          />
          <FilterDropdown
            v-model="category"
            :options="categories"
            placeholder="Toutes les catégories"
          />
          <FilterDropdown v-model="bookStatus" :options="statuses" placeholder="Tous les statuts" />
        </div>
      </div>

      <div
        class="w-5/6 lg:w-2/3 p-8 h-200 mx-auto rounded-md bg-white shadow-md absolute z-10  top-116 lg:top-90 left-1/2 -translate-x-1/2 overflow-y-auto flex flex-wrap items-center justify-center gap-4"
      >
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
    </section>
    <section class="h-216">
      <!-- Additional content can go here -->
    </section>
  </div>
</template>
