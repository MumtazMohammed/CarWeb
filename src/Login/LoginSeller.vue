<template>
  <div class="LoginSeller">
    <v-container>
      <v-row justify="center">
        <v-col cols="12"  class="container-col pt-0">
          <v-card flat>
            <v-col cols="12" class="text-center pb-0">
              <v-avatar size="100px" tile>
                <v-img src="../assets/manager.png"> </v-img>
              </v-avatar>
            </v-col>
            <v-col cols="12">
              <v-text-field
                v-model="firstname"
                label=" الرقم التعريفي"
                required
                hide-details
                outlined
                class="red--text field"
                append-icon="far fa-user"
              ></v-text-field>
            </v-col>
            <v-col cols="12" class="pb-0">
              <v-text-field
                :append-icon="show2 ? 'fas fa-eye ' : 'fas fa-eye-slash'"
                :rules="[rules.required, rules.min]"
                :type="show2 ? 'text' : 'password'"
                name="input-10-2"
                label="كلمة المرور"
                class="input-group--focused font-weight-regular field"
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
                  color="#0881fa"
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
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  name: "LoginSeller",
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

.LoginSeller {
  width: 100%;
  min-height: 100%;

  .field {
    font-family: $fontfamliy;
    letter-spacing: 0;
  }
}
.submet {
  font-family: $fontfamliy;
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
