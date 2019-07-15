<template>
  <footer>
      <nuxt-link class="colorWhite" to="/impressum">Impressum</nuxt-link> |
      <nuxt-link class="colorWhite" to="/datenschutz">Datenschutz</nuxt-link>
      <span class="version fontSizeSmaller">v {{version}} | </span>
      <span class="fontSizeSmaller colorWhite" v-html="$store.state.background.figCaption"></span>
  </footer>
</template>

<script>
import {version} from '../package.json';

export default {
  name: 'footerElem',
  data() {
    return {
      version,
    }
  }
};
</script>

<style>
    footer{
        text-align:center;
        padding-top: 50px;
        color: white;
        padding: 1em;
        padding-top: 2em;
    }
    .version{
      margin-left: 30px;
    }
    .colorWhite, .colorWhite a{
      color: white;
    }

    .fontSizeSmaller{
      font-size: smaller;
    }
</style>