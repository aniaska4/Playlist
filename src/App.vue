<template>
  <div id="app">
    <app-filmlist></app-filmlist>
  </div>
</template>

<script>
import Playlist from "@/components/Playlist.vue"
export default {

  components: {
    'app-filmlist': Playlist
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
  border-radius: 25px;
  width: 50%;
  margin: 30px 20px 30px 20px;
}
.is-active {
  background-color: white;
  padding: 10px;
  border-radius: 5px;
}
@media screen and (max-width: 768px){ 
    .box{
      width:80%;
    }

}
</style>

