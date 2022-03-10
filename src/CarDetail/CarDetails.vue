<template>
  <div class="car-info ">
    <v-row justify="center">
      <v-col cols="12" class="pa-0">
        <v-card-title class="justify-center card-title">
          تفاصيل السيارة
        </v-card-title>
        <span class="line mb-3 mx-auto"></span>
      </v-col>
      <v-col
        cols="12"
        sm="12"
        md="12"
        class="pa-1 position-relative detail-card-box"
      >
        <v-card flat class="d-flex detail-card flex-wrap pa-5">
          <v-flex xs6 sm4 md3>
            <v-card-text class="table_data-child px-1 pl-0">
              <v-icon class="grey--text text--lighten-1" right
                >mdi-car-key</v-icon
              >
              مـاركة : <b class="pa-0">{{ getCarInfo.company }}</b>
            </v-card-text>
          </v-flex>
          <v-flex xs12 sm4 md3>
            <v-card-text class="table_data-child px-1 pl-0">
              <v-icon class="grey--text text--lighten-1" right
                >mdi-car-side</v-icon
              >
              الـنوع : <b class="pa-0">{{ getCarInfo.name }}</b>
            </v-card-text>
          </v-flex>
          <v-flex xs12 sm4 md3>
            <v-card-text class="table_data-child px-1 pl-0">
              <v-icon class="grey--text text--lighten-1" right
                >mdi-shape-outline</v-icon
              >
              الـفئة : <b class="pa-0">{{ getCarInfo.type }}</b></v-card-text
            >
          </v-flex>
          <v-flex xs12 sm4 md3>
            <v-card-text class="table_data-child px-1 pl-0">
              <v-icon class="grey--text text--lighten-1" right>mdi-cogs</v-icon>
              الـسنة : <b class="pa-0">{{ getCarInfo.modle }}</b>
            </v-card-text>
          </v-flex>
          <v-flex xs12 sm4 md3>
            <v-card-text class="table_data-child px-1 pl-0">
              <v-icon class="grey--text text--lighten-1" right
                >mdi-arrow-left-bottom-bold</v-icon
              >
              الـوارد :
              <b class="pa-0">{{ getCarInfo.received }}</b></v-card-text
            >
          </v-flex>
          <v-flex xs12 sm4 md3>
            <v-card-text class="table_data-child px-1 pl-0">
              <v-icon class="grey--text text--lighten-1" right
                >mdi-format-color-fill</v-icon
              >
              لـون الـمركبه : <b class="pa-0">{{ getCarInfo.ccolor }}</b>
            </v-card-text>
          </v-flex>
          <v-flex xs12 sm4 md3>
            <v-card-text class="table_data-child px-1 pl-0">
              <v-icon class="grey--text text--lighten-1" right
                >mdi-car-shift-pattern</v-icon
              >
              نـوع القير : <b class="pa-0">{{ getCarInfo.transmission }}</b>
            </v-card-text>
          </v-flex>
          <v-flex xs12 sm4 md3>
            <v-card-text class="table_data-child px-1 pl-0">
              <v-icon class="grey--text text--lighten-1" right
                >mdi-engine-outline</v-icon
              >
              حجم الـمحرك : <b class="12a-0">{{ getCarInfo.engainpower }}</b>
            </v-card-text>
          </v-flex>
          <v-flex xs12 sm4 md3>
            <v-card-text class="table_data-child px-1 pl-0">
              <v-icon class="grey--text text--lighten-1" right
                >mdi-source-pull</v-icon
              >
              نـوع الـدفع : <b class="pa-0">{{ getCarInfo.boost }}</b>
            </v-card-text>
          </v-flex>
          <v-flex xs12 sm4 md3>
            <v-card-text class="table_data-child px-1 pl-0">
              <v-icon class="grey--text text--lighten-1" right
                >mdi-car-info</v-icon
              >
              حـالـة الـسيارة : <b class="pa-0">{{ getCarInfo.condtion }}</b>
            </v-card-text>
          </v-flex>
          <v-flex xs12 sm4 md3>
            <v-card-text class="table_data-child px-1 pl-0">
              <v-icon class="grey--text text--lighten-1" right
                >mdi-gas-station</v-icon
              >
              نوع الوقود : <b class="pa-0">{{ getCarInfo.fuel }}</b>
            </v-card-text>
          </v-flex>
          <v-flex xs12 sm4 md3>
            <v-card-text class="table_data-child px-1 pl-0">
              <v-icon class="grey--text text--lighten-1" right
                >mdi-car-settings</v-icon
              >
              الـمواصفات : <b class="pa-0">{{ getCarInfo.kilometer }}</b>
            </v-card-text>
          </v-flex>
          <v-flex xs12 sm4 md3>
            <v-card-text class="table_data-child px-1 pl-0">
              <v-icon class="grey--text text--lighten-1" right
                >mdi-car-speed-limiter</v-icon
              >
              الـممشى : <b class="pa-0">{{ getCarInfo.kilometer }}</b>
            </v-card-text>
          </v-flex>
          <v-flex xs12 sm4 md3>
            <v-card-text class="table_data-child px-1 pl-0">
              <v-icon class="grey--text text--lighten-1" right
                >mdi-map-marker-radius</v-icon
              >
              المنطقة : <b class="pa-0">{{ getCarInfo.location }}</b>
            </v-card-text>
          </v-flex>
          <v-row justify="center" class="mt-2">
            <v-col cols="12" md="12" class="disc-p">
              <v-card flat color="transparent" class="disc-title pa-2">
                <v-card-title class="disc-title py-2 grey darken-2">
                  تفاصيل أكثر عن السيارة....
                </v-card-title>
                <v-card-text class="disc-text pa-2">
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
.detail-card {
  background: $color-2 !important;
}
.table_data-child {
  font-size: 16px !important;
  font-weight: bold;
  color: $fontcolorsm;
  letter-spacing: 0 !important;
  font-family: $fontfamliy;

}
.table_data-child b {
  font-size: 17px !important;
  font-weight: 400;
  color: $fontcolorsm;
  padding: 5px;
  font-family: $fontfamliy;

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
  font-size: 15px;
  font-weight: 500 !important;
  line-height: 1.9;
  background-color: #fff;
  color: $fontcolor !important;
  border-radius: 3px !important;
}
.line {
  width: 100px;
  height: 5px;
  background-color: $color-2;
  display: block;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}
</style>
