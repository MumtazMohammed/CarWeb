<template>
  <div class="ShowRoomNote">
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-card-actions>
            <v-dialog v-model="dialog" persistent max-width="600">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  large
                  elevation="0"
                  outlined
                  color="blue-grey darken-3"
                  class="btn rounded-pill"
                  v-bind="attrs"
                  v-on="on"
                >
                  إضافة مهام
                  <v-icon left>mdi-calendar-check</v-icon>
                </v-btn>
              </template>
              <v-card flat>
                <v-col cols="12" class="pa-1">
                  <v-card flat>
                    <v-card-actions class="flex-wrap">
                      <v-card-title class="py-2 title">العنوان : </v-card-title>
                      <input
                        v-model="TitalName"
                        class="tital-input"
                        type="text"
                      />
                    </v-card-actions>
                    <v-card-actions class="flex-wrap justify-center">
                      <textarea
                        v-model="disWords"
                        class="tital-textarea"
                        type="text"
                      />
                    </v-card-actions>
                  </v-card>
                </v-col>
                <v-card-actions class="justify-space-between">
                  <v-btn
                    class="btn-close success--text"
                    text
                    @click="AddNewTask"
                    @dragenter="AddNewTask"
                    >حفظ</v-btn
                  >
                  <v-btn
                    class="btn-close red--text"
                    text
                    @click="dialog = false"
                    >إغلاق</v-btn
                  >
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-card-actions>
        </v-col>
        <!-- notes  -->
        <v-col
          v-for="(task, index) in tasks"
          :key="index"
          cols="12"
          md="4"
          lg="4"
          sm="6"
        >
          <!-- Note btns color  -->
          <v-card class="overflow-hidden">
            <v-card flat class="rounded-0 grey darken-2">
              <v-card-actions class="justify-space-between">
                <div>
                  <v-btn
                    elevation="0"
                    class="btn-note-color"
                    color="#fff"
                    fab
                    @click="switchTheme('White')"
                  >
                  </v-btn>
                  <v-btn
                    elevation="0"
                    class="btn-note-color"
                    color="#FFB300"
                    fab
                    @click="switchTheme('Yellow')"
                  >
                  </v-btn>
                  <v-btn
                    elevation="0"
                    class="btn-note-color"
                    color="#66BB6A"
                    fab
                    @click="switchTheme('Green')"
                  >
                  </v-btn>
                  <v-btn
                    elevation="0"
                    class="btn-note-color"
                    color="#42A5F5"
                    fab
                    @click="switchTheme('Blue')"
                  >
                  </v-btn>
                  <v-btn
                    elevation="0"
                    class="btn-note-color"
                    color="#EC407A"
                    fab
                    @click="switchTheme('Pink')"
                  >
                  </v-btn>
                </div>
                <div>
                  <v-btn @click="editTask(index)" small icon class="white ml-1">
                    <v-icon class="black--text">mdi-lead-pencil</v-icon>
                  </v-btn>
                  <v-btn
                    @click="deleteTask(index)"
                    dark
                    small
                    icon
                    class="red mr-1"
                  >
                    <v-icon>mdi-close</v-icon>
                  </v-btn>
                </div>
              </v-card-actions>
            </v-card>
            <v-card flat :class="currentTheme" class="mx-auto rounded-0">
              <!-- Note tital  -->
              <v-card-title class="title py-1 text">
                {{ task.tital }}
              </v-card-title>
              <v-card-actions class="py-lg-0">
                <!-- to show the discrption  -->
                <v-btn icon @click="show = !show">
                  <v-icon class="text">
                    {{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}
                  </v-icon>
                </v-btn>
                <v-spacer></v-spacer>
                <!-- note Date  -->
                <v-card-subtitle class="py-0 text">
                  {{ task.date }}
                </v-card-subtitle>
              </v-card-actions>
              <!-- the discrption  -->
              <v-expand-transition>
                <div v-show="show">
                  <v-divider></v-divider>
                  <v-card-text class="text">
                    {{ task.dis }}
                  </v-card-text>
                </div>
              </v-expand-transition>
            </v-card>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  name: "ShowRoomNote",
  data() {
    return {
      show: false,
      dialog: false,
      TitalName: "",
      disWords: "",
      editTital: null,
      editdis: null,
      currentTheme: localStorage.getItem("theme-color"),
      tasks: [
        {
          id: 0,
          tital: " يتم تركيبه على أي تصميم ",
          date: "15 / 10 / 2020",
          dis: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.",
        },
        {
          id: 1,
          tital: " يتم تركيبه على أي تصميم",
          date: "15 / 10 / 2020",
          dis: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.",
        },
        {
          id: 2,
          tital: " يتم تركيبه على أي تصميم",
          date: "15 / 10 / 2020",
          dis: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.",
        },
      ],
    };
  },
  methods: {
    switchTheme(theme) {
      localStorage.setItem("theme-color", theme);
      this.currentTheme = localStorage.getItem("theme-color");
    },
    AddNewTask() {
      if (this.editTital === null && this.editdis === null) {
        this.tasks.push({
          tital: this.TitalName,
          dis: this.disWords,
          date: new Date(),
        });
      } else {
        this.tasks[this.editTital].tital = this.TitalName;
        this.tasks[this.editdis].dis = this.disWords;
      }
      this.dialog = false;
      this.TitalName = "";
      this.disWords = "";
    },
    deleteTask(index) {
      this.tasks.splice(index, 1);
    },
    editTask(index) {
      this.TitalName = this.tasks[index].tital;
      this.disWords = this.tasks[index].dis;
      this.editTital = index;
      this.editdis = index;
      this.dialog = true;
      this.switchTheme;
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/virables";
@import "@/scss/mixin";
.ShowRoomNote {
  width: 100%;
  font-family: $fontfamliy !important;
  min-height: 100vh;
  .btn {
    font-family: $fontfamliy !important;
    font-size: 18px;
    letter-spacing: 0px;
  }
}
.tital-input {
  width: 70%;
  padding: 10px;
  box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%),
    0 1px 5px 0 rgb(0 0 0 / 12%);
  border-radius: 3px;
  letter-spacing: 0px;
  @media (max-width: 600px) {
    width: 100%;
  }
}

.tital-input:focus-visible {
  outline: none;
}
.tital-textarea {
  width: 100%;
  height: 200px;
  padding: 10px;
  box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%),
    0 1px 5px 0 rgb(0 0 0 / 12%);
  border-radius: 3px;
  letter-spacing: 0px;
  font-family: $fontfamliy !important;
}
.tital-textarea:focus-visible {
  outline: none;
}
.v-card__title.title {
  font-family: $fontfamliy !important;
  letter-spacing: 0px;
}
.btn-close {
  font-family: $fontfamliy !important;
  letter-spacing: 0px;
  font-size: 19px !important;
}
::v-deep .v-dialog.v-dialog--active.v-dialog--persistent {
  margin: 5px;
}
.btn-note-color {
  width: 18px !important;
  height: 18px !important;
  margin: 0 2px !important;
}
.text {
  font-family: $fontfamliy !important;
  letter-spacing: 0px;
  font-size: 18px;
  line-height: 1.8;
}
// Note Colors
.Pink {
  background-color: #ec407a !important;
  .text {
    color: rgb(255, 255, 255) !important;
  }
}
.Green {
  background-color: #66bb6a !important;
  .text {
    color: rgb(255, 255, 255) !important;
  }
}
.Blue {
  background-color: #42a5f5 !important;
  .text {
    color: rgb(255, 255, 255) !important;
  }
}
.Yellow {
  background-color: #ffb300 !important;
  .text {
    color: rgb(255, 255, 255) !important;
  }
}
.White {
  background-color: #ffffff !important;
  .text {
    color: #000 !important;
  }
}
</style>
