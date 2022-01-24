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
        'btn-up': scrollPosition < 400,
        'is-hidden': scrollPosition > 400,
      }"
      @click="$vuetify.goTo(target, options)"
    >
      <v-icon class="btn-up-icon"> fas fa-angle-up </v-icon>
    </v-btn>
    <FooterBar />
  </v-app>
</template>

<script>
// import NavBar from "./NavBar/TheNavBar.vue";
import FooterBar from "./footer/footer.vue";
export default {
  name: "App",
  components: {
    // NavBar,
    FooterBar,
  },
  data() {
    return {
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
  display: flex;
  position: fixed;
  bottom: 20px;
  right: 10px;
  z-index: 5;
  background-color: $btnbackground;
  transform: scale(0);
  transition: all 0.3s ease !important;
  .btn-up-icon {
    font-size: 18px !important;
  }
}
.is-hidden {
  transform: scale(1);
}
</style>
