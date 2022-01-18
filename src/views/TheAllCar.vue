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
@import "@/scss/virables";
@import "@/scss/mixin";
.TheAllCar {
  position: relative;
  background-color: $simplebackground;
}
</style>
