<template>
  <v-main>
    <NavBar />
    <div class="about">
      <ShowRoom />
    </div>
  </v-main>
</template>

<script>
import NavBar from "@/NavBar/TheNavBar.vue";
import ShowRoom from "@/Car-showroom/showroom.vue";
export default {
  name: "TheShowRoom",
  components: {
    ShowRoom,
    NavBar,
  },
};
</script>
<style lang="scss" scoped></style>
