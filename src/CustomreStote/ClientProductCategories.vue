<template>
  <div class="ClientProductCategories">
    <v-card-actions class="justify-center card-actions pa-0">
      <v-btn
        elevation="0"
        width="100%"
        class="btn-open-search"
        dark
        @click="expand = true"
      >
        فلتر القطع بحسب موديل سيارتك
        <v-spacer></v-spacer>
        <v-icon
          class="btn-search-icon"
          v-text="expand == true ? 'mdi-chevron-up' : 'mdi-chevron-down'"
        ></v-icon>
      </v-btn>
    </v-card-actions>
    <v-expand-transition>
      <v-card class="search-card" v-show="expand" height="auto" width="100%">
        <v-card-title class="py-1"> الشركة </v-card-title>
        <v-card-text>
          <v-select
            :items="select"
            label="A Select List"
            item-value="text"
            solo
            hide-details
          ></v-select>
        </v-card-text>
        <v-card-title class="py-1"> النوع </v-card-title>
        <v-card-text>
          <v-select
            :items="select2"
            label="A Select List"
            item-value="text"
            solo
            hide-details
          ></v-select>
        </v-card-text>
        <v-card-title class="py-1"> السنة </v-card-title>
        <v-card-text>
          <v-select
            :items="select3"
            label="A Select List"
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
          <v-btn
            class="btn-close"
            color="red"
            large
            text
            @click="expand = false"
          >
            أغلاق
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-expand-transition>
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
      StoreProducts,
      select: [
        { text: "State 1" },
        { text: "State 2" },
        { text: "State 3" },
        { text: "State 4" },
        { text: "State 5" },
        { text: "State 6" },
        { text: "State 7" },
      ],
      select2: [
        { text: "State 1" },
        { text: "State 2" },
        { text: "State 3" },
        { text: "State 4" },
        { text: "State 5" },
        { text: "State 6" },
        { text: "State 7" },
      ],
      select3: [
        { text: "State 1" },
        { text: "State 2" },
        { text: "State 3" },
        { text: "State 4" },
        { text: "State 5" },
        { text: "State 6" },
        { text: "State 7" },
      ],
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
.ClientProductCategories {
  width: 100%;
  font-family: $fontfamliy;
  position: relative;

  .search-card {
    position: absolute;
    left: 0;
    z-index: 10;
    .btn-search,
    .btn-close {
      font-family: $fontfamliy;
      font-size: 18px;
      letter-spacing: 0;
    }
  }
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
</style>
