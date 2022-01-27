<template>
  <div class="add">
    <v-container>
      <carousel-3d
        :controls-visible="false"
        :clickable="false"
        :autoplay="true"
        :autoplayTimeout="4000"
        :animationSpeed="800"
        :autoplayHoverPause="true"
        :perspective="0"
        :space="180"
        :width="750"
        :height="480"
      >
        <slide v-for="(slide, i) in slides" :key="i" :index="i">
          <figure>
            <img
              src="../assets/kisspng-2018-toyota-land-cruiser-toyota-land-cruiser-prado-toyota-land-cruiser-5aee4201d1b163.5770321115255639058589.png"
            />
            <figcaption>
              The sky is the limit only for those who aren't afraid to fly!
            </figcaption>
          </figure>
        </slide>
      </carousel-3d>
    </v-container>
  </div>
</template>
<script>
import { Carousel3d, Slide } from "vue-carousel-3d";

export default {
  components: {
    Carousel3d,
    Slide,
  },
  data() {
    return {
      slides: 5,
    };
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/virables";
@import "@/scss/mixin";
.add {
  width: 100%;
  min-height: calc(100vh - 150px);
  display: flex;
  align-items: center;
  padding: $padding;
}
.carousel-3d-container .current figure {
  margin: 0;
}

.carousel-3d-container .carousel-3d-slide.current figcaption {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  bottom: 0;
  position: absolute;
  bottom: 0;
  padding: 15px;
  font-size: 12px;
  min-width: 100%;
  box-sizing: border-box;
}
</style>
