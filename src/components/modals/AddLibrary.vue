<template>
  <!-- <form action="">
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
  </form> -->

  <div class="flex flex-col items-center space-y-4">
    <p>
      Pour ajouter une bibliothèque, veuillez nous contacter à
      <a href="mailto:contact@votresite.com" class="font-semibold underline italic"
        >contact@votresite.com</a
      >
      avec:
    </p>
    <ul class="w-full list-disc list-inside mb-4">
      <li>Le nom de la bibliothèque</li>
      <li>Le contact de la bibliothèque</li>
      <li>La liste des livres au format CSV</li>
    </ul>
    <p class="w-full">NB: La liste des livres doit être au format:</p>
    <p>Nom du livre | Auteur | Catégorie | Status(Empruntable/Nouveau)</p>
    <p>
      Nous nous chargerons d'ajouter votre bibliothèque à la plateforme dans les plus brefs délais.
    </p>
    <a
      href="mailto:contact@votresite.com?subject=Demande%20d'ajout%20de%20bibliothèque&body=Bonjour,%0A%0AJe%20souhaiterais%20ajouter%20ma%20bibliothèque%20à%20votre%20plateforme.%20Voici%20les%20informations%20nécessaires%20:%0A%0ANom%20de%20la%20bibliothèque%20:%0AAdresse%20:%0AContact%20:%0A%0AMerci%20d'avance.%0A"
      class="text-xs p-4 rounded-xl bg- hover:bg-linear-to-r from-white to-[#0A5EBE]/50 hover:scale-95 transition noise cursor-pointer"
    >
      Ajouter votre bibliothèque
    </a>
  </div>
</template>
