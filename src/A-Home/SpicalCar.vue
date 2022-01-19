<template>
  <div class="product_box">
    <v-container fluid>
      <v-col>
        <h3 class="tital text-center">نضمنها لك</h3>
        <span class="line my-2 mx-auto"></span>
      </v-col>
      <!--  -->

      <carousel-3d
        :disable3d="true"
        :clickable="true"
        :animationSpeed="250"
        :autoplay="fales"
        :autoplay-timeout="0"
        :display="5"
        :space="275"
        :inverseScaling="-40"
        :perspective="0"
        :width="270"
        :controls-visible="true"
        :controls-prev-html="navigationPrev"
        :controls-next-html="navigationNext"
        :controlsWidth="38"
        :controlsHeight="38"
      >
        <slide
          class="slide"
          v-for="(CarSell, i) in CarSells"
          :key="CarSell.id"
          :index="i"
          :width="270"
          :height="200"
        >
          <!-- using methods to conect the image to the corect folder   -->
          <v-card
            width="270"
            elevation="0"
            class="overflow-hidden pa-1 card-vip"
          >
            <v-row>
              <v-col class="" cols="12">
                <!-- <p class="ma-0 spical">مضمونه</p> -->
                <p class="py-2 ma-0 px-0 text-center top-vip">
                  مضمون وريح راسك
                </p>
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
            <v-row class="pa-0 mt-1">
              <v-col cols="12" class="pa-3 pr-5">
                <v-card-subtitle
                  class="text-start font-weight-medium pa-1 car-name"
                  >{{ CarSell.company }} {{ CarSell.name }}
                  {{ CarSell.modle }}
                </v-card-subtitle>
                <v-card-title
                  class="font-weight-medium pa-1 justify-space-between location"
                >
                  <v-card-subtitle class="font-weight-medium location">
                    {{ CarSell.condtion }}
                  </v-card-subtitle>
                  <v-card-subtitle class="font-weight-medium location">
                    {{ CarSell.location }}
                  </v-card-subtitle>
                </v-card-title>
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
                class="btn-vip rounded-0"
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
                أقراء المزيد
              </v-btn>
            </v-card-actions>
          </v-card>
        </slide>
      </carousel-3d>

      <!--  -->

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
         background-color: #000;
         display: flex;
         align-items: center;
         justify-content: center;
         border-radius: 50%;
         overflow: hidden;
}
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
         box-shadow: 0px 0px 0px 3px  #ffc107;


        }
         .next:hover .chevron {
          color:#ffc107;
        }
        .chevron{
          color:#fff;
          font-size: 20px;
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
         background-color: #000;
         display: flex;
         align-items: center;
         justify-content: center;
         border-radius: 50%;
         overflow: hidden;
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
         box-shadow: 0px 0px 0px 3px #ffc107;


        }
         .prev:hover .chevron {
          color:#ffc107;
        }
        .chevron{
         color:#fff;
         font-size: 20px;
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
  padding: 25px 0;
  background-color: $simplebackground;

  .tital {
    color: $fontcolor;
    font-family: $fontfamliy;
    font-size: 27px;
  }
  .line {
    width: 145px;
    height: 3px;
    background-color: $SpicalCarColor;
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
    color: $SpicalCarColor;
    font-family: $fontfamliy;
    font-weight: 500;
    font-size: 17px;
    padding: 10px;
    letter-spacing: 0;
    background-color: $SpicalCarColor2 !important;
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
.top-vip {
  font-family: $fontfamliy;
  color: $SpicalCarColor;
  letter-spacing: 0;
  font-size: 16px;
  font-weight: 600;
  background-color: $SpicalCarColor2;
}
.card-vip {
  border: 0.5px solid $SpicalCarColor !important;
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
.swiper-container-vertical .slider-pagination-bullet-active,
.swiper-container-horizontal .slider-pagination-bullet-active {
  background: rgb(255, 0, 0) none repeat scroll 0 0 !important;
  opacity: 1;
}
.carousel-3d-container {
  height: 450px !important;
  margin: 0px auto !important;
}
.carousel-3d-slide {
  margin: 0px !important;
  height: 300px !important;
  border: 0 !important;
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
    width: 270px !important;
  }
  .carousel-3d-slider[data-v-07917306] {
    height: auto !important;
    width: 270px !important;
  }
}
</style>
