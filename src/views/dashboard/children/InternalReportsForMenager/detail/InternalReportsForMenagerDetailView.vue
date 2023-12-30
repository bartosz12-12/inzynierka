<template>
    <div class="menubar">
      <h1 class="title">
        {{ $t("ReportDetails") }} (ID:{{ this.$route.params.id }})
      </h1>
      <div class="functions">
        <button id="back" @click="back">{{ $t("back") }}</button>
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
  import { WarehouseService } from "@/services/WarehouseService/WarehouseService.ts";
  import { AgGridVue } from "ag-grid-vue3";
  import "ag-grid-community/styles/ag-grid.css";
  import "ag-grid-community/styles/ag-theme-alpine.css";
  export default {
    components: {
      AgGridVue,
    },
    data() {
      return {
        id: this.$route.params.id,
        warehouseService: new WarehouseService(),
        rowData: [],
        internalReportsService: new ReportService,
        columnDefs: [
          // {
          //   headerName: "🗑",
          //   field: "delete",
          //   sortable: false,
          //   inputWidth: 50,
          //   inputValue: "",
          //   width: 55,
          //   value: "XX",
          //   required: true,
          //   valueGetter: () => "🗑",
          // },
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
            field: "warehouse.id",
            sortable: true,
            inputValue: "",
            width: 55,
            required: true,
            toInput: true,
            label: "warehouse",
            cellDataType: "number",
          },
          {
            headerName: this.$t("Nazwa"),
            field: "warehouse.name",
            sortable: true,
            flex: 1,
            inputValue: "",
            required: true,
            toInput: true,
            label: "notification",
            cellDataType: "text",
          },
          {
            headerName: this.$t("CatalogNumber"),
            field: "warehouse.catalogNumber",
            sortable: true,
            flex: 1,
            inputValue: "",
            required: true,
            toInput: true,
            label: "notification",
            cellDataType: "text",
          },
          {
            headerName: this.$t("HowMuch"),
            field: "howMuch",
            sortable: true,
            flex: 1,
            inputValue: "",
            required: true,
            toInput: true,
            label: "notification",
            cellDataType: "text",
          },
        ],
      };
    },
    methods: {
      async downloadData() {
        const data = await this.internalReportsService.getAllReportsWarehouseByReportsId(this.id);
        this.rowData = data.data;
      },
      back() {
        this.$router.push({ name: "InternalReportsForMenager" });
      },
    },
    mounted() {
      this.downloadData();
    },
  };
  </script>
  
  <style>
  </style>