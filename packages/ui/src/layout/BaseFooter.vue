<template>
  <div class="flex justify-center py-3 bg-primary-100 text-primary-500">
    <img v-if="state.show" :src="state.url" alt="Logo" height="20" class="mr-2" />
    <span class="font-medium">{{ props.copyright }}</span>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  logoUrl: {
    type: String,
    default: ''
  },
  copyright: {
    type: String,
    default: '©Monorepo Template 2024'
  }
})

const state = computed(() => {
  const url = props.logoUrl.trim()
  return {
    show: url.length > 0,
    url
  }
})
</script>
