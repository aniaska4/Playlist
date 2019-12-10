<template lang="pug">
    .pictureList.box
        .pictures
            .taskbarOne.task
            .taskbarTwo.task
        .buttons
            .tinySlideBar
            .buttonsField
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
        .buttonsField {
            height: 100%;
            width: 100%;
            background-color:#E7E6ED;
            border-radius: 0 0 25px 25px;

        }
    }

}

</style>
