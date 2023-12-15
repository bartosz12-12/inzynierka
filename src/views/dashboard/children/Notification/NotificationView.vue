
<template>
  <div class="menubar"><h1 class="title">Notification</h1></div>
  <ag-grid-vue
    class="ag-theme-alpine"
    style="height: 80%; width: 100%; "
    :columnDefs="columnDefs"
    :rowData="rowData"
    rowSelection="multiple"
    animateRows="true"
    :pagination="true" 
    @selectionChanged="handleSelectionChange"
    @cellClicked="handleColumnClick"
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
    async handleColumnClick(params){
        switch(params.colDef.field){
          case 'delete':
            this.deleteNotification(params.data.id).then(res=>{
              console.log(res)
              if(res.status === 200){
                this.downloadData();
                return;
              }
              console.log('err', res)
            })
            break;
        }
    },
    async deleteNotification(id){
        return await this.notificationService.deleteNotification(id);
    },
  },
  mounted() {
    this.downloadData();
  },
};
</script>
  
  <style>
</style>