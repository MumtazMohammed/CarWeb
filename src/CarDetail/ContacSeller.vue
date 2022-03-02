<template>
  <div class="ContactSeller">
    <v-row>
      <v-col cols="12" class="text-center btns">
        <v-card flat class="pa-5 btn-box">
          <!-- whatsaap  -->
          <v-btn
            outlined
            width="120"
            class="success btns-contact"
            @click.stop="(call = false), (whatsapp = true)"
          >
            وتس اب
          </v-btn>
          <v-snackbar
            elevation="16"
            text
            outlined
            shaped
            v-model="whatsapp"
            height="150px"
            width="350"
            min-width="200"
            transition="slide-x-transition"
            centered
            :vertical="vertical"
            color="success"
          >
            <div class="v-snack__content pa-0">whatsaap</div>
            <template class="snackbar-close" v-slot:action="{ attrs }">
              <v-btn
                color="success"
                icon
                v-bind="attrs"
                @click="whatsapp = false"
                class="snackbar-close"
              >
                <v-icon class="snackbar-close"> far fa-times-circle </v-icon>
              </v-btn>
              <v-btn
                color="success"
                icon
                v-bind="attrs"
                @click="whatsapp = false"
                class="snackbar-copy"
              >
                <v-icon class="snackbar-copy"> far fa-copy</v-icon>
              </v-btn>
            </template>
          </v-snackbar>
          <!-- telephone  -->
          <v-btn
            outlined
            width="120"
            class="info btns-contact"
            @click.stop="(call = true), (whatsapp = false)"
          >
            هاتف
          </v-btn>
          <v-snackbar
            elevation="16"
            text
            shaped
            transition="slide-x-transition"
            outlined
            height="150px"
            width="350"
            min-width="200"
            centered
            v-model="call"
            :vertical="vertical"
            color="info"
          >
            <div class="v-snack__content pa-0">call</div>
            <template v-slot:action="{ attrs }">
              <v-btn
                color="primary"
                icon
                v-bind="attrs"
                @click="call = false"
                class="snackbar-close"
              >
                <v-icon class="snackbar-close"> far fa-times-circle </v-icon>
              </v-btn>
              <v-btn
                color="primary"
                icon
                v-bind="attrs"
                @click="call = false"
                class="snackbar-copy"
              >
                <v-icon class="snackbar-copy"> far fa-copy</v-icon>
              </v-btn>
            </template>
          </v-snackbar>
        </v-card>
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
      vertical: false,
    };
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/virables";
@import "@/scss/mixin";
.btns-contact {
  color: rgb(255, 255, 255) !important;
  margin: 3px;
  font-family: $fontfamliy;
  letter-spacing: 0;
  font-size: 14px;
}
.btn-box {
  border-top-right-radius: 0px !important;
  border-top-left-radius: 0px !important;
  border-bottom-right-radius: 5px !important;
  border-bottom-left-radius: 5px !important;
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
}
.snackbar-close-owner {
  position: absolute;
  top: 0;
  right: 0;
  margin: 1px;
}
.snackbar-copy {
  position: absolute;
  top: 0;
  left: 0;
  margin: 1px;
}
.v-snack__content {
  text-align: center !important;
  font-size: 24px;
  font-family: $fontfamliy;
  justify-content: center;
}
</style>
