<template>
  <div class="Registration">
    <v-container>
      <v-row class="row-card">
        <v-col
          v-for="Card in Cards"
          :key="Card.id"
          cols="6"
          sm="4"
          md="3"
          class="card-col"
        >
          <v-card
            :color="Card.color"
            elevation="4"
            class="d-flex flex-column align-center justify-space-between"
            :class="Card.CardClass"
            router
            :to="{
              name: `${Card.path}`,
              params: { MyAdd: 'إعلاناتي' },
            }"
          >
            <v-avatar class="my-2" size="80" tile color="transparent">
              <v-img
                class="mx-auto"
                :src="getimageUrl(Card.folder, Card.CardImg)"
              >
              </v-img>
            </v-avatar>
            <v-spacer></v-spacer>
            <v-card-text
              class="text-center card-text pa-2 grey lighten-4"
              v-text="Card.CardName"
            >
            </v-card-text>
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
          id: 1,
          CardImg: "showroom.png",
          folder: "outsrc",
          CardName: "أفتح معرضك معنا",
          CardClass: "Showroom",
          path: "AboutShowroom",
          color: "#0881fa",
        },
        // {
        //   id: 2,
        //   CardImg: "deal.png",
        //   folder: "outsrc",
        //   CardName: "خلي إعلان سيارتك علينا",
        //   CardClass: "Sell",
        //   path: "AboutSellingCarPayAdd",
        //   color: "#0881fa",
        // },
        {
          id: 2,
          CardImg: "tax.png",
          folder: "outsrc",
          CardName: " إعلان سيارتك مجاناً",
          CardClass: "Sell",
          path: "AboutSellingCarFreeAdd",
          color: "#0881fa",
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
    font-size: 18px;
    font-weight: 400;
    color: $fontcolor !important;
  }
  .tital {
    font-family: $fontfamliy;
    font-size: 27px;
    color: $fontcolor;

    @media (max-width: 460px) {
      font-size: 26px;
    }
    @media (max-width: 438px) {
      font-size: 24px;
    }
    @media (max-width: 370px) {
      font-size: 20px;
    }
    @media (max-width: 300px) {
      font-size: 17px;
    }
  }
  .line {
    width: 30px;
    height: 5px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    background-color: $color-1;
    display: block;
    @media (max-width: 350px) {
      width: 70px;
    }
  }
  // Showroom class
  .Showroom {
    position: relative;
    overflow: hidden;
    transition: all 0.3s 0s ease;
  }
  .Showroom:hover {
    box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2),
      0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12) !important;
  }

  // store class
  .Store {
    position: relative;
    overflow: hidden;
    border-color: #6c5b7b;
    border-width: 0px;
    border-bottom-width: 6px;
    border-style: solid;
    transition: all 0.3s 0s ease;
  }
  .Store:hover {
    box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2),
      0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12) !important;
  }

  // Sell class
  .Sell {
    position: relative;
    overflow: hidden;

    transition: all 0.3s 0s ease;
  }
  .Sell:hover {
    box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2),
      0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12) !important;
  }
  .Sellfree {
    position: relative;
    overflow: hidden;

    transition: all 0.3s 0s ease;
  }
  .Sellfree:hover {
    box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2),
      0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12) !important;
  }
}
</style>
