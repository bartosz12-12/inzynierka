<template>
  <div class="menubar">
    <h1 class="title">{{ $t("Details") }}</h1>
    <div class="functions">
      <button id="back" @click="back">{{ $t("back") }}</button>
    </div>
  </div>
  <div class="kafelkek-container">
    <div v-for="element in data" :key="element.id" class="kafelek" @click="detailTemporaryWarehouse(element.temporaryWarehouseId)">
      <div>
        Nazwa magazynu: {{ element.temporaryWarehouse.temporaryWarehouseName }}
      </div>
      <div>Ilość: {{ element.quantity }}</div>
    </div>
  </div>
</template>

<script>
import { WarehouseItemService } from "@/services/WarehouseItem/WarehouseItemService";

export default {
  data() {
    return {
      data: [],
      WarehouseItemService: new WarehouseItemService(),
      id: this.$route.params.id,
    };
  },
  methods: {
    back() {
      this.$router.push({ name: "Warehouse" });
    },
    async downloadData() {
      const data = await this.WarehouseItemService.getAllWarehouseByWarehouseId(
        this.id
      );
      this.data = data.data;
    },
    detailTemporaryWarehouse(id) {
      this.$router.push({ name: "TemporaryWarehouseDetail", params: { id } });
    },
  },
  mounted() {
    this.downloadData();
  },
};
</script>

<style>
.kafelek {
  border:  solid #797777;
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
  width: calc(
    25% - 20px
  ); 
  box-sizing: border-box;
  transition: box-shadow 0.3s ease;
}
.kafelek:hover{
  border: solid green;
  cursor: pointer;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}
.kafelkek-container{
  display: flex;
  flex-wrap: wrap;
  max-height: 65vh; 
  overflow-y: auto; 
}
.kafelkek-container::-webkit-scrollbar {
  width: 5px;
}

/* Stylowanie obszaru, który jest przewijany (Track) */
.kafelkek-container::-webkit-scrollbar-track {
  background: #fcfcfc;
}

/* Stylowanie "uchwytu" przewijania (Handle) */
.kafelkek-container::-webkit-scrollbar-thumb {
  background: #09090a;
}

/* Dodatkowy efekt po najechaniu myszką na pasek przewijania */
.kafelkek-container::-webkit-scrollbar-thumb:hover {
  background: #050505;
}

</style>