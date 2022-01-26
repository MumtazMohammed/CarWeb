<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
    <v-btn
      ref="button"
      icon
      large
      class="btn-up"
      color="white"
      v-bind:class="{
        'btn-up': scrollPosition < 600,
        'is-hidden': scrollPosition > 600,
      }"
      @click="$vuetify.goTo(target, options)"
    >
      <v-icon class="btn-up-icon">fas fa-angle-up</v-icon>
    </v-btn>
    <NavigationDrawer />
    <FooterBar />
  </v-app>
</template>

<script>
import NavigationDrawer from "./NavBar/NavigationDrawer.vue";
import FooterBar from "./footer/footer.vue";
export default {
  name: "App",
  components: {
    NavigationDrawer,
    FooterBar,
  },
  data() {
    return {
      drawer: false,
      type: "number",
      number: 0,
      duration: 300,
      offset: 0,
      scrollPosition: null,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
  },
  computed: {
    target() {
      const value = this[this.type];
      if (!isNaN(value)) return Number(value);
      else return value;
    },
    options() {
      return {
        duration: this.duration,
        offset: this.offset,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;500;700;800;900&display=swap");
@import "./scss/virables";
#app {
  background: white;
  width: 100%;
  position: relative;
  overflow: hidden;
}
.v-main {
  padding: 0px !important;
}
.btn-up {
  position: fixed;
  bottom: 20px;
  right: 10px;
  z-index: 5;
  background: $color-2;
  transform: scale(0) rotate(360deg);
  transition: all 0.4s 0s ease !important;

  .btn-up-icon {
    font-size: 22px !important;
  }
}
// .btn-menu {
//   position: fixed;
//   bottom: 70px;
//   right: 10px;
//   z-index: 5;
//   background-color: $btnbackground;
//   transform: scale(0);
//   transition: all 0.3s ease !important;
//   display: none;
//   @media (max-width: 600px) {
//     display: flex;
//   }
//   .btn-menu-icon {
//     font-size: 20px !important;
//   }
// }
.is-hidden {
  transform: scale(1) rotate(0deg);
}
</style>
