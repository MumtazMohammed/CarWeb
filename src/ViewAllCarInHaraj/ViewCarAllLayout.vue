<template>
  <div class="ViewCarAllLayout">
    <AlHaraj />
  </div>
</template>
<script>
import AlHaraj from "../ViewAllCarInHaraj/AlHaraj.vue";
export default {
  name: "ViewCarAllLayout",
  components: {
    AlHaraj,
  },

  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/virables";
@import "@/scss/mixin";
.ViewCarAllLayout {
  width: 100%;
  min-height: 100vh;
  position: relative;
  background-color: $simplebackground;
}
</style>
