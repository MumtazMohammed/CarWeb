<template>
  <div class="side">
    <v-container>
      <v-col cols="12">
        <h3 class="text-center ma-0 header-tital">
          أو <br />
          تـواصـل مـعنا على الارقام التالية
        </h3>
      </v-col>
      <v-row class="justify-center">
        <!-- <v-col cols="12" class=""> -->

        <v-col cols="12" md="7" sm="8" class="">
          <v-card class="d-flex align-center">
            <v-avatar tile size="30" class="mr-2" color="white">
              <img src="../assets/social/whatsapp.png" />
            </v-avatar>
            <v-spacer></v-spacer>
            <v-card-title
              dark
              class="Numbdr font-weight-regular justify-center pa-2"
            >
              601121331731+
            </v-card-title>
          </v-card>
        </v-col>
        <v-col cols="12" md="7" sm="8" class="">
          <v-card class="d-flex align-center">
            <v-avatar tile size="30" class="mr-2" color="white">
              <img src="../assets/social/telephone.png" />
            </v-avatar>
            <v-spacer></v-spacer>
            <v-card-title
              dark
              class="Numbdr font-weight-regular justify-center pa-2"
            >
              601121331731+
            </v-card-title>
          </v-card>
        </v-col>

        <!-- <v-col cols="12" class="">
          <v-card flat color="transparent " class="pa-2">
            <v-card-title class="justify-center pa-2 warning-tital">
              <v-icon
                right
                class="warning-icon warning--text text--lighten-2 px-2"
              >
                fas fa-exclamation-triangle
              </v-icon>
              تنبيه !!!!
            </v-card-title>
            <v-divider class="white"></v-divider>
            <v-card-text class="text-center warning-text">
              اذا كان لديك شكوى عن المعلن قم بي بكتابة رسالتك عبر البريد او
              الأرقام الموضحه اعلأه ولا تنسى ادراج رقم المعلن .
            </v-card-text>
          </v-card>
        </v-col> -->
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  name: "Side",
  data() {
    return {
      contacts: [
        {
          contact: "601121331731+",
          logo: "../assets/social/whatsapp.png",
        },

        {
          contact: "601121331731+",
          logo: "../assets/social/telephone.png",
        },

        {
          contact: "xzxzxz@gmail.com",
          logo: "../assets/social/gmail.png",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/virables";
@import "@/scss/mixin";
.side {
  width: 100%;
  height: 100%;
  .header-tital {
    letter-spacing: 0;
    font-family: $fontfamliy;
    color: $fontcolor;
  }
  .warning-tital {
    letter-spacing: 0;
    font-family: $fontfamliy;
    color: $fontcolorsm;
    font-size: 20px;
  }
  .warning-icon {
    font-size: 20px;
  }
  .warning-text {
    letter-spacing: 0;
    font-family: $fontfamliy;
    font-weight: 300;
    color: $fontcolorsm !important;
    font-size: 16px;
  }
}

.Numbdr {
  font-size: 20px;
  font-weight: bold !important;
  font-family: $fontfamliy;
}
</style>
