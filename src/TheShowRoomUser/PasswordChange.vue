<template>
  <div class="PasswordChange">
    <v-row class="justify-center">
      <v-col cols="12" md="7" sm="10" lg="5">
        <v-card outlined class="pa-4">
          <v-text-field
            v-model="password"
            outlined
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            label="كلمة السر السابقة"
            @click:append="show1 = !show1"
          ></v-text-field>
          <v-text-field
            v-model="password"
            outlined
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            label=" أدخل كلمة سر جديد "
            @click:append="show1 = !show1"
          ></v-text-field>
          <v-text-field
            v-model="password"
            outlined
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            label="تأكيد كلمة السر "
            @click:append="show1 = !show1"
          ></v-text-field>
          <v-card-actions class="justify-center">
            <v-btn elevation="0" class="success btn-pass-change">
              تغير كلمة السر
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  name: "PasswordChange",
  data() {
    return {
      password: "Password",
      show1: false,
      rules: {
        required: (value) => !!value || "Required.",
        min: (v) => v.length >= 8 || "Min 8 characters",
        emailMatch: () => `The email and password you entered don't match`,
      },
    };
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/virables";
@import "@/scss/mixin";
.PasswordChange {
  width: 100%;
  min-height: 80vh;
  @include flexcenter;

  .btn-pass-change {
    font-family: $fontfamliy !important;
    letter-spacing: 0 !important;
  }
}
</style>
