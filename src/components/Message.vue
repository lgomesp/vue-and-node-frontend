<template>
  <v-flex sm8 offset-sm2>
    <v-card outlined>
      <v-list-item three-line>
        <v-list-item-content>
          <v-list-item-title class="headline mb-1">{{ messageBody }}</v-list-item-title>
          <v-list-item-subtitle>{{ messageUser }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  name: "message",
  data() {
    return {
      messageBody: "",
      messageUser: ""
    };
  },
  async created() {
    let message = await this.$store.dispatch(
      "getMessage",
      this.$route.params.id
    );
    this.messageBody = message.text;
    this.messageUser = message.user;
  }
};
</script>