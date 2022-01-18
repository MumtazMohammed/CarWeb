<template>
  <div class="ViewCarAllLayout">
    <GoldCar />
    <!-- <NormalCar /> -->
  </div>
</template>
<script>
// import NormalCar from "../ViewAllCarInHaraj/NormalCar.vue";
import GoldCar from "../ViewAllCarInHaraj/GoldCar.vue";
export default {
  name: "ViewCarAllLayout",
  components: {
    GoldCar,
    // NormalCar,
  },

  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/virables";
@import "@/scss/mixin";
.ViewCarAllLayout {
  width: 100%;
  min-height: 100vh;
  position: relative;
  background-color: $simplebackground;
}
</style>
