import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

if (process.env.NODE_ENV === 'production') {
  // eslint-disable-next-line no-undef
  __webpack_public_path__ = `https://dgiacco.github.io/Punta-Pass/`;
}
