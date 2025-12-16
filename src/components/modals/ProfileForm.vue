<template>
  <div>
    <h2 class="text-xl font-bold mb-2">Edit Profile</h2>
    <p>User ID: {{ userId }}</p>

    <button @click="$emit('close')" class="mt-4 px-4 py-2 bg-gray-700 text-white rounded">
      Close
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps({
  userId: Number,
})
</script>
