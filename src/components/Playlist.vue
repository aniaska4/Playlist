<template lang="pug">
.playlist
    .container
        .mainBox           
            .violetBox
                | {{ currentSongIndex }}
                PictureList(
                    @welcome="isSongListOpen = true"
                    v-bind="selectedSong"
                )
                SongsList(
                    @welcome="isSongListOpen = true"
                    @close="isSongListOpen = false"
                    @selectSong="selectSong"
                    :is-open="isSongListOpen"
                    :songs="songs"
                )
</template>

// Playlist
//   Playlist.vue
//   Songs
//     Songs.vue
//   Pictures

<script>
import PictureList from "@/components/PictureList.vue"
import SongsList from "@/components/SongsList.vue"
export default {
    name: "Playlist",

    data () {
        return {
            isSongListOpen: false,
            currentSongIndex: 0
        }
    },

    computed: {
        songs() {
            return this.$store.state.songs;
        },

        selectedSong() {
            return this.songs[this.currentSongIndex] || {};
        }
    },

    methods: {
        selectSong(index) {
            this.currentSongIndex = index;
        },
        nextSong() {
            const nextSongIndex = this.currentSongIndex + 1;
            if (nextSongIndex < this.songs.lenght - 1) {
                this.currentSongIndex += 1;
            }
            else {
                this.currentSongIndex = 0;
            }
        }
    },

    components: {
        PictureList,
        SongsList
    },

    beforeMount() {
        this.isLoading = true;
        this.errorMessage = '';

        this.$store.dispatch('loadSongs')
            .catch(() => {
                this.errorMessage = 'asdasd'
            })
            .finally(() => {
                this.isLoading = false;
            });
    }
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

