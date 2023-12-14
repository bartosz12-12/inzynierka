
<template>
  <h1 class="title">Notification</h1>
  <ag-grid-vue
    class="ag-theme-alpine"
    style="max-height: 500px; width: 82vw"
    :columnDefs="columnDefs"
    :rowData="rowData"
    rowSelection="multiple"
    animateRows="true"
    :domLayout="'autoHeight'"
  >
  </ag-grid-vue>
</template>
  
  <script>
import { AgGridVue } from "ag-grid-vue3";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import notificationColumnsDef from "@/views/dashboard/children/Notification/data/notificationColumnsDef";
import { NotificationService } from "@/services/NotificationService/NotificationService.ts";
export default {
  components: {
    AgGridVue,
  },
  data() {
    return {
      notificationService: new NotificationService(),
      columnDefs: notificationColumnsDef,
      rowData: [],
    };
  },
  methods: {
    async downloadData() {
      const data = await this.notificationService.getAllNotifications();
      console.log("data", data);
      this.rowData = data.data;
    },
  },
  mounted() {
    this.downloadData();
  },
};
</script>
  
  <style>
</style>