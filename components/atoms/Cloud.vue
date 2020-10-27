<template>
  <div >
    <style>
      .cloud, .cloud:before, .cloud:after{
        background: {{background}};
        font-size: {{fontsize}}
      }
    </style>
    <div class="cloud cloud1" v-if="type==1" v-on:click="togglePausedMode" :class="{paused:isPaused}">
      <div class="innerText">
        <slot></slot>
      </div>
    </div>
    <div class="cloud cloud2" v-if="type==2" v-on:click="togglePausedMode" :class="{paused:isPaused}">
      <div class="innerText">
        <slot></slot>
      </div>
    </div>
    <div class="cloud cloud3" v-if="type==3" v-on:click="togglePausedMode" :class="{paused:isPaused}">
      <div class="innerText">
        <slot></slot>
      </div>
    </div>
    <div class="cloud cloud4" v-if="type==4" v-on:click="togglePausedMode" :class="{paused:isPaused}">
      <div class="innerText">
        <slot></slot>
      </div>
    </div>
    <div class="cloud cloud5" v-if="type==5" v-on:click="togglePausedMode" :class="{paused:isPaused}">
      <div class="innerText">
        <slot></slot>
      </div>
    </div>
    <div class="cloud cloud6" v-if="type==6" v-on:click="togglePausedMode" :class="{paused:isPaused}">
      <div class="innerText">
        <slot></slot>
      </div>
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
    cloudclass() {
      const classname = "cloud" + this.type;
      return {
        classname: true
      };
    },
    togglePausedMode(){
      this.isPaused = !this.isPaused;
    }
  },
  props: {
    type: {
      type: [Number,String],
      default: 1
    },
    background: {
      type: String,
      default: "white"
    },
    fontsize: {
      type: String,
      default: "normal"
    }
  }
};
</script>


<style scoped>
/*  
  *  Created on : 02.05.2018, 15:44:15 
  *  @copyright : Samet Tarim 
  *  @author    : Samet Tarim aka prod3v3loper 
  */

.cloud1,
.cloud2,
.cloud3,
.cloud4,
.cloud5,
.cloud6 {
  position: absolute;
  -webkit-border-radius: 200px;
  -moz-border-radius: 200px;
  border-radius: 200px;
  cursor: pointer;
}

.cloud:before,
.cloud:after {
  z-index: -1;
}

.cloud1,
.cloud4 {
  width: 200px;
  height: 60px;
}

.cloud1 {
  top: 80px;
  left: -230px;
  animation: cloud1 40s infinite linear;
}

@keyframes cloud1 {
  from {
    transform: translate3d(-130px, 0, 0);
  }
  to {
    transform: translate3d(calc(100vw + 200px), 0, 0);
  }
}

.cloud2 {
  top: 200px;
  left: -230px;
  animation: cloud2 20s infinite linear;
}

@keyframes cloud2 {
  from {
    transform: translate3d(-90px, 0, 0);
  }
  to {
    transform: translate3d(1900px, 0, 0);
  }
}

.cloud3 {
  top: 300px;
  right: -230px;
  animation: cloud3 60s infinite linear;
}

@keyframes cloud3 {
  from {
    transform: translate3d(210px, 0, 0);
  }
  to {
    transform: translate3d(-1900px, 0, 0);
  }
}

.cloud4 {
  top: 400px;
  left: -230px;
  animation: cloud4 80s infinite linear;
}

@keyframes cloud4 {
  from {
    transform: translate3d(-80px, 0, 0);
  }
  to {
    transform: translate3d(1900px, 0, 0);
  }
}

.cloud5 {
  top: 300px;
  left: -230px;
  animation: cloud5 100s infinite linear 1s;
}

@keyframes cloud5 {
  from {
    transform: translate3d(-80px, 0, 0);
  }
  to {
    transform: translate3d(1900px, 0, 0);
  }
}

.cloud6 {
  top: 150px;
  right: -230px;
  animation: cloud6 40s infinite linear 1s;
}

@keyframes cloud6 {
  from {
    transform: translate3d(300px, 0, 0);
  }
  to {
    transform: translate3d(-1900px, 0, 0);
  }
}

.cloud1:after,
.cloud4:after {
  content: "";
  position: absolute;
  top: -40px;
  left: 20px;
  width: 80px;
  height: 80px;

  -webkit-border-radius: 200px;
  -moz-border-radius: 200px;
  border-radius: 200px;
}

.cloud1:before,
.cloud4:before {
  content: "";
  position: absolute;
  top: -60px;
  right: 30px;
  width: 100px;
  height: 100px;

  -webkit-border-radius: 200px;
  -moz-border-radius: 200px;
  border-radius: 200px;
}

.cloud2,
.cloud5 {
  width: 100px;
  height: 30px;
}

.cloud2:after,
.cloud5:after {
  content: "";
  position: absolute;
  width: 40px;
  height: 40px;
  top: -20px;
  left: 10px;

  -webkit-border-radius: 200px;
  -moz-border-radius: 200px;
  border-radius: 200px;
}

.cloud2:before,
.cloud5:before {
  content: "";
  position: absolute;
  top: -30px;
  right: 15px;
  width: 50px;
  height: 50px;

  -webkit-border-radius: 200px;
  -moz-border-radius: 200px;
  border-radius: 200px;
}

.cloud3,
.cloud6 {
  width: 200px;
  height: 60px;

  box-shadow: 0px 0px 20px 5px #00f1ee;
  -moz-box-shadow: 0px 0px 20px 5px #00f1ee;
  -webkit-box-shadow: 0px 0px 20px 5px #00f1ee;
}

.cloud3:after,
.cloud6:after {
  content: "";
  position: absolute;
  width: 80px;
  height: 80px;
  top: -40px;
  left: 20px;

  -webkit-border-radius: 200px;
  -moz-border-radius: 200px;
  border-radius: 200px;
  box-shadow: 0px 0px 20px 5px #00f1ee;
  -moz-box-shadow: 0px 0px 20px 5px #00f1ee;
  -webkit-box-shadow: 0px 0px 20px 5px #00f1ee;
}

.cloud3:before,
.cloud6:before {
  content: "";
  position: absolute;
  width: 100px;
  height: 100px;
  top: -60px;
  right: 30px;

  -webkit-border-radius: 200px;
  -moz-border-radius: 200px;
  border-radius: 200px;
  box-shadow: 0px 0px 20px 5px #00f1ee;
  -moz-box-shadow: 0px 0px 20px 5px #00f1ee;
  -webkit-box-shadow: 0px 0px 20px 5px #00f1ee;
}

.innerText {
  margin-top: -20px;
}

.paused{
  animation-play-state: paused;
}
</style>
