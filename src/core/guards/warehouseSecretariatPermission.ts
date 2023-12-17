import {NavigationGuardNext} from "vue-router";
import {apiPathsEnum} from "@/config/paths/ApiPathsEnum";
const warehouseSecretariatPermission = (to: any, from: any, next: NavigationGuardNext) => {
    const typeUser = localStorage.getItem('typeUser');
    console.log(typeUser)
    if (typeUser === "6") {
        next();
    } else {
        next({ name: 'Warehouse' });
    }
};
export default warehouseSecretariatPermission;