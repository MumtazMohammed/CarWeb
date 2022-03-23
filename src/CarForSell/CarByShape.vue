<template>
  <v-app>
    <NavBar />
    <div class="product_box pb-10">
      <v-container fluid>
        <v-col class="pr-0" cols="12">
          <h2 class="tital">
            (<span class="red--text"> {{ getCarInfo.length }}</span> ) سـيـارة
            من نوع {{ CarShape }} للبيع
          </h2>
        </v-col>
        <!-- fillter -->
        <v-col cols="12" class="pr-2 mb-1">
          <CarFillter />
        </v-col>
        <!--  -->
        <v-row class="mt-2 car-box">
          <!-- message if not found car  -->
          <v-col cols="12" v-if="getCarInfo.length < 1">
            <h2 class="tital text-center">لا يوجد سيارات بنفس طلبك حتى الأن</h2>
            <v-card-actions class="justify-center">
              <v-avatar tile size="300" color="transparent">
                <v-img
                  contain
                  src="../assets/outsrc/undraw_no_data_re_kwbl.svg"
                  lazy-src="../assets/outsrc/undraw_no_data_re_kwbl.svg"
                  alt="../assets/outsrc/undraw_no_data_re_kwbl.svg"
                >
                </v-img>
              </v-avatar>
            </v-card-actions>
          </v-col>
          <!--  -->
          <v-col
            cols="6"
            sm="4"
            md="3"
            class="pa-1 boredr-all-box"
            v-for="CarData in getCarInfo"
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
                  <b class="pa-0 text-center CarNumVip"> </b>
                  <v-img
                    :lazy-src="getimageUrl(CarData.folder, CarData.image)"
                    :src="getimageUrl(CarData.folder, CarData.image)"
                    height="130px"
                  >
                    <!-- discount  -->
                    <v-card
                      v-if="CarData.discount == true"
                      dark
                      flat
                      width="200"
                      color="orange darken-4"
                      class="discount rounded-t-pill"
                    >
                      <v-card-text class="px-3 py-0 text-center text">
                        <v-icon class="discount-icon">mdi-spa-outline</v-icon>
                        خصم
                        <span class="mr-1">{{ CarData.discountAmount }}</span>
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
              <v-col cols="12" class="pa-3 pr-5">
                <v-card-subtitle class="font-weight-medium pa-1 text-truncate"
                  >{{ CarData.company }} {{ CarData.name }} {{ CarData.modle }}
                </v-card-subtitle>
              </v-col>
              <!-- car praic   -->
              <v-card-actions class="justify-center">
                <v-col cols="5" class="pa-0">
                  <!-- discount  -->
                  <v-card-subtitle
                    :class="
                      CarData.discount == true
                        ? 'oldprice'
                        : 'green--text font-weight-medium text-right pa-2 '
                    "
                    class="text-center"
                    >{{ CarData.payment }}
                  </v-card-subtitle>
                  <v-card-subtitle
                    v-if="CarData.discount == true"
                    class="green--text font-weight-medium text-center pa-2"
                    >{{ CarData.discountPrice }}</v-card-subtitle
                  >
                </v-col>
                <v-divider vertical></v-divider>
                <!-- if instalment  -->
                <v-col cols="7" class="pa-0">
                  <div v-if="CarData.Instalment">
                    <v-card-subtitle class="text-center pa-2 text-truncate">
                      <span
                        class="text-center green--text car-place-price-price"
                      >
                        {{ CarData.InstalmentPerMonth }}
                      </span>
                      <span class="ma-0 black--text car-Instalment-price-text">
                        ريال / شهرياً
                      </span>
                    </v-card-subtitle>
                  </div>
                  <div v-else>
                    <v-card-subtitle
                      class="text-center pa-2 car-if-not-Instalment-price-text"
                    >
                      كاش
                    </v-card-subtitle>
                  </div>
                </v-col>
              </v-card-actions>
              <!-- car location  and condition  -->
              <v-col cols="12">
                <v-card-actions class="justify-center pa-0">
                  <span class="location-condtion-place pa-1 px-2">
                    {{ CarData.location }}
                  </span>
                  <span class="location-condtion-place pa-1 px-2">
                    {{ CarData.condtion }}
                  </span>
                  <span class="location-condtion-place pa-1 px-2 text-truncate"
                    >{{ CarData.kilometer }}
                  </span>
                </v-card-actions>
              </v-col>
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
    <FooterBar />
  </v-app>
