<template>
  <div>
    <div class="ui secondary pointing menu">
      <a class="item active">Home</a>
      <a class="item inline__block">Gallery</a>
      <a class="item inline__block">Upload</a>
      <div class="right menu">
        <a v-if="isLoggedIn" class="ui item" @click="login">Login</a>
        <a v-else class="ui item">Logout</a>
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

<style scoped>
.inline__block {
  display: inline-block;
}
</style>