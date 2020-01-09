import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios'

Vue.use(Vuex, axios)

export default new Vuex.Store({
    state: {
        movies: []
    },

    actions: {
        loadSongs({commit}) {
            return axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=6f64609a988ed6f63200118c9fa18521&language=en-US&page=1')
                .then((response) => {
                    console.log(response.data.results);
                    const movies = Object.values(response.data.results)
                    commit('SET_SONGS', movies)
                })
        }
    },
    
    mutations: {
        SET_SONGS (state, movies) {
            state.movies = movies
        }
    }
});