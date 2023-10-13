<template>
  <div class="link">
    <h1>Warehouse</h1>
    <ag-grid-vue
      class="ag-theme-alpine"
      style="height: 500px; width: 85vw"
      :columnDefs="columnDefs"
      :rowData="rowData"
      :defaultColDef="defaultColDef"
      rowSelection="multiple"
      animateRows="true"
    >
    </ag-grid-vue>
  </div>
</template>

<script>
import { AgGridVue } from "ag-grid-vue3";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import warehouseColumnsDef from "@/views/dashboard/children/Warehouse/data/warehouseColumnsDef";
import { WarehouseService } from "@/services/WarehouseService/WarehouseService.ts";

export default {
  components: {
    AgGridVue,
  },
  data() {
    return {
      warehouseService: new WarehouseService(),
      columnDefs: warehouseColumnsDef,
      rowData: [],
    };
  },
  methods:{
    async downloadData() {
         const data = await this.warehouseService.getAllCompanyStructures();
        console.log("data",data)
        this.rowData = data.data
    }
  },
  mounted(){
     this.downloadData();
  }
};
</script>

<style>
</style>