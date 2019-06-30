<template>
  <div class="home">
    <figure>
        <img alt="teaser" src="../assets/startseite.jpg">
    </figure>
  <div class="imAufbau">
    Diese Seite ist noch in Bearbeitung, wird aber bald in voller Blüte erstrahlen.
  </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
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