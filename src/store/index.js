// 引入Vue
import Vue from 'vue'
// 引入Vuex
import Vuex from 'vuex'
// 应用Vuex插件
Vue.use(Vuex)

const actions = {
    plusOdd(context, val) {
        if (context.state.num % 2) {
            context.commit('PLUSODD', val)
        }
    },
    plusWait(context, val) {
        setTimeout(() => {
            context.commit('PLUSWAIT',val)
        }, 1000);
    }
}
const mutations = {
    plus(state, val) {
        state.num = state.num + val
    },
    minus(state, val) {
        state.num = state.num - val
    },
    PLUSODD(context, val) {
        context.num = context.num + val
    },
    PLUSWAIT(context, val) {
        context.num = context.num + val
    }
}
const state = {
    num: 0,
    a: 1,
    b: 2,
    c: 3
}
const getters = {
    enlargement(state){
        return state.num * 10;
    }
}

export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})