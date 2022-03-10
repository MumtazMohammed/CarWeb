<template>
  <div class="NormalUserPage">
    <v-toolbar
      dark
      color="grey darken-3"
      height="80"
      class="px-0 px-md-16 px-lg-16"
    >
      <v-tabs
        align-with-title
        class="justify-center"
        optional
        slider-size="3"
        mobile-breakpoint
      >
        <v-tab
          router
          :to="{
            name: 'TheUserPage.UserAdd',
            params: { MyAdd: 'إعلاناتي' },
          }"
          exact-path
          class="nav-link ma-0"
          color="blue"
        >
          إعلاناتي
        </v-tab>
        <v-tab
          router
          :to="{
            name: 'UserProfile',
            params: { Acount: 'حسابي' },
          }"
          exact-path
          class="nav-link"
          color="blue"
        >
          حسابي
        </v-tab>
      </v-tabs>
    </v-toolbar>
    <v-app-bar flat height="40" color="transparent">
      <router-link class="link-home" exact to="/">
        <v-icon class="link-home-icon blue--text">mdi-home-circle</v-icon>
        الصفحة الرئيسية
      </router-link>
    </v-app-bar>
  </div>
</template>
<script>
export default {
  name: "NormalUserPage",
  components: {},
  data() {
    return {};
  },
  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../scss/virables";
@import "../scss/mixin";
.NormalUserPage {
  width: 100%;
  min-height: auto;
  .NavTitle {
    color: $fontcolor;
    font-size: 22px;
    letter-spacing: 0px !important;
    font-family: "Tajawal", sans-serif;
    font-weight: 500;
    pointer-events: none;
    width: fit-content;
    text-align: start;
    text-decoration: none;
  }
  ::v-deep .theme--dark.v-list-item--active:before {
    opacity: 0;
    // background-color: #f44336;
  }
  .active {
    border-right: 3px solid #eee;
  }
  .nav-link {
    font-size: 18px;
    font-family: $fontfamliy;
    letter-spacing: 0;
  }
  .link-home {
    font-size: 15px !important;
    font-family: $fontfamliy;
    letter-spacing: 0;
    color: $fontcolor;
    text-decoration: none !important;
    font-weight: bold;
    @media (max-width: 450px) {
      font-size: 15px !important;
    }
  }
}
.link-home-icon {
  animation: home 0.5s infinite 0s alternate-reverse linear;
}
@keyframes home {
  from {
    transform: scale(0.92);
  }
  to {
    transform: scale(1);
  }
}
</style>
