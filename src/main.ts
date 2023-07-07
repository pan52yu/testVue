import router from "@/router/index"
import ElementPlus from "element-plus"
import "element-plus/dist/index.css"
import "normalize.css"
import "@/css/tailwindcss.css"
import "@/css/base.scss"
import EvanUI from "./components"
import {createApp} from "vue"
import App from "./App.vue"
import store from "./store"

const app = createApp(App)
app.use(EvanUI)
app.use(ElementPlus)
app.use(router)
app.use(store)
app.mount("#app")
