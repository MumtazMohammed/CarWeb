<template>
  <div class="selection">
    <v-container>
      <v-row>
        <v-col cols="12" md="6" sm="7">
          <v-img
            max-width="700px"
            max-height="400px"
            src="../assets/landing-new.7f188d1.png"
          >
          </v-img>
        </v-col>
        <v-col cols="12" md="6" sm="4"><ToSellYourCarInfo /> </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import ToSellYourCarInfo from "../A-Home/ToSellYourCarInfo.vue";

export default {
  name: "ToSellYourCarLayout",
  components: { ToSellYourCarInfo },
  data() {
    return {
      row: null,
    };
  },
};
</script>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;500;700;800;900&display=swap");
@import "@/scss/virables";
@import "@/scss/mixin";
.selection {
  width: 100%;
  min-height: calc(100vh - 125px);
  padding: $padding;
  .v-input--selection-controls .v-input__slot > .v-label {
    font-family: "Tajawal", sans-serif !important;
  }
  button.v-btn.v-btn--is-elevated.v-btn--has-bg.theme--light.elevation-2.v-size--default {
    width: 100%;
    background-color: #009688;
    font-family: "Tajawal", sans-serif;
    color: $fontcolorsm;
    font-size: 18px;
    letter-spacing: 0;
    font-weight: 500;
  }
}
</style>
