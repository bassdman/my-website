<template>
  <div class="home">      
    <div class="content" id="content">
      <div
        class="name pretext totalWidth alignCenter"
        v-bind:style="{'background-color':'rgba(0,0,0,'+headerOpacity+')'}"
      >Manuel Gelsen</div>
      <div
        class="description pretext totalWidth alignCenter"
        v-bind:style="{'background-color':'rgba(0,0,0,'+headerOpacity+')'}"
      >Webdesigner, Querdenker und noch vieles mehr</div>

      <p class="hello totalWidth">Hallo,</p>
      <p class="helloText width50">
        schön, dass du da bist. Ich heiße Manuel.
        <br />Du bist auf meiner Website gelandet. Damit du dich zurechtfindest, begleite ich dich etwas.
      </p>
      <div
        class="bildich"
        v-bind:class="{flicker:$store.state.content.flicker, displayNone:!$store.state.content.flicker}"
      ></div>
      <div class="bildichUmrandung" v-bind:class="{displayNone:$store.state.content.flicker}"></div>
      
      
      <p class="lichtantext distanceTop width50">
        Moment, du siehst mich ja noch gar nicht. Entschuldigung. Hab vergessen das Licht
        <br />anzumachen. Drücke einfach auf den Schalter da rechts - das sollte helfen :)
      </p>
      <span class="lightbulb distanceTop">
        <Lichtschalter v-on:active="$store.commit('content/flicker', $event);"></Lichtschalter>
      </span>


      <div class="kaffeeblock distanceTop totalWidth">
        <nuxt-link to="/kaffee" class="kaffee">Möchtest du einen Kaffee?</nuxt-link>
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
  beforeRouteLeave(to, from, next) {
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
    this.$store.commit("background/setSrc", require("~/assets/berge.jpg"));
    this.$store.commit("header/show", false);
    this.$store.commit("header/pagename", "");
    this.$store.commit("background/figcaption", `Hintergrund: Privates Photo`);

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
    self.$store.commit("header/opacity", getHeaderOpacity());
    document.body.onscroll = function(e) {
      if (self.blockRouteEvent) return;
      self.$store.commit("header/opacity", getHeaderOpacity());
      self.$store.commit("header/show", getHeaderOpacity() > 0);
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
.distanceTop {
  margin-top: 100px;
}
p {
  line-height: 1.5em;
  color: white;
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
  color: white;
  box-shadow: 0 0 6px 9px rgba(0, 0, 0, 0.8);
  margin-top: 90vh;
  padding: 0px 1em 1em 1em;
  display: flex;
  flex-wrap: wrap;
  min-height: 100vh;
  border: 1px solid transparent; /*notwendig wg. eines bugs in chrome. ja, richtig gehört: chrome.*/
}

.pretext {
  text-align: center;
  position: sticky;
  top: 56px;
}

.name {
  margin-top: -100px;
  font-size: 48px;
  font-weight: bold;
  position: sticky;
  flex: 1 100%;
  top: 0px;
}

.description {
  font-size: 20px;
  flex: 1 100%;
  margin-top: -40px;
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

.hello {
  font-size: 40px;
  margin: 0px;
}
.helloText{
  align-self: center;
}

.home {
  max-width: 1200px;
  margin: auto;
}

.lichtan {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.lightbulb {
  margin-right: 50px;
  margin-top: 86px;
  transform: rotate(-90deg);
}
.bildich,
.bildichUmrandung {
  width: 200px;
  height: 200px;
  border-radius: 200px;
  box-shadow: inset 0 0 10px 2px black;
}
.bildich {
  background: url("~assets/ich1.jpg");
  background-size: cover;
  display: block;
}
.bildichUmrandung {
  background: black;
}

.displayNone {
  display: none;
}

.totalWidth {
  flex: 1 100%;
}
.width50 {
  flex: 1 50%;
}

.alignCenter{
  text-align:center;
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