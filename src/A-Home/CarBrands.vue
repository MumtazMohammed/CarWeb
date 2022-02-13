<template>
  <div class="brand_box my-5">
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
              router
              :to="{
                name: 'CarByBrand',
                params: { CarType: Brand.cartype, CarName: Brand.carName },
              }"
              flat
              class="d-flex align-center justify-center flex-column img-card cursor-pointer"
            >
              <v-avatar width="200" height="120" tile>
                <v-img
                  max-height="70"
                  max-width="150"
                  contain
                  :src="getimageUrl(Brand.folder, Brand.carLogo)"
                  :lazy-src="getimageUrl(Brand.folder, Brand.carLogo)"
                ></v-img>
              </v-avatar>
              <a class="white--text CarBrandText mt-4">
                {{ Brand.carName }}
              </a>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
import LogoBrand from "@/data-json/CarType.json";
import Cardata from "../data-json/All-Car.json";
export default {
  name: "CarBrands",
  data() {
    return {
      Cardata: Cardata,
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
  padding: $padding;
  background-color: $color-background;
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
    font-family: $fontfamliy;
    font-size: 15px;
    font-weight: 500;
    letter-spacing: 0;
    text-decoration: none !important;
    width: 100%;
    padding: 10px 0;
    text-align: center;
    background: $color-1;
  }
  .tital {
    font-family: $fontfamliy;
    font-size: 30px;
    color: $fontcolor;

    @media (max-width: 460px) {
      font-size: 26px;
    }
    @media (max-width: 438px) {
      font-size: 24px;
    }
    @media (max-width: 370px) {
      font-size: 20px;
    }
    @media (max-width: 300px) {
      font-size: 17px;
    }
  }
}
.line {
  width: 300px;
  height: 7px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  background: $color-1;
  display: block;
  @media (max-width: 438px) {
    width: 200px;
  }
}
</style>
