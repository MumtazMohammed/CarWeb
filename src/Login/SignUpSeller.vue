<template>
  <div class="sign-up">
    <v-card flat class="card-con overflow-hidden pa-2" ref="form">
      <v-form class="pa-2">
        <v-col class="py-0 mx-auto" cols="12">
          <v-combobox
            v-model="select"
            outlined
            :items="dropdown"
          ></v-combobox>
        </v-col>
        <v-col class="py-0 mx-auto" cols="12">
          <v-text-field
            ref="FirstName"
            v-model="FirstName"
            :rules="[() => !!FirstName || 'هذه الخانة مطلوبه']"
            :error-messages="errorMessages"
            label="الأسم كامل"
            required
            outlined
          ></v-text-field>
        </v-col>
        <v-col class="py-0 mx-auto" cols="12">
          <v-text-field
            ref="FirstName"
            v-model="FirstName"
            :rules="[() => !!FirstName || 'هذه الخانة مطلوبه']"
            :error-messages="errorMessages"
            label="البريد الأكترواني"
            required
            outlined
          ></v-text-field>
        </v-col>
        <v-col class="py-0 mx-auto" cols="12">
          <v-text-field
            ref="number"
            v-model="number"
            :rules="[() => !!number || 'هذه الخانة مطلوبه']"
            label="جوال"
            :error-messages="errorMessages"
            required
            outlined
            class="ma-0"
          ></v-text-field>
        </v-col>
        <v-col class="py-0 mx-auto" cols="12">
          <v-text-field
            ref="number"
            v-model="number"
            :rules="[() => !!number || 'هذه الخانة مطلوبه']"
            label="واتس آب"
            :error-messages="errorMessages"
            required
            outlined
            class="ma-0"
          ></v-text-field>
        </v-col>
        <v-col class="py-0 mx-auto" cols="12">
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
            <v-btn large class="btn1 elevation-0" @click="submit">
              أرسال الطلب
            </v-btn>
          </v-card-actions>
        </v-col>
      </v-form>
    </v-card>
  </div>
</template>
<script>
export default {
  components: {},
  name: "SginUp",
  data: () => ({
    errorMessages: "",
    FirstName: "",
    number: "",
    password: "",
    show2: false,
    formHasErrors: false,
    select: ["تاجر"],
    dropdown: [{ text: "تاجر" }, { text: "وكيل" }],

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

.sign-up {
  width: 100%;
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

  .switch::v-deep
    .v-input--selection-controls__input:hover
    .v-input--selection-controls__ripple:before {
    transform: scale(0);
  }
}
</style>
