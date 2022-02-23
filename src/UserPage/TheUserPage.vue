<template>
  <v-app class="TheUserPage">
    <NavigationUser />
      <router-view />
  </v-app>
</template>
<script>
import NavigationUser from "./NavigationUser.vue";
export default {
  name: "NormalUserPage",
  components: { NavigationUser },
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
@import "../scss/virables";
@import "../scss/mixin";
.TheUserPage {
  width: 100%;
  min-height: auto;
  background-color: $color-background;

}
</style>
