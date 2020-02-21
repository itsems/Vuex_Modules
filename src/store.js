import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const moduleUser = {
    state: {},
    mutations: {},
    actions: {},
    getters: {}
}

const modulePurchase = {
    state: {},
    mutations: {},
    actions: {}
}

// 在 new Vuex Store 的時候，把modules加進來
const store = new Vuex.Store({
    modules: {
        user: moduleUser,
        purchase: modulePurchase
    }
})

export default store;