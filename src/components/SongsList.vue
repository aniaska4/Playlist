<template lang="pug">
    .songs.box(v-if="isOpen")
            .songs__titleBox
                .songs__arrow(@click="$emit('close')")
                    .songs__circle
                        img(src="@/../public/image/arrow.jpg")
                .songs__title
                    h3 Movielist
            .songs__lists(
                v-for="(mov, index) in movies"
                :key="mov.id"
                @click="$emit('selectSong', index)"
                :class="{ 'is-active': index === currentMovieIndex }"
            )
                .songs__one
                    .songs__artist
                        span.time {{ mov.vote_count }} |
                        span.name {{ mov.release_date }}
                    .songs__title
                        span {{ mov.title }}
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
        currentMovieIndex: {
            type: Number,
            required: true,
        },
        isOpen: {
            type: Boolean,
            required: true
        },
        movies: {
            type: Array,
            required: true
        }
    },   
}
</script>

<style lang="scss" scoped>
@import "../style/variables.scss";
.songs {
    display: flex;
    flex-direction: column;
    background-color: $backgroundBox;
    color: #372A53;
    overflow: auto;
    .songs__titleBox{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 50px;
        color: $buttonColor;
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
