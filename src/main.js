import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import ZhUI from "../packages/index";
import Message from '../packages/Message'
window.message = Message
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ZhUI);

app.mount('#app')
