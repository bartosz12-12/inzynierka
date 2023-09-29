import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createSSRApp} from 'vue'
import {UserService} from "@/services/UserService/UserService";

createApp(App).use(router).mount('#app')
const app = createSSRApp(App);
const userService = new UserService();
async function provideUser() {
    const user = await userService.getUserData();
    app.provide('$user', user);
}