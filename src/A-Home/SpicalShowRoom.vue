<template>
  <div class="SpicalShowRoom">
    <v-container>
      <v-col>
        <p class="tital mb-2 font-weight-bold text-center" v-text="Tital"></p>
        <span class="line my-3 mx-auto"></span>
      </v-col>
      <swiper
        :modules="[Thumbs]"
        watch-slides-progress
        @swiper="setThumbsSwiper"
        class="swiper"
        :options="swiperOption"
      >
        <swiper-slide
          class="slide"
          width="200"
          v-for="showroom in getCarInfo"
          :key="showroom.id"
        >
          <v-card class="showroom-vip">
            <v-row class="justify-center">
              <v-col cols="12" class="d-flex justify-center">
                <v-avatar tile width="400" height="135" color="#0881fa">
                  <v-img
                    :src="getimageUrl(showroom.folder, showroom.ShowroomImg)"
                    :lazy-src="
                      getimageUrl(showroom.folder, showroom.ShowroomImg)
                    "
                    class="white--text align-end showroom-img"
                    color="primary"
                    contain
                  ></v-img>
                </v-avatar>
              </v-col>
            </v-row>
            <v-card-subtitle
              v-text="showroom.ShowroomName"
              class="title py-1 text-truncate"
            >
            </v-card-subtitle>
            <v-card-actions>
              <!--showroom location  -->
              <v-icon class="icon">mdi-map-marker-outline</v-icon>
              <v-card-text v-text="showroom.location" class="pa-1 text">
              </v-card-text>
              <v-spacer></v-spacer>
              <!--showroom car count  -->
              <v-icon class="icon">mdi-car</v-icon>
              <v-card-text class="pa-1 text">
                <span>4</span>
                سيارة
              </v-card-text>
            </v-card-actions>
            <v-card-actions class="justify-center py-0">
              <v-btn
                router
                :to="{
                  name: 'ShowroomView',
                  params: {
                    ShowRoomName: showroom.ShowroomName,
                    ShowRoomLocation: showroom.location,
                    locationStreet: showroom.locationStreet,
                  },
                }"
                large
                block
                class="click-showroom rounded-0"
              >
                رؤية المعرض
              </v-btn>
            </v-card-actions>
          </v-card>
        </swiper-slide>

        <div class="swiper-pagination" slot="pagination"></div>

        <!-- <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div> -->
      </swiper>
    </v-container>
  </div>
</template>

<script>
import featuredshowrooms from "../data-json/showroom.json";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  name: "SpicalShowRoom",
  components: {
    Swiper,
    SwiperSlide,
  },

  data() {
    return {
      Tital: "المعارض المتميزة",
      featuredshowrooms,
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 15,
        effect: "Flip",
        slidesPerGroup: 1,
        loop: false,
        loopFillGroupWithBlank: true,
        scrollbar: {
          el: ".swiper-scrollbar",
          clickable: true,
        },

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
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 3,
          },
          640: {
            slidesPerView: 2,
          },
          471: {
            slidesPerView: 2,
          },
          470: {
            slidesPerView: 1,
          },
          250: {
            slidesPerView: 1,
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
  computed: {
    getCarInfo() {
      let GetShowroomfeatured = [];
      for (let i = 0; i < this.featuredshowrooms.length; i++) {
        if (this.featuredshowrooms[i].featured == true) {
          GetShowroomfeatured.push(this.featuredshowrooms[i]);
        }
      }
      return GetShowroomfeatured;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/virables";
@import "@/scss/mixin";
.SpicalShowRoom {
  width: 100%;
  min-height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: $padding;
  background-color: $color-background;

  .swiper {
    height: 340px !important;

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
  }
  .showroom-vip {
    cursor: default;
    overflow: hidden;
    transition: all 0.2s ease !important;
    .title {
      font-family: $fontfamliy !important;
      color: $fontcolor !important;
      letter-spacing: 0 !important;
      font-size: 1rem !important;
      display: block;
      @media (max-width: 780px) {
        font-size: 17px !important;
      }
      @media (max-width: 600px) {
        font-size: 17px !important;
      }
      @media (max-width: 390px) {
        font-size: 1rem !important;
      }
    }
    .icon {
      color: $fontcolor !important;
      font-size: 20px;
    }
    .text {
      width: fit-content !important;
      font-family: $fontfamliy;
      letter-spacing: 0;
      font-size: 18px;
      color: $fontcolor;
      display: flex;

      span {
        color: $color-1;
        margin: 0 3px;
        font-weight: 500;
        font-size: 18px;
      }
    }
    .v-container {
      @media (min-width: 1050px) {
        max-width: 1100px !important;
      }
    }
    .click-showroom {
      font-family: $fontfamliy;
      letter-spacing: 0;
      color: $fontcolorsm;
      font-weight: bold;
      font-size: 16px;
      background: $color-1;
    }
  }
  .VIP-avatar {
    position: absolute;
    top: 5px;
    right: 5px;
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
}
</style>
