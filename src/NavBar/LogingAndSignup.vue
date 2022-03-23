<template>
  <div class="hidden">
    <!-- user info  -->
    <div class="user hidden-screen-only">
      <v-btn class="mx-2 btn" small fab color="primary">
        <v-icon class="icon">fa-user-alt</v-icon>
      </v-btn>
    </div>
    <!-- --------------------- -->
    <v-menu class="menu" open-on-hover bottom offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-card outlined class="btn1" v-bind="attrs" v-on="on">
          <v-card-actions class="pa-0">
            <v-card-text v-text="btnSignUp" class="sgin pa-2"></v-card-text>
            <v-icon class="sign-in-icon" right>mdi-account</v-icon>
          </v-card-actions>
        </v-card>
      </template>

      <v-list>
        <v-list-item
          :to="Login.path"
          v-for="(Login, index) in Login"
          :key="index"
          class="title-link-box"
        >
          <v-list-item-title class="title-link">{{
            Login.title
          }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <!-------------------------->
  </div>
</template>
<script>
export default {
  name: "LogingAndSignup",
  data() {
    return {
      btnSignUp: "تـسجيل الـدخول",
      Login: [
        { title: " تسجيل الدخول", path: "/Login" },
        { title: "تسجيل الدخول (تاجر / وكيل) ", path: "/LoginSeller" },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
@import "../scss/virables";
@import "../scss/mixin";
.hidden {
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

  .icon {
    font-size: 18px !important;
  }
  .btn1 {
    cursor: pointer;
    @media (max-width: 959px) {
      background: transparent !important;
      color: $fontcolor !important;
      border: 1px solid $fontcolorsm;
    }
    .sign-in-icon {
      color: $color-1 !important;
      font-size: 18px;
      @media (max-width: 959px) {
        color: $fontcolorsm !important;
      }
    }
    .sgin {
      color: $fontcolorlinks !important;
      letter-spacing: 0px;
      font-family: $fontfamliy;
      font-size: 14px;
      font-weight: 500 !important;
      @media (max-width: 959px) {
        font-size: 14px;
        color: $fontcolorsm !important;
      }
    }
  }
}
.title-link {
  font-family: $fontfamliy !important;
  font-size: 12px !important;
  font-weight: 600;
}
.title-link-box {
  transition: all 0.3s ease;
}
.title-link-box:hover {
  color: $color-1 !important;
}
</style>
