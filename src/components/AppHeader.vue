<script setup lang="ts">
import LanguageSelector from './LanguageSelector.vue'
import { ref } from 'vue'
import { useModalStore } from '@/stores/modal'

const modal = useModalStore()

const openProfileModal = () => {
  modal.open('ProfileForm', { userId: 12345 })
}
const isOpen = ref(false)
</script>

<template>
  <header class="flex items-center justify-between gap-8 p-4 lg:px-16 bg-white relative">
    <img src="/src/assets/images/logo_BE.png" alt="" class="w-12" />
    <div class="hidden md:flex w-full items-center justify-between">
      <div class="flex gap-4">
        <!-- <span
          class="text-xs p-4 rounded-xl bg-gray-100 hover:bg-linear-to-r from-white to-[#0A5EBE]/50 hover:scale-95 transition noise cursor-pointer"
          @click="() => modal.open('LibraryLocation')"
          >Emplacements des bibliothèques
        </span>
        <span
          class="text-xs p-4 rounded-xl bg-gray-100 hover:bg-linear-to-r from-white to-[#0A5EBE]/50 hover:scale-95 transition noise cursor-pointer"
          @click="() => modal.open('BorrowBooks')"
          >Comment prêter un livre ?</span
        > -->
      </div>
      <!-- <LanguageSelector /> -->
       <span
          class="text-xs p-4 rounded-xl bg-gray-100 hover:bg-linear-to-r from-white to-[#0A5EBE]/50 hover:scale-95 transition noise cursor-pointer"
          @click="() => modal.open('BorrowBooks')"
          >
          Ajouter une bibliothèque
          </span
        >
    </div>

    <!-- Mobile hamburger -->
    <button
      class="md:hidden flex flex-col items-center justify-center gap-px size-8"
      @click="isOpen = !isOpen"
      :aria-expanded="isOpen"
      aria-label="Toggle menu"
    >
      <span
        class="block w-5 h-0.5 bg-black transition-transform duration-300"
        :class="isOpen ? 'translate-y- rotate-45' : '-translate-y-1.5'"
      />
      <span
        class="block w-5 h-0.5 bg-black transition-opacity duration-300"
        :class="isOpen ? 'opacity-0' : 'opacity-100'"
      />
      <span
        class="block w-5 h-0.5 bg-black transition-transform duration-300"
        :class="isOpen ? '-translate-y-1.5 -rotate-45' : 'translate-y-1.5'"
      />
    </button>

    <!-- Mobile menu -->
    <div
      v-if="isOpen"
      class="md:hidden h-screen absolute left-0 right-0 top-full bg-white shadow-md z-30 transition-transform duration-300 overflow-hidden p-8 flex flex-col items-center gap-6"
    >
      <div class="flex flex-col gap-4">
        <span
          class="text-xs p-4 rounded-xl bg-gray-100 hover:bg-linear-to-r from-white to-[#0A5EBE]/50 hover:scale-95 transition noise cursor-pointer"
          @click="() => modal.open('LibraryLocation')"
          >Emplacements des bibliothèques</span
        >
        <span
          class="text-xs p-4 rounded-xl bg-gray-100 hover:bg-linear-to-r from-white to-[#0A5EBE]/50 hover:scale-95 transition noise cursor-pointer"
          @click="() => modal.open('BorrowBooks')"
          >Comment prêter un livre ?</span
        >
      </div>
      <LanguageSelector />
    </div>
  </header>
</template>
