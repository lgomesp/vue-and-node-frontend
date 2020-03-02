<template>
  <v-app>
    <v-app-bar app color="primary">
      <v-btn to="/">Messages</v-btn>
      <v-spacer />
      <v-btn to="/new-message">New Message</v-btn>
      <v-spacer />

      <v-btn to="/register" v-if="!$store.state.token">Register</v-btn>
      <v-btn to="/login" v-if="!$store.state.token">Login</v-btn>
      <v-btn v-if="$store.state.token" @click="$store.commit('logout')">Logout</v-btn>

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
  data() {
    return {
    }
  }
};
</script>
