import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export interface Book {
  id: string
  title: string
  author: string
  category: string
  locations: string[]
  status: string
  description: string
  coverImage?: string
}

export const useSearchStore = defineStore('search', () => {
  // State
  const searchQuery = ref<string>('')
  const selectedLocation = ref<string>('all')
  const selectedCategory = ref<string>('all')
  const selectedStatus = ref<string>('all')
  const currentPage = ref<number>(1)
  const itemsPerPage = ref<number>(12)

  // Mock books data - Replace with API call later
  const allBooks = ref<Book[]>([
    {
      id: '1',
      title: 'Père Riche, Père Pauvre',
      author: 'Robert Kiyosaki',
      category: 'technology',
      locations: ['Calavi', 'Godomey', 'Cotonou'],
      status: 'borrowable',
      description: "Un guide sur l'éducation financière et l'investissement",
    },
    {
      id: '2',
      title: 'Introduction au Droit',
      author: 'Jean Dupont',
      category: 'droit',
      locations: ['Calavi'],
      status: 'new',
      description: 'Les fondamentaux du droit civil et pénal',
    },
    {
      id: '3',
      title: 'Clean Code',
      author: 'Robert C. Martin',
      category: 'technology',
      locations: ['Cotonou'],
      status: 'borrowable',
      description: 'A Handbook of Agile Software Craftsmanship',
    },
    {
      id: '4',
      title: 'Le Petit Prince',
      author: 'Antoine de Saint-Exupéry',
      category: 'literature',
      locations: ['Calavi', 'Cotonou'],
      status: 'borrowable',
      description: 'Un conte philosophique et poétique',
    },
    {
      id: '5',
      title: 'Sapiens',
      author: 'Yuval Noah Harari',
      category: 'science',
      locations: ['Godomey', 'Cotonou'],
      status: 'new',
      description: "Une brève histoire de l'humanité",
    },
    {
      id: '6',
      title: 'Vue.js 3 Cookbook',
      author: 'Heitor Ramon Ribeiro',
      category: 'technology',
      locations: ['Calavi', 'Godomey'],
      status: 'borrowable',
      description: 'Practical recipes for building modern web applications',
    },
    {
      id: '7',
      title: 'Droit Constitutionnel',
      author: 'Marie Martin',
      category: 'droit',
      locations: ['Calavi', 'Cotonou'],
      status: 'borrowable',
      description: 'Institutions politiques et constitutionnelles',
    },
    {
      id: '8',
      title: 'Les Misérables',
      author: 'Victor Hugo',
      category: 'literature',
      locations: ['Cotonou'],
      status: 'borrowable',
      description: 'Un roman historique et social',
    },
    {
      id: '9',
      title: 'Cosmos',
      author: 'Carl Sagan',
      category: 'science',
      locations: ['Calavi', 'Godomey', 'Cotonou'],
      status: 'new',
      description: "Une exploration de l'univers",
    },
    {
      id: '10',
      title: "Introduction à l'Algorithmique",
      author: 'Thomas H. Cormen',
      category: 'technology',
      locations: ['Calavi'],
      status: 'borrowable',
      description: 'Cours et exercices corrigés',
    },
    {
      id: '11',
      title: 'Droit Pénal Général',
      author: 'Pierre Lefebvre',
      category: 'droit',
      locations: ['Godomey', 'Cotonou'],
      status: 'new',
      description: 'Les principes fondamentaux du droit pénal',
    },
    {
      id: '12',
      title: "L'Étranger",
      author: 'Albert Camus',
      category: 'literature',
      locations: ['Calavi', 'Cotonou'],
      status: 'borrowable',
      description: "Un roman philosophique sur l'absurde",
    },
  ])

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
          book.description.toLowerCase().includes(query),
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
  }
})
