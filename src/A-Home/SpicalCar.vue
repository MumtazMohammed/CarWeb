<template>
  <div class="product_box">
    <v-container fluid>
      <v-col>
        <h3 class="tital text-center">نضمنها لك</h3>
        <span class="line my-2 mx-auto"></span>
      </v-col>
      <!--  -->

      <carousel-3d
        :disable3d="false"
        :clickable="false"
        :animationSpeed="400"
        :autoplay="fales"
        :autoplay-timeout="0"
        :display="5"
        :space="350"
        :inverseScaling="70"
        :perspective="0"
        :width="300"
        :controls-visible="true"
        :controls-prev-html="navigationPrev"
        :controls-next-html="navigationNext"
        :controlsWidth="45"
        :controlsHeight="45"
      >
        <slide
          class="slide"
          v-for="(CarSell, i) in CarSells"
          :key="CarSell.id"
          :index="i"
        >
          <!-- using methods to conect the image to the corect folder   -->
          <v-card width="320" class="overflow-hidden pa-1 card-vip">
            <v-row>
              <v-col class="" cols="12">
                <p class="py-2 ma-0 px-0 text-center top-verified">
                  <v-icon class="verified-icon white--text"
                    >mdi-check-bold</v-icon
                  >
                  موثوق
                </p>
                <b class="pa-0 text-center verified"> </b>
                <v-img
                  :src="getimageUrl(CarSell.folder, CarSell.image)"
                  :lazy-src="getimageUrl(CarSell.folder, CarSell.image)"
                  height="170px"
                >
                </v-img>
              </v-col>
            </v-row>
            <!-- car Name and compny  -->
            <v-row class="pa-0 mt-1">
              <v-col cols="12" class="pa-3 pr-5">
                <v-card-subtitle
                  class="text-start font-weight-medium pa-1 car-name"
                  >{{ CarSell.company }} {{ CarSell.name }}
                  {{ CarSell.modle }}
                </v-card-subtitle>
              </v-col>
            </v-row>
            <!-- car location  and condition  -->
            <v-row class="mb-1 justify-center">
              <v-col cols="5" class="pa-0">
                <v-card-subtitle class="text-right location-condtion pa-2">{{
                  CarSell.location
                }}</v-card-subtitle>
              </v-col>
              <v-divider vertical></v-divider>
              <v-col cols="5" class="pa-0">
                <v-card-subtitle class="text-left location-condtion pa-2"
                  >{{ CarSell.condtion }}
                </v-card-subtitle>
              </v-col>
            </v-row>
            <!-- car praic and kilo  -->
            <v-row class="mb-1 justify-center">
              <v-col cols="5" class="pa-0">
                <v-card-subtitle
                  class="green--text font-weight-medium text-right pa-2"
                  >{{ CarSell.payment }}</v-card-subtitle
                >
              </v-col>
              <v-divider vertical></v-divider>
              <v-col cols="5" class="pa-0">
                <v-card-subtitle class="text-left font-weight-regular pa-2"
                  >{{ CarSell.kilometer }}
                </v-card-subtitle>
              </v-col>
            </v-row>
            <!-- car click to see more  -->
            <v-card-actions class="d-flex justify-center">
              <v-btn
                class="btn-vip"
                block
                width="200"
                :to="{
                  name: 'ViewCar',
                  params: {
                    Company: CarSell.folder,
                    carName: CarSell.name,
                    carShape: CarSell.Shape,
                    carId: CarSell.id,
                  },
                }"
                depressed
              >
                رؤية السيارة
              </v-btn>
            </v-card-actions>
          </v-card>
        </slide>
      </carousel-3d>

      <!--  -->
      <div class="text-center mt-4 mb-2">
        <v-btn
          elevation="0"
          large
          class="link-SeeAllCar"
          to="/SeeAllSpecialCar"
        >
          شاهد جميع السيارات المضمونه لدينا
        </v-btn>
      </div>
      <!--  -->
    </v-container>
  </div>
