<template>
  <v-main>
    <v-toolbar color="grey darken-3" class="px-md-14 px-lg-14">
      <router-link class="NavTitle" router to="/">
        <a class="NavTitle"> ثــقـة </a>
      </router-link>
      <v-spacer></v-spacer>
      <v-card-actions>
        <v-card-text
          class="grey--text pa-0 No-Acount-text"
          v-if="SignUp == false"
        >
          ليس لديك حساب ؟
          <v-btn @click="SignUp = true" elevation="0" class="No-Acount px-0">
            أفتح حساب
          </v-btn>
        </v-card-text>
        <v-btn
          v-else
          @click="SignUp = false"
          elevation="0"
          class="go-back px-0"
        >
          <v-icon right class="mt-2">mdi-chevron-right</v-icon>
          رجوع
        </v-btn>
      </v-card-actions>
    </v-toolbar>
    <div class="login">
      <v-container>
        <v-row class="justify-center">
          <v-col cols="12" md="6" sm="10">
            <v-card class="mx-auto pa-3">
              <v-card-title class="sign-creat">
                <span
                  v-bind:class="{
                    'sign-in-up': SignUp == false,
                  }"
                  class="mx-1"
                >
                  تسجيل الدخول
                </span>
                /
                <span
                  v-bind:class="{
                    'sign-in-up': SignUp == true,
                  }"
                  class="mx-1"
                >
                  إنشاء حساب
                </span>
              </v-card-title>
              <v-divider></v-divider>
              <v-form>
                <div v-if="SignUp == false">
                  <v-row justify="center">
                    <v-col cols="12" class="pa-2">
                      <v-card-text>قم بتسجيل الدخول باستخدام</v-card-text>
                    </v-col>
                    <v-col cols="12" class="pa-2">
                      <v-btn
                        elevation="2"
                        large
                        width="100%"
                        class="btn-social"
                        text
                      >
                        جوجل
                        <v-spacer></v-spacer>
                        <v-avatar tile class="mr-2" size="30">
                          <img src="../assets/outsrc/google.png" alt="alt" />
                        </v-avatar>
                      </v-btn>
                    </v-col>
                    <v-col cols="12" class="pa-2">
                      <v-btn
                        elevation="2"
                        large
                        width="100%"
                        class="btn-social"
                        text
                      >
                        فيسبوك
                        <v-spacer></v-spacer>
                        <v-avatar tile class="mr-2" size="30">
                          <img src="../assets/outsrc/facebook.png" alt="alt" />
                        </v-avatar>
                      </v-btn>
                    </v-col>
                    <v-col cols="12" class="pa-2">
                      <div class="or pa-4">
                        <span class="text">أو</span>
                      </div>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                        v-model="firstname"
                        label="أسـم الـمستخدم"
                        required
                        hide-details
                        outlined
                        class="red--text"
                        append-icon="far fa-user"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" class="pb-0">
                      <v-text-field
                        :append-icon="
                          show2 ? 'fas fa-eye ' : 'fas fa-eye-slash'
                        "
                        :rules="[rules.required, rules.min]"
                        :type="show2 ? 'text' : 'password'"
                        name="input-10-2"
                        label="كلمة المرور"
                        class="input-group--focused font-weight-regular"
                        @click:append="show2 = !show2"
                        outlined
                        required
                      >
                      </v-text-field>
                    </v-col>
                    <v-col cols="12" class="py-1">
                      <v-card-actions class="justify-center">
                        <v-btn
                          large
                          elevation="0"
                          min-width="100%"
                          class="submet"
                        >
                          تـسجيل الدخول
                        </v-btn>
                      </v-card-actions>
                    </v-col>
                    <v-col cols="12" class="py-1">
                      <v-card-actions class="justify-center">
                        <v-btn
                          large
                          elevation="0"
                          min-width="100%"
                          class="forget"
                        >
                          هل نسيت كلمة المرور
                        </v-btn>
                      </v-card-actions>
                    </v-col>
                  </v-row>
                </div>
                <div v-if="SignUp == true">
                  <v-row justify="center">
                    <v-col cols="12" class="pa-0">
                      <SignUp />
                    </v-col>
                  </v-row>
                </div>
                <v-row>
                  <v-col cols="12" class="pa-0">
                    <v-divider class="mb-1"></v-divider>
                  </v-col>
                </v-row>
              </v-form>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <!-- footer  -->
    <v-row>
      <v-col cols="12">
        <v-footer class="footer" padless>
          <v-card color="#424242" class="flex" flat tile>
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
                  <a> الأحكام والشروط </a>
                </router-link>
                <span class="grey--text">|</span>
                <router-link
                  :to="{
                    name: 'ThePrivacy',
                    params: { Privacy: ' سياسة الخصوصية' },
                  }"
                  class="mx-2 brand-Privacy grey--text text--darken-1"
                >
                  <a> سياسة الخصوصية </a>
                </router-link>
              </v-card-title>
              <p
                class="pa-4 ma-0 grey--text text-end brand-logo text--lighten-1"
              >
                <strong class="ml-2">
                  &COPY; جميع الحقوق محفوظة لشركة ثـقـــة
                </strong>
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
import SignUp from "./SignUp.vue";
export default {
  name: "Login",
  components: { SignUp },
  data() {
    return {
      valid: false,
      firstname: "",
      SignUp: false,
      rules: {
        required: (value) => !!value || "ادخل الرقم السري",
        min: (v) => v.length >= 8 || "تأكد من ادخال الرقم صحيحا",
      },
    };
  },
};
</script>
<style lang="scss" scoped>
@import "../scss/virables";
@import "../scss/mixin";

