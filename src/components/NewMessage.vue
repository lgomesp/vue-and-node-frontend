<template>
  <v-flex sm8 offset-sm2>
    <v-card>
      <v-toolbar dark>
        <v-toolbar-title>New Message</v-toolbar-title>
      </v-toolbar>
      <v-form>
        <v-container>
          <v-row>
            <v-col cols="12" md="4">
              <v-text-field v-model="messageBody" label="Message" required></v-text-field>
            </v-col>
          </v-row>
        </v-container>
        <v-btn color="success" class="mr-4" @click="submit">submit</v-btn>
      </v-form>
    </v-card>
  </v-flex>
</template>

<script>
import axios from "axios";

export default {
  name: "new-message",
  data() {
    return {
      messageBody: ""
    };
  },
  methods: {
    submit() {
      axios.post("http://localhost:3000/messages", {message: this.messageBody})
        console.log(this.messageBody);
    }
  }
};
</script>