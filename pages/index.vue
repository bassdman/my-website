<template>
  <div class="home">
    <cloud type="2" fontsize="small" class="cloudText alignCenter" v-bind:background="cloudbackground">
      <br>Wohin zieht
      <br />diese Wolke?
    </cloud>
    <cloud :type="4" fontsize="small" class="cloudText alignCenter" v-bind:background="cloudbackground">
      <a href="https://github.com/bassdman"> <br>Auf zu meinen <br>Github-Projekten</a>
    </cloud>
    <cloud :type="1" fontsize="small" class="cloudText alignCenter" v-bind:background="cloudbackground">
      <nuxt-link to="/lebenslauf">
          <br>Mein (Arbeits-)Leben
        </nuxt-link>
    </cloud>
    <h1 class="welcome" v-if="!$store.state.light.on">Was für eine schöööne Nacht :)</h1>
    <h1 class="welcomeSubtitle" v-if="!$store.state.light.on">Zeit, mal die Sterne zu zählen</h1>
    <h1 class="welcome" v-if="$store.state.light.on">Waah, es ist so hell!!!</h1>
    <h1 class="welcomeSubtitle" v-if="$store.state.light.on">Wer hat das Licht angemacht?</h1>

    <Castle class="castle">
      <div class="content" id="content">
        <div class="bildich" :class="{flicker:lightOn, visibilityHidden:!lightOn}"></div>
        <div class="signcontainer">
          <sign :width="boardwidth" boards="6" stablaenge="0" kettenlaenge="150" class="sign">
            <div>
              <div class="name pretext totalWidth alignCenter">Manuel Gelsen</div>
              <div
                class="description pretext totalWidth alignCenter"
              >Webdesigner, Träumer und vieles mehr</div>
            </div>
          </sign>
        </div>
        <nuxt-link prefetch to="/spieleschmiede">Spieleschmiede</nuxt-link>
      </div>
    </Castle>
  </div>
</template>

<script>
import Coffeecup from "../components/atoms/Coffeecup.vue";
import Cloud from "../components/atoms/Cloud.vue";
import Castle from "../components/atoms/Castle.vue";
import Sign from "../components/atoms/Sign.vue";
import { version } from "@/package.json";

export default {
  name: "home",
  components: {
    Coffeecup,
    Castle,
    Sign,
    Cloud
  },
  layout: "noheader",
  beforeRouteLeave(to, from, next) {
    this.blockRouteEvent = true;
    next();
  },
  data() {
    return {
      showPortrait: false,
      version
    };
  },
  computed: {
    lightOn() {
      return this.$store.state.light.on;
    },
    boardwidth() {
      if (!process.client) return 600;

      const width = document.documentElement.clientWidth;

      if (width > 600) return 600;

      if (width > 400) return width - 100;

      return width - 20;
    },
    cloudbackground() {
      if (this.$store.state.light.on) return "white";
      else return "#888888";
    }
  },
  created() {
    this.blockRouteEvent = false;
    this.$store.commit("background/bgcolor", "#00dcffe0");
    this.$store.commit("sidebar/show", true);
    this.$store.commit("header/show", false);
    if (!process.client) return 0;
  },
  head() {
    return {
      title: "Webdesigner, Träumer und vieles mehr",
      titleTemplate: "Manuel Gelsen | %s",
      meta: [
        {
          name: "description",
          content:
            "Was frische Landluft alles bewirkt... Das ist also die offizielle Website von Manuel Gelsen, 30 Jahre, aus Fürth...! Was gibt es hier zu entdecken? Zeit, dem mal auf den Grund zu gehen."
        },
        { name: "robots", content: "index,follow" }
      ],
      link: [
        { rel: "canonical", href: "https://www.manuelgelsen.de" },
        { rel: "manifest", href: "/manifest.json" }
      ]
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

.signcontainer {
  width: 100%;
  text-align: center;
  z-index: 1;
  position: sticky;
  margin-bottom: 325px;
  top: -63px;
}
.sign {
  z-index: 1;
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

.castle {
  margin-top: 45vh;
}

.content {
  margin: auto;
  color: white;
  padding: 0px 1em 1em 1em;
  display: flex;
  flex-wrap: wrap;
  min-height: 100vh;
  justify-content: center;
  border: 1px solid transparent; /*notwendig wg. eines bugs in chrome. ja, richtig gehört: chrome.*/
}

.cloudText {
  color: black;
  margin-top: -30px;
}

.cloudText a {
  color: black;
}

@media screen and (min-width: 900px) {
  .signcontainer {
    margin-bottom: 500px;
  }
}

/*Halbkreis*/
.content::before {
  height: 220px;
  background: #dddddd;
  width: 220px;
  border-radius: 110px;
  margin-top: -115px;
  content: "";
  position: absolute;
  box-shadow: inset 0px 0px 22px 26px #cccccc;
}

.pretext {
  text-align: center;
}

.name {
  font-size: 30px;
  font-weight: bold;
  font-family: Admiration Pains;
}

.description {
  font-size: 20px;
  margin-top: 0.5em;
  font-family: Brushed;
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
  background: url("~assets/ich-neu.png");
  background-size: 130%;
  background-position: -55px -7px;
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