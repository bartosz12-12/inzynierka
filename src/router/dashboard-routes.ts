import {RouteRecordRaw} from "vue-router";
import tokenVerificationMiddleware from "@/core/guards/tokenVerificationMiddleware";
import permissionsVerification from "@/core/guards/permissionsVerification";
import constructorManagerPermission from "@/core/guards/constructorManagerPermission";
import secretariatPermission from "@/core/guards/secretariatPermission";
import warehouseConstructorPermission from "@/core/guards/warehouseConstructorPermission";
import warehouseManagerPermission from "@/core/guards/warehouseManagerPermission";
import warehouseSecretariatPermission from "@/core/guards/warehouseSecretariatPermission";
import WarehouseView from "@/views/dashboard/children/Warehouse/WarehouseView.vue"
import DashboardView from "@/views/dashboard/DashboardView.vue"
import LinkView from "@/views/dashboard/children/LinkView.vue"
import NotificationView from "@/views/dashboard/children/Notification/NotificationView.vue"
import AddEmployeeViewView from "@/views/dashboard/children/Employees/AddEmployeeView.vue"
import WarehouseAddWiev from "@/views/dashboard/children/Warehouse/add/WarehouseAddView.vue"

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
                beforeEnter: permissionsVerification,
                path:'warehouse/add',
                name:'WarehouseAdd',
                component:WarehouseAddWiev
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