<template>
  <!-- this component will be under the image  -->
  <div class="ContactSeller">
    <!-- contact  -->
    <v-col cols="12" class="">
      <!-- car name  -->
      <v-col cols="12">
        <p class="cartital ma-0">
          {{ getCarInfo.company }} {{ getCarInfo.name }}
          {{ getCarInfo.modle }}
        </p>
      </v-col>
      <v-divider></v-divider>
      <v-row class="mt-2">
        <!-- price  -->
        <v-col cols="6">
          <h5 class="h5 pr-2">الـسعر *</h5>
          <h2 class="text-center green--text">{{ getCarInfo.payment }}</h2>
        </v-col>
        <!-- place -->
        <v-col cols="6">
          <h5 class="h5 pr-2">الـمنطقة *</h5>
          <h2 class="text-center cartital">{{ getCarInfo.location }}</h2>
        </v-col>
      </v-row>
      <v-row>
        <v-col v-if="getCarInfo.Vip == true" cols="12" class="pb-0">
          <VipCard />
        </v-col>
        <v-col cols="12" class="py-0">
          <v-card flat class="card-ad-num rounded-0">
            <v-card-text class="ad">
              أعلان : <span>{{ getCarInfo.ad }}</span>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-text class="ad">
              رقم : <span>{{ getCarInfo.adNum }}</span></v-card-text
            >
          </v-card>
        </v-col>
        <v-col v-if="getCarInfo.Vip == false" cols="12" class="py-0">
          <CarWarning />
        </v-col>
        <v-col cols="12" class="text-center pt-0 btns">
          <ContacSeller />
        </v-col>
        <!-- contact eara  -->

        <!-- -------------------------------------- -->
      </v-row>
    </v-col>
  </div>
</template>
<script>
import CarData from "../data-json/All-Car.json";
import CarWarning from "../CarDetail/CarWarning.vue";
import VipCard from "../CarDetail/VipCard.vue";
import ContacSeller from "../CarDetail/ContacSeller.vue";
export default {
  name: "PriceAndLocation",
  components: {
    CarWarning,
    VipCard,
    ContacSeller,
  },
  data() {
    return {
      GetCarData: CarData,
      carName: this.$route.params.carName,
      carId: this.$route.params.carId,
      call: false,
      gmail: false,
      whatsapp: false,
      owner: false,
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
.cartital:nth-child(1) {
  font-family: $fontfamliy2 !important;
  color: $fontcolor !important;
  font-weight: 500;
  text-align: center;
  letter-spacing: 0 !important;
  font-size: 30px;
}
.cartital {
  font-family: $fontfamliy2 !important;
  color: $fontcolor !important;
  font-weight: 500;
  text-align: center;
  letter-spacing: 0 !important;
}
.card-ad-num {
  // border-top-right-radius: 0px !important;
  // border-top-left-radius: 0px !important;
  // border-bottom-right-radius: 5px !important;
  // border-bottom-left-radius: 5px !important;
}
.ad {
  font-family: $fontfamliy !important;
  color: $fontcolor !important;
  font-weight: 500;
  letter-spacing: 0 !important;
  font-size: 20px;
}
.ad span {
  color: $btnbackground !important;
  margin-right: 4px;
}
.ad:last-child {
  font-family: $fontfamliy !important;
  color: $fontcolor !important;
  font-weight: 500;
  letter-spacing: 0 !important;
  font-size: 18px;
}

.h5 {
  font-family: $fontfamliy;
}

.btns-contact {
  color: #fff !important;
  margin: 3px;
  font-family: $fontfamliy2;
  letter-spacing: 0;
  font-size: 14px;
}
// search

.remov-p-from-col-box-all {
  @media (max-width: 500px) {
    padding: 1px !important;
  }
}
.snackbar-close {
  position: absolute;
  top: 0;
  right: 0;
}
.snackbar-close-owner {
  position: absolute;
  top: 0;
  right: 0;
}
.snackbar-copy {
  position: absolute;
  top: 0;
  left: 0;
}
.v-snack__content {
  text-align: center !important;
  font-size: 24px;
  font-family: $fontfamliy2;
}
</style>
