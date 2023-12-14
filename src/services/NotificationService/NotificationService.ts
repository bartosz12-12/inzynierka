import { apiPathsEnum } from "@/config/paths/ApiPathsEnum";
import { Service } from "../Service";
import { INotification } from "./dto/INotification";

export class NotificationService extends Service {
    public constructor() {
      super();
      this.initHttpClient();
    }

    public async getAllNotifications() {
        return await this.axiosInstance.get(
          apiPathsEnum.API_GET_ALL_NOTIFICATIONS
        );
      }

    public async deleteNotification(notificationId:any) {
       return await this.axiosInstance.delete(apiPathsEnum.API_DELETE_NOTIFICATION + notificationId)
      }
}