<template>
  <div class="editPost">
    <v-row class="justify-center">
      <v-col cols="12" sm="10" md="8">
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
            <v-autocomplete
              solo
              :items="states"
              :filter="customFilter"
              color="white"
              item-text="name"
              label="الشركة"
            ></v-autocomplete>
            <v-autocomplete
              solo
              :items="states"
              :filter="customFilter"
              color="white"
              item-text="name"
              label="النوع"
            ></v-autocomplete>
            <v-text-field solo color="white" label="الـفئة"></v-text-field>
            <v-autocomplete
              solo
              :items="states"
              :filter="customFilter"
              color="white"
              item-text="name"
              label="موديل"
            ></v-autocomplete>
            <v-autocomplete
              solo
              :items="states"
              :filter="customFilter"
              color="white"
              item-text="name"
              label="وارد"
            ></v-autocomplete>
            <v-autocomplete
              solo
              :items="states"
              :filter="customFilter"
              color="white"
              item-text="name"
              label="المواصفات"
            ></v-autocomplete>
            <v-text-field solo color="white" label="حجم الـمحرك"></v-text-field>
            <v-text-field
              solo
              color="white"
              label="لـون الـمركبه"
            ></v-text-field>
            <v-autocomplete
              solo
              :items="states"
              :filter="customFilter"
              color="white"
              item-text="name"
              label="نـوع الـدفع"
            ></v-autocomplete>
            <v-autocomplete
              solo
              :items="states"
              :filter="customFilter"
              color="white"
              item-text="name"
              label="نوع القير"
            ></v-autocomplete>
            <v-autocomplete
              solo
              :items="states"
              :filter="customFilter"
              color="white"
              item-text="name"
              label="حـالـة الـسيارة"
            ></v-autocomplete>
            <v-text-field solo color="white" label="الـممشى"></v-text-field>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn class="btn" color="info" @click="save"> حفظ </v-btn>
          </v-card-actions>
          <v-snackbar
            color="success font-weight-bold"
            class="title"
            v-model="hasSaved"
            :timeout="2000"
            absolute
            bottom
            right
          >
            تم حفظ التعديل
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
</style>
