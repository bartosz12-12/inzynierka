<template>
  <div class="menubar">
    <h1 class="title">
      {{ $t("ReportDetails") }} (ID:{{ this.$route.params.id }})
    </h1>
    <div class="functions">
      <button id="back" @click="back">{{ $t("back") }}</button>
      <img
        class="create"
        @click="addProduct()"
        src="@\components\icons\square-plus.png"
        alt="Opis obrazu"
      />
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
  <div v-if="popup" class="overlay" @click="backMT">
    <div class="popup" @click.stop>
      <label for="warehouseId">{{ $t("warehouseId") }}</label>
      <select
        :class="{ 'form-input': true, 'red-border': redId }"
        name="warehouseId"
        v-model="warehouseId"
      >
        <option
          v-for="element in data"
          :key="element.value"
          :value="element.value"
        >
          {{ element.name }}
        </option>
      </select>
      <label for="quantity">{{ $t("quantity") }}</label>
      <input :class="{'form-input': true, 'red-border': redQ}" type="number" v-model="quantity" />
      <button class="add" @click="create">{{ $t("add") }}</button>
      <button class="back" @click="backMT">{{ $t("back") }}</button>
    </div>
  </div>
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
      popup:false,
      warehouseId:null,
      quantity:null,
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
    addProduct(){
      this.popup = true
    },
    async create(){
      const data ={
        reportId: this.id,
        report:{},
        warehouseId:this.warehouseId,
        warehouse:{},
        howMuch:this.quantity
      }
      if (data.howMuch <= 0) {
        this.redQ = true
      }
      if (data.warehouseId === "") {
        this.redId =true
      }if(data.howMuch > 0 && data.warehouseId !== "") {
        await this.internalReportsService.createReportItem(data)
        this.popup = false;
        this.downloadData();
      }
      console.log("to jest dat",data)
    },
    async downloadData() {
      const data = await this.internalReportsService.getAllReportsWarehouseByReportsId(this.id);
      this.data = []
      const select = await this.warehouseService.getAllWarehouse();
      this.warehouseSelect = select.data;
      this.warehouseSelect.forEach((element) => {
        this.data.push({ value: element.id, name: element.name });
      });
      this.rowData = data.data;
    },
    back() {
      this.$router.push({ name: "InternalReports" });
    },
    backMT(){
      this.popup = false
    }
  },
  mounted() {
    this.downloadData();
  },
};
</script>

<style>
</style>