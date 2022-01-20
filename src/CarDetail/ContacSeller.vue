<template>
  <!-- this component will be under the image  -->
  <div class="ContactSeller">
    <v-row>
      <v-col cols="12" class="text-center btns">
        <v-card color="transparent" flat class="pa-5 rounded-0">
          <!-- owner  -->
          <v-btn
            width="120"
            color=""
            outlined
            class="grey darken-2 btns-contact"
            @click.stop="owner = true"
          >
            معلومات
          </v-btn>
          <v-snackbar
            height="250px"
            min-width="500"
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
            height="250px"
            min-width="500"
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
            height="250px"
            min-width="500"
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
          height="250px"
          min-width="500"
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
              color="white"
              icon
              v-bind="attrs"
              @click="gmail = false"
              class="snackbar-copy"
            >
              <v-icon class="snackbar-copy"> far fa-copy</v-icon>
            </v-btn>
          </template>
        </v-snackbar>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  name: "ContactSeller",

  data() {
    return {
      call: false,
      gmail: false,
      whatsapp: false,
      owner: false,
    };
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/virables";
@import "@/scss/mixin";
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
  margin: 5px;
}
.snackbar-close-owner {
  position: absolute;
  top: 0;
  right: 0;
  margin: 5px;
}
.snackbar-copy {
  position: absolute;
  top: 0;
  left: 0;
  margin: 5px;
}
.v-snack__content {
  text-align: center !important;
  font-size: 24px;
  font-family: $fontfamliy2;
}
</style>
