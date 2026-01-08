import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { Book } from '@/types/book'

export const useSearchStore = defineStore('search', () => {
  // State
  const searchQuery = ref<string>('')
  const selectedLocation = ref<string>('all')
  const selectedCategory = ref<string>('all')
  const selectedStatus = ref<string>('all')
  const currentPage = ref<number>(1)
  const itemsPerPage = ref<number>(12)

  // Mock books data - Replace with API call later
  const allBooks = ref<Book[]>([])

  function setAllBooks(books: Book[]) {
    allBooks.value = books
  }

  // Computed - Filtered books
  const filteredBooks = computed(() => {
    let results = [...allBooks.value]

    // Filter by search query (title, author, description)
    if (searchQuery.value.trim()) {
      const query = searchQuery.value.toLowerCase()
      results = results.filter(
        (book) =>
          book.title.toLowerCase().includes(query) ||
          book.author.toLowerCase().includes(query) ||
          book.description?.toLowerCase().includes(query),
      )
    }

    // Filter by location
    if (selectedLocation.value !== 'all') {
      results = results.filter((book) => book.locations.includes(selectedLocation.value))
    }

    // Filter by category
    if (selectedCategory.value !== 'all') {
      results = results.filter((book) => book.category === selectedCategory.value)
    }

    // Filter by status
    if (selectedStatus.value !== 'all') {
      results = results.filter((book) => book.status === selectedStatus.value)
    }

    return results
  })

  // Computed - Paginated books
  const paginatedBooks = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage.value
    const end = start + itemsPerPage.value
    return filteredBooks.value.slice(start, end)
  })

  // Computed - Total pages
  const totalPages = computed(() => {
    return Math.ceil(filteredBooks.value.length / itemsPerPage.value)
  })

  // Computed - Has active filters
  const hasActiveFilters = computed(() => {
    return (
      searchQuery.value.trim() !== '' ||
      selectedLocation.value !== 'all' ||
      selectedCategory.value !== 'all' ||
      selectedStatus.value !== 'all'
    )
  })

  // Computed - Active filters summary
  const activeFiltersSummary = computed(() => {
    const filters: string[] = []
    if (searchQuery.value.trim()) {
      filters.push(`"${searchQuery.value}"`)
    }
    if (selectedLocation.value !== 'all') {
      filters.push(`Bibliothèque: ${selectedLocation.value}`)
    }
    if (selectedCategory.value !== 'all') {
      filters.push(`Catégorie: ${selectedCategory.value}`)
    }
    if (selectedStatus.value !== 'all') {
      filters.push(`Statut: ${selectedStatus.value}`)
    }
    return filters
  })

  // Actions
  function setSearchQuery(query: string) {
    searchQuery.value = query
    currentPage.value = 1 // Reset to first page on new search
  }

  function setLocation(location: string) {
    selectedLocation.value = location
    currentPage.value = 1
  }

  function setCategory(category: string) {
    selectedCategory.value = category
    currentPage.value = 1
  }

  function setStatus(status: string) {
    selectedStatus.value = status
    currentPage.value = 1
  }

  function setPage(page: number) {
    currentPage.value = page
  }

  function clearAllFilters() {
    searchQuery.value = ''
    selectedLocation.value = 'all'
    selectedCategory.value = 'all'
    selectedStatus.value = 'all'
    currentPage.value = 1
  }

  function getBooksByLibrary(libraryName: string): Book[] {
    return allBooks.value.filter((book) => book.locations.includes(libraryName))
  }

  return {
    // State
    searchQuery,
    selectedLocation,
    selectedCategory,
    selectedStatus,
    currentPage,
    itemsPerPage,
    allBooks,
    // Computed
    filteredBooks,
    paginatedBooks,
    totalPages,
    hasActiveFilters,
    activeFiltersSummary,
    // Actions
    setSearchQuery,
    setLocation,
    setCategory,
    setStatus,
    setPage,
    clearAllFilters,
    getBooksByLibrary,
    setAllBooks,
  }
})
