<template>
  <div class="editPost">
    <v-row class="justify-center">
      <v-col cols="12">
        <v-card class="overflow-hidden">
          <v-toolbar flat color="grey darken-2">
            <v-toolbar-title class="font-weight-light title white--text">
              مـازدا مازدا3
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn
              color="red darken-3"
              fab
              dark
              small
              :value="hidden"
              @click="ShowHidden"
            >
              <!-- @click="(isEditing = false), (Ishidden = true)" -->
              <v-icon> mdi-close </v-icon>
            </v-btn>
          </v-toolbar>
          <v-card-text>
            <v-row>
              <v-col cols="12" md="6">
                <v-autocomplete
                  solo
                  :items="states"
                  :filter="customFilter"
                  color="white"
                  item-text="name"
                  label="الشركة"
                  hide-details="true"
                ></v-autocomplete>
              </v-col>
              <v-col cols="12" md="6">
                <v-autocomplete
                  solo
                  :items="states"
                  :filter="customFilter"
                  color="white"
                  item-text="name"
                  label="النوع"
                  hide-details="true"
                ></v-autocomplete>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  hide-details="true"
                  solo
                  color="white"
                  label="الـفئة"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-autocomplete
                  solo
                  :items="states"
                  :filter="customFilter"
                  color="white"
                  item-text="name"
                  label="سنة الصنع"
                  hide-details="true"
                ></v-autocomplete>
              </v-col>
              <v-col cols="12" md="6">
                <v-autocomplete
                  solo
                  :items="states"
                  :filter="customFilter"
                  color="white"
                  item-text="name"
                  label="الوارد"
                  hide-details="true"
                ></v-autocomplete>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  solo
                  color="white"
                  label="لـون الـمركبه"
                  hide-details="true"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-autocomplete
                  solo
                  :items="states"
                  :filter="customFilter"
                  color="white"
                  item-text="name"
                  label="نوع القير"
                  hide-details="true"
                ></v-autocomplete>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  solo
                  color="white"
                  label="حجم الـمحرك"
                  hide-details="true"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-autocomplete
                  solo
                  :items="states"
                  :filter="customFilter"
                  color="white"
                  item-text="name"
                  label="نـوع الـدفع"
                  hide-details="true"
                ></v-autocomplete>
              </v-col>
              <v-col cols="12" md="6">
                <v-autocomplete
                  solo
                  :items="states"
                  :filter="customFilter"
                  color="white"
                  item-text="name"
                  label="حـالـة الـسيارة"
                  hide-details="true"
                ></v-autocomplete>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  solo
                  color="white"
                  label="نوع الوقود"
                  hide-details="true"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-autocomplete
                  solo
                  :items="states"
                  :filter="customFilter"
                  color="white"
                  item-text="name"
                  label="المواصفات"
                  hide-details="true"
                ></v-autocomplete>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  hide-details="true"
                  solo
                  color="white"
                  label="الـممشى"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  solo
                  color="white"
                  label="المنطقة"
                  hide-details="true"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions class="justify-center">
            <v-btn width="200" class="btn" color="success" @click="save">
              حفظ
            </v-btn>
          </v-card-actions>
          <v-snackbar
            color="success "
            v-model="hasSaved"
            :timeout="2000"
            app
            centered
          >
            <v-card-title class="title pa-1"> تم حفظ التعديل </v-card-title>
          </v-snackbar>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  props: ["hidden"],
  data() {
    return {
      hasSaved: false,
      model: null,
      show: true,
      states: [
        { name: "Florida", abbr: "FL", id: 1 },
        { name: "Georgia", abbr: "GA", id: 2 },
        { name: "Nebraska", abbr: "NE", id: 3 },
        { name: "California", abbr: "CA", id: 4 },
        { name: "New York", abbr: "NY", id: 5 },
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
    ShowHidden(event) {
      this.show == event.target.value;
      this.$emit("ShowTheHidden", this.show);
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../scss/virables";
@import "../scss/mixin";
.editPost {
  font-family: $fontfamliy !important;
  letter-spacing: 0;
}
.btn {
  font-family: $fontfamliy !important;
  letter-spacing: 0 !important;
  font-size: 22px !important;
}
.v-card__title.title.pa-1 {
  font-family: $fontfamliy !important;
  letter-spacing: 0 !important;
  font-size: 22px !important;
}
</style>
