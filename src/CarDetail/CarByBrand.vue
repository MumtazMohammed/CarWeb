<template>
  <div class="product_box">
    <NavBar />
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

      <!--  -->
      <v-row class="mt-1">
        <v-col
          cols="12"
          sm="6"
          md="3"
          class="pa-2 mt-3 boredr-all-box"
          v-for="CarSell in getCarInfo"
          :key="CarSell.id"
        >
          <!-- using methods to conect the image to the corect folder   -->
          <v-card>
            <v-row>
              <v-col class="pt-1" cols="12">
                <p class="my-2 text-center condtion">{{ CarSell.condtion }}</p>
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
                  params: { carName: CarSell.folder, carId: CarSell.id },
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
import CarData from "../data-json/All-Car.json";
import NavBar from "../NavBar/TheNavBar.vue";

export default {
  name: "CarByBrand",
  components: {
    NavBar,
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
  height: auto;
  padding: 25px 0;
  position: relative;

  .tital {
    color: $background;
    font-family: $fontfamliy;
    font-size: 20px;
  }
  .no-car {
    color: $btnbackground;
    font-family: $fontfamliy;
    font-size: 40px;
    text-align: center;
    @media (max-width: 700px) {
      font-size: 30px;
    }
    @media (max-width: 560px) {
      font-size: 25px;
    }
    @media (max-width: 460px) {
      font-size: 20px;
    }
  }
  .no-car-image {
    @media (max-width: 600px) {
      width: 350px;
      margin-top: 30px;
    }
    @media (max-width: 400px) {
      width: 300px;
    }
    @media (max-width: 350px) {
      width: 250px;
    }
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
