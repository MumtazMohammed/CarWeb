<template>
  <div class="share">
    <v-card-actions class="pa-0 justify-center">
      <!-- Share to  -->
      <v-dialog
        class="dialog"
        transition="dialog-bottom-transition"
        max-width="300"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            class="px-3"
            large
            elevation="0"
            color="transparent"
            v-bind="attrs"
            v-on="on"
          >
            <v-icon right> mdi-share-variant </v-icon>
            مشاركة
          </v-btn>
        </template>
        <template v-slot:default="dialog">
          <v-card>
            <v-toolbar class="toolbar" color="primary" dark
              >قم بمشاركة هذا الإعلان</v-toolbar
            >
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
            <v-card-actions class="justify-start">
              <v-btn
                class="v-btn-close"
                large
                text
                @click="dialog.value = false"
                >أغلاق</v-btn
              >
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
      <!--  -->

      <!--report  -->
      <v-dialog
        class="dialog"
        transition="dialog-bottom-transition"
        max-width="300"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            class="px-3"
            large
            elevation="0"
            color="transparent"
            v-bind="attrs"
            v-on="on"
          >
            <v-icon right> mdi-alert-octagon </v-icon>
            إبلاغ
          </v-btn>
        </template>
        <template v-slot:default="dialog">
          <v-card>
            <v-toolbar class="toolbar" color="red" dark>
              البلاغ على هذا الاعلأن
            </v-toolbar>
            <v-card-actions class="justify-start">
              <v-checkbox
                class="my-0"
                v-model="ex4"
                color="indigo"
                value="indigo"
                hide-details
              ></v-checkbox>
              <v-card-text class="pa-0"> dscdscdsc </v-card-text>
            </v-card-actions>
            <v-card-actions class="justify-start">
              <v-checkbox
                class="my-0"
                v-model="ex4"
                color="indigo"
                value="indigo"
                hide-details
              ></v-checkbox>
              <v-card-text class="pa-0"> dscdscdsc </v-card-text>
            </v-card-actions>
            <v-card-actions class="justify-start">
              <v-checkbox
                class="my-0"
                v-model="ex4"
                color="indigo"
                value="indigo"
                hide-details
              ></v-checkbox>
              <v-card-text class="pa-0"> dscdscdsc </v-card-text>
            </v-card-actions>
            <v-card-actions class="justify-start">
              <v-checkbox
                class="my-0"
                v-model="ex4"
                color="indigo"
                value="indigo"
                hide-details
              ></v-checkbox>
              <v-card-text class="pa-0"> dscdscdsc </v-card-text>
            </v-card-actions>
            <v-card-actions class="justify-center">
              <v-btn
                elevation="0"
                width="70%"
                class="btn-report ma-0 my-2"
                text
              >
                إرسال البلأغ
              </v-btn>
            </v-card-actions>

            <v-card-actions class="justify-start">
              <v-btn
                class="v-btn-close"
                large
                text
                @click="dialog.value = false"
                >أغلاق</v-btn
              >
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
    </v-card-actions>
  </div>
</template>
<script>
export default {
  name: "share",
  data() {
    return {};
  },
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
  .v-icon {
    color: $fontcolorlinks !important;
    opacity: 0.8;
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
  color: red !important;
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
</style>
