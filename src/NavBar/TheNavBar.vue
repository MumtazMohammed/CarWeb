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
        color="#03a9f4"
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
        width="80%"
      >
        <v-list class="pt-0">
          <v-list-item-group v-model="model" mandatory dark color="white">
            <!-- home Linke  -->
            <v-list-item
              @click="drawer = false"
              router
              to="/"
              dark
              color="white"
            >
              <v-list-item-icon class="icon-list">
                <v-icon class="nav-icon" right>fa-home</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title class="nav-link-sm pa-2">
                  نضمنها لك
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <!--  -->
            <!-- mutible car choise  -->
            <v-list-group action>
              <template v-slot:activator>
                <v-list-item-icon class="icon-list">
                  <v-icon class="nav-icon" right>fas fa-car</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title class="nav-link-sm pa-2">
                    سيارات للبيع
                  </v-list-item-title>
                </v-list-item-content>
              </template>
              <v-list-item
                class="px-1 multible-link-box"
                color="transparent"
                router
                @click="drawer = false"
                :to="CarCondition.path"
                v-for="(CarCondition, i) in CarForSell"
                :key="i"
              >
                <v-list-item-content class="">
                  <v-list-item-title
                    class="mutible-link-sm pa-2"
                    v-text="CarCondition.title"
                  ></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-group>
            <!--  -->
            <!-- other  -->
            <v-list-item
              v-for="(item, i) in items"
              :key="i"
              router
              :to="item.path"
              @click="drawer = false"
              dark
              color="white"
            >
              <v-list-item-icon class="icon-list">
                <v-icon class="nav-icon" right v-text="item.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title
                  class="nav-link-sm pa-2"
                  v-text="item.text"
                ></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
        <v-spacer></v-spacer>
        <LogingAndSignup />
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
    home: [
      {
        icon: "fa-home",
        text: "نضمنها لك",
        path: "/",
      },
    ],
    CarForSell: [
      { title: "سيارات مستعملة ", path: "/UsedCar" },
      { title: "سيارات جديدة", path: "/NewCar" },
      { title: "رؤية الكل", path: "/SeeAllUsedAndNewCars" },
    ],
    items: [
      {
        icon: "fa-shopping-cart",
        text: "الأعـلانـات",
        path: "/product",
      },

      {
        icon: "fa-headphones-alt",
        text: "تواصل معنا",
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
  background: $linear-gradient !important;
}
.nav-tablet::v-deep .v-navigation-drawer__content {
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
}
.nav-link-sm {
  font-size: 16px;
  color: $fontcolorsm;
  font-family: $fontfamliy;
  letter-spacing: 0px;
  font-weight: 600;
}
.mutible-link-sm {
  color: $fontcolorsm;
  font-weight: 500;
  font-size: 15px;
  letter-spacing: 0px;
  font-family: $fontfamliy;
}
.icon-list {
  margin: 20px 10px 20px 0px !important;
  @include flexcenter();
  .nav-icon {
    font-size: 22px;
    color: $fontcolorsm;
  }
}
.v-list-item-group::v-deep .v-list-item--active {
  color: white;
}
</style>
