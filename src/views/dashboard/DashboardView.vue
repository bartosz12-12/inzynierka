<template>
  <div class="top-panel">
    <h1 class="inzynier">Inżynierka</h1>
    <button class="sign-out" @click="wyloguj">Wyloguj</button>
  </div>
  <div class="container-main">
    <div class="navbar">
        <div class="panel" v-for="link in linx" :key="link.name" @click=" $router.replace({
            name: link.view,
          })"><p>{{ link.name }}</p></div>
      </div>
      <router-view></router-view>
  </div>
  
</template>
  <script>
export default {
  name: "DashboardView",
  data(){
    return{
        linx: [
        {
          name: "Link1",
          view:"Intersection"
        },
        {
          name: "Link2",
          view:"Link1"
        },
    ]
    }
  },
  methods: {
    wyloguj() {
      localStorage.removeItem("token");
      this.$router.push({ name: "Login" });
    },
  },
};
</script>
  <style scoped>
.top-panel {
  width: 100vw;
  background-color: #061A26;
  display: flex;
  height: 40px;
  justify-content: end;
}
.sign-out {
  background-color: #030526;
  border: 0;
  color: white;
  cursor: pointer;
  border-radius: 10%;
}
.sign-out:hover {
  background-color: whitesmoke;
  color:#061A26 ;
}
.inzynier {
    color: whitesmoke;
  margin: 0;
  margin-right: auto;
  margin-left: auto;
}
.navbar {
  height: calc(100vh - 40px);
  width: 15vw;
  background-color: #8B8C80;
  position: fixed
}
.container-main{
    display: flex;
}
.link{
    margin-left: 15vw;
}
.panel{
    height: 40px;
    display: flex;
    cursor: pointer;
}
.panel:hover{
    background-color:#6c6d63 ;
}
</style>
  