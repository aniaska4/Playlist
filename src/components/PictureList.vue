<template lang="pug">
    .pictureList.box
        .pictures
            .taskbarOne.task
                .navbuttons
                    .oneBut
                        img()
                    .twoBut
                        img()
                    .treeBut
                        img()
                .burgerMenu
                    span
                    span
                    span
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
                        .play(v-show="paused" @click="play")                     
                        .pause(v-show="playing" @click="pause")
                            .one 
                            .two                          
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
        ]),
         paused() {
            return !this.playing;
        }
    },
    data() {
        return {
            playing: false,
        }
  },
    methods: {
       play() {
        this.playing = true;
    },
        pause() {
        this.playing = false;
        }

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
            display: flex;
            align-items: center;
            justify-content: center;
            .navbuttons {
                width: 70%;
                height: 30px;
            }
                   
            .burgerMenu{
                display: flex;
                flex-direction: column;
                width: 30%;
                height: 30px;
                span{
                    width: 20px;
                    height: 3px;
                    background-color: white;
                    margin: 2px;
                }
            }
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
                    margin: 5px;
                    position: relative;
                    .rectanglePrev{
                        height: 0; 
                        border-top: 11px solid transparent; 
                        border-right: 14px solid white; 
                        border-bottom: 11px solid transparent; 
                        position: absolute;
                        top: 8px;
                        left: 16px;
                    }
                    .triangle {
                        width: 4px; 
                        height: 22px; 
                        background: white; 
                        position: absolute;
                        top: 8px;
                        left: 12px;
                    }
                }
                .change{                    
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    background-color: #6A5C9C;
                    margin: 5px;
                    position: relative;
                    .play{
                        border-top: 15px solid
                        transparent;
                        border-left: 22px solid
                        white;
                        border-bottom: 15px solid
                        transparent;
                        position: absolute;
                        top: 10px;
                        left: 18px;
                    }                        
                    .pause{
                        position: relative;
                        .one{
                            width: 4px; 
                            height: 22px; 
                            background: white; 
                            position: absolute;
                            top: 15px;
                            left: 27px;
                        }
                        .two {
                            width: 4px; 
                            height: 22px; 
                            background: white; 
                            position: absolute;
                            top: 15px;
                            left: 18px;
                        }
                    }

                }
                .next {
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    background-color: #6A5C9C;
                    margin: 5px;
                    position:relative;
                    .triangleNext {
                        width: 0; 
                        height: 0; 
                        border-top: 11px solid transparent; 
                        border-left: 14px solid white; 
                        border-bottom: 11px solid transparent;
                        position: absolute;
                        top: 8px;
                        left: 10px;
                    }
                    .rectangle{
                        width: 4px; 
                        height: 22px; 
                        background: white; 
                        position: absolute;
                        top: 8px;
                        left: 23px;
                    }
                }

            }
        }
    }

}

</style>
