<template>
  <div class="login_box">
    <h1>Zaloguj się</h1>
    <div class="form_input_contrainer">
      <input class="dane" type="email" name="email" v-model="email" />
      <label v-if="!email" for="email">Login</label>
    </div>
    <div class="form_input_contrainer">
      <input class="dane" type="password" name="password"  v-model="password"/>
      <label  v-if="!password" for="password">Hasło</label>
    </div>
    <div class="checkbox-container">
      <p id="zap">Zapamiętaj mnie</p>
      <input type="checkbox">
  </div>
    <button @click="login()">Zatwierdz</button>
  </div>
</template>
  
<script>
import {AuthService} from "@/services/AuthService/AuthService";
import provideUser from '../../../main';
import axios from 'axios'; // Importowanie Axios

export default {
    name: "LoginView",
    data(){
      return {
        email:"",
        password:"",
        authService: new AuthService(),
        isShaking:false,
        isPasswordClicked:false,
        isEmailClicked:false,
      }
    } ,
    methods:{
      async login(){
        console.log("to jest",this.password,this.email)
        const loginResult = await this.authService.login({email:this.email, password:this.password});
        console.log("rezultat",loginResult)
        if(loginResult && loginResult.message){
            console.log("potwierdzam")
        }


        //testy łopatologiczne 
    //     const loginData = {
    //   email: "queen56@ethereal.email",
    //   password: "c3n3p8AteP4m22GMmR"
    // };
    // const headers = {
    //   // Tutaj możesz dodać nagłówki, jeśli są potrzebne
    // };
    //     axios.post("http://localhost:7057/api/Auth/Login", loginData, { headers })
    //   .then((response) => {
    //     // Obsługa sukcesu - dostęp do odpowiedzi serwera
    //     console.log("Odpowiedź serwera:", response.data);
    //   })


        this.$router.push({ name: 'Dashboard' });
      },
    },


}
</script>


<style lang="scss">
.dane {
  border: solid black 1px;
  border-radius: 20px;
  height: 30px;
  width: 280px;
  margin-top: 30px;
  padding-left: 5px;
}

label {
  font-size: 20px;
  color: rgba($color: #000000, $alpha: 1);
  position: absolute;
  right: 80%;
  opacity: 1;
  left: 10px;
  top: 55%;
  transition: left 0.5s, opacity 0.3s;
}

html {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-position: center;
  background-image: url("../../../assets/tlo.jpg");
}

.login_box {
  display: grid;
  grid-column: auto;
  padding: 10px 20px 40px 20px;
  border-radius: 15px;
  box-shadow: 10px 10px 10px black;
  background-color: rgba($color: #ffff, $alpha: 0.8);
  justify-items: center;
}

h1 {
  font-size: 30px;
  color: rgba($color: black, $alpha: 1);
}

button {
  margin-top: 20px;
  border-radius: 30px;
  background-color: rgba($color: #000000, $alpha: 0.9);
  padding: 5px 10px;
  color: white;
  box-shadow: 5px 5px rgba($color: #000000, $alpha: 0.6);
  cursor: pointer;
}

.form_input_contrainer {
  position: relative;
}

input:focus + label {
  left: 300px;
  opacity: 0;
}

.res {
  margin-top: 20px;
}

button:hover {
  background-color: white;
  color: black;
}

button:active {
  position: relative;
  top: 1px;
}

.nuxt {
  text-decoration: none;
  color: #000000;
}
.checkbox-container{
 display: flex;
}
</style>

   
