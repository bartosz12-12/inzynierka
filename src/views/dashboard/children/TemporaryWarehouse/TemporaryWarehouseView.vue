<template>
  <div class="menubar">
    <h1 class="title">{{ $t("TemporaryWarehouse") }}</h1>
    <div class="functions">
      <img
        class="create"
        @click="popupActive"
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
  <div v-if="popup" class="overlay" @click="back">
    <div class="popup" @click.stop>
      <div class="form_input">
        <div v-for="warehouse in data" :key="warehouse.label">
          <label :for="warehouse.name">{{ warehouse.label }}:</label>
          <input
            :class="{'form-input': true, 'red-border': nameWarehouse}"
            :type="warehouse.type"
            :name="warehouse.name"
            v-model="warehouse.model"
          />
        </div>
      </div>
      <button class="add" @click="create">Dodaj</button>
      <button class="back" @click="back">Wstecz</button>
    </div>
  </div>
</template>

<script>
import { TemporaryWarehouseService } from "@/services/TemporaryWarehouseService/TemporaryWarehouseService";
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
      popup: false,
      rowData: [],
      temporaryWarehouseService: new TemporaryWarehouseService(),
      data: [
        {
          label: this.$t("TemporaryWarehouseName"),
          type: "text",
          name: "temporaryWarehouseName",
          model: "",
        },
      ],
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
        {
          headerName: "✎",
          field: "edit",
          sortable: false,
          inputWidth: 50,
          inputValue: "",
          width: 55,
          value: "XX",
          required: true,
          valueGetter: () => "✎",
        },
        {
          headerName: this.$t("Id"),
          field: "id",
          sortable: true,
          inputValue: "",
          width: 55,
          required: true,
          toInput: true,
          label: "temporaryWarehouse",
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
          label: "temporaryWarehouse",
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
          label: "temporaryWarehouse",
          cellDataType: "text",
        },
        {
          headerName: this.$t("TemporaryWarehouseName"),
          field: "temporaryWarehouseName",
          sortable: true,
          inputWidth: 50,
          flex: 1,
          inputValue: "",
          required: true,
          toInput: true,
          label: "temporaryWarehouse",
          cellDataType: "text",
        },
      ],
    };
  },
  inject: ["$user"],
  methods: {
    popupActive() {
      this.popup = true;
    },
    async downloadData() {
      const data =
        await this.temporaryWarehouseService.getAllTemporaryWarehouse();
      console.log("data", data);
      this.rowData = data.data;
    },
    async handleColumnClick(params) {
      switch (params.colDef.field) {
        case "delete":
          this.deleteTemporaryWarehouse(params.data.id).then((res) => {
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
    async deleteTemporaryWarehouse(id) {
      return await this.temporaryWarehouseService.deleteTemporaryWarehouse(id);
    },
    detailTemporaryWarehouse(id) {
      this.$router.push({ name: "TemporaryWarehouseDetail", params: { id } });
    },
    async create() {
      const data = {
        constructionManagerFirstName: this.$user.name,
        constructionManagerLastName: this.$user.surname,
        temporaryWarehouseName: this.data[0].model,
      };
      if(data.temporaryWarehouseName.length <= 3 ){
        this.nameWarehouse = true
      }
      else{
        await this.temporaryWarehouseService.createTemporaryWarehouse(data);
      this.popup = false;
      this.downloadData();
      }
    },

    back() {
      this.popup = false;
    },
  },
  mounted() {
    this.downloadData();
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