<template>
  <h1 class="title">Warehouse</h1>
  <ag-grid-vue
    class="ag-theme-alpine"
    style="width: 100%; height: 80%"
    :columnDefs="columnDefs"
    :rowData="rowData"
    :defaultColDef="defaultColDef"
    rowSelection="multiple"
    :paginationPageSize="10"
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
  methods: {
    async downloadData() {
      const data = await this.warehouseService.getAllCompanyStructures();
      console.log("data", data);
      this.rowData = data.data;
    },
    async handleColumnClick(params){
        switch(params.colDef.field){
          case 'delete':
            this.deleteProdukt(params.data.id).then(res=>{
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
    async deleteProdukt(id){
        return await this.warehouseService.deleteProdukt(id);
    },
  },
  mounted() {
    this.downloadData();
  },
};
</script>

<style>
</style>