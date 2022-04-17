<template>
  <div class="contact">
    <v-container>
      <div>
        <v-row class="justify-center">
          <v-col cols="12" sm="10" md="8" class="">
            <EmailForm />
          </v-col>
          <v-col cols="12" sm="10" md="8" class=" pt-0">
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
  background-color: $simplebackground;
  padding: $padding;
  .header-tital {
    letter-spacing: 0;
    font-family: $fontfamliy;
    color: $fontcolor;
  }
  .form {
    border-radius: 5px;
    @media (max-width: 800px) {
      border-radius: 0px;
    }
  }
}
</style>
