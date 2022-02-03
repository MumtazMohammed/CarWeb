<template>
  <v-main>
    <NavBar />
    <div class="AboutSellingCar">
      <!-- first  -->
      <div class="first">
        <v-container>
          <v-row class="justify-center align-center">
            <v-col cols="12" sm="12" md="6">
              <h1>قم بعرض سيارتك للبيع في أكبر سوق السيارات في الـيمن</h1>
              <h3>أعرض سيارتك على المشترين وتواصل معهم بسهولة واريحية</h3>
              <div class="mt-5 btn">
                <v-btn x-large color="#0881fa" class="white--text btn">
                  أعرض سيارتك الأن
                </v-btn>
              </div>
            </v-col>
            <v-col cols="12" sm="6" md="6">
              <v-img
                contain
                src="../assets/outsrc/undraw_fast_car_p-4-cu.svg"
                lazy-src="../assets/outsrc/undraw_fast_car_p-4-cu.svg"
              ></v-img>
            </v-col>
          </v-row>
        </v-container>
      </div>
      <!-- second  -->

      <div class="Second">
        <v-container>
          <v-row class="justify-center">
            <v-col cols="12" class="">
              <h1>ليش بيع سيارتك على موقعنا هو الحل الأنسب لك ؟</h1>
            </v-col>
            <v-col cols="12" class="d-flex justify-center mb-6">
              <span class="line"></span>
            </v-col>
            <v-col
              cols="12"
              sm="12"
              md="4"
              class="d-flex flex-column align-center justify-center"
            >
              <v-img
                max-width="250"
                contain
                src="../assets/outsrc/undraw_destination_re_sr74.svg"
                lazy-src="../assets/outsrc/undraw_destination_re_sr74.svg"
              ></v-img>
              <p class="my-8">سيتم عرض سيارتك على الآف المشترين في اليمن</p>
            </v-col>
            <v-col
              cols="12"
              sm="12"
              md="4"
              class="d-flex flex-column align-center justify-center"
            >
              <v-img
                max-width="110"
                contain
                src="../assets/outsrc/undraw_post_online_re_1b82.svg"
                lazy-src="../assets/outsrc/undraw_post_online_re_1b82.svg"
              ></v-img>
              <p class="my-8">تواصل مع المشترين بكل سهولة واريحية</p>
            </v-col>
            <v-col
              cols="12"
              sm="12"
              md="4"
              class="d-flex flex-column align-center justify-center"
            >
              <v-img
                max-width="250"
                contain
                src="../assets/outsrc/undraw_make_it_rain_iwk4.svg"
                lazy-src="../assets/outsrc/undraw_make_it_rain_iwk4.svg"
              ></v-img>
              <p class="my-8">بيع سيارتك بنفسك وبالسعر الذي يرضيك</p>
            </v-col>
          </v-row>
        </v-container>
      </div>
      <!-- third -->
      <div class="third">
        <v-container>
          <v-row class="justify-center">
            <v-col cols="12" class="">
              <h1>كيف تبيع سيارتك على موقعنا بخطوات بسيطة ؟</h1>
            </v-col>
            <v-col cols="12" class="d-flex justify-center mb-6">
              <span class="line"></span>
            </v-col>
            <v-row class="align-center justify-space-around mt-3 mb-1">
              <v-col cols="6" sm="6" md="4">
                <v-img
                  contain
                  max-width="350"
                  src="../assets/outsrc/undraw_add_information_j2wg.svg"
                  lazy-src="../assets/outsrc/undraw_add_information_j2wg.svg"
                ></v-img>
              </v-col>
              <v-col cols="11" sm="10" md="7">
                <v-card class="pa-2">
                  <v-card-title class="card-title justify-center"
                    >أضف إعلانك</v-card-title
                  >
                  <v-divider></v-divider>
                  <v-card-text class="card-text">
                    قم برفع صور السيارة من الداخل والخارج وأختيارة صورة أمامية
                    واضحة للأعلان ومن ثم قم بأدخل جميع معلومات السيارة بي
                    مصداقية تامة على الموقع بكافة التفاصيل حتى يتمكن المشتري من
                    الوثوق بك.
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
            <v-divider></v-divider>
            <v-row
              class="align-center justify-space-around flex-md-row-reverse flex-lg-row-reverse my-1"
            >
              <v-col cols="6" sm="6" md="4">
                <v-img
                  contain
                  max-width="350"
                  src="../assets/outsrc/undraw_phone_call_grmk.svg"
                  lazy-src="../assets/outsrc/undraw_phone_call_grmk.svg"
                ></v-img>
              </v-col>
              <v-col cols="11" sm="10" md="7">
                <v-card class="pa-2">
                  <v-card-title class="card-title justify-center"
                    >أستقبل الاتصالات والرسائل
                  </v-card-title>
                  <v-divider></v-divider>
                  <v-card-text class="card-text">
                    سوف يتم التواصل معك خلال المشترين عن طريق الارقام التي
                    وفرتها في اعلانك تاكد من وضع ارقام يتوفر بها اتصال هاتفي
                    ورسائل وتس أب .
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-row>
        </v-container>
      </div>
    </div>
  </v-main>
