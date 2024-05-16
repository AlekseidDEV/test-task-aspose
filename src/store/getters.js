
const getters = {
    getHeroes(state){
        return state.character
    },

    getCount(state){
        return state.maxCountPage
    },

    getFilterStatus(state){
        return state.filterActive
    }
}

export default getters