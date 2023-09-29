<template>
    <div class="container">
      <h1>Zarejestruj się</h1>
      <p>podaj email</p>
      <div class="form_input_contrainer">
        <input class="dane" type="email" name="email" v-model="email" />
        <label v-if="!email" for="email">Login</label>
      </div>
      <p>podaj hasło</p>
      <div class="form_input_contrainer">
        <input class="dane" type="password" name="password"  v-model="password"/>
      <label  v-if="!password" for="password">Hasło</label>
      </div>
      <p>powtórz hasło</p>
      <div class="form_input_contrainer">
        <input class="dane" type="password" name="password"  v-model="repeatedPassword"/>
      <label  v-if="!repeatedPassword" for="password">Hasło</label>
      </div>
      <button>Zarejestruj się</button>
    </div>
  </template>
  <script>
export default {
  data() {
    return {
      email: '',
      password: '',
      repeatedPassword:'',
    };
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
      top: 10%;
  }
  
  p{
      margin-top: 0;
      margin-bottom: 5px;
      font-size: 20px;
  }
  
  .nuxt{
      margin-top: 20px;
  }
  
  </style>