<template>
  <div class="flex justify-center">
    <img v-if="state.show" :src="state.url" alt="Logo" height="20" class="mr-2" />
    <span class="font-medium">©Monorepo Template 2024</span>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  logoUrl: {
    type: String,
    default: ''
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
