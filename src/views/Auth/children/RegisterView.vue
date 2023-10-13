<template>
  <div class="body">
    <div class="container">
      <h1 class="h1">Zarejestruj się</h1>
      <p class="pp">Podaj imię</p>
      <div class="form_input_contrainer">
        <input class="dane" type="text" name="name" v-model="name" />
        <label v-if="!name" for="name">Name</label>
      </div>
      <p class="pp">Podaj nazwisko</p>
      <div class="form_input_contrainer">
        <input class="dane" type="text" name="surname" v-model="surname" />
        <label v-if="!surname" for="surname">Surname</label>
      </div>
      <p class="pp">Podaj email</p>
      <div class="form_input_contrainer">
        <input class="dane" type="email" name="email" v-model="email" />
        <label v-if="!email" for="email">Login</label>
      </div>
      <p class="pp">Podaj hasło</p>
      <div class="form_input_contrainer">
        <input class="dane" type="password" name="password"  v-model="password"/>
      <label  v-if="!password" for="password">Hasło</label>
      </div>
      <p class="pp">Powtórz hasło</p>
      <div class="form_input_contrainer">
        <input class="dane" type="password" name="password"  v-model="repeatedPassword"/>
      <label  v-if="!repeatedPassword" for="password">Hasło</label>
      </div>
      <div class="container-button">
        <button class="button" @click="
    $router.replace({
      name: 'Login',
    })
  ">Logowanie</button>
      <button class="button" @click="register">Zarejestruj się</button>
      </div>
    </div>
  </div>
  </template>
  <script>
  import {AuthService} from "@/services/AuthService/AuthService";

export default {

  data() {
    return {
      name:'',
      surname: '',
      authService: new AuthService(),
      email: '',
      password: '',
      repeatedPassword:'',
    };
  },
  methods:{
    async register(){
      const registerResult = await this.authService.register({name:this.name, surname:this.surname,email:this.email,password:this.password,confirmPassword:this.repeatedPassword,language:'pl'})
      console.log("rezultat",registerResult)
      if (registerResult && registerResult.message) {
        console.log(0, registerResult.message);
      }
    }
  }
};
</script>
  
  <style lang="scss" scoped>
  .container {
    display: grid;
    grid-column: auto;
    padding: 10px 20px 40px 20px;
    border-radius: 15px;
    box-shadow: 10px 10px 10px black;
    background-color: rgba($color: #ffff, $alpha: 0.8);
    justify-items: center;
  }
  
  input{
      margin-top: 0%;
  }
  
  label{
      top: 15%;
  }
  
  .pp{
      margin-top: 0;
      margin-bottom: 5px;
      font-size: 20px;
  }
  
  .nuxt{
      margin-top: 20px;
  }
  
  </style>