<template>
  <v-main>
    <NavBar />
  </v-main>
</template>

<script>
import NavBar from "@/NavBar/TheNavBar.vue";
export default {
  name: "TheAllCar",
  components: {
    NavBar,
  },
};
</script>
<style lang="scss" scoped>
.TheAllCar {
  width: 100%;
  min-width: 100vh;
}
</style>
