<template>
  <div class="menubar"><h1 class="title">Create new employee</h1></div>
  <div class="form_input">
    <label for="name">Name:</label>
    <input class="form-input" type="text" name="name" v-model="name" />
    <label for="surname">Surname:</label>
    <input class="form-input" type="text" name="surname" v-model="surname" />
    <label for="email">email:</label>
    <input class="form-input" type="email" name="email" v-model="email" />
    <label for="password">password:</label>
    <input
      class="form-input"
      type="password"
      name="password"
      v-model="password"
    />
    <label for="confirmPassword">confirmPassword:</label>
    <input
      class="form-input"
      type="password"
      name="confirmPassword"
      v-model="repeatedPassword"
    />
    <label for="typeUser">typeUser:</label>
    <input class="form-input" type="text" name="typeUser" v-model="typeUser" />
  </div>
  <button class="add" @click="register">Dodaj</button>
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
      typeUser: "",
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
        language: "pl",
        typeUser: this.typeUser,
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