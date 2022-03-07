<template>
  <div class="hidden">
    <!-- user info  -->
    <div class="user hidden-screen-only">
      <v-btn class="mx-2 btn" small fab color="primary">
        <v-icon class="icon">fa-user-alt</v-icon>
      </v-btn>
    </div>
    <!-- --------------------- -->
    <div class="ma-0">
      <v-dialog
        v-model="dialog"
        persistent
        max-width="900px"
        fullscreen
        activator="v-dialog"
        class="v-dialog overflow-hidden"
        overlay-opacity="0.9"
        transition="dialog-transition"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn elevation="2" class="btn1" v-bind="attrs" v-on="on">
            <b v-text="btnSignUp" class="sgin"></b>
            <v-icon class="sign-in-icon" right>fas fa-sign-in-alt</v-icon>
          </v-btn>
        </template>
        <v-card>
          <v-toolbar
            height="auto"
            flat
            class="rounded-0"
            dark
            color="transparent"
          >
            <!-- close the dialog  -->
            <div>
              <v-btn color="red" icon @click="dialog = false">
                <v-icon>fas fa-times</v-icon>
              </v-btn>
            </div>
            <v-spacer></v-spacer>
            <!-- return back  -->
            <div v-if="SignUp">
              <v-btn
                color="primary"
                icon
                @click="(Login = true), (SignUp = false)"
              >
                <v-icon>mdi-arrow-u-left-top-bold</v-icon>
              </v-btn>
            </div>
            <!-- Show Seller login -->
            <v-card class="" color="transparent" flat>
              <v-card-actions class="justify-end" v-if="Login">
                <v-card-text class="do-not-have-acount-text pl-0">
                  صاحب معرض ؟
                </v-card-text>

                <a
                  @click="(LoginSeller = true), (Login = false)"
                  class="do-not-have-acount-link pa-4 pr-2"
                >
                  أظغط هنا
                </a>
              </v-card-actions>
              <!-- show User Login  -->
              <v-card-actions class="justify-end" v-if="LoginSeller">
                <v-card-text class="do-not-have-acount-text pl-0">
                  تـسجيل دخول ؟
                </v-card-text>
                <a
                  @click="
                    (Login = true), (LoginSeller = false), (SignUp = false)
                  "
                  class="do-not-have-acount-link pa-4 pr-2"
                >
                  أظغط هنا
                </a>
              </v-card-actions>
            </v-card>
          </v-toolbar>
          <v-toolbar-items v-show="Login" class="toolbar-items justify-center">
            <Login :dialog="dialog" @dialogclose="dialog = $event" />
          </v-toolbar-items>
          <v-toolbar-items
            v-show="LoginSeller"
            class="toolbar-items justify-center"
          >
            <LoginSeller />
          </v-toolbar-items>
          <v-toolbar-items v-show="SignUp" class="toolbar-items justify-center">
            <SignUp />
          </v-toolbar-items>
          <v-spacer></v-spacer>
          <!-- to make a new account  -->
          <v-toolbar-items class="toolbar-items">
            <v-card v-if="Login" flat color="transparent" width="100%">
              <v-card-actions class="justify-center">
                <v-card-text class="do-not-have-acount-text pl-1">
                  انشاء حساب ؟
                </v-card-text>
                <a
                  @click="(SignUp = true), (Login = false)"
                  class="do-not-have-acount-link pa-4 pr-2"
                  >أظغط هنا
                </a>
              </v-card-actions>
            </v-card>
          </v-toolbar-items>
        </v-card>
      </v-dialog>
    </div>
    <!-------------------------->
  </div>
</template>
<script>
import Login from "../Login/Login.vue";
import LoginSeller from "../Login/LoginSeller.vue";
import SignUp from "../Login/SignUp.vue";
const components = { Login, LoginSeller, SignUp };
export default {
  name: "LogingAndSignup",
  components,
  data() {
    return {
      Login: true,
      LoginSeller: false,
      SignUp: false,
      btnSignUp: "تـسجيل الـدخول",
      dialog: false,
    };
  },
};
</script>
<style lang="scss" scoped>
@import "../scss/virables";
@import "../scss/mixin";
.hidden {
  display: flex;
  align-items: center;
  @media (max-width: 959px) {
    justify-content: center;
    height: auto;
    margin: 30px 0 20px 0 !important;
  }
  .user {
    @media (max-width: 600px) {
      display: flex;
      flex-direction: column-reverse;
      justify-content: center;
      align-items: center;
    }
  }
  b {
    font-size: 14px;
    @media (max-width: 600px) {
      color: $fontcolorsm !important;
    }
  }

  i.v-icon.notranslate.fa.fa-cog.theme--dark {
    @media (max-width: 960px) {
      font-size: 17px;
      color: $fontcolorsm;
    }
  }
  .icon {
    font-size: 18px !important;
  }
  .btn1 {
    @media (max-width: 959px) {
      background: transparent !important;
      color: $fontcolor !important;
      border: 1px solid $fontcolorsm;
    }
    .sign-in-icon {
      color: $fontcolorlinks !important;
      font-size: 14px;
      margin-top: 2px;
      @media (max-width: 959px) {
        font-size: 13px;
        color: $fontcolorsm !important;
      }
    }
    .sgin {
      color: $fontcolorlinks !important;
      letter-spacing: 0px;
      font-family: $fontfamliy;
      font-size: 14px;
      @media (max-width: 959px) {
        font-size: 14px;
        color: $fontcolorsm !important;
      }
    }
  }
}
.toolbar-items {
  height: auto;
  width: 100%;
}
.v-dialog {
  margin: 2px !important;
  @media (max-width: 400px) {
    width: 100% !important;
    height: 100% !important;
    margin: 0 !important;
  }
}
::v-deep .v-dialog.v-dialog--active.v-dialog--persistent {
  @media (max-width: 500px) {
    margin: 0px !important;
  }
  @media (max-width: 350px) {
    margin: 0px !important;
  }
}
.btn-icon {
  cursor: pointer;
}
.do-not-have-acount-text {
  font-family: $fontfamliy;
  font-size: 16px;
  font-weight: 500 !important;
  width: fit-content !important;
  color: #000;
}
.do-not-have-acount-link {
  font-family: $fontfamliy;
  font-size: 15px;
  text-decoration: none !important;
}
::v-deep .v-dialog:not(.v-dialog--fullscreen) {
  max-height: 95%;
}
</style>
