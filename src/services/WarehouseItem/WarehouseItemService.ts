import { apiPathsEnum } from "@/config/paths/ApiPathsEnum";
import { Service } from "../Service";
export class WarehouseItemService extends Service {
    public constructor() {
      super();
      this.initHttpClient();
    }

      public async getAllWarehouseByTemporaryId( temporaryWarehouseId:any) {
        return await this.axiosInstance.get(
          apiPathsEnum.API_GET_WAREHOUSEITEM_BY_ID_TEMPORARYWAREHOUSE_ID + temporaryWarehouseId
        );
      }
      public async getAllWarehouseByWarehouseId( warehouseId:any) {
        return await this.axiosInstance.get(
          apiPathsEnum.API_GET_WAREHOUSEITEM_BY_ID_WAREHOUSE_ID + warehouseId
        );
      }
      public async createWarehouseItem(product: object) {
        return await this.axiosInstance.post(
          apiPathsEnum.API_CREATE_WAREHOUSEITEM,
          product
        );     
      }

      public async deleteItem(TemporaryWarehouseId:any) {
        return await this.axiosInstance.delete(apiPathsEnum.API_DELETE_WAREHOUSEITEM + TemporaryWarehouseId)
       }
       
       public async updateItem(warehouseId: number, product: object) {
        return await this.axiosInstance.put(
          apiPathsEnum.API_UPDATE_WAREHOUSEITEM + warehouseId,
          product
        ); 
       } 

}