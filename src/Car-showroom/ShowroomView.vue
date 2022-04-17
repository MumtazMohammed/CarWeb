<template>
  <v-main>
    <NavBar />
    <div class="ShowroomView">
      <!-- showroom information  -->
      <div class="showroom-information">
        <!--  -->
        <v-container>
          <v-row class="justify-center flex-md-row-reverse flex-lg-row-reverse">
            <v-col cols="12" sm="12" md="8" class="pb-1">
              <v-card flat color="transparent" class="info-card">
                <v-card-title class="card-title px-0 justify-center">
                  {{ getShowRoomInfo.ShowroomName }}
                </v-card-title>
                <v-card-text class="card-text text-center pt-3">
                  {{ getShowRoomInfo.locationStreet }}
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
          <v-row class="justify-center mb-4">
            <v-col cols="12" class="">
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
                style="
                  border-radius: 5px;
                  margin: 0 auto;
                  border: 2px solid #616161;
                "
              ></v-img>
            </v-col>
          </v-row>
        </v-container>
        <v-container>
          <v-row class="mb-3 justify-center">
            <v-col
              cols="12"
              lg="auto"
              sm="auto"
              md="auto"
              class="py-md-1 py-lg-1 py-sm-1"
            >
              <v-card-text class="card-text py-0"> هاتف: </v-card-text>
            </v-col>
            <v-col cols="auto" class="py-1">
              <v-card-text class="card-text-phone-No py-0">
                0545603920
              </v-card-text>
            </v-col>
            <v-col cols="auto" class="py-1">
              <v-card-text class="card-text-phone-No py-0">
                0545603920
              </v-card-text>
            </v-col>
            <v-col cols="auto" class="py-1">
              <v-card-text class="card-text-phone-No py-0">
                0545603920
              </v-card-text>
            </v-col>
            <v-col cols="auto" class="py-1">
              <v-card-text class="card-text-phone-No py-0">
                0545603920
              </v-card-text>
            </v-col>
          </v-row>
        </v-container>
        <v-divider class="grey darken-1"></v-divider>
        <v-container>
          <v-row class="mt-3 justify-center">
            <v-col
              cols="12"
              lg="auto"
              sm="auto"
              md="auto"
              class="py-md-1 py-lg-1 py-sm-1"
            >
              <v-card-text class="card-text py-0"> وتس آب: </v-card-text>
            </v-col>
            <v-col cols="auto" class="py-1">
              <v-card-text class="card-text-phone-No py-0">
                0545603920
              </v-card-text>
            </v-col>
            <v-col cols="auto" class="py-1">
              <v-card-text class="card-text-phone-No py-0">
                0545603920
              </v-card-text>
            </v-col>
            <v-col cols="auto" class="py-1">
              <v-card-text class="card-text-phone-No py-0">
                0545603920
              </v-card-text>
            </v-col>
            <v-col cols="auto" class="py-1">
              <v-card-text class="card-text-phone-No py-0">
                0545603920
              </v-card-text>
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
    <!-- footer  -->
    <v-row>
      <v-col cols="12">
        <v-footer class="footer" padless>
          <v-card color="#374255" class="flex" flat tile>
            <v-card-actions
              color="transparent"
              class="pa-4 justify-center justify-lg-space-between justify-md-space-between flex-wrap"
            >
              <v-card-title>
                <router-link
                  :to="{
                    name: 'TheTerms',
                    params: { Terms: ' الأحكام والشروط' },
                  }"
                  class="mx-2 brand-Privacy grey--text text--darken-1"
                >
                  <a> الأحكام والشروط </a>
                </router-link>
                <span class="grey--text">|</span>
                <router-link
                  :to="{
                    name: 'ThePrivacy',
                    params: { Privacy: ' سياسة الخصوصية' },
                  }"
                  class="mx-2 brand-Privacy grey--text text--darken-1"
                >
                  <a> سياسة الخصوصية </a>
                </router-link>
              </v-card-title>
              <p
                class="pa-4 ma-0 grey--text text-center text brand-logo text--lighten-1"
              >
                <strong class="ml-2">
                  &COPY; جميع الحقوق محفوظة لشركة ثـقـــة
                </strong>
                <br class="hidden-sm-and-up" />
                2022 —
                {{ new Date().getFullYear() }}
              </p>
            </v-card-actions>
          </v-card>
        </v-footer>
      </v-col>
    </v-row>
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
    background-color: #374255;
    min-height: auto;
    padding: $padding;
    position: relative;
    .card-title {
      font-size: 38px !important;
      font-weight: bold;
      color: $fontcolorsm !important;
      @media (max-width: 610px) {
        font-size: 30px !important;
      }

      @media (max-width: 475px) {
        font-size: 25px !important;
      }
      @media (max-width: 395px) {
        font-size: 20px !important;
      }
      @media (max-width: 320px) {
        font-size: 18px !important;
      }
    }
    .card-text {
      font-size: 17px !important;
      font-weight: normal !important;
      color: $color-4 !important;
      text-align: center;
      @media (max-width: 340px) {
        font-size: 15px !important;
      }
    }
    .card-text-phone-No {
      font-size: 16px !important;
      font-weight: 400 !important;
      color: $color-4 !important;
      text-align: center;
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
.footer {
  border-top: 1px solid #ffffff;
}
.brand-logo {
  letter-spacing: 0px;
  font-family: $fontfamliy;
  font-size: 16px;
  font-weight: 300;
}
.brand-Privacy {
  letter-spacing: 0px;
  font-family: $fontfamliy;
  font-size: 14px;
  display: flex;
  font-weight: 400;
}
</style>
