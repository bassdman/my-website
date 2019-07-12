<template>
  <div>
    <headerElem></headerElem>
    <nuxt />
    <FooterElem></FooterElem>
  </div>
</template>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

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
import HeaderElem from "@/components/Header.vue";
import FooterElem from "@/components/Footer.vue";

export default {
  components: {
    HeaderElem,
    FooterElem
  }
};
</script>