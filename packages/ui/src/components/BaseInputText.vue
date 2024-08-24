<template>
  <InputText v-bind="$attrs" />
</template>

<script setup>
import InputText from 'primevue/inputtext'

const props = defineProps({
  ...InputText.props
})
</script>
