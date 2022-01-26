<template>
  <div class="Shape_box mt-16">
    <div class="Shape_container">
      <v-container class="px-md-7">
        <p class="text-center font-weight-bold tital">
          {{ Tital }}
        </p>
        <span class="line mt-5 mb-8 mx-auto"></span>
        <v-row>
          <v-col
            v-for="(Shape, i) in CarShape"
            :key="i"
            cols="6"
            sm="4"
            md="3"
            class="pa-1"
          >
            <v-card flat class="d-flex align-center justify-center flex-column">
              <v-avatar width="120" height="120" tile>
                <v-img
                  max-height="70"
                  max-width="300"
                  contain
                  :src="Shape.CarShape"
                ></v-img>
              </v-avatar>
              <router-link
                class="CarShapeText pa-2 text-center"
                :to="{
                  name: 'CarByShape',
                  params: {
                    CarShape: Shape.Shape,
                  },
                }"
              >
                <a class="white--text">{{ Shape.Shape }} </a>
              </router-link>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
import CarShape from "../data-json/CarShape.json";

export default {
  name: "CarShape",
  data() {
    return {
      Tital: "تصفح السيارات حسب الـشـكل",
      CarShape,
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

.Shape_box {
  padding: $padding;
  margin-top: 30px;
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: $color-background;
  @media (max-width: 600px) {
    width: 100%;
  }
  .Shape_container {
    width: 70%;
    @media (max-width: 800px) {
      width: 100%;
    }
  }
  .CarShapeText {
    font-family: $fontfamliy2;
    font-size: 15px;
    font-weight: 500;
    letter-spacing: 0;
    background: $linear-gradient;
    text-decoration: none;
    width: 100%;
  }
  .tital {
    font-family: $fontfamliy;
    font-size: 30px;
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
