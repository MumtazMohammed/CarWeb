<template>
  <div class="contact mt-2">
    <v-container  class="px-lg-4 px-md-4">
      <div>
        <v-row class="justify-center">
          <v-col cols="12" sm="8" md="6" class="">
            <EmailForm />
          </v-col>
          <v-col cols="12" sm="8" md="6" class="">
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
  min-height: calc(100vh - 230px);
  padding: 30px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: $linear-gradient;
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
