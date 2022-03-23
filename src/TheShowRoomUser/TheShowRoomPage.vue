<template>
  <div class="TheShowRoomPage">
    <ShowRoomBtnsNavgition />
    <div class="router">
      <router-view> </router-view>
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
                class="pa-4 ma-0 grey--text text-end brand-logo text--lighten-1"
              >
                <strong class="ml-2">
                  &COPY; جميع الحقوق محفوظة لشركة ثـقـــة
                </strong>
                2022 —
                {{ new Date().getFullYear() }}
              </p>
            </v-card-actions>
          </v-card>
        </v-footer>
      </v-col>
    </v-row>
  </div>
</template>
<script>
// import Cars from "./ShowRoomCars.vue";
// import Info from "./ShowRoomCarsInfo.vue";
import ShowRoomBtnsNavgition from "./ShowRoomBtnsNavgition.vue";
export default {
  name: "TheShowRoomPage",
  components: { ShowRoomBtnsNavgition },
  data() {
    return {
      search: "",
    };
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
  methods: {
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
  min-height: 80vh;
  // background-color: $color-background;
}
.router {
  padding-bottom: 25px;
}
.container {
  @media (min-width: 960px) {
    max-width: 1212px !important;
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
