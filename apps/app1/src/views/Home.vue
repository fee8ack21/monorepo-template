<template>
  <div class="container mx-auto py-6">
    <h2 class="mb-6 text-2xl">Home Page</h2>
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
    <div class="py-3 mb-6 text-center light:bg-primary-100 dark:bg-primary-400 text-white">
      Home Page Custom Content
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import { AccountService, GetAccountResponse } from '@monorepo-template/api'
import { add, uuidv4 } from '@monorepo-template/utilities'
import { BaseButton, BaseInputText } from '@monorepo-template/ui'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'

const searchState = reactive({
  username: '',
  email: ''
})

const data = ref<GetAccountResponse[] | null | undefined>([])

const getAccounts = async () => {
  try {
    const username = searchState.username.length > 0 ? searchState.username.trim() : undefined
    const email = searchState.email.length > 0 ? searchState.email.trim() : undefined

    data.value = await AccountService.getAccounts(username, email)
  } catch (err) {
    console.error(err)
  }
}
onMounted(async () => {
  console.log(add(1, 2))
  console.log(uuidv4())
  await getAccounts()
})
</script>
