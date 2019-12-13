<template lang="pug">
    .songs.box(v-if="isOpen")
            .songs__titleBox
                .songs__arrow(@click="$emit('close')")
                    .songs__circle
                        img(src="@/../public/image/arrow.jpg")
                .songs__title
                    h3 Playlist
            .songs__lists(
                v-for="(song, index) in songs"
                :key="song.artist + song.title"
                @click="$emit('selectSong', index)"
                :class="{ 'is-active': index === currentSongIndex }"
            )
                .songs__one
                    .songs__artist
                        span.time {{ song.time }} |
                        span.name {{ song.artist }}
                    .songs__title
                        span {{ song.title }}
                .songs__two
                    .songs__share
                        img(src="@/../public/image/share.png")
                    .songs__hart
                        img(src="@/../public/image/like.png")
</template>
<script>
export default {
    name: "SongsList",

    props: {
        currentSongIndex: {
            type: Number,
            required: true,
        },
        isOpen: {
            type: Boolean,
            required: true
        },
        songs: {
            type: Array,
            required: true
        }
    },

    data() {
        return {
            
        }
    }    
}
</script>

<style lang="scss" scoped>
.songs {
    display: flex;
    flex-direction: column;
    background-color: #E7E6ED;
    color: #372A53;
    .songs__titleBox{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 50px;
        color: #6A5C9C;
        font-size: 600;
        .songs__arrow{
            width: 30%;
            margin-left: 20px;
            margin-top: 12px;
            .songs__circle {
                width: 30px;
                height: 30px;
                border-radius: 50%;
                background-color: #fff;
                position: relative;
                img {
                    width: 50%;
                    position: absolute;
                    top: 6px;
                    left: 6px;
                }
            } 
        }
        .songs__title {
            width: 70%;
            margin-left: 15px;
        }
    }
    .songs__lists {
        margin: 10px 15px 10px 15px;
        border-bottom: 1px solid black;
        padding-bottom: 20px;
        display: flex;
        flex-direction: row;
        .songs__one {
            display: flex;
            flex-direction: column;
            width: 80%;
            .songs__artist {
                display: flex;
                flex-direction: row;
                padding-bottom: 10px;
                font-size: 12px;
            }
            .songs__title {
                
            }
        }
        .songs__two {
            display: flex;
            flex-direction: row;
            width: 17%;
            margin-top: 15px;
            .songs__share {
                img {
                    width: 50%
                }
            }
            .songs__hart {
                img { 
                    width: 50%;
                }
            }
        }

    }
}

</style>
