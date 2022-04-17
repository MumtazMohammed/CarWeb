<template>
  <div class="Shape_box">
    <v-container class="px-md-7">
      <p class="text-center mb-2 font-weight-bold title" v-text="Tital"></p>
      <span class="line my-3 mb-6 mx-auto"></span>
      <div class="Card-box">
        <v-row class="mt-2">
          <v-col
            v-for="(Shape, i) in CarShape"
            :key="i"
            cols="6"
            sm="3"
            md="2"
            class="pa-1"
          >
            <v-card
              router
              :to="{
                name: 'CarByShape',
                params: {
                  CarShape: Shape.Shape,
                },
              }"
              class="d-flex pa-3 align-center justify-center flex-column pt-3"
            >
              <v-avatar width="100" tile>
                <v-img
                  contain
                  :src="Shape.CarShape"
                  :lazy-src="Shape.CarShape"
                ></v-img>
              </v-avatar>
              <a class="white--text CarShapeText pa-1 mt-4 text-center">
                {{ Shape.Shape }}
              </a>
            </v-card>
          </v-col>
        </v-row>
      </div>
      <div class="hidden-sm-and-up">
        <swiper class="swiper" :options="swiperOption">
          <swiper-slide v-for="(Shape, i) in CarShape" :key="i">
            <v-card
              router
              :to="{
                name: 'CarByShape',
                params: {
                  CarShape: Shape.Shape,
                },
              }"
              class="
                d-flex
                pa-3
                overflow-hidden
                align-center
                justify-center
                flex-column
              "
            >
              <v-avatar width="100" tile>
                <v-img
                  contain
                  :src="Shape.CarShape"
                  :lazy-src="Shape.CarShape"
                ></v-img>
              </v-avatar>
              <a class="white--text mt-4 CarShapeText pa-1 text-center">
                {{ Shape.Shape }}
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
import CarShape from "../data-json/CarShape.json";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  name: "CarShape",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      Tital: "تصفح السيارات حسب الـشـكل",
      CarShape,
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

.Shape_box {
  padding: $padding;
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: $color-background;
  @media (max-width: 600px) {
    width: 100%;
  }
  .CarShapeText {
    font-family: $fontfamliy;
    font-size: 15px;
    font-weight: 500;
    letter-spacing: 0;
    background: $color-1;
    text-decoration: none;
    width: 100%;
    border-radius: 5px;
  }
  .title {
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
  .icon {
    color: $btnbackground;
    font-size: 40px;
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
  height: 215px !important;

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
}
</style>
