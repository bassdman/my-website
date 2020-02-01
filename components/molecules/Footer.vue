<template>
  <footer>
    <sign link="/impressum" width="180">Impressum</sign>
    <sign link="/datenschutz" width="210">Datenschutz</sign>
    <sign width="200" boards="6">
      <div class="infosign">
        <div class="colorWhite" v-html="$store.state.background.figCaption"></div>
        <div>v {{version}}</div>
      </div>
    </sign>
  </footer>
</template>

<script>
import { version } from "@/package.json";
import Sign from "../../components/atoms/Sign.vue";

export default {
  name: "footerElem",
  components: {
    Sign
  },
  data() {
    return {
      version
    };
  }
};
</script>

<style>
footer {
  text-align: center;
  margin-top: 77px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-wrap: wrap;
  font-family: Brushed;
}
.colorWhite,
.colorWhite a {
  color: black;
}

.infosign {
  font-size: 14px;
  font-weight: bold;
}
</style>