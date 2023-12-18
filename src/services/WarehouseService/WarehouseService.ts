import { apiPathsEnum } from "@/config/paths/ApiPathsEnum";
import { Service } from "../Service";
import { IWarehouse } from "./dto/IWarehouse";

export class WarehouseService extends Service {
    public constructor() {
      super();
      this.initHttpClient();
    }

    public async getAllWarehouse() {
        return await this.axiosInstance.get(
          apiPathsEnum.API_GET_ALL_WAREHOUSE
        );
      }
      public async getProductId(warehouseId:any) {
        return await this.axiosInstance.get(
          apiPathsEnum.API_GET_WAREHOSE_BY_ID + warehouseId);
      }
      public async deleteProdukt(warehouseId:any) {
       return await this.axiosInstance.delete(apiPathsEnum.API_DELETE_WAREHOUSE + warehouseId)
      }
      public async updateProduct(warehouseId: number, product: object) {
        return await this.axiosInstance.patch(
          apiPathsEnum.API_UPDATE_WAREHOSE_BY_ID + warehouseId,
          product
        );       
      }
      public async createProduct(product: object) {
        return await this.axiosInstance.post(
          apiPathsEnum.API_CREATE_PRODUCT,
          product
        );     
      }
}