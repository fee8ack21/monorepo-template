import { createApp } from 'vue'
import '@/assets/style/index.scss'
import App from './App.vue'
import Router from './router'

// define api url
import { OpenAPI } from '@monorepo-template/api'
OpenAPI.BASE = import.meta.env.VITE_API_BASE_URL

// plugins
import { axiosPlugin } from '@monorepo-template/plugins'
axiosPlugin.use()

// primevue
import 'primevue/resources/themes/aura-light-green/theme.css'
import PrimeVue from 'primevue/config'

const app = createApp(App)
app.use(PrimeVue)
app.use(Router)
app.mount('#app')
