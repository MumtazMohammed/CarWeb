<template>
  <v-footer width="100%" max-height="150px" class="py-3 footer" padless>
    <v-row>
      <v-col cols="12" class="">
        <v-card color="transparent" class="card" flat tile>
          <v-card-text class="pa-0 brand-Privacy white--text">
            <a class="px-2">الأحكام والشروط </a>
            |
            <a class="px-2">السياسة الخصوصية</a>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" class="">
        <v-card color="transparent" class="flex card" flat tile>
          <v-card-text class="brand-logo justify-center text-center">
            <p class="px-2 ma-0" v-text="brand"></p>
            —
            {{ new Date().getFullYear() }}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-footer>
</template>
<script>
const components = {};
export default {
  name: "Footer",
  components,
  data: () => ({
    brand: "ثـقــة",
  }),
};
</script>
<style lang="scss" scoped>
@import "@/scss/virables";
@import "@/scss/mixin";
.footer {
  background-color: $background !important;
}
.brand-logo {
  letter-spacing: 0px;
  font-family: $fontfamliy;
  color: $fontcolorsm !important;
  font-size: 20px;
  display: flex;
  font-weight: 400;
}
.brand-Privacy {
  letter-spacing: 0px;
  font-family: $fontfamliy;
  font-size: 14px;
  display: flex;
  font-weight: 400;
  color: $fontcolor !important;
}
.theme--light.v-footer {
  color: rgba(0, 0, 0, 0.87);
}
</style>
