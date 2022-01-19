<template>
  <div class="ViewCarAllLayout">
    <AlHaraj />
    <!-- <NormalCar /> -->
  </div>
</template>
<script>
// import NormalCar from "../ViewAllCarInHaraj/NormalCar.vue";
import AlHaraj from "../ViewAllCarInHaraj/AlHaraj.vue";
export default {
  name: "ViewCarAllLayout",
  components: {
    AlHaraj,
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
