<template>
  <div class="sidebar">
    <div class="entryWrapper">
      <Lichtschalter class="lichtschalter" v-on:active="$store.commit('light/setOn', $event);"></Lichtschalter>
      <div class="label lichtschalterlabel">Es werde Licht</div>
    </div>
  </div>
</template>

<script>
import Lichtschalter from "./lichtschalter.vue";

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
  height: 200px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}

.lichtschalter {
  transform: rotate(-90deg);
  margin-left: 20px;
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
  flex-wrap: wrap;
}
</style>