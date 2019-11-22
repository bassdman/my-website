<template>
  <div class="home">
    <h1 class="welcome">Aaaaah, frische Landluft :)</h1>
    <h1 class="welcomeSubtitle">Moooment, was sehe ich denn da unten?</h1>
  
    <Castle class="castle"></Castle>
    <div class="content" id="content">
      <div class="bildich" :class="{flicker:lightOn, visibilityHidden:!lightOn}"></div>
      <div class="name pretext totalWidth alignCenter">Manuel Gelsen</div>
      <div
        class="description pretext totalWidth alignCenter"
      >Webdesigner, Querdenker und noch vieles mehr</div>

      <p class="introText">
        Schön, dass du da bist. Du bist auf meiner Website gelandet.
        <br />Wir sind nicht im Auenland...? Ja, natürlich, sorry. Da war ich oben etwas zu viel in meinen Träumen.
        <span
          v-if="!lightOn"
        >
          <br />Moment, du siehst mich noch gar nicht. Entschuldigung. Ich habe vergessen, das Licht
          <br />anzumachen. Drücke auf den Schalter auf der rechten Seite rechts - das wird helfen :)
        </span>
        <span v-if="lightOn" class="flicker">
          <br />Gut, dass du das Licht angemacht hast. Es war so düster und unheimlich... schon fast creepy.
          <br />
          <br />
        </span>
      </p>

      <nuxt-link to="/kaffee" class="kaffeeblock totalWidth">
        <div class="kaffee kaffeeHeadline">Kaffeeeeeeeee...?</div>
        <Coffeecup class="coffeecup"></Coffeecup>
        <div class="kaffee kaffeetext">
          Nur das Beste für unsere Gäste - auch für dich.
          <br />Es wäre schon fast traurig, wenn du unseren Kaffee nicht probieren möchtest.
        </div>
      </nuxt-link>

      <div class="wasWissen">
        <h2 class="headline">Projekte</h2>Kommen wir nun zum interessanten Teil. Du erfährst alles über meine inneren Abgründe und Berge und... Na ja, so weit jetzt nicht.
        <br />Was möchtest du wissen?
        <div>
          <div>Welches Instrument spielst du?</div>
          <div>Bei was für Projekten hast du so mitgewirkt?</div>
          <div>Erzähl mal was über dich</div>
        </div>
      </div>
      <div class="wasWissen" v-if="false">
        Was möchtest du von mir wissen?
        - geige
        - Projekte (Podcast / Luitpoldhainfilm)
        - lebenslauf
        - Github
        - Martinas Website
      </div>
      <div
        class="imAufbau"
      >Diese Seite ist noch in Bearbeitung, wird aber bald in voller Bl&uuml;te erstrahlen.</div>
    </div>
  </div>
</template>

<script>
import Coffeecup from "../components/atoms/Coffeecup.vue";
import Castle from "../components/atoms/Castle.vue"

export default {
  name: "home",
  components: {
    Coffeecup,
    Castle
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
  computed: {
    lightOn() {
      return this.$store.state.light.on;
    }
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
    self.$store.commit("header/show", getContentPosition() < -100);
    document.body.onscroll = function(e) {
      if (self.blockRouteEvent) return;
      self.$store.commit("header/show", getContentPosition() < -100);
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
.welcome,
.welcomeSubtitle {
  color: white;
  display: block;
  text-align: center;
}
.welcome {
  font-size: 60px;
  margin-top: 40vh;
}
.welcomeSubtitle {
  font-size: 30px;
  margin-top: -20px;
}

.headline {
  flex: 1 100%;
  text-align: center;
  margin-top: 2em;
  margin-left: 15px;
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

.castle{
    margin-top: 45vh;
}

.content {
  max-width: 1200px;
  margin: auto;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 0px 1em 1em 1em;
  display: flex;
  flex-wrap: wrap;
  min-height: 100vh;
  justify-content: center;
  border: 1px solid transparent; /*notwendig wg. eines bugs in chrome. ja, richtig gehört: chrome.*/
}

@media screen and (min-width: 900px){
  .content{
    max-width: calc(100% - 360px);
  }
}

/*Halbkreis*/
.content::before {
  height: 220px;
    background: #888888;
    width: 220px;
    border-radius: 110px;
    margin-top: -115px;
    content: "";
    position: absolute;
    box-shadow: inset 0px 0px 22px 26px #777777;
}

.pretext {
  text-align: center;
}

.name {
  font-size: 30px;
  font-weight: bold;
  flex: 1 100%;
  margin-top: 0.5em;
}

.description {
  font-size: 20px;
  flex: 1 100%;
  margin-top: 0.5em;
}

.coffeecup {
  align-self: center;
}

.kaffeeblock {
  text-decoration: none;
  margin-top: 50px;
}

.kaffee {
  display: block;
}

.kaffeeblock {
  display: flex;
  flex-direction: column;
}
.kaffeeHeadline {
  color: #8b4513;
  font-size: 30px;
  font-style: italic;
  margin-bottom: 10px;
  text-align: center;
}

.kaffeetext {
  color: white;
  text-align: center;
  margin-top: 30px;
}

.introText {
  align-self: center;
  text-align: center;
  padding: 1em;
  font-size: 13px;
}

.bildich {
  width: 200px;
  height: 200px;
  border-radius: 200px;
  box-shadow: 0 0 10px 4px black;
  margin-top: -104px;
  background: url("~assets/ich1.jpg");
  background-size: cover;
  display: block;
  z-index: 1;
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