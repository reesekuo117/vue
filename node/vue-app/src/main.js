import { createApp } from 'vue'
// node_modules資料夾載入vue物件的createApp方法
// const createApp = require

import router from './router'

import App from './App.vue'
// 匯入App.vue進來

// import './assets/main.css'

createApp(App).use(router).mount('#app')