.login {
  width: 100%;
  min-height: 100vh;
  font-family: $fontfamliy;
  background-color: #545353;
  padding: $padding;
  @include flexcenter();
}
.NavTitle {
  color: $fontcolorsm !important;
  font-size: 22px;
  letter-spacing: 0px !important;
  font-family: $fontfamliy;
  font-weight: 500;
  width: fit-content;
  text-align: start;
  text-decoration: none !important;
}
.sign-creat {
  font-family: $fontfamliy;
  font-weight: 500 !important;
  letter-spacing: 0;
  @media (max-width: 360px) {
    font-size: 16px !important;
  }
}
.submet {
  font-family: $fontfamliy;
  font-size: 16px !important;
  font-weight: 500 !important;
  letter-spacing: 0;
  background-color: $color-1 !important;
  color: $fontcolorsm !important;
}
.submet {
  font-family: $fontfamliy;
  font-size: 16px !important;
  font-weight: 500 !important;
  letter-spacing: 0;
  transition: all 0.3s ease;
}
.submet:hover {
  color: $color-1 !important;
  background-color: transparent !important;
  box-shadow: 0 0 0px 1px $color-1 !important;
}
.forget {
  font-family: $fontfamliy;
  font-size: 16px !important;
  font-weight: 500 !important;
  color: $color-1 !important;
  letter-spacing: 0;
  background-color: transparent !important;
  transition: all 0.3s ease;
}
.forget:hover {
  color: $fontcolorsm !important;
  background-color: $color-3 !important;
}
.btn-social {
  font-family: $fontfamliy;
  font-size: 17px !important;
  font-weight: 500 !important;
  letter-spacing: 0;
}
.No-Acount-text {
  font-family: $fontfamliy;
  font-size: 17px !important;
  font-weight: 500 !important;
  background-color: transparent !important;
  letter-spacing: 0;
  margin-right: 5px;
}
.No-Acount {
  font-family: $fontfamliy;
  font-size: 14px !important;
  font-weight: 500 !important;
  background-color: transparent !important;
  letter-spacing: 0;
  color: $color-1 !important;
  margin-right: 5px;
}

.or {
  position: relative;
  .text {
    text-align: center;
    background-color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    padding: 0px 15px;
    display: block;
    font-size: 20px;
  }
}
.or::after {
  content: "";
  position: absolute;
  width: 70%;
  height: 1px;
  background-color: rgb(228, 228, 228);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 5px;
}
.No-Acount::v-deep.theme--light.v-btn:hover:before {
  opacity: 0;
}
.sign-in-up {
  display: block;
  color: $color-1;
}
.go-back {
  font-size: 17px !important;
  font-weight: 500;
  background-color: transparent !important;
  color: $fontcolorsm !important;
  font-family: $fontfamliy;
}
.go-back::v-deep.theme--light.v-btn:hover:before {
  opacity: 0;
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
