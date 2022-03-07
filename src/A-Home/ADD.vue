<template>
  <div class="Registration">
    <v-container>
      <v-row class="row-card">
        <v-col cols="12">
          <p class="text-center mb-2 font-weight-bold tital">
            {{ Tital }}
          </p>
          <span class="line my-3 mx-auto"></span>
        </v-col>
      </v-row>
      <v-row class="row-card">
        <v-col
          v-for="Card in Cards"
          :key="Card.id"
          cols="6"
          sm="5"
          md="4"
          class="pa-2 card-col"
        >
          <v-card
            elevation="4"
            class="d-flex flex-column align-center justify-space-between"
            :class="Card.CardClass"
            height="170"
            router
            :to="{
              name: `${Card.path}`,
              params: { MyAdd: 'إعلاناتي' },
            }"
          >
            <v-img
              class="mx-auto"
              contain
              height="100"
              :src="getimageUrl(Card.folder, Card.CardImg)"
            ></v-img>
            <v-spacer></v-spacer>
            <v-card-text
              class="text-center card-text pa-2"
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
          CardImg: "undraw_order_a_car_-3-tww.svg",
          folder: "outsrc",
          CardName: "أفتح معرضك معنا",
          CardClass: "Showroom",
          path: "AboutShowroom",
        },
        {
          id: 2,
          CardImg: "undraw_business_deal_re_up4u.svg",
          folder: "outsrc",
          CardName: "خلي إعلان سيارتك علينا",
          CardClass: "Sell",
          path: "AboutSellingCarPayAdd",
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
  min-height: 50vh;
  padding: $padding;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: $color-background;

  .row-card {
    justify-content: center;
    @media (max-width: 600px) {
      justify-content: start;
    }
    @media (max-width: 350px) {
      justify-content: center;
    }
  }
  .card-col {
    @media (max-width: 350px) {
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
    border-color: #35477d;
    border-width: 0px;
    border-bottom-width: 4px;
    border-style: solid;
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
    border-color: #c06c84;
    border-width: 0px;
    border-bottom-width: 4px;
    border-style: solid;
    transition: all 0.3s 0s ease;
  }
  .Sell:hover {
    box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2),
      0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12) !important;
  }
}
</style>
