<template>
  <v-main>
    <NavBar />
    <ToSellYourCarLayout />
    <ADD />
    <SpicalShowRoom />
    <SpicalCar :AllDateCar="AllDateCar" />
    <CarBrands :AllDateCar="AllDateCar" />
    <CarShape :AllDateCar="AllDateCar" />
    <!-- <CarPartsCategories /> -->
    <HowToBuy />
    <ContactUs />
  </v-main>
</template>

<script>
import NavBar from "../NavBar/TheNavBar.vue";
import ToSellYourCarLayout from "../A-Home/ToSellYourCarLayout.vue";
import SpicalCar from "../A-Home/SpicalCar.vue";
import SpicalShowRoom from "../A-Home/SpicalShowRoom.vue";
import ContactUs from "../A-Home/ContactUs.vue";
import CarBrands from "../A-Home/CarBrands.vue";
import ADD from "../A-Home/ADD.vue";
import CarShape from "../A-Home/CarShape.vue";
// import CarPartsCategories from "../A-Home/CarPartsCategories.vue";
import HowToBuy from "../A-Home/HowToBy.vue";
import DateCar from "../data-json/car-data.json";
import AllDateCar from "../data-json/All-Car.json";
import CarType from "../data-json/CarType.json";
const components = {
  ToSellYourCarLayout,
  SpicalCar,
  CarBrands,
  CarShape,
  HowToBuy,
  NavBar,
  SpicalShowRoom,
  // CarPartsCategories,ssssss
  ADD,
  ContactUs,
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
