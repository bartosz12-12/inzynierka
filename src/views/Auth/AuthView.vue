<template>
    <router-view></router-view>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.container-button{
  width: 80%;
  display: flex;
  justify-content: space-around;
  margin-top: 15px;
}
.dane {
  border: solid black 1px;
  border-radius: 20px;
  height: 30px;
  width: 280px;
  padding-left: 5px;
  margin-bottom: 10px;
}

.label_form {
  font-size: 20px;
  color: rgba($color: #000000, $alpha: 1);
  position: absolute;
  right: 80%;
  opacity: 1;
  left: 10px;
  top: 15%;
  transition: left 0.5s, opacity 0.3s;
}

.body {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-position: center;
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



.button {
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

input:focus + .label_form {
  left: 300px;
  opacity: 0;
}

.res {
  margin-top: 20px;
}

.button:hover {
  background-color: white;
  color: black;
}

.button:active {
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
.pp{
  margin-top: 0px;
  margin-bottom: 5px;
  font-size: 20px;
}

</style>
