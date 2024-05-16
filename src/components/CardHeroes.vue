<template>
  <article class="card_h">
    <div>
      <img :src="card.image" alt="img" class="card_img">
    </div>
    <div class="text_block">
      <div class="section">
        <h2 class="title_card">
          {{ card.name }}
        </h2>
        <span class="status">
          <span class="status_icon"
                :class="{
                  'green_round' : card.status === 'Alive',
                  'red_round' : card.status === 'Dead',
                  'grey_round': card.status === 'unknown'
                }">
          </span>
          {{ card.status }} - {{ card.species }}
        </span>
      </div>

      <div class="section location">
        <span>Last known location:</span>
        <p>{{ card.location.name }}</p>
      </div>

      <div class="section first_seen">
        <span>First seen in:</span>
        <p>{{ episode }}</p>
      </div>
    </div>
  </article>
</template>


<script setup>
import {axiosClient} from "@/axiosClient";
import {onMounted, ref} from "vue";

let episode = ref('')

const {card} = defineProps({
  card: Object
})

const getEpisod = (link) => {
  const path = link[0].split('/')
  const episodPath = `/${path[4]}/${path[5]}`

  axiosClient(`${episodPath}`).then(res => {
    episode.value = res.data.name
  })
}

onMounted(() => {
  getEpisod(card.episode)
})
</script>

<style scoped>
.green_round {
  width: 9px;
  height: 9px;
  background: rgb(85, 204, 68);
  display: flex;
  border-radius: 50px;

}

.red_round {
  width: 9px;
  height: 9px;
  background: rgb(204, 68, 68);
  display: flex;
  border-radius: 50px;

}

.grey_round {
  width: 9px;
  height: 9px;
  background: rgb(168, 168, 168);
  display: flex;
  border-radius: 50px;
}

.status {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 10px;
}
</style>