<template>
  <div class="UserAdd">
    <v-container>
      <!--**********  Add  btn ****************-->
      <v-row>
        <v-col cols="12">
          <v-card-actions>
            <!-- Add new car ad  -->
            <v-btn
              to="/NewPost"
              color="blue lighten-1"
              elevation="0"
              class="AddCardBtn"
            >
              إضافة إعلان
              <v-icon left>mdi-plus</v-icon>
            </v-btn>
          </v-card-actions>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-card-title class="title pt-1 grey--text text--darken-2">
            إعلاناتي...
          </v-card-title>
        </v-col>
      </v-row>
      <!-- car card  -->
      <v-card flat color="#eee">
        <v-row class="justify-center">
          <v-col cols="12" md="7" sm="12">
            <v-card flat class="justify-center mx-3">
              <!--  -->
              <FeaturedBns />
              <!-- if the post upgradeted -->
              <v-card-actions class="pa-2 upgrade justify-center">
                <v-avatar size="20" color="transparent" tile>
                  <img src="../assets/outsrc/updated.png" alt="alt" />
                </v-avatar>
                <p class="d-inline-block mr-2 mb-0">
                  تم الترقية لمدة ( <span>60</span> ) يوماً
                </p>
              </v-card-actions>
              <!-- if the post featured -->
              <v-card-actions class="pa-2 upgrade justify-center">
                <v-avatar size="20" color="transparent" tile>
                  <img src="../assets/outsrc/updated.png" alt="alt" />
                </v-avatar>
                <p class="d-inline-block mr-2 mb-0">
                  تم التعزيز لمدة ( <span>60</span> ) يوماً
                </p>
              </v-card-actions>
              <!-- post details -->
              <v-card-title class="title">
                أسم السيارة :
                <v-card-title class="title pa-0 pr-2 grey--text text--darken-2">
                  مـازدا مازدا3
                </v-card-title>
              </v-card-title>
              <v-card-title class="title">
                سعر السيارة :
                <v-card-title
                  class="title pa-0 pr-2 green--text text--darken-2"
                >
                  $35,000
                </v-card-title>
              </v-card-title>
              <!-- post Id No  -->
              <v-card-title class="Ad-No">
                رقم الأعلان : (<span class="blue--text mx-2">02185</span>)
              </v-card-title>
              <!-- count pepole see the post  -->
              <v-card-title class="justify-center">
                12
                <v-icon left class="grey--text"> mdi-eye-outline </v-icon>
              </v-card-title>
            </v-card>
          </v-col>
          <v-col cols="12" md="5" sm="12" class="my-auto">
            <v-card-actions class="justify-center pa-0">
              <!-- main image for User Ad  -->
              <!-- <v-avatar class="avatar" size="280" color="#fff">
                <v-img
                  contain
                  src="../assets/Mazda/mazda1.jpg"
                  alt="../assets/Hyundai/image2.jpg"
                ></v-img>
              </v-avatar> -->
              <!-- if Admin Stop User Ad with message  -->
              <v-card flat >
                <v-card-actions class="justify-center">
                  <v-icon class="amber--text">mdi-lock</v-icon>
                </v-card-actions>
                <v-card-subtitle class="text-center any-text">
                  تم إيقاف إعلانك !!!
                </v-card-subtitle>
                <v-card-text class="text-center any-text">
                  نةبلملان نبيةلامكنةبيلا مةمنوةيبةىلار منى منيى رمنى مينرمن
                  نميى رن
                </v-card-text>
              </v-card>
            </v-card-actions>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>
<script>
import FeaturedBns from "./FeaturedBns.vue";
export default {
  name: "UserAdd",
  components: { FeaturedBns },
  data() {
    return {
      text: "هل أنت متأكد من حذف الأعلان.",
    };
  },
  methods: {
    customFilter(item, queryText) {
      const textOne = item.name.toLowerCase();
      const textTwo = item.abbr.toLowerCase();
      const searchText = queryText.toLowerCase();

      return (
        textOne.indexOf(searchText) > -1 || textTwo.indexOf(searchText) > -1
      );
    },
    save() {
      this.hasSaved = true;
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../scss/virables";
@import "../scss/mixin";
.UserAdd {
  width: 100%;
  padding: $padding;
  min-height: 100vh;
  .AddCardBtn {
    color: $fontcolorsm !important;
    font-size: 18px !important;
    font-family: $fontfamliy !important;
    letter-spacing: 0;
  }
  .title {
    font-family: $fontfamliy !important;
    letter-spacing: 0;
    color: $fontcolor;
  }
  .btn {
    font-family: $fontfamliy !important;
    letter-spacing: 0;
    font-size: 16px;
  }
  .Ad-No {
    font-family: $fontfamliy !important;
    letter-spacing: 0;

    span {
      font-size: 20px;
      letter-spacing: 1px;
    }
  }
  .upgrade {
    p {
      font-family: $fontfamliy !important;
      font-size: 16px;
    }
  }
  .tooltip {
    font-family: $fontfamliy !important;
    display: inline-block !important;
  }
}
::v-deep .v-dialog {
  margin: 3px;
}
.dialog-Title {
  font-family: $fontfamliy !important;
  letter-spacing: 0;
}
.dialog-ul {
  font-family: $fontfamliy !important;
  letter-spacing: 0;
}
.dialog-ul li {
  line-height: 1.8;
  @media (max-width: 600px) {
    font-size: 14px;
  }
}
.btn-dialog {
  font-family: $fontfamliy !important;
  letter-spacing: 0;
  font-size: 19px !important;
}
.icon {
  font-family: $fontfamliy !important;
  letter-spacing: 0;
  font-weight: 500;
}
.avatar {
  @media (max-width: 450px) {
    height: 200px !important;
    min-width: 200px !important;
    width: 200px !important;
  }
}
.title::v-deep.v-card__title.title {
  @media (max-width: 450px) {
    font-size: 17px !important;
  }
}
.Ad-No::v-deep.v-card__title.Ad-No {
  @media (max-width: 450px) {
    font-size: 17px !important;
  }
}
.any-text {
  font-family: $fontfamliy !important;
  letter-spacing: 0;
}
</style>
