<template>
  <v-container>
    <v-layout row wrap justify-center>
      <v-flex xs12 sm5 md5 text-center>
        <v-card>
          <v-card-title>Login</v-card-title>
          <v-container>
            <v-form>
              <v-text-field v-model="userName" label="User Name" required></v-text-field>
              <v-text-field v-model="userPassword" label="Password" required></v-text-field>
              <v-row>
                <v-col cols="auto" class="mr-auto">
                  <v-btn to="/register">Register</v-btn>
                </v-col>
                <v-col cols="auto">
                  <v-btn color="success" @click="login">Login</v-btn>
                </v-col>
              </v-row>

              <v-row>
                <v-col>
                  <v-alert v-if="error" border="top" color="red lighten-2" dark>{{ error }}</v-alert>
                </v-col>
              </v-row>
            </v-form>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      userName: "",
      userPassword: "",
      error: ""
    };
  },
  methods: {
    async login() {
      this.$store
        .dispatch("login", {
          userName: this.userName,
          userPassword: this.userPassword
        })
        .then(() => {
          this.$router.push("/");
        })
        .catch(err => {
          this.error = err.response.data.message;
        });
    }
  }
};
</script>