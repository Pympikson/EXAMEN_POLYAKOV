<template>
  <v-card class="d-flex">
    <v-img :src="`/` + baby.type + `_img.jpg`" height="320"> </v-img>

    <v-card-text>
      <p class="display-2">{{ baby.name }}</p>
      <p class="title text-black">Цвет: {{ baby.color }}</p>
      <p class="title text-black">Вес:{{ baby.weight }}кг</p>
      <p class="title text-black">Пол: {{ baby.sex }}</p>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: ["baby"],
};
</script>
