<template>
  <div class="NormalUserPage">
    <v-app-bar
      dark
      flat
      color="grey darken-3"
      height="80"
      class="px-0 px-md-16 px-lg-16"
    >
      <v-app-bar-nav-icon
        class="hidden-sm-and-up"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-tabs
        align-with-title
        class="justify-center hidden-xs-only"
        optional
        slider-size="3"
        mobile-breakpoint
      >
        <v-tab
          router
          :to="{
            name: 'UserAdd',
            params: { MyAdd: 'إعلاناتي' },
          }"
          exact-path
          class="nav-link ma-0"
          color="blue"
        >
          إعلاناتي
        </v-tab>
        <v-tab
          router
          :to="{
            name: 'SavedAdUser',
            params: { SavedAd: 'المفضلة' },
          }"
          exact-path
          class="nav-link ma-0"
          color="blue"
        >
          المفضلة
        </v-tab>
        <v-tab
          router
          :to="{
            name: 'UserProfile',
            params: { Acount: 'حسابي' },
          }"
          exact-path
          class="nav-link"
          color="blue"
        >
          حسابي
        </v-tab>
      </v-tabs>
      <v-spacer></v-spacer>
      <!-- chat  -->
      <v-btn icon dark @click.stop="showMsg = !showMsg">
        <v-badge color="red" dot overlap left bordered>
          <v-icon>mdi-chat-processing</v-icon>
        </v-badge>
      </v-btn>
      <!-- go to main page  -->
      <v-btn icon to="/" class="tab" exact-path>
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <!-- logout user account  -->
      <v-btn icon to="/" class="tab" exact-path>
        <v-icon>mdi-logout-variant</v-icon>
      </v-btn>
    </v-app-bar>
    <!-- message  -->
    <div class="msg-box" v-if="showMsg">
      <v-card
        width="500"
        height="500"
        dark
        flat
        color="grey darken-3"
        class="msg rounded-t-0 overflow-auto"
        v-model="showMsg"
      >
        <v-toolbar color="grey darken-3" flat height="35">
          <v-toolbar-side-icon>
            <v-btn
              class="menu-close white"
              color="red"
              icon
              @click="showMsg = false"
            >
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-toolbar-side-icon>
        </v-toolbar>
        <v-card-actions>
          <v-subheader class="msg-title"> قبل 6 أيام </v-subheader>
          <v-spacer></v-spacer>
          <v-btn icon small color="white" class="red">
            <v-icon class="delete-message">mdi-trash-can</v-icon>
          </v-btn>
        </v-card-actions>
        <v-card dark color="grey darken-3" flat class="rounded-0 card">
          <!-- message tital  -->
          <v-card-title
            class="text-truncate msg-title d-inline-block pa-2 pb-0"
          >
            هذا النص هو مثال لنص
          </v-card-title>
          <v-card-text class="pa-2 msg-dic pt-0">
            إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة
            عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد
            النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى
            كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع.
          </v-card-text>
        </v-card>
      </v-card>
    </div>
    <!-- end chat -->
    <!-- Mobile breakpoint  -->
    <v-navigation-drawer
      color="grey  darken-3"
      v-model="drawer"
      dark
      app
      bottom
      temporary
    >
      <v-list nav>
        <v-list-item-group v-model="group">
          <v-list-item
            router
            :to="{
              name: 'UserAdd',
              params: { MyAdd: 'إعلاناتي' },
            }"
            exact-path
            color="blue"
          >
            <v-list-item-title class="nav-link"> إعلاناتي </v-list-item-title>
          </v-list-item>

          <v-list-item
            router
            :to="{
              name: 'SavedAdUser',
              params: { SavedAd: 'المفضلة' },
            }"
            exact-path
            color="blue"
          >
            <v-list-item-title class="nav-link">المفضلة</v-list-item-title>
          </v-list-item>

          <v-list-item
            router
            :to="{
              name: 'UserProfile',
              params: { Acount: 'حسابي' },
            }"
            exact-path
            color="blue"
          >
            <v-list-item-title class="nav-link"> حسابي </v-list-item-title>
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
      showMsg: false,
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
    font-size: 18px;
    font-family: $fontfamliy;
    letter-spacing: 0;
    // @media (max-width: 600px) {
    //   font-size: 24px !important;
    // }
  }
  .link-home {
    font-size: 15px !important;
    font-family: $fontfamliy;
    letter-spacing: 0;
    color: $fontcolor;
    text-decoration: none !important;
    font-weight: bold;
    @media (max-width: 450px) {
      font-size: 15px !important;
    }
  }
  .main-page::v-deep .v-slide-group__content.v-tabs-bar__content {
    justify-content: flex-end;
  }
}
.msg-title {
  font-family: $fontfamliy !important;
  font-size: 15px !important;
  letter-spacing: 0 !important;
}
.msg-dic {
  font-family: $fontfamliy !important;
  font-size: 14px !important;
  letter-spacing: 0 !important;
  line-height: 1.8;
}
.msg-box {
  position: relative;
  .msg {
    position: absolute;
    top: 0px;
    left: 20px;
    z-index: 1;
    @media (max-width: 540px) {
      left: 0px;
      width: 100% !important;
    }
  }
}
.msg::-webkit-scrollbar {
  width: 1vh !important;
  cursor: pointer;
}
.msg::-webkit-scrollbar-thumb {
  background-color: rgb(167, 167, 167);
  border-radius: 50px;
  cursor: pointer;
}
.msg::-webkit-scrollbar-track {
  width: 50px !important;
  cursor: pointer;
  background-color: rgb(223, 223, 223);
  cursor: pointer;
}
.menu-close {
  height: 30px !important;
  width: 30px !important;
}
.card {
  box-shadow: 0px 1.1px 0px 0px rgb(156, 156, 156) !important;
}
.delete-message {
  font-size: 18px !important;
}
</style>
