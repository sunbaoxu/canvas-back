<template>
  <section class="lb-canvas-back-wrap">
    <canvas ref="cas" class="lb-canvas-box"></canvas>
  </section>
</template>

<script lang="ts">
import { Component,Provide, Vue } from 'vue-property-decorator';
@Component
export default class CanvasBack extends Vue {
  RAF :any     =null;
  canvas:any   =null ;
  warea :any   =null;
  ctx :any     = null;
  len :number  = 300;
  dots :Array<object>  =[];

  init (): void {
    this.canvas = this.$refs.cas;
    this.ctx = this.canvas.getContext("2d");
    //画布大小
    this.canvasSize();
    //粒子个数
    this.spotLengthFn();
    window.requestAnimationFrame = window.requestAnimationFrame ||  window.webkitRequestAnimationFrame ;
    window.onresize = (e)=>{
      this.canvasSize();
    }
    
    // 鼠标活动时，获取鼠标坐标
    this.mouseWarea();
    //创建粒子数据
    this.addSpotData();
    // 延迟100秒开始执行动画，如果立即执行有时位置计算会出错
    setTimeout(()=> {
      //渲染粒子位置
      this.spotPosition();
    }, 100);
  }

  //粒子个数
  spotLengthFn () {
    let w: number = document.body.clientWidth;
    let h: number = document.body.clientHeight;
    if(Math.floor(w*h/6500) <=50){
      this.len = 100
    } else if(Math.floor(w*h/6500) >=300){
      this.len = 300
    } else{
      this.len = Math.floor(w*h/6500)
    }
  }

  //创建粒子数据
  addSpotData () {
    // x，y为粒子坐标，xa, ya为粒子xy轴加速度，max为连线的最大距离
    for (let i = 0; i < this.len; i++) {
      let x = Math.random() * this.canvas.width,
          y = Math.random() * this.canvas.height,
          xa = Math.random() * 2 - 1,
          ya = Math.random() * 2 - 1;

      let obj = {
        x: x,
        y: y,
        xa: xa,
        ya: ya,
        max: 15000
      }
      this.dots.push(obj);
    }
  }

  //鼠标位置
  mouseWarea () {
    this.warea = {x: null, y: null, max: 20000};
    window.onmousemove = (e) =>{
      e = e || window.event;
      this.warea.x = e.clientX;
      this.warea.y = e.clientY;


    }
    window.onmouseout = (e)=> {
      this.warea.x = null;
      this.warea.y = null;
    }
  };

  //渲染粒子位置
  spotPosition() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    // 将鼠标坐标添加进去，产生一个用于比对距离的点数组
    let ndots = [this.warea].concat(this.dots);
    
    for(let i=0 ; i<this.dots.length;i++){
      let dot:any = this.dots[i];
      // 粒子位移
      dot.x += dot.xa;
      dot.y += dot.ya;
      // 遇到边界将加速度反向
      dot.xa *= (dot.x > this.canvas.width || dot.x < 0) ? -1 : 1;
      dot.ya *= (dot.y > this.canvas.height || dot.y < 0) ? -1 : 1;
      // 绘制点
      this.ctx.fillRect(dot.x - 0.5, dot.y - 0.5, 1, 1);
      this.ctx.fillStyle="#ffffff";
      //循环比对粒子间的距离
      this.spotLineSize(ndots,dot);
      // 将已经计算过的粒子从数组中删除
      ndots.splice(ndots.indexOf(dot), 1);
    }
    this.RAF = requestAnimationFrame(this.spotPosition);
  }

  // 循环比对粒子间的距离
  spotLineSize (ndots:Array<object>,dot:any) {
    for (let i = 0; i < ndots.length ; i++) {
      let d2:any = ndots[i];
      if (!d2 || dot === d2 || d2.x === null || d2.y === null) {
        continue
      };
      let xc  = dot.x - d2.x,
          yc  = dot.y - d2.y,
          // 两个粒子之间的距离
          dis = xc * xc + yc * yc,
          // 距离比
          ratio;
          // 如果两个粒子之间的距离小于粒子对象的max值，则在两个粒子间画线
          if (dis < d2.max) {
            // 如果是鼠标，则让粒子向鼠标的位置移动
            if (d2 === this.warea && dis > (d2.max / 2)) {
              dot.x -= xc * 0.03;
              dot.y -= yc * 0.03;
            }
            // 计算距离比
            ratio = (d2.max - dis) / d2.max;
            // 画线
            this.ctx.beginPath();
            this.ctx.lineWidth = ratio / 2;
            this.ctx.strokeStyle = 'rgba(49,90,148,' + (ratio + 0.2) + ')';
            this.ctx.moveTo(dot.x, dot.y);
            this.ctx.lineTo(d2.x, d2.y);
            this.ctx.stroke();
          }
    }
  }



  //画布大小
  canvasSize() {
    this.canvas.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    this.canvas.height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
  };
  
  mounted () {
    this.init();
  }
}
</script>
<style lang="scss" scoped>
.lb-canvas-back-wrap{
  .lb-canvas-box{
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
}
</style>

