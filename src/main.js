import '../src/assets/main.css'
import 'bootstrap/dist/css/bootstrap.css'

import { createApp } from 'vue'
import App from './App.vue'
import axiosInstance from "@/axios";
import router from './router'
import store from "@/store";

const app = createApp(App)

app.use(router)
app.use(store)

app.config.globalProperties.$axios = axiosInstance

app.mount('#app')


