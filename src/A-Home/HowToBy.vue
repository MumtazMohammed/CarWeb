<template>
  <div class="HowToBuy">
    <v-container>
      <p class="text-center mb-2 font-weight-bold tital" v-text="Tital"></p>
      <span class="line my-3 mx-auto"></span>
      <v-row class="justify-center">
        <v-col cols="12" sm="10" md="10">
          <v-expansion-panels dark v-model="panel">
            <v-expansion-panel v-for="(item, i) in items" :key="i">
              <v-expansion-panel-header
                v-text="item.how"
                class="expansion-header py-1"
              >
              </v-expansion-panel-header>
              <v-expansion-panel-content
                v-text="item.text"
                class="expansion-content px-2"
              >
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
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
          how: "كيف تشتري سيارتك من الموقع",
          text: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.",
        },
        {
          how: "كيف تبيع سيارتك على الموقع",
          text: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.",
        },
        {
          how: "كيف تفتج معرضك على الموقع",
          text: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.",
        },
      ],
      panel: [0],
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
    color: $fontcolorlinks;
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
    width: 30px;
    height: 5px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    background: $color-1;
    display: block;
  }
  .expansion-header {
    font-family: $fontfamliy;
    letter-spacing: 0;
    color: $fontcolorsm;
    font-size: 16px;
    font-weight: 600;
    min-height: 45px;
    background: $color-1;
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
