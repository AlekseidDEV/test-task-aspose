<template>
  <div class="wrapper_filter">
    <div class="block_filter">
      <span>Status</span>
      <select v-model="filterObj.status">
        <option disabled value="">default</option>
        <option value="alive">alive</option>
        <option value="dead">dead</option>
        <option value="unknown">unknown</option>
      </select>
    </div>

    <div class="block_filter">
      <span>Name</span>
      <input type="text" placeholder="name heroes" v-model="filterObj.name">
    </div>

    <button @click="filterHeroes">применить</button>
    <button @click="resetFilter">сбросить фильтр</button>
  </div>
</template>

<script setup>
import {reactive, watch} from "vue";
import {useStore} from "vuex";

const store = useStore()
let filterObj = reactive({
  name: '',
  status: ''
})

watch(filterObj, () => {
  store.dispatch('setStatus', false)
})

const filterHeroes = () => {
  if (!filterObj.name && !filterObj.status) {
    return
  } else {
    store.dispatch('setStatus', true)
    store.dispatch('setHeroesFilter', `pages=1&name=${filterObj.name.toLowerCase()}&status=${filterObj.status}`)
  }
}

const resetFilter = () => {
  store.dispatch('setStatus', false)
  filterObj.name = ''
  filterObj.status = ''

  store.dispatch('setHeroes', "1,2,3,4,5,6")
}
</script>

<style scoped>

</style>