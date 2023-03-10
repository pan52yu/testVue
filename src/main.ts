import router from '@/router/index'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'normalize.css'
import '@/css/tailwindcss.css'
import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.use(store)
app.mount('#app')
