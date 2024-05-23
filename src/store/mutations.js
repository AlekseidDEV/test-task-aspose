const mutations = {
    setHeroes(state, data){
        state.character.length = 0
        data.forEach((item) => state.character.push(item))
    },

    setHeroesFilter(state, data){
        state.character = []
        if(data.length !== 0){
            state.pageFilter = data.info.pages
            state.character = data.results
        } else {
            state.character.length = 0
        }
    },

    setFirstData(state, data){
        state.character.push(data)
    },

    setStatus(state, value){
        state.filterActive = value
    }
}

export default mutations