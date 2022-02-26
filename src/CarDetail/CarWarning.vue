<template>
  <div>
    <v-alert dense type="warning" width="100%" class="mb-0 Warning rounded-0">
      تحذير : <br />
    </v-alert>
  </div>
</template>
<script>
export default {
  name: "Warning",
};
</script>
<style lang="scss" scoped>
@import "@/scss/virables";
@import "@/scss/mixin";
.Warning {
  font-family: $fontfamliy;
  font-size: 18px;
}
</style>
