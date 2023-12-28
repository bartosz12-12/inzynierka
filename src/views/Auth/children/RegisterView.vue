<template>
  <div class="body">
    <div class="container">
      <h1 class="h1">{{$t("SignUp")}}</h1>
      <p class="pp">{{$t("ProvideYourName")}}</p>
      <div class="form_input_contrainer">
        <input class="dane" type="text" name="name" v-model="name" />
        <label class="label_form" v-if="!name" for="name">{{$t("Name")}}</label>
      </div>
      <p class="pp">{{$t("ProvideYourSurname")}}</p>
      <div class="form_input_contrainer">
        <input class="dane" type="text" name="surname" v-model="surname" />
        <label class="label_form" v-if="!surname" for="surname">{{$t("Surname")}}</label>
      </div>
      <p class="pp">{{$t("EnterYourEmail")}}</p>
      <div class="form_input_contrainer">
        <input class="dane" type="email" name="email" v-model="email" @input="validateEmailOnInput" />
        <label class="label_form" v-if="!email" for="email">{{$t("Email")}}</label><br>
        <span class="error-message" v-if="emailError" style="color: red">{{$t("InvalidEmailAddressFormat")}}</span>
      </div>
      <p class="pp">{{$t("EnterYourPassword")}}</p>
      <div class="form_input_contrainer">
        <input
          class="dane"
          type="password"
          name="password"
          v-model="password"
          @input="validatePasswordOnInput"
        />
        <label class="label_form" v-if="!password" for="password">{{$t("Password")}}</label><br>
        
      </div>
      <span class="error-message" v-if="passwordError" style="color: red">{{$t("ThePasswordShouldContain6Characters1UppercaseLetterAnd1SpecialCharacter")}}</span>
      <p class="pp">{{$t("RepeatThePassword")}}</p>
      <div class="form_input_contrainer">
        <input
          class="dane"
          type="password"
          name="password"
          v-model="repeatedPassword"
          @input="validateRepeatedPasswordOnInput"
        />
        <label class="label_form" v-if="!repeatedPassword" for="password"
          >{{$t("Password")}}</label
        ><br>
        <span class="error-message" v-if="repeatedPasswordError" style="color: red">{{$t("TheEnteredPasswordsDoNotMatch")}}</span>
      </div>
      <div class="container-button">
        <button
          class="button"
          @click="
            $router.replace({
              name: 'Login',
            })
          "
        >
          {{$t("LogIn")}}
        </button>
        <button class="button" @click="register">{{$t("SignUp")}}</button>
      </div>
    </div>
  </div>
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
      emailError: false,
      passwordError: false,
      repeatedPasswordError: false
    };
  },
  methods: {
    async register() {
      // Walidacja adresu e-mail
      if (!this.validateEmail(this.email)) {
        this.emailError = true;
        return;
      } else {
        this.emailError = false;
      }

      // Walidacja hasła
      if (!this.validatePassword(this.password)) {
        this.passwordError = true;
        return;
      } else {
        this.passwordError = false;
      }

      if (!this.validateRepeatedPassword(this.repeatedPassword)) {
        this.repeatedPasswordError = true;
        return;
      } else {
        this.repeatedPasswordError = false;
      }
      const registerResult = await this.authService.register({
        name: this.name,
        surname: this.surname,
        email: this.email,
        password: this.password,
        confirmPassword: this.repeatedPassword,
        language: navigator.language.substring(0, 2),
      });
      this.$router.push({ name: 'SuccessRegister' });
    },
    validateEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    },
    validatePassword(password) {
      const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&_])[A-Za-z\d@$!%*?&_]{6,}$/;
      return passwordRegex.test(password);
    },
    validateRepeatedPassword(repeatedPassword) {
      if(!(this.password === this.repeatedPassword)){
          return false;
      }
      return true;
    },
    validateEmailOnInput() {
      this.emailError = !this.validateEmail(this.email);
    },
    validatePasswordOnInput() {
      this.passwordError = !this.validatePassword(this.password);
    },
    validateRepeatedPasswordOnInput() {
      this.repeatedPasswordError = !this.validateRepeatedPassword(this.repeatedPassword);
    },
  },
};
</script>
  
  <style lang="scss" scoped>
  span{
    max-width: 20vw;
  }
.container {
  display: grid;
  grid-column: auto;
  padding: 10px 20px 40px 20px;
  border-radius: 15px;
  box-shadow: 10px 10px 10px black;
  background-color: rgba($color: #ffff, $alpha: 0.8);
  justify-items: center;
}
</style>