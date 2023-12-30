<template>
  <div class="menubar">
    <h1 class="title">{{ $t("UpdateProduct") }} {{ this.$route.params.id }}</h1>
  </div>
  <div class="form_input">
    <div v-for="warehouse in data" :key="warehouse.label">
      <label for="warehouse.label">{{ warehouse.label }}:</label>
      <input
        class="form-input"
        :type="warehouse.type"
        :name="warehouse.name"
        v-model="warehouse.model"
      />
    </div>
  </div>
  <button class="add" @click="update">{{ $t("add") }}</button>
  <button class="back" @click="back">{{ $t("back") }}</button>
</template>

<script>
import { WarehouseService } from "@/services/WarehouseService/WarehouseService.ts";

export default {
  data() {
    return {
      warehouseService: new WarehouseService(),
      firstData: null,
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
  mounted() {
    this.downloadData(this.$route.params.id);
  },
  methods: {
    async downloadData(id) {
      try {
        const data = await this.warehouseService.getProductId(id);

        if (data && data.data) {
          this.data.forEach((field) => {
            const fieldName = field.name;
            if (fieldName in data.data) {
              if (field.type === "date") {
                field.model = new Date(data.data[fieldName])
                  .toISOString()
                  .split("T")[0];
              } else {
                field.model = data.data[fieldName];
              }
            }
          });
        }
      } catch (error) {
        console.error("Błąd podczas pobierania danych:", error);
      }
    },
    async update() {
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
      await this.warehouseService.updateProduct(this.$route.params.id,data);
      this.$router.push({ name: 'Warehouse' })
    },
    back(){
        this.$router.push({ name: 'Warehouse' })
    }
  },
};
</script>

<style>
</style>