<template>
  <v-flex sm8 offset-sm2>
    <v-card>
      <v-toolbar dark>
        <v-toolbar-title>Messages</v-toolbar-title>
      </v-toolbar>

      <v-list-item v-for="(message, index) in store.state.messages" :key="index" @click="true">
        <v-list-item-content>
          <v-list-item-title>{{ message }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-card>
  </v-flex>
</template>

<script>
import axios from "axios";
import store from "../store.js";

export default {
  name: "messages",
  data() {
    return {
      store
    };
  },
  async created() {
    store.state.messages = (
      await axios.get("http://localhost:3000/messages")
    ).data;
  }
};
</script>