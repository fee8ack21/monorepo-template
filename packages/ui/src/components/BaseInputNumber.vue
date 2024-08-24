<template>
  <InputNumber v-bind="$attrs" />
</template>

<script setup>
import InputNumber from 'primevue/inputnumber'

const props = defineProps({
  ...InputNumber.props
})
</script>
