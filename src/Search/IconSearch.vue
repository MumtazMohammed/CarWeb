<template>
  <v-dialog
    overlay-opacity=".9"
    class="dialog"
    v-model="dialog"
    persistent
    max-width="650"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        class="icon-serach"
        v-bind:class="{
          'icon-serach': scrollPosition < 600,
          'is-hidden': scrollPosition > 600,
        }"
        x-large
        elevation="6"
        icon
        ref="button"
        v-bind="attrs"
        v-on="on"
      >
        <v-icon class="icon">fa-search</v-icon>
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
          :items="select3"
          label="السنة"
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
          :items="select"
          label="الحالة"
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
          :items="select"
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
  name: "IconSearch",
  components: {},
  data() {
    return {
      dialog: false,
      row: null,
      scrollPosition: null,
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
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
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
.icon-serach {
  position: fixed;
  bottom: 71px;
  right: 8px;
  z-index: 5;
  overflow: hidden;
  background: $color-1 !important;
  opacity: 0;
  pointer-events: none;
  transform: scale(1.2);
  transition: all 0.4s 0s ease !important;
  @media (max-width: 600px) {
    bottom: 70px;
  }
  .icon {
    color: $fontcolorsm !important;
    font-size: 17px !important;
    transition: all 0.4s 0s ease !important;
    position: relative;
    z-index: 5;
  }
}
.is-hidden {
  opacity: 1;
  pointer-events: auto;
  transform: scale(0.9);
  @media (max-width: 600px) {
    transform: scale(0.8);
  }
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
.nav-linkk:hover {
  color: $fontcolor !important;
}
.nav-linkk::v-deep.theme--light.v-btn:hover:before {
  opacity: 0;
}
.nav-linkk::v-deep.theme--light.v-btn:focus:before {
  opacity: 0;
}
.nav-linkk:hover .icon-search {
  color: $fontcolor !important;
}
</style>
