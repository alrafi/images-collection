<template>
  <div>
    <div class="ui secondary pointing menu">
      <router-link to="/" class="item active">Images Collection</router-link>
      <div class="right menu">
        <div v-if="isLoggedIn" class="horizontal">
          <router-link to="/" class="item">Gallery</router-link>
          <router-link to="/upload" class="item">Upload</router-link>
          <a class="item" @click="logout">Logout</a>
        </div>
        <a v-else class="ui item" @click="login">Login</a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "AppHeader",
  methods: {
    ...mapActions(["login", "logout"])
  },
  computed: {
    ...mapGetters(["isLoggedIn"])
  }
};
</script>

<style scoped>
.horizontal {
  display: flex;
}
</style>