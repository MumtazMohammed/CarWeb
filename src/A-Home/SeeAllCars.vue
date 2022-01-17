<template>
  <div class="see-all">
    <div class="my-2 text-center">
      <router-link v-model="first" to="/ViewAllCar">
        <a ref="#top" class="link"> شاهد جميع السيارات المضمونه لدينا </a>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "SeeAll",
  first: 0,

  methods: {
    ScrollToTop() {
      let currenScroll = document.documentElement.scrollTop;
      let int = setInterval(frame, 6);
      function frame() {
        if (0 > currenScroll) {
          clearInterval(int);
        } else {
          currenScroll = currenScroll - 12;
          document.documentElement.scrollTop = currenScroll;
        }
      }
    },
  },
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
  @media (max-width: 360px) {
    font-size: 18px;
  }
  @media (max-width: 320px) {
    font-size: 15px;
  }
}
</style>
