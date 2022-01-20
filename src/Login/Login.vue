<template>
  <div class="login">
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="10" sm="12" class="container-col pt-0 pb-10">
          <v-card elevation="5">
            <v-col cols="12" class="text-center">
              <v-avatar size="100px" tile>
                <v-img src="../assets/user.png"> </v-img>
              </v-avatar>
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
                :append-icon="show2 ? 'fas fa-eye ' : 'fas fa-eye-slash'"
                :rules="[rules.required, rules.min]"
                :type="show2 ? 'text' : 'password'"
                name="input-10-2"
                label="الرقم السري"
                class="input-group--focused font-weight-regular"
                @click:append="show2 = !show2"
                outlined
                required
              >
              </v-text-field>
            </v-col>
            <v-col cols="12" class="pa-0">
              <v-card-actions class="justify-center">
                <v-btn
                  dark
                  color="#6599ff"
                  elevation="0"
                  min-width="50%"
                  class="submet"
                >
                  تـسجيل الدخول</v-btn
                >
              </v-card-actions>
            </v-col>
            <v-col cols="12" class="pa-2 d-flex justify-center">
              <v-card-actions class="pa-0">
                <a class="forget">هل نسيت كلمة المرور</a>
              </v-card-actions>
            </v-col>
            <v-divider></v-divider>
            <v-col cols="12" class="pa-0">
              <v-card-actions>
                <v-card-subtitle class="do-not-have-acount-text pl-1"
                  >ليس لديك حساب ؟</v-card-subtitle
                >
                <router-link
                  class="do-not-have-acount-link pr-1"
                  to="/SginUp"
                  :value="dialog"
                  @click="dialog = false"
                >
                  <a :value="dialog" @click="closedialog">أظغط هنا</a>
                </router-link>
              </v-card-actions>
            </v-col>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      props: ["dialog"],
      dia: false,
      valid: false,
      firstname: "",
      show2: false,
      rules: {
        required: (value) => !!value || "ادخل الرقم السري",
        min: (v) => v.length >= 8 || "تأكد من ادخال الرقم صحيحا",
      },
    };
  },
  methods: {
    closedialog(event) {
      this.dia = event.target.value;
      this.$emit("dialogclose", this.dia);
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../scss/virables";
@import "../scss/mixin";

.login {
  width: 100%;
  min-height: 100%;
}
.submet {
  font-family: $fontfamliy2;
  letter-spacing: 0;
}
.forget {
  font-family: $fontfamliy;
  font-size: 16px;
  font-weight: 300 !important;

  @media (max-width: 400px) {
    font-size: 14px;
  }
  @media (max-width: 300px) {
    font-size: 12px;
  }
}
.do-not-have-acount-text {
  font-family: $fontfamliy;
  font-size: 16px;
  font-weight: 300 !important;
}
.do-not-have-acount-link {
  font-family: $fontfamliy;
  font-size: 15px;
  text-decoration: none !important;
}
.container-col {
  @media (max-width: 400px) {
    padding-left: 2px;
    padding-right: 2px;
  }
}
</style>
