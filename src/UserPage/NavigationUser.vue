<template>
  <div class="NormalUserPage">
    <v-app-bar dark color="#0881fa" class="px-0 px-md-16 px-lg-16">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <router-link class="link-home" exact to="/">
        الصفحة الرئيسية
      </router-link>
    </v-app-bar>

    <v-navigation-drawer
      class="#0881fa"
      color="#0881fa"
      v-model="drawer"
      absolute
      temporary
    >
      <v-list>
        <v-list-item-group
          dark
          v-model="group"
          active-class="white--text active"
        >
          <v-list-item
            router
            :to="{
              name: 'TheUserPage.UserAdd',
              params: { MyAdd: 'إعلاناتي' },
            }"
            exact-path
            exact
            class="ma-0 my-2"
            color="blue"
          >
            <v-list-item-content>
              <v-list-item-title class="nav-link">إعلاناتي</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item
            link
            router
            :to="{
              name: 'UserProfile',
              params: { Acount: 'حسابي' },
            }"
            exact-path
            exact
            class="ma-0 my-2"
            color="blue"
          >
            <v-list-item-content>
              <v-list-item-title class="nav-link">حسابي</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item
            router
            :to="{
              name: 'UserSaveAd',
              params: { SaveAd: 'المفضلة' },
            }"
            exact-path
            exact
            class="ma-0 my-2"
            color="blue"
          >
            <v-list-item-content>
              <v-list-item-title class="nav-link">المفضلة</v-list-item-title>
            </v-list-item-content>
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
    return {
      drawer: false,
      group: null,
    };
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
    font-size: 20px;
    font-family: $fontfamliy;
    letter-spacing: 0;
  }
  .link-home {
    font-size: 18px !important;
    font-family: $fontfamliy;
    letter-spacing: 0;
    color: $fontcolorsm;
    text-decoration: none !important;
    font-weight: bold;
    @media (max-width: 450px) {
      font-size: 15px !important;
    }
  }
}
</style>
