<template>
  <div class="menubar">
    <h1 class="title">
      {{ $t("TemporaryWarehouse_id") }} (ID:{{ this.$route.params.id }})
    </h1>
    <div class="functions">
      <button id="back" @click="back">Wstecz</button>
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
      <button class="add" @click="create">Dodaj</button>
      <button class="back" @click="backMT">Wstecz</button>
    </div>
  </div>
</template>

<script>
import { AgGridVue } from "ag-grid-vue3";
import { WarehouseItemService } from "@/services/WarehouseItem/WarehouseItemService";
import { WarehouseService } from "@/services/WarehouseService/WarehouseService.ts";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
export default {
  components: {
    AgGridVue,
  },
  data() {
    return {
      redId: false,
      redQ: false,
      warehouseId: "",
      quantity: "",
      popup: false,
      rowData: [],
      warehouseService: new WarehouseService(),
      warehouseSelect: [],
      WarehouseItemService: new WarehouseItemService(),
      id: this.$route.params.id,
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
          headerName: this.$t("quantity"),
          field: "quantity",
          sortable: true,
          flex: 1,
          inputValue: "",
          required: true,
          toInput: true,
          label: "notification",
          cellDataType: "text",
        },
      ],
      data: [],
    };
  },
  methods: {
    back() {
      this.$router.push({ name: "TemporaryWarehouse" });
    },
    backMT() {
      this.popup = false;
    },
    popupActive() {
      this.popup = true;
    },
    async create() {
      const data = {
        temporaryWarehouseId: this.id,
        temporaryWarehouse: {},
        warehouseId: this.warehouseId,
        warehouse: {},
        quantity: this.quantity,
      };
      if (data.quantity <= 0) {
        this.redQ = true
      }
      if (data.warehouseId === "") {
        this.redId =true
      }if(data.quantity > 0 && data.warehouseId !== "") {
        await this.WarehouseItemService.createWarehouseItem(data);
        this.popup = false;
        this.downloadData();
      }
    },

    async downloadData() {
      const data = await this.WarehouseItemService.getAllWarehouseByTemporaryId(
        this.id
      );
      this.data = []
      const select = await this.warehouseService.getAllWarehouse();
      this.warehouseSelect = select.data;
      this.warehouseSelect.forEach((element) => {
        this.data.push({ value: element.id, name: element.name });
      });
      this.rowData = data.data;
    },
  },
  mounted() {
    this.downloadData();
  },
};
</script>

<style>
#back {
  margin: auto;
  margin-right: 10px;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>