</template>
<script>
import NavBar from "../NavBar/TheNavBar.vue";
import CarShape from "../data-json/All-Car.json";
import CarFillter from "../Search/CarFillter.vue";
import FooterBar from "@/footer/footer.vue";

export default {
  name: "CarByShape",
  components: { NavBar, CarFillter, FooterBar },
  data() {
    return {
      GetCarData: CarShape,
      carName: this.$route.params.carName,
      carId: this.$route.params.carId,
      CarShape: this.$route.params.CarShape,
      Price: [" الأعلى سعرا", "الأقل سعرا"],
    };
  },
  computed: {
    getCarInfo() {
      let GetCarByShape = [];
      for (let i = 0; i < this.GetCarData.length; i++) {
        if (this.GetCarData[i].Shape == this.CarShape) {
          GetCarByShape.push(this.GetCarData[i]);
        }
      }
      return GetCarByShape;
    },
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
.product_box {
  width: 100%;
  min-height: 100vh;
  background-color: $simplebackground;
  padding: $padding;

  .car-box {
    @media (max-width: 540px) {
      justify-content: center;
    }
  }
  .tital {
    color: $fontcolor;
    font-family: $fontfamliy;
  }
  .filtt {
    @media (max-width: 540px) {
      padding: 5px 80px !important;
    }
    @media (max-width: 450px) {
      padding: 5px 5px !important;
    }
    @media (max-width: 350px) {
      padding: 5px 2px !important;
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
      padding: 12px !important;
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
  .location-condtion-place {
    display: block;
    font-size: 13px;
    font-weight: 400;
    font-family: $fontfamliy;
    background-color: $color-3;
    margin: 0 2px !important;
    color: $fontcolorsm;
    border-radius: 20px;
  }
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
    border-top-right-radius: 5px;
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
// not verified car card
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
.no-car {
  font-family: $fontfamliy;
  font-size: 25px;
  color: $btnbackground;
  font-weight: 500;
  position: absolute;
  top: 50%;
  margin: 0;
  @media (max-width: 400px) {
    font-size: 20px;
  }
  @media (max-width: 300px) {
    font-size: 17px;
  }
}
// discount
.discount {
  position: absolute;
  bottom: 0;
  transform: translatex(-50%);
  width: auto;
  left: 50%;
  // border-radius: 20px 0px 20px 20px !important;
  display: flex;
  .text {
    font-family: $fontfamliy;
    font-size: 16px !important;
    font-weight: 500;
    color: #ffffff !important;

    span {
      font-size: 16px !important;
      font-weight: 500;
    }
  }
  .discount-icon {
    font-size: 16px !important;
    color: #ffffff !important;
  }
}
.oldprice {
  text-decoration: line-through;
  color: $fontcolorlinks !important;
  padding: 8px;
  position: absolute;
  transform: translateY(-50%);
  font-size: 17px !important;
  opacity: 0.7;
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
// instalment price
.car-place-price-price {
  font-size: 16px;
  font-weight: 500;
  font-family: $fontfamliy;
}
.car-Instalment-price-text {
  font-size: 13px;
  width: fit-content;
  font-weight: 500;
  font-family: $fontfamliy;
  margin-right: 2px;
}
.car-if-not-Instalment-price-text {
  font-size: 12px;
  font-weight: 500 !important;
  font-family: $fontfamliy;
}
</style>
