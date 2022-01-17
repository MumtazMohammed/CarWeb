<template>
  <v-main>
    <NavBar />
    <ViewCarAllLayout />
  </v-main>
</template>

<script>
import NavBar from "@/NavBar/TheNavBar.vue";
import ViewCarAllLayout from "../ViewAllCarInHaraj/ViewCarAllLayout.vue";
export default {
  name: "TheAllCar",
  components: {
    NavBar,
    ViewCarAllLayout,
  },
};
</script>
<style lang="scss" scoped>
.TheAllCar {
  width: 100%;
  min-width: 100vh;
}
</style>
