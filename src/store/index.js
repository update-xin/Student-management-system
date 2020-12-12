import Vue from 'vue'
import Vuex from 'vuex'
import api from '../api'
// console.log(api)
Vue.use(Vuex)

export default new Vuex.Store({
    strict: true,
    state: {
        showModal: false,
        activeStu: {},
        count: 1,
        size: 10,
        list: [],
        nowPage: 1,
        totalPage: 1,
        searchValue: ''
    },
    mutations: {
        setModal(state, flag) {
            state.showModal = flag;
        },
        setActiveStu(state, stu) {
            state.activeStu = stu;
        },
        changeActive(state, obj) {
            Object.assign(state.activeStu, obj)
        },
        setList(state, res) {
            state.list = res
        },
        setNowPage(state, p) {
            state.nowPage = p
        },
        setTotalPage(state, count) {
            state.totalPage = Math.ceil(count / state.size);
            state.count = count;
        },
        setSearchValue(state, val) {
            state.searchValue = val;
        }

    },
    actions: {
        async findByPage({ state, commit }, page) {
            const { cont, findByPage } = await api.findByPage(page, state.size)
            // state.list = result.findByPage
            commit('setList', findByPage)
            commit('setNowPage', page)
            commit('setTotalPage', cont)

        },
        async delStu({ dispatch, state }, sNo) {
            await api.delStu(sNo);
            let page = Math.ceil((state.count - 1) / state.size)
            if (state.searchValue) {
                dispatch('searchStu', page)
            } else {
                dispatch('findByPage', page)
            }
        },
        async searchStu({ commit, state }, page) {
            const { cont, searchList } = await api.searchStu({
                search: state.searchValue,
                page,
                size: state.size
            });
            commit('setTotalPage', cont);
            commit('setNowPage', page);
            commit('setList', searchList)
        }
    },
    modules: {
    }
})
