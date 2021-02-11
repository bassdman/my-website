<template>
  <div >
    <div class="cloud" v-on:click="togglePausedMode" :class="{paused:isPaused}">
    </div>
  </div>
</template>

<script>
export default {
  name: "cloud",
  data(){
    return {
    isPaused: false
    }
  },
  methods: {
    togglePausedMode(){
      this.isPaused = !this.isPaused;
    }
  }
};
</script>


<style scoped>
.cloud {
  position: absolute;
  cursor: pointer;
  width: 300px;
  height: 300px;
  top: 0px;
  left: -230px;
  background: url(~assets/cloud.webp);
  background-size:300px 300px;
  animation: cloud 40s infinite linear;
}

@keyframes cloud {
  from {
    transform: translate3d(-130px, 0, 0);
  }
  to {
    transform: translate3d(calc(100vw + 200px), 0, 0);
  }
}

.paused{
  animation-play-state: paused;
}
</style>
