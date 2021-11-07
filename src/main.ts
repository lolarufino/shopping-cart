import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import FontAwesomeIcon from "../src/assets/font-awesome";
import Toast, { POSITION } from "vue-toastification";
import "vue-toastification/dist/index.css";

const options = {
    position: POSITION.BOTTOM_CENTER,
    timeout: 2000,
}

createApp(App).component("font-awesome-icon", FontAwesomeIcon).use(store).use(router).use(Toast, options).mount('#app');
