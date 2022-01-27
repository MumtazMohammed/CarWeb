<template>
  <div class="product_box">
    <NavBar />
    <v-container class="">
      <v-row class="py-4 pb-7 car-box">
        <v-col cols="12" class="pr-0">
          <h2 class="tital">
            (<span class="red--text"> {{ getCarInfo.length }}</span>
            ) - سـيـارة مستعملة للبيع
          </h2>
        </v-col>
        <v-col class="filtt" cols="12" v-if="getCarInfo.length > 5">
          <FilterSection />
        </v-col>
        <v-col
          cols="6"
          sm="4"
          md="3"
          class="pa-1 boredr-all-box"
          v-for="CarData in getCarInfo"
          :key="CarData.id"
        >
          <!-- using methods to conect the image to the corect folder   -->
          <!-- vip car  -->
          <v-card v-if="CarData.Vip == true" class="card-vip pa-1" flat>
            <v-row>
              <v-col class="" cols="12">
                <p class="py-2 ma-0 px-0 text-center top-vip">
                  مضمون وريح راسك
                </p>
                <b class="pa-0 text-center CarNumVip"> </b>
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
            <!-- car location  and condition  -->
            <v-row class="mb-1 justify-center">
              <v-col cols="5" class="pa-0">
                <v-card-subtitle class="text-right location-condtion pa-2">{{
                  CarData.location
                }}</v-card-subtitle>
              </v-col>
              <v-divider color="#03a9f4" vertical></v-divider>
              <v-col cols="5" class="pa-0">
                <v-card-subtitle class="text-left location-condtion pa-2"
                  >{{ CarData.condtion }}
                </v-card-subtitle>
              </v-col>
            </v-row>
            <!-- car praic and kilo  -->
            <v-row class="mb-1 justify-center">
              <v-col cols="5" class="pa-0">
                <v-card-subtitle
                  class="green--text font-weight-medium text-right pa-2"
                  >{{ CarData.payment }}</v-card-subtitle
                >
              </v-col>
              <v-divider color="#03a9f4" vertical></v-divider>
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
                class="btn-vip rounded-0"
                width="200"
                :to="{
                  name: 'ViewCar',
                  params: {
                    carName: CarData.name,
                    carShape: CarData.Shape,
                    carId: CarData.id,
                    Company: CarData.folder,
                    condtion: CarData.condtion,
                  },
                }"
                depressed
              >
                أقراء المزيد
              </v-btn>
            </v-card-actions>
          </v-card>
          <!-- not vip car  -->
          <v-card v-if="CarData.Vip == false" class="card pa-1" flat>
            <v-row>
              <v-col class="" cols="12">
                <p class="py-2 ma-0 px-0 text-center adbywho">
                  أعلان : {{ CarData.ad }}
                </p>
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
                <v-card-subtitle
                  class="green--text font-weight-medium text-right pa-2"
                  >{{ CarData.payment }}</v-card-subtitle
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
                class="btn grey lighten-1 rounded-0"
                width="200"
                :to="{
                  name: 'ViewCar',
                  params: {
                    carName: CarData.name,
                    carShape: CarData.Shape,
                    carId: CarData.id,
                    Company: CarData.folder,
                    condtion: CarData.condtion,
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
import SpicalCarView from "../data-json/All-Car.json";
import FilterSection from "../CarSearch/Filter.vue";
import NavBar from "../NavBar/TheNavBar.vue";
export default {
  name: "UsedCar",
  components: {
    FilterSection,
    NavBar,
  },
  data() {
    return {
      SpicalCarView: SpicalCarView,
      carName: this.$route.params.carName,
      carId: this.$route.params.carId,
      CarShape: this.$route.params.CarShape,
      Company: this.$route.params.Company,
      condtion: this.$route.params.condtion,
    };
  },
  computed: {
    getCarInfo() {
      let GetCarByCondtion = [];
      for (let i = 0; i < this.SpicalCarView.length; i++) {
        if (this.SpicalCarView[i].condtion === "مستعمل") {
          GetCarByCondtion.push(this.SpicalCarView[i]);
        }
      }
      return GetCarByCondtion;
    },
  },
  // this is help full to call the image inside folder and inject to the src
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
      padding: 5px 45px !important;
    }
    @media (max-width: 380px) {
      padding: 5px 20px !important;
    }

    @media (max-width: 350px) {
      padding: 5px 5px !important;
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
      padding: 5px 30px !important;
    }
    @media (max-width: 380px) {
      padding: 5px 20px !important;
    }

    @media (max-width: 350px) {
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
  .btn-vip {
    color: $fontcolorsm;
    font-family: $fontfamliy;
    font-weight: 500;
    font-size: 17px;
    padding: 10px;
    letter-spacing: 0;
    background: $linear-gradient;
  }
  .btn {
    color: $fontcolor;
    font-family: $fontfamliy;
    font-weight: 500;
    font-size: 17px;
    padding: 10px;
    letter-spacing: 0;
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
.top-vip {
  font-family: $fontfamliy;
  color: $fontcolorsm;
  letter-spacing: 0;
  font-size: 16px;
  font-weight: 600;
  background: $linear-gradient;
}
.adbywho {
  font-family: $fontfamliy;
  color: $fontcolor;
  letter-spacing: 0;
  font-size: 16px;
  font-weight: 400;
}

.CarNumVip {
  position: absolute;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  right: 0;
  color: $fontcolor;
  width: 25px;
  height: 25px;
  text-align: center;
  background-color: #fff;
  clip-path: circle(50% at 50% 50%);
}
.CarNumVip:before {
  content: "";
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  width: 13px;
  height: 13px;
  background-color: #fff;
  clip-path: circle(50% at 50% 50%);
  z-index: 2;
}
.CarNumVip:after {
  content: "";
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  width: 20px;
  height: 20px;
  background-color: $color-1;
  clip-path: circle(50% at 50% 50%);
}
.card-vip {
  border: 0.1px solid $color-1 !important;
  overflow: hidden;
}
.card {
  border: 0.5px solid $background1 !important;
  overflow: hidden;
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
