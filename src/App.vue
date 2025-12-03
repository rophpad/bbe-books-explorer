<script setup lang="ts">
import AppHeader from './components/AppHeader.vue'
import FilterDropdown from './components/FilterDropdown.vue'
import { ref } from 'vue'

const category = ref<string | null>(null)
const location = ref<string | null>(null)
const bookStatus = ref<string | null>(null)
</script>

<template>
  <div id="app" class="min-h-screen bg-gray-100 border">
    <AppHeader />
    <section
      class="min-h-full bg-linear-to-r from-white to-[#0A5EBE] text-white p-16 pb-32 flex flex-col gap-8 items-center justify-center noise relative"
    >
      <h1 class="text-center text-4xl font-bold">
        Explorez depuis n’importe où <br />
        les livres de votre bibliothèque !
      </h1>
      <div class="w-1/2">
        <div class="relative">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" class="fill-gray-400 absolute top-1/2 left-4 transform -translate-y-1/2 text-black/50">
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
          />
          <button
            class="bg-[#0A5EBE] text-white text-sm px-4 py-2 rounded-full absolute top-1/2 right-4 transform -translate-y-1/2 shadow-md hover:bg-blue-700 transition cursor-pointer"
          >
            Rechercher
          </button>
        </div>
        <div class="flex gap-4 mt-4">
          <FilterDropdown
            v-model="location"
            :options="[
              { value: 'all', label: 'Toutes les bibliothèques' },
              { value: 'calavi', label: 'Calavi' },
              { value: 'godomey', label: 'Godomey' },
              { value: 'cotonou', label: 'Cotonou' },
            ]"
            placeholder="Toutes les bibliothèques"
          />
          <FilterDropdown
            v-model="category"
            :options="[
              { value: 'all', label: 'Toutes les catégories' },
              { value: 'droit', label: 'Droit', icon: '⚖️' },
              { value: 'technology', label: 'Technologie', icon: '💻' },
              { value: 'science', label: 'Sciences', icon: '🔬' },
              { value: 'literature', label: 'Littérature', icon: '📖' },
              { value: 'audiobook', label: 'Livres audio', icon: '🎧' },
              { value: 'paperback', label: 'Livres papier', icon: '📚' },
            ]"
            placeholder="Toutes les catégories"
          />
          <FilterDropdown
            v-model="bookStatus"
            :options="[
              { value: 'all', label: 'Tous les statuts' },
              { value: 'available', label: 'Nouveaux' },
              { value: 'checked_out', label: 'Empruntables' },
              { value: 'non_loanable', label: 'Non empruntables' },
            ]"
            placeholder="Tous les status"
          />
        </div>
      </div>

      <div
        class="w-2/3 p-8 border h-200 mx-auto rounded-md bg-white shadow-md absolute z-10 top-90 left-1/2 -translate-x-1/2 overflow-y-auto"
      >
        <!-- div content goes here -->
      </div>
    </section>
    <section class="h-216">
      <!-- Additional content can go here -->
    </section>
  </div>
</template>

<style scoped>
.noise {
  position: relative;
  z-index: 1;
}

.noise:before,
.body-noise:before {
  content: '';
  position: absolute;
  z-index: -1;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-image: url(data:image/png;base64,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);
}
</style>
