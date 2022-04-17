<template>
  <v-main>
    <NavBar />
    <div class="AboutStore">
      <div class="first">
        <v-container>
          <v-row class="justify-center">
            <v-col cols="12" sm="12" md="6">
              <h1 class="text-center">
                هل تريد أفتتح معرضك لدينا في أكبر سوق السيارات في الـيمن
              </h1>

              <v-card-actions class="mt-5 btn justify-center">
                <v-btn
                  to="/LoginSeller"
                  elevation="0"
                  x-large
                  color="#eee"
                  class="black--text btn pa-4"
                >
                  سجل معنا
                </v-btn>
              </v-card-actions>
            </v-col>
          </v-row>
        </v-container>
      </div>
      <div class="second">
        <v-container>
          <v-row class="">
            <v-col cols="12" class="pb-0">
              <p class="mb-0 pb-3">خصائص المعرض</p>
            </v-col>
            <v-col cols="12">
              <ul>
                <li
                  class="list"
                  v-for="(card, i) in cards"
                  :key="i"
                  v-text="card.title"
                ></li>
              </ul>
            </v-col>
            <v-col cols="12" class="pb-0">
              <p class="mb-0 pb-3 Featured">المعرض المتميز</p>
            </v-col>
            <v-col cols="12">
              <ul>
                <li
                  class="list"
                  v-for="(card, i) in cardVip"
                  :key="i"
                  v-text="card.title"
                ></li>
              </ul>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </div>
    <!-- footer  -->
    <v-row>
      <v-col cols="12">
        <v-footer class="footer" padless>
          <v-card color="#35477d" class="flex" flat tile>
            <v-card-actions
              color="transparent"
              class="pa-4 justify-center justify-lg-space-between justify-md-space-between flex-wrap"
            >
              <v-card-title>
                <router-link
                  :to="{
                    name: 'TheTerms',
                    params: { Terms: ' الأحكام والشروط' },
                  }"
                  class="mx-2 brand-Privacy grey--text text--darken-1"
                >
                  <a class="grey--text text--lighten-2"> الأحكام والشروط </a>
                </router-link>
                <span class="grey--text">|</span>
                <router-link
                  :to="{
                    name: 'ThePrivacy',
                    params: { Privacy: ' سياسة الخصوصية' },
                  }"
                  class="mx-2 brand-Privacy grey--text text--darken-1"
                >
                  <a class="grey--text text--lighten-2"> سياسة الخصوصية </a>
                </router-link>
              </v-card-title>
              <p
                class="pa-4 ma-0 grey--text text-center brand-logo text--lighten-1"
              >
                <strong class="ml-2">
                  &COPY; جميع الحقوق محفوظة لشركة ثـقـــة
                </strong>
                <br class="hidden-sm-and-up" />
                2022 —
                {{ new Date().getFullYear() }}
              </p>
            </v-card-actions>
          </v-card>
        </v-footer>
      </v-col>
    </v-row>
  </v-main>
</template>

<script>
import NavBar from "../NavBar/TheNavBar.vue";

export default {
  name: "AboutShowroom",
  components: { NavBar },
  data() {
    return {
      cards: [
        {
          title: "سيكون لديك معرضك الخاص .",
        },
        {
          title: "لديك  التحكم الكامل بالحذف أو الاضافة .",
        },
        {
          title:
            "هناك العديد من الخصائص بجعل السيارة محجوز أو قد تم البيع وغيرها .",
        },
        {
          title: " بإمكانك عمل خصومات .",
        },
        {
          title: " بإمكانك رؤية عدد الاشخاص الذين زاروا معرضك  .",
        },
        {
          title:
            " سوف يتم تنبيهك قبل انتهاء اشتراكك في المعرض بي اسبوع واحد على الأقل .",
        },
        {
          title: " سيكون لديك رقماً خاص بك لتجديد أو غير ذالك .",
        },
        {
          title: " عرض سيارات لا محدود .",
        },

        {
          title: "أول شهر لتسجل معنا مجانا .",
        },
        {
          title: "سيكون لديك سعر خاص في الخصائص المتوفرة لدينا.",
        },
        {
          title: " رسوم لفتح المعرض لدينا  450$  فقط   .",
        },
      ],
      cardVip: [
        {
          title: "يشمل جميع الخصائص .",
        },
        {
          title: "سيتم عرض معرضك في الصفحة الرئسية .",
        },
        {
          title: "سيتم إظهار معرضك في العرض الأول في المعرض .",
        },
        {
          title: "سيتم تغير لون معرضك الى المعرض المتميز  .",
        },

        {
          title: " رسوم لفتح المعرض المتميز لدينا 570$  فقط   .",
        },
        {
          title: " لا يشمل عرض الأفتتاح .",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/virables";
@import "@/scss/mixin";
.AboutStore {
  width: 100%;
  min-height: 100vh;
  background-color: $AboutShowroom;
  padding: $padding;
  .btn {
    font-family: $fontfamliy;
    letter-spacing: 0;
    font-size: 20px;
    font-weight: bold;
    position: relative;
    z-index: 1;
    @media (max-width: 959px) {
      text-align: center;
    }
  }

  h1,
  h3 {
    font-family: $fontfamliy;
    position: relative;
    z-index: 1;
    color: $fontcolorsm !important;
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
  .first {
    width: 100%;
    min-height: 35vh;
    display: flex;
    align-items: center;
  }
  .second {
    width: 100%;
    min-height: 50vh;
    .list {
      font-family: $fontfamliy;
      color: $fontcolorsm;
      font-size: 20px;
      margin: 4px 20px 4px 0;
      letter-spacing: 0;
    }

    p {
      font-family: $fontfamliy;
      color: $fontcolorsm;
      font-size: 22px;
      letter-spacing: 0;
      font-weight: bold;
      border-bottom: 1px solid white;
    }
    .Featured {
      font-family: $fontfamliy;
      color: $fontcolorsm;
      font-size: 22px;
      letter-spacing: 0;
      font-weight: bold;
      border-bottom: 1px solid $fontcolorsm;
      color: $fontcolorsm !important;
    }
  }
}
.footer {
  border-top: 1px solid #ffffff;
}
.brand-logo {
  letter-spacing: 0px;
  font-family: $fontfamliy;
  font-size: 16px;
  font-weight: 300;
}
.brand-Privacy {
  letter-spacing: 0px;
  font-family: $fontfamliy;
  font-size: 14px;
  display: flex;
  font-weight: 400;
}
</style>
