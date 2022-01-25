<template>
  <div class="navigation">
    <v-btn
      ref="button"
      icon
      large
      class="btn-menu"
      color="white"
      :class="{
        'btn-menu': scrollPosition < 600,
        'is-hidden': scrollPosition > 600,
      }"
      @click="drawer = true"
    >
      <v-icon class="btn-menu-icon">fas fa-bars</v-icon>
    </v-btn>
    <v-navigation-drawer
      class="hidden-sm-and-up nav-tablet"
      v-model="drawer"
      clipped
      app
      floating
      mini-variant-width
      width="300"
    >
      <LogingAndSignup />

      <v-list class="pt-0">
        <v-list-item-group v-model="model" mandatory dark color="white">
          <!-- home Linke  -->
          <v-list-item class="pr-0" router to="/" dark color="white">
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
          <v-list-group class="pr-0" action>
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
            class="pr-0"
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
            <v-list-item-content>
              <v-list-item-title
                class="nav-link-sm pa-2"
                v-text="item.text"
              ></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script>
import LogingAndSignup from "./LogingAndSignup.vue";

export default {
  components: { LogingAndSignup },
  data() {
    return {
      scrollPosition: null,
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
    };
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../scss/virables";
@import "../scss/mixin";
.v-btn--icon.v-size--default .v-icon {
  font-size: 28px !important;
}

// Nav for small screen
.nav-tablet {
  z-index: 4;
  background-color: $btnbackground !important;
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
.v-list-item-group::v-deep .v-list-item {
  padding-right: 0px;
}
.btn-menu {
  position: fixed;
  bottom: 70px;
  right: 10px;
  z-index: 5;
  background-color: $background;
  transform: translateX(100px);
  transition: all 0.4s ease !important;
  display: none;
  @media (max-width: 600px) {
    display: flex;
  }
  .btn-menu-icon {
    font-size: 20px !important;
  }
}
.is-hidden {
  transform: translateX(0px);
}
</style>
