<template>
  <div class="ViewShowRoomCarDetails">
    <v-container>
      <v-row class="justify-center">
        <v-col cols="12">
          <v-card> </v-card>
          <v-card class="overflow-hidden">
            <v-toolbar>
              <v-toolbar-title class="title grey--text text--darken-2 ma-0">
                {{ getCarInfo.company }} , {{ getCarInfo.name }}
              </v-toolbar-title>
              <v-spacer></v-spacer>
              <!-- feature  -->
              <!-- discount  -->
              <div>
                <v-dialog v-model="dialog" persistent max-width="290">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      dark
                      fab
                      small
                      v-bind="attrs"
                      v-on="on"
                      elevation="0"
                      class="btn-feature ml-1"
                      color="orange darken-4"
                    >
                      <span>خصم</span>
                    </v-btn>
                  </template>
                  <v-card>
                    <v-card-title class="text py-2">
                      أدخل قيمة الخصم
                    </v-card-title>
                    <v-card-actions
                      class="justify-center elevation-3 align-center"
                    >
                      <input
                        class="number-input"
                        type="number"
                        name="price-discount"
                      />
                      <label class="text" for="price-discount"> ريال </label>
                    </v-card-actions>
                    <v-card-actions class="justify-space-around">
                      <v-btn
                        class="text"
                        color="green darken-1"
                        text
                        @click="dialog = false"
                      >
                        تفعيل الخصم
                      </v-btn>
                      <v-btn
                        class="text"
                        color="red darken-1"
                        text
                        @click="dialog = false"
                      >
                        إلغاء الخصم
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </div>
              <!-- booked  -->
              <div>
                <v-dialog v-model="dialog2" persistent max-width="290">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      v-bind="attrs"
                      v-on="on"
                      fab
                      elevation="0"
                      dark
                      small
                      class="btn-feature mr-1"
                      color="grey darken-2"
                    >
                      <span>محجوز</span>
                    </v-btn>
                  </template>
                  <v-card>
                    <v-card-title class="text justify-center py-2">
                      هل أنت متأكد من حجز السيارة
                    </v-card-title>
                    <v-card-actions class="justify-space-around">
                      <v-btn
                        class="text"
                        color="green darken-1"
                        text
                        @click="dialog2 = false"
                      >
                        نعم
                      </v-btn>
                      <v-btn
                        class="text"
                        color="red darken-1"
                        text
                        @click="dialog2 = false"
                      >
                        إلغاء
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </div>
              <!-- end booked  -->
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
                    :disabled="disabled"
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
                    :disabled="disabled"
                  ></v-file-input>
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
                  <v-textarea
                    solo
                    no-resize
                    rows="5"
                    color="white"
                    :disabled="disabled"
                    label=" مزيد من التفاصيل"
                    hide-details="true"
                  ></v-textarea>
                </v-col>
              </v-row>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-text class="red--text text">
              * رجاء ادخل السعر بريال اليمني.
            </v-card-text>
            <!-- price cash  -->
            <v-card-actions class="justify-center">
              <v-card :disabled="disabled" flat>
                <v-card-text class="text-center text py-2">
                  سعر السيارة كاش
                </v-card-text>
                <div class="cash-price-box">
                  <input class="cash-price" name="cash-price" type="number" />
                  <label class="label" for="cash-price">ريال</label>
                </div>
              </v-card>
            </v-card-actions>
            <!-- Instalments  -->
            <v-card-actions class="justify-center flex-wrap">
              <v-card :disabled="disabled" outlined class="mx-1" flat>
                <v-card-text class="text-center text py-2">
                  القسط الشهري
                </v-card-text>
                <v-text-field hide-details="true"> </v-text-field>
              </v-card>
              <v-card :disabled="disabled" outlined class="mx-1" flat>
                <v-card-text class="text-center text py-2">
                  مدة القسط بعدد الأشهر
                </v-card-text>
                <v-text-field hide-details="true"> </v-text-field>
              </v-card>
              <v-card :disabled="disabled" outlined class="mx-1" flat>
                <v-card-text class="text-center text py-2">
                  الدفعة الأولى
                </v-card-text>
                <v-text-field hide-details="true"> </v-text-field>
              </v-card>
              <v-card :disabled="disabled" outlined class="mx-1" flat>
                <v-card-text class="text-center text py-2">
                  الدفعة الأخيرة
                </v-card-text>
                <v-text-field hide-details="true"> </v-text-field>
              </v-card>
            </v-card-actions>
            <v-divider class="my-2"></v-divider>
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
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import ShowRoomCarsDetails from "../data-json/All-Car.json";
export default {
  name: "ViewShowRoomCarDetails",
  data() {
    return {
      ShowRoomCarsDetails,
      hasSaved: false,
      ShowSave: false,
      disabled: true,
      dialog: false,
      dialog2: false,
      Instalment: true,

      carId: this.$route.params.carId,
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
.text {
  font-family: $fontfamliy !important;
  letter-spacing: 0 !important;
  font-size: 17px !important;
  font-weight: 500;
}
.number-input {
  height: 30px;
  width: 100%;
}
.number-input:focus-visible {
  outline: none;
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
