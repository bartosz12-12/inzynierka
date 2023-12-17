import {RouteRecordRaw} from "vue-router";
import LoginView from "@/views/Auth/children/LoginView.vue";
import RegisterView from "@/views/Auth/children/RegisterView.vue"
import VeryficationView from "@/views/Auth/children/VerificationView.vue";
import SuccessRegisterView from "@/views/Auth/children/SuccessRegisterView.vue";
import ForgotPasswordView from "@/views/Auth/children/ForgotPassword.vue";
import ResetPasswordView from "@/views/Auth/children/ResetPassword.vue";
import AuthView from "@/views/Auth/AuthView.vue";
import ifLoggedInGoToDashboardMiddleware from "@/core/guards/ifLoggedInGoToDashboardMiddleware";

const AuthRoutes: Array<RouteRecordRaw> = [
    {
        path: '/auth',
        name: 'Auth',
        component: AuthView,
        beforeEnter:ifLoggedInGoToDashboardMiddleware,
        children: [
            {
                path: 'login',
                name: 'Login',
                component: LoginView,

            },
            {
                path: 'register',
                name: 'Register',
                component: RegisterView,

            },
            {
                path: 'verification',
                name: 'Verification',
                component: VeryficationView,

            },
            {
                path: 'successRegister',
                name: 'SuccessRegister',
                component: SuccessRegisterView,

            },
            {
                path: 'forgotPassword',
                name: 'ForgotPassword',
                component: ForgotPasswordView,

            },
            {
                path: 'ResetPassword',
                name: 'ResetPassword',
                component: ResetPasswordView,

            }
        ]
    },
];
export default AuthRoutes;