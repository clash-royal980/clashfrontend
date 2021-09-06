<template>
  <div class="index">
    <carouse></carouse>
    <game-new-list></game-new-list>
    <bottom-btn></bottom-btn>
  </div>
</template>

<script>
import carouse from '../components/carouse.vue'
import bottomBtn from '../components/bottombtn.vue'
import gameNewList from '../components/gameNewAll.vue'

export default {
  components: {
    carouse,bottomBtn,gameNewList
  }
}
</script>
