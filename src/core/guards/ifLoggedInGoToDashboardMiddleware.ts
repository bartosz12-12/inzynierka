import {NavigationGuardNext} from "vue-router";
/* eslint-disable  @typescript-eslint/no-explicit-any */
const ifLoggedInGoToDashboardMiddleware = (to: any, from: any, next: NavigationGuardNext) => {
    const token = localStorage.getItem('token');
    if (token) {
        next({ name: 'Dashboard' });
    } else {
        next();
    }
};
export default ifLoggedInGoToDashboardMiddleware;