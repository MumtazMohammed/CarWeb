<template>
  <v-main>
    <NavBar />
    <div class="ShowroomView">
      <!-- showroom information  -->
      <div class="mb-2 showroom-information">
        <!--  -->
        <v-container>
          <v-row class="justify-center flex-md-row-reverse flex-lg-row-reverse">
            <v-col cols="12" sm="12" md="8">
              <v-card flat color="transparent" class="info-card">
                <v-card-title class="card-title justify-center pt-1">
                  {{ getShowRoomInfo.ShowroomName }}
                </v-card-title>
                <v-card-text class="card-text text-center pt-3">
                  {{ getShowRoomInfo.locationStreet }}
                </v-card-text>
                <v-row class="justify-center">
                  <v-col cols="12" sm="9" md="12" lg="12">
                    <v-img
                      max-height="300"
                      max-width="376"
                      contain
                      :src="
                        getimageUrl(
                          getShowRoomInfo.folder,
                          getShowRoomInfo.ShowroomImg
                        )
                      "
                      style="border-radius: 5px; margin: 0 auto"
                    ></v-img>
                  </v-col>
                  <v-col cols="12" sm="10" md="10" lg="10">
                    <v-row class="mt-lg-2">
                      <v-col class="pa-2">
                        <v-card-text class="card-text pa-0">
                          هاتف:
                        </v-card-text>
                      </v-col>
                      <v-col class="pa-2">
                        <v-card-text class="card-text-phone-No pa-0">
                          0545603920
                        </v-card-text></v-col
                      >
                      <v-col class="pa-2">
                        <v-card-text class="card-text-phone-No pa-0">
                          0545603920
                        </v-card-text>
                      </v-col>
                      <v-col class="pa-2">
                        <v-card-text class="card-text-phone-No pa-0">
                          0545603920
                        </v-card-text></v-col
                      >
                      <v-col class="pa-2">
                        <v-card-text class="card-text-phone-No pa-0">
                          0545603920
                        </v-card-text></v-col
                      >
                      <v-col class="pa-2">
                        <v-card-text class="card-text-phone-No pa-0">
                          0545603920
                        </v-card-text></v-col
                      >
                    </v-row>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </div>
      <!-- car count and filter -->
      <v-container class="container-second">
        <v-row>
          <v-col cols="12" class="pa-0">
            <v-card-title class="card-title-car-count-in-room">
              عدد السيارات |
              <span class="mx-2 red--text">{{ 11 }}</span>
            </v-card-title>
          </v-col>
          <v-col cols="12">
            <CarFillter />
          </v-col>
        </v-row>
        <ShowroomViewCar />
      </v-container>
    </div>
  </v-main>
</template>
<script>
import NavBar from "../NavBar/TheNavBar.vue";
import showrooms from "../data-json/showroom.json";
import ShowroomViewCar from "../Car-showroom/ShowroomViewCar.vue";
import CarFillter from "../Search/CarFillter.vue";

export default {
  name: "ShowroomView",
  components: { NavBar, ShowroomViewCar, CarFillter },
  data() {
    return {
      showrooms,
      ShowRoomName: this.$route.params.ShowRoomName,
      ShowRoomLocation: this.$route.params.ShowRoomLocation,
      locationStreet: this.$route.params.locationStreet,
      Price: [" الأعلى سعرا", "الأقل سعرا"],
      Condtion: ["جديد", "مستعمل"],
    };
  },
  methods: {
    getimageUrl(FolderName, ImageName) {
      let image = require.context("@/assets/");
      return image("./" + FolderName + "/" + ImageName);
    },
  },
  computed: {
    getShowRoomInfo() {
      let ShowRoom = "";
      for (let i = 0; i < this.showrooms.length; i++) {
        if (this.showrooms[i].ShowroomName == this.ShowRoomName) {
          ShowRoom = this.showrooms[i];
          break;
        }
      }
      return ShowRoom;
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/virables";
@import "@/scss/mixin";
.ShowroomView {
  width: 100%;
  min-height: 100vh;
  font-family: $fontfamliy;
  letter-spacing: 0 !important;
  padding-bottom: 25px;

  .showroom-information {
    background-color: $color-2;
    min-height: calc(100vh - 135px);
    padding: $padding;
    position: relative;
    .card-title {
      font-size: 38px !important;
      font-weight: bold;
      color: $fontcolorsm !important;
      @media (max-width: 500px) {
        font-size: 30px !important;
      }
      @media (max-width: 450px) {
        font-size: 27px !important;
      }
      @media (max-width: 370px) {
        font-size: 24px !important;
      }
      @media (max-width: 340px) {
        font-size: 20px !important;
      }
    }
    .card-text {
      font-size: 17px !important;
      font-weight: normal !important;
      color: $color-4 !important;
      @media (max-width: 340px) {
        font-size: 15px !important;
      }
    }
    .card-text-phone-No {
      font-size: 16px !important;
      font-weight: 400 !important;
      color: $color-4 !important;
    }
    .card-title-car-count-in-room {
      font-weight: bold;
      @media (max-width: 600px) {
        justify-content: center;
        font-size: 25px !important;
      }
    }
  }

  .select-price {
    font-family: $fontfamliy;
    font-weight: 500;
  }
  .container-second {
    @media (min-width: 960px) {
      max-width: 1100px;
    }
  }
  .featured {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    .featured-text {
      font-family: $fontfamliy;
      font-size: 16px !important;
    }
  }
}
</style>
