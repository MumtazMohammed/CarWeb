<template>
  <div class="ShowVerifiedCar">
    <v-container>
      <v-card-title class="SeeAll mb-3">
        نقترح عليك السيارات التالية
      </v-card-title>
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide v-for="(CarData, index) in getCarInfo" :key="index">
          <v-card class="card-verified pa-1 overflow-hidden">
            <v-card-actions class="justify-center pa-0">
              <v-col class="pa-0" cols="12">
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
                    class="discount rounded-t-pill text-center"
                  >
                    <v-card-text class="px-3 py-0 text">
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
            </v-card-actions>
            <!-- car info  -->
            <!-- car Name  -->
            <v-col cols="12" class="pa-3 pr-5">
              <v-card-subtitle class="font-weight-medium pa-1 text-truncate"
                >{{ CarData.company }} {{ CarData.name }}
                {{ CarData.modle }}
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
                    <span class="text-center green--text car-place-price-price">
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
                width="200"
                class="btn-verified"
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
                رؤية السيارة
              </v-btn>
            </v-card-actions>
          </v-card>
        </swiper-slide>

        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev">
          <v-icon class="icon">mdi-chevron-right</v-icon>
        </div>
        <div class="swiper-button-next" slot="button-next">
          <v-icon class="icon">mdi-chevron-left</v-icon>
        </div>
      </swiper>
    </v-container>
  </div>
</template>

<script>
import VerifiedCar from "../data-json/All-Car.json";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  name: "ShowVerifiedCar",
  title: "Loop mode with multiple slides per group",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      VerifiedCar,
      carName: this.$route.params.carName,
      carId: this.$route.params.carId,
      CarShape: this.$route.params.CarShape,
      Company: this.$route.params.Company,
      swiperOption: {
        initialSlide: 0,
        freeMode: true,
        effect: "cards",
        spaceBetween: 10,
        autoplay: {
          delay: 20000,
          disableOnInteraction: false,
          stopOnLastSlide: false,
        },
        loop: false,
        loopFillGroupWithBlank: false,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          1024: {
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
          768: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
          640: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
          471: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
          470: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
          250: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
        },
      },
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
      for (let i = 0; i < this.VerifiedCar.length; i++) {
        if (this.VerifiedCar[i].Vip == true) {
          GetCarVerified.push(this.VerifiedCar[i]);
        }
      }
      return GetCarVerified;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/virables";
@import "@/scss/mixin";

.ShowVerifiedCar {
  width: 100%;
  height: auto;
  position: relative;
  .SeeAll {
    color: $fontcolorlinks !important;
    font-size: 24px !important;
    font-weight: bold;
    font-family: $fontfamliy;
    @media (max-width: 500px) {
    font-size: 20px !important;
    }
  }
  .filtt:first-child {
    @media (max-width: 600px) {
      padding-bottom: 3px !important;
    }
  }
  .swiper {
    height: 440px !important;

    .swiper-pagination::v-deep .swiper-pagination-bullet {
      width: 13px !important;
      border-radius: 30px;
      height: 6px;
      opacity: 0.3;
      margin: 0 2px;
    }
    .swiper-pagination::v-deep .swiper-pagination-bullet-active {
      width: 20px !important;
      height: 6px;
      opacity: 1;
      background-color: #0a57ba;
    }
    .swiper-button-prev::after {
      display: none;
    }
    .swiper-button-next::after {
      transform: scale(0);
      display: none;
    }
    .swiper-button-prev {
      background-color: $color-1;
      border-radius: 50%;
      width: 50px;
      height: 50px;
      transition: all 0.5s ease;
      // box-shadow: 0 0 1px 2px rgba(128, 128, 128, 0.449);
    }
    .swiper-button-next {
      background-color: $color-1;
      border-radius: 50%;
      width: 50px;
      height: 50px;
      transition: all 0.5s ease;
      // box-shadow: 0 0 1px 2px rgba(128, 128, 128, 0.449);
    }
    .icon {
      font-size: 30px !important;
      color: rgb(255, 255, 255);
      font-weight: bold;
    }
    ::v-deep.swiper-button-next.swiper-button-disabled {
      opacity: 0;
      transform: translatex(-50px);
    }
    ::v-deep.swiper-button-prev.swiper-button-disabled {
      opacity: 0;
      transform: translatex(50px);
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
    color: #ffffff;
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
  @include flexcenter();
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 0px !important;

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
