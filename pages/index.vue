<template>
  <div class="home">
    <cloud fontsize="small" class="cloudText alignCenter">
        Icons von<br>
        <a
          href="https://www.flaticon.com/de/autoren/wanicon"
          title="wanicon"
        >wanicon</a> <br>auf<br>
        <a href="https://www.flaticon.com/de/" title="Flaticon">www.flaticon.com</a>
      </cloud>
    <h1 class="welcome">Aaaaah, frische Landluft :)</h1>
    <h1 class="welcomeSubtitle">Moooment, was sehe ich denn da unten?</h1>

    <Castle class="castle"></Castle>
    <div class="content" id="content">
      <div class="bildich" :class="{flicker:lightOn, visibilityHidden:!lightOn}"></div>
      <div class="signcontainer">
        <sign :width="boardwidth" boards="6" stablaenge="0" kettenlaenge="150" class="sign">
          <div>
            <div class="name pretext totalWidth alignCenter">Manuel Gelsen</div>
            <div
              class="description pretext totalWidth alignCenter"
            >Webdesigner, Querdenker und noch vieles mehr</div>
          </div>
        </sign>
      </div>
    </div>
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
    }
  },
  created() {
    this.blockRouteEvent = false;
    this.$store.commit("background/setSrc", require("~/assets/berge.jpg"));
    this.$store.commit(
      "background/figcaption",
      `Hintergrund:<br>Privates Photo<br><br>`
    );

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
            "Was frische Landluft alles bewirkt... Das ist also die offizielle Website von Manuel Gelsen, 30 Jahre, aus Fürth...? Hier ist ja noch alles eine Baustelle. Zeit mal, dem auf den Grund zu gehen."
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
  position: sticky;
  top: -87px;
}

.content {
  max-width: 1200px;
  margin: auto;
  /*background: rgba(0, 0, 0, 0.8);*/
  color: white;
  padding: 0px 1em 1em 1em;
  display: flex;
  flex-wrap: wrap;
  min-height: 100vh;
  justify-content: center;
  border: 1px solid transparent; /*notwendig wg. eines bugs in chrome. ja, richtig gehört: chrome.*/
}

.cloudText{
  color: gray;
  margin-top: -30px;
}

.cloudText a {
  color: gray;
}


@media screen and (min-width: 900px) {
  .content {
    max-width: calc(100% - 360px);
  }

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