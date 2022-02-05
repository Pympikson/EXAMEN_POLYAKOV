<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="mr-5 display-1">Vue</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer app>
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-content>
            <v-list-item-title v-text="item.title" style="font-weight: bold" />
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-list-item>
        <v-list-item-content>
          <v-list-item-title color="black--text text--lighten-2"
            >Добрейших коровок: <b>{{ stats.cows }}</b></v-list-item-title
          >
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title color="black--text text--lighten-2"
            >Милейших кроликов: <b>{{ stats.rabbits }}</b></v-list-item-title
          >
        </v-list-item-content>
      </v-list-item>

      <v-list-item>
        <v-list-item-content>
          <v-list-item-title color="black--text text--lighten-2"
            >Пушистейших овечек: <b>{{ stats.sheeps }}</b></v-list-item-title
          >
        </v-list-item-content>
      </v-list-item>
    </v-navigation-drawer>

    <v-main>
      <v-container class="pa-10">
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import axios from "axios";

export default {
  async created() {
    const res = await axios(
      "https://demo-api.vsdev.space/api/farm/left_widget"
    );
    this.stats = res.data;
  },
  data: () => ({
    stats: {},

    items: [
      {
        title: "Главная",
        to: "/",
      },
      {
        title: "Форма",
        to: "/baby",
      },
      {
        title: "О нас",
        to: "/about",
      },
    ],
  }),
};
</script>
