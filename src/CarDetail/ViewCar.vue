<template>
  <v-main>
    <NavBar />
    <div class="car-reviw">
      <v-container>
        <v-row class="mt-1">
          <v-col cols="12" class="CarImage grey lighten-3">
            <CarImage />
          </v-col>
          <!-- <v-col cols="12" class="CarImage"><Desgin /> </v-col> -->
          <v-col cols="12" class="CarDetails pa-3"><CarDetails /> </v-col>
        </v-row>
      </v-container>
      <v-row class="my-0">
        <v-col cols="12" class="">
          <ShowVerifiedCar />
        </v-col>
        <v-col cols="12" class="py-0">
          <TheTips />
        </v-col>
        <v-col cols="12">
          <StartToAd />
        </v-col>
      </v-row>
      <!-- getimageUrl(getCarInfo.folder, getCarInfo.image) -->
    </div>
    <Footer />
  </v-main>
</template>
<script>
import NavBar from "../NavBar/TheNavBar.vue";
import Footer from "@/footer/footer.vue";
import CarData from "../data-json/All-Car.json";
import CarImage from "../CarDetail/CarImage.vue";
import CarDetails from "../CarDetail/CarDetails.vue";
import ShowVerifiedCar from "./ShowVerifiedCar.vue";
import StartToAd from "./StartToAd.vue";
import TheTips from "./TheTips.vue";
export default {
  // name: "ViewCar",
  components: {
    CarImage,
    CarDetails,
    NavBar,
    ShowVerifiedCar,
    StartToAd,
    Footer,
    TheTips,
  },
  data() {
    return {
      dialog: false,
      GetCarData: CarData,
      carName: this.$route.params.carName,
      carId: this.$route.params.carId,
      CarShape: this.$route.params.CarShape,
      Company: this.$route.params.Company,
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
.car-reviw {
  width: 100;
  height: auto;
  position: relative;
}
.container {
  @media (max-width: 1265px) {
    max-width: 100%;
  }
}
</style>

<!-- v-for="(item, i) in items" :key="i" :src="item.src" -->
