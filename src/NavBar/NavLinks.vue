<template>
  <div class="navlinks-box">
    <v-row>
      <v-col
        class="d-flex align-center justify-sm-center py-md-0 py-sm-0 py-2"
        cols="12"
      >
        <v-toolbar-items class="hiddenn">
          <v-list class="d-flex">
            <!-- نضنها لك  -->
            <v-list-item
              router
              dark
              to="/"
              class="singl-link ma-0"
              color="transparent"
              active-class="active"
            >
              <v-list-item-content>
                <v-list-item-title class="nav-link">نضنها لك</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <!-- used or new or all  -->
            <v-menu
              bottom
              nudge-top="0"
              open-on-hover
              close-delay="150"
              nudge-left="50"
              origin="center center"
              offset-y
              transition="scale-transition"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-list>
                  <v-list-item
                    v-bind="attrs"
                    v-on="on"
                    color="transparent"
                    class="singl-link ma-0"
                  >
                    <v-list-item-content>
                      <v-list-item-title class="nav-link">
                        سيارت للبيع
                        <v-icon class="menu-icon" left
                          >fas fa-caret-down</v-icon
                        >
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </template>
              <v-list class="CarforSell-link pa-2">
                <v-list-item
                  router
                  :to="item.path"
                  v-for="(item, i) in CarForSell"
                  :key="i"
                  class="mb-1"
                  active-class="singl-link mutible-link-list-item"
                >
                  <v-list-item-content class="pa-1">
                    <v-list-item-title class="item-title">
                      {{ item.title }}
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-menu>
            <!-- other  -->
            <v-list-item
              v-for="(item, i) in items"
              :key="i"
              router
              dark
              :to="item.path"
              class="singl-link ma-0"
              color="transparent"
              active-class="active"
            >
              <v-list-item-content>
                <v-list-item-title
                  class="nav-link"
                  v-text="item.text"
                ></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-toolbar-items>
        <!-- search  -->
        <SearchCar />
      </v-col>
    </v-row>
  </div>
</template>
<script>
import SearchCar from "../CarSearch/Category.vue";
export default {
  name: "navlinks",
  components: {
    SearchCar,
  },
  data() {
    return {
      dialog: false,
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
          icon: "fa-address-book",
          text: "تواصل معنا",
          path: "/contact",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
@import "../scss/virables";
@import "../scss/mixin";

.hiddenn {
  @media (max-width: 600px) {
    display: none !important;
  }
}

.navlinks-box {
  width: 100vw;
  height: auto;
  position: relative;
  padding: 5px 0;
  background-color: #fff;
  z-index: 1;
  overflow: hidden;
  @include flexcenter();

  .nav-link {
    color: $fontcolorlinks;
    font-size: 18px;
    font-weight: 600;
    font-family: $fontfamliy;
    letter-spacing: 0;
    height: 30px;
    transition: color 0.2s ease;
    @include flexcenter();
  }
  .nav-link {
    @media (max-width: 750px) {
      font-size: 16px;
    }
    @media (max-width: 670px) {
      font-size: 14px;
    }
  }
  .singl-link {
    cursor: pointer;
    @media (max-width: 670px) {
      padding: 0px 10px;
    }
  }
  .singl-link:hover .nav-link {
    color: $fontcolor;
  }
  .singl-link:hover .nav-link .menu-icon {
    color: $fontcolor;
  }
}
.active {
  position: relative;
}

.active:before {
  content: "";
  position: absolute;
  width: 50%;
  height: 5px;
  background: $linear-gradient;
  transform: translate(-50%, 1150%);
  opacity: 1 !important;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}
.mutibleActive {
  background-color: $btnbackground;
  opacity: 0;
}
.item-title {
  font-family: $fontfamliy;
  color: $fontcolorlinks;
  font-weight: 300;
  font-size: 14px;
}
.item-title:active {
  color: #fff;
  z-index: 5;
  position: relative;
}
.CarforSell-link::v-deep .theme--light.v-list-item--active:before {
  opacity: 1;
  background-color: $color-1 !important;
}
.menu-icon {
  font-size: 15px !important;
  transform: translate(0px, 1.5px);
}
.singl-link .item-title {
  color: #fff !important;
  position: relative;
  z-index: 5;
}
.CarforSell-link::v-deep .v-list-item {
  min-height: 30px !important;
}

</style>
