<template>
  <footer>
      <router-link to="/impressum">Impressum</router-link> |
      <router-link to="/datenschutz">Datenschutz</router-link>
  </footer>
</template>

<script>

export default {
  name: 'footerElem',
};
</script>

<style>
    footer{
        text-align:center;
        margin-top: 50px;
    }
</style>