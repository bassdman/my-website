<template>
  <div class="home">
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
          <div class="bildich" v-bind:class="{flicker:$store.state.content.flicker, displayNone:!$store.state.content.flicker}"></div>
          <div class="bildichUmrandung" v-bind:class="{displayNone:$store.state.content.flicker}"></div>
          <span class="lightbulb">
            <Lichtschalter v-on:active="$store.commit('content/flicker', $event);"></Lichtschalter>
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
  beforeRouteLeave (to, from, next) {
    this.blockRouteEvent = true;
    next();
  },
  data() {
    return {
      headerOpacity: 0,
      showPortrait: false
    };
  },
  created() {
    this.blockRouteEvent = false;
    this.$store.commit('background/setSrc', '/images/berge.jpg');
    this.$store.commit('header/show', false);
    this.$store.commit('header/pagename', '');
    this.$store.commit('background/figcaption', `Hintergrund: Privates Photo`);

    if (!process.client) return 0;

    function getHeaderOpacity() {
      if (document.getElementById("content") == null) return 0;

      const position = document
        .getElementById("content")
        .getBoundingClientRect().top;

      if (position > 100) return 0;

      if (position < 30) return 0.8;

      return (100 - position) / 100;
    }

    const self = this;
    self.$store.commit('header/opacity', getHeaderOpacity());
    document.body.onscroll = function(e) {
      if(self.blockRouteEvent) 
        return;
      self.$store.commit('header/opacity', getHeaderOpacity());
      self.$store.commit('header/show', getHeaderOpacity() > 0);
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
p {
  line-height: 1.5em;
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
  background: url(/images/berge.jpg);
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
  margin-top: -100px;
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
  font-size: 20px;
  color: white;
  font-size: 18px;
  margin-top: 15px;
}

.welcomeHeader {
  font-size: 40px;
  margin: 0px;
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
  background: url("/images/ich1.jpg");
  background-size: cover;
  display:block;
}
.bildichUmrandung{
  background: black;
}

.displayNone {
  display: none;
}

.flicker {
  animation: flickerOpacity 4s;
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

</style>