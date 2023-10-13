import {RouteRecordRaw} from "vue-router";
import tokenVerificationMiddleware from "@/core/guards/tokenVerificationMiddleware";
import WarehouseView from "@/views/dashboard/children/Warehouse/WarehouseView.vue"
import DashboardView from "@/views/dashboard/DashboardView.vue"
import LinkView from "@/views/dashboard/children/LinkView.vue"
const DashboardRoutes: Array<RouteRecordRaw> = [
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: DashboardView,
        beforeEnter: tokenVerificationMiddleware,
        redirect:{name:'Warehouse'},
        children: [
            {
                path:'warehouse',
                name:'Warehouse',
                component:WarehouseView
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