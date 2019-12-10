<template>
  <div id="app">
    <Playlist />
  </div>
</template>

<script>
import Playlist from "@/components/Playlist.vue"
export default {
  components: { Playlist },
  name: "App",
  mounted(){
    this.$store.dispatch('loadSongs')
  }
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
</style>

