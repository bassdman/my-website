<template>
  <div>
    <div class="wall wall_top_zinnen">
      <div class="brick brickzinne"></div>
      <div class="brick brickzinne"></div>
      <div class="brick brickzinne"></div>
      <div class="brick brickzinne"></div>
      <div class="brick brickzinne"></div>
      <div class="brick brickzinne"></div>
      <div class="brick brickzinne"></div>
      <div class="brick brickzinne"></div>
    </div>
    <div class="wall wall_top">
      <div class="brick bricksmall"></div>
      <div class="brick"></div>
      <div class="brick"></div>
      <div class="brick"></div>
      <div class="brick"></div>
      <div class="brick bricksmall"></div>
      <div class="brick"></div>
      <div class="brick"></div>
      <div class="brick"></div>
      <div class="brick"></div>
      <div class="brick"></div>
      <div class="brick bricksmall"></div>
      <div class="brick"></div>
      <div class="brick"></div>
      <div class="brick"></div>
    </div>
    <div class="wall wall_top">
      <div class="brick"></div>
      <div class="brick"></div>
      <div class="brick bricklarge"></div>
      <div class="brick"></div>
      <div class="brick"></div>
      <div class="brick bricklarge"></div>
      <div class="brick bricksmall"></div>
      <div class="brick"></div>
      <div class="brick bricklarge"></div>
      <div class="brick"></div>
      <div class="brick"></div>
      <div class="brick"></div>
      <div class="brick"></div>
    </div>

    <div class="wall wall_left">
      <div class="brick"></div>
      <div class="brick bricksmall"></div>
      <div class="brick bricksmall"></div>
      <div class="brick"></div>
      <div class="brick"></div>
      <div class="brick bricksmall"></div>
      <div class="brick bricksmall"></div>
      <div class="brick"></div>
      <div class="brick"></div>
      <div class="brick bricksmall"></div>
      <div class="brick bricksmall"></div>
      <div class="brick"></div>
      <div class="brick"></div>
      <div class="brick bricksmall"></div>
      <div class="brick bricksmall"></div>
      <div class="brick"></div>
      <div class="brick"></div>
      <div class="brick bricksmall"></div>
      <div class="brick bricksmall"></div>
      <div class="brick"></div>
      <div class="brick"></div>
      <div class="brick bricksmall"></div>
      <div class="brick bricksmall"></div>
      <div class="brick"></div>
      <div class="brick"></div>
      <div class="brick bricksmall"></div>
      <div class="brick bricksmall"></div>
      <div class="brick"></div>
      <div class="brick"></div>
      <div class="brick bricksmall"></div>
      <div class="brick bricksmall"></div>
      <div class="brick"></div>
      <div class="brick"></div>
      <div class="brick bricksmall"></div>
      <div class="brick bricksmall"></div>
      <div class="brick"></div>
      <div class="brick"></div>
      <div class="brick bricksmall"></div>
      <div class="brick bricksmall"></div>
      <div class="brick"></div>
      <div class="brick"></div>
      <div class="brick bricksmall"></div>
      <div class="brick bricksmall"></div>
      <div class="brick"></div>
      <div class="brick"></div>
      <div class="brick bricksmall"></div>
      <div class="brick bricksmall"></div>
      <div class="brick"></div>
    </div>
    <div class="wall wall_right">
      <div class="brick"></div>
      <div class="brick bricksmall"></div>
      <div class="brick bricksmall"></div>
      <div class="brick"></div>
      <div class="brick"></div>
      <div class="brick bricksmall"></div>
      <div class="brick bricksmall"></div>
      <div class="brick"></div>
      <div class="brick"></div>
      <div class="brick bricksmall"></div>
      <div class="brick bricksmall"></div>
      <div class="brick"></div>
      <div class="brick"></div>
      <div class="brick bricksmall"></div>
      <div class="brick bricksmall"></div>
      <div class="brick"></div>
      <div class="brick"></div>
      <div class="brick bricksmall"></div>
      <div class="brick bricksmall"></div>
      <div class="brick"></div>
      <div class="brick"></div>
      <div class="brick bricksmall"></div>
      <div class="brick bricksmall"></div>
      <div class="brick"></div>
      <div class="brick"></div>
      <div class="brick bricksmall"></div>
      <div class="brick bricksmall"></div>
      <div class="brick"></div>
      <div class="brick"></div>
      <div class="brick bricksmall"></div>
      <div class="brick bricksmall"></div>
      <div class="brick"></div>
      <div class="brick"></div>
      <div class="brick bricksmall"></div>
      <div class="brick bricksmall"></div>
      <div class="brick"></div>
      <div class="brick"></div>
      <div class="brick bricksmall"></div>
      <div class="brick bricksmall"></div>
      <div class="brick"></div>
      <div class="brick"></div>
      <div class="brick bricksmall"></div>
      <div class="brick bricksmall"></div>
      <div class="brick"></div>
      <div class="brick"></div>
      <div class="brick bricksmall"></div>
      <div class="brick bricksmall"></div>
      <div class="brick"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "castle"
};
</script>


<style scoped>
.wall {
  background: #777777;
  position: absolute;
}

.wall_top_zinnen {
  margin-top: -80px;
  background: none;
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
  text-align: center;
}

.wall_top {
  width: 100%;
  position: relative;
  overflow: hidden;
  white-space: nowrap;
}

.brick {
  background: #cccccc;
  width: 90px;
  height: 45px;
  border-radius: 2px;
  margin: 4px;
  display: inline-block;
  box-shadow: 0 0 19px 1px gray inset;
}

.brickzinne,
.brickhidden {
  margin-left: 20px;
  margin-right: 15px;
  height: 80px;
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
