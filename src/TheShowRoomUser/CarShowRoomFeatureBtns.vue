<template>
  <div class="CarShowRoomFeatureBtns">
    <v-card flat class="flex-wrap">
      <v-card-actions>
        <!-- featur Ad  -->
        <div class="ma-1">
          <v-dialog v-model="featur" persistent max-width="290">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                dark
                small
                v-bind="attrs"
                v-on="on"
                elevation="0"
                class="btn-feature"
                color="success"
              >
                <span>تعزيز</span>
              </v-btn>
            </template>
            <v-card color="">
              <v-card-title class="text grey--text text--darken-2 py-2">
                تعزيز الأعلان
                <v-icon left class="grey--text text--darken-1">
                  mdi-stairs-up
                </v-icon>
                <v-spacer></v-spacer>
                <span class="free-ad-boost">5</span>
              </v-card-title>
              <v-divider></v-divider>
              <v-card-text class="text pa-3 grey--text text--darken-3">
                اظهار أعلان السيارة في الصفحات الأولى
              </v-card-text>
              <v-card-actions class="justify-space-between flex-wrap">
                <v-btn
                  class="text"
                  color="green darken-1"
                  text
                  @click="featur = false"
                >
                  <v-icon>mdi-check-bold</v-icon>
                </v-btn>
                <v-btn
                  class="text"
                  color="red darken-1"
                  text
                  @click="featur = false"
                >
                  <v-icon>mdi-close</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </div>
        <!-- verified Ad  -->
        <div class="ma-1">
          <v-dialog v-model="verified" persistent max-width="590">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                dark
                small
                v-bind="attrs"
                v-on="on"
                elevation="0"
                class="btn-feature"
                color="primary"
              >
                <span>ترقية</span>
              </v-btn>
            </template>
            <v-card color="">
              <v-card-title class="text grey--text text--darken-2 py-2">
                ترقية الأعلان
              </v-card-title>
              <v-divider></v-divider>
              <div>
                <ul class="pa-2 mr-4 dialog-ul">
                  <li
                    v-for="(text, i) in Upgrade"
                    :key="i"
                    v-text="text.text"
                  ></li>
                </ul>
              </div>
              <v-card-actions class="justify-center">
                <v-card flat class="dialog-ul px-2">
                  <v-card-text
                    class="pb-1 text-center font-weight-bold blue--text"
                  >
                    قم بإرسال إصال المبلغ على الوتس آب مع رقم إعلان السيارة وأسم
                    الخدمة
                  </v-card-text>
                  <v-card-title class="justify-center grey--text">
                    601121331731+
                  </v-card-title>
                </v-card>
              </v-card-actions>
              <v-card-actions class="justify-space-between flex-wrap">
                <v-btn
                  class="close"
                  color="red darken-1"
                  text
                  @click="verified = false"
                >
                  إغلاق
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </div>
        <!-- discount  -->
        <div class="ma-1">
          <v-dialog v-model="dialog" persistent max-width="290">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                dark
                small
                v-bind="attrs"
                v-on="on"
                elevation="0"
                class="btn-feature"
                color="orange darken-4"
              >
                <span>خصم</span>
              </v-btn>
            </template>
            <v-card class="pa-2">
              <v-card-actions class="pa-0 justify-end">
                <v-btn dark small class="text red" icon @click="dialog = false">
                  <v-icon> mdi-close </v-icon>
                </v-btn>
              </v-card-actions>
              <v-card-title class="text pa-2 justify-center">
                أدخل قيمة الخصم
              </v-card-title>
              <v-card-actions class="justify-center align-center">
                <v-text-field
                  placeholder="السعر"
                  hide-details="true"
                ></v-text-field>
              </v-card-actions>
              <v-card-actions class="mt-3">
                <v-btn
                  dark
                  class="text"
                  color="success"
                  @click="dialog = false"
                >
                  موفق
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </div>
        <!-- booked  -->
        <div class="ma-1">
          <v-dialog v-model="dialog2" persistent max-width="320">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                v-bind="attrs"
                v-on="on"
                elevation="0"
                dark
                small
                class="btn-feature"
                color="grey darken-2"
              >
                <span>حجز</span>
              </v-btn>
            </template>
            <v-card>
              <v-card-title class="text">
                هل أنت متأكد من حجز السيارة
              </v-card-title>
              <v-card-actions class="justify-space-between">
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
      </v-card-actions>
    </v-card>
  </div>
</template>
<script>
export default {
  name: "FeatureBtns",
  data() {
    return {
      dialog: false,
      featur: false,
      dialog2: false,
      verified: false,
      verifiedText: false,
      Upgrade: [
        {
          text: " إظهار إعلان سيارتك في الصفحة الرئيسية والصفحات الأولى من البحث على آلاف المشترين في اليمن .",
        },
        {
          text: "تغير عرض أعلان سيارتك بي لون مميز عن الأعلان العادي .",
        },

        {
          text: "رسوم ترقية الأعلان  20$ .",
        },
        {
          text: "25 % خصم ",
        },
        { text: "15$ بعد الخصم ." },
        {
          text: " المدة  60 يوماً .",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/virables";
@import "@/scss/mixin";
.CarShowRoomFeatureBtns {
  font-family: $fontfamliy !important;
  letter-spacing: 0 !important;
}
.close {
  font-family: $fontfamliy !important;
  letter-spacing: 0 !important;
  font-weight: 500;
  font-size: 20px !important;
}
.text {
  font-family: $fontfamliy !important;
  letter-spacing: 0 !important;
  font-weight: 500;
}
.btn-feature {
  font-family: $fontfamliy !important;
  letter-spacing: 0 !important;
  font-size: 12px !important;
}
.number-input {
  height: 30px;
  width: 100%;
}
.number-input:focus-visible {
  outline: none;
}
.free-ad-boost {
  display: block;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: $color-3;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 20px;
  font-weight: bold;
}
.dialog-ul {
  font-family: $fontfamliy !important;
  letter-spacing: 0;
}
.dialog-ul li {
  line-height: 1.8;
  text-align: start;
  @media (max-width: 600px) {
    font-size: 14px;
  }
}
::v-deep.theme--light.v-input input::placeholder {
  font-family: $fontfamliy !important;
  letter-spacing: 0;
}
</style>
