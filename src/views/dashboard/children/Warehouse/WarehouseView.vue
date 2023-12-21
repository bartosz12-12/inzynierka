<template>
  <div class="menubar">
    <h1 class="title">{{ $t("Warehouse") }}</h1>
    <div class="functions">
      <button @click="choose_end_material" class="end-material" :class="{ 'grey-button': !end_material, 'green-button': end_material }">
        kończące sie materiały
      </button>
      <img
        class="create"
        @click="
          $router.replace({
            name: 'WarehouseAdd',
          })
        "
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
</template>

<script>
import { AgGridVue } from "ag-grid-vue3";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { WarehouseService } from "@/services/WarehouseService/WarehouseService.ts";

export default {
  components: {
    AgGridVue,
  },
  data() {
    return {
      end_material: false,
      warehouseService: new WarehouseService(),
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
          headerName: this.$t("Name2"),
          field: "name",
          sortable: true,
          inputWidth: 50,
          inputValue: "",
          required: true,
          toInput: true,
          label: "warehouse",
          cellDataType: "text",
        },
        {
          headerName: this.$t("Description"),
          field: "description",
          sortable: true,
          inputWidth: 50,
          inputValue: "",
          required: true,
          toInput: true,
          label: "warehouse",
          cellDataType: "text",
        },
        {
          headerName: this.$t("Manufacturer"),
          field: "manufacturer",
          sortable: true,
          inputWidth: 50,
          inputValue: "",
          required: true,
          toInput: true,
          label: "warehouse",
          cellDataType: "text",
        },
        {
          headerName: this.$t("UnitOfMeasurement"),
          field: "unitOfMeasurement",
          sortable: true,
          inputWidth: 50,
          inputValue: "",
          required: true,
          toInput: true,
          label: "warehouse",
          cellDataType: "text",
        },
        {
          headerName: this.$t("CatalogNumber"),
          field: "catalogNumber",
          sortable: true,
          inputWidth: 50,
          inputValue: "",
          required: true,
          toInput: true,
          label: "warehouse",
          cellDataType: "text",
        },
        {
          headerName: this.$t("QuantityInStock"),
          field: "quantityInStock",
          sortable: true,
          inputWidth: 50,
          inputValue: "",
          required: true,
          toInput: true,
          label: "warehouse",
          cellDataType: "number",
        },
        {
          headerName: this.$t("PurchaseDate"),
          field: "purchaseDate",
          sortable: true,
          inputWidth: 50,
          inputValue: "",
          required: true,
          toInput: true,
          label: "warehouse",
          cellDataType: "data",
        },
        {
          headerName: this.$t("DeliveryDate"),
          field: "deliveryDate",
          sortable: true,
          inputWidth: 50,
          inputValue: "",
          required: true,
          toInput: true,
          label: "warehouse",
          cellDataType: "data",
        },
        {
          headerName: this.$t("ExpiryDate"),
          field: "expiryDate",
          sortable: true,
          inputWidth: 50,
          inputValue: "",
          required: true,
          toInput: true,
          label: "warehouse",
          cellDataType: "data",
        },
        {
          headerName: this.$t("Category"),
          field: "category",
          sortable: true,
          inputWidth: 50,
          inputValue: "",
          required: true,
          toInput: true,
          label: "warehouse",
          cellDataType: "text",
        },
        {
          headerName: this.$t("MinimumStockLevel"),
          field: "minimumStockLevel",
          sortable: true,
          inputWidth: 50,
          inputValue: "",
          required: true,
          toInput: true,
          label: "warehouse",
          cellDataType: "number",
        },
      ],
      rowData: [],
    };
  },
  methods: {
    async downloadData() {
      const data = await this.warehouseService.getAllWarehouse();
      if (this.end_material === false) {
        this.rowData = data.data;
      } else {
        const filteredData = data.data.filter(
          (item) => item.minimumStockLevel > item.quantityInStock
        );
        this.rowData = filteredData;
      }
    },
    async handleColumnClick(params) {
      switch (params.colDef.field) {
        case "delete":
          this.deleteProdukt(params.data.id).then((res) => {
            console.log(res);
            if (res.status === 200) {
              this.downloadData();
              return;
            }
            console.log("err", res);
          });
          break;
        case "edit":
          this.editProduct(params.data.id);
          break;
      }
    },
    choose_end_material() {
      if (this.end_material === false) {
        this.end_material = true;
        console.log("to są konćżące się materriały", this.end_material);
      } else {
        this.end_material = false;
      }
      this.downloadData();
    },
    async deleteProdukt(id) {
      return await this.warehouseService.deleteProdukt(id);
    },
    editProduct(id) {
      this.$router.push({ name: "ProductUpdate", params: { id } });
    },
  },
  mounted() {
    this.downloadData();
  },
};
</script>

<style>
.create {
  width: 35px;
  margin-top: auto;
  margin-bottom: auto;
  margin-right: 10px;
}
.create:hover {
  cursor: pointer;
  opacity: 60%;
}
.functions {
  display: flex;
}
.end-material {
  height: 35px;
  margin: auto;
  margin-right: 10px;
  cursor: pointer;
}
.grey-button {
  background-color: #ccc; /* Kolor szary */
  color: #fff;
}

.green-button {
  background-color: #ff0000; /* Kolor zielony */
  color: #fff;
}
</style>