<template>
  <nav class="elevation-4">
    <v-app-bar flat color="white" class="px-md-11 toolbar">
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
      <router-link to="/TheUserPage" class="hidden-sm-and-down">
        <v-card color="#eee">
          <v-card-actions class="user-box-name pa-1">
            <v-avatar size="35" tile color="transparent">
              <v-img src="../assets/pp.jpg"></v-img>
            </v-avatar>
            <v-card-subtitle class="py-0 px-2 user-name">
              <span class="d-inline">{{ welcomeTouser }}</span> mohammed Ameen
            </v-card-subtitle>
          </v-card-actions>
        </v-card>
      </router-link>
      <!-- Showroom Access  -->
      <router-link to="/TheShowRoomPage" class="hidden-sm-and-down">
        <v-card color="#eee">
          <v-card-actions class="user-box-name pa-1">
            <v-avatar size="35" tile color="transparent">
              <v-img src="../assets/showroom/orignal-1635857145-70.png"></v-img>
            </v-avatar>
            <v-card-subtitle class="py-0 px-2 Showroom-name">
              معرض ويلس بلس للسيارات
            </v-card-subtitle>
          </v-card-actions>
        </v-card>
      </router-link>
      <!-- Admin Access  -->
      <router-link to="/AdminPageRoute" class="hidden-sm-and-down">
        <v-card dark flat color="#424342">
          <v-card-actions class="user-box-name pa-1">
            <v-icon right>mdi-shield-crown-outline</v-icon>
            <v-card-subtitle class="pa-0 pl-2 Admin">
              شركة ثقة لتجارة السيارات
            </v-card-subtitle>
          </v-card-actions>
        </v-card>
      </router-link>
      <!-- loing btn  -->
      <LogingAndSignup class="hidden-sm-and-down" />
      <!-- bar icon for show links  -->
      <v-app-bar-nav-icon
        @click="drawer = true"
        color="#0773df"
        class="hidden-md-and-up icon-open-bar"
      ></v-app-bar-nav-icon>
    </v-app-bar>
    <!-- mobile screen  -->
    <div>
      <v-navigation-drawer
        class="hidden-md-and-up nav-tablet"
        v-model="drawer"
        clipped
        absolute
        fixed
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
        <!-- sign in already  -->
        <router-link to="/TheUserPage">
          <v-card flat width="250" class="mb-2 mx-auto">
            <v-card-actions class="user-box-name pa-1">
              <v-avatar tile size="35" color="transparent">
                <v-img src="../assets/pp.jpg"></v-img>
              </v-avatar>
              <v-card-subtitle class="py-0 px-2 user-name text-truncate">
                <span class="d-inline">{{ welcomeTouser }}</span>
                mohammed Ameen
              </v-card-subtitle>
            </v-card-actions>
          </v-card>
        </router-link>
        <!--  -->
        <!-- Showroom Access  -->
        <router-link to="/TheShowRoomPage">
          <v-card flat width="250" class="mb-2 mx-auto">
            <v-card-actions class="user-box-name pa-1">
              <v-avatar size="35" tile color="transparent">
                <v-img
                  src="../assets/showroom/orignal-1635857145-70.png"
                ></v-img>
              </v-avatar>
              <v-card-subtitle class="py-0 px-2 Showroom-name">
                معرض ويلس بلس للسيارات
              </v-card-subtitle>
            </v-card-actions>
          </v-card>
        </router-link>
        <!-- mutible car choise  -->
        <v-list shaped dark>
          <v-list-group color="white" action>
            <template v-slot:activator>
              <v-list-item-icon class="icon-list">
                <v-icon class="nav-icon white--text" right> mdi-login </v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title class="nav-link-sm pa-2">
                  تـسجيل الـدخول
                </v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list shaped>
              <v-list-item
                class="multible-link-box"
                color="white"
                router
                @click="drawer = false"
                :to="Login.path"
                v-for="(Login, i) in Login"
                :key="i"
              >
                <v-list-item-content class="">
                  <v-list-item-title
                    class="mutible-login pa-2"
                    v-text="Login.title"
                  >
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-list-group>
        </v-list>
        <!--  -->
        <!--  -->
        <v-divider class="white"></v-divider>
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
        <v-divider class="white"></v-divider>
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
                <v-list-item-content>
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
    welcomeTouser: "مرحباً ,",
    model: 1,
    Login: [
      { title: " تسجيل الدخول", path: "/Login" },
      { title: "تسجيل الدخول (تاجر / وكيل) ", path: "/LoginSeller" },
    ],
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
  padding-right: 0px !important;
}
.v-list-group::v-deep .v-list-item {
  padding-right: 0px !important;
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
.mutible-login {
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
  .user-name {
    color: $fontcolor !important;
    font-size: 15px;
    letter-spacing: 0px;
    font-family: $fontfamliy;
  }
  .Showroom-name {
    color: $fontcolor !important;
    font-size: 15px;
    letter-spacing: 0px;
    font-family: $fontfamliy;
  }
  .Admin {
    font-size: 16px;
    font-weight: 500;
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
