<template>
  <div class="detaillist">
    <detail></detail>
    <send-say></send-say>
    <!-- <bottom-btn></bottom-btn> -->
  </div>
</template>
<script>
import detail from '../components/detailbar.vue'
// import bottomBtn from '../components/bottombtn.vue'
import sendSay from '../components/sendsaybar.vue'
export default {
  components: {
    detail,sendSay
  }
}
</script>
