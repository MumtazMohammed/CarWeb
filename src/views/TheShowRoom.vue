<template>
  <v-main>
    <NavBar />
    <div class="about">
      <ShowRoom :showrooms="showrooms" />
    </div>
  </v-main>
</template>

<script>
import NavBar from "@/NavBar/TheNavBar.vue";
import ShowRoom from "@/Car-showroom/showroom.vue";
import showrooms from "../data-json/showroom.json";

export default {
  name: "TheShowRoom",
  components: {
    ShowRoom,
    NavBar,
  },
  data() {
    return {
      showrooms,
    };
  },
};
</script>
<style lang="scss" scoped></style>
