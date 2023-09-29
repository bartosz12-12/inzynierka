import {RouteRecordRaw} from "vue-router";
import tokenVerificationMiddleware from "@/core/guards/tokenVerificationMiddleware";
import AboutView from "@/views/AboutView.vue"

const DashboardRoutes: Array<RouteRecordRaw> = [
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: AboutView,
        beforeEnter: tokenVerificationMiddleware,
        redirect:{name:'Intersection'},
        children: [
            {
                path:'intersection',
                name:'Intersection',
                component:AboutView
            },
        ]
    }
];
export default DashboardRoutes;