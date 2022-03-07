<template>
  <div class="showroom-box">
    <v-container fluid>
      <v-row>
        <!-- reg with us  -->
        <v-col cols="12" sm="12" md="12">
          <v-row class="justify-center">
            <v-col cols="11" sm="12" md="12" class="pt-0 px-0">
              <v-card
                flat
                class="d-flex card-if-you-have-showroom rounded-0 py-2"
              >
                <v-card-actions class="btn-box-if-you-have-showroom pa-4 pt-0">
                  <v-card-title class="title-if-you-have-showroom mb-1">
                    هل أنت صاحب معرض؟
                  </v-card-title>
                  <v-btn
                    to="/AboutShowroom"
                    elevation="0"
                    large
                    color=""
                    class="btn-if-you-have-showroom"
                  >
                    أحجز معرضك
                  </v-btn>
                </v-card-actions>
              </v-card>
              <!-- search for showroom -->
              <v-card color="white" class="search overflow-hidden">
                <v-card-actions class="pa-0">
                  <!-- delete text  -->
                  <v-btn
                    v-if="search.length > 0 && ShowSerachCardvisble"
                    small
                    icon
                    color="white"
                    class="mr-1 red darken-1"
                    @click="reset()"
                  >
                    <v-icon class="">mdi-close</v-icon>
                  </v-btn>
                  <!-- customiza search -->
                  <v-text-field
                    class="rounded-b-0"
                    v-model="search"
                    solo
                    large
                    flat
                    label="أبحث عن معرض ؟"
                    hide-details="true"
                    background-color="#fff"
                    append-icon="mdi-store-search-outline"
                    @focus="ShowSerachCardvisble = true"
                  ></v-text-field>
                </v-card-actions>
                <!-- search stroe names  -->
                <v-expand-transition>
                  <v-card
                    v-if="search.length > 0 && ShowSerachCardvisble"
                    @blur="ShowSerachCardvisble = false"
                    elevation="0"
                    max-width="97%"
                    height="270"
                    class="mx-auto overflow-auto rounded-t-0"
                  >
                    <v-list-item
                      router
                      :to="{
                        name: 'ShowroomView',
                        params: {
                          ShowRoomName: showroom.ShowroomName,
                          ShowRoomLocation: showroom.location,
                          locationStreet: showroom.locationStreet,
                        },
                      }"
                      v-for="showroom in filteredStore"
                      :key="showroom.id"
                    >
                      <v-list-item-avatar>
                        <v-avatar size="50" color="#424342">
                          <v-img
                            contain
                            :src="
                              getimageUrl(showroom.folder, showroom.ShowroomImg)
                            "
                            :lazy-src="
                              getimageUrl(showroom.folder, showroom.ShowroomImg)
                            "
                          >
                          </v-img>
                        </v-avatar>
                      </v-list-item-avatar>
                      <v-list-item-content>
                        <v-list-item-title v-text="showroom.ShowroomName">
                        </v-list-item-title>
                        <v-spacer></v-spacer>
                        <v-list-item-subtitle v-text="showroom.location">
                        </v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                    <v-card-title
                      class="not-found"
                      v-if="filteredStore.length < 1"
                    >
                      لا يوجد معرض بهذا الاسم (<span class="mx-2 red--text">{{
                        search
                      }}</span>
                      )
                    </v-card-title>
                  </v-card>
                </v-expand-transition>
              </v-card>
              <!--end search  -->
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row>
        <!-- showroom -->
        <v-col
          v-for="showroom in showrooms"
          :key="showroom.id"
          cols="12"
          sm="6"
          md="4"
          lg="3"
          class="showroom-box-col pa-2"
        >
          <v-card
            router
            :to="{
              name: 'ShowroomView',
              params: {
                ShowRoomName: showroom.ShowroomName,
                ShowRoomLocation: showroom.location,
                locationStreet: showroom.locationStreet,
              },
            }"
            :class="showroom.VIP == true ? 'showroom-vip' : 'showroom'"
          >
            <v-img
              :src="getimageUrl(showroom.folder, showroom.ShowroomImg)"
              :lazy-src="getimageUrl(showroom.folder, showroom.ShowroomImg)"
              class="white--text align-end showroom-img #424342"
              color="primary"
              style="width: 450px; height: 250px; margin: 0 auto"
              width="450"
              height="200"
            >
              <!-- Featured showeoom  -->
              <v-card
                flat
                shaped
                v-if="showroom.VIP == true"
                class="Featured-card rounded-bl-0 rounded-tr-0"
              >
                <v-card-text
                  class="white--text text-center Featured-text py-1 px-2"
                >
                  متميز
                </v-card-text>
              </v-card>
            </v-img>
            <v-card-title v-text="showroom.ShowroomName" class="title">
            </v-card-title>
            <v-card-actions>
              <!--showroom location  -->
              <v-icon class="icon">mdi-map-marker-outline</v-icon>
              <v-card-text v-text="showroom.location" class="pa-1 text">
              </v-card-text>
              <v-spacer></v-spacer>
              <!--showroom car count  -->
              <v-icon class="icon">mdi-car</v-icon>
              <v-card-text class="pa-1 text">
                <span>4</span>
                سيارة
              </v-card-text>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  name: "showroom",
  components: {},
  data() {
    return {
      e1: "جميع المحافظات",
      showrooms: this.$attrs.showrooms,
      ShowRoomName: this.$route.params.ShowRoomName,
      // showroom search
      search: "",
      select: null,
      benched: 0,
      ShowSerachCard: "",
      ShowSerachCardvisble: false,
    };
  },
  methods: {
    getimageUrl(FolderName, ImageName) {
      let image = require.context("@/assets/");
      return image("./" + FolderName + "/" + ImageName);
    },
    reset() {
      return (this.search = "");
    },
  },
  computed: {
    filteredStore: function () {
      return this.showrooms.filter((showroom) => {
        return showroom.ShowroomName.match(this.search);
      });
    },
    items() {
      return Array.from({ length: this.length }, (k, v) => v + 1);
    },
    length() {
      return 7000;
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/virables";
@import "@/scss/mixin";
.showroom-box {
  width: 100%;
  min-height: calc(100vh - 150px);
  // padding: $padding;
  padding-bottom: 25px;
  background-color: transparent;

  .showroom-box-col {
    @media (max-width: 600px) {
      padding: 8px 66px !important;
    }
    @media (max-width: 485px) {
      padding: 12px !important;
    }
  }
  .card-if-you-have-showroom {
    background: transparent;
    justify-content: center;
    flex-direction: column-reverse;
    @media (max-width: 850px) {
      align-items: center;
    }
    .title-if-you-have-showroom {
      font-family: $fontfamliy !important;
      color: $fontcolorlinks !important;
      letter-spacing: 0 !important;
      font-size: 1.6rem !important;
      font-weight: bold !important;
      @media (max-width: 850px) {
        justify-content: center;
      }
      @media (max-width: 375px) {
        font-size: 1.4rem !important;
      }
    }
    .btn-box-if-you-have-showroom {
      justify-content: center;
      flex-direction: column;
    }
    .btn-if-you-have-showroom {
      font-family: $fontfamliy !important;
      color: $fontcolorsm !important;
      font-weight: 500 !important;
      letter-spacing: 0 !important;
      font-size: 17px !important;
      background-color: $color-1;
      position: relative;
      @media (max-width: 375px) {
        font-size: 1rem !important;
      }
    }
  }
  .showroom {
    cursor: pointer;
    overflow: hidden;
    background-color: #fff;
    transition: all 0.2s ease !important;
    .title {
      font-family: $fontfamliy !important;
      color: $fontcolor !important;
      letter-spacing: 0 !important;
      font-size: 1rem !important;
      @media (max-width: 780px) {
        font-size: 17px !important;
      }
      @media (max-width: 600px) {
        font-size: 1.25rem !important;
      }
      @media (max-width: 390px) {
        font-size: 1rem !important;
      }
    }
    .icon {
      color: $fontcolor !important;
      font-size: 20px;
    }
    .text {
      width: fit-content !important;
      font-family: $fontfamliy;
      letter-spacing: 0;
      font-size: 18px;
      color: $fontcolor;

      span {
        color: $color-1;
        margin: 0 3px;
        font-weight: 500;
        font-size: 18px;
      }
    }
    .container {
      @media (min-width: 960px) {
        max-width: 1100px !important;
      }
    }
  }
  .showroom-vip {
    cursor: pointer;
    overflow: hidden;
    background-color: $color-1;
    transition: all 0.2s ease !important;
    .title {
      font-family: $fontfamliy !important;
      color: $fontcolorsm !important;
      letter-spacing: 0 !important;
      font-size: 1rem !important;
      @media (max-width: 780px) {
        font-size: 17px !important;
      }
      @media (max-width: 600px) {
        font-size: 1.25rem !important;
      }
      @media (max-width: 390px) {
        font-size: 1rem !important;
      }
    }
    .icon {
      color: $fontcolorsm !important;
      font-size: 20px;
    }
    .text {
      width: fit-content !important;
      font-family: $fontfamliy;
      letter-spacing: 0;
      font-size: 18px;
      color: $fontcolorsm;

      span {
        color: $fontcolorsm;
        margin: 0 3px;
        font-weight: 500;
        font-size: 18px;
      }
    }
    .container {
      @media (min-width: 960px) {
        max-width: 1100px !important;
      }
    }
  }

  .search {
    margin: 0 auto;
    height: auto;
    width: 50%;
    font-family: $fontfamliy;
    letter-spacing: 0px;
    @media (max-width: 600px) {
      width: 100%;
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

  .Featured-card {
    position: absolute;
    top: 0;
    right: 0;
    background-color: $color-1;
    .Featured-text {
      font-family: $fontfamliy !important;
      font-size: 15px;
      font-weight: 500;
    }
  }
}
.v-select {
  font-family: $fontfamliy !important;
  height: 50px;
}
.v-select::v-deep .v-select__selection--comma {
  font-family: $fontfamliy !important;
  height: 22px;
}
.not-found {
  font-size: 14px !important;
}
</style>
