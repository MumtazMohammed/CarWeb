<template>
  <div class="ShowRoomInfo">
    <v-container>
      <v-col cols="12">
        <v-btn
          :to="{
            name: 'ShowRoomInfoSetting',
            params: { MySetting: 'إعداد معلوماتي' },
          }"
          dark
          icon
          small
          class="grey darken-2"
        >
          <v-icon>mdi-cog-refresh-outline</v-icon>
        </v-btn>
      </v-col>
      <v-simple-table dark class="grey darken-1" fixed-header>
        <template v-slot:default>
          <tbody>
            <tr v-for="item in desserts" :key="item.name">
              <td class="td-ti">{{ item.name }}</td>
              <td class="td-te">{{ item.Info }} {{ item.Currency }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-container>
  </div>
</template>
<script>
export default {
  name: "ShowRoomInfo",
  data() {
    return {
      desserts: [
        {
          name: "أسم المعرض",
          Info: "ويلس باك",
        },
        {
          name: "صاحب المعرض",
          Info: "وكيل",
        },
        {
          name: " المنطقة",
          Info: " حده",
        },
        {
          name: "عدد السيارات",
          Info: 25,
        },
        {
          name: "عدد زيارة المعرض",
          Info: 25,
        },
        {
          name: "السيارات الموثوقه",
          Info: 25,
        },
        {
          name: "السيارات المعززه",
          Info: 25,
        },
        {
          name: "عدد السيارات المحجوزة حتى الان",
          Info: 2,
        },
        {
          name: "عدد السيارات المباعة",
          Info: 13,
        },
        {
          name: "نوع المعرض",
          Info: "متميز",
        },
        {
          name: "تم فتح المعرض في ",
          Info: `1 / 5 / 2019`,
        },
        {
          name: "إيجار المعرض حتى",
          Info: `10 / 5 / 2020`,
        },
        {
          name: "رأس مال المعرض",
          Info: `58751,551  `,
          Currency: `ريال  `,
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/virables";
@import "@/scss/mixin";
.ShowRoomInfo {
  width: 100%;
}
.td-ti {
  font-family: $fontfamliy !important;
  font-size: 17px !important;
}
.td-te {
  font-family: $fontfamliy !important;
  font-size: 15px !important;
}
</style>
