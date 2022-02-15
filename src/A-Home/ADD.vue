<template>
  <div class="Registration">
    <v-container>
      <v-row class="justify-center">
        <v-col cols="12">
          <p class="text-center font-weight-bold tital">
            {{ Tital }}
          </p>
          <span class="line mt-5 mb-8 mx-auto"></span>
        </v-col>
        <v-col
          v-for="Card in Cards"
          :key="Card.id"
          cols="6"
          sm="4"
          md="3"
          class="pa-2 card-col"
        >
          <v-card
            elevation="4"
            class="pa-2"
            :class="Card.CardClass"
            height="220"
            router
            :to="Card.path"
          >
            <v-img
              class="mx-auto"
              contain
              height="130"
              :src="getimageUrl(Card.folder, Card.CardImg)"
            ></v-img>
            <v-card-text
              class="mt-2 text-center card-text"
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
      Tital: "خلي ثقتك لدينا وأنضم معنا",
      Cards: [
        {
          id: 0,
          CardImg: "undraw_order_a_car_-3-tww.svg",
          folder: "outsrc",
          CardName: "أفتح معرضك معنا",
          CardClass: "Showroom",
        },
        {
          id: 1,
          CardImg: "undraw_business_shop_qw-5-t.svg",
          folder: "outsrc",
          CardName: "أفتح متجرك معنا",
          CardClass: "Store",
        },
        {
          id: 2,
          CardImg: "undraw_business_deal_re_up4u.svg",
          folder: "outsrc",
          CardName: "خلي إعلان سيارتك علينا",
          CardClass: "Sell",
          path: "/AboutSellingCarPayAdd",
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

  .card-col {
    @media (max-width: 350px) {
      flex: 0 0 80%;
      max-width: 80%;
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
    width: 270px;
    height: 7px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    background-color: $color-1;
    display: block;
    @media (max-width: 438px) {
      width: 200px;
    }
  }
  // Showroom class
  .Showroom {
    position: relative;
    overflow: hidden;
    border-color: #35477d;
    border-width: 0px;
    border-bottom-width: 6px;
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
    border-bottom-width: 6px;
    border-style: solid;
    transition: all 0.3s 0s ease;
  }
  .Sell:hover {
    box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2),
      0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12) !important;
  }
}
</style>
