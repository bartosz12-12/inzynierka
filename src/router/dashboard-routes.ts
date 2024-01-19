import {RouteRecordRaw} from "vue-router";
import tokenVerificationMiddleware from "@/core/guards/tokenVerificationMiddleware";
import addEmpoyeePermission from "@/core/guards/addEmpoyeePermission";
import magazynPermission from "@/core/guards/magazynPermission";
import temporaryWarehousePermission from "@/core/guards/temporaryWarehousePermission";
import zgloszeniaWewPermission from "@/core/guards/zgloszeniaWewPermission";
import zgloszeniaWewBudPermission from "@/core/guards/zgloszeniaWewBudPermission";
import WarehouseView from "@/views/dashboard/children/Warehouse/WarehouseView.vue"
import DashboardView from "@/views/dashboard/DashboardView.vue"
import NotificationView from "@/views/dashboard/children/Notification/NotificationView.vue"
import AddEmployeeViewView from "@/views/dashboard/children/Employees/AddEmployeeView.vue"
import WarehouseAddWiev from "@/views/dashboard/children/Warehouse/add/WarehouseAddView.vue"
import UpdateWarehouseView from "@/views/dashboard/children/Warehouse/update/UpdateWarehouseView.vue"
import TemporaryWarehouse from "@/views/dashboard/children/TemporaryWarehouse/TemporaryWarehouseView.vue"
import TemporaryWarehouseDetailView from "@/views/dashboard/children/TemporaryWarehouse/detail/TemporaryWarehouseDetailView.vue"
import InternalReports from "@/views/dashboard/children/InternalReports/InternalReports.vue"
import WarehouseDetails from "@/views/dashboard/children/Warehouse/detail/WarehouseDetailsView.vue"
import InternalReportsDetailView from "@/views/dashboard/children/InternalReports/detail/InternalReportsDetailView.vue"
import InternalReportsForMenager from "@/views/dashboard/children/InternalReportsForMenager/InternalReportsForMenagerView.vue"
import InternalReportsForMenagerDetailView from "@/views/dashboard/children/InternalReportsForMenager/detail/InternalReportsForMenagerDetailView.vue"


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
                beforeEnter: magazynPermission,
                path:'warehouse',
                name:'Warehouse',
                component:WarehouseView
            },
            {
                beforeEnter: magazynPermission,
                path:'warehouse/add',
                name:'WarehouseAdd',
                component:WarehouseAddWiev
            },
            {
                beforeEnter: magazynPermission,
                path:'warehouse/update/:id',
                name:'ProductUpdate',
                component:UpdateWarehouseView
            },
            {
                beforeEnter: magazynPermission,
                path:'warehouse/details/:id',
                name:'WarehouseDetail',
                component:WarehouseDetails,
            },

            //Notification
            {
                beforeEnter: magazynPermission,
                path:'notification',
                name:'Notification',
                component:NotificationView
            },

            //Employee
            {
                beforeEnter: addEmpoyeePermission,
                path:'addEmployee',
                name:'AddEmployee',
                component:AddEmployeeViewView
            },

            //TemporaryWarehouse
            {
                beforeEnter: temporaryWarehousePermission,
                path:'temporaryWarehouse',
                name:'TemporaryWarehouse',
                component:TemporaryWarehouse,
            },
            {
                beforeEnter: temporaryWarehousePermission,
                path:'temporaryWarehouseDetail/:id',
                name:'TemporaryWarehouseDetail',
                component:TemporaryWarehouseDetailView,
            },
            
        
            //InternalReports
            {
                beforeEnter: zgloszeniaWewBudPermission,
                path:'internalReports',
                name:'InternalReports',
                component:InternalReports,
            },
            {
                beforeEnter: zgloszeniaWewBudPermission,
                path:'internalReports/Detail/:id',
                name:'InternalReportsDetailView',
                component:InternalReportsDetailView,
            },

            //InternalReportsForMenager
            {
                beforeEnter: zgloszeniaWewPermission,
                path:'internalReportsForMenager',
                name:'InternalReportsForMenager',
                component:InternalReportsForMenager,
            },
            {
                beforeEnter: zgloszeniaWewPermission,
                path:'internalReportsForMenager/Detail/:id',
                name:'internalReportsForMenagerDetailView',
                component:InternalReportsForMenagerDetailView,
            },
            
        ]
    }
];
export default DashboardRoutes;