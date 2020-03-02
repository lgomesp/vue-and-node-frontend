<template>
  <v-flex sm8 offset-sm2>
    <v-card>
      <v-toolbar dark>
        <v-toolbar-title>Register</v-toolbar-title>
      </v-toolbar>
      <v-form>
        <v-container>
          <v-row>
            <v-col cols="12" md="4">
              <v-text-field v-model="userName" label="User Name" required></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field v-model="userPassword" label="Password" required></v-text-field>
            </v-col>
          </v-row>
        </v-container>
        <v-btn color="success" class="mr-4" @click="register">register</v-btn>
      </v-form>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  name: "new-message",
  data() {
    return {
      userName: "",
      userPassword: ""
    };
  },
  methods: {
    async register() {
      this.$store.dispatch("register", {
        userName: this.userName,
        userPassword: this.userPassword
      });
    }
  }
};
</script>