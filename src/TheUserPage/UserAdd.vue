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
        <v-row class="justify-center" v-show="deletePost">
          <v-col cols="12" md="7" sm="6">
            <v-card flat class="justify-center mx-3">
              <!-- edit btn and delete btn and upgrade btn  -->
              <v-card-actions class="">
                <div>
                  <!-- edit post -->
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        v-bind="attrs"
                        v-on="on"
                        to="/EditPost"
                        dark
                        icon
                        small
                        class="primary mx-1"
                      >
                        <v-icon class="icon">mdi-pencil</v-icon>
                      </v-btn>
                    </template>
                    <span class="tooltip">تعديل</span>
                  </v-tooltip>
                  <!-- delete post  -->
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        v-bind="attrs"
                        v-on="on"
                        @click="snackbar = true"
                        icon
                        dark
                        small
                        class="red mx-1"
                      >
                        <v-icon class="icon">mdi-close</v-icon>
                      </v-btn>
                    </template>
                    <span class="tooltip">حذف الأعلان</span>
                  </v-tooltip>
                  <!--********** dialog for the user if wants to upgrade the post  **************-->
                  <v-dialog v-model="dialog" width="800">
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        v-bind="attrs"
                        v-on="on"
                        icon
                        dark
                        small
                        class="indigo mx-1"
                      >
                        <v-icon class="icon">mdi-chevron-triple-up</v-icon>
                      </v-btn>
                    </template>
                    <v-card>
                      <v-card-title class="dialog-Title grey lighten-2">
                        ترقية الأعلان
                      </v-card-title>
                      <div>
                        <ul class="pa-2 mr-4 dialog-ul">
                          <li
                            v-for="(text, i) in Upgrade"
                            :key="i"
                            v-text="text.text"
                          ></li>
                        </ul>
                      </div>
                      <!-- upgrade  -->
                      <v-card-actions class="justify-center">
                        <!-- Whatsapp Number  -->
                        <v-card
                          width="300"
                          class="dialog-ul px-2"
                          v-if="YesToUbgrade == true"
                        >
                          <v-card-subtitle
                            class="pb-1 text-center font-weight-bold blue--text"
                          >
                            أدخل رقم الوتس آب الخاص بك.
                          </v-card-subtitle>
                          <v-text-field
                            outline
                            color="primary"
                            label="الرقم"
                          ></v-text-field>
                          <!-- btn yes for upgrading the post  -->
                          <v-card-actions
                            class="justify-center"
                            v-if="YesToUbgrade == true"
                          >
                            <v-btn
                              class="btn-dialog"
                              color="primary"
                              block
                              @click="YesToUbgrade = false"
                            >
                              تأكيد
                            </v-btn>
                          </v-card-actions>
                        </v-card>
                        <v-card-title class="dialog-ul success--text" v-else>
                          سيتم التواصل معك في اقرب وقت شكرا لك
                        </v-card-title>
                      </v-card-actions>
                      <v-divider></v-divider>
                      <v-card-actions>
                        <v-btn
                          class="btn-dialog"
                          color="red"
                          text
                          @click="dialog = false"
                        >
                          إغلاق
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </div>
              </v-card-actions>
              <!--  -->
              <!-- if the post upgradeted -->
              <v-card-actions class="pa-2 upgrade justify-center">
                <v-avatar size="20" color="transparent" tile>
                  <img src="../assets/outsrc/updated.png" alt="alt" />
                </v-avatar>
                <p class="d-inline-block mr-2 mb-0">
                  تم الترقية لمدة ( <span>60</span> ) يوماً
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
            <!--********** snackbar for the user if user sure to delete the post  **************-->
            <div>
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
            <!--  -->
          </v-col>
          <v-col cols="12" md="5" sm="6" class="my-auto">
            <v-card-actions class="justify-center pa-0">
              <v-avatar class="avatar" size="280" color="#fff">
                <v-img
                  contain
                  src="../assets/Mazda/mazda1.jpg"
                  alt="../assets/Hyundai/image2.jpg"
                ></v-img>
              </v-avatar>
            </v-card-actions>
          </v-col>
        </v-row>
      </v-card>

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
      dialog: false,
      deletePost: true,
      YesToUbgrade: true,
      snackbar: null,
      text: "هل أنت متأكد من حذف الأعلان.",
      Upgrade: [
        {
          text: " سيتم عرض سيارتك في الصفحة الرئيسية والصفحات الأولى من البحث على آلاف المشترين في اليمن .",
        },
        {
          text: "تغير عرض أعلان سيارتك بي لون مميز عن الأعلان المجاني .",
        },
        {
          text: "أعلان سيارتك ستكون موثوق لدى المشترين من خلال المعلومات التي ستوفرها لنا .",
        },
        {
          text: "رسوم الأعلان 20$ .",
        },
        {
          text: " مدة الأعلان 60 يوماً .",
        },
      ],
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
  padding-bottom: 25px;
  min-height: 60vh;
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
  font-size: 17px !important;
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
</style>
