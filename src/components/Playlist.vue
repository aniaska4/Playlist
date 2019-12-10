<template lang="pug">
.playlist
    .container
        .mainBox           
            .violetBox
                PictureList
                SongsList
</template>

<script>
import PictureList from "@/components/PictureList.vue"
import SongsList from "@/components/SongsList.vue"
export default {
    name: "Playlist",
    data () {
    return {
      
        }
    },
    components: {
        PictureList,
        SongsList
    },
}
</script>

<style lang="scss">

.playlist {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .mainBox{
    width: 750px;
    height: 600px;
    display: flex;
    background-color: #ffffff;
    display: flex;
    justify-content: center;
	align-items: center;

    
        .violetBox {
            display: flex;
            width: 94%;
            height: 92%;
            background:
            linear-gradient(217deg, rgba(10, 0, 15, 0.8), rgba(10, 0, 15, 0) 70.71%),
            linear-gradient(127deg, rgba(226, 255, 226, 0.8), rgba(224, 224, 224, 1) 70.71%),
            linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%);
            
        }

    }
}



</style>

