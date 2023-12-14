<template>
  <div class="body">
  <div class="login_box">
    <h1 class="h1">Zaloguj się</h1>
    <p class="pp">Podaj Email</p>
    <div class="form_input_contrainer">
      <input class="dane" type="email" name="email" v-model="email" />
      <label class="label_form" v-if="!email" for="email">Login</label>
    </div>
    <p class="pp">Podaj Hasło</p>
    <div class="form_input_contrainer">
      <input class="dane" type="password" name="password"  v-model="password"/>
      <label  class="label_form" v-if="!password" for="password">Hasło</label>
    </div>
    <div class="checkbox-container">
      <p id="zap">Zapamiętaj mnie</p>
      <input type="checkbox">
  </div>
  <div class="container-button">
    <button class="button" @click="
    $router.replace({
      name: 'Register',
    })
  ">Rejestracja</button>
  <button class="button" @click="login()">Zatwierdz</button>
  </div>
  </div>
</div>
</template>
  
<script>
import {AuthService} from "@/services/AuthService/AuthService";


export default {
    name: "LoginView",
    data(){
      return {
        email:"",
        password:"",
        authService: new AuthService(),
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
#zap
{
margin: 0;  
}
</style>

   
