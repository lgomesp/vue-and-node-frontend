<template>
  <v-flex sm8 offset-sm2>
    <v-card>
      <v-list-item
        v-for="(message, index) in messages"
        :key="index"
        :to="'message/' + index"
      >
        <v-list-item-content>
          <v-list-item-title v-text="message.text"></v-list-item-title>
          <v-list-item-subtitle v-text="message.user"></v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  name: "messages",
  data() {
    return {
      messages: []
    };
  },
  async created() {
    this.$store.dispatch("getMessages").then(() => {
      this.messages = this.$store.state.messages;
    });
  }
};
</script>