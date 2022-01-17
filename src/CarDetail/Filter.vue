<template>
  <div class="FilterSection">
    <v-container>
      <v-row justify="end">
        <v-col class="pa-0" cols="12" md="2" sm="4">
          <v-select
            :items="items"
            label="ترتيب السعر من"
            hide-details
            dense
            class="select-price"
            color="#ffc107"
            outlined
            flat
          ></v-select>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
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
.select-price {
  font-family: $fontfamliy;
  font-weight: 500;
}
</style>
