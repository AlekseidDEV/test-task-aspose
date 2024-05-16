<template>
  <div class="btns">
    <button
        @click="indexPage <= 1 ? indexPage = maxCountPage : indexPage--"
        id="prev">prev
    </button>
    <p>{{ indexPage }} of {{ maxCountPage }}</p>
    <button
        @click="indexPage >= maxCountPage ? indexPage = 1 : indexPage++"
        id="next">next
    </button>
  </div>
</template>

<script setup>
import {computed, ref, watch} from "vue";
import {useStore} from "vuex";

const store = useStore()

const props = defineProps(['obj'])

const maxCountPage = computed(() => store.getters['getCount'])

let indexPage = ref(1)

watch(indexPage, () => {
  store.dispatch('setHeroesFilter', `page=${indexPage.value}&name=${props.obj.name}&status=${props.obj.status}`)
})
</script>

<style>
.btns {
  display: flex;
  gap: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
  justify-content: center;
}

.btns button {
  width: 80px;
}
</style>