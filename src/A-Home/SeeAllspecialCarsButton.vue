<template>
  <div class="see-all mt-8">
    <div class="text-center">
      <v-btn elevation="0" large class="link" to="/SeeAllSpecialCar">
        شاهد جميع السيارات المضمونه لدينا
      </v-btn>
    </div>
  </div>
</template>
<script>
export default {
  name: "SeeAllspecialCarsButton",
};
</script>
<style lang="scss" scoped>
@import "@/scss/virables";
@import "@/scss/mixin";
.link {
  font-family: $fontfamliy;
  color: $fontcolorsm !important;
  letter-spacing: 0;
  font-size: 20px !important;
  background: $linear-gradient;
  text-decoration: none !important;
  @media (max-width: 360px) {
    font-size: 16px !important;
  }
  @media (max-width: 320px) {
    font-size: 14px !important;
  }
}
</style>
