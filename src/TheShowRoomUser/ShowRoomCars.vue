<template>
  <div class="TheShowRoomPage">
    <v-container class="container">
      <v-row>
        <v-col cols="12">
          <!-- search  -->
          <v-card color="white" class="search overflow-hidden">
            <v-card-actions class="justify-center">
              <v-btn
                :to="{
                  name: 'ShowRoomAddNewCar',
                  params: { AddNewCar: 'إضافة سيارة جديدة' },
                }"
                text
                color="grey darken-2"
              >
                إضافة سيارة جديدة
                <v-icon left>mdi-shape-circle-plus</v-icon>
              </v-btn>
            </v-card-actions>
            <v-divider></v-divider>
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
                label=" فلتر البحث عن أسم السيارة ؟ "
                hide-details="true"
                background-color="#fff"
                append-icon="mdi-car-side"
                @focus="ShowSerachCardvisble = true"
              ></v-text-field>
            </v-card-actions>
          </v-card>
        </v-col>
        <!-- Cars  -->
        <v-col
          v-for="(Car, i) in filteredStore"
          :key="i"
          cols="12"
          md="6"
          lg="6"
        >
          <v-card
            :to="{
              name: 'ViewShowRoomCarDetails',
              params: {
                carId: Car.id,
              },
            }"
            color="#fff"
          >
            <div
              class="justify-center d-flex flex-column flex-md-row flex-sm-row flex-lg-row"
            >
              <!-- Car img  -->
              <v-card-actions class="justify-center">
                <v-avatar size="80" color="blue lighten-1">
                  <v-img
                    :src="getimageUrl(Car.folder, Car.image)"
                    :lazy-src="getimageUrl(Car.folder, Car.image)"
                    alt="getimageUrl(showroom.folder, showroom.ShowroomImg)"
                  ></v-img>
                </v-avatar>
              </v-card-actions>
              <!-- if the dealer make the car booked  -->
              <div v-if="Car.Token" class="booked">
                <span>محجوز</span>
              </div>
              <div v-if="Car.discount" class="discount">
                <span>{{ Car.discountAmount }}</span>
              </div>
              <!-- Car detail -->
              <div class="detail-box my-auto">
                <v-card-actions
                  class="pa-0 flex-column flex-md-row flex-sm-row flex-lg-row"
                >
                  <v-card-text class="detail">
                    الشركة : <span>{{ Car.company }}</span>
                  </v-card-text>
                  <v-card-text class="detail">
                    أسم السيارة : <span>{{ Car.name }}</span>
                  </v-card-text>
                </v-card-actions>
                <v-card-actions
                  class="pa-0 flex-column flex-md-row flex-sm-row flex-lg-row"
                >
                  <v-card-text class="detail">
                    سعر السيارة :
                    <span class="mx-1">{{ Car.payment }}</span>
                    <span>ريال</span>
                  </v-card-text>
                  <v-card-text class="detail">
                    رقم الأعلان : <span>{{ Car.id }}</span>
                  </v-card-text>
                </v-card-actions>
              </div>
              <!--  -->
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import ShowRoomUserCars from "../data-json/All-Car.json";
export default {
  name: "TheShowRoomPage",
  data() {
    return {
      search: "",
      ShowRoomUserCars,
      carId: this.$route.params.carId,
    };
  },
  computed: {
    filteredStore: function () {
      return this.ShowRoomUserCars.filter((ShowRoomUserCars) => {
        return ShowRoomUserCars.name.match(this.search);
      });
    },
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
};
</script>
<style lang="scss" scoped>
@import "@/scss/virables";
@import "@/scss/mixin";
.TheShowRoomPage {
  width: 100%;
  min-height: 100vh;
  //   background-color: $color-background;
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
  .detail-box {
    width: 100%;
    .detail {
      width: fit-content !important;
      font-family: $fontfamliy;
      font-weight: 500;
      font-size: 15px !important;
      @media (max-width: 600px) {
        font-size: 18px !important;
      }
      span {
        font-weight: 400;
      }
    }
  }
  .container {
    @media (min-width: 960px) {
      max-width: 1212px !important;
    }
  }
  // booked hint
  .booked {
    background-color: #616161;
    position: absolute;
    top: 1px;
    left: 1px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 7px;
    border-radius: 50%;
    height: 38px;
    width: 38px;
    span {
      display: inline-block;
      font-size: 10px;
      font-family: $fontfamliy;
      font-weight: 500;
      color: #fff;
    }
  }
  // discount hint
  .discount {
    background-color: #e65100;
    position: absolute;
    bottom: 1px;
    left: 1px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 7px;
    border-radius: 50%;
    height: 38px;
    width: 38px;
    span {
      display: inline-block;
      font-size: 10px;
      font-family: $fontfamliy;
      font-weight: 500;
      color: #fff;
    }
  }
}
</style>
