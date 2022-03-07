<template>
  <div class="sign-up">
    <v-container class="pt-0">
      <v-card class="card-con overflow-hidden pb-4" ref="form">
        <div class="img-box">
          <b>إنشاء حساب </b>
        </div>
        <v-form class="pa-2">
          <v-row class="mt-6">
            <v-col class="py-0" cols="12" sm="6" md="6">
              <v-text-field
                ref="FirstName"
                v-model="FirstName"
                :rules="[() => !!FirstName || 'This field is required']"
                :error-messages="errorMessages"
                label="الأسم كامل"
                placeholder="John Doe"
                required
                outlined
              ></v-text-field>
            </v-col>
            <v-col class="py-0" cols="12" sm="6" md="6">
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
            <v-col class="py-0" cols="12" sm="6" md="6">
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
            <v-col class="py-0" cols="12" sm="6" md="6">
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
            <v-col class="py-0" cols="12" sm="6" md="6">
              <v-text-field
                :rules="[rules.required, rules.min]"
                :type="show2 ? 'text' : 'password'"
                v-model="password"
                label="كلمة المرور"
                class="input-group--focused ma-0 font-weight-regular"
                outlined
                required
              >
              </v-text-field>
            </v-col>
            <v-col class="py-0" cols="12" sm="6" md="6">
              <v-text-field
                :rules="[rules.required, rules.min]"
                :type="show2 ? 'text' : 'password'"
                v-model="password"
                label="تأكيد كلمة المرور "
                class="input-group--focused ma-0 font-weight-regular"
                outlined
                required
              >
              </v-text-field>
            </v-col>
            <v-col cols="12" class="pt-0">
              <v-card flat class="d-flex align-center">
                <v-switch
                  v-model="show2"
                  @click:append="show2 = !show2"
                  :type="show2 ? 'text' : 'password'"
                  color="info"
                  hide-details
                  class="ma-0 pa-0 switch"
                >
                </v-switch>
                <v-card-title class="pa-0 showPassLab">
                  اظهار كلمة المرور
                </v-card-title>
              </v-card>
            </v-col>
            <v-col cols="12" class="pt-0">
              <v-card-actions class="justify-center pa-4">
                <v-btn class="btn1 elevation-0" @click="submit"> انشاء </v-btn>
              </v-card-actions>
            </v-col>
          </v-row>
        </v-form>

        <v-divider></v-divider>
        <v-card-actions class="justify-center">
          <v-row justify="center">
            <v-col cols="12" class="pa-2">
              <v-card-title class="btn-title justify-center pa-0">
                أو
              </v-card-title>
            </v-col>
            <v-col cols="7" md="5" sm="5" class="pa-2">
              <v-btn elevation="2" large width="100%" class="btn-go" text>
                جوجل
                <v-avatar tile class="mr-2" size="20">
                  <img src="../assets/outsrc/google.png" alt="alt" />
                </v-avatar>
              </v-btn>
            </v-col>
            <v-col cols="7" md="5" sm="5" class="pa-2">
              <v-btn elevation="2" large width="100%" class="btn-fac" text>
                فيسبوك
                <v-avatar tile class="mr-2" size="30">
                  <img src="../assets/outsrc/facebook.png" alt="alt" />
                </v-avatar>
              </v-btn>
            </v-col>
          </v-row>
        </v-card-actions>
      </v-card>
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
  min-height: calc(100vh - 124px);
  font-family: $fontfamliy;
  .card-con {
    position: relative;
    background-color: rgb(255, 255, 255) !important;
  }
  .showPassLab {
    font-family: $fontfamliy;
    font-size: 16px;
  }
  .btn1 {
    color: $fontcolorsm;
    letter-spacing: 0;
    font-family: $fontfamliy;
    width: 250px;
    font-size: 18px;
    background: $color-1 !important;
  }
  .btn-title {
    letter-spacing: 0;
    font-family: $fontfamliy;
    font-size: 18px;
  }
  .btn-go {
    background: rgb(255, 255, 255) !important;
    color: $fontcolor;
    letter-spacing: 0;
    font-family: $fontfamliy;
    font-size: 18px;
    transition: transform 0.3s ease;
  }
  .btn-fac {
    background: #ffffff;
    color: $fontcolor;
    letter-spacing: 0;
    font-family: $fontfamliy;
    font-size: 18px;
    transition: transform 0.3s ease;
  }
  .img-box {
    width: 100%;
    height: 50px;
    background: $color-1 !important;
    position: relative;
    z-index: 5;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top-left-radius: 0px !important;
    border-top-right-radius: 0px !important;
    border-bottom-left-radius: 00px;
    border-bottom-right-radius: 00px;
    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),
      0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12) !important;
  }
  .img-box::after {
    content: "";
    position: absolute;
    width: 6px;
    height: 6px;
    top: 1.5px;
    right: 1.5px;
    border-radius: 50%;
    background-color: white;
    box-shadow: 0px 42px 0px white;
  }
  .img-box::before {
    content: "";
    position: absolute;
    width: 6px;
    height: 6px;
    top: 1.5px;
    left: 1.5px;
    border-radius: 50%;
    background-color: white;
    box-shadow: 0px 42px 0px white;
  }

  .img-box b {
    font-size: 19px;
    font-family: $fontfamliy;
    font-weight: 500;
    color: #fff;
    letter-spacing: 0;
  }

  .switch::v-deep
    .v-input--selection-controls__input:hover
    .v-input--selection-controls__ripple:before {
    transform: scale(0);
  }
}
</style>
