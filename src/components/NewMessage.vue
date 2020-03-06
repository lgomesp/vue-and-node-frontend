<template>
  <v-flex sm8 offset-sm2>
    <v-card>
      <v-form>
        <v-container text-right>
          <v-row>
            <v-col>
              <v-text-field v-model="messageBody" label="Message" required></v-text-field>
            </v-col>
          </v-row>
          <v-btn color="success" @click="submit">submit</v-btn>
        </v-container>
      </v-form>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  name: "new-message",
  data() {
    return {
      messageBody: ""
    }
  },
  methods: {
    async submit() {
      try {
        this.$store.dispatch("newMessage", this.messageBody).then(() => {
          this.$router.push("/");
        });
        this.messageBody = "";
      } catch (error) {
        console.error(error);
      }
    }
  }
};
</script>