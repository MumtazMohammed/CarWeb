<template>
  <div class="about">
    <NavBar />
    <AddSpot />
  </div>
</template>

<script>
import NavBar from "../NavBar/TheNavBar.vue";

import AddSpot from "../advertisements/add-post.vue";
export default {
  name: "about",
  components: {
    AddSpot,
    NavBar,
  },
};
</script>
<style lang="scss" scoped></style>
