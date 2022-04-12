import { createApp } from 'vue'
import UiKit from '@crm-b2c-ui/kit';
import App from './App.vue'
import router from './routes';
import './styles/index.scss';
import '@crm-b2c-ui/kit/dist/style.css';

createApp(App)
  .use(router)
  .use(UiKit)
  .mount('#app')
