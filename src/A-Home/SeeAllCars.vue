<template>
  <div class="see-all mt-8">
    <div class="text-center">
      <v-btn large outlined class="link" color="#6599ff" to="/ViewAllCar">
        شاهد جميع السيارات المضمونه لدينا
      </v-btn>
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
  font-size: 20px !important;
  text-decoration: none !important;
  @media (max-width: 360px) {
    font-size: 18px;
  }
  @media (max-width: 320px) {
    font-size: 15px;
  }
}
</style>
