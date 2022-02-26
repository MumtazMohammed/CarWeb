<template>
  <div class="product_box pb-10">
    <NavBar />
    <v-container fluid>
      <v-col cols="12" class="">
        <h2 class="tital">
          (<span class="red--text"> {{ AllCars.length }}</span>
          ) - سـيـارة للبيع
        </h2>
      </v-col>
      <!-- fillter -->
      <v-col cols="12" class="pr-2 mb-1">
        <CarFillter />
      </v-col>
      <!--  -->
      <v-divider></v-divider>
      <v-row class="mt-2 car-box">
        <v-col
          cols="6"
          sm="4"
          md="3"
          class="pa-1 boredr-all-box"
          v-for="CarData in AllCars"
          :key="CarData.id"
        >
          <!-- using methods to conect the image to the corect folder   -->
          <v-card
            v-bind:class="{
              'card-verified': CarData.Vip == true,
              'card': CarData.Vip == false,
            }"
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
                  <!-- booked up  -->
                  <v-card v-show="CarData.Token == true" dark class="token">
                    <v-card-text class="pa-2 text"> محجوز ... </v-card-text>
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
      </v-row>
    </v-container>
  </div>
</template>
<script>
import AllCars from "../data-json/All-Car.json";
import NavBar from "../NavBar/TheNavBar.vue";
import CarFillter from "../Search/CarFillter.vue";
export default {
  name: "SeeAllUsedAndNewCars",
  components: {
    NavBar,
    CarFillter,
  },
  data() {
    return {
      AllCars: AllCars,
      carName: this.$route.params.carName,
      carId: this.$route.params.carId,
      CarShape: this.$route.params.CarShape,
      Company: this.$route.params.Company,
      Price: [" الأعلى سعرا", "الأقل سعرا"],
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
  height: 100%;
  // position: relative;
  // background-color: $simplebackground;

  .car-box {
    @media (max-width: 540px) {
      justify-content: center;
    }
  }
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
  .filtt {
    @media (max-width: 540px) {
      padding: 5px 90px !important;
    }
    @media (max-width: 450px) {
      padding: 5px 15px !important;
    }
  }
  .boredr-all-box {
    @media (max-width: 880px) {
      max-width: 50%;
    }
    @media (max-width: 540px) {
      padding: 5px 80px !important;
      max-width: 100%;
    }
    @media (max-width: 450px) {
      padding: 5px 5px !important;
    }
  }
  .tital {
    font-family: $fontfamliy;
    font-size: 25px;
    @media (max-width: 600px) {
      font-size: 20px;
    }
    @media (max-width: 360px) {
      font-size: 17px;
    }
  }
  .v-btn--icon.v-size--default .v-icon {
    font-size: 20px;
    color: #8c8c8c;
  }
  // verified car card
  .card-verified {
    overflow: hidden;
    .top-verified {
      font-family: $fontfamliy;
      color: $fontcolorsm;
      letter-spacing: 0;
      font-size: 16px;
      font-weight: bold;
      background: $linear-gradient;
      border-top-left-radius: 5px;
    }
    .verified {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      top: 0;
      right: 0;
      color: $fontcolor;
      width: 32px;
      height: 32px;
      text-align: center;
      background-color: #fff;
      border-radius: 50%;
    }
    .verified:after {
      content: "";
      position: absolute;
      transform: translate(-50%, -50%);
      top: 50%;
      left: 50%;
      width: 27px;
      height: 27px;
      border-radius: 50%;
      border: 2px solid $color-1;
    }
    .verified:before {
      content: "";
      position: absolute;
      transform: translate(-50%, -50%);
      top: 50%;
      left: 50%;
      width: 18px;
      height: 18px;
      background-color: $color-1;
      clip-path: polygon(
        50% 0%,
        61% 35%,
        98% 35%,
        68% 57%,
        79% 91%,
        50% 70%,
        21% 91%,
        32% 57%,
        2% 35%,
        39% 35%
      );
    }
    .verified-icon {
      font-size: 17px !important;
      // font-weight: 400;
      color: #fff;
    }
    .btn-verified {
      color: $fontcolorsm;
      font-family: $fontfamliy;
      font-weight: 500;
      font-size: 17px;
      padding: 10px;
      letter-spacing: 0;
      background: $linear-gradient;
    }
  }
  // Not verified car card
  .card {
    overflow: hidden;
    .btn {
      color: $fontcolor;
      font-family: $fontfamliy;
      font-weight: 500;
      font-size: 17px;
      padding: 10px;
      letter-spacing: 0;
    }
    .adbywho {
      font-family: $fontfamliy;
      color: $fontcolor;
      letter-spacing: 0;
      font-size: 16px;
      font-weight: 400;
    }
  }

  .v-btn.v-size--default::v-deep .theme--light.v-btn--active:before,
  .theme--light.v-btn--active:hover:before {
    opacity: 0;
  }
  .v-btn.v-size--default::v-deep .theme--light.v-btn--active:hover:before,
  .theme--light.v-btn--active:before {
    opacity: 0;
  }
  .v-card__subtitle {
    font-size: 17px;
    font-weight: 300;
    font-family: $fontfamliy;
    @media (max-width: 1040px) {
      font-size: 15px;
    }
    @media (max-width: 960px) {
      font-size: 17px;
    }
  }
  .location-condtion {
    font-size: 16px;
    font-weight: 400;
    font-family: $fontfamliy;
  }
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
.select-price {
  font-family: $fontfamliy;
  font-weight: 500;
}
// discount
.discount {
  position: absolute;
  top: 0px;
  width: auto;
  right: 0px;
  // border-radius: 20px 0px 20px 20px !important;
  display: flex;
  .text {
    font-family: $fontfamliy;
    font-size: 14px !important;
    font-weight: 500;
    span {
      font-size: 14px !important;
      font-weight: 500;
    }
  }
  .discount-icon {
    font-size: 16px !important;
  }
}
.oldprice {
  text-decoration: line-through;
  color: rgba(108, 108, 108, 0.469) !important;
  padding: 8px;
  position: absolute;
  transform: translateY(-50%);
  font-size: 14px !important;
}
// booked up
.token {
  background-color: rgba(0, 0, 0, 0.653) !important;
  width: 100%;
  height: 100%;
  border-radius: 0px !important;
  @include flexcenter();
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  cursor: default;
  .text {
    text-align: center;
    font-size: 35px !important;
    color: $fontcolorsm !important;
    font-family: $fontfamliy;
    font-weight: bold;
    letter-spacing: 0;
    pointer-events: none;
  }
}
</style>
