<template>
  <footer v-bind:class="{ bgWhite: hasBackground }">
      <router-link to="/impressum">Impressum</router-link> |
      <router-link to="/datenschutz">Datenschutz</router-link>
      <span class="version">v {{version}}</span>
  </footer>
</template>

<script>
import {version} from '../../package.json';

export default {
  name: 'footerElem',
  data() {
    return {
      version,
      hasBackground: this.$route.meta.footerWithBackground == true
    }
  }
};
</script>

<style>
    footer{
        text-align:center;
        padding-top: 50px;
    }
    .version{
      margin-left: 30px;
      font-size: smaller;
    }
    .bgWhite{
      background: white;
    }
</style>