<template>
  <div>
    <div class="ui secondary pointing menu">
      <a class="item active">Home</a>
      <a class="item">Gallery</a>
      <a class="item">Upload</a>
      {{ isLoggedIn }}
      <div class="right menu">
        <a class="ui item" @click="login">Login</a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "AppHeader",
  methods: {
    ...mapActions(["login"])
  },
  computed: {
    ...mapGetters(["isLoggedIn"])
  }
};
</script>

<style>
</style>