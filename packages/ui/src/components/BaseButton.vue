<template>
  <Button :label="props.label" />
  <p class="font-bold">Lorem ipsum dolor sit amet.</p>
</template>
<script setup>
import Button from 'primevue/button'

const props = defineProps({
  label: {
    type: String,
    default: ''
  }
})
</script>
