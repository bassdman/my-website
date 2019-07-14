<template>
  <div class="home">
    <div class="background" v-bind:class="{flickerColor:showPortrait}"></div>
    <div class="content" id="content">
      <div
        class="name pretext"
        v-bind:style="{'background-color':'rgba(0,0,0,'+headerOpacity+')'}"
      >Manuel Gelsen</div>
      <div
        class="description pretext"
        v-bind:style="{'background-color':'rgba(0,0,0,'+headerOpacity+')'}"
      >Webdesigner, Querdenker und noch vieles mehr</div>

      <div class="welcome">
        <p class="welcomeHeader">Hallo,</p>
        <p>
          schön, dass du da bist. Ich heiße Manuel.
          <br />Du bist auf meiner Website gelandet. Damit du dich zurechtfindest, begleite ich dich etwas.
        </p>
        <div class="col3">
          <span>
            Moment, du siehst mich ja noch gar nicht. Entschuldigung. Hab vergessen das Licht
            <br />anzumachen. Drücke einfach auf den Schalter da rechts - dann siehst du mich :)
          </span>
          <div class="bildich" v-bind:class="{flicker:showPortrait, displayNone:!showPortrait}"></div>
          <div class="bildichUmrandung" v-bind:class="{displayNone:showPortrait}"></div>
          <span class="lightbulb">
            <Lichtschalter v-on:active="showPortrait = $event"></Lichtschalter>
          </span>
        </div>
        <nuxt-link to="/kaffee" class="kaffee">Möchtest du einen Kaffee?</nuxt-link>
      </div>
      <div v-if="false">
        <div>So bekämpfen Sie Gelsen in Haus und Garten</div>
        <div>
          Natürliche Hausmittel gegen Gelsen
          <a
            href="https://www.garten-haus.at/aktuelles/2018/07/natuerliche-hausmittel-gegen-gelsen.html"
          ></a>
        </div>
        <div>
          Hilfreich: Die besten Hausmittel gegen Gelsen und Gelsenstiche ...
          <a
            href="https://www.gesundheitstrends.com/a/.../was-hilft-gegen-gelsen-22387"
          ></a>
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
  </div>
</template>

<script>
// @ is an alias to /src
//import { dataBus } from "./main";

import Lichtschalter from "@/components/Lichtschalter.vue";

export default {
  name: "home",
  layout: "noheader",
  components: {
    Lichtschalter
  },
  data() {
    return {
      headerOpacity: 0,
      showPortrait: false
    };
  },
  created() {
    if (!process.client) return 0;

    function getHeaderOpacity() {
      if (document.getElementById("content") == null) return 0;

      const position = document
        .getElementById("content")
        .getBoundingClientRect().top;

      if (position > 100) return 0;

      if (position < 30) return 0.9;

      return (100 - position) / 100;
    }

    const self = this;
    this.headerOpacity = getHeaderOpacity();
    document.body.onscroll = function(e) {
      self.headerOpacity = getHeaderOpacity();
    };
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

p {
  line-height: 1.5em;
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
  background: rgba(0, 0, 0, 0.8);
  box-shadow: 0 0 6px 9px rgba(0, 0, 0, 0.8);
  margin-top: 90vh;
  padding: 0px 1em 1em 1em;
  min-height: 100vh;
  border: 1px solid transparent; /*notwendig wg. eines bugs in chrome. ja, richtig gehört: chrome.*/
}

.background {
  background: url(../assets/berge.jpg);
  min-height: 100vh;
  top: 0px;
  right: 0px;
  filter: grayscale(1);
  left: 0px;
  position: fixed;
  z-index: -1;
}

.pretext {
  color: white;
  text-align: center;
  position: sticky;
  top: 56px;
}

.name {
  margin-top: -105px;
  font-size: 48px;
  font-weight: bold;
  position: sticky;
  top: 0px;
}

.description {
  font-size: 20px;
}

.kaffee {
  color: #8b4513;
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

.home {
  max-width: 1200px;
  margin: auto;
}

.col3 {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items:center;
}

.lightbulb {
  transform: rotate(-90deg);
}
.bildich,.bildichUmrandung {
  width: 200px;
  height: 200px;
  border-radius: 200px;
  box-shadow: inset 0 0 10px 2px black;
}
.bildich {
  background: url("/ich1.jpg");
  background-size: cover;
  display:block;
}

.displayNone {
  display: none;
}

.flicker {
  animation: flickerOpacity 4s;
}
.flickerColor {
  animation: flickerColor 4s;
  filter: grayscale(0.5);
}
@keyframes flickerOpacity {
  0% {
    opacity: 1;
  }
  2% {
    opacity: 0;
  }
  4% {
    opacity: 1;
  }
  6% {
    opacity: 0;
  }
  8% {
    opacity: 0;
  }
  9% {
    opacity: 1;
  }
  10% {
    opacity: 0;
  }
  20% {
    opacity: 0;
  }
  30% {
    opacity: 1;
  }
  40% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  60% {
    opacity: 0;
  }
  70% {
    opacity: 0;
  }
  80% {
    opacity: 0;
  }
  90% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes flickerColor {
  0% {
    filter: grayscale(0.5);
  }
  2% {
    filter: grayscale(1);
  }
  4% {
    filter: grayscale(0.5);
  }
  6% {
    filter: grayscale(1);
  }
  8% {
    filter: grayscale(1);
  }
  9% {
    filter: grayscale(0.5);
  }
  10% {
    filter: grayscale(1);
  }
  20% {
    filter: grayscale(1);
  }
  30% {
    filter: grayscale(0.5);
  }
  40% {
    filter: grayscale(1);
  }
  50% {
    filter: grayscale(0.5);
  }
  60% {
    filter: grayscale(1);
  }
  70% {
    filter: grayscale(1);
  }
  80% {
    filter: grayscale(1);
  }
  90% {
    filter: grayscale(1);
  }
  100% {
    filter: grayscale(0.5);
  }
}
</style>