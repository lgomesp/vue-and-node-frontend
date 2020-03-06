<template>

<v-container>
    <v-layout row wrap justify-center>
      <v-flex xs12 sm5 md5 text-center>
        <v-card>
          <v-card-title>Register</v-card-title>
          <v-container>
            <v-form>
              <v-text-field v-model="userName" label="User Name" required></v-text-field>
              <v-text-field v-model="userPassword" label="Password" required></v-text-field>
              <v-row>
                <v-col cols="auto" class="mr-auto">
                  <v-btn to="/login">Login</v-btn>
                </v-col>
                <v-col cols="auto">
                  <v-btn color="success" to="/register" @click="register">Register</v-btn>
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
  name: "register",
  data() {
    return {
      userName: "",
      userPassword: ""
    };
  },
  methods: {
    async register() {
      this.$store
        .dispatch("register", {
          userName: this.userName,
          userPassword: this.userPassword
        })
        .then(() => {
          this.$router.push("/");
        });
    }
  }
};
</script>