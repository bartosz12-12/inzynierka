import {RouteRecordRaw} from "vue-router";
import tokenVerificationMiddleware from "@/core/guards/tokenVerificationMiddleware";
import AboutView from "@/views/AboutView.vue"
import DashboardView from "@/views/dashboard/DashboardView.vue"
import LinkView from "@/views/dashboard/children/LinkView.vue"
const DashboardRoutes: Array<RouteRecordRaw> = [
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: DashboardView,
        beforeEnter: tokenVerificationMiddleware,
        redirect:{name:'Intersection'},
        children: [
            {
                path:'intersection',
                name:'Intersection',
                component:AboutView
            },
            {
                path:'link',
                name:'Link1',
                component:LinkView
            }
        ]
    }
];
export default DashboardRoutes;