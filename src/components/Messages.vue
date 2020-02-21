<template>
  <div>
    <h4 class="display-1">Messages</h4>

    <v-list-item  v-for="(message, index) in messages" :key="index" @click="true">
      <v-list-item-content>
        <v-list-item-title>{{ message }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </div>
</template>

<script>
export default {
  name: "messages",
  data() {
    return {
      messages: ["hello", "hi"]
    };
  }
};
</script>