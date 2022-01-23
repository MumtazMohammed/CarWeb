<template>
  <v-app>
    <!-- <NavBar /> -->
    <v-main>
      <router-view />
    </v-main>
    <FooterBar />
  </v-app>
</template>

<script>
// import NavBar from "./NavBar/TheNavBar.vue";
import FooterBar from "./footer/footer.vue";
export default {
  name: "App",
  components: {
    // NavBar,
    FooterBar,
  },
  data: () => ({
    //
  }),
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;500;700;800;900&display=swap");

@import "./scss/virables";
#app {
  background: white;
  width: 100%;
  position: relative;
  overflow: hidden;
}
.v-main {
  padding: 0px !important;
}
</style>
