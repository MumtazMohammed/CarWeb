<template>
  <div class="start-to-sell">
    <v-btn router to="/AboutSellingCar" rounded color="#0881fa" class="sell">
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
    font-weight: 500;
    font-size: 13px;
    letter-spacing: 0;
    color: white;
  }
}
</style>
