import { apiPathsEnum } from "@/config/paths/ApiPathsEnum";
import { Service } from "../Service";
import { IWarehouse } from "./dto/IWarehouse";

export class WarehouseService extends Service {
    public constructor() {
      super();
      this.initHttpClient();
    }

    public async getAllCompanyStructures() {
        return await this.axiosInstance.get(
          apiPathsEnum.API_GET_ALL_WAREHOUSE
        );
      }
}