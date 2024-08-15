import { createApp } from 'vue'
import '@/assets/style/index.scss'
import App from './App.vue'

// define api url
import { OpenAPI } from "@monorepo-template/api";
OpenAPI.BASE = import.meta.env.VITE_API_BASE_URL;

// plugins
import '@/plugins/axios'

createApp(App).mount('#app')
