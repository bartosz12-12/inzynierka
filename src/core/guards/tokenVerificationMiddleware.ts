import {NavigationGuardNext} from "vue-router";
import {apiPathsEnum} from "@/config/paths/ApiPathsEnum";
/* eslint-disable  @typescript-eslint/no-explicit-any */
const tokenVerificationMiddleware = (to: any, from: any, next: NavigationGuardNext) => {
    const token = localStorage.getItem('token');
    if (token) {
        fetch(`${apiPathsEnum.BASE_API_URL}api/Auth/Verify/${token}`)
            .then(response => {
                if (response.ok) {
                    next();
                } else {
                    console.log('middleware', response);
                    localStorage.removeItem('token');
                    next({ name: 'Login' });
                }
            })
            .catch(error => {
                console.error('Błąd podczas weryfikacji tokenu:', error);
                localStorage.removeItem('token');
                next({ name: 'Login' });
            });
    } else {
        next({ name: 'Login' });
    }
};
export default tokenVerificationMiddleware;