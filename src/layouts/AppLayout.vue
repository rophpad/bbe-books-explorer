<script setup lang="ts">
import FilterDropdown from '../components/FilterDropdown.vue'
import { useRouter, useRoute } from 'vue-router'
import { useSearchStore } from '@/stores/search'
import { watch } from 'vue'

import { locations, categories, statuses } from '../data/all'

const router = useRouter()
const route = useRoute()
const searchStore = useSearchStore()

function handleSearch() {
  searchStore.setPage(1)
  router.push({
    name: 'SearchResultsPage',
    query: {
      q: searchStore.searchQuery || undefined,
      location: searchStore.selectedLocation !== 'all' ? searchStore.selectedLocation : undefined,
      category: searchStore.selectedCategory !== 'all' ? searchStore.selectedCategory : undefined,
      status: searchStore.selectedStatus !== 'all' ? searchStore.selectedStatus : undefined,
    },
  })
}

// Auto-navigate to search page when filters change (except when already on search page)
watch(
  () => [searchStore.selectedLocation, searchStore.selectedCategory, searchStore.selectedStatus],
  () => {
    // Only auto-navigate if not on search results page and if there's a filter applied
    if (route.name !== 'SearchResultsPage') {
      const hasActiveFilter =
        searchStore.selectedLocation !== 'all' ||
        searchStore.selectedCategory !== 'all' ||
        searchStore.selectedStatus !== 'all'

      if (hasActiveFilter) {
        handleSearch()
      }
    }
  },
)
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
      <h1 class="w-full text-center text-2xl md:text-4xl font-bold">
        Explorez depuis n’importe où <br class="hidden md:block" />
        les livres de vos bibliothèques !
      </h1>
      <div class="h- lg:w-96">
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
            v-model="searchStore.searchQuery"
            @keyup.enter="handleSearch"
          />
          <button
            :class="`${searchStore.searchQuery ? 'bg-[#0A5EBE]' : 'bg-[#0A5EBE]'} hidden md:block text-white text-sm px-4 py-3 rounded-full absolute top-1/2 right-4 transform -translate-y-1/2 shadow-md hover:scale-95 transition cursor-pointer`"
            @click="handleSearch"
          >
            Rechercher
          </button>
        </div>
        <div class="w-full flex flex-col lg:flex-row gap-4 mt-4">
          <FilterDropdown
            v-model="searchStore.selectedLocation"
            :options="locations"
            placeholder="Toutes les bibliothèques"
          />
          <FilterDropdown
            v-model="searchStore.selectedCategory"
            :options="categories"
            placeholder="Toutes les catégories"
          />
          <FilterDropdown
            v-model="searchStore.selectedStatus"
            :options="statuses"
            placeholder="Tous les statuts"
          />
          <button
            :class="`${searchStore.searchQuery ? 'bg-[#0A5EBE]' : 'bg-[#0A5EBE]'} md:hidden text-white text-sm px-4 py-3 rounded-full shadow-md hover:scale-95 transition cursor-pointer`"
            @click="handleSearch"
          >
            Rechercher
          </button>
        </div>
      </div>
    </section>
    <section class="pt-80 md:pt-48 lg:pt-24 bg-white flex flex-col items-center justify-center">
      <RouterView />
    </section>
  </div>
</template>
