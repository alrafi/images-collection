<template>
  <div class="dropper">
    <input type="file" @change="uploadImage" />
    <span>Drop image here!</span>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "UploadForm",
  methods: mapActions(["uploadImage"])
};
</script>

<style scoped>
.dropper {
  height: 30vh;
  border: 2px #ccc dashed;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
input {
  width: 100%;
  height: 30vh;
  position: absolute;
  opacity: 0;
}
</style>