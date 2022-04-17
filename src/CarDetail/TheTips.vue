<template>
  <div class="Registration">
    <v-container>
      <v-row class="justify-center">
        <v-col cols="12" sm="10" md="7" lg="7">
          <v-card class="overflow-hidden pa-4" width="auto">
            <v-row class="row-card">
              <v-col cols="12">
                <v-card-title class="justify-center tital py-0">
                  3 - خطوات لسلامة المشتري
                </v-card-title>
              </v-col>
              <v-col
                v-for="(Card, i) in Cards"
                :key="i"
                cols="6"
                sm="4"
                md="4"
                class="card-col pa-1"
              >
                <v-card
                  outlined
                  class="d-flex flex-column align-center justify-space-between"
                >
                <span class="grey--text">{{i + 1}}</span>
                  <v-card-text
                    class="text-center card-text pa-2 grey lighten-4"
                    v-text="Card.TipName"
                  >
                  </v-card-text>
                  <v-avatar class="my-2" size="80" tile color="transparent">
                    <v-img
                      class="mx-auto"
                      :src="getimageUrl(Card.folder, Card.CardImg)"
                    >
                    </v-img>
                  </v-avatar>
                </v-card>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "swiper-example-fade-effect",
  components: {},
  data() {
    return {
      reveal: false,
      Tital: " ضـع ثقتـك بنـا",
      Cards: [
        {
          id: 2,
          CardImg: "Tip2.png",
          folder: "outsrc",
          TipName: "قم بزيارة البائع ",
        },
        {
          id: 1,
          CardImg: "Tip3.png",
          folder: "outsrc",
          TipName: "اطلب بطاقة تسجيل السيارة ",
        },
        {
          id: 3,
          CardImg: "Tip1.png",
          folder: "outsrc",
          TipName: " تأكد من كل شي قبل الدفع  ",
        },
      ],
    };
  },
  methods: {
    getimageUrl(FolderName, ImageName) {
      let image = require.context("@/assets/");
      return image("./" + FolderName + "/" + ImageName);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/virables";
@import "@/scss/mixin";
.Registration {
  width: 100%;
  min-height: auto;
  padding: $padding;
  .row-card {
    justify-content: center;
    @media (max-width: 650px) {
      justify-content: start;
    }
    @media (max-width: 450px) {
      justify-content: center;
    }
  }
  .card-col {
    @media (max-width: 650px) {
      flex: 0 0 50%;
      max-width: 50%;
    }
    @media (max-width: 450px) {
      flex: 0 0 80%;
      max-width: 80%;
    }
    @media (max-width: 250px) {
      flex: 0 0 100%;
      max-width: 100%;
    }
  }
  .card-text {
    font-family: $fontfamliy;
    letter-spacing: 0;
    font-size: 16px;
    font-weight: 400;
    height: 60px !important;
    color: $fontcolor !important;
  }
  .tital {
    font-family: $fontfamliy;
    font-size: 24px;
    color: $color-1;
    text-align: center;

    @media (max-width: 460px) {
      font-size: 22px;
    }
    @media (max-width: 438px) {
      font-size: 19px;
    }

    @media (max-width: 300px) {
      font-size: 17px;
    }
  }
}
</style>
