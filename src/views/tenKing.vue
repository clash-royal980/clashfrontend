<template>
  <div class="tenking">
    <ten-king-game></ten-king-game>
    <ten-king-sj></ten-king-sj>
    <!-- <bottom-btn></bottom-btn> -->
  </div>
</template>
<script>
import tenKingGame from '../components/tenkinggame.vue'
import tenKingSj from '../components/tenkingsj.vue'
export default {
  components: {
    tenKingGame,tenKingSj
  }
}
</script>