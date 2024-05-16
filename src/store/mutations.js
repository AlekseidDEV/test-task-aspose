const mutations = {
    setHeroes(state, data){
        state.maxCountPage = data.info.pages
        state.character = data.results
    },

    setHeroesFilter(state, data){
        if(data.length !== 0){
            state.maxCountPage = data.info.pages
            state.character = data.results
        }else {
            state.maxCountPage = 1
            state.character = []
        }
    },

    setStatus(state, value){
        state.filterActive = value
    }
}

export default mutations