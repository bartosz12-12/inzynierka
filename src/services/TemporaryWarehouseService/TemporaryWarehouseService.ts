import { apiPathsEnum } from "@/config/paths/ApiPathsEnum";
import { Service } from "../Service";
export class TemporaryWarehouseService extends Service {
    public constructor() {
      super();
      this.initHttpClient();
    }

    public async getAllTemporaryWarehouse() {
        return await this.axiosInstance.get(
          apiPathsEnum.API_GET_ALL_TEMPORARYWAREHOUSE
        );
      }
    //   public async getProductId(warehouseId:any) {
    //     return await this.axiosInstance.get(
    //       apiPathsEnum.API_GET_WAREHOSE_BY_ID + warehouseId);
    //   }
      public async deleteTemporaryWarehouse(warehouseId:any) {
       return await this.axiosInstance.delete(apiPathsEnum.API_DELETE_TEMPORARYWAREHOUSE + warehouseId)
      }
    //   public async updateProduct(warehouseId: number, product: object) {
    //     return await this.axiosInstance.patch(
    //       apiPathsEnum.API_UPDATE_WAREHOSE_BY_ID + warehouseId,
    //       product
    //     );       
    //   }
      public async createTemporaryWarehouse(product: object) {
        return await this.axiosInstance.post(
          apiPathsEnum.API_CREATE_TEMPORARYWAREHOUSE,
          product
        );     
      }
}