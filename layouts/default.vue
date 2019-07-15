<template>
  <div>
    <div class="background" v-bind:class="{flickerColor: $store.state.content.flicker}" v-bind:style="{'background-image':'url('+$store.state.background.src+')'}"></div>
    <headerElem ></headerElem>
    <nuxt v-bind:style="{'visibility':visibility}"/>
    <FooterElem></FooterElem>
  </div>
</template>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

body{
  margin: 0px;
}
.background {
  min-height: 100vh;
  top: 0px;
  right: 0px;
  filter: grayscale(1);
  left: 0px;
  position: fixed;
  z-index: -1;
}

.flickerColor {
  animation: flickerColor 4s;
  filter: grayscale(0.5);
}

@keyframes flickerColor {
  0% {
    filter: grayscale(0.5);
  }
  2% {
    filter: grayscale(1);
  }
  4% {
    filter: grayscale(0.5);
  }
  6% {
    filter: grayscale(1);
  }
  8% {
    filter: grayscale(1);
  }
  9% {
    filter: grayscale(0.5);
  }
  10% {
    filter: grayscale(1);
  }
  20% {
    filter: grayscale(1);
  }
  30% {
    filter: grayscale(0.5);
  }
  40% {
    filter: grayscale(1);
  }
  50% {
    filter: grayscale(0.5);
  }
  60% {
    filter: grayscale(1);
  }
  70% {
    filter: grayscale(1);
  }
  80% {
    filter: grayscale(1);
  }
  90% {
    filter: grayscale(1);
  }
  100% {
    filter: grayscale(0.5);
  }
}
</style>

<script>
import HeaderElem from "@/components/Header.vue";
import FooterElem from "@/components/Footer.vue";

export default {
  components: {
    HeaderElem,
    FooterElem
  },
  data(){
    return {
      visibility: 'hidden'
    }
  },
  mounted(){
    this.visibility = 'visible';
  }
};
</script>