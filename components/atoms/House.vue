<template>
  <div>
    <!-- roof -->
    <div class="wall_top_zinnen">
      <div class="wall brickzinne"></div>
      <div class="wall brickzinne"></div>
      <div class="wall brickzinne"></div>
      <div class="wall brickzinne"></div>
      <div class="wall brickzinne"></div>
      <div class="wall brickzinne"></div>
      <div class="wall brickzinne"></div>
      <div class="wall brickzinne"></div>
    </div>
    <!-- end roof -->
    <div class="wall wall_top">
      <div class="slot contentSign">
        <slot name="sign"></slot>
      </div>
      <div class="slot contentWindow1">
        <slot name="window1"></slot>
      </div>
      <div class="slot contentWindow2">
        <slot name="window2"></slot>
      </div>
      <div class="slot contentWindow3">
        <slot name="window3"></slot>
      </div>
      <div class="slot contentWindow4">
        <slot name="window4"></slot>
      </div>
      <div class="slot contentFooter1">
        <slot name="footer1"></slot>
      </div>
      <div class="slot contentFooter2">
        <slot name="footer2"></slot>
      </div>
      <div class="slot contentFooter3">
        <slot name="footer3"></slot>
      </div>
      <div class="slot contentFooter4">
        <slot name="footer4"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "house",
};
</script>


<style scoped>
.slot {
  position: absolute;
  z-index: 10;
}

.contentSign {
  margin-top: 116px;
  width: 100%;
}
.contentWindow1,.contentWindow2,.contentWindow3, .contentWindow4 {
  width: 200px;
  height: 200px;
  display:flex;
  align-items:center;
  justify-content: center;
  background: black;
  color: white;
}


.contentFooter1,
.contentFooter2,
.contentFooter3,
.contentFooter4 {
  width: 200px;
}

@media screen and (max-width: 520px) {
  .wall_top {
    height: 1500px;
  }

  .contentFooter1,
  .contentFooter2,
  .contentFooter3,
  .contentFooter4 {
    left: calc(50% - 225px);
  }

  .contentFooter1 {
    bottom: 0px;
  }

  .contentFooter2 {
    bottom: 90px;
  }

  .contentFooter3 {
    bottom: 180px;
  }

  .contentFooter4 {
    bottom: 270px;
  }

  .contentWindow1 {
    top: 450px;
    left: calc(50% - 100px);
  }

  .contentWindow2 {
    top: 700px;
    right: calc(50% - 100px);
  }
}

@media screen and (min-width: 521px) {
  .wall_top {
    height: 1400px;
  }

  .contentFooter1 {
    left: calc(25% - 100px);
  }
  .contentFooter2 {
    left: calc(25% - 100px);
  }
  .contentFooter3 {
    left: calc(75% - 100px);
  }
  .contentFooter4 {
    left: calc(75% - 100px);
  }

  .contentFooter2,
  .contentFooter3 {
    bottom: 0px;
  }
  .contentFooter1,
  .contentFooter4 {
    bottom: 150px;
  }

  .contentWindow1 {
    top: 450px;
    left: calc(25% - 100px);
  }

  .contentWindow2 {
    top: 450px;
    left: calc(75% - 100px);
  }

   .contentWindow3 {
    top: 800px;
    left: calc(25% - 100px);
  }

  .contentWindow4 {
    top: 800px;
    left: calc(75% - 100px);
  }
}

@media screen and (min-width: 1040px) {
  .contentFooter1 {
    left: calc(20% - 100px);
  }
  .contentFooter2 {
    left: calc(40% - 100px);
  }
  .contentFooter3 {
    left: calc(60% - 100px);
  }
  .contentFooter4 {
    left: calc(80% - 100px);
  }

  .contentFooter1,
  .contentFooter2,
  .contentFooter3,
  .contentFooter4 {
    bottom: 0px;
  }

  .contentWindow1 {
    top: 100px;
    left: 50px;
  }
  .contentWindow2 {
    top: 100px;
    right: 50px;
  }
}

@media screen and (min-width: 1320px) {
  .wall_top {
    height: 700px;
  }

  .contentWindow1 {
    left: 150px;
  }
  .contentWindow2 {
    right: 150px;
  }
}

.wall,
.brick {
  background-color: #777777;
  background-image: linear-gradient(335deg, #cccccc 23px, transparent 23px),
    linear-gradient(155deg, #dddddd 23px, transparent 23px),
    linear-gradient(335deg, #cccccc 23px, transparent 23px),
    linear-gradient(155deg, #dddddd 23px, transparent 23px);
  background-size: 58px 58px;
  background-position: -4px -4px, 0px 29px, 26px 25px, 30px 0px;
}

.wall_top_zinnen {
  display: flex;
  justify-content: space-between;
  width: 100%;
  min-width: 100px;
  margin-top: -80px;
  overflow: hidden;
}

.wall_top {
  width: 100%;
  position: relative;
  overflow: hidden;
  white-space: nowrap;
}

.brickzinne {
  margin-left: 20px;
  margin-right: 15px;
  height: 87px;
  width: 110px;
  min-width: 100px;
}
</style>
