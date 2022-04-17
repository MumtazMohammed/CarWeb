<template>
  <div class="UserProfileEdit">
    <v-container>
      <v-row class="justify-center">
        <v-col class="pt-0" cols="12">
          <v-card-title class="title pt-0"> تعديل الملف الشخصي </v-card-title>
        </v-col>
        <v-col cols="12" sm="7" md="2">
          <v-card-actions class="pa-0 justify-center">
            <v-avatar size="100" color="white">
              <img src="../assets/pp.jpg" alt="alt" />
            </v-avatar>
          </v-card-actions>
        </v-col>
        <v-col class="my-auto" cols="12" sm="10" md="5">
          <v-file-input
            label="تغير الصورة الشخصية"
            filled
            hide-details
            solo
            rounded
            prepend-inner-icon="mdi-camera"
            class="input"
          ></v-file-input>
        </v-col>
        <v-col class="pb-0" cols="12" sm="10" md="7">
          <v-text-field
            v-model="UserName"
            label="الأسم كامل"
            solo
            class="input"
          ></v-text-field>
          <v-text-field
            v-model="UserPhoneNum"
            label=" هاتف"
            solo
            class="input"
          ></v-text-field>
          <v-text-field
            v-model="Email"
            label=" البريد الأكتروني"
            solo
            class="input"
          ></v-text-field>
          <v-text-field
            disabled
            v-model="UserPlace"
            label=" المنطقة "
            solo
            class="input"
          ></v-text-field>
        </v-col>
        <!--******** change password  **********-->
        <v-col class="pt-0" cols="12">
          <v-card-title class="title pt-0"> تعديل كلمة السر </v-card-title>
        </v-col>
        <v-col class="pt-0" cols="12" md="5" sm="8">
          <v-text-field
            v-model="password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            label="أدخل كلمة المرور الحالي"
            hint="At least 8 characters"
            counter
            class="input"
            @click:append="show1 = !show1"
          ></v-text-field>
          <v-text-field
            v-model="password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            label="أدخل كلمة المرور الجديد"
            hint="At least 8 characters"
            counter
            class="input"
            @click:append="show1 = !show1"
          ></v-text-field>
        </v-col>
        <!-- btn Update Or cancel  -->
        <v-col class="my-auto" cols="12">
          <v-card-actions class="flex-column justify-center align-center">
            <!-- update  -->
            <v-btn
              color="green darken-1"
              class="edit-btn my-1"
              width="50%"
              @click="save"
            >
              تحديث
              <v-spacer></v-spacer>
              <v-icon left>mdi-check-bold</v-icon>
            </v-btn>
            <v-snackbar
              color="success "
              v-model="hasSaved"
              :timeout="2000"
              absolute
              centered
            >
              <p class="update ma-0">
                <v-icon right>mdi-check-circle-outline </v-icon>
                تم حفظ التعديل
              </p>
            </v-snackbar>
            <!-- cancle  -->
            <v-spacer></v-spacer>
            <v-btn
              @click="(currentUserInfo = !currentUserInfo), (edit = !edit)"
              color="red darken-1"
              class="edit-btn my-1"
              width="50%"
            >
              إلغاء التعديل
              <v-spacer></v-spacer>
              <v-icon left>mdi-close-circle-outline</v-icon>
            </v-btn>
          </v-card-actions>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  name: "UserProfileEdit",
  data() {
    return {
      hasSaved: false,
      UserName: "محمد أمين شمسان",
      Email: "momu130399@gmail.com",
      UserIdNum: 15481,
      UserPhoneNum: "01121331731",
      UserPlace: "تعز",
      password: "Password",
      rules: {
        required: (value) => !!value || "Required.",
        min: (v) => v.length >= 8 || "Min 8 characters",
        emailMatch: () => `The email and password you entered don't match`,
      },
    };
  },
  methods: {
    save() {
      this.hasSaved = true;
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../scss/virables";
@import "../scss/mixin";
.UserProfileEdit {
  width: 100%;
  padding: $padding;
  ::v-deep .v-text-field.v-text-field--solo .v-input__prepend-outer {
    display: none;
  }
  .title {
    color: $fontcolor !important;
    font-size: 18px !important;
    font-family: $fontfamliy !important;
    letter-spacing: 0 !important;
  }
  .update {
    color: $fontcolorsm !important;
    font-size: 20px !important;
    font-family: $fontfamliy !important;
    letter-spacing: 0 !important;
  }
  p {
    color: $fontcolorlinks !important;
    font-family: $fontfamliy !important;
    letter-spacing: 0px !important;
    font-size: 18px !important;
  }
  .email {
    color: $fontcolorlinks !important;
    font-family: $fontfamliy !important;
    letter-spacing: 1px !important;
    font-size: 18px !important;
  }
  .user-edit-btn {
    color: $fontcolorsm !important;
    font-size: 18px !important;
    font-family: $fontfamliy !important;
    letter-spacing: 0 !important;
  }
  .edit-btn {
    color: $fontcolorsm !important;
    font-size: 18px !important;
    font-family: $fontfamliy !important;
    letter-spacing: 0 !important;
    width: 40% !important;

    @media (max-width: 550px) {
      width: 70% !important;
    }
    @media (max-width: 370px) {
      width: 100% !important;
    }
  }
  .input {
    font-size: 18px !important;
    font-family: $fontfamliy !important;
    letter-spacing: 0 !important;
  }
}
</style>
