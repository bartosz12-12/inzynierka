<template>
  
    <h1 class="title">{{$t("CreateAccountForEmployee")}}</h1>
    <div class="form_input">
      <label for="name">{{$t("Name")}}:</label>
      <input class="form-input" type="text" name="name"  v-model="name"/>
      <label for="surname">{{$t("Surname")}}:</label>
      <input class="form-input" type="text" name="surname" v-model="surname"/>
      <label for="email">{{$t("Email")}}:</label>
      <input class="form-input" type="email" name="email" v-model="email"/>
      <label for="password">{{$t("Password")}}:</label>
      <input class="form-input" type="password" name="password" v-model="password"/>
      <label for="confirmPassword">{{$t("RepeatThePassword")}}</label>
      <input class="form-input" type="password" name="confirmPassword" v-model="repeatedPassword"/>
      <label for="typeUser">{{$t("TypeUser")}}</label>
      <select class="form-input" name="typeUser" v-model="typeUser">
        <option value="2">{{$t("WarehouseManager")}}</option>
        <option value="3">{{$t("ConstructionManager")}}</option>
        <option value="4">{{$t("Secretariat")}}</option>
        <option value="5">{{$t("WarehouseManager")}} + {{$t("ConstructionManager")}}</option>
        <option value="6">{{$t("ConstructionManager")}} + {{$t("Secretariat")}}</option>
      </select>
      
      
    </div>
    <button @click="register">Dodaj</button>
</template>

<script>
import { AuthService } from "@/services/AuthService/AuthService";

export default {
  data() {
    return {
      name: "",
      surname: "",
      authService: new AuthService(),
      email: "",
      password: "",
      repeatedPassword: "",
      typeUser: null,
    };
  },
  methods: {
    async register() {
      
      const registerResult = await this.authService.register({
        name: this.name,
        surname: this.surname,
        email: this.email,
        password: this.password,
        confirmPassword: this.repeatedPassword,
        language: navigator.language.substring(0, 2),
        typeUser: this.typeUser
      });
      console.log("rezultat", registerResult);
      if (registerResult && registerResult.message) {
        console.log(0, registerResult.message);
      }
    },
  },
};
</script>

<style>
.form_input {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.form-input {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  background-color: #4caf50;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}
.title{
  padding: 10px;
  border: dashed  black;
  border-radius: 10px;
}
</style>