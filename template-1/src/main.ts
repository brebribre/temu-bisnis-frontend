import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index'; // Import the router configuration
import './style.css'; // Tailwind or any global styles

const app = createApp(App);

app.use(router); // Tell Vue to use the router
app.mount('#app');
