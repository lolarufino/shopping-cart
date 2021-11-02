import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import FontAwesomeIcon from "../src/assets/font-awesome";

createApp(App).component("font-awesome-icon", FontAwesomeIcon).use(store).use(router).mount('#app');
