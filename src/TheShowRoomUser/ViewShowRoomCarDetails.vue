<template>
  <div class="ViewShowRoomCarDetails">
    <v-container>
      <!-- dele Add and trust  -->
      <v-card-actions class="pa-0 pb-1">
        <v-dialog v-model="Delete" persistent max-width="320">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              v-bind="attrs"
              v-on="on"
              dark
              elevation="0"
              width="200"
              color="red darken-1"
              class="del-btn"
            >
              حذف الأعلان
            </v-btn>
          </template>
          <v-card>
            <v-card-title class="text pa-2 justify-center">
              هل أنت متأكد من حذف الأعلان
            </v-card-title>
            <v-card-actions class="justify-space-between">
              <v-btn
                class="text"
                color="green darken-1"
                text
                @click="Delete = false"
              >
                متأكد
              </v-btn>
              <v-btn
                class="text"
                color="red darken-1"
                text
                @click="Delete = false"
              >
                إلغاء
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <!-- trust Ad  -->
        <v-btn
          dark
          elevation="0"
          width="200"
          color="blue darken-1"
          class="del-btn mr-1"
        >
          توثيق الأعلان
        </v-btn>
      </v-card-actions>

      <CarShowRoomFeatureBtns />
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
          <v-card flat outlined class="rounded-t-0" height="70">
            <v-card-actions class="mt-2 main-image">
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
          <v-card class="pa-1 rounded-b-0" outlined height="320">
            <v-card-title class="justify-center pa-2">
              جميع صور السيارة
            </v-card-title>
            <v-card-actions class="justify-center pa-0 flex-wrap">
              <v-img max-height="200" contain :src="ActiveImage" />
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
                  <v-chip @click="ActiveImage = item.src" class="chip ma-1">
                    {{ item.text }}
                  </v-chip>
                </div>
              </v-chip-group>
            </v-card-actions>
          </v-card>
          <v-card outlined class="rounded-t-0" height="50">
            <v-card-actions class="justify-center">
              <v-btn icon elevation="0" class="grey--text text--darken-1">
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
            :items="states"
            color="white"
            item-text="name"
            label="الشركة"
            hide-details="true"
            :disabled="disabled"
          ></v-autocomplete>
        </v-col>
        <v-col cols="12" md="6">
          <v-autocomplete
            solo
            :items="states"
            color="white"
            item-text="name"
            label="النوع"
            hide-details="true"
            :disabled="disabled"
          ></v-autocomplete>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            hide-details="true"
            solo
            color="white"
            label="الـفئة"
            :disabled="disabled"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-autocomplete
            solo
            :items="states"
            color="white"
            item-text="name"
            label="سنة الصنع"
            hide-details="true"
            :disabled="disabled"
          ></v-autocomplete>
        </v-col>
        <v-col cols="12" md="6">
          <v-autocomplete
            solo
            :items="states"
            color="white"
            item-text="name"
            label="الوارد"
            hide-details="true"
            :disabled="disabled"
          ></v-autocomplete>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            solo
            color="white"
            label="لـون الـمركبه"
            hide-details="true"
            :disabled="disabled"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-autocomplete
            solo
            :items="states"
            color="white"
            item-text="name"
            label="نوع القير"
            hide-details="true"
            :disabled="disabled"
          ></v-autocomplete>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            solo
            color="white"
            label="حجم الـمحرك"
            hide-details="true"
            :disabled="disabled"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-autocomplete
            solo
            :items="states"
            color="white"
            item-text="name"
            label="نـوع الـدفع"
            hide-details="true"
            :disabled="disabled"
          ></v-autocomplete>
        </v-col>
        <v-col cols="12" md="6">
          <v-autocomplete
            solo
            :items="states"
            color="white"
            item-text="name"
            label="حـالـة الـسيارة"
            hide-details="true"
            :disabled="disabled"
          ></v-autocomplete>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            solo
            color="white"
            label="نوع الوقود"
            hide-details="true"
            :disabled="disabled"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-autocomplete
            solo
            :items="states"
            color="white"
            item-text="name"
            label="المواصفات"
            hide-details="true"
            :disabled="disabled"
          ></v-autocomplete>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            hide-details="true"
            solo
            color="white"
            :disabled="disabled"
            label="الـممشى"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            solo
            color="white"
            label="المنطقة"
            :disabled="disabled"
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
        <!-- enter price  -->
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
              <v-text-field label="السعر" hide-details="true"> </v-text-field>
              <!-- if the user enter Instalments payment -->
              <div>
                <v-text-field label="القسط الشهري" hide-details="true">
                </v-text-field>
                <v-text-field label="مدة القسط بعدد الأشهر" hide-details="true">
                </v-text-field>
                <v-text-field label="الدفعة الأولى" hide-details="true">
                </v-text-field>
                <v-text-field label="الدفعة الأخيرة" hide-details="true">
                </v-text-field>
              </div>
            </v-card>
          </v-card-actions>
        </v-col>
      </v-row>

      <v-card-actions class="justify-center">
        <div v-if="ShowSave">
          <v-btn
            large
            width="200"
            class="btn"
            color="primary darken-2"
            @click="save"
          >
            حفظ
          </v-btn>
        </div>
        <div v-else>
          <v-btn
            large
            width="200"
            class="btn"
            color="primary darken-2"
            @click="(disabled = false), (ShowSave = true)"
          >
            تعديل
          </v-btn>
        </div>
      </v-card-actions>
      <v-snackbar
        color="primary darken-2"
        v-model="hasSaved"
        :timeout="2000"
        app
        centered
      >
        <v-card-title class="title pa-1"> تم حفظ التعديل </v-card-title>
      </v-snackbar>
    </v-container>
  </div>
</template>
<script>
import ShowRoomCarsDetails from "../data-json/All-Car.json";
import CarShowRoomFeatureBtns from "./CarShowRoomFeatureBtns.vue";
export default {
  name: "ViewShowRoomCarDetails",
  components: { CarShowRoomFeatureBtns },
  data() {
    return {
      ShowRoomCarsDetails,
      hasSaved: false,
      ShowSave: false,
      disabled: true,
      Delete: false,
      ActiveImage: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
      carId: this.$route.params.carId,
      currency: ["دولار إمريكي", "ريال يمني", "ريال سعودي"],
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
      this.disabled = true;
      this.ShowSave = false;
    },
  },

  computed: {
    getCarInfo() {
      let GetCarDetails = "";
      for (let i = 0; i < this.ShowRoomCarsDetails.length; i++) {
        if (this.ShowRoomCarsDetails[i].id == this.carId) {
          GetCarDetails = this.ShowRoomCarsDetails[i];
          break;
        }
      }
      return GetCarDetails;
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/virables";
@import "@/scss/mixin";
.ViewShowRoomCarDetails {
  font-family: $fontfamliy !important;
  letter-spacing: 0;
}
.btn {
  font-family: $fontfamliy !important;
  letter-spacing: 0 !important;
  font-size: 18px !important;
}

::v-deep .v-toolbar__title.title {
  font-family: $fontfamliy !important;
  letter-spacing: 0 !important;
  font-size: 17px !important;
  font-weight: 500;
}
.text {
  font-family: $fontfamliy !important;
  letter-spacing: 0 !important;
  font-size: 17px !important;
  font-weight: 500;
}
.del-btn {
  font-family: $fontfamliy !important;
  letter-spacing: 0 !important;
  font-size: 17px !important;
  font-weight: 500;
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
