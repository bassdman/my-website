<template>
  <div>
    <Sidebar></Sidebar>
    <div
      class="background"
      v-bind:class="{ flickerColor: $store.state.light.on }"
      v-bind:style="{ background: $store.state.background.bgcolor }"
    ></div>
    <div v-if="!$store.state.light.on">
      <div v-for="star in stars" v-bind:key="star.id" :data-id="star.id" v-bind:style="{left: star.left, top: star.top,width:star.height,height:star.height,opacity:star.opacity}" class="star"></div>
    </div>
    <Lightbulb
      class="lightbulbLayout"
      v-bind:on="$store.state.light.on"
    ></Lightbulb>
    <nuxt v-bind:style="{ visibility: visibility }" />
    <CookieLayer></CookieLayer>
  </div>
</template>

<style>
@font-face {
  font-family: Admiration Pains;
  src: url("~assets/Admiration-pains.ttf");
}

@font-face {
  font-family: Brushed;
  src: url("~assets/Brushed.ttf");
}

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
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.star{
  position: fixed;
  background: white;
  border-radius: 10px;
  z-index:-1;
}

.lightbulbLayout {
  position: fixed;
  top: -70px;
  right: 300px;
  z-index: -1;
}
body {
  margin: 0px;
}
.background {
  min-height: 100vh;
  top: 0px;
  right: 0px;
  filter: grayscale(1) brightness(0);
  background-size: cover;
  left: 0px;
  position: fixed;
  z-index: -1;
}

.flickerColor {
  animation: flickerColor 4s;
  filter: grayscale(0.5);
}

.visibilityHidden {
  visibility: hidden;
}
@keyframes flickerColor {
  0% {
    filter: grayscale(0.5);
  }
  2% {
    filter: grayscale(1) brightness(0);
  }
  4% {
    filter: grayscale(0.5);
  }
  6% {
    filter: grayscale(1) brightness(0);
  }
  8% {
    filter: grayscale(1) brightness(0);
  }
  9% {
    filter: grayscale(0.5);
  }
  10% {
    filter: grayscale(1) brightness(0);
  }
  20% {
    filter: grayscale(1) brightness(0);
  }
  30% {
    filter: grayscale(0.5);
  }
  40% {
    filter: grayscale(1) brightness(0);
  }
  50% {
    filter: grayscale(0.5);
  }
  60% {
    filter: grayscale(1) brightness(0);
  }
  70% {
    filter: grayscale(1) brightness(0);
  }
  80% {
    filter: grayscale(1) brightness(0);
  }
  90% {
    filter: grayscale(1) brightness(0);
  }
  100% {
    filter: grayscale(0.5);
  }
}

.bsoffn {
  animation-name: bsoffn;
  animation-duration: 10s;
}
@keyframes bsoffn {
  0% {
    transform: scale(1);
  }
  10% {
    transform: scale(1.5);
  }
  20% {
    transform: scale(4);
    margin-top: 100px;
  }
  30% {
    transform: scale(2);
    margin-top: -150px;
  }
  40% {
    transform: scale(0.3);
    margin-top: -200px;
  }
  50% {
    transform: scale(0.1);
  }
  60% {
    transform: scale(1);
  }
  70% {
    transform: scale(3);
  }
  80% {
    transform: scale(2);
  }
  90% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(3);
  }
}
</style>

<script>
import Lightbulb from "@/components/atoms/Lightbulb.vue";
import CookieLayer from "@/components/atoms/CookieLayer.vue";
import Sidebar from "@/components/molecules/Sidebar.vue";

export default {
  components: {
    Lightbulb,
    CookieLayer,
    Sidebar,
  },
  data() {
    return {
      visibility: "hidden",
    };
  },
  mounted() {
    this.visibility = "visible";
  },
  computed: {
    stars() {
      if(typeof window == 'undefined')
        return;

      const amountOfStars = 700;
      let stars = [];
      for (let i = 0; i < amountOfStars; i++) {
        stars.push({
          id: i,
          left: Math.random() * (window.innerWidth - 20)+'px',
          top: Math.random() * window.screen.height +'px',
          height: Math.random()*6 +'px',
          opacity: Math.random()
        });
      }
      return stars;
    },
  },
};
</script>