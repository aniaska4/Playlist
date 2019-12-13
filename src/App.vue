<template>
  <div id="app">
    <app-playlist></app-playlist>
  </div>
</template>

<script>
import Playlist from "@/components/Playlist.vue"
export default {

  components: {
    'app-playlist': Playlist
  },

  name: "App"
}
</script>

<style lang="scss">
body {
  height: 100%;
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  background-color: rgb(41, 38, 38);
}

.box {
  border: 1px solid black;
  border-radius: 25px;
  width: 50%;
  margin: 30px 20px 30px 20px;
}
.is-active {
  background-color: white
}
</style>

