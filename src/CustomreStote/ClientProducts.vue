<template>
  <div class="ProductStore">
    <v-row class="justify-space-between">
      <v-col
        class="pb-0 pb-md-3 pb-sm-3 pb-lg-3"
        cols="12"
        sm="6"
        md="6"
        lg="6"
      >
        <v-card-title class="pa-2">
          يوجد اكثر من {{ StoreProducts.length - 1 }} منتج موفرة
          لأجلك</v-card-title
        >
      </v-col>
      <v-col
        class="pt-0 my-auto pt-md-3 pt-sm-3 pt-lg-3"
        cols="12"
        sm="6"
        md="5"
        lg="4"
      >
        <CategoriesPartsFilter />
      </v-col>
    </v-row>
    <v-row>
      <v-col
        v-for="Product in StoreProducts"
        :key="Product.id"
        cols="6"
        sm="4"
        md="3"
        lg="2"
        class="px-1"
      >
        <v-card
          router
          :to="{
            name: 'ProductDetail',
            params: {
              ProductNumber: Product.ProductNumber,
              ProductName: Product.ProductName,
              ProductId: Product.id,
            },
          }"
          class="pa-1 Product-box"
        >
          <v-img
            class="mb-2"
            max-height="100"
            contain
            :src="getimageUrl(Product.folder, Product.image)"
            :lazy-src="getimageUrl(Product.folder, Product.image)"
          >
          </v-img>
          <div class="Discount" v-if="Product.HaveDiscount == true">
            <p class="ma-0">خصم {{ Product.Discount }}</p>
          </div>
          <v-divider></v-divider>
          <v-card-text
            class="pa-1 product-tital"
            v-text="Product.ProductName"
          ></v-card-text>
          <v-card-text
            class="pa-1 product-type"
            v-text="Product.ProductCarType"
          ></v-card-text>
          <v-card-subtitle
            :class="Product.HaveDiscount == true ? 'discount' : 'price'"
            class="pa-1"
          >
            <span v-text="Product.Price"></span>
            {{ Product.Currency }}
          </v-card-subtitle>
          <v-card-subtitle
            v-if="Product.HaveDiscount == true"
            class="pa-1 price"
          >
            <span v-text="Product.AfterDiscount"></span>
            {{ Product.Currency }}
          </v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import StoreProducts from "../data-json/StoreProducts.json";
import CategoriesPartsFilter from "../Search/CategoriesPartsFilter.vue";
export default {
  name: "ProductStore",
  components: {
    CategoriesPartsFilter,
  },
  data() {
    return {
      StoreProducts,
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
.ProductStore {
  width: 100%;
  font-family: $fontfamliy;
  .Product-box {
    cursor: pointer;
  }
  .product-tital,
  .product-type {
    font-weight: 400;
  }
  .price {
    font-weight: bold !important;
    text-align: end;
    span {
      color: rgb(0, 164, 0);
      font-size: 20px;
    }
  }
  .discount {
    font-weight: bold;
    color: rgba(71, 71, 71, 0.347) !important;
    text-decoration: line-through !important ;
    position: absolute;

    span {
      font-size: 13px;
    }
  }
  .Discount {
    position: absolute;
    top: 2px;
    left: 2px;
    background-color: $color-1;
    border-radius: 20px;
    width: auto;
    padding: 2px 5px;
    text-align: center;
    color: $fontcolorsm;
    font-size: 15px;
    letter-spacing: 0;
    font-weight: 400 !important;
  }
}
</style>
