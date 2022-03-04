<template>
  <div class="ContactSeller">
    <v-row>
      <v-col cols="12" class="text-center btns">
        <v-card flat class="btn-box">
          <!-- contact seller  -->
          <v-btn
            large
            color="white"
            class="btns-contact"
            @click.stop="call = true"
          >
            تواصل مع البائع
          </v-btn>
          <v-snackbar
            elevation="5"
            v-model="call"
            height="350"
            width="400"
            min-width="200"
            transition="slide-x-transition"
            overlay="10"
            centered
            :vertical="vertical"
            color="#0881fa"
          >
            <div class="v-snack__content pa-0">
              <!-- phone Call  -->
              <v-card class="mb-3" flat color="transparent">
                <v-card-title class="pt-1 mb-3 contact-title">
                  هاتف :
                </v-card-title>
                <v-row class="mb-2">
                  <v-col cols="6" sm="4" md="4" class="py-1">
                    <v-btn color="#eee" class="grey--text text--darken-2">
                      02152102132
                    </v-btn>
                  </v-col>
                  <v-col cols="6" sm="4" md="4" class="py-1">
                    <v-btn color="#eee" class="grey--text text--darken-2">
                      02152102132
                    </v-btn>
                  </v-col>
                  <v-col cols="6" sm="4" md="4" class="py-1">
                    <v-btn color="#eee" class="grey--text text--darken-2">
                      02152102132
                    </v-btn>
                  </v-col>
                </v-row>
              </v-card>
              <v-divider></v-divider>
              <!-- whatsapp Call  -->
              <v-card class="mt-3" flat color="transparent">
                <v-card-title class="pt-1 contact-title">
                  وتس آب :
                </v-card-title>
                <v-row class="mt-1">
                  <v-col cols="6" sm="4" md="4" class="py-1">
                    <v-btn color="#eee" class="grey--text text--darken-2">
                      02152102132
                    </v-btn>
                  </v-col>
                  <v-col cols="6" sm="4" md="4" class="py-1">
                    <v-btn color="#eee" class="grey--text text--darken-2">
                      02152102132
                    </v-btn>
                  </v-col>
                  <v-col cols="6" sm="4" md="4" class="py-1">
                    <v-btn color="#eee" class="grey--text text--darken-2">
                      02152102132
                    </v-btn>
                  </v-col>
                </v-row>
              </v-card>
            </div>
            <template class="snackbar-close" v-slot:action="{ attrs }">
              <v-btn
                color="white"
                icon
                v-bind="attrs"
                @click="call = false"
                class="snackbar-close"
              >
                <v-icon class="snackbar-close"> far fa-times-circle </v-icon>
              </v-btn>
            </template>
          </v-snackbar>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import carInfo from "../data-json/All-Car.json";
export default {
  name: "ContactSeller",
  data() {
    return {
      carInfo,
      call: false,
      vertical: false,
    };
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/virables";
@import "@/scss/mixin";
.btns-contact {
  font-family: $fontfamliy;
  letter-spacing: 0;
  font-size: 17px !important;
  position: relative;
  border-color: $fontcolorlinks !important;
  color: $fontcolorlinks !important;
  z-index: 5;
  overflow: hidden;
  transition: all 0.3s ease;
}
.btns-contact::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 5px;
  background-color: #0881fa;
  z-index: -1;
  transition: all 0.3s ease;
}
.btns-contact:hover.btns-contact::after {
  width: 100%;
  height: 100%;
}
.btns-contact:hover {
  color: $fontcolorsm !important;
  border-color: transparent !important;
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
  margin: 1px;
  font-size: 24px;
}
.v-snack__content {
  text-align: center !important;
  font-size: 24px;
  font-family: $fontfamliy;
  justify-content: center;
}
.contact-title {
  font-family: $fontfamliy;
}
</style>
