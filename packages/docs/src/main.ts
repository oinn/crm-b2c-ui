import { createApp } from 'vue'
import UiKit from '@crm-b2c-ui/kit';
import App from './App.vue'
import router from './routes';

createApp(App)
  .use(router)
  .use(UiKit)
  .mount('#app')
