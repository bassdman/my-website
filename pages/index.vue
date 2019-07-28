<template>
  <div class="home">
    <div class="content" id="content">
      <div class="name pretext totalWidth alignCenter">Manuel Gelsen</div>
      <div
        class="description pretext totalWidth alignCenter"
      >Webdesigner, Querdenker und noch vieles mehr</div>

      <p class="hello totalWidth">Hallo,</p>
      <p class="helloText width50">
        schön, dass du da bist. Ich heiße Manuel.
        <br />Du bist auf meiner Website gelandet. Damit du dich zurechtfindest, begleite ich dich etwas.
        <span
          v-if="!$store.state.light.on"
        >
          <br />
          <br />Moment, du siehst mich noch gar nicht. Entschuldigung. Ich habe vergessen, das Licht
          <br />anzumachen. Drücke einfach auf den Schalter auf der rechten Seite rechts - das wird helfen :)
        </span>
        <span v-if="$store.state.light.on" class="flicker">
          <br />
          <br />Gut, dass du das Licht angemacht hast. Es war so düster und unheimlich... schon fast creepy.
          <br />
          <br />
        </span>
      </p>
      <div
        class="bildich"
        v-bind:class="{flicker:$store.state.light.on}"
        v-show="$store.state.light.on"
      ></div>
      <div class="bildichUmrandung" v-show="!$store.state.light.on"></div>

      <nuxt-link to="/kaffee" class="kaffeeblock distanceTop totalWidth">
          <Coffeecup class="coffeecup"></Coffeecup>
          <div class="kaffee kaffeeHeadline">Möchtest du einen Kaffee?</div>
          <div class="kaffee kaffeetext">Nur das Beste für unsere Gäste. Es wäre schon fast traurig, wenn du unseren Kaffee nicht probieren möchtest.</div>
      </nuxt-link>
      <div class="wasWissen" v-if="false">
        Was möchtest du von mir wissen?
        - geige
        - Projekte (Podcast / Luitpoldhainfilm)
        - lebenslauf
        - Github
      </div>
      <div
        class="imAufbau"
      >Diese Seite ist noch in Bearbeitung, wird aber bald in voller Bl&uuml;te erstrahlen.</div>
    </div>
  </div>
</template>

<script>
import Coffeecup from "../components/atoms/Coffeecup.vue";

export default {
  name: "home",
  components: {
    Coffeecup
  },
  layout: "noheader",
  beforeRouteLeave(to, from, next) {
    this.blockRouteEvent = true;
    next();
  },
  data() {
    return {
      showPortrait: false
    };
  },
  created() {
    this.blockRouteEvent = false;
    this.$store.commit("background/setSrc", require("~/assets/berge.jpg"));
    this.$store.commit("background/figcaption", `Hintergrund: Privates Photo`);

    if (!process.client) return 0;

    function getContentPosition() {
      if (document.getElementById("content") == null) return 0;

      return document.getElementById("content").getBoundingClientRect().top;
    }

    const self = this;
    self.$store.commit("header/show", getContentPosition() < 0);
    document.body.onscroll = function(e) {
      if (self.blockRouteEvent) return;
      self.$store.commit("header/show", getContentPosition() < 0);
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
            "Die offizielle Website von Manuel Gelsen, 30 Jahre, aus Fürth. Moment..., die ist ja noch in Arbeit. Egal. Schau schon mal drauf. Von Tag zu Tag reift diese immer immer weiter :)"
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
  margin: 5em 0em;
  width: 100%;
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
}

.name {
  margin-top: -100px;
  font-size: 48px;
  font-weight: bold;
  flex: 1 100%;
}

.description {
  font-size: 20px;
  flex: 1 100%;
  margin-top: -40px;
}

.coffeecup {
  position: absolute;
}

.kaffeeblock{
  padding: 1em;
  text-decoration: none;
}
.kaffeeblock:hover {
  background: rgba(50, 50, 50, 0.8);
  box-shadow: 0 0 9px 4px rgb(50, 50, 50);
}
.kaffee {
  display: block;
  text-align: right;
}
.kaffeeHeadline {
  color: #8b4513;
  font-size: 30px;
  font-style: italic;
  margin-bottom: 10px;
  margin-top: 50px;
}

.kaffeetext {
  color: white;
}

.welcome {
  font-size: 20px;
  color: white;
  font-size: 18px;
  margin-top: 15px;
}

.hello {
  font-size: 40px;
  margin: 0px 0px 50px 0.4em;
}
.helloText {
  align-self: center;
  padding: 1em;
}

.home {
  max-width: 1200px;
  margin: auto;
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

.totalWidth {
  flex: 1 100%;
}
.width50 {
  flex: 1 50%;
}

.alignCenter {
  text-align: center;
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