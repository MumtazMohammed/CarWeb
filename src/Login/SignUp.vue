<template>
  <div class="sign-up">
    <v-container>
      <v-row align="center" justify="center" class="row1">
        <v-col cols="12" sm="10" md="8" lg="6">
          <v-col cols="12" class="pa-0 d-flex avatar justify-center">
            <div class="user-bak"></div>
            <v-avatar size="110">
              <img src="../assets/outsrc/user.png" alt="alt" />
            </v-avatar>
          </v-col>
          <v-card class="card-con py-4 pt-14" elevation="8" ref="form">
            <div class="clor"></div>
            <v-card-text>
              <v-row>
                <v-col class="pa-0 px-1" cols="6">
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
                <v-col class="pa-0 px-1" cols="6">
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
                </v-col>
                <v-col class="pa-0 px-1" cols="6">
                  <v-text-field
                    ref="number"
                    v-model="number"
                    :rules="[() => !!number || 'This field is required']"
                    label="جوال"
                    :error-messages="errorMessages"
                    required
                    outlined
                    placeholder="0111214125"
                  ></v-text-field>
                </v-col>
                <v-col class="pa-0 px-1" cols="6">
                  <v-text-field
                    ref="email"
                    v-model="email"
                    :rules="emailRules"
                    label="الـبريد الأكتروني"
                    required
                    outlined
                    placeholder="example@gmail.com"
                  ></v-text-field>
                </v-col>
                <v-col class="pa-0 pb-2 px-1" cols="6">
                  <v-autocomplete
                    ref="country"
                    v-model="country"
                    :rules="[() => !!country || 'This field is required']"
                    :items="countries"
                    label="المحافظة"
                    placeholder="Select..."
                    required
                    outlined
                  ></v-autocomplete>
                </v-col>
                <v-col class="pa-0 pb-2 px-1" cols="6">
                  <v-text-field
                    :append-icon="show2 ? `fa-eye` : `fa-eye-slash`"
                    :rules="[rules.required, rules.min]"
                    :type="show2 ? 'text' : 'password'"
                    v-model="password"
                    label="الرقم السري"
                    class="input-group--focused font-weight-regular"
                    @click:append="show2 = !show2"
                    outlined
                    required
                  >
                  </v-text-field>
                </v-col>
              </v-row>

              <v-row justify="center" class="ma-0">
                <v-col class="pa-0 pt-2" cols="12">
                  <v-text-field
                    :rules="[rules.required, rules.min]"
                    v-model="doublepassword"
                    label="تأكيد الرقم السري"
                    class="input-group--focused font-weight-regular"
                    outlined
                    required
                  >
                  </v-text-field>
                </v-col>
              </v-row>
            </v-card-text>
            <v-card-actions class="justify-center">
              <v-btn class="btn1" text @click="submit"> تسجيل </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <!-- <v-col class="pa-0" cols="12" sm="6" md="6" lg="6">
          <v-img
            lazy
            max-width="100%"
            src="../assets/outsrc//Wavy_Tech-28_Single-10.jpg"
          ></v-img>
        </v-col> -->
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
  background: $background;
  // background-position: center;
  // background-repeat: no-repeat;
  // background-size: cover;
  padding-bottom: 20px;
  .card-con {
    position: relative;
    background-color: rgb(255, 255, 255) !important;
  }
  .btn1 {
    background: $background;

    color: $fontcolorsm;
    letter-spacing: 0;
    font-family: $fontfamliy2;
    width: 250px;
    font-size: 18px;
  }
  .avatar {
    transform: translate(0px, 35px);
    position: relative;
    z-index: 5;
  }
  .user-bak {
    position: absolute;
    bottom: -9px;
    background: $background;

    width: 174px;
    height: 54px;
    -webkit-clip-path: circle(50% at 50% 1%);
    clip-path: circle(45% at 50% -6%);
  }
}
</style>
