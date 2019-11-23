<template>
  <div>
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
    <div class="wall wall_top">&nbsp;</div>

    <div class="wall_rundung">
      <div class="wall wallElement wallElement1">
        &nbsp;
      </div>
      <div class="wall wallElement wallElement1">
        &nbsp;
      </div>
    </div>

    <div class="wall_rundung">
      <div class="wall wallElement wallElement2">
        &nbsp;
      </div>
      <div class="wall wallElement wallElement2">
        &nbsp;
      </div>
    </div>

   <div class="wall_rundung">
      <div class="wall wallElement wallElement3">
        &nbsp;
      </div>
      <div class="wall wallElement wallElement3">
        &nbsp;
      </div>
    </div>

    <div class="wall_rundung">
      <div class="wall wallElement wallElement4">
        &nbsp;
      </div>
      <div class="wall wallElement wallElement4">
        &nbsp;
      </div>
    </div>

    <div class="wall wall_left">&nbsp;</div>
    <div class="wall wall_right wall_background">&nbsp;</div>
  </div>
</template>

<script>
export default {
  name: "castle"
};
</script>


<style scoped>
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
  margin-top: -80px;
}

.wall_top {
  width: 100%;
  height: 116px;
  position: relative;
  overflow: hidden;
  white-space: nowrap;
}

.wall_rundung {
  position: absolute;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  display: flex;
  justify-content: space-between;
}

.wallElement{
    height: 58px;
}
.wallElement1{
    width: 37%;
}
.wallElement2{
    width: 32%;
    margin-top: 58px;
}
.wallElement3{
    width: 22%;
    margin-top: 116px;
}
.wallElement4{
    width: 15%;
    margin-top: 174px;
}



.brickzinne,
.brickhidden {
  margin-left: 20px;
  margin-right: 15px;
  height: 87px;
  width: 110px;
}

.bricksmall {
  width: 50px !important;
}
.bricklarge {
  width: 140px !important;
}

@media screen and (max-width: 900px) {
  .wall_left {
    display: none;
  }
  .wall_right {
    display: none;
  }
}
@media screen and (min-width: 900px) {
  .vertical_stange {
    color: brown;
    width: 10px;
    height: 200px;
    position: absolute;
  }
  .wall_left,
  .wall_right {
    margin-top: 232px;
    position: absolute;
    height: 580px;
  }
  .wall_left {
    left: 0px;
    margin-right: 2px;
    width: 165px;
    display: block;
  }
  .wall_right {
    right: 0px;
    width: 165px;
    display: block;
  }
}
</style>
