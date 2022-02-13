<template>
  <v-main>
    <NavBar />
    <div class="about">
      <Store />
    </div>
  </v-main>
</template>

<script>
import NavBar from "@/NavBar/TheNavBar.vue";
import Store from "../CustomreStote/Store.vue";
export default {
  name: "TheStore",
  components: {
    Store,
    NavBar,
  },
};
</script>
<style lang="scss" scoped>
.v-main {
  padding: 0 !important;
}
</style>
