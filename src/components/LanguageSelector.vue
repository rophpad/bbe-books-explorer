<template>
  <div class="relative inline-block" ref="dropdownRef">
    <!-- Trigger -->
    <button
      @click="toggle"
      class="w-30 flex items-center justify-center border border-black/10 px-3 py-2 rounded-full bg-gray-100 hover:bg-linear-to-r from-white to-[#0A5EBE]/50 hover:scale-95 transition noise text-sm text-black/70 cursor-pointer"
    >
      <!-- <span>{{ currentFlag }}</span> -->
      <span class="capitalize">{{ t(`lang.${locale}`) }}</span>

      <svg
        width="16"
        height="16"
        class="ml-2 text-black/50 transition-transform"
        :class="{ 'rotate-180': open }"
        viewBox="0 0 20 20"
        fill="none"
      >
        <path
          d="M6 8l4 4 4-4"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>

    <!-- Dropdown -->
    <div
      v-if="open"
      class="absolute mt-2 w-full bg-gray-100 border border-black/10 rounded-md shadow-md overflow-hidden z-50"
    >
      <button
        v-for="lang in languages"
        :key="lang.code"
        @click="setLocale(lang.code)"
        class="flex items-center gap-2 px-3 py-2 w-full text-left hover:bg-black/5"
      >
        <span>{{ lang.flag }}</span>
        <span>{{ t(`lang.${lang.code}`) }}</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

/*
  Minimal local i18n shim to avoid requiring the 'vue-i18n' package.
  This provides a simple `t` function and a reactive `locale` ref used by this component.
  Replace with your real i18n integration once 'vue-i18n' is installed.
*/
const translations: Record<string, Record<string, string>> = {
  en: { 'lang.en': 'English', 'lang.fr': 'French' },
  fr: { 'lang.en': 'Anglais', 'lang.fr': 'Français' },
}

const locale = ref<string>('en')

function t(key: string) {
  return translations[locale.value]?.[key] || key
}

const open = ref(false)
const dropdownRef = ref<HTMLElement | null>(null)

const languages = [
  { code: 'fr', flag: '🇫🇷' },
  { code: 'en', flag: '🇬🇧' },
]

const currentFlag = computed(() => {
  return languages.find((l) => l.code === locale.value)?.flag || '🌐'
})

function toggle() {
  open.value = !open.value
}

function setLocale(lang: string) {
  locale.value = lang
  open.value = false
}

// close when clicking outside
function handleClickOutside(e: MouseEvent) {
  if (!dropdownRef.value) return
  if (!dropdownRef.value.contains(e.target as Node)) {
    open.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>
