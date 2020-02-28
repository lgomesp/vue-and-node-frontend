<template>
  <v-app>
    <v-app-bar app color="primary">
      <v-btn>Messages</v-btn>
      <v-spacer />
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
