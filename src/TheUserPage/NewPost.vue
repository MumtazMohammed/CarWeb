<template>
  <div class="NewPost">
    <v-container>
      <v-row class="justify-center">
        <v-col cols="12">
          <v-card class="overflow-hidden pa-4">
            <v-card-text>
              <v-row>
                <v-col cols="12" md="6" class="">
                  <v-card outlined class="pa-1 rounded-b-0" height="300">
                    <v-card-title class="justify-center pa-2">
                      صورة السيارة لواجهة الأعلان
                    </v-card-title>
                    <v-card-actions class="justify-center pa-0 flex-wrap">
                      <v-img
                        max-height="200"
                        contain
                        src="https://images.pexels.com/photos/1335077/pexels-photo-1335077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="https://images.pexels.com/photos/1335077/pexels-photo-1335077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      />
                      <!-- image click  -->
                    </v-card-actions>
                  </v-card>
                  <v-card outlined color="" class="rounded-t-0" height="70">
                    <v-card-actions class="main-image">
                      <v-file-input
                        chips
                        counter
                        small-chips
                        truncate-length="15"
                        solo
                        :disabled="disabled"
                        hide-details="true"
                        placeholder="إضافة الصورة الرئيسية"
                      ></v-file-input>
                    </v-card-actions>
                  </v-card>
                </v-col>
                <v-col cols="12" md="6" class="">
                  <v-card outlined class="pa-1 rounded-b-0" height="320">
                    <v-card-title class="justify-center pa-2">
                      جميع صور السيارة
                    </v-card-title>
                    <v-card-actions class="justify-center pa-0 flex-wrap">
                      <v-img
                        class="grey darken-4"
                        max-height="200"
                        contain
                        :src="ActiveImage"
                      ></v-img>
                      <!-- image click  -->
                      <v-chip-group
                        show-arrows
                        center-active
                        active-class="blue white--text "
                      >
                        <div
                          class="pa-1 ma-1 card-chip"
                          v-for="(item, i) in items"
                          :key="i"
                        >
                          <v-btn small dark icon class="red darken-1">
                            <v-icon>mdi-close</v-icon>
                          </v-btn>
                          <v-chip
                            @click="ActiveImage = item.src"
                            class="chip ma-1"
                          >
                            {{ item.text }}
                          </v-chip>
                        </div>
                      </v-chip-group>
                    </v-card-actions>
                  </v-card>
                  <v-card flat outlined class="rounded-t-0" height="50">
                    <v-card-actions class="justify-center">
                      <v-btn
                        icon
                        elevation="0"
                        class="grey--text text--darken-1"
                      >
                        <v-file-input
                          chips
                          counter
                          multiple
                          small-chips
                          truncate-length="15"
                          solo
                          hide-input
                          placeholder="إضافة الصور"
                        ></v-file-input>
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" md="6">
                  <v-autocomplete
                    solo
                    color="white"
                    item-text="name"
                    label="الشركة"
                    hide-details="true"
                  ></v-autocomplete>
                </v-col>
                <v-col cols="12" md="6">
                  <v-autocomplete
                    solo
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
                    color="white"
                    item-text="name"
                    label="سنة الصنع"
                    hide-details="true"
                  ></v-autocomplete>
                </v-col>
                <v-col cols="12" md="6">
                  <v-autocomplete
                    solo
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
                    color="white"
                    item-text="name"
                    label="نـوع الـدفع"
                    hide-details="true"
                  ></v-autocomplete>
                </v-col>
                <v-col cols="12" md="6">
                  <v-autocomplete
                    solo
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
                  <v-card outlined tile class="overflow-hidden">
                    <v-expansion-panels class="" focusable accordion>
                      <v-expansion-panel
                        class="pa-0"
                        v-for="(item, i) in MultipleDescription"
                        :key="i"
                      >
                        <v-expansion-panel-header class="disc-title">
                          {{ item.Title }}
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>
                          <ul class="expansion-panel-content">
                            <li>
                              <v-text-field
                                v-model="first"
                                outlined
                                dense
                                :hide-details="true"
                              ></v-text-field>
                            </li>
                            <li>
                              <v-text-field
                                v-model="first"
                                outlined
                                dense
                                :hide-details="true"
                              ></v-text-field>
                            </li>
                            <li>
                              <v-text-field
                                v-model="first"
                                outlined
                                dense
                                :hide-details="true"
                              ></v-text-field>
                            </li>
                            <li>
                              <v-text-field
                                v-model="first"
                                outlined
                                dense
                                :hide-details="true"
                              ></v-text-field>
                            </li>
                          </ul>
                          <v-card-actions>
                            <v-btn small elevation="0" dark color="grey">
                              <v-icon>mdi-plus</v-icon>
                            </v-btn>
                          </v-card-actions>
                        </v-expansion-panel-content>
                      </v-expansion-panel>
                    </v-expansion-panels>
                  </v-card>
                </v-col>
              </v-row>
            </v-card-text>
            <v-row>
              <v-col cols="12">
                <v-card-actions class="justify-center flex-wrap">
                  <v-card width="500" outlined class="pa-2">
                    <v-select
                      :items="currency"
                      label="أختار العملة"
                      hide-details="true"
                      hide-selected
                      solo
                      filled
                    ></v-select>
                    <v-text-field label="السعر" hide-details="true">
                    </v-text-field>
                    <!-- if the user enter Instalments payment -->
                    <div v-if="checkbox1">
                      <v-text-field label="القسط الشهري" hide-details="true">
                      </v-text-field>
                      <v-text-field
                        label="مدة القسط بعدد الأشهر"
                        hide-details="true"
                      >
                      </v-text-field>
                      <v-text-field label="الدفعة الأولى" hide-details="true">
                      </v-text-field>
                      <v-text-field label="الدفعة الأخيرة" hide-details="true">
                      </v-text-field>
                    </div>
                    <v-checkbox v-model="checkbox1" label="إقساط"></v-checkbox>
                  </v-card>
                </v-card-actions>
              </v-col>
              <!-- Phone Number  -->
              <v-col cols="12">
                <v-row>
                  <v-col cols="6">
                    <v-card flat>
                      <v-text-field
                        class="my-1"
                        filled
                        color="blue"
                        label="الهاتف 1"
                        hide-details="true"
                      ></v-text-field>
                      <v-text-field
                        class="my-1"
                        filled
                        color="blue"
                        label="الهاتف 2"
                        hide-details="true"
                      ></v-text-field>
                    </v-card>
                  </v-col>
                  <!-- Whatsapp Number  -->
                  <v-col cols="6">
                    <v-card flat>
                      <v-text-field
                        class="my-1"
                        filled
                        color="success"
                        label="الوتس آب 1"
                        hide-details="true"
                      ></v-text-field>
                      <v-text-field
                        class="my-1"
                        filled
                        color="success"
                        label="الوتس آب 2"
                        hide-details="true"
                      ></v-text-field>
                    </v-card>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
        <v-col cols="12">
          <v-card-actions class="justify-center">
            <v-btn large width="200" class="btn" color="success" @click="save">
              نشر
            </v-btn>
          </v-card-actions>
          <v-snackbar
            color="success "
            v-model="hasSaved"
            :timeout="2000"
            app
            centered
          >
            <v-card-title class="title pa-1"> تم نشر الأعلان </v-card-title>
          </v-snackbar>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  name: "NewPost",
  data() {
    return {
      hasSaved: false,
      Instalment: false,
      checkbox1: false,
      currency: ["دولار إمريكي", "ريال يمني", "ريال سعودي"],
      ActiveImage: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
      items: [
        {
          text: "إعلان موقع 1",
          src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
        },
        {
          text: "إعلان موقع 2",
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
        },
        {
          text: "إعلان شركة أدهن ",
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
        },
        {
          text: "إعلان شركة تئمينات الحياء ",
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
        },
      ],
      MainImage: [
        {
          text: "إعلان موقع 1",
          src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
        },
      ],
      MultipleDescription: [
        {
          Title: "الامان",
        },
        {
          Title: "الراحة",
        },
        {
          Title: "تقنيات",
        },
        {
          Title: "تجهيزات خارجية",
        },
      ],
    };
  },
  methods: {
    save() {
      this.hasSaved = true;
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/virables";
@import "@/scss/mixin";
.NewPost {
  font-family: $fontfamliy !important;
  letter-spacing: 0;
  padding: $padding;
}
.btn {
  font-family: $fontfamliy !important;
  letter-spacing: 0 !important;
  font-size: 18px !important;
}
.btn-feature {
  font-family: $fontfamliy !important;
  letter-spacing: 0 !important;
  font-size: 12px !important;
}
::v-deep .v-toolbar__title.title {
  font-family: $fontfamliy !important;
  letter-spacing: 0 !important;
  font-size: 17px !important;
  font-weight: 500;
}
::v-deep .v-card__title.title.pa-1 {
  font-family: $fontfamliy !important;
  letter-spacing: 0 !important;
  font-size: 20px !important;
  font-weight: 500;
}
.text {
  font-family: $fontfamliy !important;
  letter-spacing: 0 !important;
  font-size: 17px !important;
  font-weight: 500;
}
::v-deep .v-list-item .v-list-item__title {
  font-family: $fontfamliy !important;
  letter-spacing: 0 !important;
}
::v-deep .v-text-field.v-text-field--solo .v-input__prepend-outer {
  margin: 0;
  justify-content: center;
}
::v-deep .v-input {
  justify-content: center;
}
::v-deep .main-image .v-text-field.v-text-field--solo .v-input__prepend-outer {
  display: none;
}
.expansion-panel-content {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0px;
  list-style: none;
  li {
    margin: 3px 3px !important;
    letter-spacing: 0 !important;
    font-family: $fontfamliy;
    width: 100%;
  }
}
.number-col {
  @media (max-width: 450px) {
    flex: 0 0 100%;
    max-width: 100%;
  }
}
</style>
