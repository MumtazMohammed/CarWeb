<template>
  <div class="product_box">
    <NavBar />
    <v-container class="mb-7">
      <v-row class="mt-1">
        <v-col
          cols="12"
          sm="6"
          md="3"
          class="pa-2 mt-4 boredr-all-box"
          v-for="CarData in AllCarDate"
          :key="CarData.id"
        >
          <!-- using methods to conect the image to the corect folder   -->
          <v-card>
            <v-row>
              <v-col class="pt-1" cols="12">
                <p class="ma-0 text-center condtion">{{ CarData.condtion }}</p>
                <v-img
                  :src="getimageUrl(CarData.folder, CarData.image)"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                  height="170px"
                >
                </v-img>
              </v-col>
            </v-row>
            <!-- car info  -->
            <!-- car Name  -->
            <v-row class="pa-0 mt-1" align="center">
              <v-col cols="12" class="pa-3 pr-5">
                <v-card-subtitle class="font-weight-medium pa-1"
                  >{{ CarData.company }} {{ CarData.name }} {{ CarData.modle }}
                </v-card-subtitle>
              </v-col>
            </v-row>
            <!-- car praic and kilo  -->
            <v-row class="mb-1 justify-center">
              <v-col cols="5" class="pa-0">
                <v-card-subtitle
                  class="green--text font-weight-medium text-right pa-1"
                  >{{ CarData.payment }}</v-card-subtitle
                >
              </v-col>
              <v-divider vertical></v-divider>
              <v-col cols="5" class="pa-0">
                <v-card-subtitle class="text-left font-weight-regular pa-1"
                  >{{ CarData.kilometer }}
                </v-card-subtitle>
              </v-col>
            </v-row>
            <!-- car click to see more  -->
            <v-card-actions class="d-flex justify-center">
              <v-btn
                width="200"
                :to="{
                  name: 'ViewCar',
                  params: { carName: CarData.folder, carId: CarData.id },
                }"
                depressed
              >
                أقراء المزيد
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import NavBar from "../NavBar/TheNavBar.vue";

import AllCarDate from "../data-json/All-Car.json";
export default {
  name: "ViewAllCar",
  components: { NavBar },
  data() {
    return {
      AllCarDate: AllCarDate,
    };
  },

  // this is help full to call the image inside folder and inject to the src
  methods: {
    getimageUrl(FolderName, ImageName) {
      let image = require.context("@/assets/");
      return image("./" + FolderName + "/" + ImageName);
    },

    ScrollTpTop() {
      let currenScroll = document.documentElement.scrollTop;
      let up = setInterval(frame, 6);
      function frame() {
        if (0 > currenScroll) {
          clearInterval(up);
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
.product_box {
  width: 100%;
  height: auto;
  position: relative;

  .tital {
    color: $fontcolor;
    font-family: $fontfamliy;
  }
  .title-box {
    margin: 15px 0;
    width: fit-content;
    h3 {
      color: $fontcolor;
      text-decoration: underline;
      font-family: $fontfamliy;
      cursor: pointer;
    }
  }

  .v-btn--icon.v-size--default .v-icon {
    font-size: 20px;
    color: #8c8c8c;
  }
  .v-btn.v-size--default {
    color: $fontcolorsm;
    font-family: $fontfamliy;
    font-weight: 500;
    font-size: 16px;
    padding: 10px;
    letter-spacing: 0;
    background-color: $background;
  }
  .v-card__subtitle {
    font-size: 17px;
    font-weight: 300;
    font-family: $fontfamliy;
    font-family: $fontfamliy;
  }
}
.condtion {
  font-family: $fontfamliy;
  color: $fontfamliy;
  letter-spacing: 0;
  font-size: 15px;
  font-weight: 600;
}
@media (min-width: 960px) {
  .container {
    max-width: 1200px;
  }
}
@media (max-width: 450px) {
  .flex.xs6 {
    max-width: 100% !important;
  }
}
</style>
