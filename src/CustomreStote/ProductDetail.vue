<template>
  <v-main>
    <NavBar />
    <div class="ProductDetail">
      <v-container class="container">
        <!-- Products Name  -->
        <v-col cols="12">
          <v-row>
            <v-col cols="12" sm="6" md="6">
              <v-card-title
                class="product-name"
                v-text="GetProductDetail.ProductName"
              >
              </v-card-title>
            </v-col>
            <v-col cols="12" sm="6" md="6">
              <v-card-actions class="justify-end">
                <ShareAndReport />
              </v-card-actions>
            </v-col>
          </v-row>
        </v-col>
        <v-row class="justify-center">
          <!-- Products Image  -->
          <v-col cols="12" sm="8" md="4" lg="4">
            <v-img
              max-height="200"
              contain
              src="../assets/Store/LD1.jpg"
            ></v-img>

            <v-card-actions class="mt-3 justify-center flex-wrap">
              <v-avatar style="margin: 2px" tile size="60">
                <v-img contain src="../assets/Store/LD1.jpg"></v-img>
              </v-avatar>
              <v-avatar style="margin: 2px" tile size="60">
                <v-img contain src="../assets/Store/LD1.jpg"></v-img>
              </v-avatar>
            </v-card-actions>
          </v-col>
          <!-- Product Detail  -->
          <v-col
            cols="12"
            sm="6"
            md="4"
            lg="4"
            class="pb-0 pb-md-3 pb-sm-3 pb-lg-3 Detail-box"
          >
            <div class="Discount" v-if="GetProductDetail.HaveDiscount == true">
              <p class="ma-0">خصم {{ GetProductDetail.Discount }}</p>
            </div>
            <v-list-item>
              <v-list-item-content class="py-0">
                <!-- product price after Discount or without  -->
                <v-list-item-action-text class="list-dic-pro">
                  السعر :
                  <span
                    class="green--text price"
                    v-if="GetProductDetail.HaveDiscount == !true"
                  >
                    {{ GetProductDetail.Price }}
                  </span>
                  <span class="green--text price" v-else>
                    {{ GetProductDetail.AfterDiscount }}
                  </span>
                  {{ GetProductDetail.Currency }}
                </v-list-item-action-text>
                <!-- old price if have Discount  -->
                <v-list-item-action-text
                  v-if="GetProductDetail.HaveDiscount == true"
                  class="pa-1 discount"
                >
                  <span v-text="GetProductDetail.Price"></span>
                  {{ GetProductDetail.Currency }}
                </v-list-item-action-text>
                <!-- end of old price if have Discount  -->

                <v-list-item-action-text class="list-dic-pro">
                  رقم المنتج :
                  <span class="blue--text">{{
                    GetProductDetail.ProductNumber
                  }}</span>
                </v-list-item-action-text>
                <v-list-item-action-texte class="list-dic-pro">
                  الصنع :
                  <span class="blue--text">{{
                    GetProductDetail.ProductMade
                  }}</span>
                </v-list-item-action-texte>
                <v-list-item-action-text class="list-dic-pro">
                  درجة :
                  <span class="blue--text">{{
                    GetProductDetail.productValue
                  }}</span>
                </v-list-item-action-text>
                <v-list-item-action-text class="list-dic-pro">
                  الضمان :
                  <span class="mx-1 blue--text"
                    >1 {{ GetProductDetail.Guarantee }}</span
                  >
                </v-list-item-action-text>
                <v-list-item-action-text class="list-dic-pro">
                  خدمة توصيل :
                  <span class="blue--text">{{
                    GetProductDetail.DeliveryService
                  }}</span>
                </v-list-item-action-text>
              </v-list-item-content>
            </v-list-item>
          </v-col>
          <v-col
            cols="12"
            sm="6"
            md="4"
            lg="4"
            class="pt-0 pt-md-3 pt-sm-3 pt-lg-3"
          >
            <v-list-item class="">
              <v-list-item-content class="py-0">
                <v-list-item-action-text class="list-dic-pro">
                  إسترجاع أو إستبدال المنتج خلال :
                  <span class="mx-1 blue--text">
                    {{ GetProductDetail.ReturnItem }} يوماً</span
                  >
                </v-list-item-action-text>
                <v-list-item-action-text class="list-dic-pro">
                  الكمية المتوفرة :
                  <span class="mx-1 blue--text">
                    {{ GetProductDetail.ProductsCount }}</span
                  >
                </v-list-item-action-text>
                <v-list-item-action-text class="list-dic-pro">
                  تتوافق القطع مع الموديلات التالية : <br />
                  <span class="my-1 blue--text">
                    {{ GetProductDetail.ProductCarType }}</span
                  >
                </v-list-item-action-text>
                <v-list-item-action-text class="list-dic-pro">
                  وتتطابق مع سنوات الصنع التالية : <br />
                  <span class="blue--text">
                    {{ GetProductDetail.ProductCarYear }}</span
                  >
                </v-list-item-action-text>
              </v-list-item-content>
            </v-list-item>
          </v-col>
          <!-- Contact Seller  -->
          <v-col cols="12" sm="7" md="7" class="">
            <v-card-actions class="justify-center">
              <v-btn width="50%" large class="btn-contact">
                تواصل مع البائع
              </v-btn>
            </v-card-actions>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-main>
</template>
<script>
import NavBar from "../NavBar/TheNavBar.vue";
import ShareAndReport from "../CarDetail/ShareAndReport.vue";
import StoreProducts from "../data-json/StoreProducts.json";

export default {
  name: "ProductDetail",

  components: { NavBar, ShareAndReport },
  data() {
    return {
      StoreProducts,
      ProductId: this.$route.params.ProductId,
    };
  },
  computed: {
    GetProductDetail() {
      let ProductDetail = "";
      for (let i = 0; i < this.StoreProducts.length; i++) {
        if (this.StoreProducts[i].id == this.ProductId) {
          ProductDetail = this.StoreProducts[i];
          break;
        }
      }
      return ProductDetail;
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/virables";
@import "@/scss/mixin";
.ProductDetail {
  width: 100%;
  font-family: $fontfamliy;
  min-height: 50vh;
  padding: $padding;

  .product-name {
    font-size: 23px;
  }
  .list-dic-pro {
    min-height: 22px;
    font-weight: 400;
    font-size: 17px;
    line-height: 1.9;
  }
  .price {
    font-weight: bold;
    font-size: 20px;
    margin: 0 3px;
  }
  .btn-contact {
    font-family: $fontfamliy;
    font-size: 17px;
    letter-spacing: 0;
    color: $fontcolorsm;
    background-color: $color-1 !important;
  }
  .discount {
    font-weight: bold;
    color: rgba(71, 71, 71, 0.347) !important;
    text-decoration: line-through !important ;
    position: absolute;
    top: -22px;
    right: 40px;

    span {
      font-size: 15px;
    }
  }
}
.container {
  @media (min-width: 960px) {
    max-width: 1150px;
  }
  .Detail-box {
    position: relative;
    .Discount {
      position: absolute;
      top: 0px;
      left: 10px;
      background-color: $color-1;
      border-radius: 20px;
      width: auto;
      padding: 3px 10px;
      text-align: center;
      color: $fontcolorsm;
      font-size: 16px;
      letter-spacing: 0;
      font-weight: 400 !important;
    }
  }
}
</style>
