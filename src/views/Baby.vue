<template>
  <div class="wrapper">
    <v-row>
      <v-col>
        <v-select
          v-model="type"
          :items="['cow', 'rabbit', 'sheep']"
          label="Тип животного"
          required
        ></v-select>

        <v-text-field
          class="ml-5"
          v-model="name"
          label="Имя"
          required
        ></v-text-field>
      </v-col>
      <v-col>
        <v-text-field
          class="ml-5"
          v-model="weight"
          label="Вес"
          required
        ></v-text-field>
        <v-text-field
          class="ml-5"
          v-model="color"
          label="Цвет"
          required
        ></v-text-field>
      </v-col>
      <v-col>
        <v-select
          class="ml-5"
          v-model="sex"
          :items="['Девочка', 'Мальчик']"
          label="Пол"
          required
        ></v-select>
        <v-btn class="mt-3 ml-3 success" @click="handleForm" width="100%"> Отправить </v-btn>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" v-for="animal in animals" :key="animal.id">
        <CardAnimal :baby="animal" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import axios from "axios";
import CardAnimal from "../components/CardAnimal.vue";

export default {
  components: { CardAnimal },

  data: () => ({
    type: "cow",
    name: "",
    weight: "",
    color: "",
    sex: "",
  }),

  async mounted() {
    await this.$store.dispatch("fetchAnimals");
  },

  computed: {
    animals() {
      return this.$store.state.animals;
    },
  },

  methods: {
    async handleForm() {
      try {
        const data = {
          type: this.type,
          name: this.name,
          weight: this.weight,
          color: this.color,
          sex: this.sex,
        };

        await axios.post("https://demo-api.vsdev.space/api/farm/baby", data);
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>
