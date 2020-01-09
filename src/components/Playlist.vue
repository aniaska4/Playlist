<template lang="pug">
.playlist
    .container
        .mainBox           
            .violetBox
                PictureList(
                    @welcome="isMovieListOpen = true"
                    v-bind="selectedSong"
                )
                transition(name="slide")
                    SongsList(
                        @welcome="isMovieListOpen = true"
                        @close="isMovieListOpen = false"
                        @selectSong="selectSong"
                        :is-open="isMovieListOpen"
                        :movies="movies"
                        :currentMovieIndex="currentMovieIndex"
                    )
</template>

<script>
import PictureList from "@/components/PictureList.vue"
import SongsList from "@/components/SongsList.vue"
export default {
    name: "Playlist",

    data () {
        return {
            isMovieListOpen: false,
            currentMovieIndex: 0,
        }
    },

    computed: {
        movies() {
            return this.$store.state.movies;
        },

        selectedSong() {
            return this.movies[this.currentMovieIndex];
        }
    },

    methods: {
        selectSong(index) {
            this.currentMovieIndex = index;
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
            linear-gradient(217deg, rgba(10, 0, 15, 0.8), rgba(242, 242, 242, 0.11) 70.71%), 
            linear-gradient(127deg, rgba(82, 68, 147, 0.8), #5e4354 70.71%), 
            linear-gradient(336deg, rgb(90, 25, 168), rgba(0, 0, 255, 0) 70.71%);
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

