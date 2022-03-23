<template>
  <div>
    <div class="ShowRoomBtnsNavgition">
      <v-toolbar color="#374255" flat dark>
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
        <div>
          <v-tabs
            slider-size="0"
            background-color="transparent"
            class="main-page"
          >
            <v-tab to="/" class="tab" exact-path>
              <v-icon>mdi-home</v-icon>
            </v-tab>
          </v-tabs>
        </div>
      </v-toolbar>
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
}
.main-page::v-deep .v-slide-group__content.v-tabs-bar__content {
  justify-content: flex-end;
}
</style>
