<template>
  <div class="car-info mt-4">
    <v-row justify="center">
      <v-col cols="12" class="pa-0">
        <v-card-title class="justify-center card-title">
          تفاصيل السيارة
        </v-card-title>
      </v-col>
      <v-col cols="12" class="pa-0 pb-2"><Desgin /> </v-col>
      <v-col cols="12" sm="11" md="10" class="pa-1">
        <v-card color="#0d47a1" class="d-flex flex-wrap pa-5">
          <v-flex sx6 sm4 md3>
            <v-card-text class="table_data-child">
              مـاركة : <b>{{ getCarInfo.company }}</b>
            </v-card-text>
          </v-flex>
          <v-flex xs6 sm4 md3>
            <v-card-text class="table_data-child"
              >الـنوع : <b>{{ getCarInfo.name }}</b>
            </v-card-text>
          </v-flex>
          <v-flex xs6 sm4 md3>
            <v-card-text class="table_data-child">
              الـفئة : <b>{{ getCarInfo.type }}</b></v-card-text
            >
          </v-flex>
          <v-flex xs6 sm4 md3>
            <v-card-text class="table_data-child"
              >الـسنة : <b>{{ getCarInfo.modle }}</b>
            </v-card-text>
          </v-flex>
          <v-flex xs6 sm4 md3>
            <v-card-text class="table_data-child">
              الـوارد : <b>{{ getCarInfo.received }}</b></v-card-text
            >
          </v-flex>
          <v-flex xs6 sm4 md3>
            <v-card-text class="table_data-child"
              >لـون الـمركبه : <b>{{ getCarInfo.ccolor }}</b>
            </v-card-text>
          </v-flex>
          <v-flex xs6 sm4 md3>
            <v-card-text class="table_data-child"
              >نـوع القير : <b>{{ getCarInfo.transmission }}</b>
            </v-card-text>
          </v-flex>
          <v-flex xs6 sm4 md3>
            <v-card-text class="table_data-child"
              >حجم الـمحرك : <b>{{ getCarInfo.engainpower }}</b>
            </v-card-text>
          </v-flex>
          <v-flex xs6 sm4 md3>
            <v-card-text class="table_data-child"
              >نـوع الـدفع : <b>{{ getCarInfo.boost }}</b>
            </v-card-text>
          </v-flex>
          <v-flex xs6 sm4 md3>
            <v-card-text class="table_data-child"
              >الحـالـة الـسيارة : <b>{{ getCarInfo.condtion }}</b>
            </v-card-text>
          </v-flex>
          <v-flex xs6 sm4 md3>
            <v-card-text class="table_data-child"
              >الـمواصفات : <b>{{ getCarInfo.kilometer }}</b>
            </v-card-text>
          </v-flex>
          <v-flex xs6 sm4 md3>
            <v-card-text class="table_data-child"
              >الـممشى : <b>{{ getCarInfo.kilometer }}</b>
            </v-card-text>
          </v-flex>
          <v-row justify="center" class="mt-2">
            <v-col cols="12" md="10" class="disc-p">
              <v-expansion-panels color="primary" accordion>
                <v-expansion-panel color="primary">
                  <v-expansion-panel-header>وصف</v-expansion-panel-header>
                  <v-expansion-panel-content>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
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
import Desgin from "../CarDetail/Desgin.vue";

export default {
  name: "CarDetails",
  components: { Desgin },
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
.table_data {
  font-family: $fontfamliy;
  background-color: #f1f1f1f5 !important;
}

// table hover
.theme--light.v-data-table
  > .v-data-table__wrapper
  > table
  > tbody
  > tr:hover:not(.v-data-table__expanded__content):not(.v-data-table__empty-wrapper) {
  background-color: $background !important;
  transition: background-color 0.3s ease;
}
.theme--light.v-data-table
  > .v-data-table__wrapper
  > table
  > tbody
  > tr:hover:not(.v-data-table__expanded__content):not(.v-data-table__empty-wrapper)
  .table_data-child {
  color: $fontcolorsm;
  transition: color 0.3s ease;
}
.table_data-child {
  font-size: 16px !important;
  font-weight: bold;
  color: $fontcolorsm;
  letter-spacing: 0 !important;
  font-family: $fontfamliy;
  @media (max-width: 400px) {
    font-size: 12px !important;
  }
}
.table_data-child b {
  font-size: 16px !important;
  font-weight: 300;
  color: $fontcolorsm;
  padding: 5px;
  font-family: $fontfamliy;
  @media (max-width: 400px) {
    font-size: 13px !important;
  }
}

.card-title {
  font-size: 28px !important;
  font-weight: bold;
  color: $fontcolor;
  letter-spacing: 0 !important;
  font-family: $fontfamliy;
}
.dicrption-text {
  line-height: 1.8;
  font-size: 16px;
}
.disc-p {
  @media (max-width: 960px) {
    padding: 4px;
  }
}
</style>
