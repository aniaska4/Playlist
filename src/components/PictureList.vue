<template lang="pug">
    .picture.box
        .picture__pictures            
            .picture__taskbarOne.task
                .picture__navbuttons
                    .navbuttons__oneBut
                        img()
                    .navbuttons__twoBut
                        img()
                    .navbuttons__treeBut
                        img()
                .picture__burgerMenu(v-on:click="$emit('welcome')")
                    span
                    span
                    span
            .picture__movie_pic
                    img(:src="'https://image.tmdb.org/t/p/w500' + poster_path")
            .picture__taskbarTwo.task
                .taskbarTwo__artist
                    span {{ artist }}
                .taskbarTwo__songTitle
                    span {{ title }}
        .picture__buttons
            .picture__tinySlideBar
            .picture__img
                img(src="@/../public/image/speaker.svg")
            .picture__button
                .picture__share
                    img(src="@/../public/image/share.png")
                .picture__buttonsField
                    button.prev(:click="$emit('prevSong')")
                        .rectanglePrev
                        .triangle            
                    .change                        
                        button.play(v-show="paused" @click="play")                     
                        button.pause(v-show="playing" @click="pause")
                            .one 
                            .two                          
                    button.next(:click="$emit('nextSong')")
                        .triangleNext 
                        .rectangle
                .picture__hart
                    img(src="@/../public/image/like.png")
                    
</template>

<script>
export default {
    name: "PictureList",    
    props: {
        title: {
            type: String,
            default: ''
        },
        artist: {
            type: String,
            default: ''
        },
        poster_path: {
            type: String,
            default: '',
        }
    },

    data() {
        return {
            playing: false,
            show: true,
        showList: true,
        }
    },

    computed: {
        songs() {
            return this.$store.state.songs;
        },
        paused() {
            return !this.playing;
        }
    },

    methods: {
        play() {
        this.playing = true;
     },
        pause() {
        this.playing = false;
     },

     someMethod() {
         this.$emit('signal')
     }
    }
    
}
</script>

<style lang="scss" scoped>
@import "../style/variables.scss";
.picture {
    display: flex;
    flex-direction: column;
    .picture__pictures {
        display: flex;
        flex-direction: column;
        justify-content: space-between;    
        height: 70%;
        background-color: #ececec;
        border-top-left-radius: 25px;
        border-top-right-radius: 25px;
        img{
            max-width: 100%;
            height: auto;
        }
        .picture__taskbarOne {            
            border-radius: 25px 25px 0 0;
            display: flex;
            align-items: center;
            justify-content: center;
            .picture__navbuttons {
                width: 70%;
                height: 30px;
            }
                   
            .picture__burgerMenu{
                display: flex;
                flex-direction: column;
                width: 30%;
                height: 32px;
                span{
                    width: 20px;
                    height: 3px;
                    background-color: rgb(141, 139, 161);
                    margin: 2px;
                }
            }
        }
        .picture__movie_pic {
            height: 80%;
            background-color: black;
            display: flex;
            justify-content: center;
            img{
                height: 100%;
            }
        }
        .picture__taskbarTwo{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            line-height: 1.5;
            .taskbarTwo__artist {  
                font-weight: 600;
                color: white;
                text-transform: uppercase;
            }
            .taskbarTwo__songTitle {
                color: white;
                font-size: 140xp
            }
        }
        .task{
            height: 60px;
            background-color: rgba(98, 100, 100, 0.37)
        }

    }
    .picture__buttons{
        height: 30%;
        display: flex;
        flex-direction: column;
        .picture__tinySlideBar {
            height: 7px;
            width: 100%;
            background-color: #fff;
            background: linear-gradient(to right,white  80%,  rgb(255, 116, 116) 50%);                       
        }
        .picture__img {
            position: relative;
            img{
                width: 25px;
                height: 25px;
                position: absolute;
                top: -13px;
                right: 60px;
                background-color: white;
                border-radius: 50%;
            }
        }
            
        .picture__button {
            display: flex;
            flex-direction: row;
            background-color:$backgroundBox;
            justify-content: center;
            align-items: center;
            height: 100%;
            border-radius: 0 0 25px 25px;
            .picture__share {
                width: 15%;
                img {
                    width: 50%
                }
            }
            .picture__hart {
                width: 15%;

                img { 
                    width: 50%;
                }
            }        
            .picture__buttonsField {
                height: 100%;
                width: 60%;
                border-radius: 0 0 25px 25px;
                display: flex;
                justify-content: space-between;
                justify-content: center;
                align-items: center;
                .prev {
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    background-color: $buttonColor;
                    margin: 5px;
                    position: relative;
                    border: none;
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
                    background-color: $buttonColor;
                    margin: 5px;
                    position: relative;
                    border-left: 6px solid #f3f3f3;
                    border-right: 6px solid  #c9c9c9;
                    border-top: 6px solid #c9c9c9;
                    border-bottom: 6px solid #f3f3f3;
                    .play{
                        border-top: 15px solid transparent;
                        border-left: 22px solid white;
                        border-bottom: 15px solid transparent;
                        position: absolute;
                        top: 9px;
                        left: 17px;
                        background-color: $buttonColor;
                        padding-left: 0;
                        padding-right: 0;
                        border-right-width: 0;
                        margin: 0;
                    }                        
                    .pause{
                        position: relative;
                        background-color: $buttonColor;
                        border: none;
                        top: 18px;
                        left: 10px;
                        width: 20px;
                        height: 25px;
                        .one{
                            width: 4px; 
                            height: 22px; 
                            background: white; 
                            position: absolute;
                            top: -8px;
                            left: 17px
                        }
                        .two {
                            width: 4px; 
                            height: 22px; 
                            background: white; 
                            position: absolute;
                            top: -8px;
                            left: 7px;
                        }
                    }

                }
                .next {
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    background-color: $buttonColor;
                    margin: 5px;
                    position:relative;
                    border: none;
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
@media screen and (max-width: 768px){ 
    .picture {
        height: 30%;
    }

}

</style>
