<template>
  <div>
    <div class="ShowRoomBtnsNavgition">
      <v-app-bar
        clipped-right
        color="#374255"
        class="px-0 px-md-16 px-lg-16 px-xl-16"
        flat
        dark
      >
        <v-app-bar-nav-icon
          class="hidden-sm-and-up"
          @click.stop="drawer = !drawer"
        ></v-app-bar-nav-icon>
        <v-tabs slider-size="3" class="hidden-xs-only ma-0">
          <v-tab
            :to="{
              name: 'ShowRoomCars',
              params: { MyCar: 'إعلاناتي' },
            }"
            class="tab"
            exact-path
          >
            المعرض
          </v-tab>
          <v-tab
            :to="{
              name: 'ShowRoomNote',
              params: { MyNote: 'مهام' },
            }"
            class="tab"
            exact-path
          >
            المهام
          </v-tab>
          <v-tab
            :to="{
              name: 'ShowRoomInfoTable',
              params: { MyInfo: '   معلومات المعرض' },
            }"
            class="tab"
            exact-path
          >
            معلومات المعرض
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
          color="#374255"
          width="500"
          height="500"
          dark
          flat
          class="msg rounded-t-0 overflow-auto"
          v-model="showMsg"
        >
          <v-toolbar color="#374255" flat height="30">
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
          <!-- Date  -->
          <v-card-actions>
            <v-subheader class="msg-title"> قبل 6 أيام </v-subheader>
            <v-spacer></v-spacer>
            <v-btn icon small color="white" class="red">
              <v-icon class="delete-message">mdi-trash-can</v-icon>
            </v-btn>
          </v-card-actions>
          <!-- The message  -->
          <v-card dark flat color="#374255" class="rounded-0 card">
            <!-- message tital  -->
            <v-card-title
              class="text-truncate msg-title d-inline-block pa-2 pb-0"
            >
              هذا النص هو مثال لنص
            </v-card-title>
            <v-card-text class="pa-2 msg-dic pt-0">
              إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى
              زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء
              لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث
              يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم
              الموقع.
            </v-card-text>
          </v-card>
        </v-card>
      </div>
      <!-- end chat -->
    </div>
    <v-navigation-drawer
      color="primary darken-2"
      dark
      v-model="drawer"
      app
      bottom
      temporary
    >
      <v-list nav>
        <v-list-item-group v-model="group">
          <v-list-item
            :to="{
              name: 'ShowRoomCars',
              params: { MyCar: 'إعلاناتي' },
            }"
            exact-path
          >
            <v-list-item-title class="tab"> المعرض </v-list-item-title>
          </v-list-item>

          <v-list-item
            :to="{
              name: 'ShowRoomNote',
              params: { MyNote: 'مهام' },
            }"
            exact-path
          >
            <v-list-item-title class="tab">المهام</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title class="tab"> معلومات المعرض</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script>
export default {
  name: "ShowRoomBtnsNavgition",
  data() {
    return {
      drawer: false,
      group: null,
      dialog: false,
      showMsg: false,
      show: false,
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
@import "@/scss/virables";
@import "@/scss/mixin";
.ShowRoomBtnsNavgition {
  width: 100%;
  height: auto;
  position: relative;
}
.tab {
  font-family: $fontfamliy !important;
  font-size: 18px !important;
  letter-spacing: 0 !important;
}
.main-page::v-deep .v-slide-group__content.v-tabs-bar__content {
  justify-content: flex-end;
}
.menu-close {
  height: 30px !important;
  width: 30px !important;
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
    // min-width: 100%;
    // min-width: 70%;
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
.card {
  box-shadow: 0px 1.1px 0px 0px rgb(156, 156, 156) !important;
}
.delete-message{
  font-size: 18px !important;
}
</style>
