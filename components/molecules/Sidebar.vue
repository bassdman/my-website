<template>
  <div class="sidebar">
    <div class="nail nail1"></div>
    <div class="nail nail2"></div>
    <div class="nail nail3"></div>
    <div class="nail nail4"></div>
    <div class="entryWrapper">
      <Lichtschalter class="lichtschalter" v-on:active="$store.commit('light/setOn', $event);"></Lichtschalter>
      <div class="label lichtschalterlabel">Licht</div>
    </div>
  </div>
</template>

<script>
import Lichtschalter from "@/components/atoms/Lichtschalter.vue";

export default {
  name: "footerElem",
  components: {
    Lichtschalter
  }
};
</script>

<style scoped>
.sidebar {
  background: rgba(0, 0, 0, 0.8);
  box-shadow: 0 0 6px 9px rgba(0, 0, 0, 0.8);
  position: fixed;
  right: 0px;
  top: 300px;
  width: 100px;
  height: 150px;
  display: flex;
  justify-content: center;
  z-index: 2;
  align-items: center;
}

.lichtschalter {
  transform: rotate(-90deg);
}

.label {
  color: white;
  text-align: center;
  font-size: smaller;
}

.lichtschalterlabel {
  margin-top: 20px;
}

.entryWrapper{
  display:inline-flex;
  flex-direction: column;
  align-items: center;
}

.nail{
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background: dimgray;
  z-index:5;
  position:absolute;
}

.nail1, .nail2{
  top: 0px;
}

.nail3, .nail4{
  bottom: 0px;
}

.nail1, .nail3{
  left: 0px;
}

.nail2, .nail4{
  right: 0px;
}
</style>