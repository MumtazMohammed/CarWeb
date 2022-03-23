<template>
  <v-main>
    <NavBar />
    <div class="about">
      <ShowRoom :showrooms="showrooms" />
    </div>
    <FooterBar />
  </v-main>
</template>

<script>
import NavBar from "@/NavBar/TheNavBar.vue";
import ShowRoom from "@/Car-showroom/showroom.vue";
import showrooms from "../data-json/showroom.json";
import FooterBar from "@/footer/footer.vue";

export default {
  name: "TheShowRoom",
  components: {
    ShowRoom,
    NavBar,
    FooterBar,
  },
  data() {
    return {
      showrooms,
    };
  },
};
</script>
<style lang="scss" scoped></style>
