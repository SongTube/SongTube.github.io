import { createApp } from 'vue';
import { createHead } from '@vueuse/head';

import App from './App.vue';
import router from './router';

const app = createApp(App);
const head = createHead();

app.use(head).use(router).mount('#app');
