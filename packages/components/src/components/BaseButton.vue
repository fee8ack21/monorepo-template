<template>
  <Button :label="props.label" />
</template>
<script setup>
import Button from "primevue/button";

const props = defineProps({
  label: {
    type: String,
    default: "",
  },
});
</script>