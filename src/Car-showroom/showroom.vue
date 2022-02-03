<template>
  <div class="showroom-box">
    <v-container>
      <v-row>
        <!-- reg with us  -->
        <v-col cols="12" sm="12" md="12">
          <v-row class="justify-center">
            <v-col cols="12" sm="10" md="12" class="pt-0">
              <v-card flat class="d-flex card-if-you-have-showroom">
                <v-card-title class="title-if-you-have-showroom">
                  هل أنت صاحب معرض؟
                </v-card-title>
                <v-spacer></v-spacer>
                <v-card-actions class="btn-box-if-you-have-showroom">
                  <v-btn elevation="0" large class="btn-if-you-have-showroom">
                    سجل معرضك معنا
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
        <!-- search  -->
        <!-- <v-col cols="12" class="pa-2">
          <v-card flat color="transparent" max-width="500" class="pa-2">
            <div>
              <v-text-field
                label="أبحث عن المعرض"
                :rules="rules"
                hide-details
                outlined
                solo
              ></v-text-field>
            </div>
          </v-card>
        </v-col> -->
        <!-- showroom -->
        <v-col
          v-for="showroom in showrooms"
          :key="showroom.id"
          cols="12"
          sm="6"
          md="4"
          class="pa-2"
        >
          <v-card router to="/ShowroomView" class="showroom">
            <v-img
              :src="getimageUrl(showroom.folder, showroom.ShowroomImg)"
              :lazy-src="getimageUrl(showroom.folder, showroom.ShowroomImg)"
              class="white--text align-end showroom-img grey lighten-2"
              color="primary"
              height="200"
              width="1000"
              contain
            >
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
                <span>{{ AllCar.length }}</span>
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
import AllCar from "../data-json/All-Car.json";
export default {
  name: "showroom",
  components: {},
  data() {
    return {
      showrooms,
      AllCar,
      rules: [
        (value) => !!value || "Required.",
        (value) => (value && value.length >= 3) || "Min 3 characters",
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
  padding: $padding;

  .card-if-you-have-showroom {
    background: $color-2;
    @media (max-width: 480px) {
      flex-direction: column;
    }
    .title-if-you-have-showroom {
      font-family: $fontfamliy !important;
      color: $fontcolorsm !important;
      letter-spacing: 0 !important;
      font-size: 1.25rem !important;
      font-weight: bold !important;
      @media (max-width: 480px) {
        justify-content: center;
      }
    }
    .btn-box-if-you-have-showroom {
      @media (max-width: 480px) {
        justify-content: center;
      }
    }
    .btn-if-you-have-showroom {
      font-family: $fontfamliy !important;
      color: $fontcolorsm !important;
      letter-spacing: 0 !important;
      font-size: 1.15rem !important;
      background-color: $color-1 !important;
    }
  }
  .showroom {
    cursor: pointer;
    overflow: hidden;
    transition: transform 0.2s ease !important;
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
  }
  .showroom:hover {
    transform: scale(1.01);
    box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2),
      0 5px 8px 0 rgba(0, 0, 0, 0.14), 0 1px 14px 0 rgba(0, 0, 0, 0.12) !important;
  }
}
</style>