</template>
<script>
import { Carousel3d, Slide } from "vue-carousel-3d";
export default {
  name: "firstproduct",
  components: {
    Carousel3d,
    Slide,
  },
  data() {
    return {
      CarSells: this.$attrs.caritems,
    };
  },

  // this is help full to call the image inside folder and inject to the src
  methods: {
    getimageUrl(FolderName, ImageName) {
      let image = require.context("@/assets/");
      return image("./" + FolderName + "/" + ImageName);
    },
  },
  computed: {
    navigationNext() {
      return `     <style scoped>
        .next {
         transition: all .3s ease;
         background-color: #0773df;
         display: flex;
         align-items: center;
         justify-content: center;
         border-radius: 50%;
         overflow: hidden;
        opacity: 0.8 !important;
        }
        span{
         width: auto;
         height: auto;
         display: flex;
         align-items: center;
         justify-content: center
        }
         .next:hover {
         opacity: 1 !important;
        }
         .next:hover .chevron {
          color:#fff;
        }
        .chevron{
          color:#fff;
          font-size: 16px;
          transition: color .3s ease;

        }
      </style>

      <i class="fas chevron fa-chevron-right"></i>
      `;
    },
    navigationPrev() {
      return `
       <style scoped>
        .prev {
         transition: all .3s ease;
         background-color: #0773df;
         display: flex;
         align-items: center;
         justify-content: center;
         border-radius: 50%;
         overflow: hidden;
         opacity: 0.8 !important;

        }
        span{
         width: auto;
         height: auto;
         display: flex;
         align-items: center;
         justify-content: center
        }
         .prev:hover {
         opacity: 1 !important;
        }
         .prev:hover .chevron {
          color:#fff;
        }
        .chevron{
         color:#fff;
         font-size: 16px;
         transition: color .3s ease;

        }
      </style>
      <i class="fas chevron fa-chevron-left"></i>`;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/virables";
@import "@/scss/mixin";

.product_box {
  width: auto;
  height: auto;
  position: relative;
  padding: $padding;
  background-color: $color-background;

  .link-SeeAllCar {
    font-family: $fontfamliy;
    color: $fontcolorsm !important;
    letter-spacing: 0;
    font-size: 20px !important;
    background-color: $color-1 !important;
    text-decoration: none !important;
    @media (max-width: 360px) {
      font-size: 16px !important;
    }
    @media (max-width: 320px) {
      font-size: 14px !important;
    }
  }

  .tital {
    color: $fontcolor;
    font-family: $fontfamliy;
    font-size: 27px;
  }
  .line {
    width: 50px;
    height: 5px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    background: $color-1;
    display: block;
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
  .btn-vip {
    color: $fontcolorsm;
    font-family: $fontfamliy;
    font-weight: 500;
    font-size: 17px;
    padding: 10px;
    letter-spacing: 0;
    background: $linear-gradient;
  }

  .v-btn.v-size--default::v-deep .theme--light.v-btn--active:before {
    opacity: 0;
  }
  .v-btn.v-size--default::v-deep .theme--light.v-btn--active:hover:before {
    opacity: 0;
  }
  .v-card__subtitle {
    font-size: 15px;
    font-family: $fontfamliy;
  }
  .car-name {
    font-size: 17px;
    font-weight: 500 !important;
    font-family: $fontfamliy;
  }
}
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
.card-vip {
  // border: 0.5px solid $color-1 !important;
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
.imgae-cars {
  @media (max-width: 500px) {
    width: 100% !important;
  }
}

.carousel-3d-container {
  height: 450px !important;
  margin: 0px auto !important;
}
.carousel-3d-container .current figure {
  margin: 0;
}
.carousel-3d-container {
  .carousel-3d-slide {
    margin: 0 !important;
    background-color: unset;
    border: 0px;
    height: 450px !important;
    width: 350px !important;
  }
}
</style>
