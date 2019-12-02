<template>
  <div class="home-wrap">
    <canvas-back/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import CanvasBack from '@/components/CanvasBack.vue'; 
@Component({
  components: {
    CanvasBack,
  },
})
export default class Home extends Vue {}
</script>
<style lang="scss" scoped>
.home-wrap{
  height: 100vh;
  background: url('~@/assets/312241.jpg') center no-repeat;
  background-size: cover;
}
</style>
