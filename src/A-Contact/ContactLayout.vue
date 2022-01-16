<template>
  <div class="contact">
    <v-container>
      <div>
        <v-row class="form">
          <v-col cols="12" sm="6" md="6" class="py-sm-0 pr-sm-0">
            <EmailForm />
          </v-col>
          <v-col cols="12" sm="6" md="6" class="">
            <SideEmail />
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>
<script>
import EmailForm from "../A-Contact/EmailForm.vue";
import SideEmail from "../A-Contact/sideEmail.vue";

const components = {
  EmailForm,
  SideEmail,
};
export default {
  name: "ContactLayout",
  components,
};
</script>
<style lang="scss" scoped>
@import "@/scss/virables";
@import "@/scss/mixin";
.contact {
  width: 100%;
  min-height: 100vh;
  padding: 30px 0 0 0;
  // background-color: $background;
  .header-tital {
    letter-spacing: 0;
    font-family: $fontfamliy;
    color: $fontcolor;
  }
  .form {
    background: $background1;
    border-radius: 5px;
    @media (max-width: 960px) {
      border-radius: 5px;
    }
  }
}
</style>
