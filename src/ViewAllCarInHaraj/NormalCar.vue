<template>
  <div class="product_box">
    <v-container class="mb-7">
      <v-row class="mt-1">
        <v-col
          cols="12"
          sm="6"
          md="3"
          class="pa-1 mt-3 boredr-all-box"
          v-for="CarSell in CarSells"
          :key="CarSell.id"
        >
          <!-- using methods to conect the image to the corect folder   -->
          <v-card class="overflow-hidden">
            <v-row>
              <v-col class="pt-1" cols="12">
                <p class="text-center condtion">{{ CarSell.condtion }}</p>
                <v-img
                  :src="getimageUrl(CarSell.folder, CarSell.image)"
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
                  >{{ CarSell.company }} {{ CarSell.name }} {{ CarSell.modle }}
                </v-card-subtitle>
              </v-col>
            </v-row>
            <!-- car praic and kilo  -->
            <v-row class="mb-1 justify-center">
              <v-col cols="5" class="pa-0">
                <v-card-subtitle
                  class="green--text font-weight-medium text-right pa-1"
                  >{{ CarSell.payment }}</v-card-subtitle
                >
              </v-col>
              <v-divider vertical></v-divider>
              <v-col cols="5" class="pa-0">
                <v-card-subtitle class="text-left font-weight-regular pa-1"
                  >{{ CarSell.kilometer }}
                </v-card-subtitle>
              </v-col>
            </v-row>
            <!-- car click to see more  -->
            <v-card-actions class="d-flex justify-center">
              <v-btn
                width="200"
                :to="{
                  name: 'ViewCar',
                  params: {
                    carName: CarSell.folder,
                    carId: CarSell.id,
                  },
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
import CarSells from "../data-json/All-Car.json";
export default {
  name: "GoldCar",
  data() {
    return {
      CarSells: CarSells,
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
