<template>
  <div class="menubar">
    <h1 class="title">{{ $t("CreateAccountForEmployee") }}</h1>
  </div>
  <form @submit.prevent="register">
    <div class="form_input">
      <label for="name">{{ $t("Name") }}:</label>
      <input
        required="true"
        class="form-input"
        type="text"
        name="name"
        v-model="name"
      />
      <label for="surname">{{ $t("Surname") }}:</label>
      <input
        required="true"
        class="form-input"
        type="text"
        name="surname"
        v-model="surname"
      />
      <label for="email">{{ $t("Email") }}:</label>
      <input
        required="true"
        class="form-input"
        type="email"
        name="email"
        v-model="email"
      />
      <label for="password">{{ $t("Password") }}:</label>
      <input
        required="true"
        class="form-input"
        type="password"
        name="password"
        v-model="password"
      />
      <label for="confirmPassword">{{ $t("RepeatThePassword") }}</label>
      <input
        class="form-input"
        type="password"
        name="confirmPassword"
        v-model="repeatedPassword"
        required="true"
      />
      <label for="typeUser">{{ $t("TypeUser") }}</label>
      <select
        class="form-input"
        name="typeUser"
        v-model="typeUser"
        required="true"
      >
        <option value="2">{{ $t("WarehouseManager") }}</option>
        <option value="3">{{ $t("ConstructionManager") }}</option>
        <option value="4">{{ $t("Secretariat") }}</option>
        <option value="5">
          {{ $t("WarehouseManager") }} + {{ $t("ConstructionManager") }}
        </option>
        <option value="6">
          {{ $t("ConstructionManager") }} + {{ $t("Secretariat") }}
        </option>
      </select>
    </div>
    <button type="submit" class="add">{{ $t("add") }}</button>
  </form>
</template>

<script>
import { AuthService } from "@/services/AuthService/AuthService";

export default {
  data() {
    return {
      authService: new AuthService(),
      name: "",
      surname: "",
      
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
        typeUser: this.typeUser,
      });
      console.log("rezultat", registerResult);
      if (registerResult && registerResult.message) {
        console.log(0, registerResult.message);
      }
      this.name = ""
      this.surname = ""
      this.email = ""
      this.password = ""
      this.repeatedPassword = ""
      this.typeUser = null
    },
  },
};
</script>

<style>
.form_input {
  margin-bottom: 15px;
  max-height: 62vh;
  overflow: auto;
}
.form_input::-webkit-scrollbar {
  width: 5px;
}

/* Stylowanie obszaru, który jest przewijany (Track) */
.form_input::-webkit-scrollbar-track {
  background: #fcfcfc;
}

/* Stylowanie "uchwytu" przewijania (Handle) */
.form_input::-webkit-scrollbar-thumb {
  background: #09090a;
}

/* Dodatkowy efekt po najechaniu myszką na pasek przewijania */
.form_input::-webkit-scrollbar-thumb:hover {
  background: #050505;
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

.add {
  background-color: #4caf50;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.back {
  background-color: #ff0505;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 20px;
}

.add:hover {
  background-color: #45a049;
}
.title {
  margin-left: 10px;
}
.menubar {
  border: dashed black;
  border-radius: 10px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
}
</style>