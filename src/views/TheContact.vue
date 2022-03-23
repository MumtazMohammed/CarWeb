<template>
  <div class="main-contact">
    <NavBar />
    <ContactLayout />
    <FooterBar />
  </div>
</template>
<script>
import NavBar from "../NavBar/TheNavBar.vue";
import FooterBar from "@/footer/footer.vue";
import ContactLayout from "../A-Contact/ContactLayout.vue";
const components = {
  ContactLayout,
  NavBar,
  FooterBar,
};
export default {
  name: "about",
  components,
};
</script>
<style lang="scss" scoped></style>
