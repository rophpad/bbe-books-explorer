<script setup lang="ts">
import ModalRoot from './components/ModalRoot.vue'
import AppHeader from './components/AppHeader.vue'
import { RouterView } from 'vue-router'
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
