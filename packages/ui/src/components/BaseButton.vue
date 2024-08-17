<template>
  <Button v-bind="$attrs" />
</template>

<script setup>
import Button from 'primevue/button'

const props = defineProps({
  ...Button.props
})
</script>
