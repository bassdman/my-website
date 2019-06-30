<template>
  <div id="app">
    <headerElem></headerElem>
    <router-view/>
    <FooterElem></FooterElem>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.gbSiteContent{
  max-width: 1200px;
  padding: 0 5em;
  margin: auto;
}
</style>

<script>
// @ is an alias to /src
import HeaderElem from '@/components/Header.vue';
import FooterElem from '@/components/Footer.vue';

export default {
  components: {
    HeaderElem,
    FooterElem,
  },
};
</script>
