<template>
  <div>
    <h4 class="display-1">Messages</h4>

    <v-list-item v-for="(message, index) in messages" :key="index" @click="true">
      <v-list-item-content>
        <v-list-item-title>{{ message }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "messages",
  data() {
    return {
      messages: ["hello", "hi"]
    };
  },
  async created() {
    this.messages = (await axios.get("http://localhost:3000/messages")).data;
  }
};
</script>