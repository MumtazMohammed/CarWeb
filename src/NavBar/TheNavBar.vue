<template>
  <nav class="elevation-4">
    <v-toolbar flat class="px-md-11 toolbar">
      <router-link router to="/">
        <v-toolbar-title class="NavTitle"> ثــقـة </v-toolbar-title>
      </router-link>
      <!-- nav link for md screen and up  -->
      <v-spacer></v-spacer>
      <!-- user Access  -->
      <router-link
        :to="{
          name: 'TheUserPage',
          params: { UserPage: 'صفحة المستخدم' },
        }"
      >
        <v-card-actions class="user-box-name">
          <v-card-subtitle class="pa-1 pl-2 user-name"
            >mohammed Ameen</v-card-subtitle
          >
          <v-avatar size="35" color="transparent">
            <v-img src="../assets/pp.jpg"></v-img>
          </v-avatar>
        </v-card-actions>
      </router-link>
      <!-- loing btn  -->
      <!-- <LogingAndSignup class="hidden-sm-and-down" /> -->

      <!-- bar icon for show links  -->
      <v-app-bar-nav-icon
        @click="drawer = true"
        color="#0773df"
        class="hidden-md-and-up icon-open-bar"
      ></v-app-bar-nav-icon>
    </v-toolbar>
    <!-- mobile screen  -->
    <div>
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
          <v-app-bar-nav-icon
            @click="drawer = false"
            class="ma-2 mr-1 close-btn"
          >
            <v-icon class="nav-icon white--text">fas fa-times</v-icon>
          </v-app-bar-nav-icon>
          <StartToSellYourCar />
        </div>
        <LogingAndSignup />
        <v-divider color="white"></v-divider>
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
    <Navlinks />
  </nav>
</template>

<script>
import Navlinks from "./NavLinks.vue";
import LogingAndSignup from "./LogingAndSignup.vue";
import StartToSellYourCar from "./StartToSellYourCar.vue";

export default {
  name: "navbar",
  components: {
    LogingAndSignup,
    Navlinks,
    StartToSellYourCar,
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
        icon: "fa-store",
        text: "المعارض",
        path: "/TheShowRoom",
      },
 
    ],
  }),
  methods: {
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
// @media (max-width: 600px) {
//   .NavTitle {
//     width: 30%;
//   }
// }
a {
  text-decoration: none;
}
.NavTitle-sm {
  color: $fontcolorsm;
  font-weight: 400;
  font-size: 23px;
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
.v-list-item-group::v-deep .v-list-item {
  padding-right: 0px;
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
.icon-open-bar::v-deep i.v-icon.notranslate.material-icons.theme--light {
  font-size: 33px !important;
  @media (max-width: 600px) {
    font-size: 28px !important;
  }
}
.one-group-close-and-sell {
  display: flex;
  justify-content: space-between;
}
// user
.user-box-name {
  cursor: pointer;
  .user-name {
    color: $fontcolor;
    font-size: 15px;
    letter-spacing: 0px;
    font-family: $fontfamliy;
  }
}
</style>
