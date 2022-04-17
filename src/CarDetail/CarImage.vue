<template>
  <div class="car-Image">
    <v-row class="justify-space-around">
      <!-- Share - Saved - Report  -->
      <v-col cols="12" class="py-0">
        <Share />
      </v-col>
      <!-- car image  -->
      <v-col xs="12" sm="12" md="6" class="">
        <div class="text-center">
          <v-dialog
            v-model="dialog"
            transition="dialog-bottom-transition"
            class="diglog black"
            fullscreen
          >
            <template v-slot:activator="{ on, attrs }">
              <v-card flat width="100%" color="transparent" class="rounded-0">
                <v-card-text class="click mx-auto">
                  اضغط على الصورة لرؤية أكبر ...
                </v-card-text>
              </v-card>
              <v-img
                v-if="
                  ActiveImage.length < 1
                    ? (ActiveImage = getimageUrl(
                        getCarInfo.folder,
                        getCarInfo.image
                      ))
                    : ActiveImage
                "
                :src="ActiveImage"
                :lazy-src="ActiveImage"
                v-bind="attrs"
                v-on="on"
                class="ma-sm-auto"
                aspect-ratio="1.8"
                contain
              >
              </v-img>
            </template>
            <!-- :src="getimageUrl(getCarInfo.folder, getCarInfo.image)"
            :lazy-src="getimageUrl(getCarInfo.folder, getCarInfo.image)" -->
            <v-btn class="btn pa-6" dark icon @click="dialog = false">
              <v-icon class="icon">fas fa-times</v-icon>
            </v-btn>
            <v-carousel
              touch
              max
              dark
              width="100%"
              height="100%"
              hide-delimiters
            >
              <v-carousel-item
                v-for="(singleImage, x) in getCarInfo.images"
                :key="x"
                class="next-box mx-auto"
              >
                <div class="next-box mx-auto">
                  <v-img
                    contain
                    class="img"
                    :src="getimageUrl(getCarInfo.folder, singleImage)"
                  ></v-img>
                </div>
              </v-carousel-item>
            </v-carousel>
            <!--  -->
          </v-dialog>
          <!--clickable image changer-->
          <v-sheet
            color="transparent"
            class="mx-auto"
            elevation="0"
            max-width="800"
          >
            <v-slide-group
              v-model="model"
              class="pa-0"
              center-active
              show-arrows
              mandatory
            >
              <v-slide-item
                v-for="(singleImage, x) in getCarInfo.images"
                :key="x"
                v-slot="{ active, toggle }"
              >
                <v-card
                  class="ma-1 overflow-hidden"
                  width="100"
                  @click="toggle"
                >
                  <v-row class="fill-height" align="center" justify="center">
                    <v-avatar tile size="100" color="transparent">
                      <v-img
                        :class="active ? '' : 'not-active-img'"
                        contain
                        @click="
                          ActiveImage = getimageUrl(
                            getCarInfo.folder,
                            singleImage
                          )
                        "
                        :src="getimageUrl(getCarInfo.folder, singleImage)"
                      />
                    </v-avatar>
                  </v-row>
                </v-card>
              </v-slide-item>
            </v-slide-group>
          </v-sheet>
          <!--  -->
        </div>
      </v-col>
      <v-col cols="12" sm="12" md="6" lg="6" class="remov-p-from-col-box-all">
        <PriceAndLocation />
      </v-col>
    </v-row>
  </div>
</template>
<script>
import CarData from "../data-json/All-Car.json";
import PriceAndLocation from "../CarDetail/PriceAndLocation.vue";
import Share from "./ShareSaveReport.vue";
export default {
  name: "CarImage",
  components: { PriceAndLocation, Share },
  data() {
    return {
      ActiveImage: "",
      width: 300,
      dialog: false,
      GetCarData: CarData,
      model: null,
      carName: this.$route.params.carName,
      carId: this.$route.params.carId,
    };
  },
  // this is help full to call the image inside folder and inject to the src
  methods: {
    getimageUrl(FolderName, ImageName) {
      let image = require.context("@/assets/");
      return image("./" + FolderName + "/" + ImageName);
    },
  },
  // this computed to call the item by it info
  computed: {
    getCarInfo() {
      let Carinformation = "";
      for (let i = 0; i < this.GetCarData.length; i++) {
        if (this.GetCarData[i].id == this.carId) {
          Carinformation = this.GetCarData[i];
          break;
        }
      }
      return Carinformation;
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/virables";
@import "@/scss/mixin";

.click-box {
  background-color: #fff !important;
}
.click {
  font-family: $fontfamliy;
  font-size: 18px;
  color: $fontcolor !important;
  // background-color: $color-background !important;
}
.diglog {
  align-items: flex-start !important;
  width: 100%;
  height: 100%;
}
.v-dialog--fullscreen {
  background-color: black !important;
}
.img-box {
  width: 100%;
  min-height: 100%;
  position: relative;
  background-color: black;
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.next-box {
  margin-right: auto !important;
  margin-left: auto !important;
  width: 100%;
  height: 100%;
  background-color: rgb(22, 22, 22);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .img {
    max-width: 800px;
    max-height: 500px;

    image-orientation: center;
    @media (max-width: 700px) {
      max-width: 600px;
    }
    @media (max-width: 650px) {
      max-width: 500px;
    }
    @media (max-width: 500px) {
      max-width: 400px;
    }
    @media (max-width: 400px) {
      max-width: 350px;
    }
    @media (max-height: 450px) {
      max-height: 400px;
    }
    @media (max-height: 400px) {
      max-height: 350px;
    }
    @media (max-height: 350px) {
      max-height: 300px;
    }
    @media (max-height: 300px) {
      max-height: 250px;
    }
    @media (max-height: 250px) {
      max-height: 200px;
    }
  }
}
.btn {
  position: absolute;
  z-index: 99;
  padding: 15px;
  .icon {
    font-size: 30px;
  }
}
.not-active-img {
  position: relative;
}
.not-active-img::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: black;
  // z-index: 1;
  opacity: 0.5;
}
::v-deep .v-slide-group__next {
  min-width: 30px;
}
::v-deep .v-slide-group__prev {
  min-width: 30px;
}
::v-deep .v-slide-group__content {
  justify-content: center;
}
</style>

<!-- v-for="(item, i) in items" :key="i" :src="item.src" -->
