import { createApp } from 'vue'
import '@/assets/style/index.scss'
import App from './App.vue'

// define api url
import { OpenAPI } from '@monorepo-template/api'
OpenAPI.BASE = import.meta.env.VITE_API_BASE_URL

// plugins
import '@/plugins/axios'

// primevue
import 'primevue/resources/themes/arya-blue/theme.css'
import PrimeVue from 'primevue/config'

const app = createApp(App)
app.use(PrimeVue)
app.mount('#app')
