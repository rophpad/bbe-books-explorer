<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div
    class="w-full px-3 py-6 flex flex-col items-center justify-center gap-4 no-scrollbar overflow-y-auto"
  >
    <p class="text-center text-xl font-bold">
      Bienvenue sur la page d'accueil de l'explorateur de livres.
    </p>
    <div class="flex flex-col lg:flex-row gap-4">
      <RouterLink
        to="/bibliotheques"
        class="lg:size-48 bg-gray-100 border border-black/20 p-4 rounded-lg flex flex-col items-center justify-center gap-2 hover:scale-95 transition cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          class="size-16 stroke-[#0A5EBE]/50"
        >
          <path
            fill="none"
            stroke=""
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M3 16h18M2 22h20M3 9h18M3 22V8c0-2.828 0-4.243.93-5.121S6.358 2 9.353 2h5.294c2.995 0 4.492 0 5.423.879C21 3.757 21 5.172 21 8v14m-10-3h2M10 9L9 5M6.5 9V5M14 16v-4m-2-3V5m4 11l1-4m2 4v-4"
          />
        </svg>
        <p class="text-center">Découvrez les bibliothèques</p>
      </RouterLink>
      <RouterLink
        to="/livres"
        class="lg:size-48 bg-gray-100 border border-black/20 p-4 rounded-lg flex flex-col items-center justify-center gap-2 hover:scale-95 transition cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          class="size-16 fill-[#0A5EBE]/50"
        >
          <path
            fill=""
            d="M7.333 5.5a2.25 2.25 0 0 1 2.25-2.25h1.583a2.25 2.25 0 0 1 2.25 2.196c.227-.175.492-.308.786-.387l2.253-.604a2.25 2.25 0 0 1 2.756 1.591L21.93 16.19a2.25 2.25 0 0 1-1.591 2.755l-2.254.604a2.25 2.25 0 0 1-2.756-1.59l-1.912-7.136v6.428a2.25 2.25 0 0 1-2.25 2.25H9.583a2.24 2.24 0 0 1-1.5-.573a2.24 2.24 0 0 1-1.5.573H4.25A2.25 2.25 0 0 1 2 17.25v-9.5A2.25 2.25 0 0 1 4.25 5.5h2.333c.263 0 .516.045.75.128zm0 11.75V7.728A.75.75 0 0 0 6.583 7H4.25a.75.75 0 0 0-.75.75v9.5c0 .414.336.75.75.75h2.333a.75.75 0 0 0 .75-.73zm2.25.75h1.583a.75.75 0 0 0 .75-.75V5.5a.75.75 0 0 0-.75-.75H9.583a.75.75 0 0 0-.75.75v11.77a.75.75 0 0 0 .75.73M14.06 7.427l2.717 10.142a.75.75 0 0 0 .919.53l2.253-.604a.75.75 0 0 0 .53-.918L17.763 6.435a.75.75 0 0 0-.918-.53l-2.254.603a.75.75 0 0 0-.53.919"
          />
        </svg>
        <p class="text-center">Explorez les livres disponibles</p>
      </RouterLink>
      <RouterLink
        to="/recherche"
        class="lg:size-48 bg-gray-100 border border-black/20 p-4 rounded-lg flex flex-col items-center justify-center gap-2 hover:scale-95 transition cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          class="size-16 fill-[#0A5EBE]/50"
        >
          <path
            fill=""
            d="m19.3 8.9l3.2 3.2l-1.4 1.4l-3.2-3.2q-.525.3-1.125.5T15.5 11q-1.875 0-3.187-1.312T11 6.5t1.313-3.187T15.5 2t3.188 1.313T20 6.5q0 .675-.2 1.275T19.3 8.9m-3.8.1q1.05 0 1.775-.725T18 6.5t-.725-1.775T15.5 4t-1.775.725T13 6.5t.725 1.775T15.5 9M4 22q-.825 0-1.412-.587T2 20V6q0-.825.588-1.412T4 4h5.5q-.275.625-.375 1.288t-.1 1.312q0 2.725 1.925 4.55t4.575 1.825q.475 0 .95-.063t.975-.212L20 15.25V20q0 .825-.587 1.413T18 22z"
          />
        </svg>
        <p class="text-center">Rechercher un livre en particulier</p>
      </RouterLink>
    </div>
  </div>
</template>
