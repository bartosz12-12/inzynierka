<template>
    <div class="menubar"><h1 class="title">{{$t("CreateNewProduct")}}</h1></div>
    <div class="form_input">
      <div
      v-for="warehouse in data" :key="warehouse.label" ><label for="warehouse.label">{{ warehouse.label }}:</label>
      <input
        class="form-input"
        :type="warehouse.type"
        :name="warehouse.name"
        v-model="warehouse.model"
      /></div>
      
    </div>
    <button class="add" @click="create">Dodaj</button>
  </template>
  
  <script>
  export default {
    data() {
      return {
        data: [
          {
            label: this.$t("Name"),
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
            type: "text",
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
            type: "text",
            name: "minimumStockLevel",
            model: "",
          },
        ],
      };
    },
    methods: {
      create() {
          for( let i=0 ; i<this.data.length ; i++){
              console.log(this.data[i]);
          }
      },
    },
  };
  </script>
  
  <style>
  
  </style>