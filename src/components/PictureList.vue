<template lang="pug">
    .pictureList.box
        .pictures
            .taskbarOne.task
            .taskbarTwo.task
        .buttons
            .tinySlideBar
            .button
                .share
                    img(src="@/../public/image/share.png")
                .buttonsField
                    .prev 
                        .rectanglePrev
                        .triangle            
                    .change
                        .play
                            
                        .pause                            
                    .next
                        .triangleNext 
                        .rectangle
                .hart
                    img(src="@/../public/image/like.png")
                    
</template>

<script>
import {mapState} from 'vuex'
export default {
    name: "PictureList",    
    computed: {
        ...mapState([
            'songs',
        ])
    }
}
</script>

<style lang="scss" scoped>
.pictureList {
    display: flex;
    flex-direction: column;
    .pictures {
        display: flex;
        flex-direction: column;
        justify-content: space-between;    
        height: 70%;
        .taskbarOne {
            border-bottom: 1px solid black;            
            border-radius: 25px 25px 0 0;
        }
        .taskbarTwo{
            border-top: 1px solid black;
            border-bottom: 1px solid black;
        }
        .task{
            height: 60px;
            background-color: rgba(55, 56, 56, 0.144);
        }

    }
    .buttons{
        height: 30%;
        display: flex;
        flex-direction: column;
        .tinySlideBar {
            height: 7px;
            width: 100%;
            background-color: #fff;
        }
        .button {
            display: flex;
            flex-direction: row;
            background-color:#E7E6ED;
            justify-content: center;
            align-items: center;
            height: 100%;
            border-radius: 0 0 25px 25px;
            .share {
                width: 15%;
                img {
                    width: 50%
                }
            }
            .hart {
                width: 15%;

                img { 
                    width: 50%;
                }
            }        
            .buttonsField {
                height: 100%;
                width: 60%;
                border-radius: 0 0 25px 25px;
                display: flex;
                justify-content: space-between;
                justify-content: center;
                align-items: center;
                // padding-top: 20px;
                .prev {
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    background-color: #6A5C9C;
                    margin: 5px
                }
                .next {
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    background-color: #6A5C9C;
                    margin: 5px
                }
                .change{
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    background-color: #6A5C9C;
                    margin: 5px
                }

            }
        }
    }

}

</style>
