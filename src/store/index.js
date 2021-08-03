import Vue from 'vue'
import Vuex from 'vuex'

import seat from './modules/seat'
import library from './modules/library'
import user from './modules/user'
import mislaid from './modules/mislaid'
import notice from './modules/notice'

Vue.use(Vuex)

export default new Vuex.Store({

    modules: {
        seat,
        library,
        user,
        mislaid,
        notice
    }
})
