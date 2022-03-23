<template>
  <div class="share">
    <v-card-actions class="pa-0 justify-center flex-wrap">
      <!-- Share to  -->
      <v-dialog class="dialog" transition="slide-y-transition" max-width="300">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            class="ma-1"
            large
            elevation="2"
            width="201"
            color="transparent"
            v-bind="attrs"
            v-on="on"
          >
            <v-icon right> mdi-share-variant </v-icon>
            مشاركة الإعلان
          </v-btn>
        </template>
        <template v-slot:default="dialog">
          <v-card>
            <v-card-actions class="flex-column">
              <v-btn
                elevation="2"
                width="90%"
                large
                class="btn-share ma-0 my-2"
                text
              >
                واتس آب
                <v-avatar tile class="mr-2" size="30">
                  <img src="../assets/social/whatsapp.png" alt="alt" />
                </v-avatar>
              </v-btn>
              <v-btn
                elevation="2"
                large
                width="90%"
                class="btn-share ma-0 my-2"
                text
              >
                فيسبوك
                <v-avatar tile class="mr-2" size="30">
                  <img src="../assets/outsrc/facebook.png" alt="alt" />
                </v-avatar>
              </v-btn>
              <v-btn
                elevation="2"
                large
                width="90%"
                class="btn-copy-link ma-0 my-2"
                text
              >
                نسخ الرابط
              </v-btn>
            </v-card-actions>
            <v-card-actions class="justify-center">
              <v-btn
                class="v-btn-close"
                color="red"
                block
                @click="dialog.value = false"
              >
                أغلاق
              </v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
      <!-- save add  -->
      <v-btn
        class="ma-1"
        large
        elevation="2"
        width="201"
        color="transparent"
        v-bind="attrs"
        v-on="on"
      >
        <v-icon right> mdi-star-shooting </v-icon>
        إضافة الى المفضلة
      </v-btn>
    </v-card-actions>
  </div>
</template>
<script>
// import CarData from "../data-json/All-Car.json";
export default {
  name: "share",
  data() {
    return {
      // GetCarData: CarData,
      // carName: this.$route.params.carName,
      // carId: this.$route.params.carId,
    };
  },
  // computed: {
  //   getCarInfo() {
  //     let Carinformation = "";
  //     for (let i = 0; i < this.GetCarData.length; i++) {
  //       if (this.GetCarData[i].id == this.carId) {
  //         Carinformation = this.GetCarData[i];
  //         break;
  //       }
  //     }
  //     return Carinformation;
  //   },
  // },
};
</script>
<style lang="scss" scoped>
@import "@/scss/virables";
@import "@/scss/mixin";
.share {
  font-family: $fontfamliy !important;
  letter-spacing: 0;
  .v-btn {
    font-size: 18px;
    letter-spacing: 0;
    color: $fontcolor !important;
    font-family: $fontfamliy !important;
  }
}
.v-dialog__content.v-dialog__content--active::v-deep .v-dialog--active {
  margin: 5px !important;
}
.toolbar {
  font-family: $fontfamliy !important;
  font-size: 18px !important;
  letter-spacing: 0;
  font-weight: 600;
}
.v-btn-close {
  font-size: 18px !important;
  letter-spacing: 0;
  color: $fontcolorsm !important;
  font-family: $fontfamliy !important;
}
.btn-share {
  background: rgb(255, 255, 255) !important;
  color: $fontcolor;
  letter-spacing: 0;
  font-family: $fontfamliy;
  font-size: 18px !important;
  transition: transform 0.3s ease;
}
.btn-copy-link {
  background: $background !important;
  color: $fontcolorsm !important;
  letter-spacing: 0;
  font-family: $fontfamliy;
  font-size: 18px !important;
  transition: transform 0.3s ease;
}
.btn-report {
  background: #f44336 !important;
  color: $fontcolorsm !important;
  letter-spacing: 0;
  font-family: $fontfamliy;
  font-size: 16px !important;
  transition: transform 0.3s ease;
}
.v-icon {
  color: $fontcolorlinks !important;
}
.favorite {
  color: orange !important;
}
</style>
