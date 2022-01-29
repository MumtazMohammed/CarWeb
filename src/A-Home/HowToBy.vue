<template>
  <div class="HowToBuy mt-16">
    <v-container>
      <p class="text-center font-weight-bold tital">
        {{ Tital }}
      </p>
      <span class="line my-3 mx-auto"></span>
      <v-row class="justify-center mt-2">
        <v-col cols="12" sm="8" md="8">
          <div>
            <v-expansion-panels dark v-model="panel" multiple>
              <v-expansion-panel v-for="(item, i) in items" :key="i">
                <v-expansion-panel-header class="expansion-header py-1">{{
                  item.how
                }}</v-expansion-panel-header>
                <v-expansion-panel-content class="expansion-content py-2">
                  {{ item.text }}
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </div>
        </v-col>

        <!-- <v-col cols="12" sm="6" md="6">
          <v-img
            contain
            fullscreen
            src="../assets/outsrc/—Pngtree—buying sale rent cars flat_5426811.png"
          ></v-img>
        </v-col> -->
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  name: "HowToBuy",
  data() {
    return {
      Tital: " مـعلومات قد تحظى بي أهـتمامك",
      items: [
        {
          how: "كيف يتم شراء السيارات من الموقع",
          text: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.",
        },
        {
          how: "كيف يتم بيع السيارات على الموقع",
          text: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.",
        },
        {
          how: "كيف يتم الأعلان على الموقع",
          text: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.",
        },
      ],
      panel: [0],
      readonly: false,
    };
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/virables";
@import "@/scss/mixin";
.HowToBuy {
  width: 100%;
  height: auto;
  padding: $padding;
  position: relative;
  background-color: $color-background;
  .stepper-header {
    box-shadow: 0px 0px 0px;
  }

  .tital {
    font-family: $fontfamliy;
    font-size: 30px;
    @media (max-width: 460px) {
      font-size: 26px;
    }
    @media (max-width: 438px) {
      font-size: 24px;
    }
    @media (max-width: 370px) {
      font-size: 20px;
    }
    @media (max-width: 300px) {
      font-size: 17px;
    }
  }
  .line {
    width: 320px;
    height: 7px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    background: $color-1;
    display: block;
    @media (max-width: 460px) {
      width: 30px;
    }
    @media (max-width: 438px) {
      width: 250px;
    }
    @media (max-width: 300px) {
      width: 200px;
    }
  }
  .expansion-header {
    font-family: $fontfamliy;
    letter-spacing: 0;
    color: $fontcolorsm;
    font-size: 16px;
    font-weight: 600;
    min-height: 45px;
    background: $linear-gradient ;
  }
  .expansion-content {
    font-family: $fontfamliy;
    letter-spacing: 0;
    color: $fontcolor;
    font-size: 15px;
    font-weight: 400;
    line-height: 1.8;
    pointer-events: none;
    background-color: white;
  }
}
</style>
