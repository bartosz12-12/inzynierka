<template>
  <div class="body">
  <div class="login_box">
    <h1 class="h1">Wprowadź nowe hasło</h1>
    <p class="pp">Nowe hasło:</p>
    <div class="form_input_contrainer">
      <input class="dane" type="password" name="password" v-model="password" @input="validatePasswordOnInput"/>
      <label class="label_form" v-if="!password" for="password">{{$t("Password")}}</label>
    </div>
    <span class="error-message" v-if="passwordError" style="color: red">{{$t("ThePasswordShouldContain6Characters1UppercaseLetterAnd1SpecialCharacter")}}</span>
    <p class="pp">{{$t("RepeatThePassword")}}</p>
    <div class="form_input_contrainer">
      <input class="dane" type="password" name="repeatedPassword"  v-model="repeatedPassword" @input="validateRepeatedPasswordOnInput"/>
      <label  class="label_form" v-if="!repeatedPassword" for="repeatedPassword">{{$t("Password")}}</label><br>
      <span class="error-message" v-if="repeatedPasswordError" style="color: red">{{$t("TheEnteredPasswordsDoNotMatch")}}</span>
    </div>
  <div class="container-button">
  <button class="button" @click="resetPassword">{{$t("Confirm")}}</button>
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
        password:"",
        repeatedPassword: "",
        token: "",
        repeatedPasswordError: "",
        passwordError: "",
        authService: new AuthService(),
      }
    },
    mounted() {
        this.url = window.location.href;
        const parts = this.url.split('?token=');
        this.token = parts[parts.length - 1];
        console.log("TOKEN: ", this.token);   
    },
    methods:{
      async resetPassword(){
        console.log("DATA", this.password, this.repeatedPassword, this.token);
        await this.authService.resetPassword({token: this.token, password:this.password, confirmPassword: this.repeatedPassword});
       
        this.$router.push({ name: 'Login' });
      },

      validatePassword(password) {
      const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
      return passwordRegex.test(password);
    },
    validateRepeatedPassword(repeatedPassword) {
      if(!(this.password === this.repeatedPassword)){
          return false;
      }
      return true;
    },
    validatePasswordOnInput() {
      this.passwordError = !this.validatePassword(this.password);
    },
    validateRepeatedPasswordOnInput() {
      this.repeatedPasswordError = !this.validateRepeatedPassword(this.repeatedPassword);
    },
    },
}
</script>
