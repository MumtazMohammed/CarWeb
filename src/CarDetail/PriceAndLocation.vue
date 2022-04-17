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
      <v-card color="transparent" flat class="my-2">
        <!-- btns for changing the price of cash or Instalment  -->
        <v-row class="justify-center">
          <!-- cash btn  -->
          <v-col
            :class="getCarInfo.Instalment == true ? 'col-6' : 'col-12 '"
            class="col"
          >
            <a
              class="pa-2 rounded-b-0 btn"
              :class="
                ShowPriceOption == true
                  ? 'btn-show-car-payment-price-active'
                  : 'btn-show-car-payment-price '
              "
              @click="ShowPriceOption = true"
            >
              كاش
            </a>
          </v-col>
          <!-- instalment btn  -->
          <v-col v-if="getCarInfo.Instalment == true" class="col" cols="6">
            <a
              :class="
                ShowPriceOption == false
                  ? 'btn-show-car-payment-price-active'
                  : 'btn-show-car-payment-price '
              "
              class="pa-2 rounded-b-0 rounded-tr-2 rounded-tl-2 btn"
              @click="ShowPriceOption = false"
            >
              إقساط
            </a>
          </v-col>
        </v-row>
        <div class="mb-2">
          <!-- price  cash -->
          <div v-if="ShowPriceOption">
            <v-card flat class="overflow-hidden rounded-t-0 mb-1">
              <v-row class="mt-1">
                <v-col cols="12">
                  <h1 class="text-center green--text pt-1 car-price-cash-price">
                    {{ getCarInfo.payment }}
                    <span class="car-price-cash-text">ريال</span>
                  </h1>
                </v-col>
                <!-- contact seller  -->
                <v-col cols="12">
                  <v-card-actions class="justify-center mb-2">
                    <v-btn
                      @click="ShowContac = !ShowContac"
                      large
                      width="300"
                      elevation="0"
                      class="btns-contact"
                      @click.stop="call = true"
                    >
                      تواصل مع البائع
                    </v-btn>
                  </v-card-actions>
                  <v-expand-transition>
                    <v-card
                      v-if="ShowContac"
                      flat
                      class="rounded-0"
                      width="100%"
                      height="auto"
                    >
                      <v-row class="justify-center">
                        <!-- seller phone call  -->
                        <v-col cols="auto">
                          <v-list-item
                            v-for="(call, x) in getCarInfo.PhoneNo"
                            :key="x"
                          >
                            <v-list-item-avatar size="20" tile>
                              <v-img
                                src="../assets/social/phone-call-svgrepo-com.svg"
                                alt="../assets/social/phone-call-svgrepo-com.svg"
                              ></v-img>
                            </v-list-item-avatar>
                            <v-list-item-content>
                              <a
                                v-text="call"
                                :href="`tel:${{ call }}`"
                                class="text-start text-decoration-none"
                              ></a>
                            </v-list-item-content>
                          </v-list-item>
                        </v-col>
                        <!-- seller whatsaap  -->
                        <v-col cols="auto">
                          <v-list-item
                            v-for="(call, x) in getCarInfo.PhoneWhatsapp"
                            :key="x"
                          >
                            <v-list-item-avatar size="20" tile>
                              <v-img
                                src="../assets/social/whatsapp-svgrepo-com.svg"
                                alt="../assets/social/whatsapp-svgrepo-com.svg"
                              ></v-img>
                            </v-list-item-avatar>
                            <v-list-item-content>
                              <a
                                v-text="call"
                                :href="`https://wa.me/+6${{ call }}`"
                                class="text-start text-decoration-none"
                              ></a>
                            </v-list-item-content>
                          </v-list-item>
                        </v-col>
                      </v-row>
                    </v-card>
                  </v-expand-transition>
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
                      {{ getCarInfo.InstalmentPerMonth }}
                    </span>
                    <p class="ma-0 mr-3 car-Instalment-price-text">
                      ريال <br />
                      شهرياً
                    </p>
                  </v-card-actions>
                </v-col>
              </v-row>
              <v-card flat class="rounded-0 pa-4" color="primary lighten-4">
                <v-row class="row-price-Instalment">
                  <v-col cols="auto" sm="4" md="4">
                    <h5 class="car-place-price-titles">مدة القسط :</h5>
                    <span class="ml-1 text-body-1 car-place-price-text">
                      {{ getCarInfo.InstalmentMonts }}
                    </span>
                    <span class="car-place-price-text">شهر</span>
                  </v-col>
                  <v-col cols="auto" sm="4" md="4">
                    <h5 class="car-place-price-titles">الدفعة الأولى :</h5>
                    <span
                      class="ml-1 text-body-1 green--text text--darken-1 car-place-price-text"
                    >
                      {{ getCarInfo.InstalmentFirstPay }}
                    </span>
                    <span class="car-place-price-text">ريال</span>
                  </v-col>
                  <v-col cols="auto" sm="4" md="4">
                    <h5 class="car-place-price-titles">الدفعة الأخيرة :</h5>
                    <span
                      class="ml-1 text-body-1 green--text text--darken-1 car-place-price-text"
                    >
                      {{ getCarInfo.InstalmentLastPay }}
                    </span>
                    <span class="car-place-price-text">ريال</span>
                  </v-col>
                </v-row>
              </v-card>
            </v-card>
          </div>
        </div>
      </v-card>
      <v-row class="">
        <v-col v-if="getCarInfo.Vip" cols="12" class="pb-0">
          <VipCard />
        </v-col>
        <v-col cols="12" class="py-0">
          <v-card
            flat
            v-bind:class="{
              'rounded-t-0 ': getCarInfo.Vip,
              ' mt-2': !getCarInfo.Vip,
            }"
            class="card-ad-num"
          >
            <v-card-text class="ad">
              أعلان : <span>{{ getCarInfo.ad }}</span>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-text class="ad">
              رقم : <span>{{ getCarInfo.adNum }}</span></v-card-text
            >
          </v-card>
        </v-col>
 
      </v-row>
    </v-col>
  </div>
</template>
<script>
import CarData from "../data-json/All-Car.json";
import VipCard from "../CarDetail/VipCard.vue";
export default {
  name: "PriceAndLocation",
  components: {
    VipCard,
  },
  data() {
    return {
      GetCarData: CarData,
      carName: this.$route.params.carName,
      carId: this.$route.params.carId,
      ShowPriceOption: true,
      ShowContac: false,
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
  font-size: 23px !important;
  letter-spacing: 0 !important;
  color: $fontcolorlinks !important;
  background-color: transparent !important;
  width: 100% !important;
  font-weight: 500;
  display: block;
  text-align: center;
}
.btn-show-car-payment-price-active {
  font-family: $fontfamliy !important;
  font-size: 23px !important;
  letter-spacing: 0 !important;
  color: $fontcolor !important;
  font-weight: 500;
  background-color: $fontcolorsm !important;
  width: 100% !important;
  display: block;
  text-align: center;
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
.btn {
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  transition: all 0.2s linear !important;
  cursor: pointer;
}
// btn contact
.btns-contact {
  font-family: $fontfamliy;
  letter-spacing: 0;
  font-size: 17px !important;
  position: relative;
  color: $fontcolorsm !important;
  z-index: 1;
  overflow: hidden;
  background-color: $color-1 !important;
  transition: all 0.3s ease;
}

.btns-contact:hover {
  color: $fontcolorsm !important;
  border-color: transparent !important;
}
.row-price-Instalment {
  @media (max-width: 600px) {
    justify-content: center;
  }
  @media (max-width: 375px) {
    justify-content: flex-start;
  }
}
</style>
