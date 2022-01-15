<template>
  <v-main>
    <NavBar />
    <ToSellYourCarLayout />
    <SpicalCar :caritems="caritems" />
    <SeeAllCar />
    <CarBrands :AllDateCar="AllDateCar" />
    <CarShape :AllDateCar="AllDateCar" />
    <HowToBuy />
  </v-main>
</template>

<script>
import NavBar from "../NavBar/TheNavBar.vue";
import ToSellYourCarLayout from "../A-Home/ToSellYourCarLayout.vue";
import SeeAllCar from "../A-Home/SeeAllCars.vue";
import SpicalCar from "../A-Home/SpicalCar.vue";
import CarBrands from "../A-Home/CarBrands.vue";
import CarShape from "../A-Home/CarShape.vue";
import HowToBuy from "../A-Home/HowToBy.vue";
import DateCar from "../data-json/car-data.json";
import AllDateCar from "../data-json/All-Car.json";
import CarType from "../data-json/CarType.json";
const components = {
  ToSellYourCarLayout,
  SpicalCar,
  CarBrands,
  SeeAllCar,
  CarShape,
  HowToBuy,
  NavBar,
};
export default {
  name: "Home",
  components,
  data() {
    return {
      caritems: DateCar,
      AllDateCar,
      CarType: CarType,
    };
  },
};
</script>
