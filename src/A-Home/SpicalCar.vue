<template>
  <div class="product_box">
    <v-container fluid>
      <v-col>
        <h3 class="tital text-center" v-text="Tital"></h3>
        <span class="line my-2 mx-auto"></span>
      </v-col>
      <!--  -->
      <carousel-3d
        :disable3d="false"
        :clickable="false"
        :animationSpeed="600"
        :autoplay="false"
        :autoplay-timeout="0"
        :display="5"
        :space="325"
        :inverseScaling="100"
        :perspective="25"
        :width="300"
        :height="398"
        :controls-visible="true"
        :controls-prev-html="navigationPrev"
        :controls-next-html="navigationNext"
        :controlsWidth="45"
        :controlsHeight="45"
      >
        <slide
          class="slide"
          v-for="(CarData, i) in getCarInfo"
          :key="CarData.id"
          :index="i"
        >
          <!-- using methods to conect the image to the corect folder   -->
          <v-card width="300" flat class="pa-1 card-verified">
            <v-row>
              <v-col class="" cols="12">
                <!-- verified  -->
                <div>
                  <p class="py-2 ma-0 px-0 text-center top-verified">
                    <v-icon class="verified-icon white--text">
                      mdi-check-bold
                    </v-icon>
                    موثوق
                  </p>
                  <b class="pa-0 text-center verified"> </b>
                </div>
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
                    <v-card-text class="px-3 py-0 text text-center">
                      <v-icon class="discount-icon">mdi-spa-outline</v-icon>
                      خصم
                      <span class="mr-1 span">
                        {{ CarData.discountAmount }}
                      </span>
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
              <v-card-subtitle
                class="font-weight-medium pa-1 text-start text-truncate"
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
                  <v-card-subtitle
                    class="text-center d-flex justify-center pa-2 text-truncate"
                  >
                    <span class="text-center green--text car-place-price-price">
                      {{ CarData.InstalmentPerMonth }}
                    </span>
                    <span
                      class="ma-0 mr-1 black--text car-Instalment-price-text"
                    >
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
                class="btn-verified"
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
      Tital: "نضمنها لك",
      CarSells: this.$attrs.AllDateCar,
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
    getCarInfo() {
      let GetCarVerified = [];
      for (let i = 0; i < this.CarSells.length; i++) {
        if (this.CarSells[i].Vip == true) {
          GetCarVerified.push(this.CarSells[i]);
        }
      }
      return GetCarVerified;
    },
    navigationNext() {
      return `     <style scoped>
        .next {
         transition: all .3s ease;
         background-color: #0881fa;
         display: flex;
         align-items: center;
         justify-content: center;
         border-radius: 50%;
         overflow: hidden;
        opacity: 0.7 !important;
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
         background-color: #0881fa;
         display: flex;
         align-items: center;
         justify-content: center;
         border-radius: 50%;
         overflow: hidden;
         opacity: 0.7 !important;

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
    color: $fontcolorlinks;
    font-family: $fontfamliy;
    font-size: 27px;
  }
  .line {
    width: 30px;
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
  .btn-verified {
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
    height: auto !important;
    width: 300px !important;
    display: flex;
    border-radius: 5px;
    justify-content: center;
    align-items: flex-start;
    box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%),
      0 1px 5px 0 rgb(0 0 0 / 12%);
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

    .span {
      font-size: 15px !important;
      font-weight: 500;
      display: inline-block !important;
    }
  }
  .discount-icon {
    font-size: 16px !important;
    color: #ffffff !important;
  }
}
.oldprice {
  text-decoration: line-through;
  color: rgba(108, 108, 108, 0.673) !important;
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
  font-weight: 500 !important;
  font-family: $fontfamliy;
}
</style>
