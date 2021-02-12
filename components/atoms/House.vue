<template>
  <div>
    <!-- roof --> 
    <div class="roof">
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
      <div class="slot contentWindow contentWindow1">
        <slot name="window1"></slot>
      </div>
      <div class="slot contentWindow contentWindow2">
        <slot name="window2"></slot>
      </div>
      <div class="slot contentWindow contentWindow3">
        <slot name="window3"></slot>
      </div>
      <div class="slot contentWindow contentWindow4">
        <slot name="window4"></slot>
      </div>
      <div class="slot contentFooter contentFooter1">
        <slot name="footer1"></slot>
      </div>
      <div class="slot contentFooter contentFooter2">
        <slot name="footer2"></slot>
      </div>
      <div class="slot contentFooter contentFooter3">
        <slot name="footer3"></slot>
      </div>
      <div class="slot contentFooter contentFooter4">
        <slot name="footer4"></slot>
      </div>
      <div class="slot contentDoor">
        <slot name="door"></slot>
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
.contentDoor{
  width: 350px;
  height: 350px;
  background: url('~assets/tor.webp'); 
  background-size: cover;
  color: white;
  bottom: 0px;
  left: calc(50% - 175px);
}

.contentWindow1{
  background: url('~assets/fenster1.webp'); 
}
.contentWindow2{
  background: url('~assets/fenster2.webp'); 
}
.contentWindow3{
  background: url('~assets/fenster3.webp'); 
}
.contentWindow4{
  background: url('~assets/fenster4.webp'); 
}

.contentWindow {
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background-size: 200px 200px;
}



.contentFooter {
  width: 200px;
}

@media screen and (max-width: 520px) {
  .wall_top {
    height: 2050px;
  }

  .contentFooter {
    left: calc(50% - 225px);
  }

  .contentFooter1 {
    bottom: 300px;
  }

  .contentFooter2 {
    bottom: 390px;
  }

  .contentFooter3 {
    bottom: 480px;
  }

  .contentFooter4 {
    bottom: 570px;
  }

  .contentWindow1 {
    top: 450px;
    left: calc(50% - 100px);
  }

  .contentWindow2 {
    top: 700px;
    right: calc(50% - 100px);
  }
  .contentWindow3 {
    top: 950px;
    left: calc(50% - 100px);
  }

  .contentWindow4 {
    top: 1200px;
    right: calc(50% - 100px);
  }
}

@media screen and (min-width: 521px) {
  .wall_top {
    height: 1600px;
  }

  .contentWindow {
    width: 200px;
    height: 200px;
  }

  .contentFooter1,
  .contentFooter2 {
    left: calc(25% - 100px);
  }
  .contentFooter3,
  .contentFooter4 {
    left: calc(75% - 100px);
  }

  .contentFooter2,
  .contentFooter3 {
    bottom: 300px;
  }
  .contentFooter1,
  .contentFooter4 {
    bottom: 450px;
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
    top: 750px;
    left: calc(25% - 100px);
  }

  .contentWindow4 {
    top: 750px;
    left: calc(75% - 100px);
  }
}

@media screen and (min-width: 800px) {
  .wall_top {
    height: 1800px;
  }

  .contentWindow {
    width: 300px;
    background-size: 300px 300px;
    height: 300px;
  }

   .contentWindow1,
  .contentWindow3 {
    left: calc(25% - 150px);
  }
  .contentWindow2,
  .contentWindow4 {
    right: calc(25% - 150px);
  }

  .contentWindow3,
  .contentWindow4 {
    top: 850px;
  }

  .contentFooter1,
  .contentFooter2 {
    left: calc(25% - 185px);
  }
  .contentFooter3,
  .contentFooter4 {
    left: calc(75% - 60px);
  }

  .contentFooter2,
  .contentFooter3 {
    bottom: 150px;
  }
  .contentFooter1,
  .contentFooter4 {
    bottom: 0px;
  }
}

@media screen and (min-width: 1255px) {
  .wall_top {
    height: 1500px;
  }

  .contentFooter1 {
    left: calc(10% - 100px);
  }
  .contentFooter2 {
    left: calc(27% - 100px);
  }
  .contentFooter3 {
    left: calc(70% - 100px);
  }
  .contentFooter4 {
    left: calc(90% - 100px);
  }

  .contentFooter1,
  .contentFooter2,
  .contentFooter3,
  .contentFooter4,
  .contentFooter5 {
    bottom: 0px;
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

.roof {
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
