<template>
  <transition name="fade-scale">
    <div
      v-if="activeModal"
      :class="[
        'fixed inset-0 flex items-center justify-center z-50',
        modalProps?.background || 'bg-black/40 bg-opacity-50',
      ]"
      @click.self="close"
    >
      <div
        class="bg-white rounded-lg shadow-lg p-4 w-full max-h-full md:h-auto md:max-w-xl relative transform transition-all mx-4 overflow-auto"
      >
        <button @click="close" class="absolute top-3 right-3 text-gray-500 hover:text-gray-800">
          ✕
        </button>
        <component :is="modalComponent" v-bind="modalProps" @close="close" />
      </div>
    </div>
  </transition>
</template>

<style>
.fade-scale-enter-active,
.fade-scale-leave-active {
  transition: all 0.25s ease;
}
.fade-scale-enter-from {
  opacity: 0;
  transform: scale(0.95);
}
.fade-scale-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
</style>

<script setup lang="ts">
import { computed, onBeforeUnmount, watch } from 'vue'
import ProfileForm from './modals/ProfileForm.vue'
import { useModalStore } from '@/stores/modal'

const componentsMap: Record<string, any> = {
  ProfileForm,
}

const modal = useModalStore()

const modalComponent = computed(() => (modal.activeModal ? componentsMap[modal.activeModal] : null))
const activeModal = computed(() => modal.activeModal)
const modalProps = computed(() => modal.modalProps)

const close = modal.close

// --- Auto-close logic ---
let timeoutId: number | null = null

watch(
  () => activeModal.value,
  (isOpen) => {
    // Clear previous timers
    if (timeoutId) {
      clearTimeout(timeoutId)
      timeoutId = null
    }

    if (isOpen && modalProps.value?.closeAfter) {
      const delay = Number(modalProps.value.closeAfter)

      timeoutId = window.setTimeout(() => {
        close()
        timeoutId = null
      }, delay)
    }
  },
)

onBeforeUnmount(() => {
  if (timeoutId) clearTimeout(timeoutId)
})
</script>
