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
      class="hidden-md-and-up nav-tablet"
      v-model="drawer"
      clipped
      app
      fixed
      floating
      mini-variant-width
      overlay-opacity="0.8"
    >
      <div class="one-group-close-and-sell">
        <v-app-bar-nav-icon @click="drawer = false" class="ma-2 mr-1 close-btn">
          <v-icon class="nav-icon white--text">fas fa-times</v-icon>
        </v-app-bar-nav-icon>
        <StartToSellYourCar />
      </div>
      <LogingAndSignup />
      <v-divider color="white"></v-divider>
      <v-list class="pt-0">
        <v-list-item-group v-model="model" mandatory dark color="white">
          <!-- home Linke  -->
          <v-list-item @click="drawer = false" router to="/" dark color="white">
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
          <!--  -->
          <!-- mutible car choise  -->
          <v-list-group action>
            <template v-slot:activator>
              <v-list-item-icon class="icon-list">
                <v-icon class="nav-icon" right>fas fa-car</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title class="nav-link-sm pa-2">
                  حراج السيارت
                </v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item
              class="multible-link-box"
              color="transparent"
              router
              @click="drawer = false"
              :to="CarCondition.path"
              v-for="(CarCondition, i) in CarForSell"
              :key="i"
            >
              <v-list-item-icon class="icon-list">
                <v-avatar size="22px" tile color="transparent">
                  <v-img
                    :src="getimageUrl(CarCondition.folder, CarCondition.src)"
                  ></v-img>
                </v-avatar>
              </v-list-item-icon>
              <v-list-item-content class="">
                <v-list-item-title
                  class="mutible-link-sm pa-2"
                  v-text="CarCondition.title"
                ></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
          <!--  -->
        </v-list-item-group>
        <!-- contact  -->
        <v-list-item
          @click="drawer = false"
          router
          to="/contact"
          dark
          color="white"
          class="pr-0"
        >
          <v-list-item-icon class="icon-list">
            <v-icon class="nav-icon" right>fa-headphones-alt</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="nav-link-sm pa-2">
              تواصل معنا
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script>
import LogingAndSignup from "./LogingAndSignup.vue";
import StartToSellYourCar from "./StartToSellYourCar.vue";

export default {
  components: { LogingAndSignup, StartToSellYourCar },
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
        {
          title: "سيارات مضمونه ",
          src: "guaranteed.png",
          path: "/SeeAllSpecialCar",
          folder: "outsrc",
        },
        {
          title: "سيارات جديدة",
          src: "new-car.png",
          path: "/NewCar",
          folder: "outsrc",
        },
        {
          title: "سيارات مستعملة ",
          src: "used-car.png",
          path: "/UsedCar",
          folder: "outsrc",
        },
        {
          title: "رؤية الكل",
          src: "traffic-jam.png",
          path: "/SeeAllUsedAndNewCars",
          folder: "outsrc",
        },
      ],
      items: [
        {
          icon: "fa-shopping-cart",
          text: "المعارض",
          path: "/TheShowRoom",
        },
        {
          icon: "fa-shopping-cart",
          text: "قطع الغيار",
          path: "/TheStore",
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
    getimageUrl(FolderName, ImageName) {
      let image = require.context("@/assets/");
      return image("./" + FolderName + "/" + ImageName);
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
  background: $color-1 !important;
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
.v-list-item-group::v-deep .v-list-item {
  padding-right: 0px;
}
.btn-menu {
  position: fixed;
  bottom: 115px;
  right: 10px;
  z-index: 5;
  background: $color-2;
  transform: translateX(100px);
  transition: all 0.4s 0s ease !important;
  display: none;
  @media (max-width: 959px) {
    display: flex;
  }
  @media (max-width: 600px) {
    bottom: 105px;
  }
  .btn-menu-icon {
    font-size: 22px !important;
  }
}
.is-hidden {
  transform: translateX(0px);
  @media (max-width: 600px) {
    transform: scale(0.9);
  }
}
.one-group-close-and-sell {
  display: flex;
  justify-content: space-between;
}
</style>
