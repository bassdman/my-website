<template>
  <div class="home">
    <cloud
      type="1"
      fontsize="small"
      class="cloudText alignCenter"
      v-bind:background="cloudbackground"
    >
      <br />Wohin zieht <br />diese Wolke?
    </cloud>
    <h1 class="welcome" v-if="!$store.state.light.on">
      Was für eine schöööne Nacht :)
    </h1>
    <h1 class="welcomeSubtitle" v-if="!$store.state.light.on">
      Zeit, mal die Sterne zu zählen
    </h1>
    <h1 class="welcome" v-if="$store.state.light.on">
      Waah, es ist so hell!!!
    </h1>
    <h1 class="welcomeSubtitle" v-if="$store.state.light.on">
      Wer hat das Licht angemacht?
    </h1>

    <House class="castle">
      <template v-slot:sign>
        <div class="content" id="content">
          <div
            class="bildich"
            :class="{ flicker: lightOn, visibilityHidden: !lightOn }"
          ></div>
          <div class="signcontainer">
            <sign
              :width="600"
              boards="6"
              stablaenge="0"
              kettenlaenge="150"
              class="sign"
              :breakpoints="[{maxWidth:630,width:500},{maxWidth:500,width:400}]"
            >
              <div>
                <div class="name pretext totalWidth alignCenter">
                  Manuel Gelsen
                </div>
                <div class="description pretext totalWidth alignCenter">
                  Webdesigner, Träumer und vieles mehr
                </div>
              </div>
            </sign>
          </div>
        </div>
      </template>
      <template v-slot:window1>
        <div class="window"><a href="https://github.com/bassdman">Meine<br>Github-Projekte</a></div>
      </template>
      <template v-slot:window2>
        <div class="window">
          <nuxt-link to="/lebenslauf">Mein<br>(Arbeits-)Leben </nuxt-link>  
        </div>
      </template>
      <template v-slot:window3>
        <div class="window">
          <nuxt-link prefetch to="/spieleschmiede">Spieleschmiede</nuxt-link>
        </div>   
      </template>
      <template v-slot:window4>
        <div class="window">
          
        </div>
      </template>
      <template v-slot:footer1>
        <sign
          width="200"
          stablaenge="0"
          boards="4"
          class="footer1"
          :breakpoints="[
            { maxWidth: 520, width: 450 },
            {
              maxWidth: 1040,
              minWidth: 521,
              kettenlaenge: 85,
              width: 250,
            },
          ]"
        >
          <div class="iconreference">
            Icons erstellt von
            <a
              href="https://www.flaticon.com/de/autoren/those-icons"
              title="Those Icons"
              >Those Icons</a
            >
            und
            <a
              href="https://www.flaticon.com/de/autoren/wanicon"
              title="wanicon"
              >wanicon</a
            >
            auf
            <a href="https://www.flaticon.com/de/" title="Flaticon">
              www.flaticon.com</a
            >
          </div>
        </sign>
      </template>
      <template v-slot:footer2>
        <sign
          link="/impressum"
          width="250"
          boards="3"
          class="footer2"
          stablaenge="0"
          :breakpoints="[
            { maxWidth: 520, width: 450 },
            {
              maxWidth: 1040,
              minWidth: 521,
              kettenlaenge: 85,
            },
          ]"
          >Impressum</sign
        >
      </template>
      <template v-slot:footer3>
        <sign
          link="/datenschutz"
          width="210"
          boards="3"
          class="footer3"
          stablaenge="0"
          :breakpoints="[
            { maxWidth: 520, width: 450},
            {
              maxWidth: 1040,
              minWidth: 521,
              kettenlaenge: 85,
              width: 250,
            },
            { minWidth: 1255, stablaenge: 50}
          ]"
          >Datenschutz</sign
        >
      </template>
      <template v-slot:footer4>
        <sign
          width="200"
          boards="2"
          stablaenge="0"
          class="footer4"
          :breakpoints="[
            { maxWidth: 520, width: 450 },
            { maxWidth: 1040, minWidth: 521, kettenlaenge: 90,width:250 },
            { minWidth: 1255, stablaenge: 50}
          ]"
        >
          <div class="infosign">
            <div>v&nbsp;{{ version }}</div>
          </div>
        </sign>
      </template>
      <template v-slot:door>
       <div>
         
       </div>
      </template>
    </House>
  </div>
</template>

<script>
import Coffeecup from "../components/atoms/Coffeecup.vue";
import Cloud from "../components/atoms/Cloud.vue";
import House from "../components/atoms/House.vue";
import Sign from "../components/atoms/Sign.vue";
import { version } from "@/package.json";

export default {
  name: "home",
  components: {
    Coffeecup,
    House,
    Sign,
    Cloud,
  },
  layout: "noheader",
  beforeRouteLeave(to, from, next) {
    this.blockRouteEvent = true;
    next();
  },
  data() {
    return {
      showPortrait: false,
      version,
    };
  },
  computed: {
    lightOn() {
      return this.$store.state.light.on;
    },
    cloudbackground() {
      if (this.$store.state.light.on) return "white";
      else return "#888888";
    },
  },
  created() {
    this.blockRouteEvent = false;
    this.$store.commit("background/bgcolor", "#00dcffe0");
    this.$store.commit("sidebar/show", true);
  },
  head() {
    return {
      title: "Webdesigner, Träumer und vieles mehr",
      titleTemplate: "Manuel Gelsen | %s",
      meta: [
        {
          name: "description",
          content:
            "Was frische Landluft alles bewirkt... Das ist also die offizielle Website von Manuel Gelsen, 30 Jahre, aus Fürth...! Was gibt es hier zu entdecken? Zeit, dem mal auf den Grund zu gehen.",
        },
        { name: "robots", content: "index,follow" },
      ],
      link: [
        { rel: "canonical", href: "https://www.manuelgelsen.de" },
        { rel: "manifest", href: "/manifest.json" },
      ],
    };
  },
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

.window{
  text-align: center;
}
.window a,
.window a:visited {
  color: white;
  font-weight: bold;
}

.sign {
  z-index: 1;
}

.castle {
  margin-top: 45vh;
}

.content {
  margin: auto;
  color: white;
  display: flex;
  flex-wrap:wrap;
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

.footer1,
.footer2,
.footer3,
.footer4 {
  white-space: normal;
  color: white;
  text-align: center;
  vertical-align: middle;
}

.signcontainer {
  margin-top: 50px;
  width: 100%;
}

@media screen and (min-width: 521px) and (max-width: 1040px) {
  .signcontainer {
    width: inherit;
  }
  .footer4 {
    margin-bottom: 20px;
  }
}

@media screen and (min-width: 900px) {
  .signcontainer {
    margin-bottom: 500px;
    width: 100%;
    margin-left: calc(50% - 300px);
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