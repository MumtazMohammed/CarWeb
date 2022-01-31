<template>
  <div class="form">
    <v-form v-model="valid" elevation-0 class="">
      <v-container>
        <v-col cols="12">
          <h3 class="text-center ma-0 header-tital">
            تواصل معنا على البريد الأكتروني
          </h3>
        </v-col>

        <v-col cols="12" class="pb-0">
          <v-text-field
            outlined
            solo
            v-model="firstname"
            :rules="nameRules"
            label="الأسـم كامل"
            required
            class="ma-0 pa-0"
            hide-details
          >
          </v-text-field>
        </v-col>
        <v-col cols="12" class="pb-0">
          <v-text-field
            outlined
            solo
            v-model="email"
            :rules="emailRules"
            label="الـبريد الأكتروني"
            required
            class="ma-0 pa-0"
          ></v-text-field>
        </v-col>
        <v-col cols="12" class="pt-0">
          <v-textarea
            solo
            v-model="text"
            :rules="textRules"
            label="بماذا تفكر !"
            required
            class="ma-0 pa-0"
          ></v-textarea>
        </v-col>
        <v-col class="d-flex justify-center pt-0" cols="12">
          <v-btn
            large
            @click="submit"
            min-width="70%"
            elevation="0"
            class="send-btn"
          >
            أرســل
          </v-btn>
        </v-col>
      </v-container>
    </v-form>
  </div>
</template>
<script>
export default {
  name: "EmailForm",
  data() {
    return {
      valid: false,
      firstname: "",
      lastname: "",
      email: "",
      text: "",
      nameRules: [
        (v) => !!v || "الأسـم كامل",
        (v) => v.length <= 10 || "يجب أن يكون الاسم أقل من 10 أحرف",
      ],
      emailRules: [
        (v) => !!v || " ادخل الـبريد الأكتروني ",
        (v) => /.+@.+/.test(v) || "تأكد من كتابة البريد الأكتروني صحيحا",
      ],
      textRules: [(v) => !!v || "أكـتب رسـالتك"],
    };
  },
  methods: {
    submit() {
      this.$v.$touch();
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/virables";
@import "@/scss/mixin";
.form {
  width: 100%;
  height: auto;
  position: relative;
  border-radius: 5px;
  .send-btn {
    background-color: $fontcolorsm !important;
    letter-spacing: 0px;
    font-family: $fontfamliy;
    font-size: 22px;
    color: $color-1;
    font-weight: bold;
    @media (max-width: 500px) {
      width: 90% !important;
    }
  }

  i.v-icon.notranslate.fa.fa-user-alt.theme--light {
    font-size: 20px !important;
  }
  .header-tital {
    letter-spacing: 0;
    font-family: $fontfamliy;
    color: $fontcolorsm;
  }
}
</style>
