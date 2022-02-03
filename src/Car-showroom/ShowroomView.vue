<template>
  <v-main>
    <NavBar />
    <div class="ShowroomView">
      <v-container>
        <!-- showroom information  -->
        <v-row
          class="justify-center #caf0f8 flex-md-row-reverse flex-lg-row-reverse mb-1"
        >
          <v-col class="col-img" cols="9" sm="7" md="4">
            <v-img
              max-width="400"
              contain
              src="../assets/showroom/orignal-1635857145-70.png"
            ></v-img>
          </v-col>
          <v-col cols="12" sm="12" md="6">
            <v-card flat color="transparent" class="info-card">
              <v-card-title class="card-title">
                معرض الملتقي الجديد للسيارات
              </v-card-title>
              <v-card-text class="card-text">
                جنوب الرياض طريق الامام مسلم - الرياض - السعودية
              </v-card-text>
              <v-col cols="12">
                <v-row>
                  <v-col class="">
                    <v-card-text class="card-text pa-0"> هاتف: </v-card-text>
                  </v-col>
                  <v-col class="">0545603920</v-col>
                  <v-col class="">0545603920</v-col>
                  <v-col class="">0545603920</v-col>
                  <v-col class="">0545603920</v-col>
                  <v-col class="">0545603920</v-col>
                </v-row>
              </v-col>
            </v-card>
          </v-col>
        </v-row>
        <v-divider></v-divider>
        <!-- car count and filter -->
        <v-row class="mt-1">
          <v-col cols="12" sm="5" md="6" class="pa-2">
            <v-card-title class="card-title-car-count-in-room">
              عدد السيارات |
              <span class="mx-2 red--text">45</span>
            </v-card-title>
          </v-col>
          <v-col class="pa-2" cols="12" md="3" sm="3">
            <v-select
              :items="Price"
              label="ترتيب السعر من"
              hide-details
              dense
              class="select-price pa-3 pl-md-1 pl-sm-1 pb-sm-3 pb-md-3 pb-lg-3 pb-0"
              color="primary"
              outlined
              flat
            ></v-select>
          </v-col>
          <v-col class="pa-2" cols="12" md="3" sm="3">
            <v-select
              :items="Condtion"
              label="حالة السيارة"
              hide-details
              dense
              class="select-price pa-3 pr-md-1 pr-sm-1 pt-0 pt-sm-3 pt-md-3 pt-lg-3"
              color="primary"
              outlined
              flat
            ></v-select>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-main>
</template>
<script>
import NavBar from "../NavBar/TheNavBar.vue";

export default {
  name: "ShowroomView",
  components: { NavBar },
  data() {
    return {
      Price: [" الأعلى سعرا", "الأقل سعرا"],
      Condtion: ["جديد", "مستعمل"],
    };
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/virables";
@import "@/scss/mixin";
.ShowroomView {
  width: 100%;
  min-height: 100vh;
  padding: $padding;
  font-family: $fontfamliy;
  letter-spacing: 0 !important;

  .card-title {
    font-size: 28px !important;
    font-weight: bold;
    color: $color-1;
    @media (max-width: 500px) {
      font-size: 25px !important;
    }
    @media (max-width: 450px) {
      font-size: 20px !important;
    }
    @media (max-width: 370px) {
      font-size: 19px !important;
    }
  }
  .card-text {
    font-size: 14px !important;
    font-weight: bold !important;
  }
  .col-img {
    @media (max-width: 450px) {
      max-width: 100% !important;
    }
  }
  .card-title-car-count-in-room {
    font-weight: bold;
    @media (max-width: 600px) {
      justify-content: center;
      font-size: 25px !important;
    }
  }
}
</style>
