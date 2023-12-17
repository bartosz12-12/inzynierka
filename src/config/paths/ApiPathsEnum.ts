export enum apiPathsEnum{
    BASE_API_URL = "http://localhost:7057/",

    /** Auth */
    API_LOGIN = "api/Auth/Login",
    API_REGISTER = "api/Auth/Register",
    API_VERIFIY_USER = "api/Auth/Verify/",
    API_FORGOT_PASSWORD = "api/Auth/ForgotPassword",
    API_RESET_PASSWORD = "api/Auth/ResetPassword",

    // Warehouse
    API_GET_ALL_WAREHOUSE = "/api/Warehouse/GetAll",
    API_DELETE_WAREHOUSE = "/api/Warehouse/Delete/",

    //Notifications
    API_GET_ALL_NOTIFICATIONS = "/api/Notifications/GetAll",
    API_DELETE_NOTIFICATION = "/api/Notifications/Delete/"
}