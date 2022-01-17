<template>
  <div class="Shape_box mt-16">
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
          sm="3"
          md="2"
          class="pa-1"
        >
          <v-card
            elevation="1"
            class="d-flex align-center justify-center flex-column"
          >
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
  padding: 20px 0;
  margin-top: 30px;
  margin: 0 auto;
  width: 100%;
  background-color: $simplebackground;
  @media (max-width: 600px) {
    width: 100%;
  }

  .CarShapeText {
    font-family: $fontfamliy2;
    font-size: 15px;
    font-weight: 500;
    letter-spacing: 0;
    background-color: $background;
    text-decoration: none;
    width: 100%;
  }
  .more {
    font-family: $fontfamliy2;
    font-size: 15px;
    font-weight: 500;
    letter-spacing: 0;
    background-color: $btnbackground;
    text-decoration: none;
    width: 100%;
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
  .icon {
    color: $btnbackground;
    font-size: 40px;
  }
}
.line {
  width: 300px;
  height: 3px;
  background-color: $btnbackground;
  display: block;
}
</style>
