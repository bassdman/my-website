<template>
  <footer>
    <sign width="200" stablaenge="0" boards="3">
      <div class="iconreference">Icons erstellt von 
        <a href="https://www.flaticon.com/de/autoren/those-icons" title="Those Icons">Those Icons</a>
        und <a href="https://www.flaticon.com/de/autoren/wanicon" title="wanicon">wanicon</a> 
        auf <a href="https://www.flaticon.com/de/" title="Flaticon"> www.flaticon.com</a></div>
    </sign>
    <sign link="/impressum" width="180">Impressum</sign>
    <sign link="/datenschutz" width="210">Datenschutz</sign>
    <sign width="200" boards="2" stablaenge="0">
      <div class="infosign">
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
  font-family: Exo2;
}
.colorWhite,
.colorWhite a {
  color: black;
}

.infosign {
  font-size: 14px;
  font-weight: bold;
}

.iconreference{
  max-width: 150px;
  font-size: 12px;
}

.iconreference a{
  font-weight: bold;
  color: white;
}
</style>