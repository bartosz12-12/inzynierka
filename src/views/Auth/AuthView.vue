<template>
    <router-view></router-view>
    <nav >
        <router-link to="register">Rejestracja</router-link> |
        <router-link to="login">Zaloguj się</router-link>
      </nav>
</template>

<script>
export default {

}
</script>

<style lang="scss">
nav{
  margin-top: 10px;
  background-color: rgba($color: #ffff, $alpha: 0.8);
  border-radius: 15px;
  box-shadow: 10px 10px 10px black;
}
</style>