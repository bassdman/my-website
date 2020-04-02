<template>
  <div class="sidebar">
    <div class="nail nail1"></div>
    <div class="nail nail2"></div>
    <div class="nail nail3"></div>
    <div class="nail nail4"></div>
    <div class="entryWrapper">
      <Lichtschalter class="lichtschalter" v-on:active="$store.commit('light/setOn', $event);"></Lichtschalter>
      <div class="label lichtschalterlabel">Licht</div>
      
      <svg v-on:click="allowAudioFn" v-bind:class="{active:allowAudio}" class="icon audioIcon" xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 64 64" width="512" height="512"><g id="Outline"><g><path d="M61,16a1,1,0,0,0-1,1V53H54.57a85.082,85.082,0,0,0-19.12,2.178,1.992,1.992,0,0,1-2.1-.834A22.732,22.732,0,0,1,45.211,51H57a1,1,0,0,0,1-1V43a1,1,0,0,0-2,0v6H45.211A24.728,24.728,0,0,0,33,52.212V25a1,1,0,0,0-2,0V52.211A24.724,24.724,0,0,0,18.789,49H8V13H23.4A7.605,7.605,0,0,1,31,20.605a1,1,0,1,0,2,0A7.605,7.605,0,0,1,40.6,13H56V39a1,1,0,0,0,2,0V12a1,1,0,0,0-1-1H40.6A9.613,9.613,0,0,0,32,16.332,9.613,9.613,0,0,0,23.4,11H7a1,1,0,0,0-1,1V50a1,1,0,0,0,1,1H18.789a22.732,22.732,0,0,1,11.863,3.344,2,2,0,0,1-2.1.834A85.069,85.069,0,0,0,9.43,53H4V17a1,1,0,0,0-2,0V54a1,1,0,0,0,1,1H9.43A83.117,83.117,0,0,1,28.1,57.127,3.98,3.98,0,0,0,32,55.859a3.978,3.978,0,0,0,3.9,1.268A83.145,83.145,0,0,1,54.57,55H61a1,1,0,0,0,1-1V17A1,1,0,0,0,61,16Z"/><path d="M28.723,19.613A9.579,9.579,0,0,0,23.4,18H12a1,1,0,0,0,0,2H23.4a7.576,7.576,0,0,1,4.218,1.277,1,1,0,1,0,1.11-1.664Z"/><path d="M52,18H40.6a9.581,9.581,0,0,0-5.328,1.613,1,1,0,0,0,1.11,1.664A7.581,7.581,0,0,1,40.6,20H52a1,1,0,0,0,0-2Z"/><path d="M28.723,24.613A9.579,9.579,0,0,0,23.4,23H12a1,1,0,0,0,0,2H23.4a7.576,7.576,0,0,1,4.218,1.277,1,1,0,1,0,1.11-1.664Z"/><path d="M52,23H40.6a9.581,9.581,0,0,0-5.328,1.613,1,1,0,0,0,1.11,1.664A7.581,7.581,0,0,1,40.6,25H52a1,1,0,0,0,0-2Z"/><path d="M28.723,29.613A9.579,9.579,0,0,0,23.4,28H12a1,1,0,0,0,0,2H23.4a7.576,7.576,0,0,1,4.218,1.277,1,1,0,1,0,1.11-1.664Z"/><path d="M52,28H40.6a9.581,9.581,0,0,0-5.328,1.613,1,1,0,0,0,1.11,1.664A7.581,7.581,0,0,1,40.6,30H52a1,1,0,0,0,0-2Z"/><path d="M28.723,34.613A9.579,9.579,0,0,0,23.4,33H12a1,1,0,0,0,0,2H23.4a7.576,7.576,0,0,1,4.218,1.277,1,1,0,1,0,1.11-1.664Z"/><path d="M52,33H40.6a9.581,9.581,0,0,0-5.328,1.613,1,1,0,0,0,1.11,1.664A7.581,7.581,0,0,1,40.6,35H52a1,1,0,0,0,0-2Z"/><path d="M28.723,39.613A9.579,9.579,0,0,0,23.4,38H12a1,1,0,0,0,0,2H23.4a7.576,7.576,0,0,1,4.218,1.277,1,1,0,1,0,1.11-1.664Z"/><path d="M52,38H40.6a9.581,9.581,0,0,0-5.328,1.613,1,1,0,0,0,1.11,1.664A7.581,7.581,0,0,1,40.6,40H52a1,1,0,0,0,0-2Z"/><path d="M23.4,43H12a1,1,0,0,0,0,2H23.4a7.576,7.576,0,0,1,4.218,1.277,1,1,0,1,0,1.11-1.664A9.579,9.579,0,0,0,23.4,43Z"/><path d="M52,43H40.6a9.581,9.581,0,0,0-5.328,1.613,1,1,0,0,0,1.11,1.664A7.581,7.581,0,0,1,40.6,45H52a1,1,0,0,0,0-2Z"/></g></g></svg>
      <div v-on:click="allowAudioFn" v-bind:class="{active:allowAudio}" class="audio">Vorlesen</div>
    </div>
    <audio id="audio1">
      <source src="welcome.mp3" type="audio/mpeg" />
    </audio>
  </div>
</template>

<script>
import Lichtschalter from "@/components/atoms/Lichtschalter.vue";

export default {
  name: "footerElem",
  components: {
    Lichtschalter
  },
   data() {
    return {
      allowAudio: false
    };
  },
  methods: {
    allowAudioFn() {
      this.allowAudio = !this.allowAudio;

      if (this.allowAudio) {
        document.getElementById("audio1").play();
      }
    }
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
  height: 210px;
  display: flex;
  justify-content: center;
  z-index: 2;
  align-items: center;
}

.lichtschalter {
  transform: rotate(-90deg);
}

.label, .audio {
  color: white;
  text-align: center;
  font-size: smaller;
}

.lichtschalterlabel {
  margin-top: 20px;
}

.entryWrapper {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
}

.nail {
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background: dimgray;
  z-index: 5;
  position: absolute;
}

.nail1,
.nail2 {
  top: 0px;
}

.nail3,
.nail4 {
  bottom: 0px;
}

.nail1,
.nail3 {
  left: 0px;
}

.nail2,
.nail4 {
  right: 0px;
}

.audio,.icon{
  cursor:pointer;
}
.audioIcon{
  margin-top: 20px;
}
.audioIcon.active{
  fill: goldenrod;
}
.audio.active{
  color: goldenrod;
}

.icon{
  height: 50px;
}
</style>