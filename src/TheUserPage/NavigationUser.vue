<template>
  <div class="NormalUserPage">
    <v-toolbar
      dark
      flat
      color="grey darken-3"
      height="80"
      class="px-0 px-md-16 px-lg-16"
    >
      <v-app-bar-nav-icon
        class="hidden-sm-and-up"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-tabs
        align-with-title
        class="justify-center hidden-xs-only"
        optional
        slider-size="3"
        mobile-breakpoint
      >
        <v-tab
          router
          :to="{
            name: 'UserAdd',
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
            name: 'SavedAdUser',
            params: { SavedAd: 'المفضلة' },
          }"
          exact-path
          class="nav-link ma-0"
          color="blue"
        >
          المفضلة
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
      <v-spacer></v-spacer>
      <!-- go to the main page  -->
      <v-tabs
        align-with-title
        class="justify-end main-page"
        optional
        slider-size="3"
        mobile-breakpoint
      >
        <v-tab router to="/" exact-path class="nav-link ma-0">
          <v-icon class="link-home-icon">mdi-home</v-icon>
        </v-tab>
      </v-tabs>
      <!--  -->
    </v-toolbar>
    <!-- Mobile breakpoint  -->
    <v-navigation-drawer
      color="grey  darken-3"
      v-model="drawer"
      dark
      app
      bottom
      temporary
    >
      <v-list nav>
        <v-list-item-group v-model="group">
          <v-list-item
            router
            :to="{
              name: 'UserAdd',
              params: { MyAdd: 'إعلاناتي' },
            }"
            exact-path
            color="blue"
          >
            <v-list-item-title class="nav-link"> إعلاناتي </v-list-item-title>
          </v-list-item>

          <v-list-item
            router
            :to="{
              name: 'SavedAdUser',
              params: { SavedAd: 'المفضلة' },
            }"
            exact-path
            color="blue"
          >
            <v-list-item-title class="nav-link">المفضلة</v-list-item-title>
          </v-list-item>

          <v-list-item
            router
            :to="{
              name: 'UserProfile',
              params: { Acount: 'حسابي' },
            }"
            exact-path
            color="blue"
          >
            <v-list-item-title class="nav-link"> حسابي </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script>
export default {
  name: "NormalUserPage",
  components: {},
  data() {
    return { drawer: false, group: null };
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
    // @media (max-width: 600px) {
    //   font-size: 24px !important;
    // }
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
  .main-page::v-deep .v-slide-group__content.v-tabs-bar__content {
    justify-content: flex-end;
  }
}
</style>
