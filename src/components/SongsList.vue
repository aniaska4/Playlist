<template lang="pug">
    .songsList.box 
            .titleBox
                .arrow
                    .circle
                        img(src="@/../public/image/arrow.jpg")
                .title
                    h3 Playlist
            .lists(v-for="count in songs")
                .one
                    .artist
                        span.time {{count.time}} |
                        span.name {{ count.artist}}
                    .title
                        span {{count.title}}
                .two
                    .share
                        img(src="@/../public/image/share.png")
                    .hart
                        img(src="@/../public/image/like.png")
</template>
<script>
import {mapState} from 'vuex'
export default {
    name: "SongsList",        
    computed: {
        ...mapState([
            'songs',
        ])
    }
    
}
</script>

<style lang="scss" scoped>
.songsList {
    display: flex;
    flex-direction: column;
    background-color: #E7E6ED;
    color: #372A53;
    .titleBox{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 50px;
        color: #6A5C9C;
        font-size: 600;
        .arrow{
            width: 30%;
            margin-left: 20px;
            margin-top: 12px;
            .circle {
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
        .title {
            width: 70%;
            margin-left: 15px;
        }
    }
    .lists {
        margin: 10px 15px 10px 15px;
        border-bottom: 1px solid black;
        padding-bottom: 20px;
        display: flex;
        flex-direction: row;
        .one {
            display: flex;
            flex-direction: column;
            width: 80%;
            .artist {
                display: flex;
                flex-direction: row;
                padding-bottom: 10px;
                font-size: 12px;
            }
            .title {
                
            }
        }
        .two {
            display: flex;
            flex-direction: row;
            width: 17%;
            margin-top: 15px;
            .share {
                img {
                    width: 50%
                }
            }
            .hart {
                img { 
                    width: 50%;
                }
            }
        }

    }
}

</style>
