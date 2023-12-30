import { apiPathsEnum } from "@/config/paths/ApiPathsEnum";
import { Service } from "../Service";
import { IReport } from "./dtos/ReportDto";

export class ReportService extends Service {
    public constructor() {
      super();
      this.initHttpClient();
    }

    public async getAllReports() {
        return await this.axiosInstance.get(
          apiPathsEnum.API_GET_ALL_REPORTS
        );
      }
      public async getReportId(reportId: any) {
        return await this.axiosInstance.get(
          apiPathsEnum.API_GET_REPORT_BY_ID + reportId);
      }
      public async deleteReport(reportId:any) {
       return await this.axiosInstance.delete(apiPathsEnum.API_DELETE_REPORT + reportId)
      }
    //   public async updateReport(warehouseId: number, product: object) {
    //     return await this.axiosInstance.patch(
    //       apiPathsEnum.API_UPDATE_WAREHOSE_BY_ID + warehouseId,
    //       product
    //     );       
    //   }
      public async createReport(IReport: IReport) {
        return await this.axiosInstance.post(
          apiPathsEnum.API_CREATE_REPORT, IReport);     
      }

      public async getAllReportsWarehouseByReportsId( ReportId:any) {
        return await this.axiosInstance.get(
          apiPathsEnum.API_GET_ALL_REPORTWAREHOUSE_BY_REPORTID + ReportId
        );
      }

      public async createReportItem(Item: any) {
        return await this.axiosInstance.post(
          apiPathsEnum.API_CREATE_ITEM_TO_REPORT, Item);     
      }
}