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
    API_DELETE_NOTIFICATION = "/api/Notifications/Delete/",

    //TemporaryWarehouse
    API_GET_ALL_TEMPORARYWAREHOUSE = "/api/TemporaryWarehouse/GetAll",
    API_GET_TEMPORARYWAREHOUSE_BY_ID = "/api/TemporaryWarehouse/Get/",
    API_DELETE_TEMPORARYWAREHOUSE = "/api/TemporaryWarehouse/Delete/",
    API_UPDATE_TEMPORARYWAREHOUSE = "/api/TemporaryWarehouse/Update/",
    API_CREATE_TEMPORARYWAREHOUSE ="/api/TemporaryWarehouse/Create",

    //WarehouseItem
    API_GET_ALL_WAREHOUSEITEM = "/api/WarehouseItem/GetAll",
    API_GET_WAREHOUSEITEM_BY_ID_WAREHOUSE_ID = "/api/WarehouseItem/warehouse/",
    API_GET_WAREHOUSEITEM_BY_ID_TEMPORARYWAREHOUSE_ID = "/api/WarehouseItem/temporary/",
    API_DELETE_WAREHOUSEITEM = "/api/WarehouseItem/remove/",
    API_UPDATE_WAREHOUSEITEM = "/api/WarehouseItem/update/",
    API_CREATE_WAREHOUSEITEM ="/api/WarehouseItem/add",

    //Reports
    API_GET_ALL_REPORTS = "/api/Report/GetAll",
    API_GET_REPORT_BY_ID = "/api/Report/Get/",
    API_CREATE_REPORT ="/api/Report/Create",
    API_DELETE_REPORT = "/api/Report/Delete/",

    //ReportWarehouse
    API_GET_ALL_REPORTSWAREHOUSE = "/api/ReportWarehouse/GetAll",
    API_GET_ALL_REPORTWAREHOUSE_BY_REPORTID = "/api/ReportWarehouse/report/",
}