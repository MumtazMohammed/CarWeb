<template>
  <v-dialog
    overlay-opacity=".9"
    class="dialog"
    v-model="dialog"
    persistent
    max-width="550"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        class="btn-car-search rounded-0 pr-0 pr-md-4 pr-lg-4"
        elevation="0"
        color="transparent"
        v-bind="attrs"
        v-on="on"
      >
        أبحث عن سيارة
      </v-btn>
    </template>
    <div class="search">
      <div class="overlay"></div>
      <v-col cols="12">
        <v-card-title class="search-text justify-center pa-0">
          أبحث عن سيارة
        </v-card-title>
      </v-col>
      <v-card-text class="py-1">
        <v-select label="الشركة" item-value="text" solo hide-details></v-select>
      </v-card-text>
      <v-card-text class="py-1">
        <v-select label="النوع" item-value="text" solo hide-details></v-select>
      </v-card-text>
      <v-card-text class="py-1">
        <v-select label="السنة" item-value="text" solo hide-details></v-select>
      </v-card-text>
      <v-card-text class="py-1">
        <v-select label="السعر" item-value="text" solo hide-details></v-select>
      </v-card-text>
      <v-card-text class="py-1">
        <v-select label="الحالة" item-value="text" solo hide-details></v-select>
      </v-card-text>
      <v-card-text class="py-1">
        <v-select
          label="المدينة"
          item-value="text"
          solo
          hide-details
        ></v-select>
      </v-card-text>
      <v-card-text class="py-1">
        <v-select
          label="طريقة الدفع"
          item-value="text"
          solo
          hide-details
        ></v-select>
      </v-card-text>
      <!-- search  -->
      <v-card-actions class="justify-center">
        <v-flex xs8 sm4 md4>
          <v-btn
            large
            class="btn-search elevation-0"
            block
            @click="dialog = false"
            elevation="2"
            color="white"
            >بـحـث</v-btn
          >
        </v-flex>
      </v-card-actions>
      <!-- close  -->
      <v-card-actions>
        <v-btn
          class="close"
          color="white  darken-1"
          text
          @click="dialog = false"
        >
          أغــلاق
        </v-btn>
      </v-card-actions>
    </div>
  </v-dialog>
</template>
<script>
export default {
  name: "Search",
  components: {},
  data() {
    return {
      dialog: false,
      row: null,
      conditions: ["مستعمل", "جديد"],
      provinces: [
        "صنعاء",
        "عدن",
        "حضرموت",
        "تعز",
        "الحديدة",
        "اب",
        "أبين",
        "البيضاء",
        "لحج",
        "مأرب",
        "شبوة",
        "الجوف",
        "المهرة",
        "المحويت",
        "صعده",
        "حجه",
        "الضالع",
        "عمران",
        "ذمار",
        "ريمة",
      ],
      categories: ["سـيـارات", "درجـات", "الأكترونيات", "مـمـتـلكات", "مـعدات"],
    };
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/virables";
@import "@/scss/mixin";

.border:focus {
  background-color: rgba(255, 255, 255, 0) !important;
}
.search {
  width: 100%;
  position: relative;
  height: auto;
  height: auto;
  z-index: 3;
  overflow: hidden;
  font-family: $fontfamliy !important;

  .close {
    font-family: $fontfamliy !important;
    letter-spacing: 0 !important;
    font-size: 18px;
  }
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: $color-1;
    // opacity: 0.9;
  }

  .v-input--selection-controls .v-input__slot > .v-label {
    font-family: "Tajawal", sans-serif !important;
  }
  .v-card__title.search-text {
    color: $fontcolorsm;
    position: relative;
    font-family: $fontfamliy;
    font-size: 20px;
    z-index: 1;
  }
  .btn-search {
    color: $fontcolor !important;
    font-family: $fontfamliy !important;
    font-size: 20px !important;
    letter-spacing: 0;
  }
}
.v-btn:not(.v-btn--round).v-size--default {
  color: $fontcolor;
  font-size: 17px;
  letter-spacing: 0;
  font-weight: 500;
  font-weight: 500;
}
.btn-car-search {
  color: #eee !important;
  font-size: 16px !important;
  font-weight: 500;
  font-family: $fontfamliy;
  letter-spacing: 0;
  width: 350px;
  transition: all 0.2s linear;
  @media (max-width: 960px) {
    height: 30px;

    width: 190px;
    font-size: 17px !important;
  }
  ::v-deep.v-btn__content {
    justify-content: start;
  }
}
button.btn-car-search
  .rounded-0.pr-0.pr-md-4.pr-lg-4.v-btn.v-btn--has-bg.theme--dark.elevation-0.v-size--large.transparent::v-deep
  .theme--dark.v-btn:focus:before {
  opacity: 0;
}

@media (max-width: 900px) {
  .v-card__title.search-text {
    font-size: 16px !important;
    font-weight: 700;
  }
}
@media (max-width: 770px) {
  .v-card__title.search-text {
    font-size: 18px !important;
    font-weight: 700;
  }
}
@media (max-width: 450px) {
  .v-card__title.search-text {
    font-size: 15px !important;
    font-weight: 700;
  }
}
::v-deep .v-dialog.v-dialog--active.v-dialog--persistent {
  @media (max-width: 500px) {
    margin: 5px !important;
  }
}
.btn-car-search::v-deep.v-btn:not(.v-btn--round).v-size--default {
  @media (min-width: 960px) {
    height: 44px;
  }
  @media (max-width: 960px) {
    height: 30px;
  }
}
</style>
