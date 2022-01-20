<template>
  <div class="sign-up">
    <v-container>
      <v-row align="center" justify="center" class="row1">
        <v-col cols="12" sm="10" md="8" lg="6" class="">
          <v-col cols="12" class="pa-0 d-flex avatar justify-center">
            <div class="user-bak"></div>
            <v-avatar size="70">
              <img src="../assets/outsrc/user.png" alt="alt" />
            </v-avatar>
          </v-col>
          <v-card class="card-con py-4 pt-6" elevation="8" ref="form">
            <div class="clor"></div>
            <v-card-text>
              <v-row>
                <v-col class="py-0 pl-sm-1 pl-md-1" md="6" sm="6" cols="12">
                  <v-text-field
                    ref="FirstName"
                    v-model="FirstName"
                    :rules="[() => !!FirstName || 'This field is required']"
                    :error-messages="errorMessages"
                    label="الأسم الأول"
                    placeholder="John Doe"
                    required
                    outlined
                  ></v-text-field>
                </v-col>
                <!-- <v-col class="py-0 pr-sm-1 pr-md-1" md="6" sm="6" cols="12">
                  <v-text-field
                    ref="SecondtName"
                    v-model="SecondtName"
                    :rules="[() => !!SecondtName || 'This field is required']"
                    :error-messages="errorMessages"
                    label="الأسم الثاني"
                    placeholder="John Doe"
                    required
                    outlined
                  ></v-text-field>
                </v-col> -->
                <v-col class="py-0 pr-sm-1 pr-md-1" md="6" sm="6" cols="12">
                  <v-text-field
                    ref="number"
                    v-model="number"
                    :rules="[() => !!number || 'This field is required']"
                    label="جوال"
                    :error-messages="errorMessages"
                    required
                    outlined
                    placeholder="0111214125"
                    class="ma-0"
                  ></v-text-field>
                </v-col>
                <v-col class="py-0 pl-sm-1 pl-md-1" md="4" sm="4" cols="12">
                  <v-autocomplete
                    ref="country"
                    v-model="country"
                    :rules="[() => !!country || 'This field is required']"
                    :items="countries"
                    label="المحافظة"
                    placeholder="Select..."
                    required
                    outlined
                    class="ma-0"
                  ></v-autocomplete>
                </v-col>
                <v-col class="py-0 pr-sm-1 pr-md-1" md="8" sm="8" cols="12">
                  <v-text-field
                    ref="email"
                    v-model="email"
                    :rules="emailRules"
                    label="الـبريد الأكتروني"
                    required
                    outlined
                    placeholder="example@gmail.com"
                    class="ma-0"
                  ></v-text-field>
                </v-col>
                <v-col class="py-0" cols="12">
                  <v-text-field
                    :rules="[rules.required, rules.min]"
                    :type="show2 ? 'text' : 'password'"
                    v-model="password"
                    label="الرقم السري"
                    class="input-group--focused ma-0 font-weight-regular"
                    outlined
                    required
                  >
                  </v-text-field>
                </v-col>
              </v-row>
            </v-card-text>
            <v-col cols="12" class="pt-0">
              <v-card flat class="d-flex align-center">
                <v-switch
                  v-model="show2"
                  @click:append="show2 = !show2"
                  :type="show2 ? 'text' : 'password'"
                  color="info"
                  hide-details
                  class="ma-0 pa-0"
                >
                </v-switch>
                <v-card-title class="pa-0 showPassLab">
                  اظهار كلمة السر
                </v-card-title>
              </v-card>
            </v-col>
            <v-card-actions class="justify-center pa-4">
              <v-btn class="btn1" outlined color="primary" @click="submit">
                تسجيل
              </v-btn>
            </v-card-actions>
            <v-divider></v-divider>
            <v-card-actions class="justify-center">
              <v-row justify="center">
                <v-col cols="7" class="pa-2">
                  <v-card-title class="btn-title justify-center pa-0">
                    أو
                  </v-card-title>
                </v-col>
                <v-col cols="7" class="pa-2">
                  <v-btn large width="100%" class="btn-go" text>
                    جوجل
                    <v-avatar tile class="mr-2" size="20">
                      <img src="../assets/outsrc/google.png" alt="alt" />
                    </v-avatar>
                  </v-btn>
                </v-col>
                <v-col cols="7" class="pa-2">
                  <v-btn large width="100%" class="btn-fac" text>
                    فيسبوك
                    <v-avatar tile class="mr-2" size="30">
                      <img src="../assets/outsrc/facebook.png" alt="alt" />
                    </v-avatar>
                  </v-btn>
                </v-col>
              </v-row>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  data: () => ({
    name: "SginUp",
    countries: ["Afghanistan", "Albania", "Algeria", "Andorra"],
    errorMessages: "",
    FirstName: "",
    SecondtName: "",
    number: "",
    password: "",
    doublepassword: "",
    show2: false,
    country: "",
    formHasErrors: false,
    email: "",
    emailRules: [
      (v) => !!v || "يجب ادخل الـبريد الأكتروني ",
      (v) => /.+@.+/.test(v) || "يـجب كتابة البريد الأكتروني صحيحا",
    ],
    rules: {
      required: (value) => !!value || "ادخل الرقم السري",
      min: (v) => v.length >= 8 || "تأكد من ادخال الرقم صحيحا",
    },
  }),

  computed: {
    form() {
      return {
        FirstName: this.name,
        SecondtName: this.name,
        country: this.country,
        email: this.country,
        number: this.Number,
        doublepassword: this.Number,
        password: this.Number,
      };
    },
  },
  watch: {
    FirstName() {
      this.errorMessages = "";
    },
    SecondtName() {
      this.errorMessages = "";
    },
    country() {
      this.errorMessages = "";
    },
    email() {
      this.errorMessages = "";
    },
    Number() {
      this.errorMessages = "";
    },
  },

  methods: {
    resetForm() {
      this.errorMessages = [];
      this.formHasErrors = false;

      Object.keys(this.form).forEach((f) => {
        this.$refs[f].reset();
      });
    },
    submit() {
      this.formHasErrors = false;

      Object.keys(this.form).forEach((f) => {
        if (!this.form[f]) this.formHasErrors = true;

        this.$refs[f].validate(true);
      });
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/virables";
@import "@/scss/mixin";
nav {
  display: none !important;
}
.sign-up {
  width: 100%;
  min-height: 100vh;
  // background: $background;
  // background-position: center;
  // background-repeat: no-repeat;
  // background-size: cover;
  padding-bottom: 20px;
  .card-con {
    position: relative;
    background-color: rgb(255, 255, 255) !important;
  }
  .btn1 {
    color: $fontcolorsm;
    letter-spacing: 0;
    font-family: $fontfamliy;
    width: 250px;
    font-size: 18px;
  }
  .btn-title {
    letter-spacing: 0;
    font-family: $fontfamliy;
    font-size: 18px;
  }
  .btn-go {
    background: #eee !important;
    color: $fontcolor;
    letter-spacing: 0;
    font-family: $fontfamliy;
    font-size: 18px;
    transition: transform 0.3s ease;
  }
  .btn-fac {
    background: #1976d2;
    color: $fontcolorsm;
    letter-spacing: 0;
    font-family: $fontfamliy;
    font-size: 18px;
    transition: transform 0.3s ease;
  }
  .avatar {
    transform: translate(0px, 16px);
    position: relative;
    z-index: 5;
  }
  .user-bak {
    position: absolute;
    bottom: -38px;
    background: #ffbb85;
    width: 174px;
    height: 54px;
    -webkit-clip-path: circle(50% at 50% 1%);
    clip-path: circle(30% at 50% -28%);
  }
  .showPassLab {
    font-family: $fontfamliy !important;
    font-size: 16px;
  }
}
</style>
