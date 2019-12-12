import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios'

Vue.use(Vuex, axios)

export default new Vuex.Store({
    state: {
        songs: []
    },

    actions: {
        loadSongs({commit}) {
            return axios.get('http://18.185.121.3:5000/')
                .then((response) => {
                    console.log(response.data);
                    commit('SET_SONGS', response.data)
                })
        }
    },
    
    mutations: {
        SET_SONGS (state, songs) {
            state.songs = songs
        }
    }
});