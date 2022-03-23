<template>
  <div class="ShowRoomAddNewCar">
    <v-container>
      <v-row class="justify-center">
        <v-col cols="12">
          <v-card> </v-card>
          <v-card class="overflow-hidden">
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
            </v-card-text>
            <v-divider></v-divider>
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
              <v-card :disabled="Instalment" outlined class="mx-1" flat>
                <v-card-text class="text-center text py-2">
                  القسط الشهري
                </v-card-text>
                <v-text-field hide-details="true"> </v-text-field>
              </v-card>
              <v-card :disabled="Instalment" outlined class="mx-1" flat>
                <v-card-text class="text-center text py-2">
                  مدة القسط بعدد الأشهر
                </v-card-text>
                <v-text-field hide-details="true"> </v-text-field>
              </v-card>
              <v-card :disabled="Instalment" outlined class="mx-1" flat>
                <v-card-text class="text-center text py-2">
                  الدفعة الأولى
                </v-card-text>
                <v-text-field hide-details="true"> </v-text-field>
              </v-card>
              <v-card :disabled="Instalment" outlined class="mx-1" flat>
                <v-card-text class="text-center text py-2">
                  الدفعة الأخيرة
                </v-card-text>
                <v-text-field hide-details="true"> </v-text-field>
              </v-card>
            </v-card-actions>
            <v-divider class="my-2"></v-divider>
            <v-card-actions class="justify-center">
              <div>
                <v-btn
                  large
                  width="200"
                  class="btn"
                  color="success darken-2"
                  @click="save"
                >
                  نشر
                </v-btn>
              </div>
            </v-card-actions>
            <v-snackbar
              color="success darken-2"
              v-model="hasSaved"
              :timeout="2000"
              app
              centered
            >
              <v-card-title class="title pa-1"> تم نشر الأعلان </v-card-title>
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
  name: "ShowRoomAddNewCar",
  data() {
    return {
      ShowRoomCarsDetails,
      hasSaved: false,
      ShowSave: false,
      dialog: false,
      Instalment: true,
      carId: this.$route.params.carId,
    };
  },
  methods: {
    save() {
      this.hasSaved = true;
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
.ShowRoomAddNewCar {
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
