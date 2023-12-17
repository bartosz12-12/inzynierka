import {NavigationGuardNext} from "vue-router";
import {apiPathsEnum} from "@/config/paths/ApiPathsEnum";
const warehouseConstructorPermission = (to: any, from: any, next: NavigationGuardNext) => {
    const typeUser = localStorage.getItem('typeUser');
    console.log(typeUser)
    if (typeUser === "5") {
        next();
    } else {
        next({ name: 'Warehouse' });
    }
};
export default warehouseConstructorPermission;