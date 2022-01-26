<template>
  <div class="FilterSection">
    <v-row>
      <v-col class="px-0" cols="12" md="3" sm="6">
        <v-select
          :items="items"
          label="ترتيب السعر من"
          hide-details
          dense
          class="select-price"
          color="grey"
          outlined
          flat
        ></v-select>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  name: "Filter",
  data() {
    return {
      items: [" الأعلى سعرا", "الأقل سعرا"],
    };
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/virables";
@import "@/scss/mixin";
.vuetify-class {
  ::v-deep other-class {
    // your custom css properties
  }
}
.FilterSection {
  width: 100%;
}
.select-price {
  font-family: $fontfamliy;
  font-weight: 500;
}
</style>
