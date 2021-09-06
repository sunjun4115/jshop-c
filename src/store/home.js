import { reqCategoryList } from "@/api"

const state = {
    //存数据
    categoryList: []
}

const mutations = {
    //直接修改数据
    RECICE_CATEGORY(state, categoryList) {
        state.categoryList = categoryList
    }
}

const actions = {

    //与组件当中用户对接
    //一般是异步发请求
    //提交mutations

    async getCategoryList({ commit }) {
        const result = await reqCategoryList();
        if (result.code === 200) {
            console.log('vvvvvvvvvvvjjjjjjjjjjjjjjjjj')
            commit("RECICE_CATEGORY", result.data);
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