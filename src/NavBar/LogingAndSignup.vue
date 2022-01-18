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
        max-width="700px"
        max-height="400px"
        activator="v-dialog"
        class="v-dialog"
        overlay-opacity="0.9"
        transition="dialog-transition"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
          outlined
            dark
            elevation="0"
            class="ma-2 btn"
            v-bind="attrs"
            v-on="on"
            color="#0d47a1"
          >
            <b v-text="SignUp" class=" sgin"></b>
            <v-icon right>fa-user-alt</v-icon>
          </v-btn>
        </template>
        <v-card>
          <v-toolbar
            height="50px"
            flat
            class="rounded-0"
            dark
            color="primary darken-2 "
          >
            <v-btn class="-3" icon dark @click="dialog = false">
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
    color: $background;
  }
  .setting {
    b {
      margin: 0;
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
</style>
