<template>
  <footer>
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
      version
    }
  }
};
</script>

<style>
    footer{
        text-align:center;
        margin-top: 50px;
    }
    .version{
      margin-left: 30px;
      font-size: smaller;
    }
</style>