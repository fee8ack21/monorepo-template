<template>
  <Dropdown v-bind="$attrs" />
</template>

<script setup>
import Dropdown from 'primevue/dropdown'

const props = defineProps({
  ...Dropdown.props
})
</script>
