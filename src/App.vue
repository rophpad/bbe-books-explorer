<script setup lang="ts">
import ModalRoot from './components/ModalRoot.vue'
import AppHeader from './components/AppHeader.vue'
import FilterDropdown from './components/FilterDropdown.vue'
import BookCard from './components/BookCard.vue'
import Pagination from './components/Pagination.vue'

import { ref } from 'vue'

import { locations, categories, statuses } from './data/all'

const category = ref<string | null>(null)
const location = ref<string | null>(null)
const bookStatus = ref<string | null>(null)
const searchQuery = ref<string>('')
</script>

<template>
  <ModalRoot />
  <div id="app" class="h-full bg-gray-100 border">
    <AppHeader />
    <section
      class="min-h-full bg-linear-to-r from-white to-[#0A5EBE] text-white p-8 md:p-30 flex flex-col gap-8 items-center justify-center noise relative"
    >
      <h1 class="text-center text-2xl md:text-4xl font-bold">
        Explorez depuis n’importe où <br />
        les livres de votre bibliothèque !
      </h1>
      <div
        class="w-full md:w-1/2 absolute z-10 top-56 bg-white p-4 rounded-xl flex flex-col items-center justify-center"
      >
        <div class="w-full relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            class="fill-gray-400 absolute top-1/2 left-4 transform -translate-y-1/2 text-black/50"
          >
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
            class="border border-black/20 bg-white w-full pl-16 p-6 rounded-md text-black outline-none focus:ring-2 focus:ring-[#0A5EBE] transition"
            v-model="searchQuery"
          />
          <button
            :class="`${searchQuery ? 'bg-[#0A5EBE]' : 'bg-[#0A5EBE]'} text-white text-sm px-4 py-3 rounded-full absolute top-1/2 right-4 transform -translate-y-1/2 shadow-md hover:scale-95 transition cursor-pointer`"
          >
            Rechercher
          </button>
        </div>
        <div class="w-full flex flex-col lg:flex-row gap-4 mt-4">
          <FilterDropdown
            v-model="location"
            :options="locations"
            placeholder="Toutes les bibliothèques"
          />
          <FilterDropdown
            v-model="category"
            :options="categories"
            placeholder="Toutes les catégories"
          />
          <FilterDropdown v-model="bookStatus" :options="statuses" placeholder="Tous les statuts" />
        </div>
      </div>
    </section>
    <section class="pt-24 bg-gray-100 flex flex-col items-center justify-center">
      <div class="px-36 w-full flex items-center gap-2">
        <div
          class="w-max text-sm py-2 px-4 border border-black/20 rounded-full flex items-center gap-2 cursor-pointer hover:bg-black/5 transition"
        >
          <p>Toutes les bibliothèques</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            class="size-4 fill-black/20"
          >
            <path
              fill=""
              d="m10 13.6l5.9-5.9q.275-.275.7-.275t.7.275t.275.7t-.275.7l-6.6 6.6q-.3.3-.7.3t-.7-.3l-2.6-2.6q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275z"
            />
          </svg>
        </div>
        <div
          class="w-max text-sm py-2 px-4 border border-black/20 rounded-full flex items-center gap-2 cursor-pointer hover:bg-black/5 transition"
        >
          Toutes les livres
        </div>
      </div>
      <div
        class="w-full px-3 py-6 flex flex-col items-center justify-center gap-4 no-scrollbar overflow-y-auto"
      >
        <div class="flex flex-col gap-4">
          <div class="flex items-center justify-between py-2 border-b border-black/20">
            <p class="font-bold text-xl">Bibliothèque de Calavi</p>
            <div
              class="p-2 border border-black/20 flex items-center justify-center rounded-full cursor-pointer hover:bg-black/5 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                class="size-4 fill-black/20"
              >
                <path
                  fill=""
                  d="M16.175 13H5q-.425 0-.712-.288T4 12t.288-.712T5 11h11.175l-4.9-4.9q-.3-.3-.288-.7t.313-.7q.3-.275.7-.288t.7.288l6.6 6.6q.15.15.213.325t.062.375t-.062.375t-.213.325l-6.6 6.6q-.275.275-.687.275T11.3 19.3q-.3-.3-.3-.712t.3-.713z"
                />
              </svg>
            </div>
          </div>
          <div class="flex flex-wrap items-center justify-center gap-4">
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
          </div>
        </div>

        <div class="flex flex-col gap-4">
          <div class="flex items-center justify-between py-2 border-b border-black/20">
            <p class="font-bold text-xl">Bibliothèque de Calavi</p>
            <div
              class="p-2 border border-black/20 flex items-center justify-center rounded-full cursor-pointer hover:bg-black/5 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                class="size-4 fill-black/20"
              >
                <path
                  fill=""
                  d="M16.175 13H5q-.425 0-.712-.288T4 12t.288-.712T5 11h11.175l-4.9-4.9q-.3-.3-.288-.7t.313-.7q.3-.275.7-.288t.7.288l6.6 6.6q.15.15.213.325t.062.375t-.062.375t-.213.325l-6.6 6.6q-.275.275-.687.275T11.3 19.3q-.3-.3-.3-.712t.3-.713z"
                />
              </svg>
            </div>
          </div>
          <div class="flex flex-wrap items-center justify-center gap-4">
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
          </div>
        </div>

        <div class="flex flex-col gap-4">
          <div class="flex items-center justify-between py-2 border-b border-black/20">
            <p class="font-bold text-xl">Bibliothèque de Calavi</p>
            <div
              class="p-2 border border-black/20 flex items-center justify-center rounded-full cursor-pointer hover:bg-black/5 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                class="size-4 fill-black/20"
              >
                <path
                  fill=""
                  d="M16.175 13H5q-.425 0-.712-.288T4 12t.288-.712T5 11h11.175l-4.9-4.9q-.3-.3-.288-.7t.313-.7q.3-.275.7-.288t.7.288l6.6 6.6q.15.15.213.325t.062.375t-.062.375t-.213.325l-6.6 6.6q-.275.275-.687.275T11.3 19.3q-.3-.3-.3-.712t.3-.713z"
                />
              </svg>
            </div>
          </div>
          <div class="flex flex-wrap items-center justify-center gap-4">
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
          </div>
        </div>

        <div class="flex flex-col items-center justify-between gap-4 mt-8">
          <p class="text-2xl font-bold">Tous les livres</p>
          <div class="flex flex-wrap items-center justify-center gap-4">
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
          </div>
          <Pagination :total-pages="100" />
        </div>
      </div>
    </section>
  </div>
</template>
