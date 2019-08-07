<template>
  <div>
    <Sidebar></Sidebar>
    <div class="background" v-bind:class="{flickerColor: $store.state.light.on}" v-bind:style="{'background-image':'url('+$store.state.background.src+')'}"></div>
    <Lightbulb class="lightbulbLayout" v-bind:on="$store.state.light.on"></Lightbulb>
    <headerElem></headerElem>
    <nuxt v-bind:style="{'visibility':visibility}"/>
    <FooterElem></FooterElem>
    <CookieLayer></CookieLayer>
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

.lightbulbLayout{
  position: fixed;
  top:-70px;
  right:300px;
  z-index: -1;
}
body{
  margin: 0px;
}
.background {
  min-height: 100vh;
  top: 0px;
  right: 0px;
  filter: grayscale(1);
  background-size:cover;
  left: 0px;
  position: fixed;
  z-index: -1;
}

.flickerColor {
  animation: flickerColor 4s;
  filter: grayscale(0.5);
}

.visibilityHidden{
  visibility:hidden;
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

.bsoffn{
  animation-name: bsoffn;
  animation-duration: 10s;
}
@keyframes bsoffn {
  0% {transform: scale(1)}
  10% {transform: scale(1.5)}
  20% {transform: scale(4);margin-top: 100px;}
  30% {transform: scale(2); margin-top: -150px;}
  40% {transform: scale(.3);margin-top: -200px;}
  50% {transform: scale(.1)}
  60% {transform: scale(1)}
  70% {transform: scale(3)}
  80% {transform: scale(2)}
  90% {transform: scale(1.5)}
  100% {transform: scale(3)}
}
</style>

<script>
import HeaderElem from "@/components/molecules/Header.vue";
import FooterElem from "@/components/molecules/Footer.vue";
import Lightbulb from "@/components/atoms/Lightbulb.vue";
import CookieLayer from '@/components/atoms/CookieLayer.vue';
import Sidebar from '@/components/molecules/Sidebar.vue';

export default {
  components: {
    HeaderElem,
    FooterElem,
    Lightbulb,
    CookieLayer,
    Sidebar
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