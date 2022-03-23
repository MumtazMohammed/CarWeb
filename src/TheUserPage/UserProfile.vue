<template>
  <div class="UserProfile">
    <v-container>
      <!-- User Info  -->
      <v-row class="justify-center">
        <v-col cols="12">
          <div class="d-flex justify-center">
            <v-avatar size="100" color="white">
              <img src="../assets/pp.jpg" alt="alt" />
            </v-avatar>
            <!-- <v-file-input
              class="justify-center pa-2 ma-0 mr-2"
              hide-input
              prepend-icon="mdi-camera"
            >
            </v-file-input> -->
          </div>
        </v-col>
        <v-col cols="12">
          <v-card>
            <div class="d-flex align-center">
              <v-card-title class="title">الأسم : </v-card-title>
              <p class="pa-4 pr-0 ma-0">{{ UserName }}</p>
            </div>
            <v-divider></v-divider>

            <div class="d-flex align-center">
              <v-card-title class="title">رقم الحساب : </v-card-title>
              <p class="pa-4 pr-0 ma-0">{{ UserIdNum }}</p>
            </div>
            <v-divider></v-divider>

            <div class="d-flex align-center">
              <v-card-title class="title">هاتف : </v-card-title>
              <p class="pa-4 pr-0 ma-0">{{ UserPhoneNum }}</p>
            </div>
            <v-divider></v-divider>

            <div
              class="d-flex align-start justify-start flex-column flex-lg-row flex-md-row flex-sm-row"
            >
              <v-card-title class="title">البريد الأكترواني : </v-card-title>
              <p
                class="pa-2 pa-lg-4 pa-md-4 pa-sm-4 pr-lg-0 pr-md-0 pr-sm-0 ma-0 email"
              >
                {{ Email }}
              </p>
            </div>
            <v-divider></v-divider>
            <div class="d-flex align-center">
              <v-card-title class="title">المنطقة : </v-card-title>
              <p class="pa-4 pr-0 ma-0">{{ UserPlace }}</p>
            </div>
          </v-card>
          <v-card-actions class="flex-wrap justify-center align-center">
            <v-btn
              to="/UserProfileEdit"
              color="green darken-2"
              class="user-edit-btn ma-2"
              width="200"
            >
              تعديل الحساب

              <v-spacer></v-spacer>
              <v-icon>mdi-account-edit-outline</v-icon>
            </v-btn>
            <v-btn color="red darken-2" class="user-edit-btn ma-2" width="200">
              حذف الحساب
              <v-spacer></v-spacer>
              <v-icon>mdi-delete-circle-outline</v-icon>
            </v-btn>
          </v-card-actions>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  components: {},
  name: "UserProfile",
  data() {
    return {
      hasSaved: false,
      show1: false,
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
.UserProfile {
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
    @media (max-width: 450px) {
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
