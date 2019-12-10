import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios'

Vue.use(Vuex, axios)



export default new Vuex.Store({
    state: {
        songs: []
    },
    actions: {
        loadSongs ({commit}) {
            axios
                .get('http://18.185.121.3:5000/')
                .then(data => {
                    console.log(data.data)
                    let songs = data.data
                    commit('SET_SONGS', songs)
                } )
                
                .catch(error => {
                    console.log(error)
                })
        }
    },
    mutations: {
        SET_SONGS (state, songs) {
            state.songs = songs
        }
    }
});