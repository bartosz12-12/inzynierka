import { NavigationGuardNext } from "vue-router";
import { apiPathsEnum } from "@/config/paths/ApiPathsEnum";
const temporaryWarehousePermission = (
  to: any,
  from: any,
  next: NavigationGuardNext
) => {
  const typeUser = localStorage.getItem("typeUser");
  console.log(typeUser);
  if (
    typeUser === "1" ||
    typeUser === "2" ||
    typeUser === "3" ||
    typeUser === "5" ||
    typeUser === "6"
  ) {
    next();
  } else {
    next({ name: "Warehouse" });
  }
};
export default temporaryWarehousePermission;
