
const getters = {
    getHeroes(state){
        return state.character
    },

    getCount(state){
        return state.maxCountCard
    },

    getFilterStatus(state){
        return state.filterActive
    },

    getPageFilter(state){
       return  state.pageFilter
    }
}

export default getters