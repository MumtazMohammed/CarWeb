<template>
  <fixed-header :threshold="160">
    <div class="navlinks-box">
      <v-row>
        <v-col class="d-flex align-center justify-sm-center" cols="12">
          <v-toolbar-items class="hiddenn">
            <v-list rounded class="d-flex">
              <v-list-item
                v-for="(item, i) in items"
                :key="i"
                router
                :to="item.path"
                class="singl-link"
                active-class="border"
                color="transparent"
              >
                <v-list-item-content>
                  <v-list-item-title
                    class="nav-link"
                    v-text="item.text"
                    active-class="border"
                  ></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-toolbar-items>
          <!-- <v-divider class="white ma-1 hidden-xs-only" vertical></v-divider> -->
          <!-- search  -->
          <SearchCar />
        </v-col>
      </v-row>
    </div>
  </fixed-header>
</template>
<script>
import SearchCar from "../CarSearch/Category.vue";
import FixedHeader from "vue-fixed-header";
export default {
  name: "navlinks",
  components: {
    SearchCar,
    FixedHeader,
  },
  data() {
    return {
      dialog: false,
      model: 1,
      items: [
        {
          icon: "fa-home",
          text: "الرئيسية",
          path: "/",
        },
        {
          icon: "fa-shopping-cart",
          text: "الأعـلانـات",
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
    };
  },
};
</script>
<style lang="scss" scoped>
@import "../scss/virables";
@import "../scss/mixin";

.navlinks-box.vue-fixed-header--isFixed {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 100;
  padding: 10px 0;
  transition: top 0.3s linear;
  background-color: #fff;

  .tabs-slider {
    color: $btnbackground !important;
  }
}
.hiddenn {
  @media (max-width: 600px) {
    display: none !important;
  }
}

.navlinks-box {
  padding: 5px 0;
  top: -68px;
  transition: top 0.5s ease-out;

  @include flexcenter();
  .nav-link {
    color: $fontcolorlinks;
    font-size: 18px;
    font-weight: 600;
    font-family: $fontfamliy;
    letter-spacing: 0;
  }
  .nav-link {
    @media (max-width: 750px) {
      font-size: 16px;
    }
  }
}
.border {
  border-right: 2px solid $btnbackground1;
  border-left: 2px solid $btnbackground1;
}
</style>
