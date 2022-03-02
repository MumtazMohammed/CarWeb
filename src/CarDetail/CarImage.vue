<template>
  <div class="car-Image">
    <v-row class="justify-space-around">
      <!-- car image  -->
      <v-col xs="12" sm="12" md="6" class="grey lighten-3">
        <div class="text-center">
          <v-dialog
            v-model="dialog"
            transition="dialog-bottom-transition"
            class="diglog black"
            fullscreen
          >
            <template v-slot:activator="{ on, attrs }">
              <v-card flat width="100%" color="transparent" class="rounded-0">
                <v-card-text class="click mx-auto"
                  >اضغط على الصورة لرؤية المزيد...</v-card-text
                >
              </v-card>
              <v-img
                lazy
                :src="getimageUrl(getCarInfo.folder, getCarInfo.image)"
                :lazy-src="getimageUrl(getCarInfo.folder, getCarInfo.image)"
                max-height="512"
                max-width="768"
                v-bind="attrs"
                v-on="on"
                class="ma-sm-auto"
                style="border-radius: 3px"
              >
              </v-img>
            </template>

            <v-btn class="btn pa-6" dark icon @click="dialog = false">
              <v-icon class="icon">fas fa-times</v-icon>
            </v-btn>
            <v-carousel max dark width="100%" height="100%" hide-delimiters>
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
        </div>
      </v-col>
      <v-col
        xs="12"
        sm="12"
        md="6"
        class="pt-1 pb-0 remov-p-from-col-box-all grey lighten-3"
      >
        <PriceAndLocation />
      </v-col>
    </v-row>
  </div>
</template>
<script>
import CarData from "../data-json/All-Car.json";
import PriceAndLocation from "../CarDetail/PriceAndLocation.vue";
export default {
  name: "CarImage",
  components: { PriceAndLocation },
  data() {
    return {
      ActivePic: "",
      width: 300,
      dialog: false,
      GetCarData: CarData,
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

.small-image {
  margin: 1px;
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
.remov-p-from-col-box-all {
  @media (max-width: 500px) {
    padding: 5px !important;
  }
}
</style>

<!-- v-for="(item, i) in items" :key="i" :src="item.src" -->
