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
      <v-card color="transparent" flat class="mt-2">
        <!-- btns for changing the price of cash or Instalment  -->
        <v-row>
          <v-col class="pl-0 col" cols="6">
            <v-btn
              class="rounded-b-0 rounded-tl-0 btn"
              :class="
                ShowPriceOption == true
                  ? 'btn-show-car-payment-price-active'
                  : 'btn-show-car-payment-price '
              "
              large
              elevation="0"
              block
              @click="ShowPriceOption = true"
            >
              كاش
            </v-btn>
          </v-col>
          <v-col class="pr-0 col" cols="6">
            <v-btn
              :class="
                ShowPriceOption == false
                  ? 'btn-show-car-payment-price-active'
                  : 'btn-show-car-payment-price '
              "
              class="rounded-b-0 rounded-tr-0 btn"
              large
              block
              elevation="0"
              @click="ShowPriceOption = false"
            >
              أقساط
            </v-btn>
          </v-col>
        </v-row>
        <!-- price  cash -->
        <div v-if="ShowPriceOption">
          <v-card flat class="overflow-hidden rounded-t-0 mb-1">
            <v-row class="my-1">
              <v-col cols="12">
                <h1 class="text-center green--text pt-1 car-price-cash-price">
                  {{ getCarInfo.payment }}
                  <span class="car-price-cash-text">ريال</span>
                </h1>
              </v-col>
              <v-col cols="12" class="text-center">
                <ContacSeller />
              </v-col>
            </v-row>
          </v-card>
        </div>
        <!-- price Instalment  -->
        <div v-else>
          <v-card flat class="overflow-hidden rounded-t-0 mb-1">
            <v-row class="my-1">
              <v-col cols="12">
                <v-card-actions class="justify-center">
                  <span class="text-center green--text car-place-price-price">
                    {{ getCarInfo.payment }}
                  </span>
                  <p class="ma-0 mr-3 car-Instalment-price-text">
                    ريال <br />
                    شهرياً
                  </p>
                </v-card-actions>
              </v-col>
            </v-row>
            <v-card flat class="rounded-0 pa-2" color="primary lighten-4">
              <v-row>
                <v-col cols="6" sm="4" md="4">
                  <h5 class="car-place-price-titles">مدة القسط :</h5>
                  <span class="ml-1 text-body-1 car-place-price-text">
                    {{ getCarInfo.payment }}
                  </span>
                  <span class="car-place-price-text">شهر</span>
                </v-col>
                <v-col cols="6" sm="4" md="4">
                  <h5 class="car-place-price-titles">الدفعة الأولى :</h5>
                  <span class="ml-1 text-body-1 car-place-price-text">
                    {{ getCarInfo.payment }}
                  </span>
                  <span class="car-place-price-text">ريال</span>
                </v-col>
                <v-col cols="6" sm="4" md="4">
                  <h5 class="car-place-price-titles">الدفعة الأخيرة :</h5>
                  <span class="ml-1 text-body-1 car-place-price-text">
                    {{ getCarInfo.payment }}
                  </span>
                  <span class="car-place-price-text">ريال</span>
                </v-col>
              </v-row>
            </v-card>
            <!-- place -->
            <!-- <v-col cols="4" md="4">
            <h5 class="pr-2 car-place-price-titles">الـمنطقة *</h5>
            <h2
              class="text-center grey--text text--darken-1 pt-1 car-place-price-text"
            >
              {{ getCarInfo.location }}
            </h2>
          </v-col> -->
          </v-card>
        </div>
      </v-card>
      <v-row>
        <v-col v-if="getCarInfo.Vip == true" cols="12" class="pb-0">
          <VipCard />
        </v-col>
        <v-col cols="12" class="py-0">
          <v-card flat class="card-ad-num">
            <v-card-text class="ad">
              أعلان : <span>{{ getCarInfo.ad }}</span>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-text class="ad">
              رقم : <span>{{ getCarInfo.adNum }}</span></v-card-text
            >
          </v-card>
        </v-col>
        <v-col cols="12" class="btns">
          <Share />
        </v-col>
      </v-row>
    </v-col>
  </div>
</template>
<script>
import CarData from "../data-json/All-Car.json";
import VipCard from "../CarDetail/VipCard.vue";
import ContacSeller from "../CarDetail/ContacSeller.vue";
import Share from "../CarDetail/Share.vue";
export default {
  name: "PriceAndLocation",
  components: {
    VipCard,
    ContacSeller,
    Share,
  },
  data() {
    return {
      GetCarData: CarData,
      carName: this.$route.params.carName,
      carId: this.$route.params.carId,
      ShowPriceOption: true,
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
  font-family: $fontfamliy !important;
  color: $fontcolor !important;
  font-weight: 500;
  text-align: center;
  letter-spacing: 0 !important;
  font-size: 30px;
}
.cartital {
  font-family: $fontfamliy !important;
  color: $fontcolor !important;
  font-weight: 500;
  text-align: center;
  letter-spacing: 0 !important;
}
.car-place-price-titles {
  font-family: $fontfamliy !important;
  font-weight: 500;
  font-size: 13px;
}
.car-place-price-text {
  font-family: $fontfamliy !important;
  font-weight: 300;
  font-size: 15px;
}
.car-price-cash-price {
  font-family: $fontfamliy !important;
  font-weight: bold;
  font-size: 22px;
}
.car-price-cash-text {
  font-family: $fontfamliy !important;
  font-weight: 500;
  font-size: 17px;
  color: $fontcolor;
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
.btn-show-car-payment-price {
  font-family: $fontfamliy !important;
  font-size: 20px !important;
  letter-spacing: 0;
  color: $fontcolorsm !important;
  background-color: $color-1 !important;
}
.btn-show-car-payment-price-active {
  font-family: $fontfamliy !important;
  font-size: 20px !important;
  letter-spacing: 0;
  color: $fontcolor !important;
  background-color: $fontcolorsm !important;
}

.car-Instalment-price-text {
  font-family: $fontfamliy !important;
  font-size: 14px;
}
.car-place-price-price {
  font-size: 18px;
  font-weight: bold;
}
::v-deep.theme--light.v-btn:hover:before {
  opacity: 0;
}
</style>
