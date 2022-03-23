<template>
  <div class="editPost">
    <v-container>
      <v-row class="justify-center">
        <v-col cols="12">
          <v-card class="overflow-hidden">
            <v-toolbar>
              <v-toolbar-title class="title grey--text">
                مـازدا مازدا3
              </v-toolbar-title>
              <v-spacer></v-spacer>
              <v-btn
                color="red darken-3"
                :to="{
                  name: 'UserAdd',
                }"
                fab
                dark
                elevation="0"
                small
              >
                <v-icon> mdi-close </v-icon>
              </v-btn>
            </v-toolbar>
            <v-card-text>
              <v-row>
                <v-col cols="12" md="6" class="py-0">
                  <v-card-title class="justify-center pa-2">
                    صورة السيارة لواجهة الأعلان
                  </v-card-title>
                  <v-file-input
                    chips
                    counter
                    small-chips
                    truncate-length="15"
                    solo
                  ></v-file-input>
                </v-col>
                <v-col cols="12" md="6" class="py-0">
                  <v-card-title class="justify-center pa-2">
                    جميع صور السيارة
                  </v-card-title>
                  <v-file-input
                    chips
                    counter
                    multiple
                    small-chips
                    truncate-length="15"
                    solo
                  ></v-file-input>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" md="6">
                  <v-autocomplete
                    solo
                    :items="states"
                    :filter="customFilter"
                    color="white"
                    item-text="name"
                    label="الشركة"
                    hide-details="true"
                  ></v-autocomplete>
                </v-col>
                <v-col cols="12" md="6">
                  <v-autocomplete
                    solo
                    :items="states"
                    :filter="customFilter"
                    color="white"
                    item-text="name"
                    label="النوع"
                    hide-details="true"
                  ></v-autocomplete>
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                    hide-details="true"
                    solo
                    color="white"
                    label="الـفئة"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-autocomplete
                    solo
                    :items="states"
                    :filter="customFilter"
                    color="white"
                    item-text="name"
                    label="سنة الصنع"
                    hide-details="true"
                  ></v-autocomplete>
                </v-col>
                <v-col cols="12" md="6">
                  <v-autocomplete
                    solo
                    :items="states"
                    :filter="customFilter"
                    color="white"
                    item-text="name"
                    label="الوارد"
                    hide-details="true"
                  ></v-autocomplete>
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                    solo
                    color="white"
                    label="لـون الـمركبه"
                    hide-details="true"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-autocomplete
                    solo
                    :items="states"
                    :filter="customFilter"
                    color="white"
                    item-text="name"
                    label="نوع القير"
                    hide-details="true"
                  ></v-autocomplete>
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                    solo
                    color="white"
                    label="حجم الـمحرك"
                    hide-details="true"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-autocomplete
                    solo
                    :items="states"
                    :filter="customFilter"
                    color="white"
                    item-text="name"
                    label="نـوع الـدفع"
                    hide-details="true"
                  ></v-autocomplete>
                </v-col>
                <v-col cols="12" md="6">
                  <v-autocomplete
                    solo
                    :items="states"
                    :filter="customFilter"
                    color="white"
                    item-text="name"
                    label="حـالـة الـسيارة"
                    hide-details="true"
                  ></v-autocomplete>
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                    solo
                    color="white"
                    label="نوع الوقود"
                    hide-details="true"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-autocomplete
                    solo
                    :items="states"
                    :filter="customFilter"
                    color="white"
                    item-text="name"
                    label="المواصفات"
                    hide-details="true"
                  ></v-autocomplete>
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                    hide-details="true"
                    solo
                    color="white"
                    label="الـممشى"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                    solo
                    color="white"
                    label="المنطقة"
                    hide-details="true"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-textarea
                    solo
                    no-resize
                    rows="5"
                    color="white"
                    label=" مزيد من التفاصيل"
                    hide-details="true"
                  ></v-textarea>
                </v-col>
              </v-row>
              <v-divider></v-divider>
              <!-- Contact number  -->
              <v-card flat class="px-6">
                <v-row class="mt-4 justify-center">
                  <!-- Phone Number  -->
                  <v-col cols="12" md="3" sm="4">
                    <v-card-subtitle class="pa-1">رقم الهاتف :</v-card-subtitle>
                    <v-text-field
                      solo
                      color="white"
                      label="الهاتف"
                      hide-details="true"
                    ></v-text-field>
                  </v-col>
                  <!-- Whatsapp Number  -->
                  <v-col cols="12" md="3" sm="4">
                    <v-card-subtitle class="pa-1"
                      >رقم الوتس آب :</v-card-subtitle
                    >
                    <v-text-field
                      solo
                      color="white"
                      label="الوتس آب"
                      hide-details="true"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-card>
              <!-- price  -->
              <v-card-text class="red--text text"
                >* رجاء ادخل السعر بريال اليمني.
              </v-card-text>
              <v-card-actions class="justify-center">
                <v-card flat>
                  <v-card-text class="text-center text py-2">
                    سعر السيارة كاش
                  </v-card-text>
                  <div class="cash-price-box">
                    <input class="cash-price" name="cash-price" type="number" />
                    <label class="label" for="cash-price">ريال</label>
                  </div>
                </v-card>
              </v-card-actions>
            </v-card-text>
            <!-- Instalments  -->
            <v-col cols="3">
              <v-checkbox
                v-model="ex4"
                label="أقساط "
                color="primary"
                hide-details
                class="mt-0"
                @click="Instalment = !Instalment"
              ></v-checkbox>
            </v-col>
            <v-card-actions class="justify-center flex-wrap">
              <v-card
                :disabled="Instalment"
                width="250"
                outlined
                class="ma-1"
                flat
              >
                <v-card-text class="text-center text py-2">
                  القسط الشهري
                </v-card-text>
                <v-text-field type="number" hide-details="true"> </v-text-field>
              </v-card>
              <v-card
                :disabled="Instalment"
                width="250"
                outlined
                class="ma-1"
                flat
              >
                <v-card-text class="text-center text py-2">
                  مدة القسط بعدد الأشهر
                </v-card-text>
                <v-text-field type="number" hide-details="true"> </v-text-field>
              </v-card>
              <v-card
                :disabled="Instalment"
                width="250"
                outlined
                class="ma-1"
                flat
              >
                <v-card-text class="text-center text py-2">
                  الدفعة الأولى
                </v-card-text>
                <v-text-field type="number" hide-details="true"> </v-text-field>
              </v-card>
              <v-card
                :disabled="Instalment"
                outlined
                width="250"
                class="ma-1"
                flat
              >
                <v-card-text class="text-center text py-2">
                  الدفعة الأخيرة
                </v-card-text>
                <v-text-field type="number" hide-details="true"> </v-text-field>
              </v-card>
            </v-card-actions>
            <v-divider class="my-2"></v-divider>
            <v-card-actions class="justify-center">
              <v-btn
                large
                width="200"
                class="btn"
                color="success"
                @click="save"
              >
                حفظ
              </v-btn>
            </v-card-actions>
            <v-snackbar
              color="success "
              v-model="hasSaved"
              :timeout="2000"
              app
              centered
            >
              <v-card-title class="title pa-1"> تم حفظ التعديل </v-card-title>
            </v-snackbar>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  props: ["hidden"],
  data() {
    return {
      hasSaved: false,
      model: null,
      show: true,
      Instalment: true,
      states: [
        { name: "Florida", abbr: "FL", id: 1 },
        { name: "Georgia", abbr: "GA", id: 2 },
        { name: "Nebraska", abbr: "NE", id: 3 },
        { name: "California", abbr: "CA", id: 4 },
        { name: "New York", abbr: "NY", id: 5 },
      ],
    };
  },

  methods: {
    customFilter(item, queryText) {
      const textOne = item.name.toLowerCase();
      const textTwo = item.abbr.toLowerCase();
      const searchText = queryText.toLowerCase();

      return (
        textOne.indexOf(searchText) > -1 || textTwo.indexOf(searchText) > -1
      );
    },
    save() {
      this.hasSaved = true;
    },
    ShowHidden(event) {
      this.show == event.target.value;
      this.$emit("ShowTheHidden", this.show);
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../scss/virables";
@import "../scss/mixin";
.editPost {
  font-family: $fontfamliy !important;
  letter-spacing: 0;
  padding: $padding;
}
.btn {
  font-family: $fontfamliy !important;
  letter-spacing: 0 !important;
  font-size: 22px !important;
}
.v-card__title.title.pa-1 {
  font-family: $fontfamliy !important;
  letter-spacing: 0 !important;
  font-size: 22px !important;
}
::v-deep.v-toolbar__title.title.grey--text {
  font-family: $fontfamliy !important;
  letter-spacing: 0 !important;
  font-size: 22px !important;
}
.cash-price-box {
  height: 50px;
  border: 1px solid gray;
  @include flexcenter();
  border-radius: 5px;
  padding: 5px;
  .cash-price {
    font-size: 18px;
  }
  .cash-price:focus {
    outline: none;
  }
  .cash-price:focus-visible {
    outline: none;
  }
  .label {
    margin-right: 5px;
  }
}
</style>
