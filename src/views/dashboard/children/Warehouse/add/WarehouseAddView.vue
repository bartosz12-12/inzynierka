<template>
  <div class="menubar"><h1 class="title">Create new warehouse</h1></div>
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
          label: "Name",
          type: "text",
          name: "name",
          model: "",
        },
        {
          label: "description",
          type: "text",
          name: "description",
          model: "",
        },
        {
          label: "manufacturer",
          type: "text",
          name: "manufacturer",
          model: "",
        },
        {
          label: "unitOfMeasurement",
          type: "text",
          name: "unitOfMeasurement",
          model: "",
        },
        {
          label: "catalogNumber",
          type: "text",
          name: "catalogNumber",
          model: "",
        },
        {
          label: "quantityInStock",
          type: "text",
          name: "quantityInStock",
          model: "",
        },
        {
          label: "purchaseDate",
          type: "date",
          name: "purchaseDate",
          model: "",
        },
        {
          label: "deliveryDate",
          type: "date",
          name: "deliveryDate",
          model: "",
        },
        {
          label: "expiryDate",
          type: "date",
          name: "expiryDate",
          model: "",
        },
        {
          label: "category",
          type: "text",
          name: "category",
          model: "",
        },
        {
          label: "minimumStockLevel",
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