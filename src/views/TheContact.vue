<template>
  <div class="main-contact">
    <NavBar />
    <ContactLayout />
  </div>
</template>

<script>
import NavBar from "../NavBar/TheNavBar.vue";

import ContactLayout from "../A-Contact/ContactLayout.vue";
const components = {
  ContactLayout,
  NavBar,
};
export default {
  name: "about",
  components,
};
</script>
<style lang="scss" scoped></style>
