<template>
  <div class="box">
    <v-row class="align-center flex-column">
      <v-flex class="d-flex align-center flex-column">
        <p class="card_title">ثقة لجميع انواع السيارات</p>
        <p class="card_title">في جميع انحاء اليمن</p>
        <b class="card_title"> بيع | شراء </b>
      </v-flex>

      <v-card flat class="mt-2">
        <v-card-actions class="d-flex justify-center">
          <v-btn
            router
            to="/AboutSellingCar"
            large
            elevation="0"
            class="btn pa-3"
          >
            ابداء الان في بيع سيارتك
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-row>
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
  .card_title {
    font-size: 30px;
    color: $fontcolor;
    font-family: $fontfamliy;
    font-weight: 500;
    @media (max-width: 960px) {
      font-size: 26px;
    }
    @media (max-width: 960px) {
      font-size: 23px;
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
    font-size: 25px;
    color: $fontcolor;
    font-family: $fontfamliy;
    @media (max-width: 960px) {
      font-size: 23px;
    }
    @media (max-width: 960px) {
      font-size: 20px;
    }
    @media (max-width: 760px) {
      font-size: 19px;
    }
    @media (max-width: 600px) {
      font-size: 24px;
    }
    @media (max-width: 360px) {
      font-size: 20px;
    }
  }
  .card_title:nth-child(3) {
    font-size: 20px;
    color: $fontcolor;
    font-family: $fontfamliy;
  }
  .theme--light.v-card {
    background-color: rgba(0, 0, 0, 0) !important;
  }
  .btn {
    font-family: $fontfamliy;
    color: $fontcolorsm;
    font-size: 18px;
    letter-spacing: 0;
    font-weight: 500;
    background-color: $color-1 !important;
    .icon {
      font-size: 15px;
      color: grey;
    }
  }
}
</style>
