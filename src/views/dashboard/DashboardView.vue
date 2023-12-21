<template>
  <div class="container">
    <div class="top_panel">
      <img
        class="hamburger"
        @click="toggleNavbar"
        src="../../components/icons/menu.png"
        alt=""
      />

      <h1
        class="inzynier"
        @click="
          $router.replace({
            name: linx[0].view,
          })
        "
      >
        Inżynierka
      </h1>
      <div class="settings" v-if="setings">
        <p>{{ user.name }} {{ user.surname }}</p>
        <button class="sign_out" @click="wyloguj">Wyloguj</button>
      </div>
      <img
        @click="settings_on"
        id="set"
        src="../../components/icons/setting.png"
        alt="setting"
      />
    </div>
    <div class="container_main">
      <div class="navbar" v-if="isNavbarOpen">
        <div v-for="link in linx" :key="link.name">
          <div
            v-if="
              Array.isArray(link.permission) &&
              link.permission.includes(typUser)
            "
            class="panel"
            @click="
              $router.replace({
                name: link.view,
              })
            "
          >
            <p>{{ link.name }}</p>
          </div>
        </div>
      </div>
      <div class="link"><router-view></router-view></div>
    </div>
  </div>
</template>
  <script>

export default {
  name: "DashboardView",
  data() {
    return {
      user:'',
      setings: false,
      isNavbarOpen: true,
      typUser: localStorage.getItem("typeUser"),
      linx: [
        {
          name: this.$t("Warehouse"),
          view: "Warehouse",
          permission: ["1"],
        },
        {
          name: this.$t("Notifications"),
          view: "Notification",
          permission: ["1"],
        },
        {
          name: this.$t("CreateAccountForEmployee"),
          view: "AddEmployee",
          permission: ["1"],
        },
        {
          name: this.$t("TemporaryWarehouse"),
          view: "TemporaryWarehouse",
          permission: ["1"],
        },
      ],
    };
  },
  inject: ['$user'],
  mounted() {
    console.log("to jest ", typeof localStorage.getItem("typeUser"));
    this.user = this.$user;
  },
  methods: {
    wyloguj() {
      localStorage.removeItem("token");
      localStorage.removeItem("userData");
      this.$user = null;
      this.$router.push({ name: "Login" });
    },
    toggleNavbar() {
      this.isNavbarOpen = !this.isNavbarOpen;
    },
    settings_on() {
      this.setings = !this.setings;
    },
  },
};
</script>
  <style scoped>
.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.top_panel {
  background-color: #333;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1000;
}

.inzynier {
  cursor: pointer;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;
  margin-top: 10px;
}

.sign_out {
  background-color: #d9534f;
  color: #fff;
  padding: 8px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  max-width: 50%;
  margin-top: 10px;
}

.sign_out:hover {
  background-color: #c9302c;
}

.container_main {
  display: flex;
  flex: 1;
}

.navbar {
  background-color: #f4f4f4;
  width: 15vw;
  padding: 10px;
  box-shadow: 1px 0 5px rgba(0, 0, 0, 0.1);
  max-height: 89vh;
  position: sticky;
  top: 60px;
  overflow: auto;
}

.navbar::-webkit-scrollbar {
  width: 5px;
}

/* Stylowanie obszaru, który jest przewijany (Track) */
.navbar::-webkit-scrollbar-track {
  background: #fcfcfc;
}

/* Stylowanie "uchwytu" przewijania (Handle) */
.navbar::-webkit-scrollbar-thumb {
  background: #09090a;
}

/* Dodatkowy efekt po najechaniu myszką na pasek przewijania */
.navbar::-webkit-scrollbar-thumb:hover {
  background: #050505;
}

.panel {
  cursor: pointer;
  padding: 8px;
  margin-bottom: 5px;
  border-radius: 4px;
  background-color: #fff;
  transition: background-color 0.3s;
}

.panel:hover {
  background-color: #e0e0e0;
}

.link {
  flex: 1;
  padding: 20px;
  background-color: #fff;
  margin: 10px 10px 10px 10px;
}
.hamburger {
  height: 40px;
  margin-left: 10px;
}
.hamburger:hover {
  cursor: pointer;
}
.settings {
  position: absolute;
  top: 60px; /* Odległość od góry top_panel */
  right: 0;
  height: 200px;
  width: 150px;
  background-color: rgba(51, 51, 51, 0.9);
  margin-right: 5px;
  display: flex;
  flex-direction:column;
  align-items: center;
}
#set {
  height: 30px;
  margin-right: 10px;

}
#set:hover{
  cursor: pointer;
}
</style>
  