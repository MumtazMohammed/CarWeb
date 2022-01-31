<template>
  <div class="AllVip_box">
    <NavBar />
    <div class="product_box pb-10">
      <v-container>
        <v-col cols="12" class="pr-0">
          <h2 class="tital">
            (<span class="red--text"> {{ SpicalCarView.length }}</span>
            ) - سـيـارات مضمونة لدينا للبيع
          </h2>
        </v-col>
        <v-divider></v-divider>
        <!-- fillter section  -->
        <v-row class="my-1" v-if="SpicalCarView.length > 20">
          <v-col class="pl-md-1 pl-sm-1 py-1" cols="12" md="3" sm="3">
            <v-select
              :items="Price"
              label="ترتيب السعر من"
              hide-details
              dense
              class="select-price"
              color="primary"
              outlined
              flat
            ></v-select>
          </v-col>
          <v-col class="pr-md-1 pr-sm-1 py-1" cols="12" md="3" sm="3">
            <v-select
              :items="Condtion"
              label="حالة السيارة"
              hide-details
              dense
              class="select-price"
              color="primary"
              outlined
              flat
            ></v-select>
          </v-col>
        </v-row>
        <!--  -->
        <v-row class="mt-1 car-box">
          <v-col
            cols="12"
            sm="6"
            md="3"
            class="pa-1 boredr-all-box"
            v-for="CarData in SpicalCarView"
            :key="CarData.id"
          >
            <!-- using methods to conect the image to the corect folder   -->
            <v-card class="card-vip pa-1" flat>
              <v-row>
                <v-col class="" cols="12">
                  <!-- <p class="ma-0 spical">مضمونه</p> -->
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
                    >{{ CarData.company }} {{ CarData.name }}
                    {{ CarData.modle }}
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
                <v-divider color="#0773df" vertical></v-divider>
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
                <v-divider color="#0773df" vertical></v-divider>
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
                  class="rounded-0"
                  width="200"
                  :to="{
                    name: 'ViewCar',
                    params: {
                      Company: CarData.folder,
                      carName: CarData.name,
                      carShape: CarData.Shape,
                      carId: CarData.id,
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
// import FilterSection from "../CarSearch/Filter.vue";
import SpicalCarView from "../data-json/car-data.json";
export default {
  name: "SeeAllSpecialCar",
  components: { NavBar },
  data() {
    return {
      SpicalCarView: SpicalCarView,
      carName: this.$route.params.carName,
      carId: this.$route.params.carId,
      CarShape: this.$route.params.CarShape,
      Company: this.$route.params.Company,
      Price: [" الأعلى سعرا", "الأقل سعرا"],
      Condtion: ["جديد", "مستعمل"],
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
.AllVip_box {
  width: 100%;
  min-height: 100vh;
}
.product_box {
  width: 100%;
  height: auto;
  position: relative;
  .car-box {
    @media (max-width: 600px) {
      justify-content: center;
    }
  }
  .filtt:first-child {
    @media (max-width: 600px) {
      padding-bottom: 3px !important;
    }
    // @media (max-width: 450px) {
    //   padding: 5px 5px !important;
    // }
    // @media (max-width: 350px) {
    //   padding: 5px 2px !important;
    // }
  }
  .filtt:last-child {
    @media (max-width: 600px) {
      padding-top: 3px !important;
    }
    // @media (max-width: 450px) {
    //   padding: 5px 5px !important;
    // }
    // @media (max-width: 350px) {
    //   padding: 5px 2px !important;
    // }
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
  .tital {
    font-family: $fontfamliy;
    font-size: 25px;
    @media (max-width: 600px) {
      font-size: 20px;
    }
    @media (max-width: 360px) {
      font-size: 17px;
    }
    @media (max-width: 280px) {
      font-size: 13px;
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
    font-size: 17px;
    padding: 10px;
    letter-spacing: 0;
    background: $linear-gradient;
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
  border: 0.5px solid $color-1 !important;
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
.select-price {
  font-family: $fontfamliy;
  font-weight: 500;
}
</style>
