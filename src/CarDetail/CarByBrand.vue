<template>
  <div class="product_box">
    <NavBar />
    <div class="brand_box">
      <v-container fluid>
        <v-col cols="12">
          <h2 v-if="getCarInfo.length > 0" class="tital">
            (<span class="red--text"> {{ getCarInfo.length }}</span> ) سـيـارة
            {{ CarName }} للبيع في اليمن
          </h2>
          <div v-else class="d-flex justify-center flex-column align-center">
            <h2 class="no-car">لا يـتوفر سيارات {{ CarName }} في الـموقع</h2>
            <v-img
              class="no-car-image"
              contain
              max-width="500px"
              src="../assets/3009287.jpg"
            ></v-img>
          </div>
        </v-col>
        <!--  -->
        <v-col cols="12" v-if="getCarInfo.length > 5">
          <FilterSection />
        </v-col>
        <!--  -->
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
                    class="img"
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
                  <v-card-title
                    class="font-weight-medium pa-1 justify-space-between location"
                  >
                    <v-card-subtitle class="font-weight-medium location">
                      {{ CarData.condtion }}
                    </v-card-subtitle>
                    <v-card-subtitle class="font-weight-medium location">
                      {{ CarData.location }}
                    </v-card-subtitle>
                  </v-card-title>
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
                  <v-card-title
                    class="font-weight-medium pa-1 justify-space-between location"
                  >
                    <v-card-subtitle class="font-weight-medium location">
                      {{ CarData.condtion }}
                    </v-card-subtitle>
                    <v-card-subtitle class="font-weight-medium location">
                      {{ CarData.location }}
                    </v-card-subtitle>
                  </v-card-title>
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
import CarData from "../data-json/All-Car.json";
import NavBar from "../NavBar/TheNavBar.vue";
import FilterSection from "../CarSearch/Filter.vue";

export default {
  name: "CarByBrand",
  components: {
    NavBar,
    FilterSection,
  },
  data() {
    return {
      GetCarData: CarData,
      CarType: this.$route.params.CarType,
      CarName: this.$route.params.CarName,
    };
  },
  computed: {
    getCarInfo() {
      let GetCarByBrand = [];
      for (let i = 0; i < this.GetCarData.length; i++) {
        if (this.GetCarData[i].folder == this.CarType) {
          GetCarByBrand.push(this.GetCarData[i]);
        }
      }
      return GetCarByBrand;
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
  height: 100%;
  // position: relative;
  // background-color: $simplebackground;
  .brand_box {
    padding: $padding;
  }
  .car-box {
    @media (max-width: 600px) {
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
  .location {
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
