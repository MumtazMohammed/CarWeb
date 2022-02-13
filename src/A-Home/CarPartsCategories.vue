<template>
  <div class="CarParts my-5">
    <div class="CarParts_container">
      <v-container class="px-md-7">
        <p class="text-center font-weight-bold tital">
          {{ Tital }}
        </p>
        <span class="line mt-5 mb-8 mx-auto"></span>
        <v-row>
          <v-col
            v-for="(CarPart, i) in CarParts"
            :key="i"
            cols="6"
            sm="4"
            md="3"
            class="pa-1"
          >
            <v-card
              flat
              outlined
              class="d-flex align-center justify-center flex-column"
            >
              <v-avatar class="ma-3" size="50" tile>
                <v-img
                  contain
                  :src="getimageUrl(CarPart.folder, CarPart.PartImg)"
                  :lazy-src="getimageUrl(CarPart.folder, CarPart.PartImg)"
                ></v-img>
              </v-avatar>
              <v-divider></v-divider>
              <v-card-text class="CarPartText pa-1 text-center">
                {{ CarPart.PartTital }}
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
import CarParts from "../data-json/CarParts.json";

export default {
  name: "CarParts",
  data() {
    return {
      Tital: "سوق قطع الغيار",
      CarParts,
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

.CarParts {
  padding: $padding;
  margin-top: 30px;
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: $color-background;
  @media (max-width: 600px) {
    width: 100%;
  }
  .CarParts_container {
    width: 70%;
    @media (max-width: 800px) {
      width: 100%;
    }
  }
  .CarPartText {
    font-family: $fontfamliy;
    font-size: 15px;
    font-weight: 400;
    letter-spacing: 0;
    color: $fontcolorsm !important;
    background: $color-1;
    text-decoration: none;
    width: 100%;
    height: 60px;
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
  .icon {
    color: $btnbackground;
    font-size: 40px;
  }
}
.line {
  width: 170px;
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
