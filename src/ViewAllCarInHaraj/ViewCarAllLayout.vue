<template>
  <div class="ViewCarAllLayout">
    <GoldCar />
    <NormalCar />
  </div>
</template>
<script>
import NormalCar from "../ViewAllCarInHaraj/NormalCar.vue";
import GoldCar from "../ViewAllCarInHaraj/GoldCar.vue";
export default {
  name: "ViewCarAllLayout",
  components: {
    GoldCar,
    NormalCar,
  },

  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped></style>
