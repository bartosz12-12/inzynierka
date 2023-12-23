<template>
  <div class="menubar">
    <h1 class="title">{{ $t("CreateNewProduct") }}</h1>
  </div>
  <form @submit.prevent="create">
  <div class="form_input">
      <div v-for="warehouse in data" :key="warehouse.label">
        <label for="warehouse.label">{{ warehouse.label }}:</label>
        <input
          class="form-input"
          :type="warehouse.type"
          :name="warehouse.name"
          v-model="warehouse.model"
          required="true"
        />
      </div>
  </div>
  <button type="submit" class="add">Dodaj</button>
  <button class="back" @click="back">Wstecz</button>
</form>

</template>
  
  <script>
import { WarehouseService } from "@/services/WarehouseService/WarehouseService.ts";

export default {
  data() {
    return {
      warehouseService: new WarehouseService(),
      data: [
        {
          label: this.$t("Name2"),
          type: "text",
          name: "name",
          model: "",
        },
        {
          label: this.$t("Description"),
          type: "text",
          name: "description",
          model: "",
        },
        {
          label: this.$t("Manufacturer"),
          type: "text",
          name: "manufacturer",
          model: "",
        },
        {
          label: this.$t("UnitOfMeasurement"),
          type: "text",
          name: "unitOfMeasurement",
          model: "",
        },
        {
          label: this.$t("CatalogNumber"),
          type: "text",
          name: "catalogNumber",
          model: "",
        },
        {
          label: this.$t("QuantityInStock"),
          type: "number",
          name: "quantityInStock",
          model: "",
        },
        {
          label: this.$t("PurchaseDate"),
          type: "date",
          name: "purchaseDate",
          model: "",
        },
        {
          label: this.$t("DeliveryDate"),
          type: "date",
          name: "deliveryDate",
          model: "",
        },
        {
          label: this.$t("ExpiryDate"),
          type: "date",
          name: "expiryDate",
          model: "",
        },
        {
          label: this.$t("Category"),
          type: "text",
          name: "category",
          model: "",
        },
        {
          label: this.$t("MinimumStockLevel"),
          type: "number",
          name: "minimumStockLevel",
          model: "",
        },
      ],
    };
  },
  methods: {
    async create() {
      const data = {
        name: this.data[0].model,
        description: this.data[1].model,
        manufacturer: this.data[2].model,
        unitOfMeasurement: this.data[3].model,
        catalogNumber: this.data[4].model,
        quantityInStock: this.data[5].model,
        purchaseDate: this.data[6].model,
        deliveryDate: this.data[7].model,
        expiryDate: this.data[8].model,
        category: this.data[9].model,
        minimumStockLevel: this.data[10].model,
      };
      await this.warehouseService.createProduct(data);
      this.$router.push({ name: "Warehouse" });
    },
    back() {
      this.$router.push({ name: "Warehouse" });
    },
  },
};
</script>
  
  <style>
</style>