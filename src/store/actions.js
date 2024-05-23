import {axiosClient} from "@/axiosClient";

export const setHeroes = ({commit}, str) => {
      axiosClient(`/character/${str}`).then(res => {
          commit('setHeroes', res.data);
      })
}

export const setHeroesFilter = ({commit},url) => {
    axiosClient(`/character/?${url}`).then(res => {
        commit('setHeroesFilter', res.data)
    }).catch(() => {
        commit('setHeroesFilter', [])
    })
}

export const setFirstData = ({commit}, data) => {
    commit('setFirstData', data)
}

export const setStatus = ({commit}, value) => {
    commit('setStatus', value)
}
