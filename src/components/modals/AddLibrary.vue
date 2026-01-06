<template>
  <form action="">
    <h2 class="text-xl font-bold mb-4">Ajouter une nouvelle bibliothèque</h2>
    <div class="mb-4">
      <label for="libraryName" class="block text-gray-700 mb-2">Nom de la bibliothèque :</label>
      <input
        type="text"
        id="libraryName"
        class="w-full px-3 py-2 border border-gray-300 rounded"
        placeholder="Entrez le nom de la bibliothèque"
      />
    </div>
    <div class="mb-4">
      <label for="libraryAddress" class="block text-gray-700 mb-2"
        >Adresse de la bibliothèque :</label
      >
      <input
        type="text"
        id="libraryAddress"
        class="w-full px-3 py-2 border border-gray-300 rounded"
        placeholder="Entrez l'adresse de la bibliothèque"
      />
    </div>
    <div class="mb-4">
      <label for="libraryContact" class="block text-gray-700 mb-2"
        >Contact de la bibliothèque :</label
      >
      <input
        type="text"
        id="libraryContact"
        class="w-full px-3 py-2 border border-gray-300 rounded"
        placeholder="Entrez le contact de la bibliothèque"
      />
    </div>
    <div class="mb-4">
      <label for="bookCsv" class="block text-gray-700 mb-2"
        >Importer la liste des livres au format csv</label
      >
      <input
        type="file"
        id="bookCsv"
        class="w-full px-3 py-2 border border-gray-300 rounded"
        accept=".csv"
      />
    </div>
    <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
      Ajouter la bibliothèque
    </button>
  </form>
</template>
