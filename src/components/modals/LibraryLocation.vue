<template>
  <div class="space-y-6">
    <h2 class="text-xl font-bold text-gray-800">Emplacement des bibliothèques</h2>

    <div class="space-y-4">
      <div
        v-for="library in libraries"
        :key="library.id"
        class="group flex items-center gap-4 p-4 rounded-2xl border border-gray-200 cursor-pointer transition-all bg-white hover:bg-gray-50 hover:border-gray-300"
      >
        <!-- Icon -->
        <div
          class="flex items-center justify-center w-12 h-12 rounded-full transition bg-indigo-50 text-gray-600 group-hover:bg-indigo-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              d="M12 21.325q-.35 0-.7-.125t-.625-.375Q9.05 19.325 7.8 17.9t-2.087-2.762t-1.275-2.575T4 10.2q0-3.75 2.413-5.975T12 2t5.588 2.225T20 10.2q0 1.125-.437 2.363t-1.275 2.575T16.2 17.9t-2.875 2.925q-.275.25-.625.375t-.7.125M12 12q.825 0 1.413-.587T14 10t-.587-1.412T12 8t-1.412.588T10 10t.588 1.413T12 12"
            />
          </svg>
        </div>

        <!-- Text -->
        <div class="flex-1">
          <p class="font-semibold text-gray-900">
            {{ library.name }}
          </p>
          <p class="text-sm text-gray-500">
            {{ library.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const libraries = [
  {
    id: 1,
    name: 'Bibliothèque de Calavi',
    description: 'En prenant par IITA, dans la voie devant INRAB',
  },
  {
    id: 2,
    name: 'Bibliothèque de Godomey',
    description: 'Située à Godomey',
  },
  {
    id: 3,
    name: 'Bibliothèque de Cotonou',
    description: 'Intégrée à la FSS',
  },
]
</script>
