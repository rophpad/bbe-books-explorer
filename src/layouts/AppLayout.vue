<script setup lang="ts">
import FilterDropdown from '../components/FilterDropdown.vue'

import { ref } from 'vue'

import { locations, categories, statuses } from '../data/all'

const category = ref<string | null>(null)
const location = ref<string | null>(null)
const bookStatus = ref<string | null>(null)
const searchQuery = ref<string>('')
</script>

<template>
  <div class="h-full bg-gray-100">
    <section
      class="bg-linear-to-r from-white to-[#0A5EBE] text-white p-8 md:pb-30 flex flex-col gap-4 items-center justify-center noise relative"
    >
      <a
        href="https://github.com"
        target="_blank"
        rel="noopener noreferrer"
        class="border border-white/30 rounded-full px-4 py-2 text-xs font-medium hover:bg-white/10 transition"
      >
        Star on Github
      </a>
      <h1 class="text-center text-2xl md:text-4xl font-bold">
        Explorez depuis n’importe où <br />
        les livres de vos bibliothèques !
      </h1>
      <div class="h- w-96">
        <img src="/vector1.png" alt="books" class="object-cover" />
      </div>
      <div
        class="w-full md:w-1/2 absolute z-99 top-70 lg:top-72 bg-gray-100 p-4 rounded-xl flex flex-col items-center justify-center"
      >
        <div class="w-full relative">
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
            class="border border-black/20 bg-white/50 w-full pl-16 p-6 rounded-md text-black outline-none focus:ring-2 focus:ring-[#0A5EBE] transition"
            v-model="searchQuery"
          />
          <button
            :class="`${searchQuery ? 'bg-[#0A5EBE]' : 'bg-[#0A5EBE]'} text-white text-sm px-4 py-3 rounded-full absolute top-1/2 right-4 transform -translate-y-1/2 shadow-md hover:scale-95 transition cursor-pointer`"
          >
            Rechercher
          </button>
        </div>
        <div class="w-full flex flex-col lg:flex-row gap-4 mt-4">
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
    </section>
    <section class="pt-72 md:pt-48 lg:pt-24 bg-white flex flex-col items-center justify-center">
      <RouterView />
    </section>
  </div>
</template>
