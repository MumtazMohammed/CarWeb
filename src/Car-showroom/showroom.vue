<template>
  <div class="showroom-box">
    <v-container fluid>
      <v-row>
        <!-- reg with us  -->
        <v-col cols="12" sm="12" md="12">
          <v-row class="justify-center">
            <v-col cols="12" sm="12" md="12" class="pt-0 px-0">
              <v-card
                flat
                class="d-flex card-if-you-have-showroom rounded-0 py-2"
              >
                <!-- search  -->
                <v-card-actions class="search align-end">
                  <v-text-field
                    flat
                    label="أبحث عن معرض"
                    :rules="rules"
                    hide-details
                    solo
                    color="transparent"
                  ></v-text-field>
                  <v-icon class="search-icon pa-3" large>mdi-magnify</v-icon>
                </v-card-actions>

                <!-- <v-spacer></v-spacer> -->
                <v-card-actions class="btn-box-if-you-have-showroom pa-4 pt-0">
                  <v-card-title class="title-if-you-have-showroom">
                    هل أنت صاحب معرض؟
                  </v-card-title>
                  <!-- <v-spacer></v-spacer> -->
                  <v-btn elevation="0" large class="btn-if-you-have-showroom">
                    سجل معرضك معنا
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <!-- search  -->
      <v-row class="mt-1">
        <v-col cols="12" sm="6" md="4" class="py-1">
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
      </v-row>
      <!--end search  -->
      <v-row>
        <!-- showroom -->
        <v-col
          v-for="showroom in showrooms"
          :key="showroom.id"
          cols="12"
          sm="6"
          md="4"
          lg="3"
          class="pa-2 showroom-box-col"
        >
          <v-card
            flat
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
              <v-avatar
                v-if="showroom.VIP == true"
                class="VIP-avatar"
                size="50"
                color="black"
              >
                <v-img
                  src="../assets/showroom/VIP/—Pngtree—vip member icon design element_5463096.png"
                ></v-img>
              </v-avatar>
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
import showrooms from "../data-json/showroom.json";
import ShowRoomCar from "../data-json/ShowRoomCar.json";
export default {
  name: "showroom",
  components: {},
  data() {
    return {
      e1: "جميع المحافظات",
      showrooms,
      ShowRoomCar,
      ShowRoomName: this.$route.params.ShowRoomName,
      rules: [
        (value) => !!value || "Required.",
        (value) => (value && value.length >= 3) || "Min 3 characters",
      ],
      states: [
        "جميع المحافظات",
        "Vermont",
        "Virgin Island",
        "Virginia",
        "Washington",
        "West Virginia",
        "Wisconsin",
        "Wyoming",
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
.showroom-box {
  width: 100%;
  min-height: calc(100vh - 150px);
  // padding: $padding;
  padding-bottom: 25px;

  .showroom-box-col {
    @media (max-width: 600px) {
      padding: 8px 66px !important;
    }
    @media (max-width: 485px) {
      padding: 5px !important;
    }
  }
  .card-if-you-have-showroom {
    background: $color-1;
    justify-content: center;
    flex-direction: column-reverse;

    @media (max-width: 850px) {
      align-items: center;
    }
    .title-if-you-have-showroom {
      font-family: $fontfamliy !important;
      color: $fontcolorsm !important;
      letter-spacing: 0 !important;
      font-size: 1.8rem !important;
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
      color: $color-1 !important;
      letter-spacing: 0 !important;
      font-size: 1.15rem !important;
      @media (max-width: 375px) {
        font-size: 1rem !important;
      }
    }
  }
  .showroom {
    cursor: pointer;
    overflow: hidden;
    background-color: $simplebackground;
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
    background-color: $SpicalCarColor2;
    transition: all 0.2s ease !important;
    .title {
      font-family: $fontfamliy !important;
      color: $SpicalCarColor !important;
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
      color: $SpicalCarColor !important;
      font-size: 20px;
    }
    .text {
      width: fit-content !important;
      font-family: $fontfamliy;
      letter-spacing: 0;
      font-size: 18px;
      color: $fontcolorsm;

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

  .search {
    margin: 0 auto;
    width: 50%;
    border-top-right-radius: 0px !important;
    border-bottom-right-radius: 0px !important;
    @media (max-width: 850px) {
      width: 50%;
    }
    @media (max-width: 600px) {
      width: 100%;
    }

    .search-icon {
      height: 48px;
      font-size: 24px !important;
      background-color: $color-1;
      border-radius: 4px 0 0 4px;
      color: $fontcolorsm;
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
  .VIP-avatar {
    position: absolute;
    top: 2px;
    right: 2px;
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
.place-text {
  width: 30%;
  font-family: $fontfamliy !important;
  color: $fontcolor !important;
  letter-spacing: 0 !important;
}
</style>
