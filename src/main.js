import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const app = createApp(App)

app.use(VueSweetalert2).use(router).mount('#app')