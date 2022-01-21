<template>
  <div class="car-info py-10">
    <v-row justify="center">
      <v-col cols="12" class="pa-0">
        <v-card-title class="justify-center card-title">
          تفاصيل السيارة
        </v-card-title>
        <span class="line mt-3 mb-5 mx-auto"></span>
      </v-col>
      <v-col cols="12" sm="12" md="11" class="pa-1">
        <v-card class="d-flex detail-card flex-wrap pa-5">
          <v-flex sx6 sm4 md3>
            <v-card-text class="table_data-child px-1 pl-0">
              مـاركة : <b>{{ getCarInfo.company }}</b>
            </v-card-text>
          </v-flex>
          <v-flex xs6 sm4 md3>
            <v-card-text class="table_data-child px-1 pl-0"
              >الـنوع : <b>{{ getCarInfo.name }}</b>
            </v-card-text>
          </v-flex>
          <v-flex xs6 sm4 md3>
            <v-card-text class="table_data-child px-1 pl-0">
              الـفئة : <b>{{ getCarInfo.type }}</b></v-card-text
            >
          </v-flex>
          <v-flex xs6 sm4 md3>
            <v-card-text class="table_data-child px-1 pl-0"
              >الـسنة : <b>{{ getCarInfo.modle }}</b>
            </v-card-text>
          </v-flex>
          <v-flex xs6 sm4 md3>
            <v-card-text class="table_data-child px-1 pl-0">
              الـوارد : <b>{{ getCarInfo.received }}</b></v-card-text
            >
          </v-flex>
          <v-flex xs6 sm4 md3>
            <v-card-text class="table_data-child px-1 pl-0"
              >لـون الـمركبه : <b>{{ getCarInfo.ccolor }}</b>
            </v-card-text>
          </v-flex>
          <v-flex xs6 sm4 md3>
            <v-card-text class="table_data-child px-1 pl-0"
              >نـوع القير : <b>{{ getCarInfo.transmission }}</b>
            </v-card-text>
          </v-flex>
          <v-flex xs6 sm4 md3>
            <v-card-text class="table_data-child px-1 pl-0"
              >حجم الـمحرك : <b>{{ getCarInfo.engainpower }}</b>
            </v-card-text>
          </v-flex>
          <v-flex xs6 sm4 md3>
            <v-card-text class="table_data-child px-1 pl-0"
              >نـوع الـدفع : <b>{{ getCarInfo.boost }}</b>
            </v-card-text>
          </v-flex>
          <v-flex xs6 sm4 md3>
            <v-card-text class="table_data-child px-1 pl-0"
              >الحـالـة الـسيارة : <b>{{ getCarInfo.condtion }}</b>
            </v-card-text>
          </v-flex>
          <v-flex xs6 sm4 md3>
            <v-card-text class="table_data-child px-1 pl-0"
              >الـمواصفات : <b>{{ getCarInfo.kilometer }}</b>
            </v-card-text>
          </v-flex>
          <v-flex xs6 sm4 md3>
            <v-card-text class="table_data-child px-1 pl-0"
              >الـممشى : <b>{{ getCarInfo.kilometer }}</b>
            </v-card-text>
          </v-flex>
          <v-row justify="center" class="mt-2">
            <v-col cols="12" md="10" class="disc-p">
              <v-card color="#6599ff" class="">
                <v-card-title class="disc-title py-2">
                  تفاصيل أكثر عن السيارة
                </v-card-title>
                <v-divider></v-divider>
                <v-card-text class="disc-text">
                  هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم
                  توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا
                  النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف
                  التى يولدها التطبيق. هذا النص هو مثال لنص يمكن أن يستبدل في
                  نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث
                  يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة
                  إلى زيادة عدد الحروف التى يولدها التطبيق.
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <!-- card discrption  -->
      <!--  -->
    </v-row>
  </div>
</template>
<script>
import CarData from "../data-json/All-Car.json";

export default {
  name: "CarDetails",
  components: {},
  data() {
    return {
      GetCarData: CarData,
      carName: this.$route.params.carName,
      carId: this.$route.params.carId,
    };
  },
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
.car-info {
}
.detail-card {
  background-color: $btnbackground !important;
}
.table_data-child {
  font-size: 15px !important;
  font-weight: bold;
  color: $fontcolorsm;
  letter-spacing: 0 !important;
  font-family: $fontfamliy;
  @media (max-width: 400px) {
    font-size: 14px !important;
  }
}
.table_data-child b {
  font-size: 16px !important;
  font-weight: 400;
  color: $fontcolorsm;
  padding: 5px;
  font-family: $fontfamliy;
  @media (max-width: 400px) {
    font-size: 15px !important;
  }
}

.card-title {
  font-size: 28px !important;
  font-weight: bold;
  color: $fontcolor;
  letter-spacing: 0 !important;
  font-family: $fontfamliy;
}
.disc-p {
  @media (max-width: 960px) {
    padding: 4px;
  }
}
.disc-title {
  color: $fontcolorsm;
  font-family: $fontfamliy;
  // background-color: $btnbackground;
  // border-left: 1px solid $background1 !important;
  // border-right: 1px solid $background1 !important;
  // border-top: 1px solid $background1 !important;
}
.disc-text {
  font-family: $fontfamliy;
  font-size: 16px;
  font-weight: 500 !important;
  line-height: 1.8;
  background-color: #fff;
  color: $fontcolor !important;
}
.line {
  width: 140px;
  height: 7px;
  background-color: $btnbackground;
  display: block;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}
</style>
