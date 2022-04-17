<template>
  <div class="FeaturedBns">
    <!-- edit btn and delete btn and upgrade btn  -->
    <v-menu
      v-model="menu"
      :close-on-content-click="false"
      offset-y
      nudge-left="350"
      nudge-bottom="5"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon class="grey lighten-2 ma-2" v-bind="attrs" v-on="on">
          <v-icon>mdi-menu</v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-card-actions class="">
          <div>
            <!--********** dialog for featured post  **************-->
            <v-dialog v-model="featured" width="800">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  v-bind="attrs"
                  v-on="on"
                  elevation="0"
                  width="100"
                  dark
                  class="orange mx-1"
                >
                  <span class="icon">تعزيز الأعلان</span>
                </v-btn>
              </template>
              <v-card>
                <v-card-title class="dialog-Title grey lighten-2">
                  ترقية الأعلان
                </v-card-title>
                <div>
                  <ul class="pa-2 mr-4 dialog-ul">
                    <li
                      v-for="(text, i) in featur"
                      :key="i"
                      v-text="text.text"
                    ></li>
                  </ul>
                </div>
                <v-card-actions class="justify-center">
                  <v-card flat class="dialog-ul px-2">
                    <v-card-text
                      class="pb-1 text-center font-weight-bold blue--text"
                    >
                      قم بإرسال إصال المبلغ على الوتس آب مع رقم إعلان سيارتك مع
                      أسم الخدمة
                    </v-card-text>
                    <v-card-title class="justify-center grey--text">
                      601121331731+
                    </v-card-title>
                  </v-card>
                </v-card-actions>
                <v-divider></v-divider>
                <v-card-actions>
                  <v-btn
                    class="btn-dialog"
                    color="red"
                    text
                    @click="featured = false"
                  >
                    إغلاق
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>

            <!--********** dialog for the user if wants to upgrade the post  **************-->
            <v-dialog v-model="dialog" width="800">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  v-bind="attrs"
                  v-on="on"
                  dark
                  elevation="0"
                  width="100"
                  class="indigo mx-1"
                >
                  <span class="icon">ترقية الأعلان</span>
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
                  <v-card flat class="dialog-ul px-2">
                    <v-card-text
                      class="pb-1 text-center font-weight-bold blue--text"
                    >
                      قم بإرسال إصال المبلغ على الوتس آب مع رقم إعلان سيارتك مع
                      أسم الخدمة
                    </v-card-text>
                    <v-card-title class="justify-center grey--text">
                      601121331731+
                    </v-card-title>
                  </v-card>
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
          <!-- edit post -->
          <v-btn
            elevation="0"
            to="/EditPost"
            width="70"
            dark
            class="primary mx-1"
          >
            <span class="icon">تعديل</span>
          </v-btn>
          <!-- delete post  -->
          <v-btn
            v-bind="attrs"
            v-on="on"
            elevation="0"
            width="70"
            @click="snackbar = true"
            dark
            class="red mx-1"
          >
            <span class="icon">حذف </span>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-menu>
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
          <v-btn class="mr-1" icon v-bind="attrs" @click="snackbar = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </template>
      </v-snackbar>
    </div>
    <!--  -->
  </div>
</template>

<script>
export default {
  name: "FeaturedBns",
  data() {
    return {
      dialog: false,
      featured: false,
      deletePost: true,
      snackbar: null,
      menu: false,
      text: "هل أنت متأكد من حذف الأعلان.",
      Upgrade: [
        {
          text: " إظهار إعلان سيارتك في الصفحة الرئيسية والصفحات الأولى من البحث على آلاف المشترين في اليمن .",
        },
        {
          text: "تغير عرض أعلان سيارتك بي لون مميز عن الأعلان العادي .",
        },

        {
          text: "رسوم ترقية الأعلان  20$ .",
        },
        {
          text: " المدة  60 يوماً .",
        },
      ],
      featur: [
        {
          text: " إظهار إعلان سيارتك في الصفحات الأولى من البحث على آلاف المشترين في اليمن .",
        },

        {
          text: "رسوم تعزيز الأعلان  10$ .",
        },
        {
          text: " المدة  60 يوماً .",
        },
      ],
    };
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
</style>
