import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useModalStore = defineStore('modal', () => {
  const activeModal = ref<string | null>(null)
  const modalProps = ref<Record<string, any>>({})

  const open = (name: string, props: Record<string, any> = {}) => {
    activeModal.value = name
    modalProps.value = props
  }

  const close = () => {
    activeModal.value = null
    modalProps.value = {}
  }

  return { activeModal, modalProps, open, close }
})
