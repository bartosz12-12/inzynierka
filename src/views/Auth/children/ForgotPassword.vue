<template>
  <div class="body">
  <div class="login_box">
    <h1 class="h1">Resetowanie hasła</h1>
    <p class="pp">{{$t("EnterYourEmail")}}</p>
    <div class="form_input_contrainer">
      <input class="dane" type="email" name="email" v-model="email" @input="validateEmailOnInput" />
      <label class="label_form" v-if="!email" for="email">{{$t("Email")}}</label><br>
      <span class="error-message" v-if="emailError" style="color: red">{{$t("InvalidEmailAddressFormat")}}</span>
    </div>
  <div class="container-button">
  <button class="button" @click="sendEmailWithLink">{{$t("Confirm")}}</button>
  </div>
  <div>
  </div>
  </div>
</div>
</template>

<script>
import {AuthService} from "@/services/AuthService/AuthService";


export default {
    name: "ForgotPasswordView",
    data(){
      return {
        email:"",
        emailError: "",
        authService: new AuthService(),
      }
    } ,
    methods:{
      async sendEmailWithLink(){
        const response= await this.authService.forgotPassword({email:this.email});
          this.$router.push({ name: 'Login' });
      },

      validateEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    },
    validateEmailOnInput() {
      this.emailError = !this.validateEmail(this.email);
    },
    
    },
}
</script>




   