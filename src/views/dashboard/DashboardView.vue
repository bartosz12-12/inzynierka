<template>
  <div class="container">
    <div class="top_panel">
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
      <button class="sign_out" @click="wyloguj">Wyloguj</button>
    </div>
    <div class="container_main">
      <div class="navbar">
        <div
          class="panel"
          v-for="link in linx"
          :key="link.name"
          @click="
            $router.replace({
              name: link.view,
            })
          "
        >
          <p>{{ link.name }}</p>
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
      linx: [
        {
          name: "Warehouse",
          view: "Warehouse",
        },
        {
          name: "Notification",
          view: "Notification",
        },
        {
          name: "Add Employee",
          view: "AddEmployee",
        },
        {
          name: "Link",
          view: "AddEmployee",
        },
        {
          name: "Link2",
          view: "AddEmployee",
        },
        {
          name: "Link3",
          view: "AddEmployee",
        },
        {
          name: "Link4",
          view: "AddEmployee",
        },
        {
          name: "Link5",
          view: "AddEmployee",
        },
        {
          name: "Link6",
          view: "AddEmployee",
        },
        {
          name: "Link7",
          view: "AddEmployee",
        },
      ],
    };
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
  margin-right:10px ;
  background-color: #d9534f;
  color: #fff;
  padding: 8px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
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

</style>
  