<template>
  <div>
    <h3>Image list</h3>
    <img v-for="image in allImages" :key="image.id" :src="image.link" class="list__image" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "ImageList",
  computed: mapGetters(["allImages"]),
  methods: mapActions(["fetchImages"]),
  created() {
    this.fetchImages();
  }
};
</script>

<style scoped>
.list__image {
  width: 200px;
}
</style>