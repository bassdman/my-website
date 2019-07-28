<template>
  <div class="aligner">
    <div class="aligner-item coffee-container">
      <div class="steam-container">
        <div class="squiggle-container squiggle-container-1">
          <div class="squiggle">
            <svg
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 28.1 80.6"
              style="enable-background:new 0 0 28.1 80.6;"
              xml:space="preserve"
            >
              <path
                class
                fill="none"
                stroke-width="11"
                stroke-linecap="round"
                stroke-miterlimit="10"
                d="M22.6,75.1c-8-5.6-15.2-10.5-15.2-19.9c0-12.1,14.1-17.2,14.1-29.6c0-9.1-6.7-15.7-16-20.1"
              />
            </svg>
          </div>
          <!-- end .squiggle-->
        </div>
        <div class="squiggle-container squiggle-container-2">
          <div class="squiggle">
            <svg
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 28.1 80.6"
              style="enable-background:new 0 0 28.1 80.6;"
              xml:space="preserve"
            >
              <path
                class
                fill="none"
                stroke="#fff"
                stroke-width="11"
                stroke-linecap="round"
                stroke-miterlimit="10"
                d="M22.6,75.1c-8-5.6-15.2-10.5-15.2-19.9c0-12.1,14.1-17.2,14.1-29.6c0-9.1-6.7-15.7-16-20.1"
              />
            </svg>
          </div>
          <!-- end .squiggle-->
        </div>
        <div class="squiggle-container squiggle-container-3">
          <div class="squiggle">
            <svg
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 28.1 80.6"
              style="enable-background:new 0 0 28.1 80.6;"
              xml:space="preserve"
            >
              <path
                class
                fill="none"
                stroke="#fff"
                stroke-width="11"
                stroke-linecap="round"
                stroke-miterlimit="10"
                d="M22.6,75.1c-8-5.6-15.2-10.5-15.2-19.9c0-12.1,14.1-17.2,14.1-29.6c0-9.1-6.7-15.7-16-20.1"
              />
            </svg>
          </div>
          <!-- end .squiggle-->
        </div>
      </div>
      <div class="coffee-cup-container">
        <svg class="coffee-cup" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42.15 31">
          <defs>
            <style>
  .a {
    fill: #8b4513;
  }

  .b {
    fill: #5d5d5d;
  }
            </style>
          </defs>
          <path
            class="a"
            d="M30.06,2V23.75c0,2.63-.87,5.13-5.12,5.13H7.06A4.86,4.86,0,0,1,2,23.81V2H30.06Z"
            transform="translate(0 -0.06)"
          />
          <path
            class="b"
            d="M40.64,9.52a10.2,10.2,0,0,0-8.64-5V0.06H0V23.81a7,7,0,0,0,7.06,7.24H24.94c2.34,0,6.06-.81,6.93-5.18a10.6,10.6,0,0,0,8.89-5.29A11.29,11.29,0,0,0,40.64,9.52ZM28,23.75c0,2.07-.42,3.31-3.06,3.31H7.06A3,3,0,0,1,4,23.81V4.06H28V23.75Zm9.26-5.17A7.13,7.13,0,0,1,32,21.78V8.45a7,7,0,0,1,5.18,3.1A7.24,7.24,0,0,1,37.26,18.58Z"
            transform="translate(0 -0.06)"
          />
        </svg>
      </div>
    </div>
    <!-- end coffee-container -->
  </div>
  <!-- end aligner -->
</template>

<script>
export default {
    name: 'coffeecup'
}
</script>


<style scoped>
html {
  height: 100%;
}

body {
  background: #FFFCE8;
  height: 100%;
}

.steam-container {
  width: 60px;
  height: 50px;
  margin-left: 10px;
}

.coffee-container {
  width: 100px;
  height: 100px;
  position: relative;
}

.coffee-cup {
  width: 80px;
}

.squiggle-container {
  width: 10px;
  height: 30px;
  display: inline-block;
}

.squiggle-container-1 {
  transform: translateY(10px);
}
.squiggle-container-1 .squiggle {
  animation: move-and-fade 2.5s linear infinite;
  animation-delay: 0.2s;
  width: 10px;
}
@keyframes move-and-fade {
  0% {
    opacity: 0;
    transform: translateY(0);
  }
  50% {
    opacity: 1;
  }
  75% {
    opacity: 0;
  }
  100% {
    transform: translateY(-10px);
    opacity: 0;
  }
}

.squiggle-container-2 {
  transform: translateY(0px);
}
.squiggle-container-2 .squiggle {
  animation: move-and-fade 2.5s linear infinite;
  animation-delay: 0s;
  width: 10px;
}
@keyframes move-and-fade {
  0% {
    opacity: 0;
    transform: translateY(0);
  }
  50% {
    opacity: 1;
  }
  75% {
    opacity: 0;
  }
  100% {
    transform: translateY(-20px);
    opacity: 0;
  }
}

.squiggle-container-3 {
  transform: translateY(15px);
}
.squiggle-container-3 .squiggle {
  animation: move-and-fade 2.5s linear infinite;
  animation-delay: 0.4s;
  width: 10px;
}
@keyframes move-and-fade {
  0% {
    opacity: 0;
    transform: translateY(0);
  }
  50% {
    opacity: 1;
  }
  75% {
    opacity: 0;
  }
  100% {
    transform: translateY(-15px);
    opacity: 0;
  }
}

.squiggle {
  stroke-dasharray: 100;
}
.squiggle path {
  stroke: #5D5D5D;
}

@keyframes dash {
  0% {
    stroke-dashoffset: 1000;
  }
  50% {
    stroke-dashoffset: 500;
  }
  100% {
    stroke-dashoffset: 0;
  }
}
</style>
