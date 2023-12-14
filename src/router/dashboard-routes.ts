import {RouteRecordRaw} from "vue-router";
import tokenVerificationMiddleware from "@/core/guards/tokenVerificationMiddleware";
import WarehouseView from "@/views/dashboard/children/Warehouse/WarehouseView.vue"
import DashboardView from "@/views/dashboard/DashboardView.vue"
import LinkView from "@/views/dashboard/children/LinkView.vue"
import NotificationView from "@/views/dashboard/children/Notification/NotificationView.vue"
import AddEmployeeViewView from "@/views/dashboard/children/Employees/AddEmployeeView.vue"
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
                path:'notification',
                name:'Notification',
                component:NotificationView
            },
            {
                path:'AddEmployee',
                name:'AddEmployee',
                component:AddEmployeeViewView
            }
        ]
    }
];
export default DashboardRoutes;