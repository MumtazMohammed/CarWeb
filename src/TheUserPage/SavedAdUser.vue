<template>
  <div class="SavedAdUser">
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-card-actions>
            <v-icon class="orange--text">mdi-star-settings</v-icon>
            <v-card-title class="pa-2"> المفضلة </v-card-title>
          </v-card-actions>
        </v-col>
        <v-col cols="12">
          <v-divider></v-divider>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  name: "SavedAdUser",
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
@import "../scss/virables";
@import "../scss/mixin";

.SavedAdUser {
  width: 100%;
  min-height: 100vh;
  font-family: $fontfamliy !important;
  letter-spacing: 0;
  padding: $padding;
}
</style>
