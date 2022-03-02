<template>
  <div class="UserAdd">
    <v-container>
      <!--**********  Add  btn ****************-->
      <v-row v-if="Ishidden == true">
        <v-col cols="12">
          <v-card-actions>
            <v-btn
              @click="(isEditing = true), (Ishidden = false)"
              color="#0881fa"
              elevation="0"
              class="AddCardBtn"
            >
              إضافة إعلان
              <v-icon left>mdi-plus</v-icon>
            </v-btn>
          </v-card-actions>
        </v-col>
      </v-row>
      <v-row v-if="Ishidden == true">
        <v-col cols="12">
          <v-card-title class="title grey--text text--darken-2">
            إعلاناتي...
          </v-card-title>
        </v-col>
      </v-row>
      <!-- car card  -->
      <v-row v-if="Ishidden == true">
        <v-col cols="12" md="4" sm="6">
          <!-- some info about the car -->
          <v-card flat color="grey darken-3" shaped v-show="deletePost">
            <!-- edit btn and delete btn  -->
            <v-card-actions class="justify-space-between">
              <div>
                <v-btn
                  @click="(isEditing = true), (Ishidden = false)"
                  dark
                  icon
                  class="primary mx-1"
                >
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>
                <v-btn @click="snackbar = true" icon dark class="red mx-1">
                  <v-icon>mdi-close</v-icon>
                </v-btn>
              </div>
              <div>
                <v-card-subtitle class="py-1 grey--text">
                  14 / 10 / 2020
                </v-card-subtitle>
                <v-card-subtitle width="50" class="grey--text pa-0 text-center">
                  <v-icon right class="grey--text">mdi-eye-outline</v-icon>
                  12
                </v-card-subtitle>
              </div>
            </v-card-actions>
            <!--  -->
            <div class="d-flex flex-no-wrap justify-space-between">
              <div class="d-flex flex-column justify-space-between">
                <v-card-title class="title">مـازدا مازدا3</v-card-title>
                <v-card-title width="50" class="green--text">
                  $35,000
                </v-card-title>
              </div>
              <div>
                <!--********** snackbar for the user if user sure to delete the post  **************-->
                <v-snackbar
                  min-width="220"
                  class="title"
                  v-model="snackbar"
                  centered
                  absolute
                  color="red"
                >
                  {{ text }}
                  <template v-slot:action="{ attrs }">
                    <v-btn
                      v-bind="attrs"
                      icon
                      @click="(snackbar = false), (deletePost = false)"
                    >
                      <v-icon>mdi-check-bold</v-icon>
                    </v-btn>
                    <v-btn
                      class="mr-1"
                      icon
                      v-bind="attrs"
                      @click="snackbar = false"
                    >
                      <v-icon>mdi-close</v-icon>
                    </v-btn>
                  </template>
                </v-snackbar>
              </div>
              <v-avatar class="ma-3" size="125" tile>
                <v-img
                  src="../assets/Mazda/mazda1.jpg"
                  alt="../assets/Hyundai/image2.jpg"
                ></v-img>
              </v-avatar>
            </div>
          </v-card>
          <!--  -->
        </v-col>
      </v-row>
      <!--****************** edit post  ***************-->
      <v-row v-if="Ishidden == false">
        <v-col cols="12">
          <EditPost :hidden="Ishidden" @ShowTheHidden="Ishidden = $event" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import EditPost from "./EditPost.vue";
export default {
  name: "UserAdd",
  components: { EditPost },
  data() {
    return {
      deletePost: true,
      Ishidden: true,
      snackbar: null,
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
    color: $fontcolorsm;
  }
  .btn {
    font-family: $fontfamliy !important;
    letter-spacing: 0;
    font-size: 16px;
  }
}
</style>
