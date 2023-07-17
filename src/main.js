import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'

import { createApp } from 'vue'
import App from './App.vue'
import axiosInstance from '@/axios'
import router from './router'
import store from '@/store'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives
})

const app = createApp(App)

app.use(router)
app.use(store)

app.config.globalProperties.$axios = axiosInstance

app.use(vuetify).mount('#app')
