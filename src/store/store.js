import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import mutations from './mutations'

import Photo from "../components/applications/Photo";
import Terminal from "../components/applications/Terminal";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        applications: [
            { name: 'Photo', component: Photo, title: 'My photo', active: true, data: null, style: {height: '300px', width: '500px', minWidth: '0px', minHeight: '0px'} },
            { name: 'Terminal', component: Terminal, title: 'Terminal', active: true, data: null, style: {minWidth: '0px', minHeight: '0px'} },
        ]
    },
    mutations,
    getters
});

export default store
