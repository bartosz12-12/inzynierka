export enum apiPathsEnum{
    BASE_API_URL = "https://localhost:7057/",

    /** Auth */
    API_LOGIN = "api/Auth/Login",
    API_REGISTER = "api/Auth/Register",
    API_VERIFIY_USER = "api/Auth/Verify/",
    API_FORGOT_PASSWORD = "api/Auth/ForgotPassword",
    API_RESET_PASSWORD = "api/Auth/ResetPassword",

    // Warehouse
    API_GET_ALL_WAREHOUSE = "/api/Warehouse/GetAll",
    API_DELETE_WAREHOUSE = "/api/Warehouse/Delete/",
    API_UPDATE_WAREHOSE_BY_ID ="/api/Warehouse/Update/",
    API_GET_WAREHOSE_BY_ID ="/api/Warehouse/Get/",
    API_CREATE_PRODUCT = "/api/Warehouse/Create",
    //Notifications
    API_GET_ALL_NOTIFICATIONS = "/api/Notifications/GetAll",
    API_DELETE_NOTIFICATION = "/api/Notifications/Delete/"
}