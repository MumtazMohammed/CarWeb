<template>
  <div class="product_box">
    <NavBar />
    <div class="Shape_box">
      <v-container fluid>
        <v-col cols="12">
          <h2 v-if="getCarInfo.length == 1" class="tital">
            (<span class="red--text"> {{ getCarInfo.length }}</span> ) سـيـارة
            من نوع {{ CarShape }} للبيع
          </h2>
          <h2 v-else-if="getCarInfo.length > 1" class="tital">
            (<span class="red--text"> {{ getCarInfo.length }}</span> ) سـيـارات
            من نوع {{ CarShape }} للبيع
          </h2>

          <div v-else class="white d-flex justify-center">
            <v-img
              class="no-car-image"
              contain
              max-width="500px"
              src="../assets/3009287.jpg"
            ></v-img>
          </div>
        </v-col>
        <v-col cols="12" v-if="getCarInfo.length > 5">
          <FilterSection />
        </v-col>
        <v-row class="mt-1">
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
                    >{{ CarData.company }} {{ CarData.name }}
                    {{ CarData.modle }}
                  </v-card-subtitle>
                </v-col>
              </v-row>
              <!-- car praic and kilo  -->
              <!-- car location  and condition  -->
              <v-row class="mb-1 justify-center">
                <v-col cols="5" class="pa-0">
                  <v-card-subtitle class="text-right location-condtion pa-2">{{
                    CarData.location
                  }}</v-card-subtitle>
                </v-col>
                <v-divider color="#ffc107" vertical></v-divider>
                <v-col cols="5" class="pa-0">
                  <v-card-subtitle class="text-left location-condtion pa-2"
                    >{{ CarData.condtion }}
                  </v-card-subtitle>
                </v-col>
              </v-row>
              <v-row class="mb-1 justify-center">
                <v-col cols="5" class="pa-0">
                  <v-card-subtitle
                    class="green--text font-weight-medium text-right pa-2"
                    >{{ CarData.payment }}</v-card-subtitle
                  >
                </v-col>
                <v-divider color="#ffc107" vertical></v-divider>
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
                  <p class="py-2 ma-0 px-0 text-center adNum">
                    رقم الأعلان : {{ CarData.id }}
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
                    >{{ CarData.company }} {{ CarData.name }}
                    {{ CarData.modle }}
                  </v-card-subtitle>
                </v-col>
              </v-row>
              <!-- car praic and kilo  -->
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
                  class="btn rounded-0"
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
  </div>
</template>
<script>
import NavBar from "../NavBar/TheNavBar.vue";
import FilterSection from "../CarSearch/Filter.vue";
import CarShape from "../data-json/All-Car.json";

export default {
  name: "CarByShape",
  components: { NavBar, FilterSection },
  data() {
    return {
      GetCarData: CarShape,
      carName: this.$route.params.carName,
      carId: this.$route.params.carId,
      CarShape: this.$route.params.CarShape,
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

  .Shape_box {
    padding: $padding;
    background-color: $simplebackground;
  }
  .tital {
    color: $fontcolor;
    font-family: $fontfamliy;
  }
  .boredr-all-box {
    @media (max-width: 880px) {
      max-width: 50%;
    }
    @media (max-width: 600px) {
      padding: 5px 3px !important;
    }
    @media (max-width: 540px) {
      max-width: 98%;
    }
    @media (max-width: 330px) {
      padding: 5px 0px !important;
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
    color: $SpicalCarColor;
    font-family: $fontfamliy;
    font-weight: 500;
    font-size: 17px;
    padding: 10px;
    letter-spacing: 0;
    background-color: $SpicalCarColor2 !important;
  }
  .btn {
    color: $fontcolor;
    font-family: $fontfamliy;
    font-weight: 500;
    font-size: 17px;
    padding: 10px;
    letter-spacing: 0;
    background-color: $background1 !important;
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
  }
  .location-condtion {
    font-size: 16px;
    font-weight: 500;
    font-family: $fontfamliy;
  }
  .adNum {
    font-size: 16px;
    font-weight: 500;
    font-family: $fontfamliy;
  }
}
.top-vip {
  font-family: $fontfamliy;
  color: $SpicalCarColor;
  letter-spacing: 0;
  font-size: 16px;
  font-weight: 600;
  background-color: $SpicalCarColor2;
}
.adNum {
  font-family: $fontfamliy;
  color: $fontcolor;
  letter-spacing: 0;
  font-size: 16px;
  font-weight: 300;
  background-color: $background1;
}
.card-vip {
  border: 0.5px solid $SpicalCarColor !important;
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
