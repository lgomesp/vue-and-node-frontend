<template>
  <v-sheet
    class="overflow-hidden"
    style="height: 100vh,position: relative;"
    v-if="$store.state.token"
  >
    <div>
      <v-toolbar dark prominent src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title>{{ $route.meta.title }}</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon v-if="$store.state.token" @click="logout">
          <v-icon>mdi-export</v-icon>
        </v-btn>
      </v-toolbar>
    </div>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list-item>
        <v-list-item-icon>
          <v-icon>person</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ $store.state.user }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item v-for="item in items" :key="item.title" link :to="item.route">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-sheet>
</template>

<script>
export default {
  name: "navbar",
  data() {
    return {
      drawer: null,
      items: [
        { title: "Messages", icon: "message", route: "/" },
        { title: "New message", icon: "add_box", route: "/new-message" }
      ]
    };
  },
  methods: {
    logout: function() {
      this.$store.commit("logout");
      this.$router.push("/login");
    }
  }
};
</script>