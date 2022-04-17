<template>
  <div class="ShowRoomInfoSetting">
    <v-container>
      <v-row class="justify-center">
        <v-col cols="12">
          <v-card-actions class="justify-center">
            <v-avatar size="200" color="#eee">
              <v-img
                contain
                src="../assets/showroom/orignal-1635857145-70.png"
                lazy-src="../assets/showroom/orignal-1635857145-70.png"
                alt="../assets/showroom/orignal-1635857145-70.png"
              >
              </v-img>
              <v-btn elevation="0" dark small fab class="input-file blue">
                <v-file-input
                  class="pa-0 ma-0"
                  hide-input
                  truncate-length="15"
                ></v-file-input>
              </v-btn>
            </v-avatar>
          </v-card-actions>
        </v-col>
      </v-row>
      <!-- ShowRoom Name  -->
      <v-row class="justify-center">
        <v-col cols="12">
          <h2 class="text-center grey--text">RO154865</h2>
        </v-col>
        <v-col cols="12">
          <h2 class="text-center" v-text="ShowRoomName"></h2>
        </v-col>
        <v-col cols="12" md="7" sm="9">
          <span class="mb-1 d-inline-block"> أسم المعرض : </span>
          <v-text-field
            v-model="ShowRoomName"
            label="أسم المعرض"
            clearable
            solo
            hide-details="true"
            max-width="200"
          ></v-text-field>
        </v-col>
      </v-row>
      <!-- place  -->
      <v-row class="justify-center">
        <v-col cols="12">
          <h2 class="text-center" v-text="ShowRoomName"></h2>
        </v-col>
        <v-col cols="12" md="7" sm="9">
          <span class="mb-1 d-inline-block">المنطقة :</span>
          <v-text-field
            v-model="ShowRoomName"
            label=" المنطقة"
            clearable
            solo
            hide-details="true"
            max-width="200"
          ></v-text-field>
        </v-col>
      </v-row>
      <!-- showroom Location  -->
      <v-row class="justify-center">
        <v-col cols="12">
          <h3 class="text-center" v-text="ShowRoomLocation"></h3>
        </v-col>
        <v-col cols="12" md="7" sm="9">
          <span class="mb-1 d-inline-block">موقع المعرض :</span>
          <v-text-field
            v-model="ShowRoomLocation"
            label="موقع المعرض"
            clearable
            solo
            hide-details="true"
            max-width="200"
          ></v-text-field>
        </v-col>
      </v-row>
      <!--Phone Number   -->
      <v-row class="justify-center">
        <v-col cols="12" md="7" sm="9">
          <span class="mb-1 d-inline-block"> الهاتف : </span>
          <v-card class="mx-auto" tile>
            <v-list-group>
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title>رقم الهاتف</v-list-item-title>
                </v-list-item-content>
              </template>
              <!-- 1- Number  -->
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>
                    <v-text-field
                      v-model="Number1"
                      label="رقم الهاتف"
                      clearable
                      solo
                      hide-details="true"
                      max-width="200"
                    ></v-text-field
                  ></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <!-- 2- Number  -->
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>
                    <v-text-field
                      v-model="Number2"
                      label="رقم الهاتف"
                      clearable
                      solo
                      hide-details="true"
                      max-width="200"
                    ></v-text-field
                  ></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <!-- 3- Number  -->
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>
                    <v-text-field
                      v-model="Number3"
                      label="رقم الهاتف"
                      clearable
                      solo
                      hide-details="true"
                      max-width="200"
                    ></v-text-field
                  ></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-group>
          </v-card>
        </v-col>
      </v-row>
      <!-- Whatsapp  -->
      <v-row class="justify-center">
        <v-col cols="12" md="7" sm="9">
          <span class="mb-1 d-inline-block"> الوتس آب : </span>
          <v-card class="mx-auto" tile>
            <v-list-group>
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title>رقم الوتس آب</v-list-item-title>
                </v-list-item-content>
              </template>
              <!-- 1- Number  -->
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>
                    <v-text-field
                      v-model="Number1"
                      label="رقم الوتس آب"
                      clearable
                      solo
                      hide-details="true"
                      max-width="200"
                    ></v-text-field
                  ></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <!-- 2- Number  -->
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>
                    <v-text-field
                      v-model="Number2"
                      label="رقم الوتس آب"
                      clearable
                      solo
                      hide-details="true"
                      max-width="200"
                    ></v-text-field
                  ></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <!-- 3- Number  -->
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>
                    <v-text-field
                      v-model="Number3"
                      label="رقم الوتس آب"
                      clearable
                      solo
                      hide-details="true"
                      max-width="200"
                    ></v-text-field
                  ></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-group>
          </v-card>
        </v-col>
      </v-row>
      <v-row class="justify-center">
        <v-col cols="12" md="7" sm="9">
          <v-text-field
            solo
            type="password"
            v-model="password"
            hide-details="true"
            disabled
          ></v-text-field>
          <router-link
            to="/PasswordChange"
            class="mt-2 d-block"
            v-text="ShowRoomPassword"
          >
          </router-link>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  name: "ShowRoomInfoSetting",
  data() {
    return {
      ShowRoomName: "معرض النجم للسيارات",
      ShowRoomLocation: "صنعاء-الحوبان-مقابل مدرسة الروضه",
      ShowRoomPassword: "تغير كلمة السر",
      // ShowRoomPassword: "تغير كلمة السر",
      Number1: 1121331731,
      Number2: 1121331732,
      Number3: 1121331733,
      password: "Password",
      show1: false,
      rules: {
        required: (value) => !!value || "Required.",
        min: (v) => v.length >= 8 || "Min 8 characters",
        PasswordMatch: () => `كلمة السر غير صحيحة`,
      },
    };
  },
  //  :rules="[rules.required, rules.PasswordMatch]"
  //  :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
  //:type="show1 ? 'text' : 'password'"
  //@click:append="show1 = !show1"
};
</script>
<style lang="scss" scoped>
@import "@/scss/virables";
@import "@/scss/mixin";

.ShowRoomInfoSetting {
  font-family: $fontfamliy !important;
  letter-spacing: 0px !important;
  color: $fontcolor;

  .input-file {
    position: absolute;
    bottom: 3px;
    display: flex;
    justify-content: center;
  }
  .input-file::v-deep .v-input__prepend-outer {
    margin: 0 !important;
  }
  .input-file::v-deep .v-input {
    justify-content: center;
  }
}
::v-deep
  .v-input--selection-controls__input:hover
  .v-input--selection-controls__ripple:before {
  transform: scale(0);
}
::v-deep
  .v-input--selection-controls__input:active
  .v-input--selection-controls__ripple:before {
  transform: scale(0);
}
</style>
