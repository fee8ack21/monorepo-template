<template>
  <div class="container mx-auto py-6">
    <h2 class="mb-6 text-2xl">Home 2 Page - 使用 composable 與 page component</h2>
    <div class="flex items-center mb-6 pb-6 border-b-2">
      <BaseInputText
        v-model="searchState.username"
        class="mr-3"
        placeholder="Please enter username"
      ></BaseInputText>
      <BaseInputText
        v-model="searchState.email"
        class="mr-3"
        placeholder="Please enter email"
      ></BaseInputText>
      <BaseButton label="Search" @click="getAccounts" />
    </div>
    <DataTable class="mb-6" :value="data" tableStyle="min-width: 50rem">
      <Column field="id" header="ID"></Column>
      <Column field="userName" header="Username"></Column>
      <Column field="email" header="Email"></Column>
    </DataTable>
    <HomeCustomContent />
  </div>
</template>

<script setup lang="ts">
import { BaseButton, BaseInputText } from '@monorepo-template/ui'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import { useHome, HomeCustomContent } from '@monorepo-template/views'

const { searchState, data, getAccounts } = useHome()
</script>
