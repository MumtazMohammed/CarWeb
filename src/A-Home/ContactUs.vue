<template>
  <div class="contact">
    <v-container>
      <v-card width="700" color="#424342" class="mx-auto">
        <v-card-actions class="justify-center">
          <v-avatar size="60" color="transparent" tile>
            <img
              src="../assets/outsrc/call.png"
              alt="../assets/outsrc/call.png"
            />
          </v-avatar>
        </v-card-actions>
        <v-divider class="divider"></v-divider>
        <v-card-title class="justify-center py-2 title">
          عندك أي استفسار؟
        </v-card-title>
        <v-card-text class="text">
          نخدمك طيلة أيام الاسبوع خلال اوقات العمل التالية: من السبت حتى الخميس
          من الساعة 9 صباحاً حتى 5 مساءً, الجمعة من 1 مساءً الى 5 مساءً .
        </v-card-text>
        <v-card-actions class="justify-center">
          <v-btn outlined large text dark class="contact-btn">
            <v-avatar class="ml-1" size="20" tile color="transparent">
              <img src="../assets/social/whatsapp.png" alt="alt" />
            </v-avatar>
            تواصل معنا عبر واتساب
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
  </div>
</template>
<script>
export default {
  name: "ContactUsHome",
};
</script>
<style lang="scss" scoped>
@import "@/scss/virables";
@import "@/scss/mixin";
.contact {
  width: 100%;
  min-height: 35vh;
  background-color: $color-background;
  display: flex;
  font-family: $fontfamliy;
  letter-spacing: 0px;
  justify-content: center;
  align-items: center;
  padding: $padding;
  .title {
    color: #fff !important;
    font-family: $fontfamliy !important;
    font-weight: bold;
    font-size: 22px !important;
  }
  .text {
    width: 400px;
    margin: 0 auto !important;
    text-align: center;
    color: #eee !important;
    @media (max-width: 550px) {
      width: auto;
      margin: 0 0 !important;
    }
  }
  .divider {
    border-color: $color-1;
  }
  .contact-btn {
    font-size: 14px !important;
    letter-spacing: 0px;
  }
}
</style>
