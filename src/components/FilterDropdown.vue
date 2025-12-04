<template>
  <div class="w-full relative inline-block" ref="dropdownRef">
    <!-- Trigger -->
    <button
      @click="toggle"
      class="w-full flex items-center justify-between border border-black/10 px-3 py-2 rounded-full bg-gray-50 text-black/70 cursor-pointer"
      :aria-expanded="open"
      type="button"
    >
      <div class="flex items-center gap-2 truncate">
        <span v-if="selectedLabel" class="truncate">{{ selectedLabel }}</span>
        <span v-else class="text-black/50 truncate">{{ placeholder }}</span>
      </div>

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
      class="absolute mt-2 w-full bg-white border border-black/10 rounded-md shadow-md overflow-hidden z-50"
    >
      <div v-if="searchable" class="px-3 py-2 border-b border-black/5">
        <input
          v-model="search"
          class="w-full outline-none px-2 py-1 rounded text-sm"
          :placeholder="`Search ${placeholder || ''}`"
        />
      </div>

      <div class="max-h-56 overflow-auto">
        <button
          v-for="opt in filteredOptions"
          :key="opt.value"
          @click="select(opt)"
          class="flex items-center gap-2 px-3 py-2 w-full text-center text-sm hover:bg-black/5"
        >
          <span v-if="opt.icon" class="text-lg">{{ opt.icon }}</span>
          <span class="truncate flex-1 text-black">{{ opt.label }}</span>
          <svg v-if="isSelected(opt)" width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path
              d="M5 13l4 4L19 7"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>

        <div v-if="filteredOptions.length === 0" class="px-3 py-2 text-sm text-black/50">
          No results
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount, watch } from 'vue'

type Option = { value: string; label: string; icon?: string }

const props = defineProps<{
  modelValue: string | string[] | null
  options: Option[]
  placeholder?: string
  multiple?: boolean
  searchable?: boolean
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | string[] | null): void
}>()

const open = ref(false)
const dropdownRef = ref<HTMLElement | null>(null)
const search = ref('')

const searchable = computed(() => (props.searchable === undefined ? true : props.searchable))

const filteredOptions = computed(() => {
  const q = search.value.trim().toLowerCase()
  if (!q) return props.options || []
  return (props.options || []).filter((o) => o.label.toLowerCase().includes(q))
})

const selectedLabel = computed(() => {
  if (props.multiple) {
    if (!Array.isArray(props.modelValue) || props.modelValue.length === 0) return ''
    const labels = props.modelValue
      .map((v) => props.options.find((o) => o.value === v)?.label)
      .filter(Boolean)
    return labels.join(', ')
  }
  return props.options.find((o) => o.value === props.modelValue)?.label || ''
})

function toggle() {
  open.value = !open.value
}

function close() {
  open.value = false
}

function select(opt: Option) {
  if (props.multiple) {
    const arr = Array.isArray(props.modelValue) ? [...props.modelValue] : []
    const idx = arr.indexOf(opt.value)
    if (idx >= 0) arr.splice(idx, 1)
    else arr.push(opt.value)
    emit('update:modelValue', arr)
  } else {
    emit('update:modelValue', opt.value)
    close()
  }
}

function isSelected(opt: Option) {
  if (props.multiple) return Array.isArray(props.modelValue) && props.modelValue.includes(opt.value)
  return props.modelValue === opt.value
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

// clear search when closing
watch(open, (v) => {
  if (!v) search.value = ''
})
</script>

<style scoped>
/* Minimal styling; the project uses Tailwind classes so this is intentionally small. */
.truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
