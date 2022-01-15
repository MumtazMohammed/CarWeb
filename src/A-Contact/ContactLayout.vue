<template>
  <div class="contact">
    <v-container>
      <v-row>
        <v-col cols="12">
          <h1 class="text-center ma-0 header-tital">تـواصـل مـعنا</h1>
        </v-col>
      </v-row>
      <v-row class="form">
        <v-col cols="12" sm="6" md="6" class="pl-md-1 pl-sm-0">
          <EmailForm />
        </v-col>
        <v-col cols="12" sm="6" md="6" class="pr-md-0 pr-sm-0 PRT">
          <SideEmail />
        </v-col>
      </v-row>
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
    background: $background;
    border-radius: 10px;
    @media (max-width: 960px) {
      border-radius: 5px;
    }
  }
  .PRT {
    @media (max-width: 600px) {
      padding-top: 0px;
      border: 0;
      border-top: 1px solid rgba(216, 216, 216, 0.211);
    }
  }
}
</style>
