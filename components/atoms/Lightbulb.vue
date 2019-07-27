<template>
  <div class="object-container" id="scene">
    <svg width="200" height="300" viewBox="0 0 135.47 135.47" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(0 -161.53)">
        <path
          id="handle" class="handle"
          d="M65.046 175.63l.06 36.092-1.7.026.004 1.874c-8.65 2.828-7.467 8.257-7.71 13.555 2.938-.085 20.478-.004 19.518-.03.3-6.676-.635-11.215-7.502-13.618l-.053-1.815h-1.588l-.026-36.083z"
        />
        <path
          id="shadow"
          d="M55.838 232.43c-18.047 14.035-10.296 36.27 7.867 36.714 37.113-.724 17.751-35.128 11.748-36.609z"
          fill="none"
        />
        <path
          id="bulb"
          d="M55.7 227.17l.148 10.978c-11.192 9.41-4.31 26.928 9.115 27.744 16.197-.406 21.506-18.199 10.28-27.693l-.025-11.059z"
          v-bind:class="{bulbOn: on, bulbOff: !on}"
        />
        <g id="lights" fill="lightyellow" v-if="on" v-bind:class="{flicker:on}">
          <path
            d="M25.942 255.62l16.364-2.832c.547-.616.36-.957-.21-1.154l-16.469 2.937c-.588.944-.026.902.315 1.049zM33.774 277.75l12.952-10.533c.547-.616-.086-1.364-.729-.82l-13.062 10.409c-.682 1.13.735 1.153.84.944zM55.435 290.65l5.242-16.145c.547-.616-.086-1.364-.729-.82l-5.405 16.23c-.584 1.229.965 1.121.892.735zM81.623 290.38l-5.352-16.512c.121-.46-1.291-.863-1.254.229l5.505 16.703c.806 1.122 1.277-.227 1.1-.42zM100.41 276.57l-12.853-10.481c-.025-.63-1.804-.009-1.044.806l12.847 10.357c.67.218.907.207 1.05-.682zM89.527 252.57l15.682 2.675c.95.048.675-1.113.262-1.154l-15.997-2.622c-.877.4-.295.94.053 1.101z"
          />
        </g>
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  name: "lightbulb",
  props: ['on'],
  computed: {
    bulbcolor() {
      if (this.on) return "lightyellow";

      return "#e6e6e6";
    }
  }
};
</script>


<style scoped>
.object-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.object-container .button-container {
  bottom: 20px;
  width: 100%;
  max-width: 492px;
  z-index: 999;
  padding: 10px;
  margin-top: -10px;
}

.object-container > svg {
  width: 100%;
  max-width: 512px;
}

.handle{
    fill: goldenrod;
}
/* Scene SVG */

#scene .animate .path1 {
  stroke: brown;
  stroke-dasharray: 1;
  stroke-dashoffset: 1;
  stroke-width: 2;
  animation-name: animate;
  animation-duration: 1s;
  animation-fill-mode: forwards;
}

#scene .animate .path2 {
  stroke: brown;
  stroke-dasharray: 1;
  stroke-dashoffset: 1;
  stroke-width: 1;
  animation-name: animate;
  animation-duration: 1s;
  animation-fill-mode: both;
  animation-delay: 1s;
}

#scene .animate .path3 {
  stroke: brown;
  stroke-dasharray: 1;
  stroke-dashoffset: 1;
  stroke-width: 1;
  animation-name: animate3;
  animation-duration: 1s;
  animation-fill-mode: both;
  animation-delay: 2s;
}

#scene .animate .path5 {
  stroke: brown;
  stroke-dasharray: 1;
  stroke-dashoffset: 1;
  stroke-width: 1;
  animation-name: animate5;
  animation-duration: 1s;
  animation-fill-mode: both;
  animation-delay: 3s;
}

#scene .animate .path6 {
  stroke: white;
  stroke-dasharray: 1;
  stroke-dashoffset: 1;
  stroke-width: 1;
  animation-name: animate;
  animation-duration: 1s;
  animation-delay: 4s;
  animation-fill-mode: both;
}

.bulbOn{
    animation: flickerColor 4s;
    fill: lightyellow;
}

.bulbOff{
    fill: #e6e6e6;
}
@keyframes animate {
  to {
    stroke-dashoffset: 0;
    fill: fill;
  }
}

@keyframes animate3 {
  from {
    stroke-dashoffset: 1;
    fill: white;
  }
  to {
    stroke-dashoffset: 0;
    fill: yellow;
  }
}

@keyframes animate5 {
  from {
    stroke-dashoffset: 1;
    fill: white;
  }
  to {
    stroke-dashoffset: 0;
    fill: blue;
  }
}

.flicker{
    animation: flickerOpacity 4s;
}

@keyframes flickerOpacity {
  0% {
    opacity: 0;
  }
  2% {
    opacity: 0;
  }
  4% {
    opacity: 1;
  }
  6% {
    opacity: 0;
  }
  8% {
    opacity: 0;
  }
  9% {
    opacity: 1;
  }
  10% {
    opacity: 0;
  }
  20% {
    opacity: 0;
  }
  30% {
    opacity: 1;
  }
  40% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  60% {
    opacity: 0;
  }
  70% {
    opacity: 0;
  }
  80% {
    opacity: 0;
  }
  90% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes flickerColor {
  0% {
    fill: #e6e6e6;
  }
  2% {
    fill: #e6e6e6;
  }
  4% {
    fill: lightyellow;
  }
  6% {
    fill: #e6e6e6;
  }
  8% {
    fill: #e6e6e6;
  }
  9% {
    fill: lightyellow;
  }
  10% {
    fill: #e6e6e6;
  }
  20% {
    fill: #e6e6e6;
  }
  30% {
    fill: lightyellow;
  }
  40% {
    fill: #e6e6e6;
  }
  50% {
    fill: lightyellow;
  }
  60% {
    fill: #e6e6e6;
  }
  70% {
    fill: #e6e6e6;
  }
  80% {
    fill: #e6e6e6;
  }
  90% {
    fill: #e6e6e6;
  }
  100% {
    fill: lightyellow;
  }
}
</style>
