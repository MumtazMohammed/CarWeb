<template>
  <div class="CarFillter">
    <v-row>
      <!-- <v-col cols="12" md="5" sm="6" class="card-actions">
        <v-card-actions class="justify-center pa-0">
          <v-btn
            elevation="0"
            width="100%"
            class="btn-open-search"
            large
            @click="expand = !expand"
          >
            فلتر البحث
            <v-spacer></v-spacer>
            <v-icon
              class="btn-search-icon"
              v-text="expand == true ? 'mdi-chevron-up' : 'mdi-chevron-down'"
            ></v-icon>
          </v-btn>
        </v-card-actions>
        <v-expand-transition>
          <v-card class="search-card" v-show="expand" height="auto">
            <v-card-text class="py-1">
              <v-select
                :items="select"
                label="الحالة"
                item-value="text"
                solo
                hide-details
              ></v-select>
            </v-card-text>
            <v-card-text class="py-1">
              <v-select
                :items="select"
                label="طريقة الدفع"
                item-value="text"
                solo
                hide-details
              ></v-select>
            </v-card-text>
            <v-card-text class="py-1">
              <v-select
                :items="select"
                label="الشركة"
                item-value="text"
                solo
                hide-details
              ></v-select>
            </v-card-text>
            <v-card-text class="py-1">
              <v-select
                :items="select2"
                label="النوع"
                item-value="text"
                solo
                hide-details
              ></v-select>
            </v-card-text>
            <v-card-text class="py-1">
              <v-select
                :items="select2"
                label="المدينة"
                item-value="text"
                solo
                hide-details
              ></v-select>
            </v-card-text>

            <v-card-text class="py-1">
              <v-select
                :items="selectP"
                label="السعر"
                item-value="text"
                solo
                hide-details
              ></v-select>
            </v-card-text>
            <v-card-text class="py-1">
              <v-select
                :items="select3"
                label="السنة"
                item-value="text"
                solo
                hide-details
              ></v-select>
            </v-card-text>
            <v-card-actions>
              <v-btn
                class="btn-search"
                color="primary"
                text
                large
                @click="expand = false"
              >
                بحث
              </v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-expand-transition>
      </v-col> -->
      <v-col cols="12" md="3" sm="5" class="">
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
      <v-col cols="12" md="3" sm="5" class="">
        <v-select
          :items="years"
          label="ترتيب السنة من  "
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
import StoreProducts from "../data-json/StoreProducts.json";
export default {
  name: "ClientProductCategories",
  components: {},
  data() {
    return {
      expand: false,
      ExpandPrice: false,
      StoreProducts,
      items: [" الأعلى سعرا", "الأقل سعرا"],
      years: [" الأجدد  إلى الأقدم  ", "  الأقدم إلى الأجدد "],
    };
  },

  methods: {
    setSelectedValue(event) {
      this.selectedValue = event.target.selectedOptions[0].value;
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/virables";
@import "@/scss/mixin";
.CarFillter {
  width: 100%;
  font-family: $fontfamliy;
  position: relative;

  .btn-open-search {
    font-size: 17px;
    font-family: $fontfamliy;
    letter-spacing: 0;
    color: $fontcolorsm;
    background-color: $color-1 !important;
    .btn-search-icon {
      transition: all 0.5s ease !important;
    }
  }
}
.card-actions {
  position: relative;
}
.search-card {
  position: absolute;
  right: left;
  z-index: 10;
  width: calc(100% - 24px);
  @media (max-width: 600px) {
    width: calc(100% - 0px);
    position: relative;
  }
  .btn-search {
    font-family: $fontfamliy;
    font-size: 18px;
    letter-spacing: 0;
  }
}
.btn-open-price {
  font-size: 17px !important;
  font-family: $fontfamliy;
  letter-spacing: 0;
  font-weight: 300;
  color: #00000099 !important;
  background-color: #fff !important;
}
</style>
