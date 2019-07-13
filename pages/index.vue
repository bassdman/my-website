<template>
  <div class="home">
    <div class="background"></div>
    <div class="content" id="content">
      <div class="name pretext">Manuel Gelsen</div>
      <div class="description pretext">Webdesigner, Querdenker und noch vieles mehr</div>

      <div class="welcome">
        <p class="welcomeHeader">Hallo,</p>
        <p>
          schön, dass du da bist. 
          <nuxt-link to="/kaffee">Willst du einen Kaffee?</nuxt-link>
          <br />Ich heiße Manuel. Ich begleite dich auf meiner Website und mache sonst noch viele andere Sachen.
        </p>
        <p>
          Was, erf&auml;hrst du hier:
          <router-link to="/lebenslauf" class="ueberMich">Klick mich</router-link>
        </p>
      </div>
            <div>
        <div>So bekämpfen Sie Gelsen in Haus und Garten</div>
        <div>
          Natürliche Hausmittel gegen Gelsen
          <a
            href="https://www.garten-haus.at/aktuelles/2018/07/natuerliche-hausmittel-gegen-gelsen.html"
          ></a>
        </div>
        <div>
          Hilfreich: Die besten Hausmittel gegen Gelsen und Gelsenstiche ...
          <a href="https://www.gesundheitstrends.com/a/.../was-hilft-gegen-gelsen-22387"></a>
        </div>
        <div>
          5 Tipps gegen Gelsen
          <a href="https://www.gesund.at/beauty/5-mittel-gegen-gelsen/"></a>
        </div>
        <div>
          Die besten 15 Anti-Gelsen-Tipps
          <a href="Die 15 besten Anti-Gelsen-Tipps"></a>
        </div>
        <div>
          So helfen Tomaten gegen Gelsen: Vier Anti-Gelsen-Hausmittel
          <a
            href="www.weekend.at/lifestyle/so-helfen-tomaten...gelsen...gelsen-hausmittel/2.172.769"
          ></a>
        </div>
      </div>
      <div
        class="imAufbau"
      >Diese Seite ist noch in Bearbeitung, wird aber bald in voller Bl&uuml;te erstrahlen.</div>
    </div>
    <input v-model="nr" type="number" ><span style="color:yellow;">{{nr}}</span>
  </div>
</template>

<script>
// @ is an alias to /src
//import { dataBus } from "./main";

export default {
  name: "home",
  layout: "noheader",
  data(){
    return {
      nr: 0
    }
  },
  created() {
    // const instance = dataBus;
    /*  dataBus.$on("trigger:contentPositionTop", () => {
      const positionTop = document
        .getElementById("content")
        .getBoundingClientRect().top;
      dataBus.$emit("update:contentPositionTop", positionTop);
    });

    window.document.body.onscroll = function(e) {
      dataBus.$emit("trigger:contentPositionTop");
    };*/
  },
  head() {
    return {
      title: "Webdesigner, Querdenker und noch vieles mehr",
      titleTemplate: "Manuel Gelsen | %s",
      meta: [
        {
          name: "description",
          content:
            "Die persönliche Website von Manuel Gelsen, 90706 Fürth | Webdesigner, Querdenker, Stabiler 30er und noch vieles mehr."
        },
        { name: "robots", content: "index,follow" }
      ],
      link: [{ rel: "canonical", href: "https://www.manuelgelsen.de" }]
    };
  }
};
</script>

<style scoped>
figure {
  margin: 0px;
  height: 100vh;
  overflow: hidden;
}

img {
  margin-top: -100px;
}
.imAufbau {
  padding: 5em;
  background: #ffa5009e;
  font-weight: bold;
  border-radius: 5px;
  text-align: center;
  margin: 5em;
}

.content {
  background: white;
  margin-top: 98vh;
  min-height: 100vh;
  border: 1px solid transparent; /*notwendig wg. eines bugs in chrome. ja, richtig gehört: chrome.*/
}

.background {
  background: url(../assets/berge.jpg);
  min-height: 100vh;
  top: 0px;
  right: 0px;
  left: 0px;
  position: fixed;
  z-index: -1;
}

.pretext {
  color: white;
  text-align: center;
}

.name {
  margin-top: -105px;
  font-size: 48px;
  font-weight: bold;
}

.description {
  margin-top: -5px;
  font-size: 20px;
}

.welcome {
  top: 5vh;
  left: 50px;
  font-size: 20px;
  color: white;
  font-size: 18px;
}

.welcomeHeader {
  font-size: 40px;
  margin-bottom: 0px;
}
.ueberMich {
  text-decoration: none;
  background: lightcoral;
  padding: 0.5em 1em;
  font-weight: bold;
}
</style>