<template>
  <div class="home">
    <cloud class="cloudText alignCenter"> </cloud>
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

    <div class="row house">
      <!-- roof -->
      <div class="roof col-12">
        <div class="wall brickzinne"></div>
        <div class="wall brickzinne"></div>
        <div class="wall brickzinne"></div>
        <div class="wall brickzinne"></div>
        <div class="wall brickzinne"></div>
        <div class="wall brickzinne"></div>
        <div class="wall brickzinne"></div>
        <div class="wall brickzinne"></div>
      </div>
      <!-- end roof -->
      <div class="wall col-12">
        <div class="row">
          <div class="col-12">
            <div class="slot contentSign">
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
                    :breakpoints="[
                      { maxWidth: 630, width: 500 },
                      { maxWidth: 500, width: 400 },
                    ]"
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
            </div>
          </div>
        </div>
        <div class="row mt-5">
          <div class="col-12 col-md-6 col-xl-3 d-flex justify-content-center">
            <div class="slot contentWindow contentWindow1">
              <div class="window">
                <a href="https://github.com/bassdman"
                  >Meine<br />Github-Projekte</a
                >
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-xl-3 d-flex justify-content-center">
            <div class="slot contentWindow contentWindow2">
              <div class="window">
                <nuxt-link to="/lebenslauf"
                  >Mein<br />(Arbeits-)Leben
                </nuxt-link>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-xl-3 d-flex justify-content-center">
            <div class="slot contentWindow contentWindow3">
              <div class="window">
                <nuxt-link prefetch to="/spieleschmiede"
                  >Spieleschmiede</nuxt-link
                >
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-xl-3 d-flex justify-content-center">
            <div class="slot contentWindow contentWindow4">
              <div class="window"></div>
            </div>
          </div>
        </div>
        <div class="row mt-5">
          <div
            class="col-12 col-md-6 col-lg-4 col-xl-2 order-lg-4 d-flex align-items-end justify-content-center"
          >
            <div class="slot contentFooter contentFooter1">
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
            </div>
          </div>
          <div
            class="col-12 col-md-6 col-xl-2 d-flex order-lg-1 align-items-end justify-content-center"
          >
            <div class="slot contentFooter contentFooter2">
              <sign
                link="/impressum"
                width="250"
                boards="3"
                class="footer2"
                stablaenge="0"
                :breakpoints="[
                  { maxWidth: 520, width: 450 },
                  {
                    maxWidth: 1199,
                    minWidth: 521,
                    kettenlaenge: 85,
                  },
                  { minWidth: 1200, stablaenge: 50 },
                ]"
                >Impressum</sign
              >
            </div>
          </div>
          <div
            class="col-12 col-lg-4 d-flex justify-content-center order-5 order-lg-3 order-xl-2"
          >
            <div class="slot contentFooter contentDoor"></div>
          </div>
          <div
            class="col-12 col-md-6 col-xl-2 d-flex order-lg-1 align-items-end justify-content-center"
          >
            <div class="slot contentFooter contentFooter3">
              <sign
                link="/datenschutz"
                width="210"
                boards="3"
                class="footer3"
                stablaenge="0"
                :breakpoints="[
                  { maxWidth: 520, width: 450 },
                  {
                    maxWidth: 1199,
                    minWidth: 521,
                    kettenlaenge: 85,
                    width: 250,
                  },
                  { minWidth: 1200, stablaenge: 50 },
                ]"
                >Datenschutz</sign
              >
            </div>
          </div>
          <div
            class="col-12 col-md-6 col-lg-4 col-xl-2 d-flex order-lg-2 align-items-end justify-content-center"
          >
            <div class="slot contentFooter contentFooter4">
              <sign
                width="200"
                boards="2"
                stablaenge="0"
                class="footer4"
                :breakpoints="[
                  { maxWidth: 520, width: 450 },
                  {
                    maxWidth: 1040,
                    minWidth: 521,
                    kettenlaenge: 90,
                    width: 250,
                  },
                ]"
              >
                <div class="infosign">
                  <div>v&nbsp;{{ version }}</div>
                </div>
              </sign>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Cloud from "../components/atoms/Cloud.vue";
import Sign from "../components/atoms/Sign.vue";
import { version } from "@/package.json";

export default {
  name: "home",
  components: {
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
      link: [{ rel: "canonical", href: "https://www.manuelgelsen.de" }],
    };
  },
};
</script>

<style scoped>
.house{
    position: absolute;
    top: 90vh;
}
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

.window {
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
  flex-wrap: wrap;
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

.contentSign {
  margin-top: 116px;
  width: 100%;
}
.contentDoor {
  width: 350px;
  height: 350px;
  background: url("~assets/tor.webp");
  background-size: cover;
  color: white;
}

.contentWindow1 {
  background: url("~assets/fenster1.webp");
}
.contentWindow2 {
  background: url("~assets/fenster2.webp");
}
.contentWindow3 {
  background: url("~assets/fenster3.webp");
}
.contentWindow4 {
  background: url("~assets/fenster4.webp");
}

.contentWindow {
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background-size: 200px 200px;
}

@media screen and (min-width: 800px) {
  .contentWindow {
    width: 300px;
    background-size: 300px 300px;
    height: 300px;
  }
}

.wall,
.brick {
  background: url("~assets/housetexture.webp"); 
}

.roof {
  display: flex;
  justify-content: space-between;
  width: 100%;
  min-width: 100px;
  margin-top: -80px;
  overflow: hidden;
}

.brickzinne {
  margin-left: 20px;
  margin-right: 15px;
  height: 87px;
  width: 110px;
  min-width: 100px;
}
</style>