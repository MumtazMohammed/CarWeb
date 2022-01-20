<template>
  <div class="hidden">
    <!-- user info  -->
    <div class="user hidden-screen-only">
      <b v-text="UserName" class="grey--text"></b>
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
        max-width="800px"
        max-height="500px"
        activator="v-dialog"
        class="v-dialog"
        overlay-opacity="0.9"
        transition="dialog-transition"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn  elevation="0" class="ma-2 btn1" v-bind="attrs" v-on="on">
            <b v-text="SignUp" class="sgin"></b>
            <v-icon class="sign-in-icon" right>fas fa-sign-in-alt</v-icon>
          </v-btn>
        </template>
        <v-card>
          <v-toolbar
            height="50px"
            flat
            class="rounded-0"
            dark
            color="transparent"
          >
            <v-btn class="primary--text" icon @click="dialog = false">
              <v-icon>fas fa-times</v-icon>
            </v-btn>
          </v-toolbar>
          <v-toolbar-items class="toolbar-items">
            <Login :dialog="dialog" @dialogclose="dialog = $event" />
          </v-toolbar-items>
        </v-card>
      </v-dialog>
    </div>
    <!-------------------------->
  </div>
</template>
<script>
import Login from "../Login/Login.vue";
const components = { Login };
export default {
  name: "LogingAndSignup",
  components,
  data() {
    return {
      UserName: "Mohammed Ameen",
      SignUp: "تـسجيل الـدخول",
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
  @media (max-width: 600px) {
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    height: auto;
    padding: 15px 0 0 0;
    border-bottom: 1px solid rgba(147, 147, 147, 0.299);
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
  .sgin {
    font-family: $fontfamliy;
    letter-spacing: 0px;
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
    color: $fontcolorsm;
    background-color: $btnbackground !important;
    @media (max-width: 599px) {
      background-color: transparent !important;
      border: 1px solid white !important;
    }
    .sign-in-icon {
      @media (max-width: 599px) {
        color: white !important;
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
</style>
