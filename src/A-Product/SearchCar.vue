<template>
  <div class="selection">
    <v-container>
      <v-row>
        <v-col cols="12" sm="12" md="7" lg="6">
          <Category />
        </v-col>
        <v-col cols="12" sm="12" md="5" lg="6"> </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import Category from "../CarSearch/Category.vue";
export default {
  name: "Search",
  components: {
    Category,
  },
  data() {
    return {
      row: null,
    };
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/virables";
@import "@/scss/mixin";
.selection {
  background-image: url(../assets/product-background.jpeg);
  width: 100%;
  height: auto;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 20px 0;
  .v-input--selection-controls .v-input__slot > .v-label {
    font-family: $fontfamliy !important;
  }
  button.v-btn.v-btn--is-elevated.v-btn--has-bg.theme--light.elevation-2.v-size--default {
    width: 100%;
    background-color: #009688;
    font-family: $fontfamliy;
    color: $fontcolorsm;
    font-size: 18px;
    letter-spacing: 0;
    font-weight: 500;
  }
}
</style>
