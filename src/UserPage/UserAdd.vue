<template>
  <div class="UserAdd">
    <v-container>
      <!--**********  Add  btn ****************-->
      <v-row v-if="Ishidden == true">
        <v-col cols="12">
          <v-card-actions>
            <v-btn color="#0881fa" elevation="0" class="AddCardBtn">
              إضافة إعلان
              <v-icon left>mdi-plus</v-icon>
            </v-btn>
          </v-card-actions>
        </v-col>
      </v-row>
      <v-row v-if="Ishidden == true">
        <v-col cols="12">
          <v-card-title class="title"> إعلاناتي... </v-card-title>
        </v-col>
      </v-row>
      <v-row v-if="Ishidden == true">
        <v-col cols="12" sm="5" md="4">
          <!-- <v-card-title
            v-if="(deletePost == false, isEdit == false)"
            class="title"
            >لا يوجد أي أعلان لديك حتى الأن</v-card-title
          > -->
          <v-card v-show="deletePost">
            <v-card-actions class="justify-center">
              <v-avatar size="160" color="blue">
                <img
                  contain
                  src="../assets/Mazda/mazda1.jpg"
                  alt="../assets/Hyundai/image2.jpg"
                />
              </v-avatar>
            </v-card-actions>
            <v-card-title class="title">مـازدا مازدا3</v-card-title>
            <v-card-actions>
              <span width="50" class="white--text green rounded-pill pa-1"
                >$35,000</span
              >
              <v-spacer></v-spacer>
              <v-btn
                @click="(isEditing = true), (Ishidden = false)"
                dark
                icon
                class="primary"
              >
                <v-icon>mdi-pencil</v-icon>
              </v-btn>
              <v-btn @click="snackbar = true" icon dark class="red">
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-card-actions>
            <!--********** if user sure to delete the post  **************-->
            <v-snackbar min-width="220" class="title" v-model="snackbar" centered>
              {{ text }}
              <template v-slot:action="{ attrs }">
                <v-btn
                  color="green"
                  v-bind="attrs"
                  icon
                  @click="(snackbar = false), (deletePost = false)"
                >
                  <v-icon>mdi-check-bold</v-icon>
                </v-btn>
                <v-btn
                  color="red"
                  class="mr-1"
                  icon
                  v-bind="attrs"
                  @click="snackbar = false"
                >
                  <v-icon>mdi-close</v-icon>
                </v-btn>
              </template>
            </v-snackbar>
          </v-card>
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
  }
  .btn {
    font-family: $fontfamliy !important;
    letter-spacing: 0;
    font-size: 16px;
  }
}
</style>
