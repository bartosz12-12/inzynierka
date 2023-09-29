<template>
  <div class="about">
    <button @click="wyloguj">Wyloguj</button>
    <h1>This is an about page</h1>
  </div>
</template>
<script>
export default {
  methods:{
    wyloguj(){
      localStorage.removeItem("token");
      this.$router.push({ name: 'Login' });
    }
  }
}
</script>