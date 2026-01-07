<script setup lang="ts">
import { computed, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useSearchStore } from '@/stores/search'
import BookCard from '@/components/BookCard.vue'
import APagination from '@/components/APagination.vue'

const route = useRoute()
const router = useRouter()
const searchStore = useSearchStore()

// Sync store with URL query params
onMounted(() => {
  const query = route.query.q as string
  const location = route.query.location as string
  const category = route.query.category as string
  const status = route.query.status as string
  const page = route.query.page as string

  if (query) searchStore.setSearchQuery(query)
  if (location) searchStore.setLocation(location)
  if (category) searchStore.setCategory(category)
  if (status) searchStore.setStatus(status)
  if (page) searchStore.setPage(parseInt(page))
})

// Update URL when filters change
watch(
  () => [
    searchStore.searchQuery,
    searchStore.selectedLocation,
    searchStore.selectedCategory,
    searchStore.selectedStatus,
    searchStore.currentPage,
  ],
  () => {
    const query: Record<string, string> = {}

    if (searchStore.searchQuery) query.q = searchStore.searchQuery
    if (searchStore.selectedLocation !== 'all') query.location = searchStore.selectedLocation
    if (searchStore.selectedCategory !== 'all') query.category = searchStore.selectedCategory
    if (searchStore.selectedStatus !== 'all') query.status = searchStore.selectedStatus
    if (searchStore.currentPage > 1) query.page = searchStore.currentPage.toString()

    router.replace({ query })
  },
)

const resultCount = computed(() => searchStore.filteredBooks.length)
const hasResults = computed(() => resultCount.value > 0)
</script>

<template>
  <div
    class="w-full px-3 lg:w-6xl py-6 flex flex-col items-center justify-center gap-6 no-scrollbar overflow-y-auto"
  >
    <!-- Search Results Header -->
    <div class="w-full flex flex-col gap-4">
      <!-- Active Filters Summary -->
      <div v-if="searchStore.hasActiveFilters" class="w-full">
        <div class="flex flex-wrap items-center gap-2">
          <p class="text-sm text-gray-600">Résultats de recherche pour:</p>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="(filter, index) in searchStore.activeFiltersSummary"
              :key="index"
              class="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full font-medium"
            >
              {{ filter }}
            </span>
          </div>
          <button
            @click="searchStore.clearAllFilters()"
            class="ml-2 text-xs text-red-600 hover:text-red-800 underline"
          >
            Effacer les filtres
          </button>
        </div>
      </div>

      <!-- Results Count -->
      <div class="flex items-center justify-between">
        <p class="text-xl md:text-2xl font-bold">
          <span v-if="hasResults">
            {{ resultCount }} livre{{ resultCount > 1 ? 's' : '' }} trouvé{{
              resultCount > 1 ? 's' : ''
            }}
          </span>
          <span v-else-if="searchStore.hasActiveFilters"> Aucun résultat trouvé </span>
          <span v-else> Tous les livres </span>
        </p>
      </div>
    </div>

    <!-- Books Grid -->
    <div
      v-if="hasResults"
      class="w-full grid grid-cols-1 lg:grid-cols-4 items-start justify-center gap-4"
    >
      <BookCard
        v-for="book in searchStore.paginatedBooks"
        :key="book.id"
        :title="book.title"
        :author="book.author"
        :category="book.category"
        :locations="book.locations"
        :status="book.status"
        :description="book.description"
      />
    </div>

    <!-- Empty State -->
    <div
      v-else-if="searchStore.hasActiveFilters"
      class="w-full flex flex-col items-center justify-center gap-4 py-12"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="64"
        height="64"
        viewBox="0 0 24 24"
        class="text-gray-400"
      >
        <path
          fill="currentColor"
          d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14"
        />
      </svg>
      <div class="text-center">
        <p class="text-xl font-semibold text-gray-800 mb-2">Aucun livre trouvé</p>
        <p class="text-sm text-gray-600 mb-4">
          Essayez de modifier vos critères de recherche ou de supprimer certains filtres
        </p>
        <button
          @click="searchStore.clearAllFilters()"
          class="px-6 py-2 bg-[#0A5EBE] text-white rounded-full hover:scale-95 transition"
        >
          Réinitialiser la recherche
        </button>
      </div>
    </div>

    <!-- Pagination -->
    <APagination
      v-if="hasResults && searchStore.totalPages > 1"
      :total-pages="searchStore.totalPages"
      :current-page="searchStore.currentPage"
      @update:current-page="searchStore.setPage"
    />
  </div>
</template>
