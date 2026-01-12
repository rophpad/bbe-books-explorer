<template>
  <div
    class=" w-full bg-white text-black flex flex-col items-center space-y-4"
  >
    <div class="p-3 rounded-full">
     <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          class="size-16 stroke-[#0A5EBE]"
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
    </div>

    <h3 class="text-lg font-semibold ">
      Ajouter une bibliothèque
    </h3>

    <p class="text-sm text-center">
      Pour ajouter votre bibliothèque et vos livres, veuillez remplir le formulaire suivant :
    </p>

    <div class="w-full flex gap-2">
      <a
        href="https://forms.gle/D4Jo5gWJGvT7i9dU6"
        target="_blank"
        rel="noopener noreferrer"
        class="flex-1 inline-flex justify-center items-center px-4 py-2 bg-[#0A5EBE] text-white rounded hover:bg-[#084a8a] focus:outline-none"
      >
        Ouvrir le formulaire
      </a>

      <button
        type="button"
        @click="copyLink"
        class="px-3 py-2 text-white bg-gray-100 dark:bg-slate-700 text-sm rounded hover:bg-gray-200 dark:hover:bg-slate-600"
        title="Copier le lien"
      >
        Copier le lien
      </button>
    </div>

    <p class="text-xs text-slate-500 dark:text-slate-400">
      Vous pouvez aussi partager le lien.
    </p>
  </div>
</template>

<script setup lang="ts">
const copyLink = () => {
  navigator.clipboard.writeText('https://forms.gle/D4Jo5gWJGvT7i9dU6').catch(() => {
    // ignore errors (e.g. clipboard unavailable) or handle as needed
  });
};
</script>
