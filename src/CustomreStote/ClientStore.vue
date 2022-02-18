<template>
  <v-main>
    <!-- <NavBar /> -->
    <div class="StoresView">
      <!-- Seller Info Store  -->
      <div class="ClientStoreInfo elevation-3">
        <v-container>
          <v-row class="justify-center">
            <v-col cols="12" sm="8" md="8" class="my-auto">
              <div class="d-flex">
                <v-avatar size="80" color="white">
                  <v-img
                    :src="
                      getimageUrl(getStoreInfo.folder, getStoreInfo.StoreImage)
                    "
                    :lazy-src="
                      getimageUrl(getStoreInfo.folder, getStoreInfo.StoreImage)
                    "
                  >
                  </v-img>
                </v-avatar>
                <v-card flat color="transparent">
                  <v-card-text
                    class="py-1 ClientStoreInfo-Name"
                    v-text="getStoreInfo.StoreName"
                  >
                  </v-card-text>
                  <v-card-text
                    class="py-1 ClientStoreInfo-text"
                    v-text="getStoreInfo.locationStreet"
                  >
                  </v-card-text>
                </v-card>
              </div>
            </v-col>
            <v-col class="my-auto" cols="12" sm="4" md="4">
              <v-card class="d-flex flex-md-column flex-sm-column flex-lg-column justify-center" flat color="transparent">
                <v-card-subtitle class="text-end px-2 py-1">
                  06516541561
                </v-card-subtitle>
                <v-card-subtitle class="text-end px-2 py-1">
                  06516541561
                </v-card-subtitle>
                <v-card-subtitle class="text-end px-2 py-1">
                  06516541561
                </v-card-subtitle>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </div>
      <!-- end Seller Info Store  -->
      <div class="Header-links">
        <v-container>
          <v-row>
            <v-col cols="12">
              <router-link to="/">
                <a class="">الصفحة الرئيسية </a>
              </router-link>
              <router-link to="/TheStore">
                <a class="pr-2">المتجر</a>
              </router-link>
            </v-col>
          </v-row>
        </v-container>
      </div>
      <div class="Product">
        <v-container>
          <ClientProducts />
        </v-container>
      </div>
    </div>
  </v-main>
</template>
<script>
// import NavBar from "../NavBar/TheNavBar.vue";
import Srore from "../data-json/Srore.json";
import ClientProducts from "./ClientProducts.vue";

export default {
  name: "ClientStore",
  components: {
    ClientProducts,
  },
  data() {
    return {
      Srore,
      ClientStoreName: this.$route.params.ClientStoreName,
    };
  },
  computed: {
    getStoreInfo() {
      let storeinformation = "";
      for (let i = 0; i < this.Srore.length; i++) {
        if (this.Srore[i].StoreName == this.ClientStoreName) {
          storeinformation = this.Srore[i];
          break;
        }
      }
      return storeinformation;
    },
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
.StoresView {
  width: 100%;
  min-height: 100vh;
  // background-color: $color-background;

  .ClientStoreInfo {
    width: 100%;
    min-height: 15vh;
    // background-color: $color-1;
    font-family: $fontfamliy;
    letter-spacing: 0 !important;

    .Followers-num {
      color: $color-1;
      font-size: 16px;
    }
    .ClientStoreInfo-Name {
      color: $fontcolor;
      font-size: 18px;
      font-weight: bold;
    }
    .ClientStoreInfo-text {
      color: $fontcolor;
      font-size: 13px;
      font-weight: bold;
    }
    .ClientStoreInfo-text-icon {
      font-size: 13px;
      color: $fontcolor;
    }
  }
  .Header-links {
    a {
      font-family: $fontfamliy;
      font-size: 13px;
      font-weight: bold;
    }
  }
  .Product {
    width: 100%;
  }
}
</style>
