<template>
    <div class="menubar">
      <h1 class="title">Zgłoszenia wewnętrzne</h1>
      <div class="functions">
        
      </div>
    </div>
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
  import { ReportService } from "@/services/InternalReports/ReportService.ts";
  import { TemporaryWarehouseService } from "@/services/TemporaryWarehouseService/TemporaryWarehouseService.ts";
  import { AgGridVue } from "ag-grid-vue3";
  import "ag-grid-community/styles/ag-grid.css";
  import "ag-grid-community/styles/ag-theme-alpine.css";
  export default {
    components: {
      AgGridVue,
    },
    data() {
      return {
        nameWarehouse: false,
        rowData: [],
        description: "",
        approved: false,
        temporaryWarehouseId: 0,
        internalReportsService: new ReportService,
        temporaryWarehouses: new TemporaryWarehouseService,
        columnDefs: [
          {
            headerName: "🗑",
            field: "delete",
            sortable: false,
            inputWidth: 50,
            inputValue: "",
            width: 55,
            value: "XX",
            required: true,
            valueGetter: () => "🗑",
          },
          // {
          //   headerName: "✎",
          //   field: "edit",
          //   sortable: false,
          //   inputWidth: 50,
          //   inputValue: "",
          //   width: 55,
          //   value: "XX",
          //   required: true,
          //   valueGetter: () => "✎",
          // },
          {
            headerName: this.$t("Id"),
            field: "id",
            sortable: true,
            inputValue: "",
            width: 55,
            required: true,
            toInput: true,
            label: "internalReports",
            cellDataType: "number",
          },
          {
            headerName: this.$t("ConstructionManagerFirstName"),
            field: "constructionManagerFirstName",
            sortable: true,
            inputWidth: 50,
            inputValue: "",
            flex: 1,
            required: true,
            toInput: true,
            label: "internalReports",
            cellDataType: "text",
          },
          {
            headerName: this.$t("ConstructionManagerLastName"),
            field: "constructionManagerLastName",
            sortable: true,
            inputWidth: 50,
            inputValue: "",
            flex: 1,
            required: true,
            toInput: true,
            label: "internalReports",
            cellDataType: "text",
          },
          {
            headerName: this.$t("Description"),
            field: "description",
            sortable: true,
            inputWidth: 50,
            flex: 1,
            inputValue: "",
            required: true,
            toInput: true,
            label: "internalReports",
            cellDataType: "text",
          },
          {
            headerName: "Id magazynu tymczasowego",
            field: "temporaryWarehouseId",
            sortable: true,
            inputWidth: 50,
            flex: 1,
            inputValue: "",
            required: true,
            toInput: true,
            label: "internalReports",
            cellDataType: "number",
          },
          {
            headerName: "approved",
            field: "approved",
            sortable: true,
            inputWidth: 50,
            flex: 1,
            inputValue: "",
            required: true,
            toInput: true,
            label: "internalReports",
            cellDataType: "boolean",
          },
        ],
      };
    },
    inject: ["$user"],
    mounted() {
      this.downloadData();
    },
    methods: {
      async downloadData() {
        const data = await this.internalReportsService.getAllReports();
        console.log("data", data);
        this.rowData = data.data
      },
      async handleColumnClick(params) {
        switch (params.colDef.field) {
          case "delete":
            this.deleteReport(params.data.id).then((res) => {
              console.log(res);
              if (res.status === 200) {
                this.downloadData();
                return;
              }
              console.log("err", res);
            });
            break;
          default:
            this.detailTemporaryWarehouse(params.data.id);
            break;
        }
      },
      async deleteReport(id) {
        return await this.internalReportsService.deleteReport(id);
      },
      detailTemporaryWarehouse(id) {
        this.$router.push({ name: "internalReportsForMenagerDetailView", params: { id } });
      },
  
    },
    
  };
  </script>
  
  <style>
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); 
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999; 
  }
  
  .popup {
    position: relative;
    padding: 20px;
    background-color: white;
    border: 1px solid #ccc;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    max-width: 80%;
    max-height: 80%;
    overflow-y: auto;
  }
  .red-border {
    border: 2px solid red;
  }
  </style>