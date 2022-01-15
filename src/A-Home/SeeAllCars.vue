<template>
  <div class="see-all">
    <div class="my-2 text-center">
      <router-link to="/ViewAllCar">
        <a class="link"> شاهد جميع السيارات </a>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "SeeAll",
};
</script>
<style lang="scss" scoped>
@import "@/scss/virables";
@import "@/scss/mixin";
.link {
  font-family: $fontfamliy;
  letter-spacing: 0;
  font-size: 20px;
  text-decoration: underline;
}
</style>
