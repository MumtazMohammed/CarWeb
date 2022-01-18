<template>
  <div class="brand_box mt-8">
    <div class="brand_container">
      <v-container class="px-md-7">
        <p class="text-center font-weight-bold tital">
          {{ Tital }}
        </p>
        <span class="line mt-5 mb-8 mx-auto"></span>
        <v-row>
          <v-col
            v-for="Brand in LogoBrand"
            :key="Brand.cartype"
            cols="6"
            sm="4"
            md="3"
            class="pa-1"
          >
            <v-card
              elevation="1"
              class="d-flex align-center justify-center flex-column img-card"
            >
              <v-avatar width="200" height="120" tile>
                <v-img
                  max-height="70"
                  max-width="150"
                  contain
                  :src="getimageUrl(Brand.folder, Brand.carLogo)"
                ></v-img>
              </v-avatar>
              <router-link
                class="CarBrandText mt-4"
                :to="{
                  name: 'CarByBrand',
                  params: { CarType: Brand.cartype, CarName: Brand.carName },
                }"
              >
                <a class="white--text">
                  {{ Brand.carName }}
                </a>
              </router-link>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
import LogoBrand from "@/data-json/CarType.json";
export default {
  name: "CarBrands",
  data() {
    return {
      LogoBrand: LogoBrand,
      Tital: "تصفح السيارات حسب الماركة",
    };
  },
  methods: {
    getimageUrl(FolderName, ImageName) {
      let image = require.context("@/assets/");
      return image("./" + FolderName + "/" + ImageName);
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/virables";
@import "@/scss/mixin";

.brand_box {
  width: 100%;
  padding: 25px 0;
  background-color: $simplebackground;
  display: flex;
  justify-content: center;
  @media (max-width: 600px) {
    width: 100%;
  }
  .brand_container {
    width: 70%;
    @media (max-width: 800px) {
      width: 100%;
    }
  }
  .CarBrandText {
    font-family: $fontfamliy2;
    font-size: 15px;
    font-weight: 500;
    letter-spacing: 0;
    text-decoration: none !important;
    width: 100%;
    padding: 10px 0;
    text-align: center;
    background-color: $background;
  }
  .tital {
    font-family: $fontfamliy;
    font-size: 30px;
    @media (max-width: 400px) {
      font-size: 20px;
    }
    @media (max-width: 300px) {
      font-size: 18px;
    }
  }
}
.line {
  width: 300px;
  height: 5px;
  background-color: $btnbackground;
  display: block;
}
</style>
