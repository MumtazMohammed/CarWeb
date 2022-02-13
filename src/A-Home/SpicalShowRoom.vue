<template>
  <div class="SpicalShowRoom my-5">
    <v-container fluid>
      <v-col>
        <h3 class="tital text-center">أكثر المعارض شهرةً</h3>
        <span class="line my-2 mx-auto"></span>
      </v-col>
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide
          class="slide"
          width="250"
          v-for="(showroom, i) in showrooms"
          :key="i"
        >
          <v-card class="showroom-vip">
            <v-row class="justify-center">
              <v-col cols="12" class="d-flex justify-center">
                <v-avatar tile size="220" color="transparent">
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
            <v-card-title v-text="showroom.ShowroomName" class="title">
            </v-card-title>
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
            <v-card-actions class="justify-center">
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
import showrooms from "../data-json/SpicalShowRoom.json";
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
      showrooms,
      swiperOption: {
        slidesPerView: 4,
        effect: "card",
        spaceBetween: 10,
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
            slidesPerView: 4,
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

    onSetTranslate() {
      console.log("onSetTranslate");
    },
    onSwiperSlideChangeTransitionStart() {
      console.log("onSwiperSlideChangeTransitionStart");
    },
    onSwiperClickSlide(index, reallyIndex) {
      console.log("Swiper click slide!", reallyIndex);
    },
  },
  mounted() {
    console.log(
      "Swiper instances:",
      this.$refs.swiperComponent.$swiper,
      this.swiper
    );
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/virables";
@import "@/scss/mixin";
.SpicalShowRoom {
  width: 100%;
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: $padding;
  background-color: $color-background;

  .swiper {
    height: 460px !important;

    .swiper-pagination::v-deep .swiper-pagination-bullet {
      width: 13px !important;
      border-radius: 20%;
      height: 5px;
      opacity: 0.3;
      margin: 0 2px;
    }
    .swiper-pagination::v-deep .swiper-pagination-bullet-active {
      width: 18px !important;
      height: 5px;
      opacity: 1;
    }
  }
  .swiper::v-deep .swiper-wrapper {
    @media (min-width: 1024px) {
      justify-content: center;
    }
  }
  .showroom-vip {
    cursor: pointer;
    overflow: hidden;
    // background: $linear-gradient;
    transition: all 0.2s ease !important;
    .title {
      font-family: $fontfamliy !important;
      color: $fontcolor !important;
      letter-spacing: 0 !important;
      font-size: 1rem !important;
      height: 60px;
      display: flex;
      align-items: flex-start;
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
    color: $fontcolor;
    font-family: $fontfamliy;
    font-size: 27px;
  }
  .line {
    width: 175px;
    height: 7px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    background: $color-1;
    display: block;
  }
}
</style>
