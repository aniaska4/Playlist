<template lang="pug">
.playlist
    .container
        .mainBox           
            .violetBox
                PictureList(
                    @welcome="isSongListOpen = true"
                    v-bind="selectedSong"
                    @nextSong="nextSong"
                    @prevSong="prevSong"
                )
                transition(name="slide")
                    SongsList(
                        @welcome="isSongListOpen = true"
                        @close="isSongListOpen = false"
                        @selectSong="selectSong"
                        :is-open="isSongListOpen"
                        :songs="songs"
                        :currentSongIndex="currentSongIndex"
                    )
</template>

<script>
import PictureList from "@/components/PictureList.vue"
import SongsList from "@/components/SongsList.vue"
export default {
    name: "Playlist",

    data () {
        return {
            isSongListOpen: false,
            currentSongIndex: 0,
        }
    },

    computed: {
        songs() {
            return this.$store.state.songs;
        },

        selectedSong() {
            return this.songs[this.currentSongIndex];
        }
    },

    methods: {
        selectSong(index) {
            this.currentSongIndex = index;
        },
        // nextSong() {
        //     const nextSongIndex = this.currentSongIndex + 1;
        //     if (nextSongIndex < this.songs.lenght - 1) {
        //         this.currentSongIndex += 1;
        //     }
        //     else {
        //         this.currentSongIndex = 0;
        //     }
        // },
        // prevSong() {
        //     const prevSongIndex = this.currentSongIndex - 1;
        //     if (prevSongIndex < this.songs.lenght + 1) {
        //         this.currentSongIndex -= 1;
        //     }
        //     else {
        //         this.currentSongIndex = 0;
        //     }
        // }
    },

    beforeMount() {
        this.isLoading = true;
        this.errorMessage = '';

        this.$store.dispatch('loadSongs')
            .catch(() => {
                this.errorMessage = 'sorry, there is no songs at this moment'
            })
            .finally(() => {
                this.isLoading = false;
            });
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
        padding: 5px;   
        .violetBox {
            display: flex;
            width: 100%;
            height: 100%;
            background:
            linear-gradient(217deg, rgba(10, 0, 15, 0.8), rgba(10, 0, 15, 0) 70.71%),
            linear-gradient(127deg, rgba(226, 255, 226, 0.8), rgba(224, 224, 224, 1) 70.71%),
            linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%);            
        }
    }
}

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}



</style>

