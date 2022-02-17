<template>
  <div class="Store-box">
    <div class="Store-tital">
      <v-container>
        <v-col cols="12" class="pa-1">
          <router-link to="/AboutStore"> هل تريد الأنضمام لدى شركة ثقة التجارية </router-link>
        </v-col>
        <v-row class="align-center justify-center flex-md-row-reverse mb-3">
          <v-col cols="12" sm="12" md="7" class="pa-1">
            <v-card-text class="title">
              يوجد لدينا اكثر من {{ StoreInfo.length - 1 }} متاجر <br />
              لتوفير لك قطع الغيار وغيرها .
            </v-card-text>
          </v-col>
          <v-col cols="12" sm="7" md="5" class="pa-1">
            <v-card flat color="transparent" class="search-card">
              <v-card-actions class="search align-end pa-0">
                <v-text-field
                  label="بحث"
                  :rules="rules"
                  hide-details
                  solo
                  flat
                  color="transparent"
                ></v-text-field>
                <v-btn elevation="0" class="search-btn">
                  <v-icon solo class="pa-3 search-icon" large
                    >mdi-magnify</v-icon
                  >
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="Store-card">
      <v-container fluid>
        <!-- search store by place   -->
        <v-row class="justify-space-between">
          <v-col cols="12" sm="6" md="4" class="">
            <v-card color="" outlined flat class="d-flex align-center pa-0">
              <v-card-text class="place-text pa-0 pr-2">عرض حسب </v-card-text>
              <v-select
                v-model="e1"
                :items="states"
                menu-props="auto"
                label="Select"
                hide-details
                single-line
                solo
                flat
                class="pa-0"
              ></v-select>
            </v-card>
          </v-col>
          <!-- search by catgories  -->
          <v-col
            class="list-col pt-0 pt-md-3 pt-sm-3 pt-lg-3"
            sm="6"
            md="4"
            cols="12"
          >
            <v-list dark class="pa-0 list rounded-4">
              <v-list-group no-action>
                <template v-slot:activator>
                  <v-list-item-content>
                    <v-list-item-title class="list-title"
                      >قطع الغيار</v-list-item-title
                    >
                  </v-list-item-content>
                </template>

                <v-list-item
                  class="px-2"
                  v-for="CarPart in CarParts"
                  :key="CarPart.id"
                >
                  <v-list-item-content>
                    <v-list-item-title
                      class="list-title-link"
                      v-text="CarPart.PartTital"
                    ></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-group>
            </v-list>
          </v-col>
        </v-row>
        <!--end search  -->
        <!-- stores  -->
        <v-row>
          <v-col
            v-for="Store in StoreInfo"
            :key="Store.id"
            cols="12"
            sm="12"
            md="4"
            class="store-col"
          >
            <v-card class="mx-auto" max-width="100%" outlined>
              <v-list-item three-line class="px-2">
                <v-list-item-content>
                  <div
                    v-text="Store.StoreName"
                    class="text-overline mb-1 card-text"
                  ></div>
                  <v-list-item-title
                    v-text="Store.location"
                    class="text-overline mb-1 card-text"
                  >
                  </v-list-item-title>
                  <v-list-item-subtitle
                    v-text="Store.category"
                    class="text-overline card-text"
                  ></v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-avatar size="80" color="white">
                  <v-img
                    contain
                    :src="getimageUrl(Store.folder, Store.StoreImage)"
                    :lazy-src="getimageUrl(Store.folder, Store.StoreImage)"
                  ></v-img>
                </v-list-item-avatar>
              </v-list-item>

              <v-card-actions>
                <v-btn
                  router
                  :to="{
                    name: 'ClientStore',
                    params: {
                      ClientStoreName: Store.StoreName,
                      StoreLocation: Store.location,
                      StoreCategory: Store.category,
                    },
                  }"
                  width="35%"
                  text
                  class="card-btn"
                >
                  رؤية المتجر
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>
<script>
import StoreInfo from "../data-json/Srore.json";
import CarParts from "../data-json/CarParts.json";
export default {
  name: "Store",
  components: {},
  data() {
    return {
      ClientStoreName: this.$route.params.ClientStoreName,
      CarParts,
      e1: "جميع المحافظات",
      StoreInfo,
      rules: [
        (value) => !!value || "Required.",
        (value) => (value && value.length >= 3) || "Min 3 characters",
      ],
      states: [
        "جميع المحافظات",
        "Alabama",
        "Alaska",
        "American Samoa",
        "Arizona",
        "Arkansas",
        "California",
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
.Store-box {
  width: 100%;
  min-height: calc(100vh);
  padding-bottom: 25px;

  .Store-tital {
    background-color: $color-1;
    overflow: hidden !important;
    position: relative;
    .title {
      font-family: $fontfamliy !important;
      color: $fontcolorsm !important;
      letter-spacing: 0 !important;
      font-size: 24px !important;
      @media (max-width: 480px) {
        font-size: 20px !important;
      }
      @media (max-width: 380px) {
        font-size: 18px !important;
      }
    }
    a {
      font-family: $fontfamliy !important;
      color: $fontcolorsm !important;
      letter-spacing: 0 !important;
      text-decoration: underline;
      font-size: 15px !important;
    }
  }

  .Store-card {
    width: 100%;
    // padding: $padding;

    .v-select {
      font-family: $fontfamliy !important;
      height: 50px;
    }
    .v-select::v-deep .v-select__selection--comma {
      font-family: $fontfamliy !important;
      height: 22px;
      margin: 7px 0px 0px 0;
    }

    .place-text {
      width: 30%;
      font-family: $fontfamliy !important;
      color: $fontcolor !important;
      letter-spacing: 0 !important;
    }
    .store-col::v-deep .theme--light.v-sheet--outlined {
      border-color: $color-1;
    }
    .card-text {
      font-family: $fontfamliy !important;
      color: $fontcolor !important;
      letter-spacing: 0 !important;
      font-size: 14px !important;
    }
    .card-btn {
      font-family: $fontfamliy !important;
      color: $fontcolorsm !important;
      background-color: $color-1;
      letter-spacing: 0 !important;
    }
  }
  // .search-card {
  //   width: 100%;
  //   @media (max-width: 850px) {
  //     width: 50%;
  //   }
  //   @media (max-width: 600px) {
  //     width: 100%;
  //   }
  // }
  .search {
    margin: 0 auto;
    width: 100%;
    border-top-right-radius: 0px !important;
    border-bottom-right-radius: 0px !important;

    .search-icon {
      color: $fontcolorsm;
      font-size: 24px !important;
    }
    .search-btn {
      height: 48px;
      background-color: $color-1;
      border-radius: 4px 0 0 4px;
      border-top: thin solid white;
      border-left: thin solid white;
      border-bottom: thin solid white;
    }
  }
  .v-text-field::v-deep .v-label.theme--light {
    font-family: $fontfamliy !important;
    font-weight: 500;
  }
  .v-text-field::v-deep input#input-66 {
    font-family: $fontfamliy !important;
    font-weight: 500;
  }
  ::v-deep .v-text-field--solo {
    border-top-left-radius: 0px !important;
    border-bottom-left-radius: 0px !important;
  }

  ::v-deep.v-list.pa-0.list.rounded-4.v-sheet.theme--dark {
    border-radius: 3px;
  }
  ::v-deep.v-list-group.v-list-group--active.v-list-group--no-action.primary--text {
    color: #fff !important;
  }
  .list-col {
    position: relative;
    .list {
      position: absolute;
      top: 12px;
      left: 12px;
      width: calc(100% - 24px);
      z-index: 1;
      font-family: $fontfamliy !important;
      background-color: $color-1;
      @media (max-width: 600px) {
        position: relative !important;
        top: 0px;
        left: 0px;
        width: calc(100% - 0px);
      }
      .list-title {
        font-size: 17px;
        font-weight: 500;
        height: 25px;
        display: flex;
        align-items: center;
        letter-spacing: 0;
      }
      .list-title-link {
        font-size: 15px;
        font-weight: 500;
        height: 25px;
        display: flex;
        align-items: center;
        letter-spacing: 0;
        color: $fontcolorsm;
        cursor: pointer;
      }
    }
  }
}
</style>
