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

  <div v-if="!getStatus">
    <BtnPagination/>
  </div>
  <div v-else>
    <BtnPaginationFilter
        :obj="filterObj"
    />
  </div>
</template>

<script setup>
import {computed, reactive} from "vue";
import {useStore} from "vuex";
import BtnPagination from "@/components/BtnPagination.vue";
import BtnPaginationFilter from '@/components/BtnPaginationFilter.vue'

const store = useStore()
let filterObj = reactive({
  name: '',
  status: ''
})

const getStatus = computed(() => {
  return store.getters['getFilterStatus']
})

const filterHeroes = () => {
  if (!filterObj.name && !filterObj.status) {
    return
  } else {
    store.dispatch('setStatus', true)
    store.dispatch('setHeroesFilter', `name=${filterObj.name.toLowerCase()}&status=${filterObj.status}`)
  }
}

const resetFilter = () => {
  store.dispatch('setStatus', false)
  store.dispatch('setHeroes', '/?page=1')
  filterObj.name = ''
  filterObj.status = ''
}
</script>

<style scoped>

</style>