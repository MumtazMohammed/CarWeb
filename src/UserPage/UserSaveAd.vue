<template>
  <div class="UserSaveAd">
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-card-title class="title">
            <img
              class="ml-2 favorite-icon"
              contain
              height="30"
              src="../assets/outsrc/favorite.png"
              lazy-src="../assets/outsrc/favorite.png"
              alt="../assets/outsrc/favorite.png"
            />
            السيارات المفضلة لديك .</v-card-title
          >
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <v-row>
        <!--  -->
        <v-col
          cols="6"
          sm="4"
          md="3"
          class="pa-1 boredr-all-box"
          v-for="CarData in Favoriteitem"
          :key="CarData.id"
        >
          <!-- using methods to conect the image to the corect folder   -->
          <v-card
            :class="CarData.Vip == true ? 'card-verified' : 'card'"
            class="pa-1"
          >
            <v-row>
              <v-col class="" cols="12">
                <!-- verified  -->
                <div v-if="CarData.Vip == true">
                  <p class="py-2 ma-0 px-0 text-center top-verified">
                    <v-icon class="verified-icon white--text">
                      mdi-check-bold
                    </v-icon>
                    موثوق
                  </p>
                  <b class="pa-0 text-center verified"> </b>
                </div>
                <!-- not verified  -->
                <div v-else>
                  <p class="py-2 ma-0 px-0 text-center adbywho">
                    أعلان : {{ CarData.ad }}
                  </p>
                </div>

                <v-img
                  :lazy-src="getimageUrl(CarData.folder, CarData.image)"
                  :src="getimageUrl(CarData.folder, CarData.image)"
                  height="170px"
                >
                  <!-- discount  -->
                  <v-card
                    v-if="CarData.discount == true"
                    dark
                    shaped
                    color="success"
                    class="discount"
                  >
                    <v-card-text class="pa-2 text">
                      <v-icon class="discount-icon">mdi-spa-outline</v-icon>
                      خصم <span class="mr-1">{{ CarData.discountAmount }}</span>
                    </v-card-text>
                  </v-card>
                  <!-- booked up -->
                  <v-card v-show="CarData.Token == true" dark class="token">
                    <v-card-text class="pa-2 text"> محجوز... </v-card-text>
                  </v-card>
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
            <!-- car location  and condition  -->
            <v-row class="mb-1 justify-center">
              <v-col cols="5" class="pa-0">
                <v-card-subtitle class="text-right location-condtion pa-2">{{
                  CarData.location
                }}</v-card-subtitle>
              </v-col>
              <v-divider vertical></v-divider>
              <v-col cols="5" class="pa-0">
                <v-card-subtitle class="text-left location-condtion pa-2"
                  >{{ CarData.condtion }}
                </v-card-subtitle>
              </v-col>
            </v-row>
            <!-- car praic and kilo  -->
            <v-row class="mb-1 justify-center">
              <v-col cols="5" class="pa-0">
                <!-- discount  -->
                <v-card-subtitle
                  :class="
                    CarData.discount == true
                      ? 'oldprice'
                      : 'green--text font-weight-medium text-right pa-2'
                  "
                  class=""
                  >{{ CarData.payment }}</v-card-subtitle
                >
                <v-card-subtitle
                  v-if="CarData.discount == true"
                  class="green--text font-weight-medium text-right pa-2"
                  >{{ CarData.discountPrice }}</v-card-subtitle
                >
              </v-col>
              <v-divider vertical></v-divider>
              <v-col cols="5" class="pa-0">
                <v-card-subtitle class="text-left font-weight-regular pa-2"
                  >{{ CarData.kilometer }}
                </v-card-subtitle>
              </v-col>
            </v-row>
            <!-- car click to see more  -->
            <v-card-actions class="d-flex justify-center">
              <v-btn
                block
                :class="CarData.Vip == true ? 'btn-verified' : 'btn'"
                width="200"
                :to="{
                  name: 'ViewCar',
                  params: {
                    carName: CarData.name,
                    carShape: CarData.Shape,
                    carId: CarData.id,
                    Company: CarData.folder,
                  },
                }"
                large
              >
                رؤية السيارة
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <!--  -->
      </v-row>
    </v-container>
  </div>
</template>
<script>
import CarData from "../data-json/All-Car.json";
import { bus } from "../main";

export default {
  name: "UserSaveAd",
  data() {
    return {
      Favoriteitem: [],
      GetCarData: CarData,
      carName: this.$route.params.carName,
      carId: this.$route.params.carId,
    };
  },
  methods: {
    getimageUrl(FolderName, ImageName) {
      let image = require.context("@/assets/");
      return image("./" + FolderName + "/" + ImageName);
    },
  },
  computed: {
    getCarInfo() {
      let Carinformation = "";
      for (let i = 0; i < this.GetCarData.length; i++) {
        if (this.GetCarData[i].id == this.carId) {
          Carinformation = this.GetCarData[i];
          break;
        }
      }
      return Carinformation;
    },
  },
  created() {
    bus.$on("MyFavorites", (data) => {
      this.Favoriteitem = data;
    });
  },
};
</script>
<style lang="scss" scoped>
@import "../scss/virables";
@import "../scss/mixin";
.UserSaveAd {
  width: 100%;
  min-height: 100vh;
  background-color: $color-background;
  .title {
    font-family: $fontfamliy !important;
    letter-spacing: 0;
    font-size: 24px;
    @media (max-width: 335px) {
      font-size: 17px !important;
    }
    .favorite-icon {
      @media (max-width: 335px) {
        max-height: 25px;
      }
    }
  }
}
</style>
