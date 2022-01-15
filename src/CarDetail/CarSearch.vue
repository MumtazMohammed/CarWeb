<template>
  <div class="search">
    <div class="overlay"></div>
    <v-row justify="center">
      <v-flex md12 sm12>
        <v-card-title class="nav-link mb-2 pa-0">
          أبحث عن الـمزيد
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
      <v-flex md6 sm6 xs6 pl-1>
        <v-combobox dense solo :items="categories" label="  السيارة*">
        </v-combobox>
      </v-flex>
      <v-flex md6 sm6 xs6 pr-1>
        <v-combobox dense solo :items="categories" label=" الـفـئة*">
        </v-combobox>
      </v-flex>
    </v-row>
    <v-row justify="center">
      <v-flex md6 sm6 xs6 pl-1>
        <v-combobox dense solo :items="categories" label=" نوع السيارة*">
        </v-combobox>
      </v-flex>
      <v-flex md6 sm6 xs6 pr-1>
        <v-combobox dense solo :items="categories" label=" الـفـئة*">
        </v-combobox>
      </v-flex>
    </v-row>
    <v-row justify="center">
      <v-flex>
        <v-btn elevation="2" color="#f9f9f9">بـحـث</v-btn>
      </v-flex>
    </v-row>
  </div>
</template>
<script>
export default {
  name: "CarSearch",
  components: {},
  data() {
    return {
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
.search {
  width: 100%;
  position: relative;
  height: auto;
  padding: 30px;
  height: auto;
  z-index: 3;
  border-radius: 10px;
  overflow: hidden;

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(10px);
    background-color: #424242;
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
  button.v-btn.v-btn--is-elevated.v-btn--has-bg.theme--light.elevation-2.v-size--default {
    width: 100%;
    font-family: $fontfamliy;
    color: $fontcolor;
    font-size: 20px;
    letter-spacing: 0;
    font-weight: 500;
    font-weight: 500;
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
