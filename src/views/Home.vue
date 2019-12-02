<template>
  <div class="home-wrap">
    <canvas-back/>
    <router-link rel="stylesheet" to="/about">sdafafaf</router-link>
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
a{
  color: red;
  position: fixed;
  top: 0;
  left: 0;
  font-size: 100px;
  z-index: 9999;
}
</style>
