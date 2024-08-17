<script setup lang="ts">
import { onMounted, ref } from 'vue'
// import { AccountService } from '@monorepo-template/api'
import { add, uuidv4 } from '@monorepo-template/utilities'
import { BaseButton, BaseDropdown, BaseToTop, BaseLayout } from '@monorepo-template/ui'

onMounted(() => console.log(add(1, 2)))
onMounted(() => console.log(uuidv4()))
// onMounted(async () => await AccountService.getAccounts())

const dropdonwValue = ref()
const dropdownOptions = [
  { name: 'option 1', value: 1 },
  { name: 'option 2', value: 2 },
  { name: 'option 3', value: 3 }
]
const onDropdownChange = (e) => console.log(e)
</script>

<template>
  <BaseLayout>
    <div class="container mx-auto py-3">
      {{ dropdonwValue }}
      <BaseDropdown
        @change="onDropdownChange"
        class="mb-3"
        placeholder="請選擇"
        v-model="dropdonwValue"
        optionLabel="name"
        optionValue="value"
        :options="dropdownOptions"
      />
      <BaseButton class="mb-3" label="確認" />

      <div class="w-full p-5 bg-primary-100">Tailwind Primary Color</div>
    </div></BaseLayout
  >
  <BaseToTop></BaseToTop>
</template>