</template>

<script>
import NavBar from "../NavBar/TheNavBar.vue";

export default {
  name: "AboutSellingCar",
  components: { NavBar },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/virables";
@import "@/scss/mixin";
.AboutSellingCar {
  width: 100%;
  min-height: 100vh;
  .line {
    width: 50%;
    height: 7px;
    background: $linear-gradient !important;
    display: flex;
    border-radius: 10px;
  }
  .first {
    padding: $padding;
    min-height: 90vh;
    display: flex;
    align-items: center;
    h1,
    h3 {
      font-family: $fontfamliy;
      color: $fontcolor;
      @media (max-width: 959px) {
        text-align: center;
      }
    }

    h3 {
      font-family: $fontfamliy;
      color: $fontcolor;
      margin: 10px 0 0 0;
      @media (max-width: 959px) {
        font-size: 22px !important;
        font-weight: 500 !important;
      }
      @media (max-width: 650px) {
        font-size: 16px !important;
        font-weight: 500 !important;
      }
    }
    h1 {
      font-family: $fontfamliy;
      color: $fontcolor;
      font-size: 37px !important;
      @media (max-width: 959px) {
        font-size: 27px !important;
      }
      @media (max-width: 650px) {
        font-size: 20px !important;
      }
    }
    .btn {
      font-family: $fontfamliy;
      letter-spacing: 0;
      font-size: 20px;
      font-weight: bold;
      @media (max-width: 959px) {
        text-align: center;
      }
    }
  }
  .Second {
    min-height: 70vh;
    padding: $padding;

    h1 {
      font-family: $fontfamliy;
      color: $fontcolor;
      letter-spacing: 0;
      text-align: center;
      @media (max-width: 800px) {
        font-size: 27px;
      }
      @media (max-width: 650px) {
        font-size: 25px;
      }
      @media (max-width: 600px) {
        font-size: 20px;
      }
    }
    p {
      font-family: $fontfamliy;
      letter-spacing: 0;
      font-weight: bold;
      margin-top: 15px;
      text-align: center;
      margin-bottom: 0px !important;
      @media (max-width: 650px) {
        font-size: 13px;
      }
    }
  }
  .third {
    min-height: 60vh;
    padding: $padding;
    h1 {
      font-family: $fontfamliy;
      color: $fontcolor;
      letter-spacing: 0;
      text-align: center;
      @media (max-width: 800px) {
        font-size: 27px;
      }
      @media (max-width: 650px) {
        font-size: 25px;
      }
      @media (max-width: 600px) {
        font-size: 20px;
      }
    }
    .card-title {
      font-family: $fontfamliy;
      color: $fontcolor;
      letter-spacing: 0;
      text-align: center;
      font-size: 27px !important;

      @media (max-width: 800px) {
        font-size: 25px !important;
      }
      @media (max-width: 650px) {
        font-size: 23px !important;
      }
      @media (max-width: 600px) {
        font-size: 20px !important;
      }
    }
    .card-text {
      font-family: $fontfamliy;
      letter-spacing: 0;
      text-align: center;
      font-size: 16px;
      line-height: 1.8 !important;
      @media (max-width: 650px) {
        font-size: 13px;
      }
    }
    .RowHow {
      @media (max-width: 959px) {
        flex-direction: row-reverse;
      }
    }
  }
}
</style>
