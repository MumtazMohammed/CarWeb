<template>
  <nav>
    <v-toolbar flat class="px-md-11 toolbar">
      <v-toolbar-title class="NavTitle"> ثــقـة </v-toolbar-title>
      <!-- nav link for md screen and up  -->
      <v-spacer></v-spacer>
      <!-- loing btn  -->
      <LogingAndSignup class="hidden-xs-only" />

      <!-- bar icon for show links  -->
      <v-app-bar-nav-icon
        @click="drawer = true"
        color="#f44336"
        class="hidden-sm-and-up"
      ></v-app-bar-nav-icon>
    </v-toolbar>
    <!-- mobile screen  -->
    <div>
      <v-navigation-drawer
        class="hidden-sm-and-up nav-tablet"
        v-model="drawer"
        clipped
        app
        floating
        mini-variant-width
        width="100%"
      >
        <div class="d-flex justify-end">
          <v-icon right @click="drawer = false" class="pa-3 white--text"
            >fas fa-times</v-icon
          >
        </div>
        <SearchCar />
        <LogingAndSignup />

        <v-list class="pt-0">
          <v-list-item-group v-model="model" mandatory dark color="white">
            <v-list-item
              v-for="(item, i) in items"
              :key="i"
              router
              :to="item.path"
              dark
              color="white"
            >
              <v-list-item-icon class="icon-list">
                <v-icon class="nav-icon" right v-text="item.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content class="#dddddd--text">
                <v-list-item-title
                  class="nav-link-sm px-2"
                  v-text="item.text"
                ></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
    </div>
    <Navlinks />
  </nav>
</template>

<script>
import Navlinks from "./NavLinks.vue";
import LogingAndSignup from "./LogingAndSignup.vue";

export default {
  name: "navbar",
  components: {
    LogingAndSignup,
    Navlinks,
  },
  data: () => ({
    drawer: false,
    model: 1,
    items: [
      {
        icon: "fa-home",
        text: "الرئيسية",
        path: "/",
      },
      {
        icon: "fa-shopping-cart",
        text: "المتجر",
        path: "/product",
      },
      {
        icon: "fa-info",
        text: "الخدمات",
        path: "/about",
      },
      {
        icon: "fa-address-book",
        text: "اتصل بنا",
        path: "/contact",
      },
    ],
  }),
};
</script>
<style lang="scss" scoped>
@import "../scss/virables";
@import "../scss/mixin";
.v-btn--icon.v-size--default .v-icon {
  font-size: 28px !important;
}

.NavTitle {
  color: $fontcolor;
  font-size: 22px;
  letter-spacing: 0px !important;
  font-family: "Tajawal", sans-serif;
  font-weight: 600;
  pointer-events: none;
  width: 10%;
  text-align: start;
}
@media (max-width: 600px) {
  .NavTitle {
    width: 30%;
  }
}
.NavTitle-sm {
  color: $fontcolorsm;
  font-weight: 400;
  font-size: 23px;
}
// Nav for small screen
.nav-tablet {
  z-index: 4;
  background-color: $background !important;
}
.nav-link-sm {
  font-size: 16px;
  color: $fontcolorsm;
  font-family: $fontfamliy;
  letter-spacing: 0px;
  font-weight: 600;
}
.icon-list {
  margin: 20px 10px 20px 0px !important;
  @include flexcenter();
  .nav-icon {
    font-size: 18px;
    color: $fontcolorsm;
  }
}
</style>
