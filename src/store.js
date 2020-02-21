import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const moduleUser = {
    namespaced: true,
    state: {
        name: "emma",
        age: 18
    },
    mutations: {
        addAge(state, payload) {
            state.age = state.age + payload
        }
    },
    getters: {
        GetAge(state) {
            return state.age
        },
        GetRealAge(state, getters, rootState) {
            return rootState.age
        },
        GetNextAge(state, getters, rootState) {
            return rootState.another.NextyearAge
        }
    },
    actions: {
        sayHi() {
            console.log('Hello from moduleUser')
        }
    }
}

const moduleAnother = {
    namespaced: true,
    state: {
        NextyearAge: 21
    },
    actions: {
        sayHi() {
            console.log('Hello from moduleAnother')
        },
        addYear({ commit }) {
            console.log('action addYear in moduleAnother');
            commit('user/addAge', 2, { root: true })
        }
    }
}

const store = new Vuex.Store({
    state: {
        age: 20,
        gender: "female"
    },
    modules: {
        user: moduleUser,
        another: moduleAnother
    }
})

export default store;