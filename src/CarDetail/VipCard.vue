<template>
  <div>
    <v-alert
      dense
      type="success"
      color="#018587"
      width="100%"
      class="mb-0 VipCard"
    >
      موثوق من قبل شركة ثقة
    </v-alert>
  </div>
</template>
<script>
export default {
  name: "VipCard",
};
</script>
<style lang="scss" scoped>
@import "@/scss/virables";
@import "@/scss/mixin";
.VipCard {
  font-family: $fontfamliy;
  font-size: 18px;
  font-weight: 500;
  border-top-right-radius: 5px !important;
  border-top-left-radius: 5px !important;
  border-bottom-right-radius: 0px !important;
  border-bottom-left-radius: 0px !important;
  box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%),
    0 1px 5px 0 rgb(0 0 0 / 12%) !important;
}
</style>
