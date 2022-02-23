<template>
  <div class="hidden">
    <!-- user info  -->
    <div class="user hidden-screen-only">
      <v-btn class="mx-2 btn" small fab color="primary">
        <v-icon class="icon">fa-user-alt</v-icon>
      </v-btn>
    </div>
    <!-- ---------for sgin up--------- -->

    <!-- --------------------- -->
    <div class="ma-0">
      <v-dialog
        v-model="dialog"
        persistent
        max-width="700px"
        max-height="500px"
        activator="v-dialog"
        class="v-dialog"
        overlay-opacity="0.9"
        transition="dialog-transition"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn elevation="0" class="btn1" v-bind="attrs" v-on="on">
            <b v-text="btnSignUp" class="sgin"></b>
            <v-icon class="sign-in-icon" right>fas fa-sign-in-alt</v-icon>
          </v-btn>
        </template>
        <v-card>
          <v-toolbar
            height="60"
            flat
            class="rounded-0"
            dark
            color="transparent"
          >
            <v-btn color="#0881fa" icon @click="dialog = false">
              <v-icon>fas fa-times</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
            <!-- user  -->
            <v-tooltip top>
              <template v-slot:activator="{ on, attrs }">
                <v-avatar
                  v-bind="attrs"
                  v-on="on"
                  class="mx-1 btn-icon"
                  size="40"
                  @click="
                    (Login = true), (LoginSeller = false), (SignUp = false)
                  "
                >
                  <v-img class="icon-choise" src="../assets/user.png"></v-img>
                </v-avatar>
              </template>
              <span>تـسجيل الدخول</span>
            </v-tooltip>
            <!--  -->
            <!-- seller  -->
            <v-tooltip top>
              <template v-slot:activator="{ on, attrs }">
                <v-avatar
                  v-bind="attrs"
                  v-on="on"
                  class="mx-1 btn-icon"
                  size="40"
                  @click="(LoginSeller = true), (Login = false)"
                >
                  <v-img
                    class="icon-choise"
                    src="../assets/manager.png"
                  ></v-img>
                </v-avatar>
              </template>
              <span> حساب بائع </span>
            </v-tooltip>
            <!--  -->
          </v-toolbar>
          <v-toolbar-items v-show="Login" class="toolbar-items">
            <Login :dialog="dialog" @dialogclose="dialog = $event" />
          </v-toolbar-items>
          <v-toolbar-items v-show="LoginSeller" class="toolbar-items">
            <LoginSeller />
          </v-toolbar-items>
          <v-toolbar-items v-show="SignUp" class="toolbar-items">
            <SignUp />
          </v-toolbar-items>
          <v-spacer></v-spacer>
          <v-toolbar-items class="toolbar-items">
            <v-card v-if="Login == true" class="d-flex" width="100%">
              <v-card-text class="do-not-have-acount-text pl-1">
                انشاء حساب ؟
              </v-card-text>
              <a
                @click="(SignUp = true), (Login = false)"
                class="do-not-have-acount-link pa-4 pr-2"
                >أظغط هنا</a
              >
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
    background-color: $color-1 !important;
    @media (max-width: 959px) {
      background: transparent !important;
      color: $fontcolor !important;
      border: 1px solid $fontcolorsm;
    }
    .sign-in-icon {
      color: $fontcolorsm !important;
      font-size: 14px;

      @media (max-width: 959px) {
        font-size: 13px;
      }
    }
    .sgin {
      color: $fontcolorsm !important;
      letter-spacing: 0px;
      font-family: $fontfamliy;
      font-size: 14px;
      @media (max-width: 959px) {
        font-size: 14px;
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
    margin: 5px !important;
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
  font-weight: 300 !important;
  width: fit-content !important;
}
.do-not-have-acount-link {
  font-family: $fontfamliy;
  font-size: 15px;
  text-decoration: none !important;
}
</style>
