<template>
  <div class="start-to-sell">
    <v-btn
      router
      to="/AboutSellingCar"
      rounded
      elevation="0"
      color="white"
      class="sell"
    >
      أعرض سيارتك
    </v-btn>
  </div>
</template>
<script>
export default {
  name: "StartToSell",
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
@import "../scss/virables";
@import "../scss/mixin";
.start-to-sell {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 5px;
  .sell {
    font-family: $fontfamliy;
    font-weight: bold;
    font-size: 16px;
    letter-spacing: 0;
    color: $color-2;
  }
}
</style>
