<template>
  <v-dialog v-model="dialog" persistent max-width="650">
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        class="nav-linkk rounded-0"
        elevation="0"
        large
        dark
        plain
        v-bind="attrs"
        v-on="on"
      >
        <v-icon left class="icon-search">fa-search</v-icon>

        أبحث عن سيارتك
      </v-btn>
    </template>
    <div class="search">
      <div class="overlay"></div>
      <v-row justify="center">
        <v-flex md12 sm12>
          <v-card-title class="search-text mb-2 pa-0">
            أبحث عن سيارات جديدة او مستعملة
          </v-card-title>
        </v-flex>
      </v-row>
      <v-row justify="center">
        <v-flex md12 sm12 xs12>
          <v-combobox dense solo :items="conditions" label=" حالة السيارة*">
          </v-combobox>
        </v-flex>
      </v-row>
      <v-row justify="center">
        <v-flex md6 sm6 xs12 class="pl-md-1 pl-sm-1">
          <v-combobox dense solo :items="categories" label="  السيارة*">
          </v-combobox>
        </v-flex>
        <v-flex md6 sm6 xs12 class="pr-md-1 pr-sm-1">
          <v-combobox dense solo :items="categories" label=" الـفـئة*">
          </v-combobox>
        </v-flex>
      </v-row>
      <v-row justify="center">
        <v-flex md6 sm6 xs12 class="pl-md-1 pl-sm-1">
          <v-combobox dense solo :items="categories" label=" نوع السيارة*">
          </v-combobox>
        </v-flex>
        <v-flex md6 sm6 xs12 class="pr-md-1 pr-sm-1">
          <v-combobox dense solo :items="categories" label=" الـفـئة*">
          </v-combobox>
        </v-flex>
      </v-row>
      <!-- search  -->
      <v-row justify="center">
        <v-flex xs8 sm4 md4>
          <v-btn
            width="100%"
            class="btn-search"
            outlined
            @click="dialog = false"
            elevation="2"
            color="#eee"
            >بـحـث</v-btn
          >
        </v-flex>
      </v-row>
      <!-- close  -->
      <v-row justify="start">
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            class="close"
            color="white  darken-1"
            text
            @click="dialog = false"
          >
            أغــلاق
          </v-btn>
        </v-card-actions>
      </v-row>
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
  padding: 30px;
  height: auto;
  z-index: 3;
  overflow: hidden;

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
    background-color: $background;
    opacity: 0.9;
  }

  .v-input--selection-controls .v-input__slot > .v-label {
    font-family: "Tajawal", sans-serif !important;
  }
  .v-card__title.search-text {
    color: $fontcolorsm;
    position: relative;
    font-family: "Tajawal", sans-serif;
    font-size: 20px;
    z-index: 1;
  }
}
.v-btn:not(.v-btn--round).v-size--default {
  color: $fontcolor;
  font-size: 17px;
  letter-spacing: 0;
  font-weight: 500;
  font-weight: 500;
}
.nav-linkk {
  color: $fontcolor !important;
  font-size: 17px !important;
  font-weight: 600;
  font-family: "Tajawal", sans-serif;
  letter-spacing: 0;

  border-right: 2px solid #a2a2a28d !important;
  @media (max-width: 600px) {
    font-size: 15px !important;
    margin-right: 5px;
  }

  .icon-search {
    color: $fontcolor !important;
    font-size: 15px !important;

    @media (max-width: 600px) {
      font-size: 15px !important;
      margin-left: 2px !important;
    }
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
    font-size: 13px !important;
    font-weight: 700;
  }
}
</style>
