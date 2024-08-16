<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { AccountService } from '@monorepo-template/api'
import { add, uuidv4 } from '@monorepo-template/utilities'
import { BaseButton, BaseDropdown } from '@monorepo-template/ui'

onMounted(() => console.log(add(1, 2)))
onMounted(() => console.log(uuidv4()))
onMounted(async () => await AccountService.getAccounts())

const value = ref()
const options = [
  { name: 'option 1', value: 1 },
  { name: 'option 2', value: 2 },
  { name: 'option 3', value: 3 }
]
</script>

<template>
  <div class="container mx-auto py-3">
    <BaseDropdown class="mb-3" placeholder="請選擇" v-model="value" :options="options" />
    <BaseButton class="mb-3" label="確認" />

    <div class="w-full p-5 bg-primary-100">Tailwind Primary Color</div>
  </div>
</template>
