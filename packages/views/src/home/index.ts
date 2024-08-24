import { onMounted, reactive, ref } from 'vue'
import { AccountService, GetAccountResponse } from '@monorepo-template/api'
import HomeCustomContent from './HomeCustomContent.vue'

const useHome = () => {
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
  onMounted(async () => await getAccounts())

  return { searchState, data, getAccounts }
}

export { useHome, HomeCustomContent }
