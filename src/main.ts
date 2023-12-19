import { createApp } from 'vue';
import App from './App.vue';
import { UserService } from "@/services/UserService/UserService";
import router from './router';
import { createI18n } from "vue-i18n";
import pl from "@/config/translates/pl";
import en from "@/config/translates/en";
import ua from "@/config/translates/ua";
import by from "@/config/translates/by";

const userService = new UserService();
const user = await userService.getUserData();
const sysLang = user?.language ?? navigator.language.substring(0, 2) ?? 'en';
console.log("TEST", user?.language, user?.email);
const i18n = createI18n({
    legacy: false, 
    locale: sysLang, 
    messages: { 
        pl: pl,
        en: en,
        ua: ua, 
        by: by },
});

const app = createApp(App);
app.use(router);
app.use(i18n);
console.log('Providing user:', user);
app.provide('$user', user);
app.config.globalProperties.$isInstanceOf = () => {
    return false;
};

app.mount('#app');

process.env.baseApiUrl = "http://localhost:7057/";
export default app;