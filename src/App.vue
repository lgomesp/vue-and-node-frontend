<template>
  <v-app>
    <v-app-bar app color="primary">
      <v-btn to="/">Messages</v-btn>
      <v-spacer />
      <v-btn to="/new-message">New Message</v-btn>
      <v-spacer />
      <v-btn to="/register">Register</v-btn>
      <v-btn>Login</v-btn>
    </v-app-bar>

    <v-content>
      <br>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
};
</script>
