<template>
  <div class="box">
    <v-card flat>
      <p class="card_title text-center mb-1">ثقة في أيدي الجميع</p>
      <p class="card_title text-center">جميع السيارات في متناول يديك</p>
    </v-card>
    <v-card-actions class="d-flex justify-center">
      <v-btn
        router
        to="/AboutSellingCarFreeAdd"
        elevation="0"
        large
        class="btn pa-3"
      >
        ابداء الان في بيع سيارتك مجاناً
      </v-btn>
    </v-card-actions>
    <!-- <div class="advertise">
      <a class="white--text">للأعلان </a>
    </div> -->
  </div>
</template>
<script>
export default {
  name: "ToSellYourCarInfo",
  components: {},
  data() {
    return {
      row: null,
    };
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/virables";
@import "@/scss/mixin";

.box {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  position: relative;
  padding: $padding;
  @media (max-width: 960px) {
    background: none;
  }
  .card_title {
    font-size: 35px;
    color: $fontcolorsm;
    font-family: $fontfamliy;
    font-weight: 500;
    @media (max-width: 1286px) {
      font-size: 26px;
    }
    @media (max-width: 1172px) {
      font-size: 23px;
    }
    @media (max-width: 960px) {
      color: $fontcolor;
    }
    @media (max-width: 760px) {
      font-size: 21px;
    }
    @media (max-width: 600px) {
      font-size: 27px;
    }
    @media (max-width: 360px) {
      font-size: 22px;
    }
  }
  .card_title:nth-child(2) {
    font-size: 18px;
    color: $fontcolorsm;
    font-family: $fontfamliy;

    @media (max-width: 960px) {
      color: $fontcolor;
    }
    @media (max-width: 760px) {
      font-size: 19px;
    }

    @media (max-width: 360px) {
      font-size: 18px;
    }
  }

  .theme--light.v-card {
    background-color: rgba(0, 0, 0, 0) !important;
  }
  .btn {
    font-family: $fontfamliy;
    color: $fontcolor;
    font-size: 15px;
    letter-spacing: 0;
    font-weight: bold;
    background-color: $color-background !important;
    @media (max-width: 960px) {
      background-color: $color-1 !important;
      color: $fontcolorsm;
      font-size: 16px;
    }
    .icon {
      font-size: 15px;
      color: grey;
    }
  }
  .advertise {
    position: absolute;
    bottom: 5px;
    right: 5px;
    @media (max-width: 960px) {
      position: relative;
      bottom: 0px;
      right: 0px;
    }
    a {
      font-family: $fontfamliy;
      font-size: 18px;
      @media (max-width: 960px) {
        color: $color-1 !important;
      }
    }
  }
}
</style>
