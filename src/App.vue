<script setup lang="ts">
import ModalRoot from './components/ModalRoot.vue'
import AppHeader from './components/AppHeader.vue'
import { RouterView } from 'vue-router'
import { Libraries } from './data/libraries';
import { onMounted } from 'vue';
import { createBooksList } from './helpers/createBooksList';
import { useSearchStore } from './stores/search';

const searchStore = useSearchStore();

onMounted (() => {
  // Initialize the global books list
  searchStore.setAllBooks(createBooksList(Libraries));
});
</script>

<template>
  <div id="app" class="h-full">
    <AppHeader />
    <div>
      <RouterView />
    </div>
  </div>
  <ModalRoot />
</template>
