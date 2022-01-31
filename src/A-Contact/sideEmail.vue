<template>
  <div class="side">
    <v-container>
      <v-col cols="12">
        <h3 class="text-center ma-0 header-tital">
          تـواصـل مـعنا على الارقام التالية
        </h3>
      </v-col>
      <v-row class="mt-2">
        <!-- <v-col cols="12" class=""> -->
        <v-col cols="12" md="12" class="py-1 d-flex justify-center">
          <v-flex xs8 sm12 md6>
            <v-card
              outline
              elevation="0"
              class="card overflow-hidden text-center pa-2 rounded-5"
            >
              <v-row>
                <v-col cols="2" class="d-flex justify-center align-center">
                  <v-avatar tile size="25" class="">
                    <img src="../assets/social/whatsapp.png" />
                  </v-avatar>
                </v-col>
                <v-col cols="10" class="pa-0">
                  <v-card-title
                    dark
                    class="card-ti success lighten-1 white--text font-weight-regular justify-center pa-2"
                  >
                    601121331731+
                  </v-card-title>
                </v-col>
              </v-row>
            </v-card>
          </v-flex>
        </v-col>
        <v-col cols="12" class="py-1 d-flex justify-center">
          <v-flex xs8 sm12 md6>
            <v-card
              outline
              elevation="0"
              class="card overflow-hidden text-center pa-2 rounded-5"
            >
              <v-row>
                <v-col cols="2" class="d-flex justify-center align-center">
                  <v-avatar tile size="25" class="">
                    <img src="../assets/social/telephone.png" />
                  </v-avatar>
                </v-col>
                <v-col cols="10" class="pa-0">
                  <v-card-title
                    dark
                    class="card-ti primary lighten-1 white--text font-weight-regular justify-center pa-2"
                  >
                    601121331731+
                  </v-card-title>
                </v-col>
              </v-row>
            </v-card>
          </v-flex>
        </v-col>
        <v-col cols="12" class="">
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
        </v-col>
        <!-- <v-col cols="12" class="py-1">
        <v-flex xs8 sm12 md6>
          <v-card
            outline
            elevation="0"
            class="card overflow-hidden text-center pa-2 rounded-5"
          >
            <v-row>
              <v-col cols="2" class="d-flex justify-center align-center">
                <v-avatar tile size="25" class="">
                  <img src="../assets/social/gmail.png" />
                </v-avatar>
              </v-col>
              <v-col cols="10" class="pa-0">
                <v-card-title
                  dark
                  class="card-ti red white--text font-weight-regular justify-center pa-2"
                >
                  xzxzxz@gmail.com
                </v-card-title>
              </v-col>
            </v-row>
          </v-card>
        </v-flex>
      </v-col> -->
        <!-- </v-col> -->
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
    color: $fontcolorsm;
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

.card-ti {
  font-size: 17px;
}
</style>
