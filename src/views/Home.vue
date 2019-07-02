<template>
  <div class="home">
    <div class="background"></div>
    <div class="content" id="content">
      <div class="welcome">
        <p class="welcomeHeader">Herzlich willkommen.</p>
      <p>Ich heiße Manuel Gelsen, bin seit 2014 Webdesigner- / Entwickler im Großraum Nürnberg <br>und mache sonst noch vieles mehr.</p>
      <p>
        Hier erfährst du mehr über mich: 
        </p>
        <p><router-link to="/lebenslauf" class="ueberMich">Über mich</router-link></p>
      </div>
      <div class="name pretext">Manuel Gelsen</div>
      <div class="description pretext">Webdesigner, Querdenker und noch vieles mehr</div>
      <div
        class="imAufbau"
      >Diese Seite ist noch in Bearbeitung, wird aber bald in voller Bl&uuml;te erstrahlen.</div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { dataBus } from "../main";

export default {
  name: "home",
  created() {
    const instance = dataBus;
    dataBus.$on("trigger:contentPositionTop", () => {
      const positionTop = document
        .getElementById("content")
        .getBoundingClientRect().top;
      dataBus.$emit("update:contentPositionTop", positionTop);
    });

    window.document.body.onscroll = function(e) {
      dataBus.$emit("trigger:contentPositionTop");
    };
  },
  metaInfo: {
    // Children can override the title.
    title: "Webdesigner, Querdenker und noch vieles mehr",
    // Result: My Page Title ← My Site
    // If a child changes the title to "My Other Page Title",
    // it will become: My Other Page Title ← My Site
    titleTemplate: "Manuel Gelsen | %s",
    // Define meta tags here.
    meta: [
      { "http-equiv": "Content-Type", content: "text/html; charset=utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "language", content: "de" },
      {
        name: "description",
        content:
          "Die pers&ouml;nliche Website von Manuel Gelsen, 90706 F&uuml;rth | Webdesigner, Querdenker, Stabiler 30er und noch vieles mehr."
      },
      { name: "robots", content: "index,follow" }
    ],
    link: [{ rel: "canonical", href: "https://www.manuelgelsen.de" }]
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
  margin-top: 90vh;
  min-height: 100vh;
  border: 1px solid transparent; /*notwendig wg. eines bugs in chrome. ja, richtig gehört: chrome.*/
}

.background {
  background: url(/img/startseite.e5fd3e82.jpg);
  min-height: 100vh;
  top: 0px;
  right: 0px;
  left: 0px;
  position: fixed;
  z-index: -1;
}

.pretext{
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

.welcome{
  position: absolute;;
  top: 5vh;
  left: 50px;
  font-size: 20px;
  color: white;
  font-size: 18px;
}

.welcomeHeader{
  font-size: 40px;
}
.ueberMich{
  text-decoration: none;
  background: lightcoral;
  padding: 0.5em 1em;
  font-weight: bold;
}
</style>