<template>
  <div class="brand_box">
    <v-container>
      <p class="text-center mb-2 font-weight-bold tital" v-text="Tital"></p>
      <span class="line my-3 mb-6 mx-auto"></span>
      <div class="Card-box">
        <v-row>
          <v-col
            v-for="Brand in LogoBrand"
            :key="Brand.cartype"
            cols="6"
            md="2"
            sm="3"
            class="pa-1"
          >
            <v-card
              router
              :to="{
                name: 'CarByBrand',
                params: { CarType: Brand.cartype, CarName: Brand.carName },
              }"
              class="d-flex pa-3 align-center justify-center flex-column pt-3"
            >
              <v-avatar width="140" tile>
                <v-img
                  contain
                  :src="getimageUrl(Brand.folder, Brand.carLogo)"
                  :lazy-src="getimageUrl(Brand.folder, Brand.carLogo)"
                ></v-img>
              </v-avatar>
              <a class="white--text pa-1 CarBrandText mt-4">
                {{ Brand.carName }}
              </a>
            </v-card>
          </v-col>
        </v-row>
      </div>
      <div class="hidden-sm-and-up">
        <swiper class="swiper" :watch-slides-progress="true">
          <swiper-slide v-for="Brand in LogoBrand" :key="Brand.cartype">
            <v-card
              router
              :to="{
                name: 'CarByBrand',
                params: { CarType: Brand.cartype, CarName: Brand.carName },
              }"
              class="d-flex pa-3 align-center justify-center flex-column"
            >
              <v-avatar width="200" tile>
                <v-img
                  contain
                  :src="getimageUrl(Brand.folder, Brand.carLogo)"
                  :lazy-src="getimageUrl(Brand.folder, Brand.carLogo)"
                >
                </v-img>
              </v-avatar>
              <a class="white--text pa-1 CarBrandText mt-4">
                {{ Brand.carName }}
              </a>
            </v-card>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
    </v-container>
  </div>
</template>

<script>
import LogoBrand from "@/data-json/CarType.json";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  name: "CarBrands",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      AllDateCar: this.$attrs.AllDateCar,
      LogoBrand,
      CarType: this.$route.params.CarType,
      Tital: "تصفح السيارات حسب الماركة",
      swiperOption: {
        initialSlide: 0,
        freeMode: false,
        effect: "card",
        spaceBetween: 10,
        autoplay: {
          delay: 20000,
          disableOnInteraction: false,
          stopOnLastSlide: false,
        },
        loop: true,
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
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
          471: {
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
          470: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },

          381: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
          380: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
          250: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
        },
      },
    };
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

.brand_box {
  width: 100%;
  padding: $padding;
  background-color: $color-background;
  margin: 0 auto;
  @media (max-width: 600px) {
    width: 100%;
  }
  .brand_container {
    width: 70%;
    @media (max-width: 800px) {
      width: 100%;
    }
  }
  .CarBrandText {
    font-family: $fontfamliy;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 0;
    text-decoration: none !important;
    width: 100%;
    text-align: center;
    background: $color-1;
    border-radius: 5px;
  }
  .tital {
    font-family: $fontfamliy;
    font-size: 30px;
    color: $fontcolorlinks;

    @media (max-width: 460px) {
      font-size: 26px;
    }
    @media (max-width: 438px) {
      font-size: 24px;
    }
    @media (max-width: 370px) {
      font-size: 20px;
    }
    @media (max-width: 300px) {
      font-size: 17px;
    }
  }
}
.Card-box {
  @media (max-width: 600px) {
    display: none;
  }
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
// swiper
.swiper {
  height: 230px !important;

  .swiper-pagination::v-deep .swiper-pagination-bullet {
    width: 13px !important;
    border-radius: 30px;
    height: 6px;
    opacity: 0.3;
    margin: 0 2px;
  }
  .swiper-pagination::v-deep .swiper-pagination-bullet-active {
    width: 26px !important;
    height: 6px;
    opacity: 1;
    background-color: #0881fa;
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
</style>
