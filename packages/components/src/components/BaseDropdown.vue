<template>
  <Dropdown
    :modelValue="props.modelValue"
    @update:modelValue="emit('update:modelValue', $event)"
    :options="props.options"
    :optionLabel="props.optionLabel"
    :optionValue="props.optionValue"
    :placeholder="props.placeholder"
    class="w-full md:w-14rem"
  />
</template>

<script setup>
import Dropdown from "primevue/dropdown";

const props = defineProps({
  modelValue: {
    default: undefined,
  },
  options: {
    type: Array,
    default: () => [],
  },
  optionLabel: {
    type: String,
    default: "name",
  },
  optionValue: {
    type: String,
    default: "value",
  },
  placeholder: {
    type: String,
    default: "",
  },
});

const emit = defineEmits(["update:modelValue"]);
</script>