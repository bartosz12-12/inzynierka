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
import UpdateWarehouseView from "@/views/dashboard/children/Warehouse/update/UpdateWarehouseView.vue"
import TemporaryWarehouse from "@/views/dashboard/children/TemporaryWarehouse/TemporaryWarehouseView.vue"
import TemporaryWarehouseDetailView from "@/views/dashboard/children/TemporaryWarehouse/detail/TemporaryWarehouseDetailView.vue"
import TemporaryWarehouseAddView from "@/views/dashboard/children/TemporaryWarehouse/detail/add/TemporaryWarehouseAddView.vue"
import InternalReports from "@/views/dashboard/children/InternalReports/InternalReports.vue"
import WarehouseDetails from "@/views/dashboard/children/Warehouse/detail/WarehouseDetailsView.vue"


const DashboardRoutes: Array<RouteRecordRaw> = [
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: DashboardView,
        beforeEnter: tokenVerificationMiddleware,
        redirect:{name:'Warehouse'},
        children: [
            //Warehouse
            {
                path:'warehouse',
                name:'Warehouse',
                component:WarehouseView
            },
            {
                path:'warehouse/add',
                name:'WarehouseAdd',
                component:WarehouseAddWiev
            },
            {
                path:'warehouse/update/:id',
                name:'ProductUpdate',
                component:UpdateWarehouseView
            },
            {
                path:'warehouse/details/:id',
                name:'WarehouseDetail',
                component:WarehouseDetails,
            },

            //Notification
            {
                path:'notification',
                name:'Notification',
                component:NotificationView
            },

            //Employee
            {
                path:'addEmployee',
                name:'AddEmployee',
                component:AddEmployeeViewView
            },

            //TemporaryWarehouse
            {
                path:'temporaryWarehouse',
                name:'TemporaryWarehouse',
                component:TemporaryWarehouse,
            },
            {
                path:'temporaryWarehouseDetail/:id',
                name:'TemporaryWarehouseDetail',
                component:TemporaryWarehouseDetailView,
            },
            {
                path:'internalReports',
                name:'InternalReports',
                component:InternalReports,
            },
        ]
    }
];
export default DashboardRoutes;