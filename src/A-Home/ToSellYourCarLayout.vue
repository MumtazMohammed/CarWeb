<template>
  <div class="selection">
    <v-container fluid>
      <v-row class="row-Add justify-center">
        <!-- advertisement  -->
        <v-col class="pa-0 pt-0" cols="12" md="8" sm="12">
          <v-carousel
            cycle
            hide-delimiters
            interval="3000"
            hide-delimiter-background
            class="carousel"
            v-model="model"
          >
            <v-carousel-item
              v-for="(item, i) in items"
              :key="i"
              style="height: 100%"
              class="carouselItem"
            >
              <v-img
                min-height="150"
                min-width="200"
                :src="item.src"
                :lazy-src="item.src"
              >
              </v-img>
            </v-carousel-item>
          </v-carousel>
        </v-col>
        <!-- weebsite welcome  -->
        <v-col class="pa-0 pt-0 mt-4 mt-md-0 mt-lg-0" cols="12" md="4" sm="12"
          ><ToSellYourCarInfo />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import ToSellYourCarInfo from "../A-Home/ToSellYourCarInfo.vue";

export default {
  name: "ToSellYourCarLayout",
  components: { ToSellYourCarInfo },
  setup() {
    return {};
  },
  data() {
    return {
      model: 0,
      items: [
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;500;700;800;900&display=swap");
@import "@/scss/virables";
@import "@/scss/mixin";
.selection {
  width: 100%;
  min-height: 40vh;
  background: $color-1;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 959px) {
    background: $backgroundcard;
  }
  .v-input--selection-controls .v-input__slot > .v-label {
    font-family: "Tajawal", sans-serif !important;
  }
  button.v-btn.v-btn--is-elevated.v-btn--has-bg.theme--light.elevation-2.v-size--default {
    width: 100%;
    background-color: #009688;
    font-family: "Tajawal", sans-serif;
    color: $fontcolorsm;
    font-size: 18px;
    letter-spacing: 0;
    font-weight: 500;
  }
  .search-card {
    .search {
      width: 100%;
      margin: 0 auto;
      border-top-right-radius: 0px !important;
      border-bottom-right-radius: 0px !important;
      .input {
        font-family: $fontfamliy;
      }
      .search-icon {
        color: $fontcolorsm;
        font-size: 24px !important;
      }
      .search-btn {
        height: 48px;
        background-color: $color-1;
        border-radius: 4px 0 0 4px;
        border-top: thin solid white;
        border-left: thin solid white;
        border-bottom: thin solid white;
      }
    }
  }
  // Advtrasmentsidth: 310px !important;
  ::v-deep .v-window.v-item-group.theme--dark.v-carousel {
    height: 295px !important;
    @media (max-width: 700px) {
      height: 250px !important;
    }
    @media (max-width: 590px) {
      height: 210px !important;
    }
    @media (max-width: 520px) {
      height: 195px !important;
    }
  }
  ::v-deep .v-image.v-responsive.theme--light {
    height: 295px !important;
    @media (max-width: 700px) {
      height: 250px !important;
    }
    @media (max-width: 590px) {
      height: 210px !important;
    }
    @media (max-width: 520px) {
      height: 195px !important;
    }
  }

  .carousel::v-deep .v-image.v-responsive.v-carousel__item.theme--light {
    // height: 100% !important;
    @media (max-width: 959px) {
      // background: $color-1;
    }
  }
}
.carouselItem {
  transition: all 1s ease;
}
</style>
