<template>
  <div class="footer">
    <v-footer dark padless color="#424342 ">
      <v-container>
        <v-card flat color="transparent" tile class="">
          <v-row class="justify-center">
            <!-- brand Logo And website text  -->
            <v-col cols="12" md="6" sm="11" lg="6">
              <v-img
                contain
                max-height="100"
                class="mx-auto"
                style="height: 110px; width: 170px"
                src="../assets/CarLogo/Kia.png"
                lazy-src="../assets/CarLogo/Kia.png"
                alt="../assets/CarLogo/Kia.png"
              >
              </v-img>
              <v-card-text class="grey--text text-center brand-text pb-2 pt-0">
                شركة ثـقــة هي أول منصة متكاملة للتجارة الإلكترونية للسيارات في
                اليمن .
              </v-card-text>
              <v-card-text class="text-center trust-text mb-2">
                ثقتكم هي أولويتنا
              </v-card-text>
              <span class="line mx-auto"></span>
            </v-col>
          </v-row>
          <v-row class="justify-center">
            <v-col cols="12" sm="11" md="8" class="pt-0">
              <v-tabs
                class="justify-center"
                next-icon="mdi-chevron-right"
                prev-icon="mdi-chevron-left"
                show-arrows
                background-color="transparent"
                color="primary"
              >
                <v-tabs-slider color="#0881fa"></v-tabs-slider>
                <v-tab
                  v-for="(item, i) in items"
                  :key="i"
                  class="text-center link"
                  v-text="item.text"
                  :to="item.path"
                  color=""
                >
                </v-tab>
              </v-tabs>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-card color="transparent" flat class="d-flex">
                <a class="mx-2 brand-Privacy">الأحكام والشروط</a> |
                <a class="mx-2 brand-Privacy">سياسة الخصوصية</a>
              </v-card>
            </v-col>
          </v-row>
          <v-divider></v-divider>
          <v-card-text class="grey--text text-end brand-logo text--darken-1">
            <strong class="ml-2">
              &COPY; جميع الحقوق محفوظة لشركة ثـقـــة
            </strong>
            2022 —
            {{ new Date().getFullYear() }}
          </v-card-text>
        </v-card>
      </v-container>
    </v-footer>
  </div>
</template>
<script>
const components = {};
export default {
  name: "Footer",
  components,
  data: () => ({
    selectedItem: 1,
    items: [
      { text: " الرئيسية", path: "/" },
      { text: " تواصل معنا", path: "/contact" },
      { text: "أفتح معرضك", path: "/AboutShowroom" },
      { text: "بيع سيارتك", path: "/AboutSellingCarFreeAdd" },
      { text: "خلي أعلان سيارتك علينا", path: "/AboutSellingCarPayAdd" },
    ],
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
  }),
};
</script>
<style lang="scss" scoped>
@import "@/scss/virables";
@import "@/scss/mixin";
.footer {
  border-top: 4px solid #0881fa !important;
  background-color: #fff !important;
}
.brand-logo {
  letter-spacing: 0px;
  font-family: $fontfamliy;
  font-size: 16px;
  font-weight: 300;
}
.brand-text {
  letter-spacing: 0px;
  font-family: $fontfamliy;
  font-size: 22px;
  font-weight: bold;
  line-height: 1.8;
  @media (max-width: 450px) {
    font-size: 18px;
  }
  @media (max-width: 390px) {
    font-size: 16px;
  }
}
.trust-text {
  letter-spacing: 0px;
  font-family: $fontfamliy;
  font-size: 26px;
  font-weight: bold;
  color: $color-4;
  @media (max-width: 650px) {
    font-size: 23px;
  }
  @media (max-width: 370px) {
    font-size: 20px;
  }
}
.link {
  letter-spacing: 0px;
  font-family: $fontfamliy;
  font-size: 15px !important;
  font-weight: bold !important;
  // color: rgb(78, 78, 78) !important;
}
.brand-Privacy {
  letter-spacing: 0px;
  font-family: $fontfamliy;
  font-size: 14px;
  display: flex;
  font-weight: 400;
  color: $fontcolorsm !important;
}
::v-deep .v-slide-group__content.v-tabs-bar__content {
  justify-content: center;
}
.line {
  width: 50px;
  height: 5px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  background-color: $color-1;
  display: block;
}
</style>
