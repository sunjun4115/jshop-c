import { reqCategoryList, reqBannerList, reqFloorList } from "@/api"

const state = {
    //存数据
    categoryList: [],
    bannerList: [],
    floorList: []
}

const mutations = {
    //直接修改数据
    RECICE_CATEGORY(state, categoryList) {
        state.categoryList = categoryList
    },
    //直接修改数据
    RECICE_BANNERLIST(state, bannerList) {
        state.bannerList = bannerList
    },
    RECICE_FLOORLLIST(state, floorList) {
        state.floorList = floorList
    }
}

const actions = {

    //与组件当中用户对接
    //一般是异步发请求
    //提交mutations

    async getCategoryList({ commit }) {
        const result = await reqCategoryList();
        if (result.code === 200) {
            console.log('commit');
            commit("RECICE_CATEGORY", result.data);
        }
    },
    async getBannerList({ commit }) {
        const result = await reqBannerList();
        console.log(result);
        if (result.code === 200) {
            console.log('ssss');
            commit("RECICE_BANNERLIST", result.data);
        }
    },
    async getFloorList({ commit }) {
        const result = await reqFloorList()
        console.log('floorList', result);
        if (result.code === 200) {
            console.log('floorList');
            commit("RECICE_FLOORLLIST", result.data);
        }
    }


}

const getters = {
    //后面用来简化数据的操作
}

export default {
    state,
    mutations,
    actions,
    getters
}