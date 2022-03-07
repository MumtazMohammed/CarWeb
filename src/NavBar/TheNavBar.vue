<template>
  <nav class="elevation-4">
    <v-toolbar flat class="px-md-11 toolbar">
      <router-link router to="/">
        <v-toolbar-title class="NavTitle"> ثــقـة </v-toolbar-title>
      </router-link>
      <v-spacer></v-spacer>
      <!-- search  -->
      <v-card
        width="400"
        color="#0881fa"
        flat
        dark
        class="hidden-sm-and-down rounded-pill card-search overflow-hidden"
      >
        <div class="d-flex">
          <div class="icon-search">
            <v-avatar
              size="25"
              tile
              class="icon-search-img"
              color="transparent"
            >
              <img
                src="../assets/outsrc/steering-wheel.png"
                alt="../assets/outsrc/steering-wheel.png"
              />
            </v-avatar>
          </div>
          <SearchCar />
        </div>
      </v-card>
      <v-spacer></v-spacer>
      <!-- user Access  -->
      <router-link
        :to="{
          name: 'TheUserPage',
          params: { UserPage: 'صفحة المستخدم' },
        }"
        class="hidden-sm-and-down"
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
      <LogingAndSignup class="hidden-sm-and-down" />

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
        <!-- sign up or sign in  -->
        <LogingAndSignup class="hidden-screen-only" />
        <!-- sign in already  -->
        <router-link
          :to="{
            name: 'TheUserPage',
            params: { UserPage: 'صفحة المستخدم' },
          }"
        >
          <v-card-actions class="user-box-name justify-center mt-3">
            <v-card-subtitle class="pa-1 pl-2 user-name">
              mohammed Ameen
            </v-card-subtitle>
            <v-avatar size="35" color="transparent">
              <v-img src="../assets/pp.jpg"></v-img>
            </v-avatar>
          </v-card-actions>
        </router-link>
        <!--  -->
        <v-divider color="white"></v-divider>
        <!-- btn for payed Add and Open Car store  -->
        <v-list shaped>
          <v-card-text class="py-1 link-description">خدماتنا</v-card-text>
          <v-list-item-group>
            <v-list-item
              @click="drawer = false"
              v-for="(item, i) in Servise"
              :key="i"
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
        <!--  -->
        <v-divider color="white"></v-divider>
        <!-- router Links  -->
        <v-list shaped class="">
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
                <v-icon class="nav-icon" right>mdi-home-outline</v-icon>
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
                  <v-icon class="nav-icon" right>mdi-car-hatchback</v-icon>
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
              <v-icon class="nav-icon" right>mdi-headphones</v-icon>
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
import SearchCar from "../Search/Category.vue";

export default {
  name: "navbar",
  components: {
    LogingAndSignup,
    Navlinks,
    StartToSellYourCar,
    SearchCar,
  },
  data: () => ({
    drawer: false,
    model: 1,
    Servise: [
      { text: "أفتح معرضك معنا", icon: "mdi-store-cog-outline" },
      { text: "خلي إعلان سيارتك علينا", icon: "mdi-car-2-plus" },
    ],
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
        icon: "mdi-store-outline",
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
.link-description {
  font-family: $fontfamliy;
  color: $fontcolorsm;
  letter-spacing: 0;
  font-size: 18px;
}
.NavTitle {
  color: $fontcolor;
  font-size: 22px;
  letter-spacing: 0px !important;
  font-family: $fontfamliy;
  font-weight: 500;
  pointer-events: none;
  width: fit-content;
  text-align: start;
  text-decoration: none;
}

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
  .user-name {
    font-family: $fontfamliy;
    color: $fontcolorsm !important;
  }
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
  font-size: 14px;
  color: $fontcolorsm;
  font-family: $fontfamliy;
  letter-spacing: 0px;
  font-weight: 500;
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
    font-size: 20px;
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
.icon-search {
  color: $fontcolorsm !important;
  background-color: $color-1;
  height: 44px !important;
  width: 50px !important;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px !important;
  transition: color 0.1s ease;
}
.card-search:hover .icon-search-img {
  animation-name: search;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-direction: alternate;
}
@keyframes search {
  from {
    transform: rotate(-360deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
