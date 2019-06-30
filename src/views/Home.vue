<template>
  <div class="home">
    <figure>
        <img alt="teaser" src="../assets/startseite.jpg">
    </figure>
  <div class="imAufbau">
    Diese Seite ist noch in Bearbeitung, wird aber bald in voller Bl&uml;te erstrahlen.
  </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  metaInfo: {
    // Children can override the title.
    title: 'Webdesigner, Querdenker und noch vieles mehr',
    // Result: My Page Title ← My Site
    // If a child changes the title to "My Other Page Title",
    // it will become: My Other Page Title ← My Site
    titleTemplate: 'Manuel Gelsen | %s',
    // Define meta tags here.
    meta: [
      {"http-equiv": 'Content-Type', content: 'text/html; charset=utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {name: 'language', content: 'de'},
      {name: 'description', content: 'Die pers&ouml;nliche Website von Manuel Gelsen, 90706 F&uuml;rth | Webdesigner, Querdenker, Stabiler 30er und noch vieles mehr.'},
      {name: 'robots', content: 'index,follow'}
    ],
    link: [{ rel: "canonical", href: "https://www.manuelgelsen.de" }]
  }
};
</script>

<style>
  figure{
    margin: 0px;
    height: 100vh;
    overflow: hidden;
  }

  img{
    margin-top: -100px;
  }
  .imAufbau{
    padding: 5em;
    background: #ffa5009e;
    font-weight: bold;
    border-radius: 5px;
    text-align: center;
    margin: 5em;
  }
</style>