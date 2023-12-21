<template>
  <div class="menubar">
    <h1 class="title">
      {{ $t("TemporaryWarehouse_id") }} (ID:{{ this.$route.params.id }})
    </h1>
    <div class="functions">
      <button id="back" @click="back">Wstecz</button>
      <img
        class="create"
        @click="addProduct"
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
export default {
  components: {
    AgGridVue,
  },
  data() {
    return {
      id: this.$route.params.id,
    };
  },
  methods: {
    back() {
      this.$router.push({ name: "TemporaryWarehouse" });
    },

    addProduct() {
      this.$router.push({ name: "TemporaryWarehouseAddView", params: { id: this.id } });
    },
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