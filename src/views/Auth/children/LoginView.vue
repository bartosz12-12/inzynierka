<template>
  <div class="body">
  <div class="login_box">
    <h1 class="h1">{{$t("LogIn")}}</h1>
    <p class="pp">{{$t("EnterYourEmail")}}</p>
    <div class="form_input_contrainer">
      <input class="dane" type="email" name="email" v-model="email" />
      <label class="label_form" v-if="!email" for="email">{{$t("Email")}}</label>
    </div>
    <p class="pp">{{$t("EnterYourPassword")}}</p>
    <div class="form_input_contrainer">
      <input class="dane" type="password" name="password"  v-model="password"/>
      <label  class="label_form" v-if="!password" for="password">{{$t("Password")}}</label>
    </div>
    <div class="checkbox-container">
      <p id="zap">{{$t("RememberMe")}}</p>
      <input type="checkbox">
  </div>
  <div class="container-button">
    <button class="button" @click="
    $router.replace({
      name: 'Register',
    })
  ">{{$t("Registration")}}</button>
  <button class="button" @click="login()">{{$t("Confirm")}}</button>
  </div>
  <div>
   
    <p id="zap" @click="toForgotPassword" style="font-size: 12px; margin-top: 10px;"><b>Zapomniałem hasła</b></p>
   
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
        const loginResult = await this.authService.login({email:this.email, password:this.password});
       
        if(loginResult && loginResult.message){
            console.log("potwierdzam")
        }
        await this.$router.push({ name: 'Dashboard' });
      },

      toForgotPassword(){
        this.$router.push({name: 'ForgotPassword'})
      }

    },
}
</script>


<style lang="scss">
#zap
{
margin: 0;  
}
</style>

   
