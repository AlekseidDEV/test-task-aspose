<template>
  <div class="btns">
    <button
        @click="prev">
      prev
    </button>
    <p>{{ count }}</p>
    <button
        @click="next">
      next
    </button>
  </div>
</template>

<script setup>
import {computed, ref, watch} from "vue";
import {useStore} from "vuex";

const store = useStore()
const count = ref(1)
const currentCount = ref(1);
const lastCount = computed(() => currentCount.value + 6)
const maxCountCard = computed(() => store.getters["getCount"])
const statusFilter = computed(() => store.getters['getFilterStatus'])
const pageFilter = computed(() => store.getters['getPageFilter'])
let arrIdCards = []

watch(statusFilter, () => {
  count.value = 1;
  currentCount.value = 1
})

const getFilterData = () => {
  const select = document.querySelector('select')
  const selectVal = select.options[select.selectedIndex].textContent
  const name = document.querySelector('input')

  if (count.value > pageFilter.value) {
    count.value = 1
  }

  store.dispatch('setHeroesFilter', `page=${count.value}&name=${name.value.toLowerCase()}&status=${selectVal === "default" ? '' : selectVal}`)
}

const getData = () => {
  if (!statusFilter.value) {
    for (let i = currentCount.value; i < lastCount.value; i++) {
      arrIdCards.push(i)
    }

    store.dispatch('setHeroes', arrIdCards.join(','))
  } else {
    getFilterData()
  }
}

const next = () => {
  count.value++
  currentCount.value += 6
  arrIdCards.length = 0

  if (lastCount.value - 6 > maxCountCard.value) {
    count.value = 1
    currentCount.value = 1
    arrIdCards.length = 0
  }

  getData()
}

const prev = () => {
  count.value--
  currentCount.value -= 6
  arrIdCards.length = 0

  if (count.value < 1) {
    count.value = 1
    currentCount.value = 1
  }else {
    getData()
  }
}

</script>

<style scoped>
.btns {
  display: flex;
  gap: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
  justify-content: center;
}

p {
  color: white;
}

.btns button {
  width: 80px;
}
</style>