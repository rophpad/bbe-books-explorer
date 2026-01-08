<script setup lang="ts">
import { ref } from 'vue'
import { useModalStore } from '@/stores/modal'
import { useRouter, useRoute } from 'vue-router'

const modal = useModalStore()
const router = useRouter()
const route = useRoute()

const isOpen = ref(false)
const isCurrentPath = (path: string) => route.path === path
</script>

<template>
  <header class="flex items-center justify-between gap-8 p-4 lg:px-16 bg-white relative">
    <RouterLink to="/"><img src="/src/assets/images/b-logo.png" alt="" class="w-8" /></RouterLink>
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
        <div class="w-full flex items-center gap-2">
          <div
            class="w-max text-sm py-2 px-4 border border-black/20 rounded-full flex items-center gap-2 cursor-pointer hover:bg-black/5 transition"
            @click="
              () => {
                router.push('/bibliotheques')
              }
            "
          >
            <p>Bibliothèques</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              class="size-4 fill-black/20"
              v-if="isCurrentPath('/bibliotheques')"
            >
              <path
                fill=""
                d="m10 13.6l5.9-5.9q.275-.275.7-.275t.7.275t.275.7t-.275.7l-6.6 6.6q-.3.3-.7.3t-.7-.3l-2.6-2.6q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275z"
              />
            </svg>
          </div>
          <div
            class="w-max text-sm py-2 px-4 border border-black/20 rounded-full flex items-center gap-2 cursor-pointer hover:bg-black/5 transition"
            @click="
              () => {
                router.push('/livres')
              }
            "
          >
            <p>Livres</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              class="size-4 fill-black/20"
              v-if="isCurrentPath('/livres')"
            >
              <path
                fill=""
                d="m10 13.6l5.9-5.9q.275-.275.7-.275t.7.275t.275.7t-.275.7l-6.6 6.6q-.3.3-.7.3t-.7-.3l-2.6-2.6q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275z"
              />
            </svg>
          </div>

          <div
            class="w-max text-sm py-2 px-4 border border-black/20 rounded-full flex items-center gap-2 cursor-pointer hover:bg-black/5 transition"
            @click="
              () => {
                router.push('/recherche')
              }
            "
          >
            <p>Recherche</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              class="size-4 fill-black/20"
              v-if="isCurrentPath('/recherche')"
            >
              <path
                fill=""
                d="m10 13.6l5.9-5.9q.275-.275.7-.275t.7.275t.275.7t-.275.7l-6.6 6.6q-.3.3-.7.3t-.7-.3l-2.6-2.6q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275z"
              />
            </svg>
          </div>
        </div>
      </div>
      <!-- <LanguageSelector /> -->
      <span
        class="text-xs text-white text-center font-bold p-4 rounded-xl bg-[#0A5EBE] hover:scale-95 transition noise cursor-pointer"
        @click="() => modal.open('AddLibrary')"
      >
        Ajouter une bibliothèque
      </span>
      <!-- <a
        href="mailto:contact@votresite.com?subject=Demande%20d'ajout%20de%20bibliothèque&body=Bonjour,%0A%0AJe%20souhaiterais%20ajouter%20ma%20bibliothèque%20à%20votre%20plateforme.%20Voici%20les%20informations%20nécessaires%20:%0A%0ANom%20de%20la%20bibliothèque%20:%0AAdresse%20:%0AContact%20:%0A%0AMerci%20d'avance.%0A"
        class="text-xs p-4 rounded-xl bg- hover:bg-linear-to-r from-white to-[#0A5EBE]/50 hover:scale-95 transition noise cursor-pointer"
      >
        Ajouter votre bibliothèque
      </a> -->
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
      class="md:hidden h-screen absolute left-0 right-0 top-full bg-white shadow-md z-30 transition-transform duration-300 overflow-hidden p-8 flex flex-col items- gap-6"
    >
      <div class="w-full flex-col items-center space-y-4">
        <div
          class="w-max text-sm py-2 px-4 border border-black/20 rounded-full flex items-center gap-2 cursor-pointer hover:bg-black/5 transition"
          @click="
            () => {
              router.push('/bibliotheques')
            }
          "
        >
          <p>Bibliothèques</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            class="size-4 fill-black/20"
            v-if="isCurrentPath('/bibliotheques')"
          >
            <path
              fill=""
              d="m10 13.6l5.9-5.9q.275-.275.7-.275t.7.275t.275.7t-.275.7l-6.6 6.6q-.3.3-.7.3t-.7-.3l-2.6-2.6q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275z"
            />
          </svg>
        </div>
        <div
          class="w-max text-sm py-2 px-4 border border-black/20 rounded-full flex items-center gap-2 cursor-pointer hover:bg-black/5 transition"
          @click="
            () => {
              router.push('/livres')
            }
          "
        >
          <p>Livres</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            class="size-4 fill-black/20"
            v-if="isCurrentPath('/livres')"
          >
            <path
              fill=""
              d="m10 13.6l5.9-5.9q.275-.275.7-.275t.7.275t.275.7t-.275.7l-6.6 6.6q-.3.3-.7.3t-.7-.3l-2.6-2.6q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275z"
            />
          </svg>
        </div>

        <div
          class="w-max text-sm py-2 px-4 border border-black/20 rounded-full flex items-center gap-2 cursor-pointer hover:bg-black/5 transition"
          @click="
            () => {
              router.push('/recherche')
            }
          "
        >
          <p>Recherche</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            class="size-4 fill-black/20"
            v-if="isCurrentPath('/recherche')"
          >
            <path
              fill=""
              d="m10 13.6l5.9-5.9q.275-.275.7-.275t.7.275t.275.7t-.275.7l-6.6 6.6q-.3.3-.7.3t-.7-.3l-2.6-2.6q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275z"
            />
          </svg>
        </div>
      </div>
      <span
        class="text-xs text-white text-center font-bold p-4 rounded-xl bg-[#0A5EBE] hover:scale-95 transition noise cursor-pointer"
        @click="() => modal.open('AddLibrary')"
      >
        Ajouter une bibliothèque
      </span>
    </div>
  </header>
</template>
