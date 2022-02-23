<template>
  <div class="UserSaveAd">
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-card-title class="title">
            <img
              class="ml-2 favorite-icon"
              contain
              height="30"
              src="../assets/outsrc/favorite.png"
              lazy-src="../assets/outsrc/favorite.png"
              alt="../assets/outsrc/favorite.png"
            />
            السيارات المفضلة لديك .</v-card-title
          >
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <v-row> </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  name: "UserSaveAd",
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
@import "../scss/virables";
@import "../scss/mixin";
.UserSaveAd {
  width: 100%;
  min-height: 100vh;
  background-color: $color-background;
  .title {
    font-family: $fontfamliy !important;
    letter-spacing: 0;
    font-size: 24px;
    @media (max-width: 335px) {
      font-size: 17px !important;
    }
    .favorite-icon {
      @media (max-width: 335px) {
        max-height: 25px;
      }
    }
  }
}
</style>
