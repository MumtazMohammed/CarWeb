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
        <v-col cols="12" class="pb-0">
          <v-card flat class="card-ad-num">
            <v-card-text class="ad"> أعلان : <span>{{ getCarInfo.ad }}</span> </v-card-text>
            <v-divider></v-divider>
            <v-card-text class="ad">
              رقم : <span>{{ getCarInfo.adNum }}</span></v-card-text
            >
          </v-card>
        </v-col>
        <v-col cols="12" class="py-0">
          <CarWarning />
        </v-col>
        <!-- contact eara  -->
        <v-col cols="12" class="text-center pt-0 btns hidden-md-and-up">
          <v-card flat class="pa-1 btn-box">
            <!-- owner  -->
            <v-btn
              width="120"
              outlined
              class="grey darken-2 btns-contact"
              @click.stop="owner = true"
            >
              معلومات
            </v-btn>
            <v-snackbar
              height="200px"
              min-width="300"
              width="500"
              centered
              v-model="owner"
              :vertical="vertical"
            >
              <div class="v-snack__content pa-0">owner</div>

              <template v-slot:action="{ attrs }">
                <v-btn
                  color="white"
                  icon
                  v-bind="attrs"
                  @click="owner = false"
                  class="snackbar-close-owner"
                >
                  <v-icon class="snackbar-close"> far fa-times-circle </v-icon>
                </v-btn>
              </template>
            </v-snackbar>
            <!-- -------------------------------------- -->
            <!-- whatsapp  -->
            <v-btn
              outlined
              width="120"
              class="success btns-contact"
              @click.stop="whatsapp = true"
            >
              وتس اب
            </v-btn>
            <v-snackbar
              v-model="whatsapp"
              height="150px"
              min-width="300"
              width="500"
              centered
              :vertical="vertical"
              color="success"
            >
              <div class="v-snack__content pa-0">whatsaap</div>
              <template class="snackbar-close" v-slot:action="{ attrs }">
                <v-btn
                  color="white"
                  icon
                  v-bind="attrs"
                  @click="whatsapp = false"
                  class="snackbar-close"
                >
                  <v-icon class="snackbar-close"> far fa-times-circle </v-icon>
                </v-btn>
                <v-btn
                  color="white"
                  icon
                  v-bind="attrs"
                  @click="whatsapp = false"
                  class="snackbar-copy"
                >
                  <v-icon class="snackbar-copy"> far fa-copy</v-icon>
                </v-btn>
              </template>
            </v-snackbar>
            <!-- -------------------------------------- -->
            <!-- telephone  -->
            <v-btn
              outlined
              width="120"
              class="info btns-contact"
              @click.stop="call = true"
            >
              هاتف
            </v-btn>
            <v-snackbar
              height="150px"
              min-width="300"
              width="500"
              centered
              v-model="call"
              :vertical="vertical"
              color="info"
            >
              <div class="v-snack__content pa-0">call</div>
              <template v-slot:action="{ attrs }">
                <v-btn
                  color="white"
                  icon
                  v-bind="attrs"
                  @click="call = false"
                  class="snackbar-close"
                >
                  <v-icon class="snackbar-close"> far fa-times-circle </v-icon>
                </v-btn>
                <v-btn
                  color="white"
                  icon
                  v-bind="attrs"
                  @click="call = false"
                  class="snackbar-copy"
                >
                  <v-icon class="snackbar-copy"> far fa-copy</v-icon>
                </v-btn>
              </template>
            </v-snackbar>
            <!-- -------------------------------------- -->
            <!-- mail  -->
            <v-btn
              width="120"
              outlined
              class="red btns-contact"
              @click.stop="gmail = true"
            >
              البريد الأكترواني
            </v-btn>
          </v-card>
          <v-snackbar
            height="150px"
            min-width="300"
            width="500"
            centered
            v-model="gmail"
            :vertical="vertical"
            color="red"
          >
            <div class="v-snack__content pa-0">gmail</div>

            <template v-slot:action="{ attrs }">
              <v-btn
                color="white"
                icon
                v-bind="attrs"
                @click="gmail = false"
                class="snackbar-close"
              >
                <v-icon class="snackbar-close"> far fa-times-circle </v-icon>
              </v-btn>
              <v-btn
                icon
                v-bind="attrs"
                @click="gmail = false"
                class="snackbar-copy"
              >
                <v-icon class="snackbar-copy"> far fa-copy</v-icon>
              </v-btn>
            </template>
          </v-snackbar>
          <!-- -------------------------------------- -->
        </v-col>
      </v-row>
    </v-col>
  </div>
</template>
<script>
import CarData from "../data-json/All-Car.json";
import CarWarning from "../CarDetail/CarWarning.vue";
export default {
  name: "PriceAndLocation",
  components: {
    CarWarning,
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
  border-top-right-radius: 5px !important;
  border-top-left-radius: 5px !important;
  border-bottom-right-radius: 0px !important;
  border-bottom-left-radius: 0px !important;
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
.btn-box {
  border-top-right-radius: 0px !important;
  border-top-left-radius: 0px !important;
  border-bottom-right-radius: 5px !important;
  border-bottom-left-radius: 5px !important;
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
